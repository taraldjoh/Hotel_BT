window.OnScroll = function() {stkNav()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop(0);

function stkNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
}