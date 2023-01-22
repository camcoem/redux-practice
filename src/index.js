import { compose, pipe } from "lodash/fp";

console.log("Redux Starter Project");
let username = " Harley ";

let message = "Hello " + username.trim() + " Good Morning!";

const trim = (name) => name.trim();
const generateMessage = (name) => `Hello ${name}, Good Morning!`;
const convertToUpper = (name) => name.toUpperCase();

// const result = generateMessage(convertToUpper(trim(username)));

// compose and pipe from loadash, in order to be able to symplify the nested functions
const newFunc = pipe(trim, convertToUpper, generateMessage);

//pipe: helps to read the different functions in order of use from left to right
const result = newFunc(username);
console.log(result);

// Currying functions: technique that allows us to take multiple arguments of functions and convert them into a function that has a simple argument
function multi(a) {
  return function (b) {
    return a * b;
  };
}

let result1 = multi(2)(5);
