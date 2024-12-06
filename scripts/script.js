// JavaScript Document
console.log("hi");


// Tevoorschijn laten komen van het menu
const headerEl = document.querySelector('header')
const menuButton = document.querySelector("header nav:first-of-type button");
let deNav = document.querySelector("header nav nav");
const bodyEl = document.body 

menuButton.addEventListener("click",openMenu);

function openMenu(){
    deNav.classList.toggle("menuZichtbaar");
    menuButton.classList.toggle('active')
    bodyEl.classList.toggle('no-scroll')
}

console.log(menuButton)

const closeMenuButton = document.querySelector("ul:nth-of-type(1) button");

closeMenuButton.addEventListener("click", closeMenu);

function closeMenu(){
    deNav.classList.remove("menuZichtbaar");
}

window.addEventListener('scroll', ()=>{
    if (scrollY > 10){
        headerEl.classList.add('active')
    } else {
        headerEl.classList.remove('active')
    }
}) 



// Voor de form popup
const klantenserviceButtonOpen = document.querySelector ("header nav ul li:nth-of-type(3)");
const klantenServiceDialog = document.querySelector ("dialog");
const klantenserviceButtonClose = document.querySelector ("dialog button:nth-of-type(1)");

console.log(klantenserviceButtonOpen);


klantenserviceButtonOpen.addEventListener("click", ()=> {
      klantenServiceDialog.classList.add('active')
});


if(klantenserviceButtonClose){
klantenserviceButtonClose.addEventListener("click",  ()=> {
  klantenServiceDialog.classList.remove('active')
});
}