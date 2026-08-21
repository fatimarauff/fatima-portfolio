// =========================================================
// EDIT YOUR PROJECTS HERE.
// You can change titles, categories, years, links and images.
// For images:
// 1) Put your image inside: assets/images/
// 2) Write the file path below, e.g. "assets/images/project-1.jpg"
// =========================================================

const projects = [
  {
    number: "01",
    title: "Science, Made Visual",
    category: "SCIENTIFIC VISUALIZATION / EDITORIAL",
    year: "2026",
    image: "assets/images/project-1/drug-delivery-cover.png",
    link: "project-1.html"
  },
  {
    number: "02",
    title: "Synaptix Studio",
    category: "BRAND IDENTITY / DIGITAL",
    year: "2026",
    image: "project-2/synaptix-office.png",
    link: "project-2.html"
  },
  {
    number: "03",
    title: "Visual Systems",
    category: "DESIGN SYSTEM / COMMUNICATION",
    year: "2026",
    image: "",
    link: "project-3.html"
  },
  {
    number: "04",
    title: "Research Communication",
    category: "SCIENCE / STORYTELLING",
    year: "2026",
    image: "",
    link: "project-4.html"
  }
];

// Build project cards automatically (homepage only)
const grid = document.getElementById("projectGrid");
const template = document.getElementById("projectTemplate");

if (grid && template) {
  projects.forEach((project) => {
    const node = template.content.cloneNode(true);
    const link = node.querySelector(".project-link");
    const img = node.querySelector(".project-image");
    const placeholder = node.querySelector(".project-placeholder");

    node.querySelector(".project-number").textContent = `(${project.number})`;
    node.querySelector(".project-title").textContent = project.title;
    node.querySelector(".project-category").textContent = project.category;
    node.querySelector(".project-year").textContent = project.year;
    link.href = project.link || "#";

    if (project.image) {
      img.src = project.image;
      img.alt = project.title;
      img.style.display = "block";
      placeholder.style.display = "none";
    }

    grid.appendChild(node);
  });
}

// Header blur
const header = document.getElementById("siteHeader");
const updateHeader = () => {
  if (header) header.classList.toggle("scrolled", window.scrollY > 32);
};
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

// Custom cursor
const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let ringX = mouseX;
let ringY = mouseY;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (dot) {
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
  }
});

function animateCursor() {
  ringX += (mouseX - ringX) * 0.14;
  ringY += (mouseY - ringY) * 0.14;
  if (ring) {
    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";
  }
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll("a, .hover-target").forEach((el) => {
  el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
  el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
});

// Scroll reveal
const revealEls = document.querySelectorAll(".reveal, .project-card, .about-grid, .statement-copy");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("in-view");
  });
}, { threshold: 0.14 });

revealEls.forEach(el => revealObserver.observe(el));

// Slight blur while actively scrolling
let scrollTimer;
window.addEventListener("scroll", () => {
  document.body.classList.add("is-scrolling");
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    document.body.classList.remove("is-scrolling");
  }, 120);
}, { passive: true });

// Magnetic nav movement
document.querySelectorAll(".magnetic").forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * .12}px, ${y * .22}px)`;
  });
  el.addEventListener("mouseleave", () => {
    el.style.transform = "";
  });
});
