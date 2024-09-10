// 1 /////////////////////////////////////////
// Create a program to retrieve the data from the API URL provided above.
//     Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript
//     Object that you receive.
const url = 'https://api.giphy.com/v1/gifs/search';
const params = new URLSearchParams({
    q: 'hilarious',
    rating: 'g',
    api_key: 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My',
    limit: 25
});

fetch(`${url}?${params}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));


// 2 ///////////////////////////////////////////
// Read carefully the documention to understand all the possible queries that the URL accept.
//     Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
//     Console.log the Javascript Object that you receive.
const url = 'https://api.giphy.com/v1/gifs/search';
const params = new URLSearchParams({
    q: 'sun',
    rating: 'g',
    api_key: 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My',
    limit: 10,
    offset: 2
});

async function getGifts(urlFull) {
    try {
        const response = await fetch(urlFull);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data);

        const gifContainer = document.getElementById('gifs');
        gifContainer.innerHTML = '';

        data.data.forEach(gif => {
            const img = document.createElement('img');
            img.src = gif.images.fixed_height.url;
            gifContainer.appendChild(img);
        });

    } catch (e) {
        console.error('Error get gifts', e.message);
    }
}

getGifts(`${url}?${params}`);

// 3 //////////////////////////////////////////
// Create an async function, that will await for the above GET request.
//     The program shouldn’t contain any then() method.
//     Make sure to check the status of the Response and to catch any occuring errors.
async function getStarships() {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        if (!response.ok) {
            throw new Error("Failed to fetch starships from API", response.status);
        }
        const starships = await response.json();
        console.log(starships.result);
    } catch (e) {
        console.error("Error starships", e.message);
    }
}

getStarships();

// 4 //////////////////////////////////////////////
// Analyse the code provided below - what will be the outcome?
// calling
// resolved


    function resolveAfter2Seconds() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 2000);
        });
    }

    async function asyncCall() {
        console.log('calling');
        let result = await resolveAfter2Seconds();
        console.log(result);
    }

asyncCall();



