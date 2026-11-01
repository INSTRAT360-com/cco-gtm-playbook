---
name: account-plan
description: Build a B2B account plan for a key account, with the buying group, whitespace and expansion, risks, and the next three actions with owners and dates, kept in CCO when connected. Use when the user asks for an account plan, key account plan, strategic account review, stakeholder map, buying group, or how to grow an existing customer.
---

# Account planning and key accounts

**Goal:** one page per key account that says who decides, where the next deal is, what could go wrong, and who does what by when.

## Hand it to CCO
Account plans live in CCO. With CCO connected:
- `cco_find` for the company id, then `cco_account_plan` for the plan CCO already holds (ambition, objectives, buying group with stance and influence, risks, open actions, open deals). Build on it; don't start over.
- No plan or thin facts: `cco_research_account` (`buyers=true`) first, then `cco_company`.
- `cco_person` adds each buyer's profile (style, how to win) and says what is Verified, Observed or Inferred.
- `cco_open` with the account opens the plan with its sources and the `row_version` a change needs; `cco_save` (`kind: account_plan_change`, one op at a time) saves what the user confirms as a new version. If the plan moved on meanwhile, nothing is overwritten; read it again and redo the change.
- `cco_log_activity` records a meeting or note the user had outside CCO on the company or person.
- If CCO says this is not available for the workspace, say it isn't set up for this workspace yet and offer **Open CCO Outreach** with the link CCO returned; meanwhile show what the plan would contain from the research you did. No prices, plan cards or upgrade lines in the chat.

## Do this
1. Agree which accounts are key (default: at most 5). For each, collect what the user already knows: what they buy today, the open deals, the people they talk to.
2. **Buying group:** everyone who shapes the decision, one line each:
   - name, role, and their part (decides, signs, uses, influences, blocks);
   - **stance:** champion / supporter / neutral / sceptic / blocker, and what it is read from (a reply, a meeting, "user said");
   - **influence:** high / medium / low.
   - Mark the gaps: a role you have no one for, a stance nobody has checked.
3. **Whitespace and expansion:** what they could buy next and where (other teams, sites, countries, products), each tied to a fact about the account. No fact, no line.
4. **Risks:** single-threaded (one contact only), a champion leaving, budget or reorg news, a competitor in place, no meeting in 30 days. Each with a level and a mitigation.
5. **Next 3 actions:** a verb, an owner (a named person) and a date. "Stay in touch" is not an action.
6. Show the plan, ask "What would you change?", and update until the user says yes. With CCO, save it then.

## Quality bar
- Every fact about the account has a source and a date, or is labelled an assumption.
- A stance is never guessed from a job title.
- At least two people in the buying group, or the plan says plainly it is single-threaded.
- Expansion ideas come from their situation, not from our price list.

## Output
A card per account: **Ambition** (one line) · **Buying group** (name, role, stance, influence, source) · **Whitespace** · **Risks** (level, mitigation) · **Next 3 actions** (owner, date) · **Open questions**, with the `open_in_cco` link when CCO holds it. Next: `buyer-deck` for the next meeting, or `pipeline-review` for the open deals.
