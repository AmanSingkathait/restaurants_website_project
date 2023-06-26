console.log("inside the javascript");

let menubar = document.getElementById('menu-btn');
let navbar = document.getElementById('navbar');

menubar.onclick = () => {
    console.log("we are working");
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle(`active`);

}