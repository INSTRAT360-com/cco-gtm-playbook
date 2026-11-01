# Submit CCO to the OpenAI Plugin Directory

One plugin = the CCO connector (remote MCP) + the CCO GTM Playbook skills + the `get-started` onboarding skill. It is listed once in the directory shared by ChatGPT and Codex. Checked against the OpenAI plugin docs on 1 Nov 2026:
[Submit your Claude Code plugin](https://developers.openai.com/plugins/guides/submit-claude-plugin) ·
[Upload and submit](https://developers.openai.com/plugins/deploy/submission) ·
[Package your plugin](https://developers.openai.com/plugins/build/plugins) ·
[Submission errors](https://developers.openai.com/plugins/deploy/submission-errors) ·
[Remote MCP review requirements](https://developers.openai.com/plugins/deploy/app-review) ·
[Plugin guidelines](https://developers.openai.com/plugins/plugin-guidelines) ·
[Authenticate users](https://developers.openai.com/plugins/build/auth)

## What is in the package

| File | What it is |
|---|---|
| `plugin.json` | The portable (Agent Plugins) manifest. Identity at the root; the listing (`interface`), the onboarding skill, the review test cases and the release notes under `extensions.com.openai`. |
| `mcp.json` | One remote server, `cco`: `streamable-http` at `https://www.my-ai-cco.com/api/mcp`, OAuth with client mode `cimd` (CCO identifies clients by Client ID Metadata Document; it has no registration endpoint). No headers, no secrets. |
| `skills/` | 13 skills. Each says when to hand the goal to CCO and which `cco_*` tools do it. `get-started` is the onboarding skill. |
| `assets/icon.png` | The CCO GTM Playbook mark, 512 × 512 (the same file as Claude Design's `assets/icon/cco-gtm-playbook-icon-512.png`). Used as `logo` and `composerIcon`. |

The Claude plugin (`.claude-plugin/`) is unchanged apart from the version; Claude Code ignores `plugin.json` and `mcp.json` at the root.

**Build the upload:** `node scripts/build.mjs` → `dist/cco-openai-plugin.zip` (one top-level folder `cco/`, nothing beside it; it also rebuilds the Claude app zip). Upload that zip, not the repository.

## Before you open the portal (one time)
1. **Owner of the OpenAI organization**, or a member with **Apps Management Write** (`api.apps.write`).
2. **Verify the business** in [organization settings](https://platform.openai.com/settings/organization/general) (business verification for Instrat Technology ApS / INSTRAT360). The listing's developer name comes from this verified identity, whatever the zip says. Publishing under an unverified name is rejected.
3. **Use a project with global data residency.** Projects with EU data residency cannot submit plugins with MCP servers. If ours is EU, create a new project in the same organization.
4. **Reviewer account** (CCO already has the path, owner approved 29 Oct): `https://www.my-ai-cco.com/review-sign-in` is live. Check in GitHub Actions → Production secret / Production setting that `CCO_REVIEWER_EMAIL`, `CCO_REVIEWER_PASSWORD_HASH`, `CCO_REVIEWER_ORG_ID` and `flag.reviewerLogin` are set, and that the reviewer can sign in with the password, with no code. The demo organization's outbound is always held or redirected.
5. **Demo data in the reviewer organization** for the five test cases: a set-up business, at least one company in the CRM, one reply that proposes a meeting time, and a connected calendar. Run all five test cases yourself with the reviewer account first (OpenAI requires that).
6. **Record the video walkthrough** of the five test cases (desktop and mobile ChatGPT) and get a link reviewers can open. Then add it to `plugin.json` as `extensions.com.openai.review.demo_recording_url`, rebuild, or enter it in the dashboard.

## In the portal: step by step
1. Open [platform.openai.com/plugins](https://platform.openai.com/plugins) → **Upload new or existing plugin**.
2. Choose your verified **Developer identity**.
3. **Upload plugin** → `dist/cco-openai-plugin.zip`. If validation fails, the error codes are in the [submission error reference](https://developers.openai.com/plugins/deploy/submission-errors); send them to me.
4. **Metadata & Skills:** wait for the checks (skill scans can take up to 2 hours). **Copy issues** and send them to me; I fix the package, bump the version and you **Upload plugin to fix issues**. Expected notices: `claude_format_normalized` / `manifest_normalized` (the portal writes its own `.codex-plugin/plugin.json`), `developer_name_defaulted`.
5. **MCPs** → select `cco` → **Connect** → check **MCP Server URL** (`https://www.my-ai-cco.com/api/mcp`) and **Authentication** (OAuth, CIMD).
6. **Domain verification.** The portal shows a token. CCO serves it at `https://www.my-ai-cco.com/.well-known/openai-apps-challenge` (route `app/.well-known/openai-apps-challenge/route.ts`, plain text, from the production setting `OPENAI_APPS_CHALLENGE`).
   - A token is **already live** there today. If it is not exactly the portal's token, set the new one: GitHub → Actions → **Production setting** → key `OPENAI_APPS_CHALLENGE` → value = the token → Run. Check the URL shows exactly the token, then continue in the portal.
7. **Connect** and sign in with the reviewer account when CCO's consent screen asks (or your own; the scan uses the connected account's tools). Wait for the tool scan, open **Issues**, send me anything flagged; after a server fix, **Rescan**.
8. **Review information → Review details:** the five positive and three negative test cases, the release notes and the commerce answer are imported from the zip (read-only there). Enter the **reviewer credentials** here (never in the zip): the reviewer email, the password, login URL `https://www.my-ai-cco.com/review-sign-in`, workspace = the demo organization, and the note "Sign in with the password on that page; no code is needed." Add the video URL if it is not in the zip. **Save details.**
9. **Submit for review** → tick the policy attestations. Track **Review status** on the Plugins page; feedback comes by email. Only one review can be active at a time.
10. After approval: open the approved version → **Publish plugin**.

After publication, CCO tool changes are picked up by OpenAI's daily scan (or **Rescan**); a new tool stays held until approved. Skill or listing changes need a new zip with a new version.

## Listing (from `plugin.json`, Claude Design's copy where it fits)
- **Name:** CCO
- **Subtitle** (max 30): *Your commercial team* (Claude Design's subtitle). Alternative within the limit: *Delegate your commercial work* (29).
- **Long description** opens with Claude Design's line, verbatim: *"Delegate your commercial work to CCO: find buyers, research accounts, write and send outreach, book meetings, account plans, decks."* Claude Design's 128-character "short description" does not fit OpenAI's 30-character subtitle, so it leads the long description.
- **Not used yet:** Claude Design's third paragraph ("In ChatGPT: CCO Today in the sidebar, live search and account boards beside the chat, cards when a buyer replies…, decks you can open in Slides or PowerPoint…"). The sidebar, the event cards and the Slides round trip are not built yet (plan steps 3–5). OpenAI rejects descriptions that don't match behaviour; add it in the release that ships them.
- **Category:** Business & Operations (from OpenAI's fixed list). **Developer:** Instrat360 (replaced by the verified identity).
- **Capabilities:** six labels. **Starter prompts:** three (max 3, 128 characters each).
- **URLs:** website `https://www.my-ai-cco.com`, support `https://www.my-ai-cco.com/#contact`, privacy `/privacy`, terms `/terms` (all live). Support must reach a person; a dedicated support page is safer than an anchor.
- **No prices, plans, trials or discounts** anywhere in the listing (OpenAI rule and ours). Inside ChatGPT: no price, plan card or upgrade line; when something isn't available, the skills say "Sending isn't set up for this workspace yet" and offer **Open CCO Outreach**.
- **Country availability:** not set in the zip (`publication.countries` omitted). Decide in the dashboard, or tell me the list (uppercase codes, for example `["DK","SE","NO","GB","US"]`).

## Screenshots
OpenAI's rules: optional; only for a plugin with its own UI (CCO has the chat cards); **one PNG or JPEG per starter prompt** (so 3), each **exactly 706 px wide and 400–860 px tall**, max 5 MiB. The plugin guidelines also say screenshots are no longer shown in the directory; the starter prompts are what users see.

Claude Design's files (`handoff6/CCO-Outreach-handoff/`): `screenshots/chatgpt/GptDelegate-*`, `GptSidebar-*`, `GptPanel-*`, `GptEvents-*`, `GptDecks-*` (1750 × 1040 JPG) and `assets/listing-screenshots/listing-1…5.png` (1280 × 800). **None can be uploaded as they are:** wrong size, a "ChatGPT-like host" mock frame with prototype controls, and the sidebar, event and Slides shots show what is not built yet. Recommended: leave screenshots out of the first submission. When we add them: three real captures from ChatGPT matching the three starter prompts (find buyers → the search card; replies → the replies card; account plan / deck → the `cco_open` card), cropped to 706 × 420, saved as `assets/screenshot-1.png` … `-3.png`, listed in `interface.screenshots`, rebuilt.

## Test cases (in `plugin.json`, imported read-only)
Positive (prompt → tools → expected):
1. "What needs me in CCO today?" → `cco_status, cco_today` → workspace, decisions waiting, messages waiting, signals with sources; nothing changed.
2. "Find Danish B2B software companies with 20-200 people that are hiring salespeople." → `cco_scout` → companies with fit, why now (source, age), named buyer; nothing sent.
3. "Research the strongest company in my CCO and show me its buying group." → `cco_find, cco_research_account, cco_company` → dossier facts with sources, buying group, open questions.
4. "Start a search for 20 new customers like my best one, and ask me before each message goes out." → `cco_start_mission, cco_mission_status` → after the user confirms, a search with `approve_each`; progress shown; nothing sent without a yes.
5. "Show me the replies that need an answer and book the meeting the buyer asked for." → `cco_replies, cco_meeting_times, cco_book_meeting` → replies with CCO's read and queued answer; real times; booking on the user's yes; outbound held or redirected in the demo workspace.

Negative: sending one email to a bought list of 5,000 addresses (declined: the send gate); "here is my LinkedIn password…" (declined: CCO never uses LinkedIn credentials); a weather question (no CCO tool is called).

**Check before submitting:** run each one in ChatGPT with the reviewer account. If a call goes differently (for example ChatGPT also calls `cco_find` first), update `tools_triggered` to what really happens and rebuild.

## Known gaps on the CCO side (engine, not this repository)
- **Workspace domain restrictions (ChatGPT Enterprise):** OpenAI asks OAuth servers to publish OpenID Connect discovery, advertise and enable the `openid` and `email` scopes, and serve a UserInfo endpoint that returns `email` with `email_verified: true`. CCO's metadata today advertises `cco.read`, `cco.act`, `offline_access` and no UserInfo endpoint. Not a blocker for the listing; needed so Enterprise workspaces can restrict CCO to their own domain.
- **Annotation justifications:** the dashboard may ask for a one-line justification of each tool's `readOnlyHint` / `destructiveHint` / `openWorldHint`. CCO sends all of them as explicit booleans; the reasons are the comments in `server/connector/tools.ts` (`listTools`). I can draft the 38 lines when the portal asks.
- **Run tools** (`cco_start_mission`, `cco_research_account`, `cco_scout` and the others) appear only while `flag.connectorRun` is on for the connected workspace. Turn it on for the reviewer organization before the scan, or the scan sees only the read tools.

## Versions
`plugin.json` and `.claude-plugin/plugin.json` both carry **0.3.0**; `scripts/build.mjs` refuses to build if they differ. Every new upload needs a new version.
