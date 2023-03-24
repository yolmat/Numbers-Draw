const container = document.querySelector('.container')
const main = document.querySelector('.main')
const ul = document.querySelector('ul')
const li = document.querySelector('li')
const firstLi = document.querySelector('#firstItem')
const input = document.querySelector('#addNumber')
const btn = document.querySelector('#btn')
const btnReload = document.querySelector('#btnReset')
const showNumber = document.querySelector('#showNumber')
const numberLuckShow = document.querySelector('#number')
const btnClose = document.querySelector('.close')

const timeResponse = 600


let numbers = []


function showNumberInScreen() {
    const numberOfLuck = numberDraw()

    const number = input.value

    if (number > 200 | number <= 1) {
        return
    }

    container.style.justifyContent = "space-between"

    setTimeout(function () {
        firstLi.parentNode.removeChild(firstLi)
    }, timeResponse)

    while (numbers.length < number) {
        numbers.push(numbers.length + 1)

        let newLi = document.createElement('li')
        newLi.classList.add(`${numbers.length}`)
        setTimeout(function () { ul.appendChild(newLi) }, timeResponse)

        if (numberOfLuck === numbers.length) {
            newLi.style.backgroundColor = '#ff1d0b'
        }

        newLi.innerHTML = numbers.length
    }


    numberLuckShow.innerHTML = numberOfLuck

    setTimeout(function () { showNumber.style.display = 'flex' }, timeResponse)

    btn.disabled = true
}

btn.addEventListener('click', showNumberInScreen)

function numberDraw() {
    let number = Math.floor(Math.random() * input.value) + 1
    return number
}

function reloadPage() {
    return window.location.reload()
}

btnReload.addEventListener('click', reloadPage)

function close() {
    return showNumber.style.display = 'none'
}

btnClose.addEventListener('click', close)