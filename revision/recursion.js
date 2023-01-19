let counter = 1;
function recursion(num) {
  if (counter > num) {
    return;
  }
  counter++;
  console.log("loop" + counter);

  return recursion(num);
}

recursion(10);
