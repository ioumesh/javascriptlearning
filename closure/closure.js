// execution context

const userName = "Umesh Kumar";
function login() {
  const password = "secret";
  console.log(`${userName} is logged in using password ${password}`);
}
login();

//call stack--->
// --->global execution context
// --->variable(username)
//  --->function create execution context for login function variable(password)
// ---function call hone ke bad callstack se nikal jata hai variable delete ho jati hai

// closure ex

function fetchApi(method) {
  return function (url) {
    console.log(`Fetching Data from ${url} using ${method} method`);
  };
}

const url = "google.com";
fetchApi("GET")(url);
// outer and inner variable yaad rakhe jayenge closures m

// example 2

function updateCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter = updateCounter();
// counter();
// counter();
// counter();

// example 3
// ecommere website cart counter

function cartCounter() {
  let _count = 0;
  function _updateCount(val) {
    _count += val;
  }
  return {
    increment() {
      _updateCount(1);
    },
    decrement() {
      _updateCount(-1);
    },
    value() {
      return _count;
    },
  };
}

const cart = cartCounter();
cart.increment();
cart.increment();
cart.increment();
cart.decrement();
console.log(cart.value());

// build usesate from javascript
function useState(intial) {
  let _state = intial;
  function setState(value) {
    _state = value;
  }

  function getState() {
    return _state;
  }
  return [getState, setState];
}

function useCounter() {
  const [count, setCount] = useState(0);
  return {
    click() {
      setCount(count() + 1);
    },
    render() {
      console.log("value", count());
    },
  };
}
const use = useCounter();
use.click();
use.render();
use.click();
use.render();
