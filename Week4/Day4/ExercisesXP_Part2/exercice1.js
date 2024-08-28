// In your Javascript file, using setTimeout, call a function after 2 seconds.
//     The function will alert “Hello World”.
function sayHelloWorld() {
    alert("Hello World!");
}
setTimeout(sayHelloWorld, 2000);

// In your Javascript file, using setTimeout, call a function after 2 seconds.
//     The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
function addNewParagraphToContainer() {
    let containerElement = document.getElementById('container');
    let newParagraphElement = document.createElement("p");
    newParagraphElement.textContent = 'Hello World';
    containerElement.appendChild(newParagraphElement);

    let countParagraphElement = containerElement.getElementsByTagName('p').length;
    if (countParagraphElement > 4) {
        stopAdding();
    }
}
setTimeout(addNewParagraphToContainer, 2000);

// In your Javascript file, using setInterval, call a function every 2 seconds.
//     The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
//     Instead of clicking on the button, the interval will be cleared (ie. clearInterval)
// as soon as there will be 5 paragraphs inside the <div id="container">.
let intervalId = setInterval(addNewParagraphToContainer, 2000);

let buttonClearInterval = document.getElementById('clear');
function stopAdding() {
    clearInterval(intervalId);
}
buttonClearInterval.addEventListener('click', stopAdding);

