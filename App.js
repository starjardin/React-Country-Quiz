import React, { useState, useEffect } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Answers from './components/Ansewrs'
const API_KEY = "https://restcountries.eu/rest/v2/all"
export default function App () {
  const [countriesName, setCountriesName] = useState([])

  const getCountries = async () => {
    const res = await fetch(API_KEY)
    const data = await res.json()
    setCountriesName(data)
  }
  
  useEffect (() => {
    getCountries()
  }, [])

  const randomNumber1 = Math.floor(Math.random() * countriesName.length)
  const randomNumber2 = Math.floor(Math.random() * countriesName.length)
  const randomNumber3 = Math.floor(Math.random() * countriesName.length)
  const randomNumber4 = Math.floor(Math.random() * countriesName.length)
  if (!countriesName.length) return null
  console.log(countriesName[randomNumber1].name);
  console.log(countriesName[randomNumber1].capital);

  const randomNumberArr = [randomNumber1, randomNumber4, randomNumber2, randomNumber3]
  const arrOfSortedRandomNumber = randomNumberArr.sort((a, b) => b - a);

  return (
    <>
      <h2>{countriesName[randomNumber1].capital} is the capital of?</h2>
      <Answers 
        countriesName={countriesName}
        arrOfSortedRandomNumber={arrOfSortedRandomNumber}
        randomNumber1={randomNumber1}
      />
    </>
  )
}

/*
TODO
  *fetch the api
  *create random questions
  || how to create random questions
    1 may be from the country city
  **
    * smt (here is the capital) 
    * check if the country is represents the the capital normaly
    1  //if it is true // then take them to the next questions
    2  //if it is false // take them to try again
*/