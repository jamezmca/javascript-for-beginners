// 1.0 Intro
// -- What is JavaScript and how does it work?
// -- Install VSCode
// -- Install NodeJS

// 2.0 Node commands in terminal
// -- Running a file
// -- Killing a file

// 3.0 Variables
// -- Hello world
// -- Console.log()
console.log("hello world")

// -- Variables
const mySentence = "hello world"

let numberOfEggs = 4 // let declaration allows us to reassign a new value, const does not!

numberOfEggs = 6

console.log(numberOfEggs + 6, mySentence)

// -- Code comments

// this is a comment
// -- Assignment by reference

let newNumberOfEggs = numberOfEggs

// 4.0 Data Types (init / read / write)
// -- Strings

let myString = "hello my name is james"

let extendedString = myString + '. And I like the color blue.'

console.log(myString[4])

// -- Numbers
const favoriteNumber = 83

// -- Arrays []
const groceryList = [
    'eggs',
    'bananans',
    'bread',
    83,
]

groceryList[1] = 'kiwi fruit'
console.log(groceryList[1])

// -- Objects {}
const dictionary = {
    ocean: 'A body of water between countries',



    
    sea: 'A different body of water',
    myFavoriteNumber: 83
}

const user = {
    name: 'James',
    password: '*******'
}

console.log(user.name, user['password'])

user.name = 'Elyas'

user['password'] = '****'

console.log(user)

// -- Null
const unknownNumber = null

// -- Undefined
const undefinedValue = undefined
console.log(unknownNumber, undefinedValue)

// -- Booleans (true/false)

const isJamesCool = true
let isCabbageDelicious = false

// 5.0 Recap

// 6.0 Logic and Operators
// -- Operators (+ - / %)
const sum = 3 + 9

const division = 12 / 5

const remainder = 12 % 5

const isEven = 12 % 2

console.log('remainder: ', remainder)

// -- Logical operators (|| &&)
// see below if else block example

// -- Type of

const randomNumber = 833

console.log(typeof randomNumber, typeof 'random string')

// 7.0 Conditional Statements
// -- If else
const x = 21
if (x > 10 || x < 20) {
    // Whatever code is written in here, is conditionally executed
    console.log('The value was greater than 10, or less than 20')
} else {
    console.log('The value was not greater than 10, or it was greater than 20')
}

// 8.0 Loops
// -- While loop
// let i = 0
// while (i < 20) {
//     console.log('THE VALUE OF I = ', i)
//     i = i + 1
// }

// -- For loop
const animals = ['duck', 'dog', 'cat', 'piggy']
console.log(animals)

for (let j = 0; j < animals.length; j++) {
    const currentAnimal = animals[j]
    if (currentAnimal == 'dog') {
        continue
    }

    if (currentAnimal === 'cat') {
        break
    }
    const stringToPrint = 'The animal at index: ' + j + ' And the value at that index is: ' + currentAnimal
    console.log(stringToPrint)
}
// for (let j = 0; j < 20; j++) {
//     // this is the repeatable code
//     console.log(j)
// }

// -- Continue & break

// 9.0 Functions
// -- Create a function
function printSquare(y, z) {
    // This function prints out the square of a number
    console.log(y * z)
}

printSquare(4, 6)
// -- Invoke a function
// -- Return

function addStrings(s1 = 'Hello', s2 = 'world') {
    const concatString = s1 + s2
    console.log(concatString)
    if (typeof s1 !== 'string' || typeof s2 !== 'string') {
        return

    }
    return concatString
}

const newString = addStrings('James', ' World')
addStrings('Hello ', 'James')
console.log('NEWSTRING: ', newString)
// -- Default inputs
// -- Arrow functions

const arrowFunction = (arg) => {
    console.log('ARG: ', arg)
}

arrowFunction('Hellow')