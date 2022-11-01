let img_1 = document.querySelector('#halloween');
let img_2 = document.querySelector('#halloween_2');

img_1.addEventListener('click', eyes);

function eyes() {
    if (img_1.style.opacity == '1') {
        img_1.style.opacity = '0';
    }
    else if (img_1.style.opacity == '0') {
        img_1.style.opacity = '1';
    } else {
        img_1.style.opacity = '0';
    }
}