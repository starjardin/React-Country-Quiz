import React, { useState, useContext } from 'react'
import ButtonNext from "./ButtonNext"
import useHandleAnswers from '../utility/useHandleAnswers'
import { CountriesContext } from '../context/countriesContext'

export default function Answers ({ 
  sortedRandomNumber,
  randomNumber1,
}) {
  const { countries, getCountries, score, setScore } = useContext(CountriesContext)
  const [ isAnswerCorrect, setIsAnswerCorrect ] = useState(false)
  const [ isQuestionAnswered, setIsQuestionAnswered ] = useState(false)
  const { handleAnswerIsNotTrue, handleAnswerIsTrue } = useHandleAnswers({
    sortedRandomNumber,
    countriesName: countries,
    randomNumber1,
    setIsAnswerCorrect 
  })

  function handleAnswers (e) {
    //set isQuestionAnswered to true when the question is answered (click one of the answers)
    setIsQuestionAnswered(true)
    const container = e.target.parentElement
    const buttons = Array.from(container.querySelectorAll(".btn"))
    //disable the buttons after clicking once so that the user can no have multi answers
    buttons.map(button => button.setAttribute("disabled", ""))

    if ((countries[randomNumber1].name) === (e.target.dataset.value)) {
      handleAnswerIsTrue(e)
    } else {
      handleAnswerIsNotTrue(e, buttons)
    }
  }

  return (
    <>
      {sortedRandomNumber.map(indexArr => (
          <button 
            key={countries[indexArr].flag}
            className={`btn answers`}
            data-value={countries[indexArr].name}
            onClick={handleAnswers}
          >
            {countries[indexArr].name}
          </button>
      ))}
      {isQuestionAnswered && 
        <ButtonNext 
          isAnswerCorrect={isAnswerCorrect}
          setIsQuestionAnswered={setIsQuestionAnswered}
      />}
    </>
  )
}