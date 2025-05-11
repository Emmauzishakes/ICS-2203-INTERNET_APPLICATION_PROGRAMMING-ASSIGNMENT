function toggleMenu() {
    const menuWrapper = document.getElementById("menu-wrapper");
    
    const isMenuClosed = menuWrapper.classList.contains("hidden");
    
    if(isMenuClosed) {
        menuWrapper.classList.remove("hidden");
    }else {
        menuWrapper.classList.add("hidden");
    }
}

const menuBtn = document.getElementById("nav-right-menuBtn");

menuBtn.addEventListener('click', toggleMenu)


