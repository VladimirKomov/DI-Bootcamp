document.getElementById('button-find').addEventListener('click', async function (e) {
    renderWait();
    const url = 'https://www.swapi.tech/api/'
    const randomNumber = Math.floor(Math.random() * 99) + 1;
    print(randomNumber);
    const person = await getData(`${url}people/${randomNumber}`);
    const planet = await getData(person.result.properties.homeworld);
    renderPerson(person, planet);
});

async function getData(fullUrl) {
    try {
        const response = await fetch(fullUrl);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error getting person", error.message);
        renderError();
    }
}

function renderWait(){
    document.getElementById('people-container').innerHTML =
        '<i class="fa-solid fa-spinner fa-spin-pulse fa-6x" style="color: yellow;"></i>';
}

function renderError() {
    const errorStr = `
     <h3>Not found!</h3>
     <i class="fa-solid fa-fade fa-skull-crossbones fa-6x" style="color: yellow;"></i>
    `;
    document.getElementById('people-container').innerHTML = errorStr;
}

function renderPerson(person, planet) {
    // the name, height, gender, birth year, and home world of the character
    const name = person.result.properties.name;
    const height = person.result.properties.height;
    const birthYear = person.result.properties.birth_year;
    const homeworld = planet.result.properties.name;
    const gender = person.result.properties.gender;

    const paragraphs = `
        <h3>${name}</h3><br>
        <p>Height: ${height}</p><br>
        <p>Gender: ${gender}</p><br>
        <p>Birth year: ${birthYear}</p><br>
        <p>Homeworld: ${homeworld}</p>
        `;

    const divPersonElement = document.getElementById('people-container');
    divPersonElement.innerHTML = paragraphs;
};

function print(data) {
    console.log(data);
}
