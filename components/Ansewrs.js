import React, { useState } from 'react'
import ButtonNext from "./ButtonNext"
import useHandleAnswers from '../utility/useHandleAnswers'

export default function Answers ({ 
  sortedRandomNumber,
  countriesName,
  randomNumber1,
  getCountries,
  counter,
  setCounter 
}) {
  const [ isAnswerCorrect, setIsAnswerCorrect ] = useState(false)
  const [ isQuestionAnswered, setIsQuestionAnswered ] = useState(false)
  const { handleAnswerIsNotTrue, handleAnswerIsTrue } = useHandleAnswers({
    sortedRandomNumber,
    countriesName,
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

    if ((countriesName[randomNumber1].name) === (e.target.dataset.value)) {
      handleAnswerIsTrue(e)
    } else {
      handleAnswerIsNotTrue(e, buttons)
    }
  }

  return (
    <>
      {sortedRandomNumber.map(indexArr => (
          <button 
            key={countriesName[indexArr].flag}
            className={`btn answers`}
            data-value={countriesName[indexArr].name}
            onClick={handleAnswers}
          >
            {countriesName[indexArr].name}
          </button>
      ))}
      <audio></audio>
      {isQuestionAnswered && 
        <ButtonNext 
          getCountries={getCountries}
          isAnswerCorrect={isAnswerCorrect}
          setIsQuestionAnswered={setIsQuestionAnswered}
          counter={counter}
          setCounter={setCounter}
      />}
    </>
  )
}