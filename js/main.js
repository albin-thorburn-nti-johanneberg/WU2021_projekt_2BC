function toggleMenu(){
    let menu = document.querySelector("header");
    let hideMenu = document.querySelector(".hideMenu");
    hideMenu.classList.toggle("hideMenuShow");
    menu.classList.toggle("headerDown");
}

let menu = document.querySelector("header");
menu.addEventListener("click", toggleMenu);
let hideMenu = document.querySelector(".hideMenu");
hideMenu.addEventListener("click", toggleMenu);