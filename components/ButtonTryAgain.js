import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonNext ({ getCountries }) {
  return (
    <>
      <div className="tryagain">
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