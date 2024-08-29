// get all button panel
let currentColor = 'white';
let buttonPanel = document.getElementById('sidebar');

buttonPanel.addEventListener("click", function(event) {
    if (event.target.tagName.toLowerCase() === "button") {
        if (event.target.id === "clear") {
            clickEventButtonClear();
        } else {
            clickEventButtonColor(event.target);
        }
    }
})

function clickEventButtonClear() {
    currentColor = 'white';
    let divElements = fieldPanel.getElementsByTagName('div');
    for (element of divElements) {
        element.style.backgroundColor = currentColor;
    }
}

function clickEventButtonColor(button) {
    currentColor = button.id;
}

let fieldPanel = document.getElementById('field');
let isMouseDown = false;

fieldPanel.addEventListener('mouseover', function(event) {
    if (isMouseDown) {
        event.target.style.backgroundColor = currentColor;
    }
})

document.addEventListener('mousedown', function(event) {
    if (event.button === 0) {
        isMouseDown = true;
    }
});

document.addEventListener('mouseup', function(event) {
    if (event.button === 0) {
        isMouseDown = false;
    }
});

