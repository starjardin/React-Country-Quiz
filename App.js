import React, { useContext } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Answers from './components/Answers'
import Header from './components/Header'
import ButtonTryAgain from "./components/ButtonTryAgain"
import Questions from './components/Questions'
import TopRightImage from './components/TopRightImage'
import useRandomNumber from './utility/useRandomNumber'
import { CountriesContext } from './context/countriesContext'
import TriggerCloseButton from './components/TriggerCloseButton'

export default function App () {
  const { countries } = useContext(CountriesContext)
  //Import random numbers from useRandomNumber
  const { 
          randomNumber1,
          randomNumber2,
          randomNumber3,
          randomNumber4,
          sortedRandomNumber
        } = useRandomNumber()

    if (
        !countries.length ||
        randomNumber1 === randomNumber2 ||
        randomNumber1 === randomNumber3 ||
        randomNumber1 === randomNumber4 ||
        randomNumber2 === randomNumber3 ||
        randomNumber2 === randomNumber4 ||
        randomNumber3 === randomNumber4
    ) {
      return null
  }

  return (
    <>
      <Header />
      <Router >
        <div className="container">
          <TriggerCloseButton />
          <TopRightImage />
          <Switch>
            <Route exact path="/">
              <Questions 
                randomNumber1={randomNumber1}
              />
              <Answers 
                sortedRandomNumber={sortedRandomNumber}
                randomNumber1={randomNumber1}
              />
            </Route>
            <Route path="/tryAgain">
              <ButtonTryAgain />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}