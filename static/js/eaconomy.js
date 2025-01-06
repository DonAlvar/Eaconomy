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
    if (answer.classList.contains("show")){
        answer.classList.remove("show");
        arrow.classList.remove("rotate")
    }else {
        answer.classList.add("show");
        arrow.classList.add("rotate")
    }
}
const menueIcon = document.getElementById('menueIcon');
const navLinks = document.getElementById('navLinks');

menueIcon.addEventListener('click', () => {
    menueIcon.classList.toggle('active');
    navLinks.classList.toggle('show');
});