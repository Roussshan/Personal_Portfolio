/* ============================================================
   script.js  —  Portfolio of a CS Student
   ============================================================
   1. Loader
   2. Scroll reveal
   3. Hamburger menu
   4. Contact form
   ============================================================ */


/* ─────────────────────────────────────────────
   1. LOADER
───────────────────────────────────────────── */
function hideLoader() {
  var loader = document.getElementById('loader');
  if (loader) loader.classList.add('done');
}

// Hide after page fully loads (1.2 s delay for the animation)
window.addEventListener('load', function () {
  setTimeout(hideLoader, 1200);
});

// Hard fallback — always hide after 3 s no matter what
setTimeout(hideLoader, 3000);


/* ─────────────────────────────────────────────
   2. TYPING ANIMATION
   Cycles through phrases in the hero heading.
   Each phrase is typed out, paused, then deleted
   before the next one starts.
───────────────────────────────────────────── */
(function () {
  var phrases   = [
    'for learning.',
    'for fun.',
    'for impact.',
    'to solve problems.',
    'to grow every day.'
  ];
  var el        = document.getElementById('typing-text');
  var current   = 0;   // index of current phrase
  var charIndex = 0;   // how many chars are typed so far
  var deleting  = false;

  var TYPE_SPEED   = 80;   // ms per character while typing
  var DELETE_SPEED = 40;   // ms per character while deleting
  var PAUSE_END    = 1800; // ms to wait at the end of a phrase
  var PAUSE_START  = 300;  // ms to wait before typing next phrase

  function tick() {
    var phrase = phrases[current];

    if (!deleting) {
      // Type one character
      charIndex++;
      el.textContent = phrase.slice(0, charIndex);

      if (charIndex === phrase.length) {
        // Finished typing — pause then start deleting
        setTimeout(function () {
          deleting = true;
          tick();
        }, PAUSE_END);
        return;
      }
    } else {
      // Delete one character
      charIndex--;
      el.textContent = phrase.slice(0, charIndex);

      if (charIndex === 0) {
        // Finished deleting — move to next phrase
        deleting = false;
        current  = (current + 1) % phrases.length;
        setTimeout(tick, PAUSE_START);
        return;
      }
    }

    setTimeout(tick, deleting ? DELETE_SPEED : TYPE_SPEED);
  }

  // Start after the loader is gone (1.4 s)
  setTimeout(tick, 1400);
})();


/* ─────────────────────────────────────────────
   3. SCROLL REVEAL
   Elements start invisible (.reveal in CSS),
   script adds .visible when they enter view.
───────────────────────────────────────────── */
var revealElements = document.querySelectorAll('.reveal');

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(function (el) {
  observer.observe(el);
});


/* ─────────────────────────────────────────────
   3. HAMBURGER MENU
   Toggles the mobile nav drawer open/closed.
───────────────────────────────────────────── */
var hamburger  = document.getElementById('nav-hamburger');
var mobileMenu = document.getElementById('nav-mobile-menu');

function toggleMenu(forceClose) {
  var isOpen = hamburger.classList.contains('open');

  if (forceClose || isOpen) {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  } else {
    hamburger.classList.add('open');
    mobileMenu.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
  }
}

hamburger.addEventListener('click', function () {
  toggleMenu();
});

// Close when a drawer link is clicked
document.querySelectorAll('.mobile-link').forEach(function (link) {
  link.addEventListener('click', function () {
    toggleMenu(true);
  });
});

// Close when clicking outside the drawer
document.addEventListener('click', function (e) {
  if (
    mobileMenu.classList.contains('open') &&
    !mobileMenu.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    toggleMenu(true);
  }
});


/* ─────────────────────────────────────────────
   4. CONTACT FORM
   Prevents page reload and shows a success
   state on the button for 3.5 seconds.
───────────────────────────────────────────── */
function sendMessage(event) {
  event.preventDefault();

  var button = document.getElementById('send-btn');

  button.textContent      = 'Sent ✓';
  button.style.background = '#4ade80';
  button.style.color      = '#0c0c0e';
  button.disabled         = true;

  setTimeout(function () {
    button.textContent      = 'Send Message';
    button.style.background = '';
    button.style.color      = '';
    button.disabled         = false;
  }, 3500);
}
