// problem 6 convert obj into arary and obj to array

let obj = { id: "1", name: "umesh" };

const convertedArr = Object.entries(obj);
console.log(convertedArr);

const convertedObj = { ...convertedArr };
console.log(convertedObj);

// problem 7
// json file calculate avergaeincome of all the employee
// reduce function used for calculations of average , total
const employee = [
  {
    firstName: "umesh",
    lastName: "kumar",
    dept: "software Engineer",
    salary: 100000,
  },
  {
    firstName: "rohit",
    lastName: "kumar",
    dept: "aso",
    salary: 70000,
  },
  {
    firstName: "sanjiv",
    lastName: "kumar",
    dept: "medical transcription",
    salary: 55000,
  },
  {
    firstName: "amardeep",
    lastName: "verma",
    dept: "teacher",
    salary: 10000,
  },
  {
    firstName: "pankaj",
    lastName: "kumar",
    dept: "teacher",
    salary: 8000,
  },
];

const averageSalary =
  employee.reduce((prev, cur) => prev + cur.salary, 0) / employee.length;
console.log(`${averageSalary}Rs`);

// problem8 show list of emp full name

const fullName = employee.map((item) => `${item.firstName}-${item.lastName}`);
console.log(fullName);

// problem 9 how many employee in each dept
const dept = employee.reduce(
  (prev, cur) => ({
    ...prev,
    [cur.dept]: prev[cur.dept] + 1 || 1,
  }),
  {}
);
console.log(dept);

// problem 10 javascript prog   that return a str in alphabatical order

const giverStr = "dcba";

const alphabaticalStr = (str) => {
  const alpha = str
    .split("")
    .sort((a, b) => (a > b ? 1 : -1))
    .join("");
  console.log(alpha);
};
alphabaticalStr(giverStr);
