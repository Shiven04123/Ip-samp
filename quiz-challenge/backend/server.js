// backend/server.js
const express = require('express');
const cors = require('cors');
const quizRoute = require('./routes/quiz');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/quiz', quizRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});