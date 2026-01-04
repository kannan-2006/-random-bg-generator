let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let lengthOfArray = bgColorsArray.length;
let buttonElement = document.getElementById('button');
let containerElement = document.getElementById('bgContainer');
buttonElement.onclick = function() {
    let index = Math.ceil(Math.random() * 8);
    if (index === lengthOfArray) {
        index -= 1;
    }

    containerElement.style.backgroundColor = bgColorsArray[index];

};