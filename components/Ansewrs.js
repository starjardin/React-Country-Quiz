import React, { useState } from 'react'
import ButtonNext from "./ButtonNext"

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

  function handleAnswerIsTrue (e) {
    if ((countriesName[randomNumber1].name) === (e.target.dataset.value)) {
      setIsAnswerCorrect(true)
      e.target.classList.add("correct")
    }
  }

  function handleAnswerIsNotTrue (e, buttons) {
    //Find the index of the true answer
    const indexOfTheRightAnswer = sortedRandomNumber.find(index => {
        return countriesName[index].name === countriesName[randomNumber1].name
      })
      const rightAnswer = countriesName[indexOfTheRightAnswer].name
      setIsAnswerCorrect(false)
      e.target.classList.add("incorrect")
      // find which button contains the right answer
      const buttonwithTheCorrectAnswer = buttons.find(button => button.dataset.value == rightAnswer)
      buttonwithTheCorrectAnswer.classList.add("correct")
  }

  function handleAnswers (e) {
    //set isQuestionAnswered to true when answered (click one of the answers)
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
  const letters = ["a", "b", "c", "d"]

  return (
    <>
      {sortedRandomNumber.map(indexArr => (
          <button 
            key={countriesName[indexArr].flag}
            className="btn answers"
            data-value={countriesName[indexArr].name}
            onClick={handleAnswers}
          >
            {countriesName[indexArr].name}
          </button>
      ))}
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