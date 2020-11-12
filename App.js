import React, { useContext, useState } from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import Answers from './components/Answers'
import Header from './components/Header'
import ButtonTryAgain from "./components/ButtonTryAgain"
import Question from './components/Questions'
import TopRightImage from './components/TopRightImage'
import useRandomNumber from './utility/useRandomNumber'
import { CountriesContext } from './context/countriesContext'
import ConfirmToQuit from './components/ConfirmToQuit'

export default function App () {
  const { countries } = useContext(CountriesContext)
  // const [ isUserQuiting, setIsUserQuiting] = useState(false)
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
  
  function quitTheGame () {
    // setIsUserQuiting(true)
  }


  return (
    <>
    <Router >
      <Header />
      <Switch>
        <div className="container">
          <TopRightImage />
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
          {/* <Route path="/quit"> */}
            {/* <ConfirmToQuit /> */}
          {/* </Route> */}
          {/* <Route path="/bye"> */}
            {/* <h1>Bye</h1> */}
          {/* </Route> */}
        </div>
      </Switch>
      {/* <Link to="/quit"> */}
        {/* {!isUserQuiting && <button onClick={quitTheGame}>Quit the game</button>} */}
      {/* </Link> */}
     </Router>
    </>
  )
}