const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// STEPS
// 1. Iterate array to get individual elements which are strings => sentenceElement
// 2. Convert the string element into an array => sentenceIntoArrayElements
// 3. Iterate over the newly created array(sentenceIntoArrayElements) using .map to gain access to individual elements which are the words
// 4. Change 1st letter of every word in the element to uppercase and store the results in a new array(updatedSentenceIntoArrayElements)
// 5. Convert the new array back to string and return it

const titleCased = () => {
  return tutorials.map(sentenceElement => {
    const sentenceIntoArrayElements = sentenceElement.split(" "); // Convert string to array
    const updatedSentenceIntoArrayElements = sentenceIntoArrayElements.map(wordsAsIndividualElement => {
      const updatedWord = wordsAsIndividualElement.replace(wordsAsIndividualElement.at(0), wordsAsIndividualElement.at(0).toUpperCase())// replace 1st character in the word with an uppercase one
      return updatedWord;
    })
    return updatedSentenceIntoArrayElements.join(" "); //Convert array to string
  })
}

console.log(titleCased());
