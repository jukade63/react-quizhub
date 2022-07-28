import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { QuizContext } from '../context/quizContext'

function Question({ questions }) {
  const { setCountCorrect } = useContext(QuizContext)
  const navigate = useNavigate()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [shuffledAnswers, setShuffledAnswers] = useState([])
  const [correctAnswer, setCorrectAnswer] = useState('')
  const [selectedAnswerIndex, setSelectedIAnswerIndex] = useState(undefined)

  const shuffleAnswers = (correct, incorrect) => {
    const arr = [correct, ...incorrect]
    const shuffledArr = arr.sort((a, b) => 0.5 - Math.random())
    return shuffledArr
  }

  useEffect(() => {
    if (questions) {
      const shuffled = shuffleAnswers(
        questions[currentQuestion].correct_answer,
        questions[currentQuestion].incorrect_answers
      )
      setCorrectAnswer(questions[currentQuestion].correct_answer)
      setShuffledAnswers(shuffled)
    }
  }, [currentQuestion, questions])

  const checkAnswer = (ans, index) => {
    if (selectedAnswerIndex === index && ans === correctAnswer) 'correct'
    if (selectedAnswerIndex === index && ans !== correctAnswer) return 'wrong'
    if (ans === correctAnswer) return 'correct'
  }

  const handleSelectAnswer = (ans, index) => {
    setSelectedIAnswerIndex(index)
    if (ans === correctAnswer) {
      setCountCorrect((prev) => prev + 1)
    }
  }

  const handleNextQuestion = () => {
    console.log(currentQuestion, questions.length - 1)
    if (currentQuestion === questions.length - 1) {
      navigate('/summary')
    }
    setCurrentQuestion((prev) => prev + 1)
    setSelectedIAnswerIndex(undefined)
  }

  return (
    <div className='text-center'>
      <h2>
        <span className='me-2'>Question</span>
        {currentQuestion + 1}/{questions.length}
      </h2>
      <div className='p-4 bg-dark border rounded mb-2 d-flex place-items-center'>
        <p>{questions[currentQuestion].question}</p>
      </div>

      <div className='answer-container'>
        {shuffledAnswers.map((ans, index) => (
          <button
            key={index}
            className={`p-2 mb-2 answer ${
              selectedAnswerIndex >= 0 && checkAnswer(ans, index)
            }`}
            onClick={() => handleSelectAnswer(ans, index)}
            disabled={selectedAnswerIndex}
          >
            {ans}
          </button>
        ))}
      </div>
      <button onClick={handleNextQuestion} className='btn btn-success mt-3'>
        Next Question
      </button>
    </div>
  )
}

export default Question
