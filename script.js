function toggleMenu() {
    const menu = document.querySelector(".menu-links");    
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

//sair do hamburger menu com esc
document.addEventListener("keydown", (event) => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    if (event.key === "Escape" && menu.classList.contains("open")) {
        menu.classList.remove("open");
        icon.classList.remove("open");
    }
});

