/**
 * Shared Client State & Event Bus (localStorage powered, Bilingual JP/EN)
 */
(function() {
  const CART_KEY = 'webmcp_cart_items';
  const POINTS_KEY = 'webmcp_store_points';
  const LIKES_KEY = 'webmcp_blog_likes';
  const UNLOCKED_KEY = 'webmcp_unlocked_articles';
  const BOOKMARKS_KEY = 'webmcp_gallery_bookmarks';
  const CRM_KEY = 'webmcp_crm_events';

  function t(ja, en) {
    return (window.i18n && typeof window.i18n.t === 'function')
      ? window.i18n.t(ja, en)
      : ja;
  }

  // Seed default data if empty
  if (!localStorage.getItem(POINTS_KEY)) {
    localStorage.setItem(POINTS_KEY, '1420'); // Initial points
  }

  // --- Shopping Cart ---
  function getCart() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch {
      return [];
    }
  }

  function saveCart(items) {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    updateCartUI();
  }

  function addToCart(product) {
    const cart = getCart();
    const existing = cart.find(i => i.id === product.id && i.size === product.size && i.color === product.color);
    if (existing) {
      existing.qty += (product.qty || 1);
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        pointsRate: product.pointsRate || 3,
        size: product.size || '26.5cm',
        color: product.color || 'Black',
        image: product.image,
        qty: product.qty || 1
      });
    }
    saveCart(cart);
    logCRMEvent('SHOPPING', 'CART_ADD', product.name, { price: product.price, qty: product.qty || 1 });
    showToast(t(`🛒 ${product.name} をカートに追加しました`, `🛒 Added ${product.name} to cart`));
  }

  function updateCartQty(index, delta) {
    const cart = getCart();
    if (cart[index]) {
      cart[index].qty += delta;
      if (cart[index].qty <= 0) {
        const removed = cart.splice(index, 1)[0];
        logCRMEvent('SHOPPING', 'CART_REMOVE', removed.name);
      }
      saveCart(cart);
    }
  }

  function clearCart() {
    localStorage.removeItem(CART_KEY);
    updateCartUI();
  }

  function getPoints() {
    return parseInt(localStorage.getItem(POINTS_KEY) || '1420', 10);
  }

  function addPoints(amount) {
    const current = getPoints();
    const updated = current + amount;
    localStorage.setItem(POINTS_KEY, updated.toString());
    logCRMEvent('REWARDS', 'POINTS_EARNED', `+${amount} pt`, { balance: updated });
    return updated;
  }

  function deductPoints(amount) {
    const current = getPoints();
    const updated = Math.max(0, current - amount);
    localStorage.setItem(POINTS_KEY, updated.toString());
    logCRMEvent('REWARDS', 'POINTS_SPENT', `-${amount} pt`, { balance: updated });
    return updated;
  }

  // --- Blog ---
  function getLikes() {
    try { return JSON.parse(localStorage.getItem(LIKES_KEY)) || {}; } catch { return {}; }
  }

  function toggleLike(articleId) {
    const likes = getLikes();
    likes[articleId] = !likes[articleId];
    localStorage.setItem(LIKES_KEY, JSON.stringify(likes));
    const status = likes[articleId] ? 'LIKED' : 'UNLIKED';
    logCRMEvent('BLOG', status, articleId);
    showToast(likes[articleId]
      ? t('❤️ 記事に「スキ」を付けました！', '❤️ Liked this article!')
      : t('🤍 スキを取り消しました', '🤍 Removed like'));
    return likes[articleId];
  }

  function isArticleUnlocked(articleId) {
    try {
      const unlocked = JSON.parse(localStorage.getItem(UNLOCKED_KEY)) || [];
      return unlocked.includes(articleId);
    } catch { return false; }
  }

  function unlockArticle(articleId, price = 500) {
    try {
      const unlocked = JSON.parse(localStorage.getItem(UNLOCKED_KEY)) || [];
      if (!unlocked.includes(articleId)) {
        unlocked.push(articleId);
        localStorage.setItem(UNLOCKED_KEY, JSON.stringify(unlocked));
        logCRMEvent('BLOG', 'ARTICLE_PURCHASED', articleId, { price });
        showToast(t('🔓 有料コンテンツのロックを解除しました！', '🔓 Unlocked paid content!'));
      }
    } catch (e) {
      console.error(e);
    }
  }

  // --- Gallery ---
  function getBookmarks() {
    try { return JSON.parse(localStorage.getItem(BOOKMARKS_KEY)) || {}; } catch { return {}; }
  }

  function toggleBookmark(artId, artTitle) {
    const bookmarks = getBookmarks();
    bookmarks[artId] = !bookmarks[artId];
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
    logCRMEvent('GALLERY', bookmarks[artId] ? 'BOOKMARK_ADD' : 'BOOKMARK_REMOVE', artTitle || artId);
    showToast(bookmarks[artId]
      ? t('🔖 イラストをブックマークしました！', '🔖 Bookmarked artwork!')
      : t('ブックマークを解除しました', 'Removed bookmark'));
    return bookmarks[artId];
  }

  // --- Real-time CRM Event Bus ---
  const crmChannel = typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel('webmcp_crm_stream') : null;

  function logCRMEvent(category, action, label = '', meta = {}) {
    const event = {
      id: 'evt_' + Math.random().toString(36).substring(2, 9),
      timestamp: new Date().toLocaleTimeString('ja-JP', { hour12: false }),
      isoDate: new Date().toISOString(),
      category,
      action,
      label,
      meta,
      path: window.location.pathname
    };

    try {
      const events = JSON.parse(localStorage.getItem(CRM_KEY)) || [];
      events.unshift(event);
      if (events.length > 50) events.pop(); // Keep last 50
      localStorage.setItem(CRM_KEY, JSON.stringify(events));
    } catch (e) {
      console.warn('CRM storage quota exceeded', e);
    }

    if (crmChannel) {
      crmChannel.postMessage(event);
    }
    window.dispatchEvent(new CustomEvent('crm-event-logged', { detail: event }));
  }

  function getCRMEvents() {
    try {
      return JSON.parse(localStorage.getItem(CRM_KEY)) || [];
    } catch {
      return [];
    }
  }

  function clearCRMEvents() {
    localStorage.removeItem(CRM_KEY);
    window.dispatchEvent(new CustomEvent('crm-events-cleared'));
  }

  // --- UI Updates & Toast ---
  function updateCartUI() {
    const cart = getCart();
    const totalCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    document.querySelectorAll('.cart-badge-count').forEach(el => {
      el.textContent = totalCount;
      el.style.display = totalCount > 0 ? 'inline-block' : 'none';
    });
  }

  function showToast(message) {
    let toast = document.querySelector('.webmcp-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'webmcp-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // Log page view event automatically
  document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    const pageTitle = document.title.split('|')[0].trim();
    logCRMEvent('NAVIGATION', 'VIEW_PAGE', pageTitle);
  });

  window.AppStore = {
    getCart,
    addToCart,
    updateCartQty,
    clearCart,
    getPoints,
    addPoints,
    deductPoints,
    getLikes,
    toggleLike,
    isArticleUnlocked,
    unlockArticle,
    getBookmarks,
    toggleBookmark,
    logCRMEvent,
    getCRMEvents,
    clearCRMEvents,
    showToast,
    updateCartUI
  };
})();
