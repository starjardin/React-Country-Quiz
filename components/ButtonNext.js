import React from 'react'
import { Link } from 'react-router-dom';

export default function ButtonNext ({ getCountries, isAnswerCorrect }) {
  console.log(isAnswerCorrect);
  return (
    <>
    {isAnswerCorrect ? 
      <button 
        onClick={getCountries}
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