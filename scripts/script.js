// JavaScript Document
console.log("hi");


// Tevoorschijn laten komen van het menu
const menuButton = document.querySelector("header nav:first-of-type button");
let deNav = document.querySelector("header nav nav");

menuButton.addEventListener("click",openMenu);

function openMenu(){
    deNav.classList.add("menuZichtbaar");
}

console.log(menuButton)

const closeMenuButton = document.querySelector("ul:nth-of-type(1) button");

closeMenuButton.addEventListener("click", closeMenu);

function closeMenu(){
    deNav.classList.remove("menuZichtbaar");
}