import useDataFetcher from './useDataFetcher'

export default function useRandomNumber () {
  const { countriesName } = useDataFetcher()
  const randomNumber1 = Math.floor(Math.random() * countriesName.length)
  const randomNumber2 = Math.floor(Math.random() * countriesName.length)
  const randomNumber3 = Math.floor(Math.random() * countriesName.length)
  const randomNumber4 = Math.floor(Math.random() * countriesName.length)
  const randomNumberArr = [randomNumber1, randomNumber4, randomNumber2, randomNumber3]
  const sortedRandomNumber = randomNumberArr.sort((a, b) => b - a);

  return { randomNumber1, randomNumber2, randomNumber3, randomNumber4, sortedRandomNumber }
}