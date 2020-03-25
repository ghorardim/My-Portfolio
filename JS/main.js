/* Code for slide show */

var myIndex = 0;
var isSliderHovered = false
setInterval(function () {
    animateSlide();
}, 4000);

document.getElementsByClassName("slider")[0].onmouseover = function () {
    isSliderHovered = true
}

document.getElementsByClassName("slider")[0].onmouseout = function () {
    isSliderHovered = false
}

function animateSlide() {
    if (!isSliderHovered) {
        var i;
        var x = document.getElementsByClassName("slide");
        console.log(x)
        for (i = 0; i < x.length; i++) {
            console.log(x[i].className)
            if (x[i].className.includes("animate-right")) {
                x[i].classList.remove("animate-right")
            }
        }
        myIndex++;
        if (myIndex >= x.length) {
            myIndex = 0
        }
        x[myIndex].classList.add("animate-right");
    }
}

/* Slide show code end... */

/* Code for Nav Bar... */

let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');
let site_main_wrapper = document.querySelector('site-main-wrapper');
let Body = document.querySelector('body');

function openMobileNav() {
    mobileNav.classList.add('open');
    hamberger.classList.add('hamberger-hide');
    Body.classList.add('disable-scrolling');
}

function closeMobileNav() {
    mobileNav.classList.remove('open');
    hamberger.classList.remove('hamberger-hide');
    Body.classList.remove('disable-scrolling');
}

hamberger.addEventListener('click', function () {
    openMobileNav();
});

times.addEventListener('click', function () {
    closeMobileNav();
});

/* Body.addEventListener('click', function(){
    closeMobileNav();
}); */