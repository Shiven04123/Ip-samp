import React, { useState } from 'react';
import axios from 'axios';

const Calculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = async (e) => {
    e.preventDefault();

    if (!weight || !height) {
      alert('Please enter both weight and height');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/calculate-bmi', {
        weight: parseFloat(weight),
        height: parseFloat(height),
      });

      setResult(response.data);
    } catch (error) {
      console.error('Error calculating BMI', error);
    }
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <form onSubmit={handleCalculate}>
        <div>
          <label>Weight (kg): </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label>Height (cm): </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button type="submit">Calculate BMI</button>
      </form>

      {result && (
        <div>
          <h3>Your BMI: {result.bmi}</h3>
          <p>Health Category: {result.category}</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
