import React from 'react'

export default function Question ({ randomQuestionNumber ,randomNumber1, countriesName }) {
  return (
    <>
      {randomQuestionNumber === 0  
        ? <h2>{countriesName[randomNumber1].capital && countriesName[randomNumber1].capital} is the capital of?</h2>
        : (<div>
            <img src={countriesName[randomNumber1].flag} className="flag"/>
            <h2>Which country does this flag belong to?</h2>
        </div>)
      }
    </>
  )
}