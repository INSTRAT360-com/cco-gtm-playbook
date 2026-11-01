# CCO GTM Playbook

**The B2B outbound playbook as skills for Claude, ChatGPT and Codex.** Seven steps take you from "who should we sell to?" to a booked meeting:

1. your offer and ideal customer, read from your website;
2. companies with a real, sourced reason to talk now;
3. the right person;
4. a short email about *their* situation, checked before it is sent;
5. LinkedIn that starts conversations;
6. replies answered well and meetings booked;
7. a weekly rhythm and a 90-day plan, measured on replies and meetings.

After the first meetings, four more: key account plans, an honest pipeline and forecast review, a deck for one buyer, and a weekly team review.

It works on its own. **Connect [CCO](https://www.my-ai-cco.com)** and the assistant hands the work to CCO, which runs the same steps on your CCO account every day: it finds, writes, checks, sends and books, within the level you choose (Ask me every time, Ask for new people, Go by yourself). Every send passes CCO's checks, and every fact comes with its source.

## Install

### In the Claude app (claude.ai, desktop, mobile)
1. Download [`cco-gtm-playbook-skill.zip`](https://github.com/INSTRAT360-com/cco-gtm-playbook/raw/main/dist/cco-gtm-playbook-skill.zip).
2. In Claude, open **Settings → Capabilities → Skills** and upload the zip. Skills must be turned on for your account; on Team and Enterprise plans, your admin may need to allow them.
3. Start a new chat and ask: "Find 20 customers like my best one".

### In Claude Code

```
/plugin marketplace add INSTRAT360-com/cco-gtm-playbook
/plugin install cco-gtm-playbook@cco
```

Then ask Claude, for example:
- "Find 20 customers like my best one"
- "Write a first email to the CEO of …"
- "Answer this reply"
- "Make my 90-day plan"
- "Review my pipeline and forecast"

### In ChatGPT and Codex
One OpenAI plugin carries the CCO connector and these skills (`plugin.json`, `mcp.json`, `skills/`, `assets/`). Build the upload with `node scripts/build.mjs` (it writes `dist/cco-openai-plugin.zip`); the submission steps are in [SUBMIT-OPENAI.md](SUBMIT-OPENAI.md).

### With CCO
Add the CCO connector in Claude (Settings → Connectors). The skills use its `cco_*` tools automatically, and everything stays in your CCO account.

## Skills

| Skill | What it does |
|---|---|
| `start-here` | The map: which goals to hand to CCO, and the steps in order |
| `get-started` | Connect CCO, set up the business, choose how much CCO does on its own |
| `offer-and-icp` | Offer and ideal customer from your website |
| `find-customers` | Companies with a sourced reason to talk now |
| `right-person` | One person per company, and why them |
| `write-first-email` | 50–90 words about their situation. Decides send, ask first, enrich, defer or do-not-contact, then a 25-point check |
| `linkedin-engine` | Profile, posts, and turning comments into conversations; with CCO, messages go out from your own LinkedIn |
| `replies-and-meetings` | Answer the reply first; real times; a meeting brief |
| `pipeline-rhythm` | Daily and weekly routine; a 90-day plan; replies and meetings, never opens |
| `account-plan` | A key account: buying group (role, stance, influence), whitespace, risks, next 3 actions with owners and dates |
| `pipeline-review` | Each deal's next step, last buyer action and risk flags; commit / best case / pipeline with evidence, never inflated |
| `buyer-deck` | 6–8 slides for one buyer: their problem in their words, sourced proof, one ask, read as the buyer |
| `team-review` | Per seller and per account: what moved, what is stuck and why, coaching points, decisions needed |

## Principles
- No invented facts, numbers, customers or results; every claim has a source or is marked as an assumption.
- Write about the buyer's situation, never your reasons for contacting them.
- One ask per message. Respect "no".
- LinkedIn: with CCO, messages go out from your own LinkedIn through the CCO browser extension, inside daily limits; CCO never asks for your LinkedIn password.

## License
MIT. Made by [CCO by INSTRAT360](https://www.my-ai-cco.com).
