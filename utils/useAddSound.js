import falseBuzzSound from "../assets/buzzer-false.mp3"
import trueBuzzSound from "../assets/buzzer-true.mp3"

export default function useAddSound () {
  function addFalseBuzzSound () {
    let buzzSoundFroWrongAnswer = new Audio(falseBuzzSound)
    buzzSoundFroWrongAnswer.play()
  }

  function addTrueBuzzSound () {
    let buzzSoundFromCorrectAnswer = new Audio(trueBuzzSound)
    buzzSoundFromCorrectAnswer.play()
  }
  return { addTrueBuzzSound, addFalseBuzzSound }
}