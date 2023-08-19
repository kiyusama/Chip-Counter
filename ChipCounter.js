"use strict";
let myChips = 0;
const ImageContainer = document.getElementById("imageContainer");


document.getElementById("inputChips").addEventListener("input",function() {
    let Chips = document.getElementById("inputChips").value;
    myChips = Number(Chips);
    showChips();
})

function showChips() {
    let Chips = document.getElementById("ChipsOutput");
    Chips.textContent = myChips;
    showChipImage();
}


function showChipImage() {
    ImageContainer.innerHTML = "";
    let tenCounter = 0;
    let hunCounter = 0;

    for (let i = 1; i <= myChips; i++) {
        const img = new Image();
        img.src = "Chip.png";
        img.width = 50;
        img.style.position = "absolute";
        img.style.top = (i * -10) + (tenCounter * 100) + (hunCounter * 50) + 'px';
        img.style.left = (tenCounter * 50) + (hunCounter * -500) -250 + 'px';
        ImageContainer.appendChild(img);

        if (i % 10 == 0) {
            tenCounter += 1;
        }
        if (i % 100 == 0) {
            hunCounter += 1;
        }
    }
}

function plus1() {
    myChips += 1;
    showChips();
}
function minus1() {
    myChips -= 1;
    showChips();
}
function plus10() {
    myChips += 10;
    showChips();
}
function minus10() {
    myChips -= 10;
    showChips();
}
