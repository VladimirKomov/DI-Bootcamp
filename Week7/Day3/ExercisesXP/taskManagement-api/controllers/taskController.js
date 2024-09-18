// GET /tasks: Retrieve a list of all tasks from a JSON file.
//GET /tasks/:id: Retrieve a specific task by ID from the JSON file.
//POST /tasks: Create a new task and store it in the JSON file.
//PUT /tasks/:id: Update a task by ID in the JSON file.
//DELETE /tasks/:id: Delete a task by ID from the JSON file.

import {readFile, writeFile} from "../models/tastkModel.js";
import console from "node:console";

const tasksFilePath = './config/tasks.json';

export const errorHandler = (err, req, res, next) => {
    console.error(err);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        error: err.message || "Server Error",
    });
};

export const getAllTasks = async (req, res, next) => {
    try {
        const tasks = await readFile(tasksFilePath);
        res.status(200).json(tasks);
    } catch (error) {
        next(error);
    }
};

export const getTaskById = async (req, res, next) => {
    try {
        const taskId = req.params.id;
        const tasks = await readFile(tasksFilePath);
        const task = tasks.find(task => task.id == taskId);
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404).json({
                success: false,
                error: `Task not found with id ${taskId}`,
            });
        }
    } catch (error) {
        next(error);
    }
};

export const addTask = async (req, res, next) => {
    try {
        const tasks = await readFile(tasksFilePath);
        const newTask = req.body;
        newTask.id = tasks.length + 1;
        tasks.push(newTask);
        await writeFile(tasksFilePath, tasks);
        res.status(201).json(newTask);
    } catch (error) {
        next(error);
    }
}

export const updateTask = async (req, res, next) => {
    try {
        const tasks = await readFile(tasksFilePath);
        const taskId = req.params.id;
        const updatedTask = req.body;
        const index = tasks.findIndex(task => task.id == taskId);
        if (index !== -1) {
            tasks[index] = {...tasks[index], ...updatedTask};
            await writeFile(tasksFilePath, tasks);
            res.status(200).json(tasks[index]);
        } else {
            res.status(404).json({
                success: false,
                error: `Task not found with id ${taskId}`,
            });
        }
    } catch (error) {
        next(error);
    }
};

export const deleteTask = async (req, res, next) => {
    try {
        const tasks = await readFile(tasksFilePath);
        const taskId = req.params.id;
        const index = tasks.findIndex(task => task.id == taskId);
        if (index !== -1) {
            tasks.splice(index, 1);
            await writeFile(tasksFilePath, tasks);
            res.status(200).json({ success: true });
        } else {
            res.status(404).json({
                success: false,
                error: `Task not found with id ${taskId}`,
            });
        }
    } catch (error) {
        next(error);
    }
};