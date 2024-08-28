// Create an array which value is the planets of the solar system.
let planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"
];

// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet -
// each class containing a different background-color).
// Finally append each div to the <section> in the HTML.
let planetColors = {
    Mercury: "gray",
    Venus: "khaki",
    Earth: "blue",
    Mars: "red",
    Jupiter: "orange",
    Saturn: "gold",
    Uranus: "lightblue",
    Neptune: "darkblue"
};

let listSectionPlanets = document.getElementsByClassName('listPlanets');
let firstSectionPlanets;
if (listSectionPlanets.length > 0) {
    firstSectionPlanets = listSectionPlanets[0];
}
Object.entries(planetColors).forEach(([planet, color]) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("planet");
    newDiv.style.backgroundColor = color;
    newDiv.textContent = planet
    firstSectionPlanets.appendChild(newDiv);
});

// Do the same process to create the moons.
//     Be careful, each planet has a certain amount of moons. How should you display them?
//     Should you still use an array for the planets ? Or an array of objects ?
let planetMoons = {
        Mercury: [],
        Venus: [],
        Earth: ["Moon"],
        Mars: ["Phobos", "Deimos"],
        Jupiter: ["Io", "Europa", "Ganymede", "Callisto"],
        Saturn: ["Titan", "Enceladus", "Mimas", "Iapetus", "Rhea"],
        Uranus: ["Miranda", "Ariel", "Umbriel", "Titania", "Oberon"],
        Neptune: ["Triton", "Proteus", "Nereid", "Larissa"]
};
let divElements = document.querySelectorAll('.listPlanets div');
for (let divElement of divElements) {
    let planetName = divElement.textContent;
    let moons = planetMoons[planetName];

    let planetContainer = document.createElement("div");
    planetContainer.classList.add("planet-container");

    let divPlanetElement = document.createElement('div');
    divPlanetElement.textContent = planetName;
    divPlanetElement.style.backgroundColor = planetColors[planetName];
    divPlanetElement.classList.add('planet');
    planetContainer.appendChild(divPlanetElement);

    planetContainer.style.display = "flex";
    planetContainer.style.alignItems = "center";
    planetContainer.style.gap = "10px";

    if (moons && moons.length > 0) {
        for (let moon of moons) {
            let newDivMoon = document.createElement("div");
            newDivMoon.classList.add("moon");  // Убираем точку перед именем класса
            newDivMoon.textContent = moon;
            newDivMoon.style.position = 'static';
            planetContainer.appendChild(newDivMoon);  // Добавляем в planetContainer
        }
    }

    divElement.replaceWith(planetContainer);
}
