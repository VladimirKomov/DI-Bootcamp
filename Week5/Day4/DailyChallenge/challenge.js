// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
const form = document.querySelector('form');

form.addEventListener('submit', event => {
   event.preventDefault();

   const formData = new FormData(form);
    //fist - value, second - key
    const currentDate = {};
    formData.forEach((value, key) => {
        currentDate[key] = value;
    });

    const jsonFormData = JSON.stringify(currentDate, null, 2);

    const newDiv = document.createElement('div');
    newDiv.classList.add('json-data');
    newDiv.innerHTML = `<p>${jsonFormData}</p>`;

    const body = document.querySelector('body');
    body.appendChild(newDiv);

});
