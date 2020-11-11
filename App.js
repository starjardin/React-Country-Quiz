import React, { useState, useEffect } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Answers from './components/Ansewrs'
import Header from './components/Header'
import ButtonTryAgain from "./components/ButtonTryAgain"
import Question from './components/Questions'
import useDataFetcher from './useDataFetcher'

export default function App () {
  const [counter, setCounter] = useState(0)
  const { countriesName, getCountries } = useDataFetcher()

  useEffect (() => {
    getCountries()
  }, [])

  const randomNumber1 = Math.floor(Math.random() * countriesName.length)
  const randomNumber2 = Math.floor(Math.random() * countriesName.length)
  const randomNumber3 = Math.floor(Math.random() * countriesName.length)
  const randomNumber4 = Math.floor(Math.random() * countriesName.length)

  if (!countriesName.length) return null

  console.log(countriesName[randomNumber1].name);
  console.log(countriesName[randomNumber1].capital);

  if (
    randomNumber1 === randomNumber2 ||
    randomNumber1 === randomNumber3 ||
    randomNumber1 === randomNumber4 ||
    randomNumber2 === randomNumber3 ||
    randomNumber2 === randomNumber4 ||
    randomNumber3 === randomNumber4
    ) {
      getCountries()
    }

  const randomNumberArr = [randomNumber1, randomNumber4, randomNumber2, randomNumber3]
  const arrOfSortedRandomNumber = randomNumberArr.sort((a, b) => b - a);

  return (
    <>
      <Router >
        <Switch>
          <Route exact path="/">
            <Header />
            <div className="container">
              <Question 
                randomNumber1={randomNumber1}
                countriesName={countriesName}
                getCountries={getCountries}
              />
              {/* <h2>{countriesName[randomNumber1].capital} is the capital of?</h2> */}
              <Answers 
                getCountries={getCountries}
                countriesName={countriesName}
                arrOfSortedRandomNumber={arrOfSortedRandomNumber}
                randomNumber1={randomNumber1}
                counter={counter}
                setCounter={setCounter}
              />
            </div>
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
    </>
  )
}