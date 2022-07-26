//Topic 1 object and array of objects
const laptop = {
  modal: "lenovo",
  color: "white",
};
const laptopData = [
  {
    modal: "lenovo",
    color: "black",
  },
  {
    modal: "hp",
    color: "silver",
  },
];
console.log(laptop.modal);
console.log(laptopData.map((item) => item.modal));

//Topic 2 variables let const and var
var content = "umesh is best programmer"; //global scope
console.log(content);
// let
let content2 = "umesh is best frontend developer";
console.log(content2);
content2 = "hey";
console.log(content2);
// const
const data = "umesh is best";
console.log(data);
// data = "hey";
// console.log(data);

// scope
// var is functional scope
// let and const  is block scope

if (true) {
  let age = "27";
  console.log(age);
}
// console.log(age); can not access as it is block scope
if (true) {
  var age = "28";
}
console.log(age);

//Topic 3 hoisting
console.log(greeting);

var greeting = "Hi hoisting";
// let greeting = "hi hoisting";
//result  undefined a special type of datatype
// line by line mai var keyword mai usme js undefined assign kr deti hai and run time pe tabhi use undefined milega syntax check mai
// aur let ka feature hai hoisting hoti hai lekin variable special zone mai hota hai temporal dead  zone to phle intialize krna hai fir use
//  use const to avoid mutation

const num = 40;
console.log(num);
// situation run time pe num mai change krna hai to let use krlo

// Topic 4 data types
//  javascipt is loosely typed language hum kisi hi type ka data store kr skte hai variable mai bina koi datatype likhe
// type converstion dyanamic hota hai

// 9 main types
// primitive data type store only single value
const number = 20;
const str = "umesh";
let undefinedData;
const nullData = null;
const truth = true;
console.log(Number.MAX_SAFE_INTEGER); //safe operation limits  2**53-1

console.log(number, str, undefinedData, nullData, truth);
// structural type
// 1 Objects---
//  Funtion(non -data structure, it is callable)

// 2 Arrays and it can mutate with const collection of value kisi bhi type ka datatype store kr skte hai

// 3)Maps mai key hum objects bhi de skte hai
// 4)Set -unique value store kr skte hai collection mai se duplicate value nikalni hai to
// 5)Date inbuild data type

// structural root
// 1)null data type empty vlaue

// 5 Operators most of the bugs operators ki wjh se hi aate hai
// 10 type ke operator hot hai
// 1)aasignment
let x = 10; // ye jo equal sign hai isi ki assigment operator bolte hai
let y; //right operand pe depend hota hai
y = x;
console.log(y);
// compound operator bhi aate hai
let a = 10;
let b = 20;
// a = a + b;
a += b;
console.log(a);

// 2)comparison
// ==,===,!= !==,> ,<, >=,<=
// order of operations Operator precedence
const url =
  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence";
// 3)airthmatic
// +,-,/,*,**

// 4)bitwise

// 5)logical
// && and || and ! not chije jo ulta krt deta hai

// 6)string operators
// 7)conditional operators

// ternary operator

// 8)comma
// 9)unary
// 10)relational

// Topic 5 Arrays
// array is object in javascript
const userData = ["umesh", "27yr", "programmer"];
console.log(userData, "data");
console.log(userData.length, "length");

// item get
console.log(userData[1]);

//Push  method add element to last
userData.push("best");
console.log(userData);
//  unshift add first

userData.unshift("hey");
console.log(userData);

// last pop
userData.pop();
console.log(userData);

// first remove shift
userData.shift();
console.log(userData);

// looping in array

// for loop
for (let i = 0; i <= 4; i++) {
  console.log("*");
}

const programmer = [
  {
    name: "umesh",
    payment: "100000",
  },
  {
    name: "codersgyan",
    payment: "1000000",
  },
  {
    name: "kartik",
    payment: "200000",
  },
];

// for (let i = 0; i < programmer.length; i++) {
//   programmer[i] = programmer[i].payment - 10;
// }
// console.log(programmer);

// foreach loop better version of for loop do not return anything but map return array

// programmer.forEach((item) => {
//   console.log(item);
// });

// for of loop

for (program of programmer) {
  console.log(program);
}

// filter element of array return array
const student = [
  {
    name: "suraj",
    marks: 60,
  },
  {
    name: "amardeep",
    marks: 45,
  },
  {
    name: "rohit",
    marks: 30,
  },
  {
    name: "pankaj",
    marks: 44,
  },
];

const lessMarkList = student.filter((item) => item.marks < 45);
console.log(lessMarkList);

//map
const profile = [
  {
    fName: "umesh",
    lName: "kumar",
  },
  {
    fName: "pankaj",
    lName: "kumar",
  },
];

const fullName = profile.map((item) => {
  return { fullName: `${item.fName} ${item.lName}` };
});
console.log(fullName);
// reduce
const movies = [
  {
    name: "shamshera",
    budget: 150,
  },
  {
    name: "matrix",
    budget: 300,
  },
  {
    name: "jjj",
    budget: 100,
  },
];

