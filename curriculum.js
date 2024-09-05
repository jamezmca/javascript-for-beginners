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
// -- Undefined
// -- Booleans (true/false)

// 5.0 Recap

// 6.0 Logic and Operators
// -- Operators (+ - / %)
// -- Logical operators (|| &&)
// -- Type of

// 7.0 Conditional Statements
// -- If else

// 8.0 Loops
// -- While loop
// -- For loop
// -- Continue & break

// 9.0 Functions
// -- Create a function
// -- Invoke a function
// -- Return
// -- Default inputs
// -- Arrow functions