import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CountriesContext } from '../context/countriesContext'
import winners from "./../assets/winners.svg"


export default function ButtonNext () {

  function handleTryAgainButtonClick () {
    getCountries()
    setScore(0)
  }

  const pizzas = "🍕"

  const { getCountries, score, setScore } = useContext(CountriesContext)
  return (
    <>
      <div className="tryagain">
        <img src={winners} alt="winner"/>
        <h3 className="results">Results</h3>
        <p>You got <span>{score}</span> correct answers</p>
        <p>
          {score != 0 && `Here is your reward : ${score} ${score > 1 ? " slices of pizzas" : "slice of pizza"} ${pizzas.repeat(score)}`} 
        </p>
        <p>
          {score > 5 && score <= 10 && "Good score . Why don't you try again, you'll get heigher score"}
        </p>
        <p>
          {score > 10 &&  score <= 15 && "Amaizing! You are a good canditate"}
        </p>
        <p>
          {score > 15 && score <250 && "Amaizing! You beat the best players"}
        </p>
        <p>
          {score > 250 && "Congratulations! You know about all of the contries"}
        </p>
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