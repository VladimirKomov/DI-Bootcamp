
// Using a DOM property, retrieve the h1 and console.log it.
let h1Element = document.querySelector('h1');
console.log(h1Element.textContent);

// Using DOM methods, remove the last paragraph in the <article> tag.
let articlePElement = document.querySelector('article');
lastArticlePElement = articlePElement.lastElementChild;
if (lastArticlePElement) {
    lastArticlePElement.remove();
}

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
function changeBackgroundColorToRedByClick() {
    this.style.backgroundColor = 'red';
}
let h2Element = document.querySelector('h2');
h2Element.addEventListener('click', changeBackgroundColorToRedByClick);



// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
function hideByClick() {
    this.style.display = 'none';
}
let h3Element = document.querySelector('h3');
h3Element.addEventListener('click', hideByClick);

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let buttonBold = document.createElement('button');
buttonBold.textContent = 'All bold';
document.body.appendChild(buttonBold);
function makeBold(value) {
    value.style.fontWeight = 'bold';
}
function makeAllParagraphBold() {
    let paragraphs = document.querySelectorAll('p');
    for (let paragraph of paragraphs) {
        makeBold(paragraph);
    }
}
buttonBold.addEventListener('click', makeAllParagraphBold);

// When you hover on the h1, set the font size to a random pixel size between 0 to 100.
function setRandomFontSize() {
    this.style.fontSize = Math.floor(Math.random() * 101) + 'px';
}
h2Element.addEventListener('mouseover', setRandomFontSize);

// When you hover on the 2nd paragraph, it should fade out
let secondParagraph = document.querySelectorAll('p')[1];
function fadeOut() {
    this.style.transition = 'opacity 1s ease-in-out';
    this.style.opacity = 0;
}
secondParagraph.addEventListener('mouseover', fadeOut);