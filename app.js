var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
console.log(txtInput)

btnTranslate.addEventListener("click", function clickEventHandler() {
    console.log("clicked!");
    console.log("input", txtInput.value)
} )

