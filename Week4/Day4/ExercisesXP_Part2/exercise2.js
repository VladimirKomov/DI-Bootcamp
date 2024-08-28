// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the
// <div id="container">, when the button is clicked on.
function myMove() {
    let containerElement = document.getElementById('container');
    let animateElement = document.getElementById('animate');

    let containerWidth = containerElement.clientWidth;
    let animateWidth = animateElement.clientWidth;
    let position = 0;

    let intervalId = setInterval(function () {
        if ((containerWidth - animateWidth - position) > 0) {
            position++;
            animateElement.style.left = position + 'px';
        } else {
            clearInterval(intervalId);
        }
    },10);
}
