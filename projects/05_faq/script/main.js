const questions = document.querySelectorAll('.question')
const btns = document.querySelectorAll('.btn')
const answers = document.querySelectorAll('.answer')

const resetScreen = () => {
    btns.forEach(btn => {btn.classList.remove('btn-collapse')})
    answers.forEach(answer => {answer.classList.add('hidden')})
}

questions.forEach(question => {question.addEventListener('click', () => {
    const btn = question.lastElementChild;
    const panel = question.nextElementSibling;

    btn.classList.contains('btn-collapse') ? resetScreen() 
    : ( resetScreen(),
        btn.classList.toggle('btn-collapse'),
        panel.classList.toggle('hidden') )
})})



