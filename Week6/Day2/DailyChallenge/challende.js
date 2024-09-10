const url = 'https://api.giphy.com/v1/gifs/random';
const params = new URLSearchParams({
    api_key: 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
});

document.getElementById('gifForm').addEventListener('submit', handleGif);

async function handleGif(element) {
    element.preventDefault();
    const gifRating = element.target.gifRating.value.toLowerCase();
    const gifTag = element.target.gifTag.value.toLowerCase();
    params.set('rating', gifRating);
    params.set('tag', gifTag);
    const data = await getGifs(`${url}?${params}`);
    renderGifs(data);
}

async function getGifs(fullUrl) {
    try {
        const response = await fetch(fullUrl);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (e) {
        console.error("Error getGifs", e.message);
    }
}

function renderGifs(data) {
    const gifsContainer = document.getElementById('gifsContainer');

    console.log(data);
    const gif = data.data;
        const newDiv = document.createElement('div');
        newDiv.classList.add('gif-container');

        const newImg = document.createElement('img');
        newImg.src = gif.images.fixed_height.url;

        const newButton = document.createElement('button');
        newButton.textContent = 'delete';
        newButton.addEventListener('click', () => {
            const divDelete = newButton.closest('div');
            divDelete.remove();
            console.log('delete div element', divDelete);
            renderDeleteAll();
        });
    newDiv.appendChild(newImg);
    newDiv.appendChild(document.createElement('br'));
    newDiv.appendChild(newButton);
    gifsContainer.appendChild(newDiv);

    renderDeleteAll();
}

function renderDeleteAll() {
    const gifContainers = document.getElementsByClassName('gif-container');

    if (gifContainers.length > 0 && !document.getElementById('deleteAllGifts')) {
        const newButtonDeleteAll = document.createElement('button');
        newButtonDeleteAll.id = 'deleteAllGifts';
        newButtonDeleteAll.textContent = 'Delete All GIFs';

        newButtonDeleteAll.addEventListener('click', () => {
            const allGifs = Array.from(gifContainers);
            allGifs.forEach(gif => {
                gif.remove();
            });
            document.getElementById('deleteAllGifts').remove();
        });
        document.querySelector('body').appendChild(newButtonDeleteAll);
    }
    else if (gifContainers.length === 0 && document.getElementById('deleteAllGifts')) {
        document.getElementById('deleteAllGifts').remove();
    }
}

