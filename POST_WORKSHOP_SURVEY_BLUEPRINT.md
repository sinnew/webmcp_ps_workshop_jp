# Google Partner Summit 2026 — Post-Workshop Survey Blueprint & 1-Click Form Generator

> **Workshop Title**: Architecting Web Applications for the Agentic Era: Built-in AI & WebMCP  
> **Target Audience**: Japan Enterprise Engineering Partners (Rakuten, Mercari, note, pixiv, CyberAgent, LINE Yahoo)  
> **Purpose**: Measure technical CSAT, identify partner production roadmaps for Chrome 154–156 WebMCP Origin Trials, qualify official `developers.google.com` case study leads, and route API feedback directly to the Chrome WebMCP Engineering team.

---

## 📋 Part 1: Full Bilingual Survey Structure (English + Natural Business Japanese)

### Participant Context (Optional Metadata / 参加者情報)
* **Q0.1: Organization / Company Name (貴社名)**
  * *Type*: Short Text (Optional)
  * *Placeholder*: e.g., Rakuten, Mercari, note, pixiv, CyberAgent, LINE Yahoo
* **Q0.2: Primary Engineering Role (主な担当職種・ロール)**
  * *Type*: Multiple Choice
  * *Options*:
    1. Frontend / Web Application Engineer (フロントエンド / Webアプリケーションエンジニア)
    2. AI / ML / LLM Integration Engineer (AI・機械学習・LLM統合エンジニア)
    3. Software Architect / Tech Lead / Engineering Manager (アーキテクト / テックリード / エンジニアリングマネージャー)
    4. Product Manager / UX Designer (プロダクトマネージャー / UXデザイナー)
    5. Other (その他)

---

### Section 1: Overall Workshop Satisfaction (CSAT & Pace) / 第1部：ワークショップ全体の満足度と進行ペース

* **Q1.1: Overall Workshop Satisfaction (CSAT) / 本ワークショップ全体の総合満足度を教えてください**
  * *Type*: Linear Scale (1 to 5)
  * *Labels*:
    * `1`: Very Dissatisfied (非常に不満)
    * `2`: Dissatisfied (やや不満)
    * `3`: Neutral (普通)
    * `4`: Satisfied (満足)
    * `5`: Extremely Satisfied (非常に満足・強く推奨する)

* **Q1.2: Workshop Pace & Structure / 進行スピード・時間配分（135分）についていかがでしたか？**
  * *Type*: Multiple Choice
  * *Options*:
    1. Just right — balanced pace across concepts and coding (適切だった — 概念解説とハンズオンのバランスが良かった)
    2. Slightly too fast — needed more time for hands-on debugging (やや速すぎた — ハンズオンのデバッグ時間がもう少し欲しかった)
    3. Slightly too slow — wanted to cover more advanced patterns (やや遅すぎた — より高度な応用パターンまで進みたかった)
    4. Too fast — difficult to keep up with the implementation steps (速すぎた — 実装ステップについていくのが難しかった)

* **Q1.3: Theory vs. Hands-On Coding Balance / アーキテクチャ理論とハンズオン実装のバランスはいかがでしたか？**
  * *Type*: Multiple Choice
  * *Options*:
    1. Ideal balance (50% Architecture / 50% Hands-on Code) (理想的 — アーキテクチャ設計とコード実装のバランスが最適だった)
    2. Wanted more hands-on coding & debugging time (ハンズオン実装やデバッグの時間をさらに増やしてほしかった)
    3. Wanted deeper architectural & Chrome internals coverage (アーキテクチャ解説やChrome内部仕様の解説をより深く聞きたかった)

* **Q1.4: Clarity of Chrome 154+ WebMCP API Updates / Chrome 154以降の最新API仕様（`navigator.modelContext.registerTool` 単一API、SPAライフサイクル、スキーマ設計）は明確に理解できましたか？**
  * *Type*: Linear Scale (1 to 5)
  * *Labels*:
    * `1`: Unclear / Confusing (不明確・分かりにくかった)
    * `5`: Crystal Clear & Actionable (非常に明確で、すぐに実装イメージが湧いた)

---

