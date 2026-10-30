---
name: find-customers
description: Find B2B companies that fit the ideal customer AND have a real, sourced reason to talk now. Use when the user asks to find customers, prospects, leads, target accounts, or "companies like my best customer".
---

# Step 2: companies with a real reason to talk now

**Goal:** a short list where every company has a *why now* you can show, not a long list of names.

## Do this
1. Start from the step-1 card. If it doesn't exist, run `offer-and-icp` first, or ask the user for country, size, roles and signals.
   - With CCO: `cco_find` or `cco_scout` for a search; `cco_start_mission` to keep finding and working through companies every day; `cco_mission_status` for progress.
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
A table: Company · Why now (with source and date) · Fit · Confidence (high/medium/low). End with: "Next: pick the right person at the top 5", which leads to `right-person`.
