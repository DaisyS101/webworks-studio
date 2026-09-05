# Southtown Plant Co. — Week 2 Inherited Client Site

## Scenario
WebWorks Studio has inherited this small-business website from a previous developer.

The site is functional, but the underlying front-end code reflects practices common in older websites. Your assignment is to modernize the code while preserving the client's content and general visual identity.

## Before You Edit
1. Keep an untouched copy of this starter project.
2. Put your working copy in:
   `webworks-studio/week02-build-better/`
3. Open the entire project folder in Visual Studio Code.
4. Preview `index.html` in a browser.
5. Resize the browser window and observe the existing behavior before you change anything.

## Important
The inherited site is intentionally **not responsive**.

Do not simply redesign the site from scratch. Refactor it according to the requirements in the Week 2 Canvas assignment.

## Preserve
- Client content
- General color palette and visual identity
- Working navigation and links
- Meaningful image alternative text
- Required site information

## Your Goal
Make the code easier for another developer to understand, maintain, and extend.

Refer to the Canvas assignment for all required technical work, GitHub workflow, and submission directions.


Update 1.0
-Problem number one was the widths they were fixed making it difficult to scroll when the screen was small and just scrolls in a certain direction. which would have made it difficult to scroll in a smaller window and just going in the wrong direction. so I changed the widths to more flexible values such as using min(). so in that case the page can now shrink to fit a small screen like a phone or perhaps mini tablet but can still work on larger screens like desktops or tablet pro.

-Problem Number 2
The Two Column problem where the hero section and the main content the way it was used and causing the text and images to look all squashed together and appearing awkward or cramped in general. so it was replaced with flexible grid layouts which should help the section become more unified or singular on more narrow screens. grids are useful  to organize content and give some more information that might be useful. and while stacking content making it much easier to read on phones as well which is benifical to anyone reading on a phone.

-Problem Number 3
Images and Navigation now  these were tricky as sometimes I get turned around due to getting mixed up, but in any case  the images were at at a fixed point which would be fine if it were just accessible on an app or a computer but this is a website after all and it could be crowded with images making it difficult to read or the links breaking or getting crowded. removed image dimensions and controlling sizing in CSS so it is both read and viewed easier. and now the Navigation links can now wrap when neccessary.  images should be at least viewable at once not just have it cropped out or far too small to see it which could cause issues. and the navigation can be wrapped and be visible.
