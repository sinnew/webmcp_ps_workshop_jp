# WebMCP Partner Summit 2026 — Master Specification for 3-Page HTML Workshop Suite

**Target Event**: Google Tokyo Partner Summit 2026 — Built-in AI & WebMCP Hands-On Workshop  
**Target Audience**: Enterprise Technical Leads & Frontend Architects (Rakuten, note, pixiv, CyberAgent)  
**Repository Local Path**: `/usr/local/google/home/synakim/.gemini/jetski/brain/4a649c4c-f3da-41f9-8b23-202654a0be61/scratch/webmcp_ps_workshop_jp/`  
**GitHub Pages URL**: `https://sinnew.github.io/webmcp_ps_workshop_jp/` (Short Link: `https://tinyurl.com/2348o2jf`)  
**Mandatory Security Rule**: **100% External-Safe** (Zero internal Google links, LDAPs, or credentials in public HTML/JS/CSS).

---

## ⚠️ 1. Mandatory Browser & API Baseline: Chrome 154+ (Incorporating Melissa Mitchell's Review)

Per WebMCP expert feedback (**Melissa Mitchell** on Presentation Draft `1qplx8aM6fO7vMkGWN_0R-nnulZELQsk8PM-KYUomyL4`):
* **Chrome 154+ Baseline**: Stable is now on Chrome 154, and recent breaking changes to WebMCP require **Chrome 154+**.
* **Origin Trial Timeline**: The WebMCP Origin Trial runs through the end of the year (**Chrome 154 – Chrome 156**), replacing older `Chrome 149+ / 152` references.
* **Case Study Publication Target**: Because WebMCP is not yet widely available across non-Chromium browsers, official enterprise partner case studies are published on **`developers.google.com` / `developer.chrome.com`** rather than `web.dev`.

### Technical Breaking Changes in Chrome 154+:

1. **Asynchronous Registration (`Promise` Return)**:
   * Starting in Chrome 151+ and stabilized in **Chrome 154+**, `document.modelContext.registerTool()` returns a `Promise` and rejects asynchronously. Synchronous `try/catch` blocks without `await` fail silently.
   * **Mandatory Syntax**: `await document.modelContext.registerTool({ ... }, { signal });`
2. **Fixed `inputSchema` Object Serialization**:
   * Prior to Chrome 154, `document.modelContext.getTools()` returned `inputSchema` as an unparsed JSON string rather than a JavaScript object, causing agents and extensions to see empty schemas. Chrome 154+ properly exposes `inputSchema` as a structured object.
3. **Native Chrome DevTools WebMCP Panel (`Application > WebMCP`)**:
   * Chrome 154+ includes a built-in **WebMCP** inspector panel inside `DevTools (F12) > Application > WebMCP` (left sidebar), which displays registered tools and logs real-time tool invocations without requiring third-party extensions.
4. **Standardized Top-Level `LanguageModel` API**:
   * The legacy `window.ai.languageModel` namespace is deprecated; all code must use `await LanguageModel.create({ ... })`.

---

## 🏛️ 2. The 3-Page HTML Workshop Architecture

All three pages must share a cohesive, responsive Google Material Design 3 / Tokyo Partner Summit visual identity, bilingual support (English / Japanese toggle), dark/light theme support, and a persistent top navigation bar linking all three pages:

### Page 1: `index.html` — Pre-Workshop Readiness Hub & Checklist
* **Purpose**: Sent to partners **before** the workshop so they arrive with a verified environment.
* **Key Components**:
  1. **Interactive 1-Click Diagnostics**:
     * Checks `Chrome Canary v154+` (`version >= 154`).
     * Checks `document.modelContext.registerTool` availability (`#enable-webmcp-testing`).
     * Checks `LanguageModel.availability()` (`#prompt-api-tool-use` & `#optimization-guide-on-device-model`).
  2. **Gemini Nano Weight Downloader**:
     * Live download progress bar (`LanguageModel.create({ monitor(m) { ... } })`) so the ~1.5 GB model weights finish downloading before the session starts.
  3. **Native DevTools Verification**:
     * Visual callout instructing partners to press `F12 > Application > WebMCP` to verify their native Chrome 154+ WebMCP inspector panel.

