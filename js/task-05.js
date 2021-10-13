const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOut: document.querySelector("#name-output"),
};

refs.nameInput.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.length === 0)
    return (refs.nameOut.textContent = "Anonymous");
  refs.nameOut.textContent = event.currentTarget.value;
}
