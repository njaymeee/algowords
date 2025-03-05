import React, { useState } from 'react';
import './quizmodal.css';

const QuizModal = ({getQuestions}) => {
    const [answers, setAnswers] = useState(Array(5).fill(null));
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerChange = (index, answer) => {
        const newAnswers = [...answers];
        newAnswers[index] = answer;
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        let newScore = 0;
        answers.forEach((answer, index) => {
            if (answer === getQuestions[index].correct) {
                newScore += 1;
            }
        });
        setScore(newScore);
        setIsSubmitted(true);
    };

    const allAnswered = answers.every(answer => answer !== null);

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Quiz</h2>
            {getQuestions.map((q, index) => (
                <div key={index} className="mb-4">
                    <p className="mb-2">{q.question}</p>
                    {q.options.map(option => (
                        <label key={option} className="block">
                            <input
                                type="radio"
                                name={`question-${index}`}
                                value={option}
                                onChange={() => handleAnswerChange(index, option)}
                                disabled={isSubmitted}
                                className="mr-2"
                            />
                            {option}
                        </label>
                    ))}
                </div>
            ))}
            <button
                onClick={handleSubmit}
                disabled={!allAnswered || isSubmitted}
                className={`mt-4 px-4 py-2 rounded ${allAnswered ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'}`}
            >
                Check Answers
            </button>
            {isSubmitted && (
                <div className="mt-4">
                    <p>Your score: {score} / 5</p>
                </div>
            )}
        </div>
    );
};

export default QuizModal;