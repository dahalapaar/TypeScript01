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

//FUNCTIONS
let sayHi = () => {
  console.log("Hi Apaar")
}

let funcReturnsString = (): string => {
  console.log("hi")
  return "Apaar"
}

let multiple = (num: number): number => {
  return num + 2
}

let sum = (num: number): void => {
  // Performs something but does not return anything
}

let add = (num1: number, num2: number, num3?: number) => {
  return num1 + num2
}

add(5, 5)

// Works but not recommended
let func = (user: { username: string; age: number; phone?: string }) => {
  console.log(user.username)
}

// TYPE ALIASES
type UserType = {
  username: string
  age: number
  phone?: string
}

let betterFunc = (user: UserType) => {
  console.log(user.username)
}

type myFunc = (a: number, b: string) => void

let Write: myFunc = (num, str) => {
  console.log(num + "string")
}

type UserTypes2 = {
  username: string
  age: number
  phone?: string
  theme: "dark" | "light"
}

const userTheme: UserTypes2 = {
  username: "Apaar",
  age: 23,
  theme: "dark",
}

//INTERFACES
interface IUser {
  username: string
  email: string
  age: number
}

interface IEmployee extends IUser {
  department: string
}

const normalUser: IUser = {
  username: "Apaar",
  email: "test@gmail.com",
  age: 23,
}

const employee: IEmployee = {
  username: "Apaar",
  email: "test@gmail.com",
  age: 23,
  department: "IT",
}
