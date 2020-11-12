import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CountriesContext } from '../context/countriesContext'
import winners from "./../assets/winners.svg"

export default function ButtonNext () {

  function handleTryAgainButtonClick () {
    getCountries()
    setScore(0)
  }

  const { getCountries, score, setScore } = useContext(CountriesContext)
  return (
    <>
      <div className="tryagain">
        <img src={winners} alt="winner"/>
        <h3 className="results">Results</h3>
        <p>You got <span>{score}</span> correct answers</p>
        <Link to="/">
          <button
            onClick={ handleTryAgainButtonClick }
          >
            Try again
          </button>
        </Link>
      </div>
    </>
  )
}