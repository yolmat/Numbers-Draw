const main = document.querySelector('.main')
const ul = document.querySelector('ul')
const li = document.querySelector('li')
const firstLi = document.querySelector('#firstItem')
const input = document.querySelector('#addNumber')
const btn = document.querySelector('#btn')
const btnReload = document.querySelector('#btnReset')

let array = []

function getNumberArray() {
    let number = input.value

    if (number > 200) {
        return
    }

    setTimeout(function () {
        firstLi.parentNode.removeChild(firstLi)
    }, 900)

    const numberOfLuck = luckNumber()

    while (array.length < number) {
        array.push(array.length + 1)

        let newLi = document.createElement('li')

        setTimeout(function () { ul.appendChild(newLi) }, 900)

        if (numberOfLuck === array.length) {

        }

        newLi.innerHTML = array.length
    }

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