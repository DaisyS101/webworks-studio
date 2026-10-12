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

The script selects `#difficulty-toggle` and `#difficulty-panel` so it can control the supplied disclosure, plus `#hike-form` and `#form-feedback` to handle planning submissions and show a response. The selectors use IDs already provided by the HTML.

### Decision 2 — Event Handling
What events did you listen for? Why were those events appropriate?

The difficulty button listens for `click`, which also supports keyboard activation because it is a native button. The form listens for `submit`, so both keyboard and button submissions use the same behavior. It also listens for captured `invalid` events to clear any old success message without cancelling the browser's validation.

### Decision 3 — State / DOM Update
How did the interface change after user action?

The disclosure checks whether its panel is hidden, toggles the `hidden` property, and updates `aria-expanded` to the resulting open/closed state. A valid form submission is prevented from navigating away, then the selected trail, experience, and available time are summarized in the feedback region using `textContent`.

### Decision 4 — Accessibility
How did you preserve or improve keyboard/accessibility behavior?

The supplied native button can be activated with Enter or Space and keeps `aria-expanded` synchronized with the visible panel. Required form fields retain native browser validation. The feedback region keeps its supplied `role="status"` and polite live announcement.

---

## Testing Notes

### Difficulty Disclosure
- Mouse: Opened and closed the explanation repeatedly.
- Keyboard: The native button supports Tab focus and Enter/Space activation.
- `aria-expanded`: Changes between `false` and `true` with panel visibility.
- Console errors: None observed during manual checks.

### Planning Form
- Empty/invalid submission: Native required-field validation prevents success feedback; the invalid event clears any earlier message.
- Valid submission: Feedback includes the chosen trail, experience, and available time.
- Keyboard: The form's submit event supports keyboard submission as well as the submit button.
- Console errors: None observed during manual checks.

---

## Live Site
GitHub Pages URL: https://daisys101.github.io/webworks-studio/

