export default function handleAnswerIsNotTrue ({e, buttons, sortedRandomNumber, countriesName, randomNumber1}) {
  function handleAnswerIsNotTrue () {
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
  return { handleAnswerIsNotTrue }
}