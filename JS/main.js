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
        for (i = 0; i < x.length; i++) {
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


/* send mail for contact */

var form = document.getElementById("contactFormID");

function handleForm(event) {
    event.preventDefault();
}
form.addEventListener('click', handleForm);

var name = document.forms["messageSendForm"]["Name"];
var email = document.forms["messageSendForm"]["Email"];
var subject = document.forms["messageSendForm"]["Subject"];
var message = document.forms["messageSendForm"]["Message"];

function messageValidation() {

    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }
    if (email.value == "") {
        window.alert("Please enter your email.");
        email.focus();
        return false;
    }
    if (subject.value == "") {
        window.alert("Please enter your subject.");
        subject.focus();
        return false;
    }
    if (message.value == "") {
        window.alert("Please enter your message.");
        message.focus();
        return false;
    }

    return true;

}

function sendMessage() {
    console.log('I m here for send mail ');
    if (messageValidation()) {
        var messageBody = "Email:-> "+email.value+"\nSubject:-> "+subject.value+"\nMessage:-> \n"+message.value;
        Email.send({
            SecureToken: "ad01b406-fe95-4552-bcd5-d941b244478b",
            To: 'jabirtest02@gmail.com',
            From: "testjabir01@gmail.com",
            Subject: 'Mail from portfolio',
            Body: messageBody
        }).then(
            message => alert(message)
        );
    }else{
        console.log('False');
    }

}