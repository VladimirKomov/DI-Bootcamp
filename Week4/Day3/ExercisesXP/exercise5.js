// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Delete the second <li> of the second <ul>.
// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)

let allDivs = document.querySelectorAll('div');
for (let div of allDivs) {
    console.log(`Div: ${div.textContent}`);
}

let listItems = document.querySelectorAll('ul.list li');
listItems.forEach((element) => {
    if (element.textContent === 'Pete') {
        element.textContent = 'Richard';
    }
});

let listUls = document.querySelectorAll('ul.list');
if (listUls.length >= 2) {
    let secondUl = listUls[1];
    let listLi = secondUl.querySelectorAll('li');
    if (listLi.length >= 2) {
        listLi[1].remove();
    }
}

listUls = document.querySelectorAll('ul.list');
listUls.forEach((ul) => {
    let lis = ul.querySelectorAll('li');
    if (lis.length > 1) {
        lis[0].textContent = 'Vova';
    }
});

// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.
let listUlsByTag = document.getElementsByTagName('ul');
for (let i = 0; i < listUlsByTag.length; i++) {
    listUlsByTag[i].classList.add('student_list');
    if (i === 0) {
        listUlsByTag[i].classList.add('university');
        listUlsByTag[i].classList.add('attendance');
    }
}

// Add a “light blue” background color and some padding to the <div>.
// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
// Change the font size of the whole body.
let allDivsByTag = document.getElementsByTagName('div');
for (let element of allDivsByTag) {
    element.style.backgroundColor = 'lightblue';
    element.style.padding = '20px';
}

let allLiByTag = document.getElementsByTagName('li');
for (let li of allLiByTag) {
    if (li.textContent === 'Dan') {
        li.style.display = 'none';
    }
    if (li.textContent === 'Richard') {
        li.style.border = '1px solid red';
    }
}

let bodyElement = document.body;
bodyElement.style.fontSize = '20px';

let containerDiv = document.getElementById('container');


let computedStyle = window.getComputedStyle(containerDiv);
if (computedStyle.backgroundColor === 'rgb(173, 216, 230)') {
    let userList = containerDiv.nextElementSibling;
    let listItems = userList.getElementsByTagName('li');
    let user1 = listItems[0].textContent;
    let user2 = listItems[1].textContent;
    alert(`Hello ${user1} and ${user2}`);
}