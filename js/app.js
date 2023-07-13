let Navbar = document.querySelector(".menu-bars");
let Opener = document.querySelector("#opener");
let searchBar = document.querySelector(".search-bar");
let searchicon = document.getElementById("search-icon");


function openNavbar(){
    Navbar.classList.toggle("toogle-menu");
    Opener.classList.toggle("fa-close");
}

function toogleSearchBar(){
    searchBar.classList.toggle("toogle-search-bar");
}