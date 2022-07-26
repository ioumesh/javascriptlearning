//var ke case mai hoga

console.log(a);
var a = 10;
console.log(a);
// compile
// execute

// output
var b = 20;
var b;
console.log(b);
// compilation step
// b---undefined
//
//
// execute -- b naam ka variable hai use 20 assign ho gya fir connsole ho gya

var x = 100;
console.log(x);
function fn() {
  console.log(x);
  var x = 20;
  console.log(x);
}
fn();
