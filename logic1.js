// problem 1
// js progran to find out which one is nereast to 100

// sample 12,30 out put is 30 is near to 100
// bruteforce method
const findNearNumber = (num1, num2) => {
  let valueNearCheck = 100;
  const checkNum1 = valueNearCheck - num1;
  const checkNum2 = valueNearCheck - num2;
  console.log(checkNum1, checkNum2);
  if (num1 === valueNearCheck) {
    return `${num1} is equal to ${valueNearCheck}`;
  }
  if (num2 === valueNearCheck) {
    return `${num2} is equal to ${valueNearCheck}`;
  }
  if (checkNum1 < checkNum2) {
    return `${num1} is near to ${valueNearCheck}`;
  } else {
    return `${num2} is near to ${valueNearCheck}`;
  }
};

const result = findNearNumber(100, 49);
console.log(result);

// problem 2 current date program

const getCurrentDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  console.log(`${day}-${month}-${year}`);
};
getCurrentDate();

// problem 3 program to reverse a string
// method 1
const reverseString = (str) => {
  const reverseStr = str.split("").reverse().join("");
  console.log(reverseStr);
};
reverseString("umesh");

// problem 4 new string create taking frist 3 char and
//  last 3 char of str and length will 3or more return origin str

const createNewStr = (str) => {
  if (str.length <= 3) {
    console.log(str);
  } else {
    const str1 = str.slice(0, 3);
    const str2 = str.slice(str.length - 3);
    const newStr = `${str1}${str2}`;
    console.log(newStr);
  }
};

createNewStr("RamumeshRam");

// problem 5 find how many duplicate numbers present in aaray
const sample = [2, 4, 5, 6, 2, 2, 2];
const findDuplicate = (arr) => {
  const duplicateArray = arr.filter((item, index) => {
    return arr.indexOf(item) !== index;
  });
  return duplicateArray;
};
const dupResult = findDuplicate(sample);
console.log(dupResult);

const num = [1, 2, 3, 4, 5, 3, 2, 9, 5, 4, 5];
var uni = {};
num.map((co) => {
  uni[co] = (uni[co] || 0) + 1;
});
console.log(uni);

// problem 6

const removeDuplicate = (givenArr) => {
  const remove = [...new Set(givenArr)];
  console.log(remove);
};
removeDuplicate(sample);
