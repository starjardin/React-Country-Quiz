import useAddSound from './useAddSound'

export default function useHandlegAnswers ({
  sortedRandomNumber,
  countriesName,
  randomNumber1,
  setIsAnswerCorrect 
}) {
  const { addTrueBuzzSound, addFalseBuzzSound } = useAddSound()

  function handleAnswerIsNotTrue (e, buttons) {
    addFalseBuzzSound()
    //Find the index of the true answer
    const indexOfTheRightAnswer = sortedRandomNumber.find(index => {
      return countriesName[index].name === countriesName[randomNumber1].name
    })
    const rightAnswer = countriesName[indexOfTheRightAnswer].name
    setIsAnswerCorrect(false)
    e.target.classList.add("incorrect")
    // find which button contains the right answer
    const buttonwithTheCorrectAnswer = buttons.find(button => {
      return button.dataset.value === rightAnswer
    })
    buttonwithTheCorrectAnswer.classList.add("correct")
  }

  function handleAnswerIsTrue (e) {
    addTrueBuzzSound()
    if ((countriesName[randomNumber1].name) === (e.target.dataset.value)) {
      setIsAnswerCorrect(true)
      e.target.classList.add("correct")
    }
  }

  return { handleAnswerIsNotTrue, handleAnswerIsTrue }
}