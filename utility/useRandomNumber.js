import React, { useContext } from 'react'
import { CountriesContext } from '../context/countriesContext'

export default function useRandomNumber () {
  const { countries } = useContext(CountriesContext)
  const randomNumber1 = Math.floor(Math.random() * countries.length)
  const randomNumber2 = Math.floor(Math.random() * countries.length)
  const randomNumber3 = Math.floor(Math.random() * countries.length)
  const randomNumber4 = Math.floor(Math.random() * countries.length)
  const randomNumberArr = [randomNumber1, randomNumber4, randomNumber2, randomNumber3]
  const sortedRandomNumber = randomNumberArr.sort((a, b) => b - a);

  return { randomNumber1, randomNumber2, randomNumber3, randomNumber4, sortedRandomNumber }
}