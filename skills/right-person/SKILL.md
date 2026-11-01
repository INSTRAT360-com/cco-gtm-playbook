---
name: right-person
description: Choose the one right person to contact at a target company and explain why them, using CCO's research when connected. Use when the user asks who to contact, who the decision maker is, the buying group, or which buyer to write to at a company.
---

# Step 3: the right person

**Goal:** one person per company, with a reason the user would defend.

## Hand it to CCO
Account research is CCO's work. With CCO connected:
- `cco_research_account` (`buyers=true` for the buying group) finds the people, how to reach them, dated signals and warm paths; read the result with `cco_company`.
- `cco_person` gives one person's fit, why now, how to reach them and CCO's buyer profile (style, how to win), each line marked Verified, Observed or Inferred.
- `cco_find_email` looks up one person's work email from CCO's own sources; a do-not-contact person is never looked up.
- Inside a running search CCO picks the person itself; this step is for a company the user asks about.

## By hand
1. For each company from step 2, find the people in the buying roles from step 1 (company site, team page, press, public profiles the user can open).
2. Choose **one** person, using this order:
   1. the person **connected to the signal** (e.g. the new head of sales whose hiring is the signal);
   2. the person who **feels the problem** your offer solves;
   3. in a small company (under about 50 people), the founder or CEO.
3. Write **why this person** in one line, with a source.
4. Note **how to write to them,** if public: the language they use, the tone of their own posts, the topics they care about. Use only what you can see; never guess personality.
5. Find a work email only from legitimate sources (the company site, the person's own public pages, or the user's tools). If none is found, say "no email found"; don't guess addresses.

## Quality bar
- One person, not a list of five.
- The reason links the person to the signal or the problem.
- No sensitive personal data; nothing about private life.

## Output
Per company: Person · Role · Why them (with source) · How to write to them · Email found yes/no. Next: `write-first-email`.
