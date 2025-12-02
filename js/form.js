document.getElementById("cleanerForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const button = form.querySelector(".form__btn");
  const successMsg = document.getElementById("formSuccess");

  // кнопка — “Sending...”
  button.classList.add("loading");
  button.textContent = "Sending...";

  // собираем данные формы
  const formData = new FormData(form);

  // отправляем AJAX-запрос
  const response = await fetch("https://formsubmit.co/teodoroscleanerservices@gmail.com", {
    method: "POST",
    body: formData
  });

  // успех
  if (response.ok) {
    form.reset();
    successMsg.style.display = "block";

    button.classList.remove("loading");
    button.textContent = "Send Request";
  }
});