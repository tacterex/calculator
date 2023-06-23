const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]
const SIMPLE = ['+', '-', '*', '/',]
const ALL = [...DIGITS, ...SIMPLE, '.']
console.log(ALL)

let row = document.querySelector("#row")
let test = document.querySelector("#test")

function getActualTextWidth(){
    test.innerHTML = row.innerHTML
    test.style.fontSize = row.style.fontSize
    return test.clientWidth
}

function addValue(value){
    if(row.innerHTML == '0'){
        row.innerHTML = value
    }
    else{
        row.innerHTML += value
    }
}

function setLastSymbol(value){
    row.innerHTML = row.innerHTML.substring(0, row.innerHTML.length - 1) + value
}

function getLastSymbol(){
    return row.innerHTML[row.innerHTML.length - 1]
}

document.querySelectorAll(".digit").forEach(element => {
    element.addEventListener("click", function(){
        addValue(element.innerHTML)
        getActualTextWidth()
    })
});

document.querySelectorAll(".simple_action").forEach(element => {
    element.addEventListener("click", function(){
        if(DIGITS.includes(getLastSymbol())){
            addValue(element.innerHTML)
        }
        else if(SIMPLE.includes(getLastSymbol())){
            setLastSymbol(element.innerHTML)
        }
        getActualTextWidth()
    })
});

document.querySelector('#dot').addEventListener('click', function(){
    if(DIGITS.includes(getLastSymbol())){
        addValue('.')
    }
})

document.querySelector('#C').addEventListener('click', function(){
    row.innerHTML = '0'
})

document.querySelector('#equal').addEventListener('click', function(){
    actual = row.innerHTML
    for(let i = 0; i < actual.length; ++i){
        if(!ALL.includes(actual[i])){
            alert('Forbidden equation!')
            row.innerHTML = '0'
            return false
        }
    }
    row.innerHTML = eval(row.innerHTML)
})