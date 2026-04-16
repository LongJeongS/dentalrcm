# CleanClaim — Outbound Email Sequence (v3)

Cold email sequence for CleanClaim validation. 4 touches over 12 days. Landing page: `cleanclaim.jparkventure.com`.

Format: plain text. One-to-one sends. No images, no HTML, no tracking pixels. 4 touches over 12 days.

Touch 1 has two variants (A and B) — pick one as the control for the first batch.

---

## Fill-ins required before sending

| Token | What to fill in | Where it appears |
|---|---|---|
| `[link]` (call) | Cal.com booking link: `https://cal.com/jeong-park-yax9mk/15min` | Touch 2, 3 |
| `[link]` (page) | Landing page: `https://cleanclaim.jparkventure.com` | Touch 2, Touch 4 |

**Note:** No `[Name]` token — leads are dental practice inboxes, not individual contacts. "Hi," is used for all touches.

---

## Touch 1A — Day 0

**Subject:** `your waiting room`

```
Hi,

I was waiting at the dentist a few months ago and the office manager mentioned she'd spent her morning confirming insurance for the next day's patients — portal by portal, one at a time.

Tomorrow's patients. Checked one at a time.

CleanClaim runs those checks overnight, across all your payers at once. The list is ready when you walk in. Coverage gaps caught the night before instead of showing up as denials 60 days later — fewer denials and cleaner AR at month end.

If this sounds like your mornings, I'd love to hear how you're handling it.

— Jeong
```

**Notes:**
- **No links in Touch 1** — new domain (13 days warm-up), links in first-touch emails hurt deliverability. If they reply "yes," send the Cal.com link in the reply.
- Uses the **practitioner hook** — a specific personal story (waiting room observation) that only a real person in that situation could have written. This is the n-of-1 element.
- Names the product and says what it does in one sentence — no "I've been building something" preamble.
- Two-layer value: "list is ready when you walk in" (office manager), "fewer denials and cleaner AR at month end" (what the dentist sees).

---

## Touch 1B — Day 0

**Subject:** `eligibility, again`

```
Hi,

How many insurance checks did you run this morning before your first patient?

CleanClaim runs those overnight — all your payers, one pass, before you start. And because coverage issues get flagged the night before, denials that used to disappear for 60 days show up on your desk the same week.

Better for your morning. Better for what the dentist sees at month end.

If this sounds like your mornings, I'd love to hear how you're handling it.

— Jeong
```

**Notes:**
- **No links in Touch 1** — same deliverability rationale as 1A.
- Opens with a **question** instead of a scene — drops the reader directly into her morning before any claim is made.
- Same two-layer close: "Better for your morning" (office manager), "Better for what the dentist sees at month end" (decision-maker).
- More direct than 1A — no personal story, just the question and the product. Better for recipients who scan fast and delete anything that doesn't get to the point.

---

## Touch 2 — Day 3

**Subject:** `that patient call`

```
Hi,

You know the one — a patient calls, confused about a bill. You pull up the claim. Denied two months ago, coverage issue that was there before it was submitted.

The patient is frustrated, the resubmission window is closing, and the morning just derailed.

That's what CleanClaim is built to solve. If you're dealing with this, I'd like to help. [link]

— Jeong

What if your claims just went through? [link]
```

**Notes:**
- Opens with a **scene**, not a statement. "You know the one" drops the reader into a moment she's lived.
- Genuinely new angle from Touch 1 — Touch 1 is the morning eligibility grind, Touch 2 is the denial that surfaces 60 days later.
- Landing page link echoes the headline ("What if your claims just went through?") — creates continuity when the reader clicks through.
- One ask in the body (call), landing page link after the sign-off.

---

## Touch 3 — Day 7

**Subject:** `your morning`

```
Hi,

What would you do with the hours you spend on insurance checks every week — if they just weren't there?

Some people say they'd finally get through the callback list. Others say they'd leave on time for once.

What if your claims just went through — and your morning was yours again? Worth a conversation? [link]

— Jeong
```

**Notes:**
- New angle: not the problem, but what replaces it. Invites the reader to imagine the after-state.
- "Leave on time for once" is office-manager language — frames the benefit as making her job better, not replacing her.
- No PS / no letter link. Lighter touch. Single CTA (call).

---

## Touch 4 — Day 12

**Subject:** `friday`

```
Hi,

One thing worth trying — a Friday spot-check of that week's denied claims before they age.

Most practices lose $4,000–$8,000 a month to denials that sit too long. Catching one the same week it comes back changes what's recoverable. Doesn't require any new software. Just a standing 20 minutes on Fridays.

If you ever want to talk through what that looks like at scale: [link]

— Jeong
```

**Notes:**
- **Not a breakup email.** No "this is my last email," no "I'll assume the timing is off." The reader doesn't know this is the last touch.
- Gives free value with no strings — the Friday spot-check works without CleanClaim. The reader gets something useful whether she replies or not.
- The "$4,000–$8,000 a month" number matches the landing page's revenue hover card — creates consistency if the reader has already seen the page.
- The only ask is a soft door-open ("if you ever want to talk through what that looks like at scale"). Lowest-friction CTA in the sequence.
- No letter link, no PS. Cleanest possible touch.

---

## After Touch 4

Let the contact rest. Reactivate only on a genuine new trigger — and treat it as a fresh conversation, not a continuation.

## Send-day hygiene

- **Best days:** Tuesday, Wednesday, Thursday. Thursday peaks at 6.87% reply rate.
- **Best times:** 9–11am or 1–3pm in the **recipient's** local time zone, not Jeong's.
- **Avoid:** Monday mornings (inbox overload), Friday afternoons (checked out).
- **One-to-one sends only.** No bulk automation.
