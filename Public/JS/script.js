console.log("inside the javascript");

let menubar = document.getElementById('menu-btn');
let navbar = document.getElementById('navbar');

menubar.onclick = () => {
    console.log("we are working");
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle(`active`);

}

// swiper testimonal section javascript ========================
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2200,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
let rowsection = document.getElementById("rowsection");
var control1 = document.getElementById("control1");
var control2 = document.getElementById("control2");
var control3 = document.getElementById("control3");
console.log(rowsection);

control1.addEventListener("click", () => {
    rowsection.style.transform = "translateX(700px)";
    control1.classList.add('powerbtn');
    control2.classList.remove('powerbtn');
    control3.classList.remove('powerbtn');
})

control2.addEventListener("click", () => {
    rowsection.style.transform = "translateX(0px)";
    control2.classList.add('powerbtn');
    control1.classList.remove('powerbtn');
    control3.classList.remove('powerbtn');
})

control3.addEventListener("click", () => {
    rowsection.style.transform = "translateX(-700px)";
    control3.classList.add('powerbtn');
    control1.classList.remove('powerbtn');
    control2.classList.remove('powerbtn');
})

function fun1() {
    rowsection.style.transform = "translateX(700px)";
    control1.classList.add('powerbtn');
    control2.classList.remove('powerbtn');
    control3.classList.remove('powerbtn');
}
function fun2() {
    rowsection.style.transform = "translateX(0px)";
    control2.classList.add('powerbtn');
    control1.classList.remove('powerbtn');
    control3.classList.remove('powerbtn');
}
function fun3() {
    rowsection.style.transform = "translateX(-700px)";
    control3.classList.add('powerbtn');
    control1.classList.remove('powerbtn');
    control2.classList.remove('powerbtn');
}

setInterval(() => {
    setTimeout(fun2, 2500);
    setTimeout(fun3, 4500);
    setTimeout(fun1, 6500);
}, 2000);

// using a node moduel prectice 




// let allanker = document.querySelectorAll(".ankar");
// allanker.forEach((ele) => {
//     ele.onclick = (event)=>{
//         event.preventDefault();

//         allanker.forEach((element)=>{
//             element.classList.remove("poweranker");
//         })
        
//         ele.classList.add("poweranker")
//     }
// })