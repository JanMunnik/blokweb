var headerTop = document.querySelector("header nav:first-of-type")
var headerBottom = document.querySelector("header nav:nth-of-type(2)")
var hamburgerMenu = document.querySelector("header nav:last-of-type")
var hamburgerButton = document.querySelector("header nav:nth-of-type(2) button:first-of-type")
var hamburgerCloseButton = document.querySelector("header nav:last-of-type button")

var refineButton = document.querySelector("#aos main > article button")
var armyLists = document.querySelector("#aos main > article ul:first-of-type")
var armyListsState = "closed"
var secondPage = window.location.href;

// ref army list open
function openArmyList() {
    if(armyListsState == "closed") {
        armyLists.style.display = "block";
        armyListsState = "open";
    } else {
        armyLists.style.display = "none";
        armyListsState = "closed";
    }
}

// hamburger menu
function hamburgerOpen() {
    hamburgerMenu.style.display = "block";
    headerTop.style.display = "none";
    headerBottom.style.display = "none";
} 

function hamburgerClose() {
    hamburgerMenu.style.display = "none";
    headerTop.style.display = "flex";
    headerBottom.style.display = "flex";
} 

// refine button fix goede oproep regelen
function refineFix() {
    if (secondPage.includes("ageofsigmar")) {
        refineButton.addEventListener("click", openArmyList);
    } else {
        return;
    }
}

hamburgerButton.addEventListener("click", hamburgerOpen);
hamburgerCloseButton.addEventListener("click", hamburgerClose);
refineFix();
