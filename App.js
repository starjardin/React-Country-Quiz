import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Answers from './components/Ansewrs'
import Header from './components/Header'
import ButtonTryAgain from "./components/ButtonTryAgain"
import Question from './components/Questions'
import useDataFetcher from './useDataFetcher'
import TopRightImage from './components/TopRightImage'
import useRandomNumber from './useRandomNumber'

export default function App () {
  const [counter, setCounter] = useState(0)
  const { countriesName, getCountries } = useDataFetcher()
  //Import random numbers from useRandomNumber
  const { 
          randomNumber1,
          randomNumber2,
          randomNumber3,
          randomNumber4,
          sortedRandomNumber
        } = useRandomNumber()

    if (
        !countriesName.length ||
        randomNumber1 === randomNumber2 ||
        randomNumber1 === randomNumber3 ||
        randomNumber1 === randomNumber4 ||
        randomNumber2 === randomNumber3 ||
        randomNumber2 === randomNumber4 ||
        randomNumber3 === randomNumber4
    ) {
      return null
    }

  console.log(countriesName[randomNumber1].name);
  console.log(countriesName[randomNumber1].capital);

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
                  countriesName={countriesName}
                  getCountries={getCountries}
                />
                <Answers 
                  getCountries={getCountries}
                  countriesName={countriesName}
                  sortedRandomNumber={sortedRandomNumber}
                  randomNumber1={randomNumber1}
                  counter={counter}
                  setCounter={setCounter}
                />
            </Route>
            <Route path="/tryAgain">
              <ButtonTryAgain
                getCountries={getCountries}
                counter={counter}
                setCounter={setCounter}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  )
}