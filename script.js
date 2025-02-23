// Typing Effect
const text = "Adarsh Balakrishnan";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    }
}
window.onload = typeEffect;

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Year in Footer
document.getElementById('year').textContent = new Date().getFullYear();