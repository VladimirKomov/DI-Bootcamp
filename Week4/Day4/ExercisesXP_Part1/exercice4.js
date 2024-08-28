// Write a JavaScript program to calculate the volume of a sphere.
function calculate(radius) {
    if (radius <=0 || isNaN(radius) ) {
        alert('Radius should be positive integer')
        return;
    }
    let volume = (4/3) * Math.PI * Math.pow(radius, 3);
    return volume;
}

function submitNotDefault(element) {
    element.preventDefault();
    let volumeElement = document.getElementById('volume');
    let radiusElement = document.getElementById('radius');
    volumeElement.value = calculate(radiusElement.value);
}

let submitElement = document.querySelector('form');
submitElement.addEventListener('submit', submitNotDefault);
