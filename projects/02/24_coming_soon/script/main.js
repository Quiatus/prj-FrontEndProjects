const emailInput = document.querySelector('#email');
const statusText = document.querySelector('#error');
const btnSubmit = document.querySelector('#btnSubmit');

const validateEmail = (email) => {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    statusText.classList.remove('red-text')
    statusText.style.visibility = 'visible'

    if (!emailInput.value) {
        statusText.classList.add('red-text')
        emailInput.classList.add('error-box')
        statusText.textContent = 'Please enter email address!' 
        return  
    }
       
    if (validateEmail(emailInput.value)) {
        statusText.textContent = 'Access requested!'
        emailInput.value = '';
    } else {
        statusText.classList.add('red-text')
        emailInput.classList.add('error-box')
        statusText.textContent = 'Invalid email format!' 
    }
})

emailInput.addEventListener('keypress', () => {
    emailInput.classList.remove('error-box')
    statusText.textContent = 'none'
    statusText.style.visibility = 'hidden'
})