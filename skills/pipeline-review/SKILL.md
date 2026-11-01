---
name: pipeline-review
description: Review open B2B deals and make an honest forecast (commit, best case, pipeline) based on evidence, from CCO's records when connected. Use when the user asks for a pipeline review, deal review, forecast, "which deals will close", stuck or stale deals, or what to do about the open opportunities.
---

# Pipeline and forecast review

**Goal:** every open deal has a real next step, the risks are named, and the forecast is one the user could defend to anyone.

## Hand it to CCO
The pipeline lives in CCO. With CCO connected:
- `cco_account_plan` per key account: its open deals (stage, value, probability, close) and CCO's commit / best case / pipeline. Compare it with the evidence and say where you differ.
- `cco_replies` and `cco_meetings`: the real last buyer action and the next booked meeting.
- `cco_company` and `cco_person`: what changed at the account, with sources.
- `cco_missions` and `cco_mission_status`: what each search added (replies, meetings) this week.
- `cco_log_activity`: record a call or meeting the user had outside CCO, so the next review starts from it.
- `cco_ask`: a question about the user's own deals that the reads above don't answer (read the answer with `cco_turn_result` if it runs as a turn).
- There is no single forecast tool: build the table from these reads and link each deal with the `open_in_cco` link CCO returned.
- If CCO says this is not available for the workspace, say it isn't set up for this workspace yet and offer **Open CCO Outreach** with the link CCO returned; meanwhile review the deals the user gives you. No prices, plan cards or upgrade lines in the chat.

## Do this
1. List the open deals: company, value, stage, expected close. Use only what the user or their tools show.
2. For each deal, write down:
   - **next step and its date** (a meeting, a decision, a document due), or "none";
   - **last real buyer action** and its date: something *they* did (replied, met, sent a document, asked for a price). Our emails don't count;
   - **who we talk to:** one person or several.
3. Flag the risks:
   - **no next step** in the calendar;
   - **stale:** no buyer action in more than 14 days;
   - **single-threaded:** one contact only;
   - a close date that has already moved, or no one who signs in the conversation.
4. Put each deal in **one** forecast category, with the evidence in one line:
   - **Commit:** the buyer has confirmed budget, the person who signs and a date, and the next step is booked;
   - **Best case:** real buyer interest and a next step, but something is still open;
   - **Pipeline:** everything else.
5. For every flagged deal, one action that removes the flag (an owner and a date). For stale deals with no answer after two tries, suggest closing them.

## Quality bar
- **Never inflate.** If the evidence is missing, the deal moves down a category, not up.
- A stage without a dated buyer action is a hope; say so.
- Totals are added from the deals shown, never estimated.
- No source means it is an assumption; label it.

## Output
A table: Deal · Stage · Value · Next step (date) · Last buyer action (date) · Flags · Category · Evidence. Then the totals per category, the 3 deals that matter most this week, and one action each. Next: `account-plan` for a key deal, or `team-review` for the whole team.
