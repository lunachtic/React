import React, { useState } from 'react';
import './App.css';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			options: ['New York', 'London', 'Paris', 'Dublin'],
      answer:'paris',
		},
		{
			questionText: 'Who is CEO of Tesla?',
			options: ['Jeff Bezos', 'Elon Musk', 'Bill Gates', 'Tony Stark'],
      answer:'Elon Musk',
    },
		{
			questionText: 'The iPhone was created by which company?',
			options: ['Apple', 'Intel', 'Amazon', 'Microsoft'],
      answer:'Apple',
		},
		{
			questionText: 'How many Harry Potter books are there?',
			options: ['1', '4', '6', '7'],
      answer:'7',
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect === questions[currentQuestion].answer) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].options.map((i) => (
							<button onClick={() => handleAnswerOptionClick(i)}>{i}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}