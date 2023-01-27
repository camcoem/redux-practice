const employee = {
  name: "Harley",
  age: 22,
  company: { country: "Canada", city: "Toronto" },
};

const newEmployee = {
  ...employee,
  name: "Martin",
  company: { ...employee.company, city: "Calgary" },
};

console.log(employee);
console.log(newEmployee);
