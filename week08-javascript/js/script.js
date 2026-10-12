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

const difficultyButton = document.querySelector("#difficulty-toggle");
const difficultyPanel = document.querySelector("#difficulty-panel");


difficultyButton.addEventListener("click", () => {
  const isOpen = !difficultyPanel.hidden;


  difficultyPanel.hidden = isOpen;


  difficultyButton.setAttribute("aria-expanded", String(!isOpen));
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


  event.preventDefault();


  const trail = hikeForm.elements.namedItem("trail").value;
  const experience = hikeForm.elements.namedItem("experience").value;
  const hours = hikeForm.elements.namedItem("hours").selectedOptions[0].textContent;


  formFeedback.textContent = `Plan reviewed: ${trail}. Experience level: ${experience}; time available: ${hours.toLowerCase()}. Check current conditions before you go.`;
  console.log("Plan submitted.");
});
