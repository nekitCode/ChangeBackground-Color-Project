//Change Background Color JavaScript Project
const changeColor = document.querySelector('#changeColorBtn');
const changeColorBlock = document.querySelector('.changeColor');
const out = document.querySelector('.out');


changeColor.addEventListener('click',changeByClick);

function changeByClick() {  
    let random1 = Math.ceil(Math.random() * 256)
    let random2 = Math.ceil(Math.random() * 256)
    let random3 = Math.ceil(Math.random() * 256)
    let randomColor = `rgb(${random1}, ${random2}, ${random3})`;
    let randomColorBtn = `rgb(${random1 * 2}, ${random2 * 2}, ${random3})`;
    changeColorBlock.style.backgroundColor = randomColor;  
    changeColor.style.backgroundColor = randomColorBtn;  
}
