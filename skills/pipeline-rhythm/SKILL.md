---
name: pipeline-rhythm
description: Run outbound as a daily and weekly rhythm and a 90-day plan, measured on replies and meetings, not activity, with CCO's live numbers when connected. Use when the user asks for a sales plan, 90-day plan, weekly outbound review, weekly sales routine, GTM metrics, pipeline progress, or "what should I do today".
---

# Step 7: the rhythm and the 90-day plan

**Goal:** a small amount of the right work every week, and numbers that show whether it works.

## Hand it to CCO
With CCO connected, CCO runs the daily work and keeps the numbers:
- `cco_today`: what needs the user now (decisions waiting, messages waiting, the strongest fresh signals, each with its source).
- `cco_missions` and `cco_mission_status`: each search's step, funnel (found, qualified, written, sent, replies, meetings) and next move; `cco_mission_live` shows it as a live board.
- `cco_control_mission`: steer a search with the week's decision ("only CEOs at companies under 50 people") or pause it.
- To the user, these are **searches**.

## Daily (15 minutes)
1. Answer replies first (`replies-and-meetings`).
2. Decide what waits for the user (with CCO: `cco_today`).
3. Note one learning: what worked, and what didn't.

## Weekly (45 minutes)
- 10–20 new companies with a real reason to talk now (`find-customers`; with CCO, the search keeps finding them).
- One useful LinkedIn post, and replies to the people who engaged (`linkedin-engine`).
- Review the numbers below, and change one thing.

## Measure the flow, not activity
Found → Has a reason → Has a person → Written → Sent → **Replied** → **Meeting** → Opportunity → Customer
- **Look at:** reply rate, positive-reply rate and meetings per week.
- Don't optimise for opens or clicks; they are unreliable and say nothing about intent.
- A low reply rate usually means a weak reason or the wrong person, not the wording. Go back to steps 2–3 before rewriting.

## The 90-day plan
- **Days 1–14:**
  - step 1 done;
  - 40 companies with reasons;
  - first 20 emails;
  - the profile rewritten.
- **Days 15–45:**
  - 20 new companies a week;
  - a weekly post;
  - every reply answered within a day;
  - the first meetings.
- **Days 46–90:**
  - keep the signals and roles that produce meetings;
  - drop the rest;
  - write down the playbook that works for *this* business.

Each review produces one decision ("only CEOs at companies under 50 people", "stop expansion signals in retail"). With CCO, steer the search with it (`cco_control_mission`).

## Output
- this week's plan, with named companies and tasks;
- the flow numbers so far (real numbers only, or "not yet");
- one change for next week.
