import React, { useState, useContext, useRef } from 'react'

import useAddSound from '../utils/useAddSound'
import ButtonNext from './ButtonNext'
import propTypes from 'prop-types'
import { CountriesContext } from '../context/countriesContext'
import { shuffleArray } from '../utils/useRandomNumber'

export default function Answers({ sortedRandomNumber, randomNumber1 }) {
  const { addTrueBuzzSound, addFalseBuzzSound } = useAddSound()
  let refContainer = useRef(null)
  const { countries } = useContext(CountriesContext)
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false)
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false)
  shuffleArray(countries.length, countries.length)

  const questionCountryName = countries[randomNumber1].name.toLowerCase().trim()

  function handleAnswers(e) {
    const targetValue = e.target.dataset.value.toLowerCase().trim()
    setIsQuestionAnswered(true)
    if (questionCountryName === targetValue) {
      e.target.classList.add('correct')
      addTrueBuzzSound()
      setIsAnswerCorrect(true)
    } else {
      e.target.classList.add('incorrect')
      refContainer.current.classList.add('correct')
      setIsAnswerCorrect(false)
      addFalseBuzzSound()
    }
  }

  return (
    <>
      {sortedRandomNumber.map((indexArr, index) => (
        <button
          key={index}
          className='btn answers'
          data-value={countries[indexArr].name}
          ref={
            countries[indexArr].name.toLowerCase().trim() ===
            questionCountryName
              ? refContainer
              : null
          }
          onClick={handleAnswers}
          disabled={isQuestionAnswered}>
          {countries[indexArr].name}
        </button>
      ))}
      {isQuestionAnswered && (
        <ButtonNext
          refContainer={refContainer}
          isAnswerCorrect={isAnswerCorrect}
          setIsQuestionAnswered={setIsQuestionAnswered}
        />
      )}
    </>
  )
}

Answers.propTypes = {
  countries: propTypes.shape({
    name: propTypes.string.isRequired,
    capital: propTypes.string,
    flag: propTypes,
  }),
  score: propTypes.number,
  getCountries: propTypes.func,
}