---

### Page 2: `workshop_playbook.html` — Live Workshop Flow & 1-Click Prompt Cheat Sheet
* **Purpose**: The **single screen partners keep open during the 90-minute workshop**. Combines visual presentation slides, real-world enterprise case studies, architecture diagrams, and copy-paste AI prompts.
* **Key Sections**:
  1. **The Why: WebMCP vs. Fragile DOM Scraping**:
     * Visual comparison: Raw DOM scraping (15–20s latency, brittle CSS selectors, untrusted prompt injection) vs. WebMCP (direct JS execution <= 50ms, strict JSON Schema, human-in-the-loop safety).
  2. **Enterprise Showcases (Public-Safe Metrics & Architecture)**:
     * **Showcase 1: Google Store (gStore) Device Repair Case Study**:
       * **Result**: **~30% reduction in task completion time** and **0 safety hallucinations**.
       * **Without WebMCP**: Browser agent asked users to manually type IMEI/serial numbers already linked to their account, took multiple slow navigation hops, and **hallucinated answers to critical battery safety questions** (swollen battery hazards).
       * **With WebMCP**: Exposed `get_user_devices` and `start_repairs_flow`. The agent automatically retrieved the linked Pixel IMEI from the signed-in session, bypassed intermediate pages, and strictly prompted the user on safety questions.
       * **Architecture**: Centralized Singleton Service mapped to MVC controllers (Angular-style) gated behind experiment flags.
     * **Showcase 2: Expedia & Target Production Tools**:
       * **Expedia**: `submit_or_update_lodging_search`, `property_list_info`, `update_lodging_filters`, `navigate_to_property`, `get_property_offers`, `navigate_to_checkout` (staged rollout via experiment flags).
       * **Target**: `search_products`, `filter_products` (live in production by default).
       * **Cross-Ecosystem Support**: OpenAI added WebMCP support to ChatGPT desktop/apps alongside Chrome.
  3. **Designing CUJs & The "10-Click Rule"**:
     * Why 1-click UI actions take 0.5s manually vs. 8–10s for LLM inference (Target feedback). Tools must target **10+ click multi-constraint workflows** (e.g. Rakuten travel comparison, note CMS multi-post drafting, pixiv commission staging).
  4. **Architecture Track Selection (Track A vs. Track B)**:
     * **Track A (Recommended — Zero Permissions)**: Content script (`"world": "MAIN"`) injecting `document.modelContext.registerTool()`.
     * **Track B (Advanced — Full-Stack AI Agent)**: Side Panel UI (`sidePanel`, `tabs`, `scripting`, `host_permissions`) running local Gemini Nano (`LanguageModel.create()`) + WebMCP bridge.
  5. **1-Click AI Coding Prompts Cheat Sheet (Interactive Copy Buttons)**:
     * **Prompt 1 (Scaffold `manifest.json`)**: Minimal MV3 manifest with `"world": "MAIN"` and zero permissions.
     * **Prompt 2 (Read-Only Discovery Tool)**: `search_catalog` with `readOnlyHint: true`, `AbortSignal` forwarding, and 1.5 KB token budget.
     * **Prompt 3 (Mutating Action Tool with Client UI Sync)**: `add_to_cart` / `stage_draft` with `consequentialHint: true`, anti-ghost-browser DOM/state updates, and human-in-the-loop `<dialog>` confirmation.
     * **Prompt 4 (Track B Bonus — Side Panel Local Gemini Nano Agent)**: `LanguageModel.create()`, delta token streaming (`promptStreaming`), and `chrome.scripting.executeScript` bridge.

---

