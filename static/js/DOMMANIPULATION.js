document.addEventListener('DOMContentLoaded', ()=>{
    const paragraphs= document.querySelectorAll('p')
const container = document.getElementById('container');
container.textContent = "modified using ID"

const firstparagraph = document.querySelector('firstparagraph');
// firstparagraphstyle.style.fontsize = "20px";
// firstparagraphstyles.style.color = "blue"
// console.log(firstparagraph);

const multipleparagraphs = document.querySelectorAll('multi'); 
multipleparagraphs.forEach(paragraph => {
    paragraph.style.backgroundcolor = "lightgray"; paragraph.style.padding = "10px"; 
    paragraph.style.border = "1px solid black"
})
console.log(multipleparagraphs);

const secondparagraph = paragraphs[1];
if (secondparagraph){
    secondparagraph.textContent = 'This is second paragraph modified';
    secondparagraph.style.color = 'green'
}
const thirdparagraph = paragraphs[2];
if (thirdparagraph){
    thirdparagraph.textContent= 'This is the third paragraph modified';
    thirdparagraph.style.color= 'purple'
}
})
console.log(1,2);