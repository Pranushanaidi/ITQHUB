/* ── GLOBAL DATA ─────────────────────────────────────── */
const courses = [
  { id: 1, cat: 'prog', 
    emoji: '🐍',
     bg: 'linear-gradient(135deg,#1a2e1a,#0d1a0d)', 
     title: 'Python Programming', 
     desc: 'Master Python from basics to advanced — OOP, file handling, automation, and scripting.', 
     level: 'Beginner', type: 'Certification', duration: '3 Months', hot: false },
  { id: 2, cat: 'web', emoji: '🌐', bg: 'linear-gradient(135deg,#1a1a2e,#0d0d1a)',
     title: 'Django Web Development',
      desc: 'Build scalable, production-ready web apps using Python & Django with REST API integration.',
       level: 'Intermediate',
        type: 'Certification',
         duration: '4 Months',
          hot: true },
  { id: 3, cat: 'web', 
    emoji: '⚛️', 
    bg: 'linear-gradient(135deg,#0d1a2a,#071119)', title: 'Full Stack JavaScript', desc: 'HTML, CSS, JS, React.js, Node.js, MongoDB — become a complete full-stack developer.', level: 'Intermediate', type: 'Diploma', duration: '6 Months', hot: true },
  { id: 4, cat: 'data', emoji: '📊', bg: 'linear-gradient(135deg,#1a0d1a,#0d0714)', title: 'Data Science & Analytics', desc: 'Data wrangling, visualization, statistical analysis, and BI using Python & SQL.', level: 'Intermediate', type: 'Certification', duration: '4 Months', hot: false },
  { id: 5, cat: 'data', emoji: '🤖', bg: 'linear-gradient(135deg,#1a1a0d,#0f0f07)', title: 'Machine Learning & AI', desc: 'Supervised/unsupervised learning, neural networks, NLP, and model deployment.', level: 'Advanced', type: 'Diploma', duration: '6 Months', hot: true },
  { id: 6, cat: 'cloud', emoji: '☁️', bg: 'linear-gradient(135deg,#0d1a1a,#07100d)', title: 'AWS Cloud Computing', desc: 'EC2, S3, Lambda, RDS, IAM — become AWS-certified and cloud architect ready.', level: 'Intermediate', type: 'Certification', duration: '3 Months', hot: false },
  { id: 7, cat: 'cloud', emoji: '🛠️', bg: 'linear-gradient(135deg,#1a0d0d,#0f0707)', title: 'DevOps Engineering', desc: 'Git, Docker, Kubernetes, Jenkins CI/CD, Terraform — the complete DevOps pipeline.', level: 'Advanced', type: 'Diploma', duration: '5 Months', hot: false },
  { id: 8, cat: 'web', emoji: '🎨', bg: 'linear-gradient(135deg,#0d1a1a,#071010)', title: 'Frontend Development', desc: 'HTML5, CSS3, Tailwind, JavaScript ES6+, and React to build stunning modern UIs.', level: 'Beginner', type: 'Certification', duration: '2 Months', hot: false },
  { id: 9, cat: 'prog', emoji: '🗄️', bg: 'linear-gradient(135deg,#1a120d,#0d0907)', title: 'MySQL & Database Design', desc: 'SQL queries, stored procedures, indexing, database design and optimisation.', level: 'Beginner', type: 'Certification', duration: '2 Months', hot: false },
];

const testimonials = [
  { name: 'Priya Sharma', role: 'Software Engineer @ TCS', init: 'PS', text: 'ITQHUB completely changed my career trajectory. The Django course was incredibly hands-on — I got placed within 2 months of completing it!', stars: 5 },
  { name: 'Rahul Verma', role: 'Data Analyst @ Infosys', init: 'RV', text: 'The Data Science course here is unmatched. Real projects, real datasets, and instructors who have actually worked in the field.', stars: 5 },
  { name: 'Sneha Patel', role: 'Frontend Dev @ Startup', init: 'SP', text: 'I came with zero coding knowledge. After 6 months at ITQHUB, I landed my first job as a React developer. Amazing support!', stars: 5 },
  { name: 'Arjun Mehta', role: 'Cloud Architect @ Wipro', init: 'AM', text: 'The AWS course gave me both theoretical depth and practical lab experience. Cleared my certification on the first attempt!', stars: 5 },
  { name: 'Kavita Singh', role: 'ML Engineer @ Zomato', init: 'KS', text: 'ITQHUB broke Machine Learning down step-by-step. The projects on real datasets were the real game-changers for me.', stars: 5 },
  { name: 'Vikram Nair', role: 'DevOps Engineer @ HCL', init: 'VN', text: 'The DevOps diploma covered everything — Docker, Kubernetes, Jenkins. I went from developer to DevOps in just 5 months.', stars: 5 },
];

