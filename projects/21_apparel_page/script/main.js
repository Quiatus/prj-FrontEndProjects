// const emailInput = document.getElementById('input-email');
// const btnSubmit = document.getElementById('btn-submit');
// const statusText = document.getElementById('text-status');

// const validateEmail = (email) => {
//     return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
//   };

// btnSubmit.addEventListener('click', (e) => {
//     e.preventDefault();

//     statusText.classList.remove('text-error', 'text-green')

//     if (!emailInput.value) {
//         statusText.classList.add('text-error')
//         statusText.textContent = 'Please enter email address!' 
//         return  
//     }
       
//     if (validateEmail(emailInput.value)) {
//         statusText.classList.add('text-green')
//         statusText.textContent = 'Access requested!'
//         emailInput.value = '';
//     } else {
//         statusText.classList.add('text-error')
//         statusText.textContent = 'Invalid email format!' 
//     }
// })