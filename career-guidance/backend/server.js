// backend/server.js
import express from 'express'; // Change this line

const app = express();
const PORT = 5000; // You can choose any port

// Middleware to parse JSON
app.use(express.json());

// Example route to get articles
app.get('/api/articles', (req, res) => {
    import('./data.js').then((module) => {
        const articles = module.default; // Use .default to access default export
        res.json(articles);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
