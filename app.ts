// STRING
let firstName: string = "Apaar"

//NUMBER
let age: number = 23

// BOOLEAN
let isHappy: boolean
isHappy = true

// OPTIONAL (EITHER STRING OR NUMBER)
let test: string | number
test = 10

// ARRAY OF STRINGS
let testStringArray: string[]
testStringArray = ["a", "b", "c"]

// ARRAY OF NUMBERS
let testNumberArray: number[]
testNumberArray = [1, 2, 3]

// OPTIONAL (EITHER STRING OR NUMBER OF ARRAYS)
let testStringOrNumberArray: (string | number)[]
testStringOrNumberArray = [1, "Apaar", "Dahal", 23]

//OBJECTS
let user: {
  userName: string
  age: number
  isHappy: boolean
}

user = {
  userName: "Apaar",
  age: 23,
  isHappy: true,
}

//OPTIONAL
let userInfo: {
  userName: string
  age: number
  phone?: string // Here phone is optional.
  isHappy: boolean
}
