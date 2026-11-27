const menuToggle = document.querySelector("#menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");

// Toggles the hanburger button to be an x symbol whenver opened on devices with smaller viewports
menuToggle?.addEventListener("click", () => {
  mobileMenu?.classList.toggle("hidden");

  const isOpen = !mobileMenu?.classList.contains("hidden");

  menuToggle?.setAttribute("aria-expanded", String(isOpen));
  menuToggle?.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});