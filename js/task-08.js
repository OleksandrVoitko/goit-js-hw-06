const loginFormRef = document.querySelector(".login-form");

loginFormRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  if (
    formElements.email.value.length === 0 ||
    formElements.password.value.length === 0
  )
    return alert("Все поля формы должны быть заполнены!");

  const mail = formElements.email.value;
  const password = formElements.password.value;
  const formData = { mail, password };

  loginFormRef.reset();

  return console.log(formData);
}
