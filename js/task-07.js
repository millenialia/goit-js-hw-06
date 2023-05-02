const sizeControlEl = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

sizeControlEl.addEventListener('input', onInputSize)

text.style.fontSize = '40px'

let fontSize = 0

function onInputSize(event) {
    fontSize = event.currentTarget.value
    text.style.fontSize = fontSize + 'px'
    
}
