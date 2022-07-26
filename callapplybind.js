// constructor function
function Students(firstName, lastName, subjects) {
  (this.firstName = firstName),
    (this.lastName = lastName),
    (this.subjects = subjects);
}
const greet = function (prefix) {
  console.log(`${prefix},${this.firstName} ${this.lastName}`);
};

// objeect
let student1 = new Students("umesh", "kumar", "react");
greet.call(student1, "hey");
greet.apply(student1, ["heyumesh"]); //apply mai second param mai array hota hai
// bind hume naya function bna kr de deta hai fir humari marji hai jab call kre
let fn = greet.bind(student1);
console.log(fn);
fn("best");
