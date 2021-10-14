function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.body;
const changeColorBtnRef = document.querySelector(".change-color");
const spanBackgroundColorRef = document.querySelector(".color");

changeColorBtnRef.addEventListener("click", onColorBtnClick);

function onColorBtnClick() {
  const newBackgroundColor = getRandomHexColor();
  
  bodyRef.style.background = newBackgroundColor;
  spanBackgroundColorRef.textContent = newBackgroundColor;
}
