const tasks = [];
let taskInputElement = document.getElementById('taskInput');

function submitNotDefault(event) {
    event.preventDefault();
    if (emptyInput()) {
        alert("Please enter new task");
    } else {
        addNewTask(taskInputElement.value);
        taskInputElement.value = '';
    }
}

function emptyInput() {
    return taskInputElement.value === "";
}

function addNewTask(textTask) {
    tasks.push(textTask);

    let divTaskElement = document.querySelector('.listTasks');

    let newDivElement = document.createElement('div');
    newDivElement.classList.add('task');
    newDivElement.id = tasks.length - 1;

    let newButtonElement = document.createElement('button');
    newButtonElement.classList.add('remove-btn');
    let newIconElement = document.createElement('i');
    newIconElement.classList.add('fas', 'fa-times');
    newIconElement.addEventListener('click', deleteTask);
    newButtonElement.appendChild(newIconElement);

    let newInputElement = document.createElement('input');
    newInputElement.classList.add('checkbox');
    newInputElement.type = 'checkbox';
    newInputElement.id = 'task' + tasks.length;

    let newLabelElement = document.createElement('label');
    newLabelElement.setAttribute('for', 'task' + tasks.length);
    newLabelElement.textContent = tasks[tasks.length - 1];

    newDivElement.appendChild(newButtonElement);
    newDivElement.appendChild(newInputElement);
    newDivElement.appendChild(newLabelElement);

    divTaskElement.appendChild(newDivElement);
}


let formElement = document.querySelector('form');
formElement.addEventListener('submit', submitNotDefault);

// let remoteTaskButtons = document.getElementsByClassName('remove-btn');
//
// if (remoteTaskButtons.length > 0) {
//     Array.from(remoteTaskButtons).forEach(button => {
//         button.addEventListener('click', deleteTask);
//     });
// }


function deleteTask(event) {
    let taskDiv = event.target.closest('.task');
    let taskIndex = taskDiv.id;
    tasks.splice(Number(taskIndex), 1);
    taskDiv.remove();
    updateTaskIds();
}

function updateTaskIds() {
    const taskDivs = document.querySelectorAll('.task');
    taskDivs.forEach((taskDiv, index) => {
        taskDiv.id = index;
    });
}

