---
name: replies-and-meetings
description: Answer sales replies well and turn interest into booked meetings with real times, through CCO when connected; handle "not now", "no thanks", out-of-office and objections. Use when the user has a reply from a prospect, asks how to respond, wants to book a meeting, or prepare a meeting brief.
---

# Step 6: replies and meetings

**Goal:** every reply gets a fast, fitting answer, and interest becomes a meeting in the calendar.

## Hand it to CCO
Replies and meetings are CCO's work. With CCO connected:
- `cco_replies` lists the replies that need an answer: the buyer's last message, what CCO understood, the answer CCO queued (`ready_key`, `row_version`), and a time the buyer proposed or a date they asked to hear back.
- As the user's choice allows (see `get-started`), CCO sends the answers and books the meetings itself; only risky replies (an opt-out, a complaint, a price negotiation, anything unclear) come to the user. What waits: approve the exact answer with `cco_approve_send` on the user's yes, or change it with `cco_rewrite_draft`.
- `cco_meeting_times` gives 2–3 real free times from the connected calendar, in the buyer's time zone. `cco_book_meeting` books the time the buyer named, or the user's pick, and CCO sends the invite with the video link.
- `cco_set_follow_up` sets the date for a "not now"; the thread comes back then, or sooner if they write.
- `cco_meetings` lists what is booked and whether each brief is ready.
- A reply the user got outside CCO: `cco_log_activity` records it and CCO prepares the next step.

## Read the reply first
Classify it before writing anything:
- **Interested / asks to meet**
- **Question**
- **Not now** (give a time)
- **No thanks / opt-out**
- **Wrong person** (and who is right)
- **Out of office** (and the return date)

## Answer
- **Answer what they wrote first,** in their language and at their length. If they asked a question, the first sentence answers it.
- **Interested:** offer **two or three real times** from the user's calendar, with the time zone, or accept the time they proposed. One line of agenda. Confirm the email address for the invite.
- **Question:** a direct answer, plus one line of proof, then the ask.
- **Not now:** thank them and agree a date to follow up. Then actually follow up on that date.
- **No thanks / opt-out:** thank them briefly and stop. Record the opt-out. Never write again.
- **Wrong person:** thank them and ask for an introduction, or write to the named person, mentioning who referred you.
- **Out of office:** follow up after the return date; don't reply to the auto-reply.
- **48–80 words** for a reply.

## Before the meeting: a one-page brief
- who they are and their role;
- what their company is working on (the signal, with its source);
- what they replied;
- 3 questions to ask;
- the one outcome to aim for.

With CCO, the brief comes with the booking (`cco_meetings` links it). Without CCO, the user sends the invite from their own calendar.
