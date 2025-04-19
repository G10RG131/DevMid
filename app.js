const express = require('express');
const path = require('path');
const app = express();
const tasksRouter = require('./routes/tasks');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app; // Exported for testing
