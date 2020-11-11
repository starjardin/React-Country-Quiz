import React, { useState, useEffect } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Answers from './components/Ansewrs'
import Header from './components/Header'
import ButtonTryAgain from "./components/ButtonTryAgain"
import Question from './components/Questions'
import useDataFetcher from './useDataFetcher'
import TopRightImage from './components/TopRightImage'

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

  // if () return null


  if (
    !countriesName.length ||
    randomNumber1 === randomNumber2 ||
    randomNumber1 === randomNumber3 ||
    randomNumber1 === randomNumber4 ||
    randomNumber2 === randomNumber3 ||
    randomNumber2 === randomNumber4 ||
    randomNumber3 === randomNumber4
    ) {
      console.log("Hey same index");
      return null
    }
  console.log(countriesName[randomNumber1].name);
  console.log(countriesName[randomNumber1].capital);

  const randomNumberArr = [randomNumber1, randomNumber4, randomNumber2, randomNumber3]
  const arrOfSortedRandomNumber = randomNumberArr.sort((a, b) => b - a);

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
                  arrOfSortedRandomNumber={arrOfSortedRandomNumber}
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