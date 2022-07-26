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
      console.log("register ends");
      resolve("success");
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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   return reject("Error while login");
      console.log("login ends");
      resolve();
    }, 1000);
  });
}
function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(" get user data ends");
      resolve();
    }, 1000);
  });
}
function displayUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("display user data ends");
      resolve();
    }, 1000);
  });
}

// async function auth() {
//   await register();
//   await sendWelcomeEmail();
//   await login();
//   await getUserData();
//   await displayUserData();
// }

// auth()
//   .then(() => {
//     console.log("all set");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function auth() {
  try {
    const message = await register();
    await sendWelcomeEmail();
    await login();
    await getUserData();
    await displayUserData();
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}
auth().then(() => {
  console.log("all Set");
});
console.log("other application work");

// then hum jab use krte hai jab function hume promise deti hai

// async function by default hume promise return krti hai
