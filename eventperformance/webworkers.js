// loading strategies

// html parser check krgea aur script pe ruk jayega jab tk wo load nhi ho jata
// html parsing-->js downloading--js execution  <script tag agar head mai ho to > noraml
// html parsing-js downloading- js execution agar async paralle download
// html parsing-js downloading- js execution defer script execition last mai hota hai html ki parsing bina kisi rukawat ke ho jati hai

let btn1 = document.getElementById("btn1");
window.addEventListener("load", () => {
  console.log("loaded");
});
btn1.addEventListener("click", () => {
  const workerObj = new Worker("worker.js");
  workerObj.postMessage("start worker");
  workerObj.onmessage = function (e) {
    document.querySelector("#output").innerHTML = e.data;
  };
});

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
  document.querySelector("#hi").innerHTML += "hii !!";
});

// advantage
// >helps in complex computing
// >does not block ui
//>optimize performamnce of our program

// disadvantage
// does not have access to parent object
// does not have acess to window object
// does not have acess to document object
