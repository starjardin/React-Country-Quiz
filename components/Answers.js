import React, { useState, useContext, useRef } from 'react'
import styled from 'styled-components'

import ButtonNext from "./ButtonNext"
import propTypes from 'prop-types'
import useHandleAnswers from '../utility/useHandleAnswers'
import { CountriesContext } from '../context/countriesContext'

const ButtonStyle = styled.div`
  .correct {
    // background-color : blue;
  }
`

export default function Answers ({ sortedRandomNumber, randomNumber1 }) {
  const { countries } = useContext(CountriesContext)
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false)
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false)
  const [correctCountry, setCorrectCountry] = useState({})
  const { handleAnswerIsNotTrue, handleAnswerIsTrue } = useHandleAnswers({
    sortedRandomNumber,
    countriesName: countries,
    randomNumber1,
    setIsAnswerCorrect 
  })

  function handleAnswers (e) {
    //set isQuestionAnswered to true when the question is answered (click one of the answers)
    setIsQuestionAnswered(true)
    // const container = e.target.parentElement
    // const buttons = Array.from(container.querySelectorAll(".btn"))
    //disable the buttons after clicking once so that the user can no have multi answers
    // buttons.map(button => button.setAttribute("disabled", ""))

    if ((countries[randomNumber1].name) === (e.target.dataset.value)) {
      // handleAnswerIsTrue(e)
    } else {
      setCorrectCountry(countries.find(country => country.name === countries[randomNumber1].name))
      if (correctCountry) {
        setCorrectAnswer(true)
      }
    }
  }

  return (
    <>
      <ButtonStyle>
        {sortedRandomNumber.map((indexArr, index) => (
          <ButtonElement
            key={index}
            countries={countries}
            indexArr={indexArr}
            correctCountry={correctCountry}
            randomNumber1={randomNumber1}
          />
        ))}
      </ButtonStyle>
      {isQuestionAnswered && 
        <ButtonNext 
          isAnswerCorrect={isAnswerCorrect}
          setIsQuestionAnswered={setIsQuestionAnswered}
      />}
    </>
  )
}

function ButtonElement({ countries, indexArr, randomNumber1 }) {
  let classNames = `btn answers`
  let style = { backgroundColor: "blue" }
  
  function handleAnswers(e, value) {
    if (e.target.dataset.value.toLowerCase() === countries[randomNumber1].name.toLowerCase()) {
      e.target.classList.add("correct")
    } else {
      e.target.classList.add("incorrect")
      console.log(value);
    }
  }

  return (
    <button 
      key={countries[indexArr].flag}
      className={classNames}
      data-value={countries[indexArr].name}
      onClick={(e) => {
        const country = countries.find(country => country.name === countries[randomNumber1].name)
        console.log(country);
      }}
    >
      {countries[indexArr].name}
    </button>
  )
}

Answers.propTypes = {
  countries : propTypes.shape({
    name : propTypes.string.isRequired,
    capital : propTypes.string,
    flag : propTypes
  }),
  score : propTypes.number,
  getCountries : propTypes.func,
}