let btnTranslate = document.querySelector('#btn-translate')
let txtInput = document.querySelector('#txt-input')
let outputDiv = document.querySelector('#output')

btnTranslate.addEventListener('click', () => {
    outputDiv.innerText = txtInput.value
})