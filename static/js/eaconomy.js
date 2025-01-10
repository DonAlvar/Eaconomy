function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const arrow = element.querySelector(".arrow");

    // if (answer.style.display === "block") {
    //     answer.style.display = "none";
    //     arrow.textContent = "➡️";
    // } else {
    //     answer.style.display = "block";
    //     arrow.textContent = "⬇️";
    // }
    if (answer.classList.contains("show")) {
        answer.classList.remove("show");
        arrow.classList.remove("rotate")
    } else {
        answer.classList.add("show");
        arrow.classList.add("rotate")
    }
}
const menueIcon = document.querySelector('.menue-icon');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

menueIcon.addEventListener('click', () => {
    menueIcon.classList.toggle('active');
    navLinks.classList.toggle('show');
});
navItems.forEach((link) => {
    link.addEventListener('click', () => {
        menueIcon.classList.remove('active');
        navLinks.classList.remove('show');
    });
});