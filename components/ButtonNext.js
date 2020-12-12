import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CountriesContext } from '../context/countriesContext';

export default function ButtonNext ({ 
  isAnswerCorrect,
  setIsQuestionAnswered 
}) {

  const { getCountries, setScore } = useContext(CountriesContext)
  
  function handleNextButtonClick () {
    getCountries()
    setScore(prevScore => prevScore + 1)
    setIsQuestionAnswered(false)
  }

  return (
    <>
      {isAnswerCorrect ? 
        <button 
          onClick={handleNextButtonClick}
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