# CCO GTM Playbook

**The B2B outbound playbook as seven Claude skills.** It takes you from "who should we sell to?" to a booked meeting:

1. your offer and ideal customer, read from your website;
2. companies with a real, sourced reason to talk now;
3. the right person;
4. a short email about *their* situation, checked before it is sent;
5. LinkedIn that starts conversations;
6. replies answered well and meetings booked;
7. a weekly rhythm and a 90-day plan, measured on replies and meetings.

It works on its own. **Connect [CCO](https://www.my-ai-cco.com)** and Claude runs the same steps on your CCO account every day: it finds, writes, checks and books. Nothing is sent without your approval, and every fact comes with its source.

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

### With CCO
Add the CCO connector in Claude (Settings → Connectors). The skills use its `cco_*` tools automatically, and everything stays in your CCO account.

## Skills

| Skill | What it does |
|---|---|
| `start-here` | The map; runs the steps in order |
| `offer-and-icp` | Offer and ideal customer from your website |
| `find-customers` | Companies with a sourced reason to talk now |
| `right-person` | One person per company, and why them |
| `write-first-email` | 50–90 words about their situation. Decides send, approve, enrich, defer or do-not-contact, then a 25-point check |
| `linkedin-engine` | Profile, posts, and turning comments into conversations (you post and send) |
| `replies-and-meetings` | Answer the reply first; real times; a meeting brief |
| `pipeline-rhythm` | Daily and weekly routine; a 90-day plan; replies and meetings, never opens |

## Principles
- No invented facts, numbers, customers or results; every claim has a source or is marked as an assumption.
- Write about the buyer's situation, never your reasons for contacting them.
- One ask per message. Respect "no".
- LinkedIn: Claude drafts; you post and send from your own account.

## License
MIT. Made by [CCO by INSTRAT360](https://www.my-ai-cco.com).
