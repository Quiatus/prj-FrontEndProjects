const btnShare = document.getElementById('btnShare')
const divShare = document.querySelector('.share')

btnShare.addEventListener('click', () => {
    divShare.classList.toggle('visible')
})
