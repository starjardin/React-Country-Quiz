import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const SINGLE_COUNTRY_API = "https://restcountries.eu/rest/v2/capital/"

export default function Answers ({ arrSortedRandomNumber, countriesName, randomNumber1 }) {
  const [coutryCity, setCountryCity] = useState('')
  const { capital } = useParams()
  
  const fetchSingleCountry = async() => {
    const res = await fetch(SINGLE_COUNTRY_API + capital)
    const data = await res.json()
  }

  function handleClickToGetValue (e) {
    setCountryCity(e.target.dataset.value)
    fetchSingleCountry()
  }

  return (
    <>
      {arrSortedRandomNumber.map(map => (
        <Link 
          to={`/capital/${coutryCity}`} 
          key={countriesName[map].name}>
          <button 
            className="btn"
            data-value={countriesName[arrSortedRandomNumber[1]].name}
            onClick={handleClickToGetValue}
          >
            {countriesName[map].name}
          </button>
        </Link>
      ))}
    </>
  )
}