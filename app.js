let btnTranslate = document.querySelector('#btn-translate')
let txtInput = document.querySelector('#txt-input')
let outputDiv = document.querySelector('#output')

// mock server
//let url = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json'

// actual API
let url = 'https://api.funtranslations.com/translate/minion.json'

// makes final url using text parameter
const makeURL  = (url, text) => url + '?text=' + text

btnTranslate.addEventListener('click', async () => {
    
    // fetching the data from the api and displaying it
    const res = await fetch(makeURL(url, txtInput.value))
    const resJSON = await res.json()
    outputDiv.innerText = resJSON.contents.translated
})