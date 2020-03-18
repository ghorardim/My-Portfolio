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