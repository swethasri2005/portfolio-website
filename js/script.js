// Contact Form Message
function showMessage() {
    alert("Thank You! Your message has been sent successfully.");
}

// Typing Effect
const text = "MCA Student | Python Developer | Web Developer | AI Enthusiast";

let index = 0;

function typingEffect() {

    const typingElement =
        document.getElementById("typing");

    if (index < text.length) {

        typingElement.innerHTML +=
            text.charAt(index);

        index++;

        setTimeout(typingEffect, 100);
    }
}

typingEffect();

// Auto Current Year
document.getElementById("year").innerHTML =
new Date().getFullYear();

// Smooth Scroll
document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior: "smooth"
        });

    });

});

// Scroll Animation
const sections =
document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop =
            section.getBoundingClientRect().top;

        const triggerPoint =
            window.innerHeight * 0.8;

        if (sectionTop < triggerPoint) {

            section.style.opacity = "1";

            section.style.transform =
                "translateY(0)";
        }

    });

});

// Run Once For Hero Section
sections.forEach(section => {

    const sectionTop =
        section.getBoundingClientRect().top;

    const triggerPoint =
        window.innerHeight * 0.8;

    if (sectionTop < triggerPoint) {

        section.style.opacity = "1";

        section.style.transform =
            "translateY(0)";
    }

});

// Back To Top Button
const topBtn =
document.getElementById("topBtn");

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Dark Mode Toggle
const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (
        document.body.classList.contains("dark")
    ) {

        themeBtn.innerHTML = "☀️";

    } else {

        themeBtn.innerHTML = "🌙";
    }

});

// Mobile Menu
const menuToggle =
document.getElementById("menu-toggle");

const navLinks =
document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// Close Mobile Menu After Click
document.querySelectorAll("#nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// Console Message
console.log(
    "Swetha R Portfolio Loaded Successfully"
);