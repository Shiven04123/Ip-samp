import React, { useEffect, useState } from 'react';
import ArticleCard from './components/ArticleCard';
import ContactForm from './components/ContactForm';

const App = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch('http://localhost:5000/api/articles');
            const data = await response.json();
            setArticles(data);
        };

        fetchArticles();
    }, []);

    return (
        <div>
            <h1>Career Guidance Blog</h1>
            <div>
                {articles.map((article) => (
                    <ArticleCard key={article.id} title={article.title} content={article.content} />
                ))}
            </div>
            <ContactForm />
        </div>
    );
};

export default App;
