import express from "express";
import {addTask, deleteTask, getAllTasks, getTaskById, updateTask} from "../controllers/taskController.js";

export const taskRouter = express.Router();

// GET /tasks: Retrieve a list of all tasks from a JSON file.
//GET /tasks/:id: Retrieve a specific task by ID from the JSON file.
//POST /tasks: Create a new task and store it in the JSON file.
//PUT /tasks/:id: Update a task by ID in the JSON file.
//DELETE /tasks/:id: Delete a task by ID from the JSON file.

const path = '/tasks';

taskRouter.get(path, getAllTasks);
taskRouter.get(path + '/:id', getTaskById);
taskRouter.post(path, addTask);
taskRouter.put(path + '/:id', updateTask);
taskRouter.delete(path + '/:id', deleteTask);