# 🌐 Personal Portfolio

A simple, responsive personal portfolio website built to showcase my **skills**, **projects**, and a bit about **myself** — built as a Computer Science student learning front-end web development.

🔗 **Live Demo:** _(add your GitHub Pages / Netlify / Vercel link here once deployed)_

---

## 📸 Preview

_(Add a screenshot of your site here — you can drag & drop an image into this README on GitHub, or use markdown like below)_

```md
![Portfolio Screenshot](new.jpg)
```

---

## ✨ Features

- 🎯 Clean, minimal design to highlight skills and projects
- 🎬 **Loading screen** that fades out smoothly once the page loads
- 👀 **Scroll animations** — sections fade & slide into view as you scroll
- 📩 **Contact form** with an interactive "Sent ✓" confirmation on the button
- 📱 Responsive layout (works on desktop, tablet, and mobile)

---

## 🛠️ Built With

- **HTML5** — page structure
- **CSS3** — styling and animations
- **JavaScript (Vanilla JS)** — loader, scroll reveal, and contact form logic

No frameworks or libraries — just plain HTML, CSS, and JS. Great for beginners to read and learn from!

---

## 📂 Project Structure

```
Personal_Portfolio/
│
├── index.html      # Main HTML file — page structure & content
├── style.css       # All styling (colors, layout, animations)
├── script.js       # JavaScript — loader, scroll reveal, contact form
└── new.jpg         # Image used in the portfolio
```

---

## ⚙️ How It Works

The `script.js` file handles three main things:

### 1. Page Loader
When the page finishes loading, a loading screen (`#loader`) waits 1.2 seconds and then fades out smoothly using a CSS class called `done`.

### 2. Scroll Reveal Animation
Elements with the class `.reveal` start off invisible. As you scroll and they enter the screen, JavaScript's `IntersectionObserver` adds a `.visible` class to them, triggering a smooth fade-and-slide-in animation defined in `style.css`.

### 3. Contact Form
When the form is submitted, the page **does not reload**. Instead, the "Send" button changes to a green **"Sent ✓"** state for 3.5 seconds before resetting back to normal.

> 📌 **Note:** The form currently only simulates sending a message (for demo purposes). To make it actually send emails, connect it to a service like [EmailJS](https://www.emailjs.com/) or [Formspree](https://formspree.io/).

---

## 🚀 Getting Started

Want to run this project on your own computer? Here's how:

### 1. Clone the repository
```bash
git clone https://github.com/Roussshan/Personal_Portfolio.git
```

### 2. Move into the project folder
```bash
cd Personal_Portfolio
```

### 3. Open it in your browser
Simply double-click `index.html`, or right-click it and choose **"Open with"** → your preferred browser.

That's it — no installation, no build tools, no dependencies needed! 🎉

---

## 🧑‍💻 About Me

I'm a Computer Science student building this portfolio to learn and showcase front-end web development skills. This project helped me practice:

- Working with the DOM in vanilla JavaScript
- Using `IntersectionObserver` for scroll animations
- Structuring a small multi-file web project
- Writing clean, beginner-friendly, well-commented code

---

## 📬 Contact

Feel free to reach out or connect with me!

- GitHub: [@Roussshan](https://github.com/Roussshan)
- Email: roussshan@gmial.com
- LinkedIn: https://www.linkedin.com/in/roushan-kumar-539178381/

---

## 📄 License

This project is open source and free to use for learning purposes. Feel free to fork it and build your own portfolio! ⭐ If you find it helpful, consider giving it a star.
