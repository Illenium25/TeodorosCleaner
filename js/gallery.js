 document.addEventListener('DOMContentLoaded', function () {

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