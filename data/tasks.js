const tasks = [];

function addTask(title) {
  const newTask = {
    id: tasks.length + 1,
    title
  };
  tasks.push(newTask);
}

function getTask(id) {
  return tasks.find(t => t.id === id);
}

module.exports = { tasks, addTask, getTask };