/* ── NAVBAR ──────────────────────────────────────────── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const btt = document.getElementById('btt');

  // highlight active page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === currentPage || a.getAttribute('href') === '../' + currentPage) {
      a.classList.add('active');
    }
  });

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    if (btt) btt.classList.toggle('show', window.scrollY > 400);
  });

  hamburger && hamburger.addEventListener('click', function () {
    this.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  if (btt) btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // close mobile on link click
  document.querySelectorAll('.mobile-menu a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger && hamburger.classList.remove('open');
      mobileMenu && mobileMenu.classList.remove('open');
    });
  });
}

/* ── SCROLL REVEAL ───────────────────────────────────── */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ── LOADER ──────────────────────────────────────────── */
function initLoader() {
  const loader = document.getElementById('loader');
  if (loader) setTimeout(() => loader.classList.add('hidden'), 700);
}

/* ── NAVBAR HTML ─────────────────────────────────────── */
function getNavHTML(root = '') {
  return `
<nav id="navbar">
  <div class="container nav-inner">
    <a href="${root}index.html" class="logo">ITQ<span>HUB</span></a>
    <ul class="nav-links">
      <li><a href="${root}index.html">Home</a></li>
      <li><a href="${root}pages/about.html">About</a></li>
      <li><a href="${root}pages/courses.html">Courses</a></li>
      <li><a href="${root}pages/why.html">Why Us</a></li>
      <li><a href="${root}pages/testimonials.html">Reviews</a></li>
      <li><a href="${root}pages/contact.html">Contact</a></li>
    </ul>
    <a href="${root}pages/contact.html" class="btn btn-primary" style="padding:10px 22px;font-size:.82rem;">Enroll Now →</a>
    <button class="hamburger" id="hamburger"><span></span><span></span><span></span></button>
  </div>
</nav>
<ul class="mobile-menu" id="mobileMenu">
  <li><a href="${root}index.html">Home</a></li>
  <li><a href="${root}pages/about.html">About</a></li>
  <li><a href="${root}pages/courses.html">Courses</a></li>
  <li><a href="${root}pages/why.html">Why Us</a></li>
  <li><a href="${root}pages/testimonials.html">Reviews</a></li>
  <li><a href="${root}pages/contact.html">Contact</a></li>
  <li><a href="${root}pages/contact.html" class="btn btn-primary" style="text-align:center;justify-content:center;">Enroll Now →</a></li>
</ul>`;
}

/* ── FOOTER HTML ─────────────────────────────────────── */
function getFooterHTML(root = '') {
  return `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="${root}index.html" class="logo">ITQ<span>HUB</span></a>
        <p>India's trusted IT training partner. We turn learners into leaders through cutting-edge technology education.</p>
        <div class="footer-social">
          <span class="social-btn">f</span>
          <span class="social-btn">𝕏</span>
          <span class="social-btn">in</span>
          <span class="social-btn">▶</span>
          <span class="social-btn">◎</span>
        </div>
      </div>
      <div class="footer-col">
        <h4>Courses</h4>
        <ul class="footer-links">
          <li><a href="${root}pages/courses.html">Python Programming</a></li>
          <li><a href="${root}pages/courses.html">Django Framework</a></li>
          <li><a href="${root}pages/courses.html">Full Stack JS</a></li>
          <li><a href="${root}pages/courses.html">Data Science</a></li>
          <li><a href="${root}pages/courses.html">Cloud & DevOps</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul class="footer-links">
          <li><a href="${root}pages/about.html">About Us</a></li>
          <li><a href="${root}pages/why.html">Why ITQHUB</a></li>
          <li><a href="${root}pages/testimonials.html">Reviews</a></li>
          <li><a href="${root}pages/contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Support</h4>
        <ul class="footer-links">
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Refund Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2024 ITQHUB. All rights reserved.</p>
      <p>Built with ❤️ by <a href="#">ITQHUB Team</a></p>
    </div>
  </div>
</footer>`;
}