### Section 2: Hands-On Experience & Workshop Modules / 第2部：ハンズオン体験および各モジュールの評価

* **Q2.1: Which Extension Track did you build during the workshop? / ハンズオンでどちらの拡張機能トラックを実装・検証しましたか？**
  * *Type*: Multiple Choice
  * *Options*:
    1. **Track A**: Zero-Permission WebMCP Tool Injector (ゼロ権限で既存ページへWebMCPツールを動的注入する拡張機能)
    2. **Track B**: Local Gemini Nano Side Panel Agent (Chrome Built-in AI `LanguageModel` APIと連携するサイドパネルエージェント)
    3. **Both Track A & Track B** (Track A・Track B の両方を実装・検証した)
    4. Observed / Followed along with the reference implementation (リファレンス実装のコード読解・動作確認を中心に進めた)

* **Q2.2: Which workshop modules or resources were most valuable to you? (Select all that apply) / 特に有益だったモジュールやリソースをすべて選択してください（複数選択可）**
  * *Type*: Checkboxes (Multi-select)
  * *Options*:
    1. **Google Store Repair Case Study (`-56.2%` Token Reduction & 3-Tool Architecture)** (Google Store 修理予約の事例研究：トークン56.2%削減と3ツール設計パターン)
    2. **1-Click AI Prompts Cheat Sheet (Gemini / Claude / Jetski Prompt Templates)** (1クリックで使えるAIプロンプト集：ツール設計・JSON Schema生成・監査用プロンプト)
    3. **Live Adversarial Red-Teaming (`red_team_evaluator.js` & Prompt Injection Defense)** (敵対的レッドチーミング実演：プロンプトインジェクション攻撃の遮断と検証)
    4. **Kasper's 5-Point Evaluation Methodology (`VACO` / Verb-Action-Constraint-Object)** (Kasper Kulikowskiの5項目ツール評価手法および `VACO` ツール命名・設計基準)
    5. **Production Guardrails (Human-in-the-Loop Tier 2/3, `outputSchema`, & `AbortSignal`)** (本番運用ガードレール：Human-in-the-Loop 承認フロー、`outputSchema`、SPAクリーンアップ)
    6. **Interactive Protocol & State Machine Visualizer (`protocol_animation.html`)** (インタラクティブ・プロトコル＆ステートマシン可視化ツール)

* **Q2.3: Did you encounter any friction during the Chrome Canary / Gemini Nano / WebMCP setup? / 事前環境構築やハンズオン中に詰まった点・改善点があれば教えてください**
  * *Type*: Paragraph Text (Optional)

---

### Section 3: Production Roadmap & Chrome 154–156 Origin Trial / 第3部：本番導入ロードマップと Chrome 154–156 Origin Trial

* **Q3.1: What is your team's current timeline for evaluating or adopting WebMCP (`document.modelContext`)? / 貴社プロダクトにおける WebMCP (`document.modelContext`) の技術検証・本番導入のタイムラインを教えてください**
  * *Type*: Multiple Choice
  * *Options*:
    1. **Immediate PoC / Prototyping (Q2–Q3 2026 / Within 1–3 months)** (直近1〜3ヶ月以内にPoC・プロトタイプ検証を開始したい)
    2. **H2 2026 Roadmap Evaluation (Within 3–6 months)** (2026年下半期のロードマップで導入・検証を検討したい)
    3. **2027 Long-Term Exploration** (2027年以降の中長期テーマとしてリサーチを継続したい)
    4. **Undecided / Need internal alignment first** (未定 — 社内チームやステークホルダーとの相談が必要)

* **Q3.2: Which Critical User Journeys (CUJs) in your web application are the highest-priority candidates for WebMCP tools? (Select all that apply) / 貴社のWebサービスにおいて、WebMCPツール化の優先度が高いユーザージャーニー（CUJ）を教えてください（複数選択可）**
  * *Type*: Checkboxes (Multi-select)
  * *Options*:
    1. **Multi-Constraint Search & Faceted Filtering** (複数条件での商品・コンテンツ検索および高度な絞り込みフィルタリング)
    2. **Customer Support, Diagnostics & Self-Service Repair Flows** (カスタマーサポート・トラブル診断・自己解決/修理予約フロー)
    3. **E-Commerce Cart, Booking & Reservation Checkout (Human-in-the-Loop Tier 2/3)** (ECカート追加・予約・決済確認などのHuman-in-the-Loopトランザクション)
    4. **Creator & Merchant Authoring Tools (Drafting, Tagging, Publishing)** (クリエイター・出品者向けの記事作成・出品補助・メタデータ自動入力)
    5. **Internal Enterprise Operations & Admin Dashboards** (社内オペレーション・CS管理画面・業務ツールの自動化)
    6. **Other CUJ** (その他)

