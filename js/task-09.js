function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color')
const colorSpan = document.querySelector('.color')
const body = document.querySelector('body')

button.addEventListener('click', onClickButton)

function onClickButton(event) {
  body.style.backgroundColor = getRandomHexColor()
  colorSpan.textContent = body.style.backgroundColor
}