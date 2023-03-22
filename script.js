const main = document.querySelector('.main')
const li = document.querySelector('ul')
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

    while (array.length < number) {
        array.push(array.length + 1)

        let newLi = document.createElement('li')

        setTimeout(function () { li.appendChild(newLi) }, 900)

        setTimeout(function () {
            firstLi.parentNode.removeChild(firstLi)
        }, 900)

        newLi.innerHTML = array.length

    }

    btn.disabled = true
}

btn.addEventListener('click', getNumberArray)

function reloadPage() {
    window.location.reload()
}

btnReload.addEventListener('click', reloadPage)