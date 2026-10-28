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
