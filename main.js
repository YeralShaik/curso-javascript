const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamburger = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

menuEmail.addEventListener('click', toggleDesktopMenu) 
    function toggleDesktopMenu() {
        desktopMenu.classList.toggle('inactive')
    }

menuHamburger.addEventListener('click', toggleMobileMenu)
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('inactive')
    }