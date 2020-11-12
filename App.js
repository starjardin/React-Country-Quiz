import React, { useContext } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Answers from './components/Ansewrs'
import Header from './components/Header'
import ButtonTryAgain from "./components/ButtonTryAgain"
import Question from './components/Questions'
import TopRightImage from './components/TopRightImage'
import useRandomNumber from './utility/useRandomNumber'
import { CountriesContext } from './context/countriesContext'

export default function App () {
  const { countries } = useContext(CountriesContext)
  // //Import random numbers from useRandomNumber
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
      <div className="container">
        <TopRightImage />
        <Router >
          <Switch>
            <Route exact path="/">
              <Question 
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
        </Router>
      </div>
    </>
  )
}