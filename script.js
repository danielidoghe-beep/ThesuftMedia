// =============================
// Mobile Menu
// =============================

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");

function showMenu() {
    mobileMenu.classList.add("active");
    menuOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function hideMenu() {
    mobileMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
}

openMenu.addEventListener("click", showMenu);
closeMenu.addEventListener("click", hideMenu);
menuOverlay.addEventListener("click", hideMenu);
