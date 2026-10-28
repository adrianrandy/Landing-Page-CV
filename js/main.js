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
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  themeToggle.setAttribute("aria-label", `Switch to ${next} mode`);
};
updateThemeLabel();

themeToggle.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  updateThemeLabel();
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
