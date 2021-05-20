export const shuffleArray = (countries) => {
  // const { countries } = useContext(CountriesContext)
  let arr = []
  for (let i = 1; i <= countries.length; i++) {
    arr.push(i)
  }

  let result = []

  for (let i = 1; i <= countries.length; i++) {
    const random = Math.floor(Math.random() * (countries.length - i))
    result.push(arr[random])
    arr[random] = arr[countries.length - i]
  }
  const random1 = result[1]
  const random2 = result[3]
  const random3 = result[21]
  const random4 = result[11]
  return {
    sortedRandomNumber: [random1, random2, random3, random4],
    random1,
  }
}
