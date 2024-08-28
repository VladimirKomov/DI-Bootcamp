// Declare a global variable named allBoldItems
let allBoldItems;

// Create a function called getBoldItems() that takes no parameter.
//     This function should collect all the bold items inside
// the paragraph and assign them to the allBoldItems variable.
function getBoldItems() {
    allBoldItems = document.querySelectorAll('p strong')
}

// Create a function called highlight() that changes the color of all the bold text to blue.
function setColorText(color) {
    if (allBoldItems.length > 0) {
        for (let boldItem of allBoldItems) {
            boldItem.style.color = color;
        }
    }
}
function highlight() {
    setColorText('blue');
}

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
function returnItemsToDefault() {
    setColorText('black');
}

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph),
// and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph).
getBoldItems();
let pItem = document.querySelector('p');
pItem.addEventListener('mouseover', highlight);
pItem.addEventListener('mouseout', returnItemsToDefault);