function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputNumber: document.querySelector("#controls > input"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  idvBoxes: document.querySelector("#boxes"),
};

refs.btnCreate.addEventListener("click", onBtnCreateClick);
refs.btnDestroy.addEventListener("click", onBtnDestroyClick);

function onBtnCreateClick() {
  const arrDivElements = createBoxes(refs.inputNumber.value);

  refs.inputNumber.value = "";
  refs.idvBoxes.append(...arrDivElements);
}

function onBtnDestroyClick() {
  destroyBoxes();
}

function createBoxes(amount) {
  if (amount > 0) destroyBoxes();

  const arrDivElements = [];

  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");

    newDiv.style.width = `${30 + i * 10}px`;
    newDiv.style.height = `${30 + i * 10}px`;
    newDiv.style.background = getRandomHexColor();
    newDiv.style.position = "absolute";
    newDiv.style.zIndex = `-${i}`;

    arrDivElements.push(newDiv);
  }
  return arrDivElements;
}

function destroyBoxes() {
  refs.idvBoxes.querySelectorAll("div").forEach((item) => item.remove());
}
