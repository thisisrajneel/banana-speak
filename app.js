let btnTranslate = document.querySelector('#btn-translate')
let txtInput = document.querySelector('#txt-input')
let outputDiv = document.querySelector('#output')

let url = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json'
const makeURL  = (url, text) => url + '?text=' + text

btnTranslate.addEventListener('click', async () => {
    
    const res = await fetch(makeURL(url, txtInput.value))
    const resJSON = await res.json()
    outputDiv.innerText = resJSON.contents.text
})