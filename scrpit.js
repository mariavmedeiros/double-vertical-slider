const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLEft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLEft.style.top = `-${(slidesLength - 1) * 100}vh`;
