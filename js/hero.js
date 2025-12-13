document.addEventListener('DOMContentLoaded', function () {
// ===== HERO TEXT ROTATION =====
  const heroInfo = document.querySelector('.hero__info');

  if (heroInfo) {
    const phrases = [
      '>> Home cleaning in Seattle, WA <<',
      '>> Move-out cleaning <<',
      '>> Deep cleaning for busy people <<',
      '>> Office & commercial cleaning <<',
      '>> Regular weekly <<',
      '>> Bi-weekly cleaning <<'
      ];

      let index = 0;

        function changeText() {
          heroInfo.classList.add('hero__info--hidden');
    
          setTimeout(() => {
            heroInfo.textContent = phrases[index];
            heroInfo.classList.remove('hero__info--hidden');
            index = (index + 1) % phrases.length;
          }, 500); // время совпадает с transition в CSS
        }
    
        // первый текст сразу
        heroInfo.textContent = phrases[0];
        index = 1;
    
        setInterval(changeText, 2500);
      }
});

