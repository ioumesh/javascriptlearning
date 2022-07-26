onmessage = function (e) {
  let result = 0;
  for (let i = 0; i < 10000000000; i++) {
    result = result + i;
  }
  postMessage(result);
};
// console.log(btn1);

// console.log(window);
// console.log(self);
console.log(document);
