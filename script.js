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

let array = []

function getNumberArray() {
    let number = input.value

    if (number > 200) {
        return
    }

    container.style.justifyContent = "space-between"

    setTimeout(function () {
        firstLi.parentNode.removeChild(firstLi)
    }, 900)

    const numberOfLuck = luckNumber()

    while (array.length < number) {
        array.push(array.length + 1)

        let newLi = document.createElement('li')
        newLi.classList.add(`${array.length}`)
        setTimeout(function () { ul.appendChild(newLi) }, 900)

        if (numberOfLuck === array.length) {
            newLi.style.backgroundColor = '#ff1d0b'
        }

        newLi.innerHTML = array.length
    }

    numberLuckShow.innerHTML = numberOfLuck

    setTimeout(function () { showNumber.style.display = 'flex' }, 900)

    btn.disabled = true
}

btn.addEventListener('click', getNumberArray)

function luckNumber() {
    let number = Math.floor(Math.random() * input.value) + 1
    return number
}

function reloadPage() {
    window.location.reload()
}

btnReload.addEventListener('click', reloadPage)

function close() {
    showNumber.style.display = 'none'
}

btnClose.addEventListener('click', close)