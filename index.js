import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { CountriesContextProvider } from './context/countriesContext'

ReactDOM.render(
  <CountriesContextProvider>
      <App />
  </CountriesContextProvider>,
  document.querySelector('#root')
)
