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

// problem of nesting is is called callback hell and it can be solved by promises

// promises

// promise states pending state-resolve state -reject state
// reject use when there is any error
function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   return reject("Error in promise");
      console.log("register ends");
      resolve();
    }, 1000);
  });
}

function sendWelcomeEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("send welcome email ends");
      resolve();
    }, 2000);
  });
}
function login() {
  setTimeout(() => {
    console.log("login ends");
  }, 1000);
}
function getUserData() {
  setTimeout(() => {
    console.log(" get user data ends");
  }, 1000);
}
function displayUserData() {
  setTimeout(() => {
    console.log("display user data ends");
  }, 1000);
}

register()
  .then(sendWelcomeEmail)
  .then(login)
  .catch((err) => {
    console.log(err);
  });

console.log("other application work");

// then hum jab use krte hai jab function hume promise deti hai
