import React, { useContext, useEffect, useState } from 'react'
import Question from '../components/Question'
import { QuizContext } from '../context/quizContext'

function Quiz() {
  const { questions } = useContext(QuizContext)

  return (
    <div className='d-flex flex-column justify-content-center align-items-center quiz'>
      {questions ? (
        <Question questions={questions} />
      ) : (
        <div className='d-flex justify-content-center'>
          <div className='spinner-border' role='status'></div>
        </div>
      )}
    </div>
  )
}

export default Quiz
