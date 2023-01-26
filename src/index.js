import { compose, pipe } from "lodash/fp";

console.log("Redux Starter Project");
let username = " Harley ";

let message = "Hello " + username.trim() + " Good Morning!";

const trim = (name) => name.trim();
const generateMessage = (message) => (name) => `Hello ${name}, ${message}!`;
const convertToUpper = (name) => name.toUpperCase();

// const result = generateMessage(convertToUpper(trim(username)));

// compose and pipe from loadash, in order to be able to symplify the nested functions
const newFunc = pipe(trim, convertToUpper, generateMessage("Have a nice day!"));

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
const multiple = (a) => (b) => a * b; //same as above in arrow function syntax

//Immutability in OBJECTS

//Object.assign() Method
const employee = {
  name: "Harley",
  age: 22,
  company: { country: "Canada", city: "Toronto" },
};
// const newEmployee = Object.assign({}, employee, { name: "Martin" });

// Object.assign(predefined obj we want to target, Object to update, objectpassing values to update or add)

// const newEmployee = { ...employee, name: "Martin" };
//using spread operator to copy an object, CAREFUL it stores both company objects on the same address in the memory = shallow copy issue. Only top levbel Objects will get a deep copied.

// newEmployee.company.city = "Calgary";
//in this case both employee and newEmployee Object now have the new city reassigned

//-> what to do? spread operators in every Object
const newEmployee = {
  ...employee,
  name: "Martin",
  company: { ...employee.company, city: "Calgary" },
};

console.log(employee);
console.log(newEmployee);

//immer library add