// isme hu bahar declare kr rhe hai and fir access kr rhe hai isse better hai reduce
let total = 0;
const totalBudget = movies.forEach((item) => {
  return (total = total + item.budget);
});
console.log(total);
// reduce accept funtion and intial value
const totalBudgetMovie = movies.reduce((total, movie) => {
  return (total = total + movie.budget);
}, 0);
console.log(totalBudgetMovie);
// every

// index of index return krta hai
const admins = [2, 1, 5];
const user = {
  name: "umesh",
  id: 5,
};

const indexData = admins.indexOf(user.id);
console.log(indexData);

const numbers = [1, 2, 5, 7, 9, 1, 3, 5];

const removeDuplicate = numbers.filter((item, index) => {
  return numbers.indexOf(item) === index;
});
console.log(removeDuplicate);

const setDup = [...new Set(numbers)];
console.log(setDup);

// includes
console.log(admins.includes(user.id));
// find

const users = [
  {
    name: "xyz",
    id: "1",
  },
  {
    name: "umesh",
    id: "3",
  },
  {
    name: "kumar",
    id: "4",
  },
];

const myUser = users.find((user) => {
  if (user.id === "3") {
    return true;
  }
});
console.log(myUser);

// sort orignal array modify
const names = ["john", "umesh", "kumar", "don ", "ram"];
names.sort();
console.log(names);

// splice
const namesData = ["john", "umesh", "kumar", "don ", "ram"];
namesData.splice(2, 1);
console.log(namesData);

// Note :

// Topic 6 Functions
// used for repeating task
// code of group function
// invovke and call , reuse
// create-code-invoke
function firstFunction() {
  console.log("hi i am function");
}

firstFunction();

// we can recieve data-params in function as argument

function login(userName, password) {
  if (userName === "umesh" && password === "123") {
    console.log(`${userName} logged in`);
  } else {
    console.log("incorrect details");
  }
}
login("umesh", "123");
// note params ka data agar function mai pass nhi krte hai to wo undefined dega

// upcase convert return result
function upperCaseStr(str) {
  const upperCase = str.toUpperCase();
  return upperCase;
}

const result = upperCaseStr("umesh");
console.log(result);

// note agar functions se aap return nhi kr rhe ho to function undefined deta hai
//  or return ke same line mai value likhni hai by default return hota hai function ka

// default parameters
function calculateArea(width, height) {
  height = height === undefined ? 1 : height;
  const area = width * height;
  return area;
}

const areaResult = calculateArea(10);
console.log(areaResult);

// VARIABLE SCOPE
// function ke andar hum koi bhi variable bnate hai wo usi function ke liye avillable rehta hai
// bahar se access nhi kr skte, lekin agar variable bahar hai to console andar acess ho jayega
// variable ko private bnane ke liye
const fileName = "xyz.pdf";
function download() {
  console.log(fileName);
}
download();

// function declaration and expression
// declaration
function declaration() {}

// expression
const loginExpression = function () {
  // anonomous function
  console.log("logged in");
};
loginExpression();
// we can pass funcitons also as a parameter callback
// callback

// normal
function formatText(text) {
  return text.toUpperCase();
}
const formatedText = formatText("umesh");
console.log(formatedText);

// callback function

const formatedWord = (text, formatCb) => {
  return typeof formatCb === "function" ? formatCb(text) : text.toUpperCase();
};

const formatedWordResult = formatedWord("umesh", function (text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
});
console.log(formatedWordResult);

// IIFE (immediately invoked function expression)

(function printName() {
  console.log("hey i am selected in ofbusiness");
})();

// note:function ka naam bhi hta skte hai fir bhi chalega

// arrow functions es6 2015
// feature this context nhi hota

// good practices
// 1)Naming of function should be good camelCasing
// 2)one functtion -one action
// 3)function name should be descriptive

// Topic 7  asychronous javascript
// kisi bhi code ko agar hum async bnate hai to wo code jab bhi run hota hai to wo baki code ko block nhi krega baki ka code jo
// asyc nh hai wo run hota rhega

console.log("hello"); //syncronous code
setTimeout(() => {
  console.log("i am async");
}, 3000); //browser api asyc bnane ke liye use hota hai
console.log("javascript");

// ab ye kaam kaise krta hai iske piche hai event loop loupe website
console.log("start"); //syncronous code
setTimeout(() => {
  console.log("i am async");
}, 0); //browser api asyc bnane ke liye use hota hai web api pe jayega hi chahe time 0 ho
console.log("end");

//
console.log("start sync");
function waitForSevenSec() {
  let ms = 7000 + new Date().getTime();
  while (new Date() < ms) {}
}
setTimeout(() => {
  console.log("sat second ke bad ayega");
}, 2000);
waitForSevenSec();
