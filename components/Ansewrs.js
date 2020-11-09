import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

const SINGLE_COUNTRY_API = "https://restcountries.eu/rest/v2/capital/"

export default function Answers ({ sortedRandomNumberArr, countriesName, randomNumber1 }) {

  const { capital } = useParams()
  
  const fetchSingleCountry = async() => {
    const res = await fetch(SINGLE_COUNTRY_API + capital)
    const data = await res.json()
    console.log(`name ${data[0].name} / capital ${data[0].capital}`);
    console.log(data);
  }

  function handleClickToGetValue (e) {
    console.log(e.target.dataset.value);
  }

  useEffect (() => {
    fetchSingleCountry()
  }, [])

  return (
    <>
      {sortedRandomNumberArr.map(map => (
        <Link 
          to={`/capital/${countriesName[randomNumber1].capital}`} 
          key={countriesName[map].name}>
          <button 
            className="btn"
            data-value={countriesName[sortedRandomNumberArr[1]].name}
            onClick={handleClickToGetValue}
          >
            {countriesName[map].name}
          </button>
        </Link>
      ))}
    </>
  )
}