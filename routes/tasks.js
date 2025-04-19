const express = require('express');
const path = require('path');
const router = express.Router();
const { tasks, addTask, getTask } = require('../data/tasks');

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

module.exports = router;
