let greeting;
greeting = {};
console.log(greeting);

answer: {}
because:  assigned an empty object to the variable


function sum(a, b) {
  return a + b;
}

sum(1, "2");
answer: 12

because: JavaScript converts the number 1 to a string and concatenates it with the string "2".



const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);


answer: ["🍕", "🍫", "🥑", "🍔"]
because: 

function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

answer is: B: Hi there, undefined
because: When you call sayHi() without providing any argument the name parameter inside the function is undefined.


let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

answer: C:3
because:  there are three truthy values in the nums array.
