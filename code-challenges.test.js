// ASSESSMENT 2: Coding Practical Questions with Jest

// const { it } = require("node:test")

// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.


// a) Create a test with expect statements for each of the variables provided.


// TEST
describe("comboArray", () => {
    it("takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {
      const numbersArray1 = [6, 7, 8, 9, 10]
      // Expected output: [18, 21, 24, 27, 30]
      const numbersArray2 = [24, 27, 30, 33, 36]
      // Expected output: [72, 81, 90, 99, 108]
      expect(comboArray(numbersArray1)).toEqual([18, 21, 24, 27, 30])
      expect(comboArray(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
  })
  
  // Good failure
  // FAIL  ./code-challenges.test.js
  // comboArray
  //   ✕ takes in an array of numbers and returns an array with all the numbers multiplied by 3
  
  // ● comboArray › takes in an array of numbers and returns an array with all the numbers multiplied by 3
  
  //   ReferenceError: comboArray is not defined
  
  // b) Create the function that makes the test pass.
  // PSEUDOCODE:
    // declare a function called comboArray
    // input: array of numbers, parameter called array
    // output: an array with all the numbers multiplied by 3, same length as the original
    // Process
      // iterate across the values and multiply each value by 3 using the high order function map()
      // return the array created by the high order function
  
  // FUNCTION
  // const comboArray = ( array ) => {
  //   return array.map((value) => {
  //     return value * 3
  //   })
  // }
  
  // REFACTOR
  const comboArray = ( array ) => {
    return array.map(value =>value * 3)
  }
  
  // PASS
    // PASS  ./code-challenges.test.js
    // comboArray
    //   ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (2 ms)

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.


// TEST
describe("numbersDivided", () => {
    it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
        const object1 = { number: 15 }
        // Expected output: "15 is divisible by three"
        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"
        expect(numbersDivided(object1)).toEqual("15 is divisible by three")
        expect(numbersDivided(object2)).toEqual("0 is divisible by three")
        expect(numbersDivided(object3)).toEqual("-7 is not divisible by three")
    })
})
    // Good Failure:
    // FAIL  ./code-challenges.test.js
    // numbersDivided
    // ✕ takes a object as an argument and decides if the number inside it is evenly divisible by three or not
    // numbersDivided › takes a object as an argument and decides if the number inside it is evenly divisible by three or not
    // ReferenceError: numbersDivided is not defined

// b) Create the function that makes the test pass.

// PSEUDOCODE: 
    // input: object with a number
    // output: string that states with corresponding true/false statement from division calculation
    // Process: declare a function called numbersDivided using a conditional statement which outputs true statements as "is divisible by three" and all else as "is not divisible by three"

const numbersDivided = (object) => {
    if (object.number % 3 === 0) {
        return `${object.number} is divisible by three`
    } 
    else {
        return `${object.number} is not divisible by three`
    }
}

// PASS  ./code-challenges.test.js


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// TEST:
describe("wordArray", () => {
    it("takes in an array of words and returns an array with all the words capitalized", () => {
        expect(wordArray(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(wordArray(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})
    // GOOD FAIL
    // FAIL  ./code-challenges.test.js
    // wordArray
    // ✕ takes in an array of words and returns an array with all the words capitalized
    // wordArray › takes in an array of words and returns an array with all the words capitalized
    // ReferenceError: wordArray is not defined

// b) Create the function that makes the test pass.

// PSEUDOCODE:
    // declare a function that takes in an array and  outputs an array with first letters capitalized 
    // input: array of a string
    // output: new array of strings with capitalized first letters
    // Process: iterate the toUpperCase method across the indexed values of the array at the first letter position and combine the remaining values lowered cased.

    const wordArray = (array) => {
        return array.map(noun => noun.charAt(0).toUpperCase() + noun.slice(1).toLowerCase())
    }
   
    //  PASS  ./code-challenges.test.js
    // wordArray
    // ✓ takes in an array of words and returns an array with all the words capitalized

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

 // TEST:
describe("firstVowelIndex", () => {
    it("returns the index of the first vowel", () => {
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2
        expect(firstVowelIndex(vowelTester1)).toEqual(1)
        expect(firstVowelIndex(vowelTester2)).toEqual(0)
        expect(firstVowelIndex(vowelTester3)).toEqual(2)
    })
})
    //
    // GOOD FAIL:
    //  FAIL  ./code-challenges.test.js
    // firstVowelIndex
    // ✕ returns the index of the first vowel
    // ● firstVowelIndex › returns the index of the first vowel
    //   ReferenceError: firstVowelIndex is not defined

// b) Create the function that makes the test pass.

// PSEUDOCODE:
    // input: string
    // output: index/number
    // Process: use for loop to iterate through to find the first instance of a vowel and return the matching index from the iteration

const firstVowelIndex = (vowels) => {
    for (let i = 0; i <vowels.length; i++) {
        if (vowels.charAt(i).match(/[aeiou]/)) {
            return i
        }
    }
   }
//    PASS  ./code-challenges.test.js
//    comboArray
//      ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (1 ms)
//    numbersDivided
//      ✓ takes a object as an argument and decides if the number inside it is evenly divisible by three or not
//    wordArray
//      ✓ takes in an array of words and returns an array with all the words capitalized
//    firstVowelIndex
//      ✓ returns the index of the first vowel
 
//  Test Suites: 1 passed, 1 total
//  Tests:       4 passed, 4 total
//  Snapshots:   0 total
//  Time:        0.173 s, estimated 1 s
//  Ran all test suites.
//  ✨  Done in 0.85s.
//  ➜  week-2-assessment-TorinJacobs git:(week-2-torin-jacobs) ✗ 