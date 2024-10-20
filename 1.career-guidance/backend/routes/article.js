const express = require('express');
const router = express.Router();
const articles = require('../data');

// GET request to fetch articles
router.get('/', (req, res) => {
    res.json(articles);
});

export default router;