import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function ButtonNext ({ getCountries, isAnswerCorrect, counter,
setCounter }) {
  
  function handleClick () {
    getCountries()
    setCounter(prev => prev + 1)
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