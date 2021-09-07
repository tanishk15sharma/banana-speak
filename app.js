var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var OutputDiv = document.querySelector("#Output");



 function clickHandler() {
    OutputDiv.innerText = "new language transalating " + txtInput.value;
} 

btnTranslate.addEventListener("click",clickHandler)

