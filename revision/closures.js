/*
closures in javasript is a form of lexical scoping used to preserve variables from the outer scope of function in the inner scope of functions.
*/

function init() {
  let a = 10;
  function display() {
    console.log(a);
  }
  display();
}
init();
