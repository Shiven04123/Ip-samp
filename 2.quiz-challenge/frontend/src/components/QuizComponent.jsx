import React, { useEffect, useState } from 'react';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch('http://localhost:5000/api/quiz');
      const data = await response.json();
      setQuestions(data);
    };

    fetchQuestions();
  }, []);

  const handleAnswer = (answer) => {
    // Immediately append the current answer to userAnswers
    const updatedAnswers = [...userAnswers, answer];
    setUserAnswers(updatedAnswers);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate score using the updated answers array
      const calculatedScore = updatedAnswers.reduce((score, answer, index) => {
        return score + (answer === questions[index].answer ? 1 : 0);
      }, 0);
      setScore(calculatedScore);
    }
  };

  if (score !== null) {
    return <h2>Your score: {score} / {questions.length}</h2>;
  }

  return (
    <div>
      <h2>{questions[currentQuestionIndex]?.question}</h2>
      {questions[currentQuestionIndex]?.options.map((option) => (
        <button key={option} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Quiz;
