// Map, forEach, filter and reduce

// Map: return a new Array with the same length;

// let arr = [2, 3, 4, 5, 6, 8];
// let arr=["suman", "anand"]

// let x = arr.map((el) => (
//     el*3
// )
// );

// console.log(x);
// tc: O(n)
// sc: O(1)

// forEach: returns elements of an array

// let str = [1, 2, 5, 6, 3, 5];

// str.forEach((el) => {
//   console.log(el);
// });

// tc: O(n)
// sc: O(1)

// let str2 = [1, 2, 5, 6, 3, 5];
// let newArr = [];
// str2.forEach((el, i) => {
//   newArr.push(el*2);
//   console.log(i)
// //   console.log(newArr);
// });

// console.log(newArr);

// tc: O(n)
// sc: O(n)

// filter: return a new Array which verrify;

// let arr=[2,3,7,8,3,6];
// let arr=["dhoni", "virat", "rohit", "bumrah", "doglah"]

// let w=arr.filter((el)=>{
//     return el[0]=="d" && el[el.length-1]=="h"
// })
// console.log(w);
// tc: O(n)
// sc: O(1)

// reduce: give a single value or summarise the value
// let arr=[2,3,7,8,3,6];

// let x=arr.reduce((initial, element)=>{
//     return initial+element+" ";
// },[]);
// console.log(x);

// let x=arr.reduce((initial, element, index)=>{
//     return initial+element;
// },0);
// console.log(x);

// tc: O(n)
// sc: O(1)

// #Chaining

// 1.  Find the sum which are odd.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let x = arr
//   .filter((el) => {
//     return el % 2 === 1;
//   })
//   .reduce((init, e) => {
//     return init + e;
//   }, 0);
// console.log(x);

// tc: O(n^2)
// sc: O(1)

// 2. print the sum of length, whose length is odd.

let arr = ["John", "Victor", "Wilson", "Ram", "Saurav", "Suman"];
//first method:
// let x = arr
//   .filter((el) => {
//     return el.length % 2 === 1;
//   })
//   .map((el) => {
//     return el.length;
//   })
//   .reduce((initial, el) => {
//     return initial + el;
//   }, 0);
// console.log(x);
// tc: O(n^3)
// sc: O(1)

//second method:
// let x = arr
//   .filter((el) => {
//     return el.length % 2 === 1;
//   })
//   .reduce((initial, el) => {
//     return initial + el.length;
//   }, 0);
// console.log(x);

// tc: O(n^2)
// sc: O(1)

// 3. print the full name who is from India

let users = [
  { firstName: "Suman", lastName: "Saurav", place: "India" },
  { firstName: "Ram", lastName: "Kumar", place: "India" },
  { firstName: "Wilson", lastName: "Victor", place: "USA" },
  { firstName: "John", lastName: "Michael", place: "Australia" },
];
//first method
//  users
//   .filter((el) => {
//     return el.place === "India";
//   })
//   .map((el) => {
//     return el.firstName + " " + el.lastName;
//   })
//   .forEach((el)=>{
//     console.log(el)
//   })
// tc: O(n^3)
// sc: O(1)

//second method

users
  .filter((el) => {
    return el.place === "India";
  })
  .forEach((el) => {
    console.log(el.firstName + " " + el.lastName);
  });

// tc: O(n^2)
// sc: O(1)

