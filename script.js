const main = document.querySelector('.main')
const li = document.querySelector('li')
const input = document.querySelector('#addNumber')
const btn = document.querySelector('#btn')

let array = []

function addNumber() {


}

function getNumberArray() {
    let number = input.value
    return number
}
addNumberToArray() {
    while (array.length < number) {
        array.push(array.length + 1)
    }
}

btn.addEventListener('click', addNumber)

for (let i = 0; i < array.length; i++) {

    const liArray = array[i];

    let newLi = document.createElement('li')

    li.appendChild(newLi)

    newLi.innerHTML = liArray
    console.log(liArray)
}

console.log(array)