const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
const uixTab = document.querySelector('.uix')
const fsdTab = document.querySelector('.fsd')
const fswTab = document.querySelector('.fsw')
const fcsTab = document.querySelector(".fcs")
const container = document.querySelector("#programs")

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => tabContent.classList.remove('active'))
        target.classList.add('active')
        tabs.forEach(tab => tab.classList.remove('active'))
        tab.classList.add('active')
    })
})



fcsTab.addEventListener('click', () => {
    container.classList.remove('c-fsw')
    container.classList.remove('c-fsd')
    container.classList.remove('c-uix')
    container.classList.add('c-fcs')
})

fswTab.addEventListener('click', () => {
    container.classList.remove('c-fcs')
    container.classList.remove('c-fsd')
    container.classList.remove('c-uix')
    container.classList.add('c-fsw')
})

fsdTab.addEventListener('click', () => {
    container.classList.remove('c-fcs')
    container.classList.remove('c-fsw')
    container.classList.remove('c-uix')
    container.classList.add('c-fsd')
})

uixTab.addEventListener('click', () => {
    container.classList.remove('c-fcs')
    container.classList.remove('c-fsd')
    container.classList.remove('c-fsw')
    container.classList.add('c-uix')
})

let animatedTypedText = new Typed('#animation',{
    strings: ['Software engineer?', 'Data engineer?', 'UI/UX designer?'],
    typeSpeed: 75,
    backSpeed: 45,
    bindInputFocusEvents: true,
    loop: true,
    cursorChar: '_',
    backDelay: 1200,
    startDelay: 0,
    preStringTyped: (index, self) =>{
        let colors = ['rgba(40, 238, 167, 0.93)', 'rgba(40, 238, 167, 0.93)', 'rgba(152, 100, 218, 0.93)', 'rgba(251, 80, 142, 0.93)', ];
        let textColors = ['#363738', '#363738', '#ffffff', '#ffffff'];
        document.getElementById('hero').style.backgroundColor = colors[index];
        document.getElementById('animation').style.color = textColors[index];
        document.getElementById('para').style.color = textColors[index];
        
    }
});

const cards = document.querySelectorAll('.card')
cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active')
    })
})


