function toggleMenu(){
    let menu = document.querySelector("nav");
    menu.classList.toggle("navDown");

    const nodes = document.querySelectorAll (".navItems");

    Array.prototype.forEach.call (nodes, node => {
    node.classList.toggle ("showNavItems");
    })
}

let menu = document.querySelector("nav");
menu.addEventListener("click", toggleMenu);