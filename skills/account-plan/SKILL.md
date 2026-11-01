---
name: account-plan
description: Build a B2B account plan for a key account, with the buying group, whitespace and expansion, risks, and the next three actions with owners and dates. Use when the user asks for an account plan, key account plan, strategic account review, stakeholder map, buying group, or how to grow an existing customer.
---

# Account planning and key accounts

**Goal:** one page per key account that says who decides, where the next deal is, what could go wrong, and who does what by when.

## Do this
1. Agree which accounts are key (default: at most 5). For each, collect what the user already knows: what they buy today, the open deals, the people they talk to.
   - With CCO: `cco_find` for the company id, then `cco_account_plan` for the plan CCO already holds. If there is none, `cco_research_account` (buyers=true) first, then `cco_company`.
2. **Buying group:** everyone who shapes the decision, one line each:
   - name, role, and their part (decides, signs, uses, influences, blocks);
   - **stance:** champion / supporter / neutral / sceptic / blocker, and what it is read from (a reply, a meeting, "user said");
   - **influence:** high / medium / low.
   - Mark the gaps: a role you have no one for, a stance nobody has checked.
3. **Whitespace and expansion:** what they could buy next and where (other teams, sites, countries, products), each tied to a fact about the account. No fact, no line.
4. **Risks:** single-threaded (one contact only), a champion leaving, budget or reorg news, a competitor in place, no meeting in 30 days. Each with a level and a mitigation.
5. **Next 3 actions:** a verb, an owner (a named person) and a date. "Stay in touch" is not an action.
6. Show the plan, ask "What would you change?", and update until the user says yes.

## Quality bar
- Every fact about the account has a source and a date, or is labelled an assumption.
- A stance is never guessed from a job title.
- At least two people in the buying group, or the plan says plainly it is single-threaded.
- Expansion ideas come from their situation, not from our price list.

## Output
A card per account: **Ambition** (one line) · **Buying group** (name, role, stance, influence, source) · **Whitespace** · **Risks** (level, mitigation) · **Next 3 actions** (owner, date) · **Open questions**. Next: `buyer-deck` for the next meeting, or `pipeline-review` for the open deals.

## With CCO connected
- `cco_account_plan`: the plan CCO holds (objectives, buying group with stance and influence, risks, open actions, open deals) and its `open_in_cco` link. Build on it; don't start over.
- `cco_person` adds each buyer's profile (style, how to win) and says what is Verified, Observed or Inferred.
- Save what the user confirms with `cco_save` (an account plan change) where the connector lists it; otherwise open the plan in CCO with the link it returned.
- `cco_log_activity` records a meeting or note the user had outside CCO on the company or person.
- Account plans are part of full CCO. On the Outreach plan, if CCO says this needs the plan, show what the plan would contain from the research you did, and pass on CCO's "See the plan" link. Never quote prices.
