# R Tharun Kumar — Premium Portfolio

A responsive, dark glassmorphism portfolio website built with HTML, CSS and vanilla JavaScript. It is dependency-free at runtime; Google Fonts are loaded online, with system-font fallbacks.

## Run locally
Open `index.html` in a browser. For best results, serve the folder with a local static server (for example, VS Code Live Server).

## Centralized content
Edit `config.js` to update:
- Name, email, GitHub and LinkedIn
- Rotating professional titles
- Skills and categories
- Independent projects and academic projects
- Education, certification and achievements
- Resume PDF path

Project and academic detail modals, category filters, mobile navigation, active navigation state, reduced-motion support, and a mailto contact workflow are implemented.

## Add your resume
1. Put your actual resume PDF in `assets/resume/`.
2. Name it `Tharun_Kumar_Resume.pdf`, or change `resumePath` in `config.js`.
3. The View and Download buttons activate only when the configured PDF exists. No placeholder or fake PDF is supplied.

## Configure contact
Add your email address in `config.js`. The contact form validates its fields and opens the visitor's email application with a prepared message. It does not claim to send messages or store submissions. For server-side delivery, connect a form backend and update `setupContact()` in `script.js`.

## Add project links
Set `github` and `demo` on each project in `config.js`. Empty links are intentionally not rendered as fake URLs.

## Publish
Upload the contents of this folder to a static host such as GitHub Pages, Netlify or Vercel. Keep the folder structure intact (`config.js`, `styles.css`, `script.js`, `favicon.svg`, and `assets/` alongside `index.html`).
