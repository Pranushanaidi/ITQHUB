# ITQHUB – Professional IT Training Institute Website

![ITQHUB](https://img.shields.io/badge/ITQHUB-Website-00d4ff?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A fully responsive, professional multi-page website built for **ITQHUB** – India's Premier IT Training & Certification Institute.

---

## 🚀 Live Demo

> Open `index.html` directly in browser or run with Python server (see below)

---

## 📁 Project Structure

```
itqhub-site/
├── index.html                  # Home Page
├── css/
│   └── style.css               # Global Shared Styles
├── js/
│   └── main.js                 # Global Shared JavaScript
└── pages/
    ├── about.html              # About Us Page
    ├── courses.html            # Courses Page
    ├── why.html                # Why Choose Us Page
    ├── testimonials.html       # Student Reviews Page
    └── contact.html            # Contact Us Page
```

---

## 📄 Pages Overview

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, features strip, course preview, CTA |
| About | `pages/about.html` | Story, team, milestones, stats |
| Courses | `pages/courses.html` | All 9 courses, filter, syllabus modal |
| Why Us | `pages/why.html` | 8 reasons + comparison table |
| Reviews | `pages/testimonials.html` | Alumni reviews + rating summary |
| Contact | `pages/contact.html` | Form, FAQ accordion, map, office info |

---

## ✅ Features

### Mandatory Requirements (All Completed)
- ✅ Responsive Design – works on mobile, tablet, desktop
- ✅ Professional User Interface – dark tech theme with animations
- ✅ Proper Navigation – fixed navbar with active page highlight
- ✅ About Section – story, team, milestones
- ✅ Courses/Services Section – 9 courses with filter & modal
- ✅ Contact Form – with validation and success/error messages
- ✅ Mobile-Friendly Layout – hamburger menu, flexible grids
- ✅ Clean Code Structure – shared CSS/JS, well-commented

### Bonus Features (Also Included)
- ✅ Animations & Interactive UI
  - Scroll reveal animations
  - Counter animation on stats
  - Marquee technology strip
  - Hover effects on all cards
  - Page loader
- ✅ SEO Optimization – meta tags, semantic HTML, descriptive titles
- ✅ Course filter system (All / Web Dev / Data & AI / Cloud / Programming)
- ✅ Syllabus modal popup on courses page
- ✅ FAQ accordion on contact page
- ✅ Comparison table (ITQHUB vs other institutes)
- ✅ Rating summary with progress bars
- ✅ Back-to-top button
- ✅ URL parameter auto-fills course in contact form

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure & semantic markup |
| CSS3 | Styling, animations, responsive layout |
| JavaScript (Vanilla) | Dynamic rendering, interactivity, form validation |
| Google Fonts | Syne (headings) + DM Sans (body) |
| CSS Variables | Theming and consistent design tokens |
| IntersectionObserver API | Scroll reveal animations |
| Python http.server | Local development server |

> No frameworks, no npm, no build tools required — pure HTML/CSS/JS.

---

## ▶️ How to Run

### Option 1 – Direct Browser (Quickest)
```
Double-click index.html
```
> Note: Page navigation may not work on some browsers without a server.

---

### Option 2 – Python Local Server (Recommended)

**Step 1:** Make sure Python is installed
```bash
python --version
```

**Step 2:** Navigate to project folder
```bash
cd path/to/itqhub-site
```

**Step 3:** Start server
```bash
python -m http.server 8000 --bind 127.0.0.1
```

**Step 4:** Open in browser
```
http://127.0.0.1:8000
```

---

### Option 3 – VS Code Live Server (Easiest)

1. Install **Live Server** extension in VS Code (by Ritwick Dey)
2. Right-click `index.html`
3. Click **"Open with Live Server"**
4. Browser opens automatically at `http://127.0.0.1:5500`

---

## 🌐 Deployment (GitHub Pages)

1. Create a new GitHub repository
2. Upload all files keeping the folder structure intact
3. Go to **Settings → Pages**
4. Set source to **main branch → / (root)**
5. Save — your site will be live at:
   ```
   https://yourusername.github.io/itqhub-site/
   ```

---

## 📱 Responsive Breakpoints

| Screen Size | Layout |
|-------------|--------|
| Desktop (>900px) | Full multi-column layout |
| Tablet (640–900px) | 2-column grids, stacked sections |
| Mobile (<640px) | Single column, hamburger menu |

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Color | `#00d4ff` (Cyan) |
| Background | `#0a0f1e` (Dark Navy) |
| Card Background | `#111827` |
| Gold Accent | `#f5a623` |
| Muted Text | `#7a8aaa` |
| Border | `rgba(0,212,255,0.15)` |
| Font – Heading | Syne (800 weight) |
| Font – Body | DM Sans (400/500) |

---

## 📋 Courses Included

1. 🐍 Python Programming *(Beginner – 3 Months)*
2. 🌐 Django Web Development *(Intermediate – 4 Months)*
3. ⚛️ Full Stack JavaScript *(Intermediate – 6 Months)*
4. 📊 Data Science & Analytics *(Intermediate – 4 Months)*
5. 🤖 Machine Learning & AI *(Advanced – 6 Months)*
6. ☁️ AWS Cloud Computing *(Intermediate – 3 Months)*
7. 🛠️ DevOps Engineering *(Advanced – 5 Months)*
8. 🎨 Frontend Development *(Beginner – 2 Months)*
9. 🗄️ MySQL & Database Design *(Beginner – 2 Months)*

---

## 👨‍💻 Developer Notes

- All shared navbar and footer HTML is generated by `js/main.js` using `getNavHTML()` and `getFooterHTML()` functions — edit once, updates all pages.
- Course data and testimonial data are stored as JS arrays in `main.js` — easy to update.
- The contact form uses client-side validation only (no backend). To make it functional, integrate with Django/Node.js or a service like Formspree.
- Active nav link is automatically highlighted based on the current page URL.

---

## 📞 Contact Info (Demo Data)

- **Address:** ITQHUB Training Centre, Sector 18, Noida – 201301
- **Phone:** +91 98765 43210
- **Email:** info@itqhub.com
- **Hours:** Mon–Sat: 9 AM – 7 PM

---

## 📝 License

This project was built as part of the **ITQHUB Website Development Challenge (36-Hour Assignment)**.

---

*Built with ❤️ using HTML, CSS & JavaScript*
