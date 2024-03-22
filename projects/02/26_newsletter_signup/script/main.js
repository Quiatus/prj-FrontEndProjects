const emailInput = document.querySelector('#input');
const statusText = document.querySelector('#error');
const btnSubmit = document.querySelector('#btnSubmit');
const btnDismiss = document.querySelector('#btnDismiss');
const emailText = document.querySelector('#email');
const newsletter = document.querySelector('.newsletter');
const message = document.querySelector('.message');

const validateEmail = (email) => {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    if (!emailInput.value) {
        emailInput.classList.add('boxerror')
        statusText.textContent = 'Please enter email address!' 
        return  
    }
       
    if (validateEmail(emailInput.value)) {
        showSuccess(emailInput.value)
    } else {
        emailInput.classList.add('boxerror')
        statusText.textContent = 'Invalid email format!' 
    }
})

emailInput.addEventListener('keydown', (e) => {
    emailInput.classList.remove('boxerror')
    statusText.textContent = ''
})

const showSuccess = (email) => {
    emailText.textContent = email
    emailInput.value = ''
    newsletter.classList.add('hidden')
    message.classList.remove('hidden')
}

btnDismiss.addEventListener('click', () => {
    newsletter.classList.remove('hidden')
    message.classList.add('hidden')
})