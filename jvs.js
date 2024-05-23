var link = document.createElement("link");
link.rel = "stylesheet";
link.href = "styles.css";
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        
        navbar.style.top = "-50px"; 
    } else {
        
        navbar.style.top = "0";
    }

    lastScrollTop = scrollTop;
});
