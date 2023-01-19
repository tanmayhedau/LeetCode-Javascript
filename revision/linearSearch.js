const user = [
  { username: "tanmay", email: "tanmay@test.com" },
  { username: "shreya", email: "shreya@test.com" },
  { username: "aman", email: "aman@test.com" },
];

function linearSearch(arr, val) {
  for (let item of arr) {
    if (item["email"] === val) {
      return true;
    }
  }
  return false;
}

console.log(linearSearch(user, "tanmay@test.com"));
