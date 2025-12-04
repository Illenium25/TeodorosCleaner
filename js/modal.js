const modal = document.getElementById("estimateModal");
const openBtns = document.querySelectorAll("[data-open-estimate]");
const closeBtn = modal.querySelector(".modal__close");
const overlay = modal.querySelector(".modal__overlay");

// открыть модалку
openBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.classList.add("active");
  });
});

// закрыть модалку
closeBtn.addEventListener("click", () => modal.classList.remove("active"));
overlay.addEventListener("click", () => modal.classList.remove("active"));