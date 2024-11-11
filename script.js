function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Fechar o menu com esc
document.addEventListener("keydown", (event) => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    if (event.key === "Escape" && menu.classList.contains("open")) {
        menu.classList.remove("open");
        icon.classList.remove("open");
    }
});

// Fechar o menu clicando fora
document.addEventListener("click", (event) => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    if (!menu.contains(event.target) && !icon.contains(event.target) && menu.classList.contains("open")) {
        menu.classList.remove("open");
        icon.classList.remove("open");
    }
});


