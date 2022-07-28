import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { QuizContext } from '../context/quizContext'
import { categories, difficulties } from '../options'

function Home() {
  const navigate = useNavigate()
  const { amount, setAmount, setCategory, setDifficulty, startQuiz } =
    useContext(QuizContext)

  const handleSubmitStartQuiz = (e) => {
    e.preventDefault()
    startQuiz()
    navigate('/quiz')
  }

  return (
    <div className='container mt-5 home'>
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <h1>Welcome to QuizHUB</h1>
        <p className='text-muted'>lets begin testing your knowledge</p>
      </div>
      <form onSubmit={handleSubmitStartQuiz}>
        <div className='row mb-2 d-flex justify-content-center'>
          <div className='col-md-8 col-xs-12'>
            <div className='form-group'>
              <label htmlFor='amount' className='text-white'>
                Number of Questions
              </label>
              <input
                type='number'
                id='amount'
                className='form-control'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className='row mb-2 d-flex justify-content-center'>
          <div className='col-md-8 col-sm-12 '>
            <div className='form-group'>
              <label htmlFor='category' className='text-white'>
                Categoy
              </label>
              <select
                className='form-control form-select'
                id='category'
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value=''>Any Category</option>
                {categories.map((c) => (
                  <option value={c.value} key={c.value}>
                    {c.category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className='row mb-2 d-flex justify-content-center'>
          <div className='col-md-8 col-sm-12 '>
            <div className='form-group'>
              <label htmlFor='amount' className='text-white'>
                Difficulty
              </label>
              <select
                className='form-control form-select'
                id='category'
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value='any'>Any Difficulty</option>
                {difficulties.map((d) => (
                  <option value={d.value} key={d.value}>
                    {d.difficulty}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className='row mt-5 d-flex justify-content-center'>
          <button className='btn btn-primary w-25'>Start Quiz</button>
        </div>
      </form>
    </div>
  )
}

export default Home
