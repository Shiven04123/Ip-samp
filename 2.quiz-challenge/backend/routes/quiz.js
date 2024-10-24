const express = require('express');
const router = express.Router();

const questions = [
  {
    id: 1,
    question: 'What is the capital of Maharashtra?',
    options: ['Nagpur', 'Pune', 'Mumbai', 'Dadar'],
    answer: 'Mumbai',
  },
  {
    id: 2,
    question: 'Which planet is the biggest planet in solar system?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Jupiter',
  },
  {
    id: 3,
    question: 'What is the currency of america?',
    options: ['dinar', 'dollar', 'pounds', 'rupees'],
    answer: 'dollar',
  },
  {
    id: 4,
    question: 'What is the largest ocean on Earth?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    answer: 'Pacific Ocean',
  },
  {
    id: 5,
    question: 'Who wrote invented zero?',
    options: ['Newton', 'Einstein', 'Aryabhatta', 'Ramanaujan'],
    answer: 'Aryabhatta',
  },
];

router.get('/', (req, res) => {
  res.json(questions);
});

module.exports = router;
