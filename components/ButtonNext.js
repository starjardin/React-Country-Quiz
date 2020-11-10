import React from 'react'

export default function ButtonNext ({ getCountries, IsAnswerCorrect }) {
  console.log(IsAnswerCorrect);
  return (
    <button 
      onClick={getCountries}
      className="next"
    >
      Next
    </button>
  )
}