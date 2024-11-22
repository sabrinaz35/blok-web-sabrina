// JavaScript Document
console.log("hi");


// Tevoorschijn laten komen van het menu
var menuButton = document.querySelector("header > button");
var deNav = document.querySelector("nav");

menuButton.addEventListener("click",openMenu);

function openMenu(){
    deNav.classList.add("menuZichtbaar");
}

// Dichtklappen van het menu
var closeMenuButton = document.querySelector("ul:nth-of-type(1) button");

closeMenuButton.addEventListener("click", closeMenu);

function closeMenu(){
    deNav.classList.remove("menuZichtbaar");
}