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
   3b. SKILL BAR ANIMATION
   When a bar scrolls into view, animate its
   width from 0 to the value in data-width.
───────────────────────────────────────────── */
var skillBars = document.querySelectorAll('.skill-bar-fill');

var barObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var target = entry.target;
      var width  = target.getAttribute('data-width');
      // slight delay so bars animate one after the other
      setTimeout(function () {
        target.style.width = width + '%';
      }, 150);
      barObserver.unobserve(target);
    }
  });
}, { threshold: 0.3 });

skillBars.forEach(function (bar) {
  barObserver.observe(bar);
});


/* ─────────────────────────────────────────────
   3c. PROJECT CARDS — bento grid
   Pop-in on scroll, cursor glow + 3D tilt on hover.
───────────────────────────────────────────── */

/* ── Pop-in on scroll ── */
var allCards = document.querySelectorAll('.pcard, .cert-card');

var cardObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var card  = entry.target;
      var index = Array.from(allCards).indexOf(card);
      setTimeout(function () {
        card.classList.add('card-visible');
      }, index * 90);
      cardObserver.unobserve(card);
    }
  });
}, { threshold: 0.08 });

allCards.forEach(function (card) { cardObserver.observe(card); });

/* ── Mouse glow + 3D tilt on all pcards ── */
document.querySelectorAll('.pcard').forEach(function (card) {
  var glow = card.querySelector('.pcard-glow');

  card.addEventListener('mousemove', function (e) {
    var rect = card.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    var cx = rect.width  / 2;
    var cy = rect.height / 2;

    /* glow follows cursor */
    var px = (x / rect.width  * 100).toFixed(1) + '%';
    var py = (y / rect.height * 100).toFixed(1) + '%';
    card.style.setProperty('--mx', px);
    card.style.setProperty('--my', py);

    /* subtle 3D tilt — max ±8deg */
    var tiltX = ((y - cy) / cy * -8).toFixed(2);
    var tiltY = ((x - cx) / cx *  8).toFixed(2);
    card.style.transform =
      'scale(1.01) perspective(900px) rotateX(' + tiltX + 'deg) rotateY(' + tiltY + 'deg)';
  });

  card.addEventListener('mouseleave', function () {
    card.style.transform = '';
  });
});


/* ─────────────────────────────────────────────
   3d. EDU CARD POP-IN + SCORE BARS
───────────────────────────────────────────── */
var eduCards = document.querySelectorAll('.edu-card-new');

var eduObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('edu-visible');
      eduObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

eduCards.forEach(function (card) { eduObserver.observe(card); });

/* mouse-glow on edu + cert cards */
document.querySelectorAll('.edu-card-new, .cert-card').forEach(function (card) {
  card.addEventListener('mousemove', function (e) {
    var rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width  * 100) + '%');
    card.style.setProperty('--my', ((e.clientY - rect.top)  / rect.height * 100) + '%');
  });
});

/* score bar animation */
var scoreBarObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var fill = entry.target;
      var targetWidth = fill.getAttribute('data-score');
      if (targetWidth) {
        setTimeout(function () { fill.style.width = targetWidth + '%'; }, 350);
      }
      scoreBarObserver.unobserve(fill);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.edu-bar-fill').forEach(function (bar) {
  scoreBarObserver.observe(bar);
});


/* ─────────────────────────────────────────────
   5. ACTIVE NAV LINK (smooth scroll spy)
   Watches each section and slides a gold bar
   under the matching nav link as you scroll.
───────────────────────────────────────────── */
(function () {
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-links a');
  var navList  = document.querySelector('.nav-links');

  // Inject the sliding indicator bar into the <ul>
  var indicator = document.createElement('span');
  indicator.className = 'nav-indicator';
  navList.appendChild(indicator);

  // Move the indicator under whichever link is active
  function moveIndicator(link) {
    if (!link) {
      indicator.style.opacity = '0';
      return;
    }
    var linkRect = link.getBoundingClientRect();
    var listRect = navList.getBoundingClientRect();
    indicator.style.left    = (linkRect.left - listRect.left) + 'px';
    indicator.style.width   = linkRect.width + 'px';
    indicator.style.opacity = '1';
  }

  // Set active class + slide indicator
  function setActive(id) {
    var activeLink = null;
    navLinks.forEach(function (link) {
      if (link.getAttribute('href') === '#' + id) {
        link.classList.add('active');
        activeLink = link;
      } else {
        link.classList.remove('active');
      }
    });
    moveIndicator(activeLink);
  }

  // IntersectionObserver — fires when a section hits the upper ~40%
  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  }, {
    rootMargin: '0px 0px -60% 0px',
    threshold: 0
  });

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });

  // Also update on click so it feels instant
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      var id = link.getAttribute('href').replace('#', '');
      setActive(id);
    });
  });

  // Reposition on window resize (font/layout shifts)
  window.addEventListener('resize', function () {
    var active = document.querySelector('.nav-links a.active');
    moveIndicator(active || null);
  });
})();


/* ─────────────────────────────────────────────
   5. HAMBURGER MENU
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
   5b. FLOATING BACK-TO-TOP
   Shows after scrolling 300px, hides at top.
───────────────────────────────────────────── */
(function () {
  var btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });
})();


/* ─────────────────────────────────────────────
   6. CONTACT FORM — WhatsApp (wa.me)
   Builds a pre-filled WhatsApp message from
   the form fields and opens it in a new tab.
───────────────────────────────────────────── */
function sendMessage(event) {
  event.preventDefault();

  var name    = document.getElementById('name').value.trim();
  var email   = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();
  var button  = document.getElementById('send-btn');

  /* Build the WhatsApp message text */
  var text =
    '👋 Hi Roushan, I found you on your portfolio!\n\n' +
    '*Name:* '    + name    + '\n' +
    '*Email:* '   + email   + '\n\n' +
    '*Message:*\n' + message;

  /* Encode and open wa.me link */
  var waURL = 'https://wa.me/918529067144?text=' + encodeURIComponent(text);
  window.open(waURL, '_blank');

  /* Button feedback */
  button.textContent      = 'Opening WhatsApp ↗';
  button.style.background = '#25d366';
  button.style.color      = '#fff';
  button.disabled         = true;

  /* Reset form + button after 3 s */
  setTimeout(function () {
    button.textContent      = 'Send Message';
    button.style.background = '';
    button.style.color      = '';
    button.disabled         = false;
    document.getElementById('name').value    = '';
    document.getElementById('email').value   = '';
    document.getElementById('message').value = '';
  }, 3000);
}
