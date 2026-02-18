const navByPath = {
  "/": "home",
  "/index.html": "home",
  "/weekend-itinerary": "itinerary",
  "/weekend-itinerary.html": "itinerary",
  "/eat-drink": "food",
  "/eat-drink.html": "food",
  "/about": "about",
  "/about.html": "about",
  "/contact": "contact",
  "/contact.html": "contact",
  "/privacy-policy": "privacy",
  "/privacy-policy.html": "privacy"
};

function markCurrentNav() {
  const currentPath = window.location.pathname;
  const currentKey = navByPath[currentPath] || "home";

  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === currentKey) {
      link.classList.add("is-current");
      link.setAttribute("aria-current", "page");
    }
  });
}

function setCurrentYear() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

function setupAttractionFilters() {
  const chips = Array.from(document.querySelectorAll(".filter-chip"));
  const cards = Array.from(document.querySelectorAll(".place-card"));

  if (!chips.length || !cards.length) {
    return;
  }

  function applyFilter(filter) {
    cards.forEach((card) => {
      const tags = card.dataset.tags || "";
      const isMatch = filter === "all" || tags.includes(filter);
      card.classList.toggle("is-hidden", !isMatch);
    });

    chips.forEach((chip) => {
      chip.classList.toggle("is-active", chip.dataset.filter === filter);
    });
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      applyFilter(chip.dataset.filter || "all");
    });
  });
}

function setupRevealAnimations() {
  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  reveals.forEach((item) => observer.observe(item));
}

markCurrentNav();
setCurrentYear();
setupAttractionFilters();
setupRevealAnimations();
