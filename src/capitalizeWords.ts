/**
 * Converts all words in a string to Title Case
 */

export const capitalizeWords = (text: string): string => {
  //
  // Split the text on space to get individual words
  // Loop through the words in the list
  // For each word, capitalise the first letter and add to the string to return
  const words = text.split(' ')
  return words.reduce((acc, word) => {
    const firstLetterCapitalised = word[0].toUpperCase()
    if (acc === '') {
      acc += firstLetterCapitalised + word.slice(1)
    } else {
      acc += ' ' + firstLetterCapitalised + word.slice(1)
    }
    return acc
  }, '')
}
