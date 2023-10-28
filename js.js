"use strict";
const tabBar = document.querySelector(".header-bar");
const tabCloseBar = document.querySelector("header .header-xmark");
const tabCon = document.querySelector(".header-links-tablet ul");

tabBar.addEventListener('click', toggleMenu);
// Toggle header navigation menu
let openMenu = false;
function toggleMenu() {
  if(!openMenu){
    tabCon.style.left = "0";
    tabBar.style.opacity = "0";
    tabCloseBar.style.display='block'
    openMenu=true;
  }
   else{
    tabCon.style.left = "100%";
    tabBar.style.opacity = "1";
    tabCloseBar.style.display='none'
    openMenu=false;
   } 
}
