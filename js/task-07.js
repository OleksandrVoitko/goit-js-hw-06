const fontSizeControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

fontSizeControlRef.value = fontSizeControlRef.min;
textRef.style.fontSize = `${fontSizeControlRef.min}px`;

fontSizeControlRef.addEventListener("input", onFontSizeControlInput);

function onFontSizeControlInput(event) {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
}
