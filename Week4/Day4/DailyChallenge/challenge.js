// Get the value of each of the inputs in the HTML file when the form is submitted.
// Remember the event.preventDefault()
function preventDefault(elemnt) {
    elemnt.preventDefault();
    checkFormValues();
    if (elemnt.target.id === 'shuffle-button' && availableStories.length > 0) {
        let index = Math.floor(Math.random() * availableStories.length);
        createStory(availableStories[index]);
        availableStories.splice(index, 1);
    } else  if (elemnt.target.id === 'lib-button') {
        createStory(mainStory);
    }
}

let nounElement = document.querySelector('#noun');
let adjectiveElement = document.querySelector('#adjective');
let personElement = document.querySelector('#person');
let verbElement = document.querySelector('#verb');
let placeElement = document.querySelector('#place');
// Make sure the values are not empty
function checkFormValues() {
    if (nounElement.value === '') {
        alert('Please enter "Noun" again');
    }
    if (adjectiveElement.value === '') {
        alert('Please enter "Adjective" again');
    }
    if (personElement.value === '') {
        alert('Please enter "Person" again');
    }
    if (verbElement.value === '') {
        alert('Please enter "Verb" again');
    }
    if (placeElement.value === '') {
        alert('Please enter "Place" again');
    }
}
let mainStory = "One day, [person] decided to visit the [adjective] [place]. They took their favorite [noun] " +
    "with them. When they arrived, they saw that everyone was starting to [verb]. It was the most [adjective] " +
    "day [person] had ever experienced!";

const randomStories = [
    "[person] went to the [place] to find the [adjective] [noun]. Along the way, they decided to [verb] " +
    "to pass the time. It was a truly [adjective] adventure!",
    "In the [adjective] [place], [person] found a [noun]. They couldn't resist the urge to [verb]. " +
    "It was the best decision [person] ever made!",
    "After a long day, [person] decided to relax at the [adjective] [place]. While sitting there, " +
    "they noticed a [noun] lying on the ground. Curious, [person] picked it up and suddenly felt the urge to [verb]. " +
    "It was an unexpected but [adjective] turn of events that made the day truly unforgettable."
];

let availableStories = [...randomStories];
// Write a story that uses each of the values.
let storyElement = document.querySelector('#story');

function createStory(story){
    story = story.replace(/\[person\]/g, personElement.value);
    story = story.replace(/\[adjective\]/g, adjectiveElement.value);
    story = story.replace(/\[noun\]/g, nounElement.value);
    story = story.replace(/\[verb\]/g, verbElement.value);
    story = story.replace(/\[place\]/g, placeElement.value);

    storyElement.textContent = story;
}

let buttonLib = document.getElementById('lib-button');
buttonLib.addEventListener('click', preventDefault);

let buttonShuffle = document.getElementById('shuffle-button');
buttonShuffle.addEventListener('click', preventDefault);

