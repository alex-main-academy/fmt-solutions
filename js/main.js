// work with menu
const menuElement = document.querySelector(".js-menu");
const burgerBtn = document.querySelector(".js-header-burger");
const burgerIcon = document.querySelector(".js-burger-icon");
let burgerToggle = false;

burgerBtn.addEventListener("click", () => {
    burgerToggle = !burgerToggle;
    const burgerIcon = burgerBtn.children[0].children[0];

    if (burgerToggle) {
        burgerIcon.setAttribute("href", "img/icons.svg#icon-close");
        menuElement.classList.add("active");
        document.body.classList.add("is-menu");
    } else {
        burgerIcon.setAttribute("href", "img/icons.svg#icon-burger");
        menuElement.classList.remove("active");
        document.body.classList.remove("is-menu");
    }
});

// work with anchors link
function scrollToAnchor(anchorId) {
    const targetElement = document.getElementById(anchorId);
    if (targetElement) {
        const offsetTop = targetElement.offsetTop - 50;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
        });
    }
}

const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const anchorId = this.getAttribute("href").substring(1);
        scrollToAnchor(anchorId);
        burgerIcon.setAttribute("href", "img/icons.svg#icon-burger");
        menuElement.classList.remove("active");
        burgerToggle = false;
        document.body.classList.remove("is-menu");
    });
});

// work with header
const header = document.querySelector(".js-header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});

// work with loader
var animationData = {
    container: document.getElementById("lottie-container"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "lottie/loader.json",
};

var anim = lottie.loadAnimation(animationData);

// work with form
const form = document.querySelector(".js-form");
const loader = document.querySelector(".js-loader");
const modal = document.querySelector(".js-modal");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    loader.classList.add("active");

    const formData = new FormData(form);

    fetch("send.php", { method: "POST", body: formData })
        .then((response) => response.text())
        .then((data) => {
            form.reset();
            loader.classList.remove("active");
            modal.classList.add("active");

            setTimeout(() => {
                modal.classList.remove("active");
            }, 2000);
        })
        .catch((error) => {
            console.log("Error:", error);
        });
});

AOS.init({
    once: true,
});
