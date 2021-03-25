import React, { useState, useEffect } from 'react'
const CountriesContext = React.createContext();

const API_KEY = "https://restcountries.eu/rest/v2/all"

function CountriesContextProvider (props) {
  const [countries, setCountriesName] = useState([])
  const [score, setScore] = useState(0)

  const getCountries = async () => {
    const res = await fetch(API_KEY)
    const data = await res.json()
    setCountriesName(data)
  }

  useEffect (() => {
    getCountries()
  }, [])

  return (
    <CountriesContext.Provider 
      value={{
        countries, 
        getCountries,
        score,
        setScore,
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  )
}

export { CountriesContextProvider , CountriesContext };