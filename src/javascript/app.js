document.addEventListener("DOMContentLoaded",function(){
    let navbarBurger = document.getElementById("navbar-burger");
    let navbarMenu = document.getElementById("navbar-menu");
    navbarBurger.onclick = function() {
        navbarMenu.classList.toggle('show');
    }

    if (localStorage.getItem("acceptCookies") === null) {
        let acceptCookies = document.getElementById("accept-cookies");
        let cookiesNotify = document.getElementById("cookies-notify");
        cookiesNotify.style.display = "block";
        acceptCookies.onclick = function() {
            cookiesNotify.remove();
            localStorage.setItem("acceptCookies", "yes");
        }
    }
});
