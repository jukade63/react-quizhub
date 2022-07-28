import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import './App.css'
import { QuizContextProvider } from './context/quizContext'
import Summary from './pages/Summary'

function App() {
  return (
    <QuizContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/summary' element={<Summary />} />
      </Routes>
    </QuizContextProvider>
  )
}

export default App
