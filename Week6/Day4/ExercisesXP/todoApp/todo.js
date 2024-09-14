// Create a directory named todoApp.
//
//     Inside the todoApp directory, create two files: todo.js and server.js.
//
//     In todo.js, define an ES6 module that exports a TodoList class.
//
// The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.
// Export the TodoList class.

export class TodoList {

    constructor() {
        this.tasks = [];
    }

    add(task) {
        this.tasks.push({
            task,
            completed: false
        });

    }

    complete(task) {
        const currentTask = this.tasks.find(t => t.task === task);
        if (currentTask) {
            currentTask.completed = true;
        } else {
            console.log(`Task: ${task} not found`);
        }
    }

    print() {
        console.log(this.tasks);
    }
}