import React from 'react'
import { Link } from 'react-router-dom'
import winners from "./../assets/winners.svg"
export default function ButtonNext ({ getCountries, counter, setCounter }) {

  function handleClick () {
    getCountries()
    setCounter(0)
  }
  return (
    <>
      <div className="tryagain">
        <img src={winners} alt="winner"/>
        <h3 className="results">Results</h3>
        <p>You got <span>{counter}</span> correct answers</p>
        <Link to="/">
          <button
            onClick={ handleClick }
          >
            Try again
          </button>
        </Link>
      </div>
    </>
  )
}