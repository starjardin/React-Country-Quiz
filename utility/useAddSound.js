import buzzSound from "../assets/hihat.wav"

export default function useAddSound () {
  function addBuzzSound () {
    let buzzSoundFroWrongAnswer = new Audio(buzzSound)
    buzzSoundFroWrongAnswer.play()
  }
  return { addBuzzSound }
}