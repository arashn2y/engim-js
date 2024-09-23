import { colors, numbers, students } from "./../data.js";

let result = [];

// destructuring and spread operator

// const [first, second, third, ...rest] = colors;
// console.log(third);
// console.log(rest);
// console.log(colors);

// const newColors = [...colors, { id: 11, name: "pink" }];
// console.log(newColors);
// console.log(students);

const [firstStudent, secondStudent, ...restStudents] = students;
// console.log(firstStudent);
const { first_name, last_name, age } = firstStudent;
const { first_name: name, last_name: last, age: eta } = secondStudent;
// console.log(first_name, last_name, age);
// console.log(name, last, eta);

// <------------------------------------------------------------>
// <------------------------------------------------------------>

// How to use array functions

// 1. push()
// numbers.push(5);
// colors.push({ id: 11, name: "pink" });
// 2. pop()
// colors.pop();
// 3. unshift()
//numbers.unshift(0);
// colors.unshift({ id: 0, name: "violet" });
// 4. shift()
// colors.shift();
// 5. forEach()
// console.log(numbers);
// function showNumber(number) {
//   console.log(number);
// }
// const showNumber = (number) => {
//   console.log(number)
// }
// result = numbers.forEach(number => {
//   console.log(number);
// });
// 1 => showNumber(1)
// 2 => showNumber(2)
// console.log(result);
// 6. map()
// result = numbers.map(number => number * 2);
// result = colors.map(color => {
//   color.id = color.id + 1;
//   return color;
// });
// console.log(result);
// 7. filter()
// function filterNumber(number) {
//   if (number < 5) {
//     return true;
//   } else {
//     return false;
//   }
//  console.log(number);
// }
// result = numbers.filter(filterNumber);
// console.log(result);
// 8. find()
// result = numbers.find(number => number === 100);
// 9. every()
// result = numbers.every(number => number > 0);
// 10. some()
// result = numbers.some(number => number > 10);
// 11. reduce()
// function addNumbers(acc, number) {
//   return acc + number;
// }
// result = numbers.reduce(addNumbers, 0);
// acc = 0;
// number = 1;
// 0 + 1 => 1

// acc = 1;
// number = 2;
// 1 + 2 => 3

// acc = 3
// number = 3;
// 3 + 3 => 6

// acc = 6;

// 12. sort()
// function sortStudents(a, b) {
//   return a.first_name.localeCompare(b.first_name);
// }
// function sortNubmers(a, b) {
//   if (a < b) return 1;
//   if (a > b) return -1;
//   return 0;
// }
// console.log(students);
// result = numbers.sort(sortNubmers);
// result = students.sort(sortStudents);
// result = students.sort((a, b) => {
//   if (a.age > b.age) {
//     return -1;
//   } else if (a.age < b.age) {
//     return 1;
//   } else {
//     return 0;
//   }
// });
//reDesign with destructuring and callback function
// 13. reverse()
// result = students.reverse();
// 14. isArray()
// result = Array.isArray(students);

// console.log(result);
// console.log(numbers);
// console.log(colors);
