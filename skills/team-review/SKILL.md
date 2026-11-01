---
name: team-review
description: Run a weekly sales management and team review, per seller and per account, with what moved, what is stuck and why, coaching points and the decisions needed, from CCO's records when connected. Use when a sales leader asks for a team review, management view, sales meeting agenda, one-to-one prep, or how the team and key accounts are doing.
---

# Management view and team review

**Goal:** in 30 minutes a sales leader knows what moved, what is stuck, who needs help, and what they must decide.

## Hand it to CCO
With CCO connected, the facts come from CCO:
- `cco_missions`, `cco_mission_status` and `cco_mission_live`: each search's progress (found, written, sent, replies, meetings) and what needs someone.
- `cco_replies` and `cco_meetings`: what moved with buyers this week.
- `cco_account_plan`: per account, the buying group, risks, open actions and forecast.
- `cco_today`: the decisions waiting for the user now.
- `cco_control_mission`: carry out a decision on a search (steer or pause it).
- There is no team or management tool in the connector: build the review from these reads, and link each line with the `open_in_cco` link CCO returned. These reads show what the connected user's seat may see; the full team view lives in CCO, so send the leader there with the link.
- If CCO says this is not available for the workspace, say it isn't set up for this workspace yet and offer **Open CCO Outreach** with the link CCO returned; meanwhile run the review from what the user gives you. No prices, plan cards or upgrade lines in the chat.

## Do this
1. Agree the scope: which sellers, which key accounts, which week. Use only what the user or their tools show; ask each seller for their own list if needed.
2. **Per seller,** one block:
   - **moved this week:** replies, meetings held and booked, deals that changed stage, each with a date;
   - **stuck:** deals or accounts with no buyer action in more than 14 days, no next step, or one contact only, and *why* in one line;
   - **the numbers:** new conversations, positive replies, meetings, as real counts or "not tracked";
   - **one coaching point,** tied to something you can show (a weak reason to write, the wrong person, an ask that is too big, no second contact).
3. **Per key account,** one line: owner, stance of the buying group, next step and date, biggest risk (see `account-plan`).
4. **Forecast:** commit / best case / pipeline totals from `pipeline-review`, with the change since last week.
5. **Decisions needed:** what only the leader can decide (move an account, add help, drop a deal, change the focus), each with a recommendation and a date.
6. Show it, ask "What's missing?", and update.

## Quality bar
- Coaching points are about the work, never the person, and each has an example.
- "Stuck" always says why; "busy" is not a reason.
- No ranking of sellers by activity; replies, meetings and buyer actions count, not emails sent.
- Every number is counted, not estimated. No source means it is an assumption.

## Output
- **This week in one paragraph.**
- Per seller: moved · stuck (why) · numbers · coaching point.
- Per key account: owner · next step (date) · risk.
- Forecast totals and the change.
- Decisions needed, with a recommendation each.