* **Q3.3: Would your team like direct technical support from Google Web Ecosystem Consulting (WEC) for the Chrome 154–156 Origin Trial? / Chrome 154–156 Origin Trial への参加にあたり、Google WEC チームからの直接的な技術サポート（アーキテクチャレビューやPoC伴走）を希望されますか？**
  * *Type*: Multiple Choice
  * *Options*:
    1. **Yes — We would love 1-on-1 architecture & Origin Trial consultation** (はい — 個別のアーキテクチャ相談・Origin Trial導入サポートを希望する)
    2. **Maybe — Please share the Origin Trial documentation & updates first** (検討中 — まずはOrigin Trialの技術ドキュメントや最新情報を受け取りたい)
    3. **No thank you — We are exploring independently for now** (いいえ — 現時点では自社内での検証を中心に進める)

---

### Section 4: Official Case Study Partnership (`developers.google.com`) / 第4部：Google 公式エンジニアリング事例（Case Study）共同発表について

* **Q4.1: Would your organization be interested in co-authoring an official engineering case study on `developers.google.com` showcasing your WebMCP or Built-in AI implementation? / 貴社での WebMCP または Chrome Built-in AI の検証・導入成果について、`developers.google.com` 等での Google 公式エンジニアリング事例（共同ケーススタディ）としての発表にご関心はありますか？**
  * *Type*: Multiple Choice
  * *Options*:
    1. **Yes — Interested in discussing a joint `developers.google.com` Case Study** (はい — 公式ケーススタディの共同執筆・公開について詳しく話を聞きたい)
    2. **Interested once our PoC / baseline metrics are ready** (興味あり — PoCの検証結果やベースライン指標が出た段階で相談したい)
    3. **Unsure — Need to consult PR / Engineering leadership first** (未定 — 広報やエンジニアリング責任者への確認が必要)
    4. **Not at this time** (現時点では予定していない)

* **Q4.2: Contact Email / Preferred Point of Contact (Optional — for Origin Trial & Case Study follow-up) / フォローアップ用の連絡先メールアドレス（任意：Origin Trialサポート・公式事例のご連絡用）**
  * *Type*: Short Text (Optional)

---

### Section 5: Direct Feedback for Chrome WebMCP Engineering / 第5部：Chrome WebMCP 開発チームへの直接フィードバック

* **Q5.1: What API improvements, SPA router integrations, `outputSchema` capabilities, or DevTools debugging features would make WebMCP easier to adopt in your production stack? / WebMCPの本番導入にあたり、API仕様の改善要望、SPAルーター統合、`outputSchema` 型定義、または Chrome DevTools でのデバッグ機能など、Chrome開発チームへのご要望があれば自由にお書きください**
  * *Type*: Paragraph Text (Optional)

* **Q5.2: Any additional comments, shout-outs, or suggestions for future Google Partner Summit workshops? / その他、講師へのコメントや今後のワークショップで扱ってほしいテーマがあればお聞かせください**
  * *Type*: Paragraph Text (Optional)

---

## ⚡ Part 2: 1-Click Google Apps Script (`createWebMCPWorkshopSurvey()`)

