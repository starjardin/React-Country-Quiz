import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonNext ({ getCountries, counter }) {
  return (
    <>
      <div className="tryagain">
        <img src="./../assets/winners.svg" alt="winner"/>
        <h3>Results</h3>
        <p>You got {counter} correct answers</p>
        <Link to="/">
          <button
            onClick={ getCountries }
          >
            Try again
          </button>
        </Link>
      </div>
    </>
  )
}