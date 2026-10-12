"use strict";

/*
  WEBWORKS STUDIO — WEEK 8
  Hill Country Trail Guide

  Your job is to implement TWO behaviors:
  1. Accessible difficulty disclosure
  2. Hike-planning form validation and feedback

  Do not use inline onclick/onchange attributes.
  Use addEventListener().
  Test with mouse AND keyboard.
  Keep aria-expanded synchronized with the disclosure state.
*/


// ======================================================
// PART 1 — DIFFICULTY DISCLOSURE
// ======================================================

const difficultyToggle = document.querySelector("#difficulty-toggle");
const difficultyPanel = document.querySelector("#difficulty-panel");


// The panel's hidden state is the source of truth for both visibility and ARIA.
difficultyToggle.addEventListener("click", () => {
  const nextIsOpen = difficultyPanel.hidden;
  difficultyPanel.hidden = !nextIsOpen;
  difficultyToggle.setAttribute("aria-expanded", String(nextIsOpen));
});


// ======================================================
// PART 2 — HIKE PLANNING FORM
// ======================================================

const hikeForm = document.querySelector("#hike-form");
const formFeedback = document.querySelector("#form-feedback");


hikeForm.addEventListener("invalid", () => {
  formFeedback.textContent = "";
}, true);


hikeForm.addEventListener("submit", (event) => {


  if (!hikeForm.checkValidity()) {
    hikeForm.reportValidity();
    return;
  }


  event.preventDefault();


  const formData = new FormData(hikeForm);
  const trail = formData.get("trail");
  const experience = formData.get("experience");
  const hours = hikeForm.elements.hours.selectedOptions[0].textContent;


  formFeedback.textContent = `Your plan is ready: ${trail}; experience level: ${experience}; time available: ${hours}. Check current weather and trail conditions before you go.`;
});
