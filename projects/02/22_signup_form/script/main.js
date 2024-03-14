const btnSubmit = document.getElementById('btnSubmit');
const errText = document.querySelectorAll('.text-error');
const errImg = document.querySelectorAll('.error-img');
const inputDiv = document.querySelectorAll('.input-div');
const inputI = document.querySelectorAll('.inputI');

const validateEmail = (email) => {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    for (let i = 0; i < inputI.length; i++) {
        if (inputI[i].value === '') {
            inputI[i].classList.add('border-error')
            errText[i].classList.add('display-text')
            errText[i].textContent = `${inputI[i].placeholder} cannot be empty!`
            errImg[i].style.visibility = 'visible'
        } else {
            if ((!validateEmail(inputI[2].value)) && (inputI[2].value !== ''))  {
                inputI[2].classList.add('border-error')
                errText[2].classList.add('display-text')
                errText[2].textContent = `Invalid email address!`
                errImg[2].style.visibility = 'visible'
            }
            inputI[i].classList.remove('border-error')
            errText[i].classList.remove('display-text')
            errImg[i].style.visibility = 'hidden'
        }
    }

  })