> **Instructions for `synakim`**:
> 1. Open **[script.google.com](https://script.google.com)** in your browser and click **New project** (新しいプロジェクト).
> 2. Replace the default `Code.gs` contents with the script below.
> 3. Click **Run** (`createWebMCPWorkshopSurvey`) at the top toolbar.
> 4. Approve the standard Google Forms authorization prompt when asked.
> 5. Open the **Execution log** (実行ログ) at the bottom — you will see both the **Published Live Form URL** (to paste into `survey.html`) and the **Form Editor URL**!

```javascript
/**
 * 1-Click Google Form Generator for Google Partner Summit 2026 Workshop
 * Workshop: "Architecting Web Applications for the Agentic Era: Built-in AI & WebMCP"
 * Target Audience: Japan Enterprise Engineering Partners (Bilingual EN + JA)
 */
function createWebMCPWorkshopSurvey() {
  var formTitle = "Google Partner Summit 2026: Built-in AI & WebMCP Workshop Survey / 参加後アンケート";
  var form = FormApp.create(formTitle);
  
  form.setDescription(
    "Thank you for attending 'Architecting Web Applications for the Agentic Era: Built-in AI & WebMCP'!\n" +
    "Your feedback directly shapes Chrome 154–156 WebMCP engineering priorities and helps Google Web Ecosystem Consulting (WEC) support your production roadmap.\n\n" +
    "本日は Google Partner Summit 2026『Built-in AI & WebMCP 実践ワークショップ』にご参加いただき誠にありがとうございました！\n" +
    "皆様からのフィードバックは Chrome WebMCP 開発チームへ直接共有され、今後の API 改善および貴社プロダクトの Origin Trial / 公式事例化サポートに活用させていただきます。（所要時間：約3分）"
  );
  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);
  form.setConfirmationMessage(
    "Thank you for your feedback! / ご回答ありがとうございました！\n" +
    "If you requested Chrome 154–156 Origin Trial support or a developers.google.com Case Study consultation, the Google Web Ecosystem Consulting (WEC) team will follow up with you shortly."
  );

  // --- Participant Context ---
  form.addTextItem()
    .setTitle("Q0.1: Organization / Company Name (貴社名)")
    .setHelpText("e.g., Rakuten, Mercari, note, pixiv, CyberAgent, LINE Yahoo (Optional / 任意)")
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle("Q0.2: Primary Engineering Role (主な担当職種・ロール)")
    .setChoiceValues([
      "Frontend / Web Application Engineer (フロントエンド / Webアプリケーションエンジニア)",
      "AI / ML / LLM Integration Engineer (AI・機械学習・LLM統合エンジニア)",
      "Software Architect / Tech Lead / Engineering Manager (アーキテクト / テックリード / EM)",
      "Product Manager / UX Designer (プロダクトマネージャー / UXデザイナー)",
      "Other (その他)"
    ])
    .setRequired(true);

  // --- Section 1: CSAT & Pace ---
  form.addPageBreakItem()
    .setTitle("Section 1: Overall Workshop Satisfaction / 第1部：ワークショップ全体の満足度と進行ペース");

  form.addScaleItem()
    .setTitle("Q1.1: Overall Workshop Satisfaction (CSAT) / 本ワークショップ全体の総合満足度を教えてください")
    .setBounds(1, 5)
    .setLabels("1: Very Dissatisfied (非常に不満)", "5: Extremely Satisfied (非常に満足・強く推奨)")
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Q1.2: Workshop Pace & Structure / 進行スピード・時間配分（135分）についていかがでしたか？")
    .setChoiceValues([
      "Just right — balanced pace across concepts and coding (適切だった — 概念解説とハンズオンのバランスが良かった)",
      "Slightly too fast — needed more time for hands-on debugging (やや速すぎた — ハンズオンのデバッグ時間がもう少し欲しかった)",
      "Slightly too slow — wanted to cover more advanced patterns (やや遅すぎた — より高度な応用パターンまで進みたかった)",
      "Too fast — difficult to keep up with the implementation steps (速すぎた — 実装ステップについていくのが難しかった)"
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Q1.3: Theory vs. Hands-On Coding Balance / アーキテクチャ理論とハンズオン実装のバランスはいかがでしたか？")
    .setChoiceValues([
      "Ideal balance (50% Architecture / 50% Hands-on Code) (理想的 — アーキテクチャ設計とコード実装のバランスが最適だった)",
      "Wanted more hands-on coding & debugging time (ハンズオン実装やデバッグの時間をさらに増やしてほしかった)",
      "Wanted deeper architectural & Chrome internals coverage (アーキテクチャ解説やChrome内部仕様の解説をより深く聞きたかった)"
    ])
    .setRequired(true);

  form.addScaleItem()
    .setTitle("Q1.4: Clarity of Chrome 154+ WebMCP API Updates / Chrome 154以降の最新API仕様（registerTool 単一API、SPAライフサイクル、スキーマ設計）は明確に理解できましたか？")
    .setBounds(1, 5)
    .setLabels("1: Unclear (不明確・分かりにくかった)", "5: Crystal Clear (非常に明確で実装イメージが湧いた)")
    .setRequired(true);

  // --- Section 2: Hands-On & Modules ---
  form.addPageBreakItem()
    .setTitle("Section 2: Hands-On Experience & Workshop Modules / 第2部：ハンズオン体験および各モジュールの評価");

  form.addMultipleChoiceItem()
    .setTitle("Q2.1: Which Extension Track did you build during the workshop? / ハンズオンでどちらの拡張機能トラックを実装・検証しましたか？")
    .setChoiceValues([
      "Track A: Zero-Permission WebMCP Tool Injector (ゼロ権限で既存ページへWebMCPツールを動的注入する拡張機能)",
      "Track B: Local Gemini Nano Side Panel Agent (Chrome Built-in AI LanguageModel APIと連携するサイドパネルエージェント)",
      "Both Track A & Track B (Track A・Track B の両方を実装・検証した)",
      "Observed / Followed along with the reference implementation (リファレンス実装のコード読解・動作確認を中心に進めた)"
    ])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle("Q2.2: Which workshop modules or resources were most valuable to you? (Select all that apply) / 特に有益だったモジュールやリソースをすべて選択してください")
    .setChoiceValues([
      "Google Store Repair Case Study (-56.2% Token Reduction & 3-Tool Architecture) (Google Store 修理予約事例：トークン56.2%削減と3ツール設計)",
      "1-Click AI Prompts Cheat Sheet (Gemini / Claude / Jetski Prompt Templates) (1クリックAIプロンプト集：ツール設計・JSON Schema生成)",
      "Live Adversarial Red-Teaming (red_team_evaluator.js & Prompt Injection Defense) (敵対的レッドチーミング実演：プロンプトインジェクション防御)",
      "Kasper's 5-Point Evaluation Methodology (VACO / Verb-Action-Constraint-Object) (Kasperの5項目ツール評価手法および VACO 命名・設計基準)",
      "Production Guardrails (Human-in-the-Loop Tier 2/3, outputSchema, & AbortSignal) (本番運用ガードレール：Human-in-the-Loop 承認フロー・SPAクリーンアップ)",
      "Interactive Protocol & State Machine Visualizer (protocol_animation.html) (インタラクティブ・プロトコル＆ステートマシン可視化ツール)"
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("Q2.3: Any friction during Chrome Canary / Gemini Nano / WebMCP setup? / 事前環境構築やハンズオン中に詰まった点・改善点があれば教えてください")
    .setRequired(false);

  // --- Section 3: Production Roadmap & Origin Trial ---
  form.addPageBreakItem()
    .setTitle("Section 3: Production Roadmap & Chrome 154–156 Origin Trial / 第3部：本番導入ロードマップと Origin Trial");

  form.addMultipleChoiceItem()
    .setTitle("Q3.1: What is your team's current timeline for evaluating or adopting WebMCP (document.modelContext)? / 貴社プロダクトにおける WebMCP の技術検証・本番導入タイムラインを教えてください")
    .setChoiceValues([
      "Immediate PoC / Prototyping (Q2–Q3 2026 / Within 1–3 months) (直近1〜3ヶ月以内にPoC・プロトタイプ検証を開始したい)",
      "H2 2026 Roadmap Evaluation (Within 3–6 months) (2026年下半期のロードマップで導入・検証を検討したい)",
      "2027 Long-Term Exploration (2027年以降の中長期テーマとしてリサーチを継続したい)",
      "Undecided / Need internal alignment first (未定 — 社内チームやステークホルダーとの相談が必要)"
    ])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle("Q3.2: Which Critical User Journeys (CUJs) in your web application are the highest-priority candidates for WebMCP tools? / 貴社サービスで WebMCP ツール化の優先度が高いユーザージャーニー（CUJ）を教えてください")
    .setChoiceValues([
      "Multi-Constraint Search & Faceted Filtering (複数条件での商品・コンテンツ検索および高度な絞り込みフィルタリング)",
      "Customer Support, Diagnostics & Self-Service Repair Flows (カスタマーサポート・トラブル診断・自己解決/修理予約フロー)",
      "E-Commerce Cart, Booking & Reservation Checkout (Human-in-the-Loop Tier 2/3) (ECカート追加・予約・決済確認などのHuman-in-the-Loopトランザクション)",
      "Creator & Merchant Authoring Tools (Drafting, Tagging, Publishing) (クリエイター・出品者向けの記事作成・出品補助・メタデータ自動入力)",
      "Internal Enterprise Operations & Admin Dashboards (社内オペレーション・CS管理画面・業務ツールの自動化)",
      "Other CUJ (その他)"
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Q3.3: Would your team like direct technical support from Google Web Ecosystem Consulting (WEC) for the Chrome 154–156 Origin Trial? / Chrome 154–156 Origin Trial 参加にあたり、Google WEC チームからの直接的な技術サポートを希望されますか？")
    .setChoiceValues([
      "Yes — We would love 1-on-1 architecture & Origin Trial consultation (はい — 個別のアーキテクチャ相談・Origin Trial導入サポートを希望する)",
      "Maybe — Please share the Origin Trial documentation & updates first (検討中 — まずはOrigin Trialの技術ドキュメントや最新情報を受け取りたい)",
      "No thank you — We are exploring independently for now (いいえ — 現時点では自社内での検証を中心に進める)"
    ])
    .setRequired(true);

  // --- Section 4: Official Case Study Partnership ---
  form.addPageBreakItem()
    .setTitle("Section 4: Official Case Study Partnership (developers.google.com) / 第4部：Google 公式エンジニアリング事例の共同発表");

  form.addMultipleChoiceItem()
    .setTitle("Q4.1: Would your organization be interested in co-authoring an official engineering case study on developers.google.com showcasing your WebMCP or Built-in AI implementation? / developers.google.com での Google 公式エンジニアリング事例（共同ケーススタディ）発表にご関心はありますか？")
    .setChoiceValues([
      "Yes — Interested in discussing a joint developers.google.com Case Study (はい — 公式ケーススタディの共同執筆・公開について詳しく話を聞きたい)",
      "Interested once our PoC / baseline metrics are ready (興味あり — PoCの検証結果やベースライン指標が出た段階で相談したい)",
      "Unsure — Need to consult PR / Engineering leadership first (未定 — 広報やエンジニアリング責任者への確認が必要)",
      "Not at this time (現時点では予定していない)"
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle("Q4.2: Contact Email / Preferred Point of Contact (フォローアップ用連絡先メールアドレス — 任意)")
    .setHelpText("Provide your work email if you requested Origin Trial support or Case Study co-authoring.")
    .setRequired(false);

  // --- Section 5: Direct Feedback for Chrome Engineering ---
  form.addPageBreakItem()
    .setTitle("Section 5: Direct Feedback for Chrome WebMCP Engineering / 第5部：Chrome WebMCP 開発チームへの直接フィードバック");

  form.addParagraphTextItem()
    .setTitle("Q5.1: What API improvements, SPA router integrations, outputSchema capabilities, or DevTools debugging features would make WebMCP easier to adopt in your production stack? / API仕様の改善要望、SPAルーター統合、outputSchema、Chrome DevTools デバッグ機能など Chrome開発チームへのご要望があれば自由にお書きください")
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle("Q5.2: Any additional comments, shout-outs, or suggestions for future Google Partner Summit workshops? / その他、講師へのコメントや今後のワークショップで扱ってほしいテーマがあればお聞かせください")
    .setRequired(false);

  Logger.log("✅ WebMCP Bilingual Workshop Survey Created Successfully!");
  Logger.log("👉 Published Live Form URL (Paste into survey.html): " + form.getPublishedUrl());
  Logger.log("🛠️ Form Editor URL: " + form.getEditUrl());
}
```
