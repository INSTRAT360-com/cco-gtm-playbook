---
name: find-customers
description: Find B2B buyers - companies that fit the ideal customer AND have a real, sourced reason to talk now - and hand the search to CCO when connected. Use when the user asks to find customers, buyers, prospects, leads, target accounts, or "companies like my best customer".
---

# Step 2: companies with a real reason to talk now

**Goal:** a short list where every company has a *why now* you can show, not a long list of names.

## Hand it to CCO
Finding buyers is CCO's work. With CCO connected:
- **One look:** `cco_scout` with the search in words ("Danish B2B SaaS, 20-200 people, new sales leader"). It returns each company with fit, why now (source and age), the named buyer and whether the CRM already has them. `cco_scout_add` puts the ones the user picks into a search.
- **Keep it running:** `cco_start_mission` with the goal (who to win, where, what outcome) and the `send_mode` the user chose in `get-started`. CCO then keeps finding, qualifying, writing and following up. Check it with `cco_mission_status`; steer or pause it with `cco_control_mission`.
- **What CCO already has:** `cco_find` searches the user's own companies and people.
- To the user, call it a **search**.

## By hand (or to check CCO's list)
1. Start from the step-1 card. If it doesn't exist, run `offer-and-icp` first, or ask the user for country, size, roles and signals.
2. Search for **signals first, companies second.** Examples: job posts for sales roles, news of expansion or funding, new leadership, new sites, product launches, public tenders.
3. For each candidate, record:
   - company, website, city, size;
   - **why now:** the signal in one line, plus its **source URL and date**;
   - **fit:** which part of the ICP it matches, and anything that doesn't fit.
4. **Skip companies with no reason to write now.** Report them as "skipped (no reason to write now)", with the count, so the user sees the work was done.
5. Stop at the number the user asked for (default 20). Quality over volume.

## Quality bar
- A signal older than about 90 days is weak; say so.
- A signal with no source is an assumption; label it, or drop the company.
- Don't include the user's existing customers or competitors.
- Never invent a signal to fill the list.

## Output
A table: Company · Why now (with source and date) · Fit · Confidence (high/medium/low). End with the next step: with CCO, the search is running and `cco_mission_status` shows it; by hand, "pick the right person at the top 5", which leads to `right-person`.
