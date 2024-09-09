// 1 /////////////////////////////////////////
const url = 'https://api.giphy.com/v1/gifs/search';
const params = new URLSearchParams({
    q: 'hilarious',
    rating: 'g',
    api_key: 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
});

fetch(`${url}?${params}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .then(data => {
        const gifsContainer = document.getElementById('gifs');
        // data.forEach((item) => {
        //     const newIng = document.createElement('img');
        //     newIng.src = item.url;
        //     gifsContainer.appendChild(newIng);
        // })
})
    .catch(err => console.log(err));

