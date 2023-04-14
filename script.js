function handleGetFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;
  return { name, email, city, zipCode, status };
}
function isNumber(str) {
  return !isNaN(str);
}

function checkboxIsChecked() {
  return document.getElementById("status").checked;
}

function validateFormData(formData) {
  if (
    formData &&
    isNumber(formData.zipCode) &&
    checkboxIsChecked(formData.status)
  ) {
    return true;
  }
  return false;
}
function submit(event) {
event.preventDefault();

const formData = handleGetFormData();

if (!validateFormData(formData)) {
const warning = document.getElementById("warning");
warning.textContent = "Periksa form anda sekali lagi";
} else {
const warning = document.getElementById("warning");
warning.textContent = "";
}
}

const form = document.querySelector("form");
form.addEventListener("submit", submit);

