  document.addEventListener('DOMContentLoaded', function () {
    // ===== HERO TEXT ROTATION =====
    const heroInfo = document.querySelector('.hero__info');

    if (heroInfo) {
      const phrases = [
        '>> Home cleaning in Seattle, WA <<',
        '>> Move-out cleaning for apartments & houses <<',
        '>> Deep cleaning for busy people <<',
        '>> Office & commercial cleaning <<',
        '>> Regular weekly or bi-weekly cleaning <<'
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

    // ===== GALLERY LIGHTBOX =====
    const galleryItems = document.querySelectorAll('.gallery__item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = lightbox ? lightbox.querySelector('.lightbox__image') : null;

    if (galleryItems.length && lightbox && lightboxImage) {
      galleryItems.forEach((item) => {
        item.addEventListener('click', () => {
          const fullSrc = item.dataset.full || item.querySelector('img').src;
          lightboxImage.src = fullSrc;
          lightbox.classList.add('lightbox--open');
        });
      });

      const closeElements = lightbox.querySelectorAll('[data-lightbox-close]');
      closeElements.forEach((el) => {
        el.addEventListener('click', () => {
          lightbox.classList.remove('lightbox--open');
          lightboxImage.src = '';
        });
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('lightbox--open')) {
          lightbox.classList.remove('lightbox--open');
          lightboxImage.src = '';
        }
      });
    }
  });