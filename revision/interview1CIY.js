// Phone call - how well do you know reactjs and nodejs
// Technical round - two questions
// 1) rotate matrix by 90 degree anti clockwise 
// Give me code in javascript  for Rotate square matrix by 90 degrees
// Given a square matrix of size N*N. Print the matrix after rotating it by 90 degrees in anti-clockwise direction.

// Sample Input
// input: N = 3
// Matrix : 1 2 3
// 	     4 5 6
// 	     7 8 9
// Sample Output
// Output: 3 6 9
//     	2 5 8
// 	    1 4 7

// 2)// Find the most frequent element in an array
// // Input: [1, 2, 1, 3, 2, 4, 5, 1]
// // Output: 1

// 3) Explain the order of Event Listeners execution in Node.js. What will be the output of below code and why?

// import { EventEmitter } from 'events';
// const eventEmitter = new EventEmitter();

// eventEmitter.on('myEvent', (data) => {
//     console.log(data, '- FIRST');
// });

// console.log('Statement A');

// eventEmitter.on("myEvent", data => {
//     console.log(data, '- SECOND');
// });

// eventEmitter.emit('myEvent', 'Emitted Statement');

// console.log("Statement B");

// output:
// 1 Statement A
 
// 2  FIRST
// 3 SECOND
//  4 Statement B


// theory questions:
// how reactjs work?
// what is virtual DOM? 
// what is stream in nodejs? 
// what is concurreny in nodejs?
// promsie vs async await difference