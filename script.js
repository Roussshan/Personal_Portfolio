/* ============================================================
   script.js  —  Portfolio of a CS Student
   ============================================================
   This file has three jobs:
   1. Hide the loader after the page finishes loading
   2. Animate elements into view as you scroll down
   3. Handle the contact form submit button
   ============================================================ */


/* ─────────────────────────────────────────────
   1. LOADER
   
   window.addEventListener('load', ...) runs
   the function AFTER every image, font, and
   stylesheet on the page has fully loaded.
   
   We then wait 1200ms (1.2 seconds) before
   adding the class "done" to #loader.
   
   In style.css, #loader.done sets:
     opacity: 0  and  visibility: hidden
   which fades it out smoothly.
───────────────────────────────────────────── */
window.addEventListener('load', function () {

  setTimeout(function () {
    document.getElementById('loader').classList.add('done');
  }, 1200);

});


/* ─────────────────────────────────────────────
   2. SCROLL REVEAL
   
   IntersectionObserver watches a list of elements.
   When an element enters the screen (is visible),
   the callback fires and we add class "visible".
   
   In style.css:
     .reveal           → opacity: 0, moved down 18px
     .reveal.visible   → opacity: 1, back to normal
   
   The CSS transition then animates between the two.
───────────────────────────────────────────── */

// Select every element that has the class "reveal"
var revealElements = document.querySelectorAll('.reveal');

// Create an observer
// "entries" is a list of all elements being watched
// threshold: 0.1 means: fire when 10% of the element is visible
var observer = new IntersectionObserver(function (entries) {

  entries.forEach(function (entry) {

    // entry.isIntersecting is true when element enters screen
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // stop watching this element — it only needs to animate once
      observer.unobserve(entry.target);
    }

  });

}, { threshold: 0.1 });

// Tell the observer to watch each "reveal" element
revealElements.forEach(function (el) {
  observer.observe(el);
});


/* ─────────────────────────────────────────────
   3. CONTACT FORM
   
   When the form is submitted, we:
   a) Prevent the default browser behaviour
      (which would reload the page)
   b) Change the button text to "Sent ✓"
   c) Reset it back after 3.5 seconds
   
   To make it actually send an email, replace
   the inside of this function with a real API
   call (e.g. EmailJS or Formspree).
───────────────────────────────────────────── */
function sendMessage(event) {

  // Stop the page from reloading
  event.preventDefault();

  var button = document.getElementById('send-btn');

  // Change button to success state
  button.textContent    = 'Sent ✓';
  button.style.background = '#4ade80';  /* green */
  button.style.color      = '#0c0c0e';
  button.disabled         = true;

  // After 3.5 seconds, reset the button
  setTimeout(function () {
    button.textContent    = 'Send Message';
    button.style.background = '';  /* removes inline style, CSS takes over */
    button.style.color      = '';
    button.disabled         = false;
  }, 3500);

}
