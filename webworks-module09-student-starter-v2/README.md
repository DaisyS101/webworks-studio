# WebWorks Studio — Module 9 Student Starter
## Mission City Makers Market

You are the **Junior Front-End Developer** assigned to improve a fictional client page using two different professional tools:

1. **Alpine.js** — create one lightweight custom interaction.
2. **Preline UI** — choose and adapt one reusable component.

The goal is not to add as many effects as possible. The goal is to choose the right tool for the right job.

## Start Here

Open this entire folder in Visual Studio Code.

In the VS Code terminal, run:

```bash
npm install
npm run dev
```

Keep `npm run dev` running while you work.

The `dev` command:

- copies Preline's browser JavaScript to `js/vendor/preline.js`;
- starts Tailwind watch mode;
- rebuilds `css/output.css` when your HTML changes.

Preview `index.html` with Live Server.

## What Is Already Set Up?

- Tailwind CSS 4
- Preline UI
- Tailwind Forms
- Alpine.js through the approved CDN
- responsive client page
- accessible baseline HTML
- client content and starter images
- Alpine maker-category filter and Preline visitor FAQ accordion
- Mac/Windows-friendly npm scripts

### Versions

- Tailwind CSS 4.3.3
- Tailwind CLI 4.3.3
- Preline UI 4.2.0
- Tailwind Forms 0.5.11
- Alpine.js CDN 3.17.1

Do not change versions unless your instructor tells you to.

# Requirement 1 — Alpine-Powered Exploration Tool

Use Alpine to help a visitor explore, narrow, compare, select, or better understand the supplied maker content.

Required:

- `x-data`
- at least one user event
- at least one additional reactive directive
- visible, understandable interface response
- semantic, keyboard-accessible controls

The Featured Makers section contains a category filter for ceramics, printmaking,
textiles, and woodcraft. Do not copy the classroom Alpine playground unchanged.

# Requirement 2 — Adapted Preline Component

Choose one Preline component that improves the supplied client page.

Possible choices:

- accordion
- tabs
- modal
- dropdown
- alert
- another instructor-approved component

Required:

- solve a real client/user need
- use official Preline structure
- retain meaningful client content
- adapt styling with Tailwind utilities
- remain keyboard usable
- preserve accessibility behavior
- work at narrow, medium, and wide widths

The Visitor Questions section uses a Preline accordion to keep answers easy to
scan while allowing visitors to open the details they need.

# Scope Rule

Your Alpine interaction and Preline component must solve **different problems**.

# Why `js/vendor/preline.js` Exists

`node_modules` should not be committed or relied on by GitHub Pages.

Running:

```bash
npm run dev
```

or:

```bash
npm run build
```

copies Preline from:

```text
node_modules/preline/dist/preline.js
```

to:

```text
js/vendor/preline.js
```

Commit the copied runtime with your finished project.

# Before Pushing to GitHub

Run:

```bash
npm run build
```

Then confirm these contain real generated code:

```text
css/output.css
js/vendor/preline.js
```

Commit both files.

Do not commit `node_modules/`.

# Project Documentation

## Project Summary

This project adapts the Mission City Makers Market page with a reactive maker
category filter built in Alpine.js and a Preline accordion for visitor FAQs.
Tailwind CSS styles both interactions to match the market's visual design.

## Alpine Decision

**User/client need:**  
Visitors can filter the four featured makers by craft instead of scanning every
maker card.

**Alpine directives used:**  
`x-data` stores the selected category, `x-model` binds the native select to that
state, `x-show` filters the cards, and `x-text` announces the current results.

**Why Alpine was appropriate:**  
This is small, page-specific behavior with one piece of state and no need for a
larger framework or a custom-built select control.

## Preline Decision

**Preline component selected:**  
Preline accordion.

**Problem it solves:**  
Visitors can expand just the FAQ answers they need instead of scanning a long
block of answers.

**How you adapted it:**  
The documented `hs-accordion-group`, `hs-accordion`, `hs-accordion-toggle`,
and `hs-accordion-content` structure is styled with the market's teal, stone,
and white palette, visible focus rings, and comfortable touch-sized buttons.

## Accessibility Notes

1. The maker filter uses a programmatically associated `<label>` and a native
   `<select>`, which supports keyboard input without custom keyboard scripting.
2. The FAQ uses native `<button>` controls, visible focus styling, and
   `aria-controls`, `aria-expanded`, `aria-labelledby`, and `role="region"`
   relationships.

## Testing Notes

Complete these hands-on checks before submitting:

**Narrow viewport:** TODO — record the viewport size and what you verified.  
**Medium viewport:** TODO — record the viewport size and what you verified.  
**Wide viewport:** TODO — record the viewport size and what you verified.  
**Keyboard testing:** TODO — test the filter and FAQ using only the keyboard.  
**Browser console:** TODO — check for errors and record the result.

## Dependencies

**Alpine.js — how used:** Supplied Alpine.js 3.17.1 CDN script provides the
reactive maker-category filter in `index.html`.  
**Preline UI — how used:** Preline UI 4.2.0 provides the visitor FAQ accordion;
its runtime is copied to `js/vendor/preline.js` by the supplied project script.  
**Tailwind CSS — how used:** Supplied Tailwind CSS 4.3.3 styles the page,
responsive grids, focus states, and accordion presentation.

## Official Documentation Used

- Alpine.js `x-model`: https://alpinejs.dev/directives/model
- Preline UI Accordion: https://preline.co/docs/components/accordion.html

# Official References

- https://alpinejs.dev/start-here
- https://alpinejs.dev/directives/
- https://preline.co/docs/
- https://preline.co/docs/components.html
- https://preline.co/docs/accessibility.html

# Final Check

- [ ] `npm run build` completes.
- [ ] Tailwind styles load.
- [ ] Alpine interaction works.
- [ ] Preline component works.
- [ ] They solve different needs.
- [ ] Narrow, medium, and wide viewport checks are recorded above.
- [ ] Keyboard and browser-console checks are recorded above.
- [ ] Keyboard testing works.
- [ ] Responsive testing is complete.
- [ ] Console has no unresolved errors.
- [ ] README is complete.
- [ ] `css/output.css` is committed.
- [ ] `js/vendor/preline.js` is committed.
- [ ] `node_modules` is not committed.
- [ ] Work is pushed to GitHub.
