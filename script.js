const main = document.querySelector('.main')
const li = document.querySelector('ul')
const input = document.querySelector('#addNumber')
const btn = document.querySelector('#btn')

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

        newLi.innerHTML = array.length

    }
}

btn.addEventListener('click', getNumberArray)