// JavaScript Document test
console.log("hi");


// Tevoorschijn laten komen van het menu en ook weer sluiten ervan
//variabelen/constanten
const headerEl = document.querySelector('header')
const menuButton = document.querySelector("header nav:first-of-type button");
let deNav = document.querySelector("header nav nav");
const bodyEl = document.body 
const closeMenuButton = document.querySelector("ul:nth-of-type(1) button");

//het openen van de menu
menuButton.addEventListener("click",openMenu);

function openMenu(){
    deNav.classList.toggle("menuZichtbaar");
    menuButton.classList.toggle('active')
    bodyEl.classList.toggle('no-scroll')
}

console.log(menuButton)


//het sluiten van het menu
closeMenuButton.addEventListener("click", closeMenu);

function closeMenu(){
    deNav.classList.remove("menuZichtbaar");
}




//Code voor het scrollen en een achtergrond krijgen van de header, zodra er gescrollt wordt. 
//Dit heb ik met behulp van Ali geschreven

window.addEventListener('scroll', ()=>{
    if (scrollY > 10){
        headerEl.classList.add('active')
    } else {
        headerEl.classList.remove('active')
    }
}) 



// Voor de dialog popup
const klantenserviceButtonOpen = document.querySelector ("header nav ul li:nth-of-type(3)");
const klantenServiceDialog = document.querySelector ("dialog");
const klantenserviceButtonClose = document.querySelector ("dialog button:nth-of-type(1)");

console.log(klantenserviceButtonOpen);

// Code voor het openen
klantenserviceButtonOpen.addEventListener("click", ()=> {
      klantenServiceDialog.classList.add('active')
});

// Code voor de close button
if(klantenserviceButtonClose){
klantenserviceButtonClose.addEventListener("click",  ()=> {
  klantenServiceDialog.classList.remove('active')
});
}