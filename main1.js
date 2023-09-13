let box = document.querySelector('.box');
let rotationDegree = 0;

function rotateBox() {
    rotationDegree += 60;
    box.style.transition = 'transform 2s';
    box.style.transform = "perspective(1000px) rotateY(" + rotationDegree + "deg)";
}

rotateBox();

setInterval(rotateBox, 2500); 







