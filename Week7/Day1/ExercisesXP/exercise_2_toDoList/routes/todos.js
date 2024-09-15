// // Sample in-memory database for storing to-do items
// const todos = [];
// // Get all to-do items
// // Add a new to-do item
// // Update a to-do item by ID
// // Delete a to-do item by ID
import express from 'express';

const todos = [{id: 1, name: 'name1', description: 'descr1'}];
const router = express.Router();

router.get('/todos', (req, res) => {
    res.json(todos);
});

router.post('/todos', (req, res) => {
   const {name, description} = req.body;
   const newTask = {id: todos.length + 1, name, description};
   todos.push(newTask);
   res.json(newTask);
});

router.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const idex = todos.findIndex(t => t.id == id);
    if (idex === -1) {
        return res.status(404).json({ message: `product id=${id} to update not found` });
    }
    const { name, description } = req.body;
    if (name) {
        todos[idex].name = name;
    }
    if (description) {
        todos[idex].description = description;
    }
    res.json(todos[idex]);
});

router.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    const idex = todos.findIndex(t => t.id == id);
    if (idex === -1) {
        return res.status(404).json({ message: "product to update not found" });
    }
    todos.splice(idex, 1);
    res.status(204).send();
})

export default router;
