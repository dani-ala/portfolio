// Animación simple para mover decoraciones ligeramente con el scroll
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  document.querySelectorAll(".decor").forEach((el) => {
    const speed = el.classList.contains("moon") ? 0.3 : 0.5;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});
