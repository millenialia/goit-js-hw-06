
const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements

    if (formElements.email.value != '', formElements.password.value != '') {
        
        const email = formElements.email.value
        const password = formElements.password.value
    
        const formData = {
            email,
            password,
        }
    
        event.currentTarget.reset()
        console.log(formData);
    }
    else {
        alert('please fill out all fields')
    }
    
}

