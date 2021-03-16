let body = document.body;

let btn1 = document.querySelector("#bg1");
let btn2 = document.querySelector("#bg2");
let btn3 = document.querySelector("#bg3");
let btn4 = document.querySelector("#bg4");

const changeBg1 = () => {
  body.style.backgroundImage = 'url("./img/background1.jpg")';
};
const changeBg2 = () => {
  body.style.backgroundImage = 'url("./img/background2.jpg")';
};
const changeBg3 = () => {
  body.style.backgroundImage = 'url("./img/background3.jpg")';
};
const changeBg4 = () => {
  body.style.backgroundImage = 'url("./img/background4.jpg")';
};

btn1.addEventListener("click", changeBg1);
btn2.addEventListener("click", changeBg2);
btn3.addEventListener("click", changeBg3);
btn4.addEventListener("click", changeBg4);
