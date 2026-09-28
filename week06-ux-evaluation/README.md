# Week 6 — UX Evaluation Brief
## Hill Country Trail Guide

**Primary User:** Maya Torres  
**Primary Task:** Choose a beginner-appropriate Saturday hike that can be completed in about three hours or less.

---

## 1. Task Walkthrough
Briefly describe what Maya would try to do first, what she would look for, and where she might hesitate.

Maya would first scan the featured trail cards for an Easy option, a distance that seems manageable, and enough information to estimate whether the hike fits a Saturday schedule of about three hours. She would likely try the difficulty and distance controls before comparing Juniper Creek Loop with Live Oak Ridge. She would hesitate because the page gives distance and elevation but no estimated duration, does not explain what Easy means, and places important details such as parking, fees, gate hours, and dog rules in separate prose below the cards. On her phone, the stacked cards would require more scrolling and make side-by-side comparison harder.

---

## 2. Five UX Findings

Document **exactly five meaningful findings**.

### Finding 1
**Observation:**  
The trail filters look interactive, but they do not provide a working way to narrow the list.

**Evidence:**  
Under “Find a trail,” Easy, Moderate, Hard, Under 5 miles, and Dog friendly are styled like controls. They are static `span` elements, and selecting “Under 5 miles” does not change the three visible cards. The note below says, “Choose a category above to narrow the list.”

**User Impact:**  
Maya cannot quickly isolate beginner-friendly or time-relevant options and must inspect every card manually. This adds effort and makes her less confident that she has found the best Saturday choice.

**Principle:**  
Visibility of system status; consistency between an interface’s appearance, language, and behavior; user control and freedom.

**Priority:** High

**Recommendation:**  
Make the filtering controls function as controls, provide clear feedback when a filter is active, and ensure the available categories match the decisions Maya needs to make.

### Finding 2
**Observation:**  
The cards do not provide an estimated hike duration, even though Maya’s task is defined by available time.

**Evidence:**  
Each card shows distance and elevation, such as “4.8 mi · 620 ft,” but no time estimate or indication of whether the route can be completed in about three hours. The only distance filter is “Under 5 miles,” which is not equivalent to a three-hour hike.

**User Impact:**  
Maya has to guess how long each trail will take from mileage and elevation. A trail could fit the distance filter but still exceed her available time or feel too strenuous, leading to an unsuitable choice or additional research elsewhere.

**Principle:**  
Match the interface to the user’s task; support recognition rather than recall or calculation; provide decision-critical information at the point of comparison.

**Priority:** High

**Recommendation:**  
Present a reliable, plain-language time estimate in the primary trail comparison information and support time-based decision-making directly.

### Finding 3
**Observation:**  
The difficulty labels do not explain what “Easy” or “Moderate” means for a beginner.

**Evidence:**  
The cards show only Easy or Moderate, with small colored dots and no legend or plain-language criteria. Juniper Creek Loop is labeled Easy even though its detail text mentions several rocky crossings and limited shade; Painted Bluff is labeled Moderate while its card mentions exposed sections and its details mention loose rock and strenuous warm-weather conditions.

**User Impact:**  
Maya cannot tell whether an Easy trail matches her limited hiking experience or whether the described hazards are within her comfort level. She may choose a route that feels more demanding than expected or avoid a suitable route because the labels are not meaningful enough.

**Principle:**  
Use plain language; provide sufficient context for labels; prevent errors by communicating relevant risks and constraints clearly.

**Priority:** High

**Recommendation:**  
Define difficulty in beginner-friendly terms and connect the label with the practical conditions and exertion Maya should expect.

### Finding 4
**Observation:**  
Important access and preparation information is scattered below the trail comparison area and is sometimes vague or conditional.

**Evidence:**  
Juniper’s parking, water, shade, dog, fee, and gate-hour information appears in paragraphs under the cards. The dog statement says dogs “may be allowed depending on current park rules,” while fees and gate hours are “subject to change.” Painted Bluff only says to check park information, and the general “Before you go” section repeats that weather, access, fees, and regulations can change.

**User Impact:**  
Maya must open or scroll through multiple sections to answer practical leaving-home questions. The vague wording leaves uncertainty about whether a selected trail is actually accessible and suitable for her plan.

**Principle:**  
Information hierarchy; progressive disclosure with clear signposting; help users recognize relevant constraints before committing.

**Priority:** Medium

**Recommendation:**  
Make current access, parking, fees, dog rules, and preparation requirements easy to find for each trail, with clear status or direction to the authoritative source when information can change.

### Finding 5
**Observation:**  
The mobile layout preserves the content but makes comparison and navigation more effortful.

**Evidence:**  
At a phone-sized viewport, the three trail cards change from a row to a single vertical column. Maya must scroll through each full card, then continue to separate detail sections below. The repeated “More info” links are generic, and the primary navigation wraps onto multiple lines in the compact header.

**User Impact:**  
Maya cannot quickly compare the candidates while researching on her phone. Extra scrolling and generic links increase the chance that she misses the details needed to decide or loses track of which trail she is evaluating.

**Principle:**  
Mobile usability; information scent; support scanning and comparison; adequate navigation clarity at small touchscreens.

**Priority:** Medium

**Recommendation:**  
Restructure the mobile experience around quick scanning, clear trail-specific actions, and an efficient path from comparison to the details needed for a decision.

---

## 3. Top Three Priorities
Identify the three findings that should move forward into Week 7.

1. **Finding 2: Add time estimates and time-based decision support.** This is central to Maya’s stated task, but the current interface gives her no direct way to determine whether a trail fits within about three hours.
2. **Finding 3: Explain difficulty in beginner-friendly terms.** Maya’s limited experience means an unexplained Easy label cannot reliably tell her whether the route and hazards match her comfort level.
3. **Finding 1: Make the filters functional and relevant.** Working filters would reduce the effort of evaluating multiple trails and help Maya focus on options that fit her experience and available time.

For each, briefly explain why it matters to Maya's primary task.

---

## Week 7 Handoff
Week 7 will turn your top three priorities into interface requirements, wireframes, and a prototype.
