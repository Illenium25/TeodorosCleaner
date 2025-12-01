document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal');

  function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect().top;
      if (rect < trigger) el.classList.add('visible');
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});