// backend/routes/quiz.js
const express = require('express');
const router = express.Router();

// Sample quiz questions
const questions = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    answer: 'Paris',
  },
  {
    id: 2,
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Mars',
  },
  {
    id: 3,
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    answer: '4',
  },
  {
    id: 4,
    question: 'What is the largest ocean on Earth?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    answer: 'Pacific Ocean',
  },
  {
    id: 5,
    question: 'Who wrote "To be, or not to be"?',
    options: ['Shakespeare', 'Hemingway', 'Dickens', 'Tolstoy'],
    answer: 'Shakespeare',
  },
];

// GET route to fetch quiz questions
router.get('/', (req, res) => {
  res.json(questions);
});

module.exports = router;
