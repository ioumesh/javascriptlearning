// function create krte hai to wo aas pass ki environment ko yaad rakhta hai

function outer() {
  let a = 10;
  var b = 20;
  const inner = () => {
    console.log("inner", a, b);
  };
  return inner; //isi concept ko closure khte hai
}
const result = outer();
result();
console.dir(result);
