import React, { useContext } from 'react'
import { CountriesContext } from '../context/countriesContext'

export default function Question ({ 
  randomNumber1, 
 }) {
  const { countries, getCountries } = useContext(CountriesContext)
  const randomQuestionNumber = Math.floor(Math.random() * 2)

  if ((!countries[randomNumber1].capital) || 
      (!countries[randomNumber1].flag)
  ) {
    getCountries()
  }


  return (
    <>
      {randomQuestionNumber === 0  
        ? <h2 className="question">
            {countries[randomNumber1].capital && countries[randomNumber1].capital} is the capital of?
          </h2>
        : (<div>
            <img src={countries[randomNumber1].flag} className="flag"/>
            <h2 className="question">
              Which country does this flag belong to?
            </h2>
        </div>)
      }
    </>
  )
}