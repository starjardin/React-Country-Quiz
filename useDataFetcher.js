import { useState } from 'react'

const API_KEY = "https://restcountries.eu/rest/v2/all"
export default function useDataFetcher () {
    const [countriesName, setCountriesName] = useState([])

    const getCountries = async () => {
    const res = await fetch(API_KEY)
    const data = await res.json()
    setCountriesName(data)
  }
  
  return { countriesName, getCountries }
}