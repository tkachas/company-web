let img_1 = document.querySelector('#halloween');
let img_2 = document.querySelector('#halloween_2');
let wolf = new Audio();
wolf.src = "../audio/wolf_howl.mp3";
console.log(wolf);
wolf.volume = 0.2;

img_1.addEventListener('click', eyes);

function eyes() {
    if (img_1.style.opacity == '1') {
        img_1.style.opacity = '0';
        wolf.play();
    }
    else if (img_1.style.opacity == '0') {
        img_1.style.opacity = '1';
    } else {
        img_1.style.opacity = '0';
        wolf.play();
    }
}