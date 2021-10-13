const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlure);

function onInputBlure(event) {
  if (input.classList.contains("valid")) input.classList.remove("valid");
  else input.classList.remove("invalid");

  if (event.currentTarget.value.length === Number(input.dataset.length))
    input.classList.add("valid");
  else input.classList.add("invalid");
}
