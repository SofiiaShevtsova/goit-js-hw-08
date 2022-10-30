import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const STORAGE_FEEDBACK = "feedback-form-storage";

checkFormValue();

form.addEventListener("input", throttle(onFormInput, 500));
form.addEventListener("submit", onFormSubmit);

function onFormInput(event) {
  const user = {};
  user.email = form.querySelector("input").value;
  user.message = form.querySelector("textarea").value;
  localStorage.setItem(STORAGE_FEEDBACK, JSON.stringify(user));
}

function onFormSubmit(event) {
    event.preventDefault();
    
  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === "" || message.value === "") {
    alert("Заповніть всі поля форми!");
    return;
  }
  const formData = new FormData(event.currentTarget);
  const user = {};
  formData.forEach((value, name) => {
    user[name] = value;
  });

  console.log(user);

  form.reset();
  localStorage.removeItem(STORAGE_FEEDBACK);
}

function checkFormValue() {
    const checkValid = JSON.parse(localStorage.getItem(STORAGE_FEEDBACK))
  if (checkValid) {
    const { email, message } = checkValid;
    form.querySelector("input").value = email;
    form.querySelector("textarea").value = message;
  }
}
