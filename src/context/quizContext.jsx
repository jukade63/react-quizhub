import { createContext, useEffect, useState } from 'react'

import axios from 'axios'

const QuizContext = createContext()

function QuizContextProvider({ children }) {
  const [questions, setQuestions] = useState(null)
  const [amount, setAmount] = useState(10)
  const [category, setCategory] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [countCorrect, setCountCorrect] = useState(0)

  const fetchcQuiz = async () => {
    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
      )

      setQuestions(data.results)
    } catch (error) {
      console.log(error)
    }
  }
  const startQuiz = () => {
    fetchcQuiz()
  }

  console.log(questions)
  return (
    <QuizContext.Provider
      value={{
        questions,
        amount,
        category,
        difficulty,
        countCorrect,
        setAmount,
        setCategory,
        setDifficulty,
        startQuiz,
        setCountCorrect,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}

export { QuizContext, QuizContextProvider }