/* ── MARQUEE HTML ────────────────────────────────────── */
function getMarqueeHTML() {
  const items = ['Python', 'Django', 'JavaScript', 'React.js', 'MySQL', 'Data Science', 'Machine Learning', 'AWS Cloud', 'DevOps', 'HTML & CSS', 'Node.js', 'MongoDB'];
  const doubled = [...items, ...items].map(i => `<span class="marquee-item">${i}</span>`).join('');
  return `<div class="marquee-section"><div class="marquee-track">${doubled}</div></div>`;
}

/* ── COURSE CARD HTML ────────────────────────────────── */
function courseCardHTML(c, contactPage = 'contact.html') {
  return `
  <div class="card course-card reveal" style="display:flex;flex-direction:column;overflow:hidden;">
    <div style="height:160px;display:flex;align-items:center;justify-content:center;font-size:4rem;background:${c.bg};position:relative;">
      ${c.emoji}
      ${c.hot ? '<span class="badge badge-hot" style="position:absolute;top:14px;right:14px;">🔥 Hot</span>' : ''}
    </div>
    <div style="padding:24px;flex:1;display:flex;flex-direction:column;">
      <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
        <span class="badge badge-level">${c.level}</span>
        <span class="badge badge-type">${c.type}</span>
      </div>
      <div style="font-family:var(--font-head);font-weight:700;font-size:1.08rem;margin-bottom:8px;">${c.title}</div>
      <div style="font-size:.84rem;color:var(--muted);flex:1;">${c.desc}</div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:20px;padding-top:16px;border-top:1px solid var(--border);">
        <span style="font-size:.8rem;color:var(--muted);">Duration: <strong style="color:var(--white);">${c.duration}</strong></span>
        <a href="${contactPage}?course=${encodeURIComponent(c.title)}" class="btn-sm">Enroll →</a>
      </div>
    </div>
  </div>`;
}

/* ── TESTIMONIAL CARD HTML ───────────────────────────── */
function testiCardHTML(t) {
  return `
  <div class="card testi-card reveal" style="padding:30px;">
    <div style="color:var(--gold);font-size:.85rem;margin-bottom:10px;">${'★'.repeat(t.stars)}</div>
    <div style="font-size:3rem;color:var(--accent);opacity:.3;line-height:1;">"</div>
    <p style="font-size:.9rem;color:var(--muted);font-style:italic;margin-bottom:20px;">${t.text}</p>
    <div style="display:flex;align-items:center;gap:14px;">
      <div style="width:46px;height:46px;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--gold));display:flex;align-items:center;justify-content:center;font-family:var(--font-head);font-weight:800;font-size:1rem;color:var(--navy);flex-shrink:0;">${t.init}</div>
      <div>
        <div style="font-family:var(--font-head);font-weight:700;font-size:.95rem;">${t.name}</div>
        <div style="font-size:.78rem;color:var(--muted);">${t.role}</div>
      </div>
    </div>
  </div>`;
}

/* ── CONTACT FORM HANDLER ────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  // pre-fill course from URL param
  const params = new URLSearchParams(window.location.search);
  const courseParam = params.get('course');
  const courseSelect = document.getElementById('course');
  if (courseParam && courseSelect) {
    for (let opt of courseSelect.options) {
      if (opt.value === courseParam) { opt.selected = true; break; }
    }
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('formMsg');

    if (!fname || !lname || !email) {
      msg.className = 'form-msg error';
      msg.textContent = '⚠️ Please fill in all required fields.';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msg.className = 'form-msg error';
      msg.textContent = '⚠️ Please enter a valid email address.';
      return;
    }
    const btn = form.querySelector('button[type=submit]');
    btn.textContent = 'Sending…'; btn.disabled = true;
    setTimeout(() => {
      msg.className = 'form-msg success';
      msg.textContent = `✅ Thank you, ${fname}! We'll contact you within 24 hours.`;
      form.reset();
      btn.textContent = 'Send Message →'; btn.disabled = false;
    }, 1400);
  });
}

/* ── COUNTER ANIMATION ───────────────────────────────── */
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    let count = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      count = Math.min(count + step, target);
      el.textContent = count + suffix;
      if (count >= target) clearInterval(timer);
    }, 25);
  });
}

/* ── INIT ALL ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavbar();
  initReveal();
  initContactForm();
});
