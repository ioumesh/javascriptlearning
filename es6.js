// let const and var
var productName = "laptop";

var age = 18;

if (age >= 18) {
  var drive = true;
}
console.log(drive);
// code ko polute krta hai andar ke varaible bahar access ho jata hai
// but let and const aisa nhi hone deta block scope mai hi rehta hai
// var functional scope hota hai function ke andar hi use kr skte hai
// function login() {
//   var userName = "umesh";
//   var password = "123";
// }
// console.log(username);

// var
var productName = "mobile"; //complete overwrite kr dega upar ke variable ko

console.log(productName);

let product = "laptop";

// var is global and and agar wo function ke andar nhi hai to window object pe attach krta hai
// window.productName;

// library mai agr koi global hai to problem create kr skta hai

// hoisting se bacha deta hai let

// transpile krke babel ke thorugh mil jata hai const and let use kreyenge

//topic-2 arrow functions
// feature one liner
// arrow function ki apni context nhi hoti hai this keyword
const greet = () => {
  console.log("hi i am arrow function");
};
greet();

const shop = {
  purchase() {
    console.log(this);
  },
};

shop.purchase();

// 3)Template literal

// 4)enchanced object literals
// computed proprty keys
const keyName = "name";
const productData = {
  [keyName]: "mobile",
  price: "100",
};

console.log(productData);
// method defination shorthand
const buy = {
  purchase() {
    console.log("buy");
  },
};

buy.purchase();
// property shorthand

const accessToken = "abcd";
const refreshToken = "bhgjgkj";
// agar key and value same name ki hai to ise isi tarh se likh skte hai
const userToken = () => {
  accessToken, refreshToken;
};

// 5 destructing
const userData = {
  name: "umesh",
  age: "27",
};

const { name: fullName } = userData;
console.log(fullName);

// array destruct
const myData = ["umeshji", "27", "programmer"];

const [myName, ageData, dept] = myData;
console.log(ageData);

// default parameters

// spred operator
// copy arrays and objects clone

const languages = ["react", "c++", "javscript"];
const newLang = [...languages];
console.log(newLang);

const settings = {
  volume: 10,
  brighness: 80,
};

const newSetting = settings;
console.log(newSetting); //ye kaam krega par isme ek problem hai ye copy ho rha hai by reference bs point kr rha hai same address pe
newSetting.volume = 20;
console.log(settings.volume);
// refrence type hai dono ka address same hai to change kr dega

// real life mai hume clone krna hota hai jiska address alg ho
// so using spred we can copy

const mySettings = { ...settings, contrast: 50 };
console.log(mySettings);
// ise bolte hai shallow  copy

// rest operator
// rest use hota hai function ke sath mai
const addItems = (...items) => {
  console.log(items);
  //   console.log(a + b + c);
};
addItems(1, 2, 3);
// for of loop

// promises
// network request ke liye use krte hai
// find
// findindex
// set
const uniqueNumbers = new Set();
uniqueNumbers.add(3);
uniqueNumbers.add(5);
uniqueNumbers.add(8);
uniqueNumbers.add(3);
console.log(uniqueNumbers.has(5));

// map hashtable ka implementation hai
// key and value pair store kr skte ho
const urls = new Map();
urls.set("dev", "dev.umesh.com");
console.log(urls);
// look up ke liye use krte hai
// time complexity  0(1) constant type

const urlObj = {
  development: "dev.example.com", //jis order mai hum data dalte hai usi order mai milega aisa gurantee nhi hai
  production: "dev.umesh.com",
};
console.log(urlObj.development);
// order
// size

// classes

function Person(value) {
  this.name = value;
}
const umesh = new Person("umesh");
console.log(umesh);