### Page 3: `takehome_homework.html` — Take-Home Toolkit, Production Gotchas & Homework
* **Purpose**: Post-workshop reference guide for tech leads taking WebMCP back to their production engineering teams.
* **Key Sections**:
  1. **7 Production Gotchas & Battle-Tested Code Workarounds (from Partner & Origin Trial Feedback)**:
     * **Gotcha 1: Chromium SPA Router Renderer Crash (`crbug.com/534655509`)**:
       * *Risk*: Combining a Client-Side Router (Next.js App Router, Nuxt, Astro View Transitions) + Imperative tools + Declarative HTML form tools causes a hard tab crash.
       * *Workaround*: Standardize **100% on Imperative Registration** in SPAs and manage route lifecycles via `AbortController`.
     * **Gotcha 2: Conditional CUJ Failures (`outputSchema` / `unknown` Return Type)**:
       * *Risk*: `execute()` returns untyped `unknown`. Multi-step conditional prompts (*"Find X, if none under ¥5,000 find Y"*) fail when the agent guesses success from prose.
       * *Workaround*: **The Enterprise Return Envelope Pattern** (`{ status, hasResults, resultsCount, activeState, workflowGuidance, items }`).
     * **Gotcha 3: Out-of-Order Tool Execution & Filter Erasure (Target.com)**:
       * *Risk*: Agent calls `filter_products` before `search_products`, or overwrites existing filters on turn 2.
       * *Workaround*: Implement **Additive Filter Merging** (shallow patch over store state) and **Self-Healing Prerequisite Guards** (`status: 'PREREQUISITE_REQUIRED'`).
     * **Gotcha 4: Out-of-Stock Human Handoff & State Drift**:
       * *Risk*: User manually clicks an alternative item when the agent's choice is out of stock; agent loses context on the next turn.
       * *Workaround*: Include an `activeState` snapshot (`currentRoute`, `appliedFilters`, `cartCount`) in every tool response.
     * **Gotcha 5: Synchronous `form.reset()` Race Condition**:
       * *Risk*: Calling `form.reset()` after submission synchronously cancels an in-flight WebMCP execution (`"Tool execution cancelled by a form reset"`).
       * *Workaround*: Always guard resets with `if (event.agentInvoked !== true) form.reset();`.
     * **Gotcha 6: Client-Side Observability Blindness & Bot Noise**:
       * *Risk*: Pure client-side tools leave zero server logs, and automated scanners (`WebMCPIndexBot`) spoof traffic.
       * *Workaround*: Wrap registrations with `registerObservableTool()` emitting custom telemetry events (`webmcp:tool_execution`).
     * **Gotcha 7: Regulated Sector Governance ("Fill-But-Never-Submit")**:
       * *Rule*: Stage drafts, calculate quotes, or pre-fill forms, but require a trusted physical click (`event.isTrusted`) for final submission/payment.
  2. **The 2-Tier WebMCP Evaluation Pyramid**:
     * **Tier 1: Kasper Kulikowski's Automated Developer Evals (`evals.js`)**: Local CI/CD tests verifying Tool Selection Precision, Argument Extraction Accuracy, DOM State Sync, and Error Recovery.
     * **Tier 2: Google VACO / Bluedog 5-Point Quality Rubric**:
       1. Task Completion (No Issues / Minor / Major)
       2. Efficiency & Tool Selection (**Explicitly penalizing raw DOM scraping fallbacks**)
       3. Groundedness (100% backed by tool return JSON)
       4. Truthfulness
       5. Overall Experience Quality (5-point scale)
  3. **Advanced Debugging & Post-Workshop Homework Checklist**:
     * **Trajectory Logging**: Open `chrome://actor-internals` and click **"Start Trace Logging"** to record full agent traces to disk.
     * **DevTools Inspection**: `DevTools (F12) > Application > WebMCP`.
     * **Extensions & Links**:
       * [Google WebMCP Model Context Tool Inspector Extension](https://chromewebstore.google.com/detail/webmcp-model-context-tool/...)
       * [Nekuda WebMCP Workbench Extension](https://chromewebstore.google.com/detail/nekuda-webmcp-workbench/amochnnbmnkjjlblolhpddkokhnalkjp)
       * [W3C WebMCP Specification & Explainer (GitHub)](https://github.com/webmachinelearning/webmcp)
       * [Chrome WebMCP Official Documentation](https://developer.chrome.com/docs/ai/webmcp/build-tools)
