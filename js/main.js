// Menu hamburger untuk mobile
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const isOpen = links.classList.toggle("open");
  toggle.classList.toggle("open", isOpen);
  toggle.setAttribute("aria-expanded", isOpen);
});

// Tutup menu setelah salah satu link diklik
links.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", false);
  })
);

// Ganti light / dark mode, pilihan disimpan di browser
const themeToggle = document.querySelector(".theme-toggle");
const root = document.documentElement;

const updateThemeLabel = () => {
  const ui = uiText[root.lang] || uiText.en;
  themeToggle.setAttribute("aria-label", root.dataset.theme === "dark" ? ui.toLight : ui.toDark);
};

themeToggle.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  updateThemeLabel();
});

// Ganti bahasa EN / ID — teks Inggris asli disimpan dari HTML, terjemahan di js/i18n.js
const langToggle = document.querySelector(".lang-toggle");
const textEls = document.querySelectorAll("[data-i18n]");
const attrEls = document.querySelectorAll("[data-i18n-attr]");
const originalText = new Map();
const originalAttr = new Map();
textEls.forEach((el) => originalText.set(el, el.innerHTML));
attrEls.forEach((el) => {
  const [attr] = el.dataset.i18nAttr.split("|");
  originalAttr.set(el, el.getAttribute(attr));
});

const applyLang = (lang) => {
  const dict = translations[lang] || {};
  textEls.forEach((el) => {
    el.innerHTML = dict[el.dataset.i18n] ?? originalText.get(el);
  });
  attrEls.forEach((el) => {
    const [attr, key] = el.dataset.i18nAttr.split("|");
    el.setAttribute(attr, dict[key] ?? originalAttr.get(el));
  });
  root.lang = lang;
  const ui = uiText[lang] || uiText.en;
  langToggle.setAttribute("aria-label", ui.lang);
  toggle.setAttribute("aria-label", ui.openMenu);
  updateThemeLabel();
};
applyLang(root.lang === "id" ? "id" : "en");

langToggle.addEventListener("click", () => {
  const next = root.lang === "id" ? "en" : "id";
  applyLang(next);
  try { localStorage.setItem("lang", next); } catch (e) {}
});

// Tahun otomatis di footer
document.getElementById("year").textContent = new Date().getFullYear();

// Animasi muncul saat elemen di-scroll
const items = document.querySelectorAll(".section-title, .timeline-item, .card, .skills-grid > div, .about-grid");
items.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }),
  { threshold: 0.15 }
);
items.forEach((el) => observer.observe(el));
