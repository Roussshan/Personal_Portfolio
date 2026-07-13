# Personal Portfolio

A responsive personal portfolio website built with **HTML, CSS, and vanilla JavaScript**.

It is designed to present profile details, education, projects, certifications, and contact information in a clean, single-page layout.

---
**Live Demo:** [Roushan.vercel.app](https://roussshan.vercel.app/) 
---

## Features

* Animated loader on initial page load
* Typing effect in the hero section
* Scroll reveal animations using `IntersectionObserver`
* Animated skill progress bars on scroll
* Sticky navigation with active-link indicator
* Mobile-friendly hamburger navigation menu
* Contact form UX with success-state button feedback
* Responsive layout for desktop, tablet, and mobile

---

## Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla)

No frameworks or external JavaScript libraries are required.

---

## Project Structure

```text
Personal_Portfolio/
├── assets/
│   ├── docs/      # Resume and certificate PDFs
│   └── images/    # Hero image, favicon, certificate images, and background art
├── index.html     # Main page markup and sections
├── style.css      # Styling, layout, animations, responsive rules
├── script.js      # Loader, typing, reveal, nav, and form behavior
└── README.md
```

---

## Run Locally

1. Clone the repository:

```bash
git clone https://github.com/Roussshan/Personal_Portfolio.git
```

2. Move into the project folder:

```bash
cd Personal_Portfolio
```

3. Open `index.html` in your browser.

**Alternative:**

* Use the VS Code Live Server extension and click **Go Live**.

---

## Customization Guide

Update these parts to personalize the portfolio:

* Profile text, sections, and metadata in `index.html`
* Colors, fonts, spacing, and animation style in `style.css`
* Typing phrases and interaction logic in `script.js`
* Asset paths in `index.html` if you rename or move files inside `assets/`

If you are adding real message delivery to the contact form, connect it to a backend API or a form service such as Formspree/EmailJS.

---

## Deployment

You can deploy this static site on:

* GitHub Pages
* Netlify
* Vercel

After deployment, replace the Live Demo URL in this README.

---

## Contact

* **GitHub:** https://github.com/Roussshan
* **LinkedIn:** https://www.linkedin.com/in/roushan-kumar-539178381/
* **Email:** [roussshan@gmail.com](mailto:roussshan@gmail.com)

---

## License

This project is available for personal use and learning.
