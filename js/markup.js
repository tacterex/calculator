let content = document.querySelector('#content')
let root = document.querySelector(':root')
let switcher = document.querySelector('#switcher')
let basic_table = document.querySelector('#basic')
let advanced_table = document.querySelector('#advanced')

const SIZE_MULTIPLIER = 0.9

const WHITE_COLOR = getComputedStyle(root).getPropertyValue('--white-color')
const BLACK_COLOR = getComputedStyle(root).getPropertyValue('--black-color')
const WHITE_SHADOW = 'rgba(255, 255, 255, 0.16)'
const BLACK_SHADOW = 'rgba(0, 0, 0, 0.16)'

let darkTheme = false;

const updateScreen = (event) => {
    console.log('Resized!')
    content.style.width = String(window.innerWidth * SIZE_MULTIPLIER) + 'px'
    content.style.height = String(window.innerHeight * SIZE_MULTIPLIER) + 'px'
}

const setDarkTheme = () => {
    root.style.setProperty('--black-color', WHITE_COLOR)
    root.style.setProperty('--white-color', BLACK_COLOR)
    root.style.setProperty('--shadow', WHITE_SHADOW)
    let distance = window.innerWidth * 0.9 - window.innerHeight * 0.08
    switcher.children[0].style.transform = 'translateX(' + String(distance) + 'px)'
    basic_table.style.transform = 'translateX(-100vw)'
    advanced_table.style.transform = 'translateX(0)'
}

const setLightTheme = () => {
    root.style.setProperty('--black-color', BLACK_COLOR)
    root.style.setProperty('--white-color', WHITE_COLOR)
    root.style.setProperty('--shadow', BLACK_SHADOW)
    switcher.children[0].style.transform = 'translate(0, 0)'
    basic_table.style.transform = 'translateX(0)'
    advanced_table.style.transform = 'translateX(100vw)'
}

setLightTheme()

updateScreen()

addEventListener('resize', updateScreen)

switcher.addEventListener('click', function(){
    if(darkTheme){
        setLightTheme()
    }
    else
    {
        setDarkTheme()
    }
    darkTheme = !darkTheme
})