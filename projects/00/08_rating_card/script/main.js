const btnCircle = document.querySelectorAll('.btn-circle')
const btnSubmit = document.querySelector('#btn-submit')
const ratingDiv = document.querySelector('.rating')
const resultDiv = document.querySelector('.result')
const resultText = document.querySelector('#result-text');

let rating = null

const switchToResult = () => {
    ratingDiv.style.display = 'none'
    resultDiv.style.display = 'flex'
    resultText.textContent = `You selected ${rating} out of 5`
}

btnCircle.forEach(btn => {btn.addEventListener('click', () => {
    btnCircle.forEach(btn => {btn.classList.remove('selected')})
    rating = btn.textContent;
    btn.classList.add('selected')
})})

btnSubmit.addEventListener('click', () => { rating ? switchToResult() : alert('Please select rating before submitting') })