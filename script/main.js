import { projectBoxes } from './elems.js'

const select = document.querySelector('#select')
const checks = document.getElementsByName('filtercheck')

const date = new Date()
let selectedValues = {
    difficulty: 0,
    tech: [
        {js: true}
    ]
}

select.addEventListener('change', (e) => {
    selectedValues.difficulty = +e.target.value
    display()
})

checks.forEach(item => item.addEventListener('change', (e) => {
    const selectedTech = e.target.id
    
    selectedValues.tech.map(t => {
        const techList = Object.keys(t)[0]
        if (techList === selectedTech) {
            t[techList] ? t[techList] = false : t[techList] = true
        }
    })
    display()
}))

const display = () => {
    const foot = document.querySelector('#foot')
    const projectGrid = document.querySelector('.projects')
 
    projectGrid.innerHTML = ''

    let filteredResults = projectBoxes.filter((item) => selectedValues.difficulty === item.difficulty || selectedValues.difficulty === 0)

    filteredResults.map(item => projectGrid.insertAdjacentHTML('beforeend', constructElement(item)))

    if (!filteredResults.length) projectGrid.innerHTML = `No results`

    foot.innerHTML = `${date.getFullYear()} Quiatus | Displaying <span class='bold'>${filteredResults.length}</span> results`
}

const constructElement = (projectBox) => {
    let difficultyString = [`<span class="ve">Very easy</span>`, `<span class="ea">Easy</span>`, `<span class="in">Intermediate</span>`,`<span class="ad">Advanced</span>`,`<span class="gu">Guru</span>` ]

    return `
    <div class="project-box">
    <div class="projectPicture">
        <img src="${projectBox.pictureUrl}" alt="Results summary component">
    </div>
    <div class="projectText">
        <h3>${projectBox.title}</h3>
        <p>${projectBox.body}</p>
        <div class="rev">
            ${difficultyString[projectBox.difficulty - 1]}
            <div class="icons">
                <img src='media/html.svg' title='html' alt='html'>
                <img src='media/css.svg' title='css' alt='css'>
                ${projectBox.tech.map(tech => {
                    const name = Object.keys(tech)[0]
                    if (Object.values(tech)[0] === true) {
                        return `<img src='media/${name}.svg' title='${name}' alt='${name}'>`
                    }
                })}
            </div>
        </div>
        <a href="${projectBox.projectUrl}" target="_blank">To project >>></a>
    </div>
    </div>
    `
}

document.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === "complete") {
        display();
    }
});