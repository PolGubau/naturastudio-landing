document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".parallax-img");

  window.addEventListener("scroll", () => {
    images.forEach(img => {
      const parent = img.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      const speed = parseFloat(img.dataset.speed) || 0.2;

      // rect.top = distancia del top del contenedor al viewport
      // si rect.top > viewport height → aún no visible → opcional
      const offset = -rect.top * speed;
      img.style.transform = `translateY(${offset}px)`;
    });
  });
});
