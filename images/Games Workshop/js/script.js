var headerTop = document.querySelector("header nav:first-of-type")
var headerBottom = document.querySelector("header nav:nth-of-type(2)")
var hamburgerMenu = document.querySelector("header nav:last-of-type")
var hamburgerButton = document.querySelector("header nav:nth-of-type(2) button:first-of-type")
var hamburgerCloseButton = document.querySelector("header nav:last-of-type button")


function hamburgerOpen() {
    hamburgerMenu.style.display = "block"
    headerTop.style.display = "none"
    headerBottom.style.display = "none"
} 

function hamburgerClose() {
    hamburgerMenu.style.display = "none"
    headerTop.style.display = "flex"
    headerBottom.style.display = "flex"
} 


hamburgerButton.addEventListener("click", hamburgerOpen)
hamburgerCloseButton.addEventListener("click", hamburgerClose)