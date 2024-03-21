import { projectBoxes } from './elems.js'

const select = document.getElementById('select')
const checks = document.getElementsByName('filtercheck')
const projectGrid = document.querySelector('.projects')
const foot = document.getElementById('foot')

const date = new Date()

let selectedValues = {
    diff: 0,
    htmlcss: true,
    js: true
}

select.addEventListener('change', (e) => {
    selectedValues.diff = parseInt (e.target.value)
    display()
})

checks.forEach(item => item.addEventListener('change', (e) => {
    for (let i = 0; i < checks.length; i++) {
        selectedValues[checks[i].id] = checks[i].checked
    }
    display()
}))

const display = () => {
    projectGrid.innerHTML = ``
    let filteredResults = []
    for (let i = 0; i < projectBoxes.length; i++) {
        if (selectedValues.diff === projectBoxes[i].difficulty || selectedValues.diff === 0) {
            filteredResults.push(projectBoxes[i])
            if (selectedValues.htmlcss === false && projectBoxes[i].checks.js === false) {
                filteredResults.pop(projectBoxes[i])
            }
            if (selectedValues.js === false && projectBoxes[i].checks.js === true) {
                filteredResults.pop(projectBoxes[i])
            }
        }
    }

    for (let i = 0; i < filteredResults.length; i++) {
        projectGrid.append(constructElement(filteredResults[i]))
    }

    if (!filteredResults.length) {
        projectGrid.innerHTML = `No results`
    }

    foot.innerHTML = `${date.getFullYear()} Quiatus | Displaying <span class='bold'>${filteredResults.length}</span> results`
}

const constructElement = (projectBox) => {
    const box = document.createElement('div')
    let difficulty = ``
    let imgs = ``

    for (const tech in projectBox.checks) {
        projectBox.checks[tech] ? imgs += `<img src='media/${tech}.svg' title='${tech}' alt='${tech}'>` : ``
    }

    projectBox.difficulty === 1 ? difficulty = `<span class="ve">Very easy</span>` : ``
    projectBox.difficulty === 2 ? difficulty = `<span class="ea">Easy</span>` : ``
    projectBox.difficulty === 3 ? difficulty = `<span class="in">Intermediate</span>` : ``
    projectBox.difficulty === 4 ? difficulty = `<span class="ad">Advanced</span>` : ``
    projectBox.difficulty === 5 ? difficulty = `<span class="gu">Guru</span>` : ``

    box.innerHTML = `
    <div class="project-box">
    <div class="projectPicture">
        <img src="${projectBox.pictureUrl}" alt="Results summary component">
    </div>
    <div class="projectText">
        <h3>${projectBox.title}</h3>
        <p>${projectBox.body}</p>
        <div class="rev">
            ${difficulty}
            <div class="icons">
                <img src='media/html.svg' title='html' alt='html'>
                <img src='media/css.svg' title='css' alt='css'>
                ${imgs}
            </div>
        </div>
        <a href="${projectBox.projectUrl}" target="_blank">To project >>></a>
    </div>
    </div>
    `

    return box
}

document.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === "complete") {
        display();
    }
});