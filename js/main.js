// light-dark start
let modeBtn = document.getElementById("mode__btn");

modeBtn.addEventListener("click", function () {
    if (document.body.className != "dark") {
        this.firstElementChild.src = "images/light.svg";
    } else {
        this.firstElementChild.src = "images/dark.svg";
    }
    document.body.classList.toggle("dark");
});
// light dark end

// owl start
$(document).ready(function () {
  $("#team-carousel").owlCarousel({
    margin: 30,
    loop: true,
    nav: true,
    navText: ['<img src="./images/prev.svg" .owl-prev/>', '<img src="./images/next.svg" .owl-next/>'],
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      1000: {
        items: 1,
        navText: false,
      },
      1150: {
        items: 2,
      },
    },
  });
});
// owl end

// navbar shrink
window.addEventListener("scroll", function () {
    shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
    if (scrollY > 100) {
        navbar.classList.add("navbar-shrink");
    } else {
        navbar.classList.remove("navbar-shrink");
    }
}
// navbar shrink end

// toggle start
function openNavbar() {
    document.getElementById("navbar-responsive").style.left = "0";
    // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
    document.getElementById("navbar-responsive").style.left = "-100%";
    // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);
// toggle end

// loading start
//loading start//
const loading = document.getElementById("loading");

const loadingDuration = 500; // 1s
setTimeout(() => {
    loading.classList.add("loading-none");
}, loadingDuration);

// loading end

// backtop start
window.addEventListener("scroll", function () {
    toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        backtop.classList.add("backtop-show");
    } else {
        backtop.classList.remove("backtop-show");
    }
}
// backtop end

// aos start
AOS.init();
// aos end
