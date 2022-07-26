const outer = document.querySelector("#outer");
const inner = document.querySelector("#inner");
const bodyevent = document.body;
const redirect = document.querySelector("a");
redirect.addEventListener("click", (e) => {
  console.log("a click");
  e.preventDefault();
});

bodyevent.addEventListener("click", () => {
  console.log("i am body clicked");
});
outer.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("i am outer clicked");
});
inner.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  console.log("i am inner clicked 1");
});
inner.addEventListener("click", (e) => {
  console.log("i am inner clicked 2");
});

// event ka bubble stop kr dega
