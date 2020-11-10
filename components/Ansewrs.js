import React, { useState } from 'react'

export default function Answers ({ arrOfSortedRandomNumber, countriesName, randomNumber1 }) {
  function handleClickToGetValue (e) {
    console.log(e.target.dataset.value)
    console.log(countriesName[randomNumber1].name)
    if ((countriesName[randomNumber1].name) === (e.target.dataset.value)) {
      console.log("Hey correct")
    } else {
      const indexOfTheRightAnswer = arrOfSortedRandomNumber.find(index => {
        return countriesName[index].name === countriesName[randomNumber1].name
      });
      const rightAnswer = countriesName[indexOfTheRightAnswer].name
      console.log(`The right answer is ${rightAnswer}`)
    }
  }

  return (
    <>
      {arrOfSortedRandomNumber.map(indexArr => (
          <button 
            key={countriesName[indexArr].name}
            className="btn"
            data-value={countriesName[indexArr].name}
            onClick={handleClickToGetValue}
          >
            {countriesName[indexArr].name}
          </button>
      ))}
    </>
  )
}