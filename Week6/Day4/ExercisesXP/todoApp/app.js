// In app.js, import the TodoList class from the todo.js module.
//
//     Create an instance of the TodoList class.
//
// Add a few tasks, mark some as complete, and list all tasks.
//
//     Run app.js and verify that the todo list operations are working correctly.

import {TodoList} from "./todo.js";

const todoList = new TodoList();

const task1 = 'Take the wife for a walk';
const task2 = 'Take the cat for a walk';

todoList.add(task1);
todoList.add(task2);

todoList.print();

todoList.complete(task2);
todoList.print();