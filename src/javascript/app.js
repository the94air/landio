import Nprogress from 'nprogress';

Nprogress.start();

document.addEventListener("DOMContentLoaded",function(){
    let navbarBurger = document.getElementById("navbar-burger");
    let navbarMenu = document.getElementById("navbar-menu");
    navbarBurger.onclick = function() {
        navbarMenu.classList.toggle('show');
    }

    let mainNavLinks = document.querySelectorAll("#navbar-menu ul li a");
    let mainFooterLinks = document.querySelectorAll("#footer-menu li a");

    mainNavLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            let target = document.querySelector(event.target.hash);
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    mainFooterLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            let target = document.querySelector(event.target.hash);
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    let mainSections = document.querySelectorAll("main section");

    window.addEventListener("scroll", event => {
        let fromTop = window.scrollY + 5;

        mainNavLinks.forEach(link => {
            let section = document.querySelector(link.hash);
        
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add("select");
            } else {
                link.classList.remove("select");
            }
        });
    });

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

window.onload = function () {
    Nprogress.done();
};