// Retrieve the form and console.log it
let formElements = document.querySelectorAll('form');
console.log(formElements);
formElements.forEach(element => {
    console.log(element.textContent);
});

// Retrieve the inputs by their id and console.log them.
let firstNameInput = document.getElementById('fname');
let lastNameInput = document.getElementById('lname');
function printInput() {
    console.log(this.value);
}
firstNameInput.addEventListener('blur', printInput);
lastNameInput.addEventListener('blur', printInput);

// Retrieve the inputs by their name attribute and console.log them.
let firstNameInputByName = document.getElementsByName('firstname')[0];
let lastNameInputByName = document.getElementsByName('lastname')[0];
firstNameInputByName.addEventListener('blur', printInput);
lastNameInputByName.addEventListener('blur', printInput);

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
//     get the values of the input tags,
//     make sure that they are not empty,
//     create an li per input value,
//     then append them to a the <ul class="usersAnswer"></ul>, below the form.
let submitElement = document.querySelector('form');

function submitNotDefault(element) {
    element.preventDefault();
    let firstNameValue = document.getElementById('fname').value;
    let lastNameValue = document.getElementById('lname').value;
    if (firstNameValue === '' || lastNameValue === '') {
        alert('Please enter again')
        return;
    }

    let firstNameLi = document.createElement('li');
    firstNameLi.textContent = firstNameValue;
    let lastNameLi = document.createElement('li');
    lastNameLi.textContent = lastNameValue;

    let ulElement = document.querySelector('ul.usersAnswer');
    ulElement.appendChild(firstNameLi);
    ulElement.appendChild(lastNameLi);

}
submitElement.addEventListener('submit', submitNotDefault);