// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Hotel 2022"
console.log(cohort.split(""))

// a) Your answer:"H", "o", "t", "e", "l", "2", "0", "2", "2"
// b) Verify and explain: Split produces different results depending on the argument. "" takes the argument and splits it by each character.

// --------------------2) What will this log?

const greeter = (name) => {
  return `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student
// b) Verify and explain: My gut told me undefined and I should have gone with it! It's undefined because there was no "return" to execute the output.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: It's a function that takes the array of numbers and iterates a multiplier of 2 to each number then outputs an array of the same amount modified by whatever argument was made.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: This is similar to #3 except that filter returns a subset of an array, in this case the subset created by providing the opposite of numbers evenly divisible by two as indicated by the Boolean logical operator ! which produces opposites.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: [0] refers to the index of the array belonging to the language key. By following standard dot notation in calling upon object items, the log looks in the object myCodingSkills, then the key languages, followed by the index item [0] which is JavaScript.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: George
// b) Verify and explain: Learn { student: 'George', cohort: 'Hotel', year: 2022}. Since it's an object being called upon, the object and it's modified and default values are displayed. In this case, the only modified value is name which is now "George".
