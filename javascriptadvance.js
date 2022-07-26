// topic 1 higher order function
// topic2 closures
// topic 3 hoisting
// eveny bubbling ,prevent default , stop propagation,stop immediate , event delegation , debouce and throtting
// css tricky question inline-id-classes- elment sudo element

// higher order

function sum(a, b) {
  return a + b;
}
function power(a, b) {
  return Math.pow(a, b);
}

// function expression
let addition = function (a, b) {
  return a + b;
};

const result = addition(4, 5);
// console.log(result);
// function ek object hota hai

addition.xyz = "umesh";

// console.log(addition.xyz);

// aise function jo pinput mai function lete hai ya output mai function return krte hai ya dono

// higher order function ex

function operation(a, b, fn) {
  let sum = fn(a, b);
  console.log(sum);
}

operation(14, 5, sum);
operation(2, 3, power);

// ex2
function outer() {
  function inner() {
    console.log("inner");
  }
  return inner;
}
outer()();

// use of higher order

function Employees(name, age, department) {
  this.name = name;
  this.age = age;
  this.department = department;
}

const employees = [
  new Employees("umesh", 25, "frontend Dev"),
  new Employees("Manish", 27, " Dev"),
  new Employees("Kartik", 25, "Full Dev"),
];
// requirement age filter
function filterByAge(emp, age) {
  let result = [];
  for (let i = 0; i < emp.length; i++) {
    if (emp[i].age == age) {
      result.push(emp[i]);
    }
  }
  console.log(result);
}
filterByAge(employees, 25);

// requirement department
function filterByDept(emp, dept) {
  let result = [];
  for (let i = 0; i < emp.length; i++) {
    if (emp[i].department == dept) {
      result.push(emp[i]);
    }
  }
  return result;
}
console.log(filterByDept(employees, "frontend Dev"));

// problem is code duplicate krna pad rha hai just condiiton change krne ke liye
// code ke repeat ko bachata hai
function filter(emp, fn) {
  let result = [];
  for (let i = 0; i < emp.length; i++) {
    if (fn(emp[i])) {
      result.push(emp[i]);
    }
  }
  return result;
}
console.log(
  filter(employees, (emp) => {
    return emp.age == 27;
  })
);

// closure

function outer() {
  let a = 10;
  var b = 20;
  let inner = function () {
    console.log(a, b);
  };
  return inner;
}
const resultOuter = outer();
resultOuter();

//
let value = 10;
setTimeout(() => {
  console.log(value);
}, 1000);
value = 12;
//jo hmare clousure hote hai wo variable ke refrences rakhte hai
