import React, { useContext } from 'react'
import { QuizContext } from '../context/quizContext'
import { categories } from '../options'
import { useNavigate } from 'react-router-dom'

function Summary() {
  const navigate = useNavigate()
  const { amount, category, difficulty, countCorrect } = useContext(QuizContext)
  const categoryIdx = categories.findIndex((item) => item.value === category)

  console.log(category)
  console.log(difficulty)

  return (
    <div className='summary'>
      <div className='col d-flex justify-content-center align-items-center h-100 flex-column'>
        <div className='bg-dark p-5'>
          <h2>
            Your correct answers : {countCorrect} out of {amount}
          </h2>
          <h3>
            Category :{' '}
            {categories[categoryIdx]
              ? categories[categoryIdx].category
              : ' any'}
          </h3>
          <h3>Difficulty : {difficulty ? difficulty : ' any'}</h3>
          <div className='d-flex justify-content-center align-items-center mt-5'>
            <button
              className='btn btn-primary'
              onClick={() => {
                navigate('/')
                window.location.reload()
              }}
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary
