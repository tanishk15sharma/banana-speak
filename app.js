var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var OutputDiv = document.querySelector("#Output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}


function clickHandler() {

    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {

            var translatedText = json.contents.translated;
            OutputDiv.innerText = translatedText;
        })


}

btnTranslate.addEventListener("click", clickHandler)