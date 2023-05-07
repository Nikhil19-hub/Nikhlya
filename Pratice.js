// function fizzBuzz(input) {
//   if (typeof input !== "number") return "Not a number";
//   if (input % 3 === 0) return "fizz";
//   if (input % 5 === 0) return "Buzz";
//   if (input % 3 && input % 5 === 0) return "FizzBuzz";
// }

// console.log(fizzBuzz("abd"));
// console.log(fizzBuzz(21));
// console.log(fizzBuzz(10));
// console.log(fizzBuzz(15));

// function showNumber(inout) {
//     for (i in inout){
//         return inout % 2 === 0 ? "Even" : "Odd";
// }}
// console.log(showNumber(5));

// function stars(num) {
//   for (i = 1; i <= num; i++) {
//     let star = "";
//     for (j = 0; j < i; j++) star += "*";
//     console.log(star);
//   }
// }

// stars(9);

// let address = new Address();

// function Address(street, city, zipCode) {
//   (this.street = street), (this.city = city), (this.zipCode = zipCode);
// }

// console.log(address);

// const numbers = [1, 2, 3, 4];
// const max = getMax(numbers);

// function getMax(array) {
//   if (array.length === 0) return undefined;
//   //   let max = array[0];
//   //   for (i = 1; i < array.length; i++) if (array[i] > max) max = array[i];

//   return array.reduce((acc, curr) => {
//     return acc > curr ? acc : curr;
//   });
// }

// function sum(...args) {
//   return args.reduce((a, b) => a + b);
// }
// console.log(sum(1, 2, 3, 4, 5));

// const circle = {
//   radius: 1,
//   get area() {
//     return 2 * 3.14 * this.radius;
//   },
// };

// console.log(circle.area);

function stopwatch() {
  this.start = function () {};
  let stop = function () {};
  let duration = function () {};
  let reset = function () {};
}

const sw = new stopwatch();
