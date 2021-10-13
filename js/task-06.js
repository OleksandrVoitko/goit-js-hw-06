const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (inputRef.classList.contains("valid")) inputRef.classList.remove("valid");
  else inputRef.classList.remove("invalid");

  if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length))
    inputRef.classList.add("valid");
  else inputRef.classList.add("invalid");
}
