const emailInput = document.getElementById('email');
const btnSubmit = document.getElementById('submit-button');
const statusText = document.getElementById('error-text');
const imgErr = document.getElementById('error-img');
const form = document.querySelector('.form');

const validateEmail = (email) => {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

const displayMessage = (msg = 'correct') => {
    form.classList.add('error-box')
    imgErr.style.visibility = 'visible'

    if (msg === 'empty') {
        statusText.textContent = 'Please enter email address!'
    } else if (msg === 'invalid') {
        statusText.textContent = 'Invalid email format!'
    } else {
        form.classList.remove('error-box')
        statusText.textContent = 'Thank you!'
        imgErr.style.visibility = 'hidden'
        emailInput.value = ''; 
    }
}

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    if (!validateEmail(emailInput.value)) {
        !emailInput.value ? displayMessage('empty') : displayMessage('invalid')
    } else {
        displayMessage(); 
    }
})

emailInput.addEventListener('keypress', () => {
    form.classList.remove('error-box')
    statusText.textContent = ''
    imgErr.style.visibility = 'hidden'
})