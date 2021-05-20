import React, { useContext } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom'
import Answers from './components/Answers'
import Header from './components/Header'
import ButtonTryAgain from './components/ButtonTryAgain'
import Questions from './components/Questions'
import TopRightImage from './components/TopRightImage'
import { shuffleArray } from './utils/useRandomNumber'
import { CountriesContext } from './context/countriesContext'

export default function App() {
  const { countries } = useContext(CountriesContext)

  if (!countries.length) {
    return null
  }
  const { sortedRandomNumber, random1 } = shuffleArray(countries)
  return (
    <>
      <Header />
      <Router>
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <TopRightImage />
              <Questions randomNumber1={random1} />
              <Answers
                sortedRandomNumber={sortedRandomNumber}
                randomNumber1={random1}
              />
            </Route>
            <Route path='/tryAgain'>
              <ButtonTryAgain />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}
