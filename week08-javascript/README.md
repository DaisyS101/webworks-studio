# Week 8 — JavaScript Interaction Handoff
## Hill Country Trail Guide

**Primary User:** Maya Torres

## Required Behaviors
1. Accessible trail-difficulty disclosure
2. Hike-planning form validation/submission feedback

---

## JavaScript Decisions

### Decision 1 — DOM Selection
What elements did your script need to select, and why?

The script selects `#difficulty-toggle` and `#difficulty-panel` to control the supplied disclosure, plus `#hike-form` and `#form-feedback` to handle planning and show its response. The supplied HTML IDs are used without changing the markup.

### Decision 2 — Event Handling
What events did you listen for? Why were those events appropriate?

The difficulty button listens for `click`; native buttons translate mouse clicks, Enter, and Space into this event. The form listens for `submit`, so keyboard submission and submit-button activation use the same logic. A capturing `invalid` listener clears outdated success feedback when native validation rejects the form.

### Decision 3 — State / DOM Update
How did the interface change after user action?

The disclosure toggles the panel's `hidden` property and updates `aria-expanded` to the same open/closed state. A valid form submission is kept on the page and writes a confirmation containing the selected trail, experience level, and available time into the feedback region.

### Decision 4 — Accessibility
How did you preserve or improve keyboard/accessibility behavior?

The existing button remains keyboard-operable, its `aria-controls` relationship is preserved, and `aria-expanded` tracks the panel's visibility. Required form controls retain browser-native constraint validation. Feedback is written into the existing `role="status"` / `aria-live="polite"` region.

---

## Testing Notes

### Difficulty Disclosure
- Mouse: Opened and closed repeatedly; visibility followed the button state.
- Keyboard: Tab reached the button; Enter opened it and Space closed it.
- `aria-expanded`: Changed between `false` and `true` with panel visibility.
- Console errors: No page errors during browser testing.

### Planning Form
- Empty/invalid submission: Native validation blocked empty and partial forms; success feedback stayed empty. After a valid submission, a later invalid attempt cleared the old confirmation.
- Valid submission: Juniper Creek Loop / Beginner / about 2 hours and Painted Bluff Trail / Experienced / 4+ hours both produced matching feedback.
- Keyboard: Submitted a valid plan using Enter.
- Console errors: No page errors during browser testing.

---

## Live Site
[Add the published GitHub Pages URL here if this project is deployed.]
