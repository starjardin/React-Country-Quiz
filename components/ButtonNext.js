import React from 'react'
import { Link } from 'react-router-dom';

export default function ButtonNext ({ getCountries, isAnswerCorrect,
setCounter, setIsQuestionAnswered }) {
  
  function handleClick () {
    getCountries()
    setCounter(prev => prev + 1)
    setIsQuestionAnswered(false)
  }

  return (
    <>
    {isAnswerCorrect ? 
      <button 
        onClick={handleClick}
        className="next"
      >
        Next
      </button> :
      <Link to="/tryAgain">
        <button 
          className="next"
        >
          Next
        </button>
      </Link>
    }
    </>
  )
}