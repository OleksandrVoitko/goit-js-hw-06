let counterValue = 0;

const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const valueSpanRef = document.querySelector('#value')

decrementBtnRef.addEventListener('click', onDecrementBtnClick);
incrementBtnRef.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
    counterValue = Number(valueSpanRef.textContent) - 1;
    valueSpanRef.textContent = counterValue;
};

function onIncrementBtnClick() {
    counterValue = Number(valueSpanRef.textContent) + 1;
    valueSpanRef.textContent = counterValue;
};