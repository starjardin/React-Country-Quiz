import React from 'react'

export default function Question ({ 
  randomNumber1, 
  countriesName, 
  getCountries
 }) {
  const randomQuestionNumber = Math.floor(Math.random() * 2)

  if ((!countriesName[randomNumber1].capital) || 
      (!countriesName[randomNumber1].flag)
  ) {
    getCountries()
  }


  return (
    <>
      {randomQuestionNumber === 0  
        ? <h2 className="question">
            {countriesName[randomNumber1].capital && countriesName[randomNumber1].capital} is the capital of?
          </h2>
        : (<div>
            <img src={countriesName[randomNumber1].flag} className="flag"/>
            <h2 className="question">
              Which country does this flag belong to?
            </h2>
        </div>)
      }
    </>
  )
}