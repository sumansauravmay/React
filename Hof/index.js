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
// str2.forEach((el) => {
//   newArr.push(el*2)
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



// reduce: give a single value or summarise the value
let arr=[2,3,7,8,3,6];

// let x=arr.reduce((initial, element)=>{
//     return initial+element+" ";
// },[]);
// console.log(x);


let x=arr.reduce((initial, element)=>{
    return initial+element;
},0);
console.log(x);