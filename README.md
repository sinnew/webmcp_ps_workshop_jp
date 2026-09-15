# 🛠️ Built-in AI & WebMCP Practical Workshop
**Google Partner Summit 2026 • Hands-on Reference & Diagnostics Hub**

Welcome to the **Built-in AI & WebMCP Practical Workshop** developer portal. This repository contains the standalone diagnostic hub, architecture guides, and reference implementations for attendees building local Gemini Nano autonomous browser agents and WebMCP tool contracts.

---

## 🌐 Quick Access (Hosted Hub & Guides)

* **1. Participant Setup & Diagnostics Hub**: `index.html` (or `participant_hub.html`)
  * Real-time browser environment diagnostics (Chrome Canary version check, WebMCP API availability, Gemini Nano model status).
  * Interactive on-device Gemini Nano download progress monitor.
  * Persistent Chrome Flags checklist with 1-click copy buttons.
  * Multi-agent Modern Web Guidance (MWG) setup guide (Cursor, Claude Code, GitHub Copilot, Antigravity / Project IDX).
  * In-browser WebMCP tool execution console.
* **2. Slide Deck & Step-by-Step Guide**: `workshop_guide.html`
  * Interactive 6-step collapsible guide covering all 20 presentation slides, Google Store (gStore) repair case study, 1-Click AI Prompts Cheat Sheet (Prompts 1–4), and live red-teaming.
* **3. Extension & Built-in AI Field Guide**: `extension_guide.html`
  * Manifest V3 permission matrix: Declarative Tool Injection (Track A) vs. Side Panel AI Agent (Track B).
  * **Chrome 155.0.8052.0+ Breaking Change (PRs #246 & #251)**: `document.modelContext.executeTool(toolName, inputArgs)` now accepts an **optional JavaScript object (`object`)** instead of a serialized `DOMString`.
  * Built-in AI (`LanguageModel`) essential gotchas (standardized top-level API, streaming chunk accumulation, VRAM management).
* **4. Post-Workshop Survey & Origin Trial Sign-Up**: `survey.html`
  * Scannable QR code (`survey_qr.png`), embedded official Google Form, and interactive WebMCP agent feedback submission (`submit_workshop_feedback`).

---

## 🚀 Getting Started

### 1. Prerequisites
1. **Google Chrome Canary** (v154+ required; **v155.0.8052.0+** recommended for PRs [#246](https://github.com/webmachinelearning/webmcp/pull/246) & [#251](https://github.com/webmachinelearning/webmcp/pull/251) where `executeTool()` accepts native JavaScript object arguments): [Download Chrome Canary](https://www.google.com/chrome/canary/)
2. Open `chrome://flags` and configure the following flags:
   * `#enable-webmcp-testing` ➡️ **Enabled**
   * `#prompt-api-tool-use` ➡️ **Enabled**
   * *(Optional)* `#prompt-api-multimodal-input` ➡️ **Enabled**
3. Restart Chrome Canary.

### 2. On-Device Model Check
* Open `chrome://components` in Chrome Canary.
* Locate **Optimization Guide On Device Model** and click **Check for update**.
* Open DevTools Console and verify:
  ```javascript
  await LanguageModel.availability(); // Returns "readily" when ready
  ```

---

## 📚 Official Documentation & Tools

* **Chrome Built-in AI Documentation**: [developer.chrome.com/docs/ai/built-in](https://developer.chrome.com/docs/ai/built-in)
* **WebMCP Specification & Explainer**: [github.com/webmachinelearning/webmcp](https://github.com/webmachinelearning/webmcp)
* **Modern Web Guidance**: [developer.chrome.com/docs/modern-web-guidance/get-started](https://developer.chrome.com/docs/modern-web-guidance/get-started)
* **WebMCP Tool Inspector Extension**: [Chrome Web Store](https://chromewebstore.google.com/detail/webmcp-model-context-tool/gbpdfapgefenggkahomfgkhfehlcenpd)
* **Chrome DevTools MCP Server**: [github.com/ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)

---

## 🇯🇵 日本語概要

本リポジトリは、Google Partner Summit 2026における「**Built-in AI & WebMCP 実践ワークショップ**」の参加者向けポータルです。

* **診断ハブ (`index.html`)**: ご利用のPC環境（Chrome Canary、フラグ設定、Gemini Nano モデルダウンロード状況）をワンクリックで診断・セットアップできます。
* **開発ガイド (`extension_guide.html`)**: Manifest V3 拡張機能の権限設計、Built-in AI APIの最新仕様、およびWebMCPツール実装時の注意点をまとめたリファレンスです。
* **安全上の配慮**: 本ワークショップおよび掲載コードはすべてクライアントサイドの検証を前提としており、本番データベース等への直接アクセスは行いません。
