const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

// Toggle menu visibility on small screens
menu.addEventListener("click", () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("active");
});

// Sticky header on scroll
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 120);

    // Close menu on scroll
    if (window.scrollY > 0) {
        menu.classList.remove("bx-x");
        navlist.classList.remove("active");
    }
});
