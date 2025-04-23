const express = require('express');
const path = require('path');
const router = express.Router();
const { tasks, addTask, getTask } = require('../data/tasks');

router.get('/', (req, res) => {
  const taskListHTML = tasks.map(task => `<li>${task.title}</li>`).join('');
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>To-Do App</title>
    </head>
    <body>
      <h1>My To-Do List</h1>
      <form action="/tasks/add" method="POST">
        <input type="text" name="title" placeholder="Enter task" required>
        <button type="submit">Add Task</button>
      </form>
      
      <h2>Tasks:</h2>
      <ul id="task-list">
        ${taskListHTML}
      </ul>
    </body>
    </html>
  `);
});

router.post('/add', (req, res) => {
  const { title } = req.body;
  addTask(title);
  res.redirect('/');
});

router.get('/:id', (req, res) => {
  const task = getTask(Number(req.params.id));
  if (!task) return res.status(404).send('Task not found');

  res.send(`
    <h1>Task Details</h1>
    <p><strong>ID:</strong> ${task.id}</p>
    <p><strong>Title:</strong> ${task.title}</p>
    <a href="/">Go Back</a>
  `);
});

router.get('/api/tasks', (req, res) => {
  res.json(tasks); // Send the tasks array as JSON
});

module.exports = router;

router.get('/:id', (req, res) => {
  const task = getTask(Number(req.params.id));
  if (!task) return res.status(404).send('Task not found');

  res.send(`
    <h1>Task Details</h1>
    <p><strong>ID:</strong> ${task.id}</p>
    <p><strong>Title:</strong> ${task.title}</p>
    <a href="/">Go Back</a>
  `);
});
