//  Topic 8 callback and promises
// scenario
// 1)register
// 2)send welcome email
// 3)login
// 4)get user Data,
// 5)display user data
// function waitForThreeSeconds() {
//   let ms = 3000 + new Date().getTime();
//   while (new Date() < ms) {}
// }
function register(callBack) {
  setTimeout(() => {
    console.log("register ends");
    callBack();
  }, 1000);
}

function sendWelcomeEmail(callBack) {
  setTimeout(() => {
    console.log("send welcome email ends");
    callBack();
  }, 2000);
}
function login(callBack) {
  setTimeout(() => {
    console.log("login ends");
    callBack();
  }, 1000);
}
function getUserData(callBack) {
  setTimeout(() => {
    console.log(" get user data ends");
    callBack();
  }, 1000);
}
function displayUserData() {
  setTimeout(() => {
    console.log("display user data ends");
  }, 1000);
}

register(() => {
  sendWelcomeEmail(() => {
    login(() => {
      getUserData(() => {
        displayUserData();
      }); //ye jo functions pass kiye yhi hai call back
    });
  });
});

console.log("other application work");

// problem abhi jo kaam ho rha hai syncronous wo block ho jayega sako run hone ke bad baki kaa kaam ho rha hai
// to isi problem ko solve krne ke liye hum asyncronous java script use hoti hai

// abhi bhi problem hai hume exact time nhi pata ye aur bhi time le skta hai
// humari requirement hai  jabtak register end nhi hota hai tab tk send email na ho to ise solve krne ke liye hum call backs use krte hai

// higher order function aisi function hoti hai jo dusare function ko as a parameter le skti hai

// problem of nesting is is called callback hell and it can be solved by promises

// promises
