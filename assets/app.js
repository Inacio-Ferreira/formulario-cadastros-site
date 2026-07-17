const formLink = document.querySelector("#form-link");
const linkMessage = document.querySelector("#link-message");
const currentYear = document.querySelector("#current-year");

currentYear.textContent = new Date().getFullYear();

const formUrl = formLink.dataset.formUrl.trim();

if (formUrl) {
  formLink.href = formUrl;
} else {
  formLink.addEventListener("click", (event) => {
    event.preventDefault();
    linkMessage.textContent =
      "O endereço do formulário ainda será configurado nesta demonstração.";
  });
}
