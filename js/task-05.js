const input = document.querySelector('#name-input')
const nameLable = document.querySelector('#name-output')

input.addEventListener('input', onInput )

function onInput(event) {
    if (event.currentTarget.value != '') {
        nameLable.textContent = event.currentTarget.value
    }
    else {
        nameLable.textContent = 'Anonymous' 
    }
}
