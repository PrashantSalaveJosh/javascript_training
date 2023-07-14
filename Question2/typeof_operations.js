/*Use the typeof operator to find the types of different variables.
  Specially note what the typeof operator returns for arrays, null values 
  and NaN.
 */

console.log(typeof(0));
//number

console.log(typeof(10n));
//bigint

console.log(typeof("javascript"));
//string

console.log(typeof(undefined));
//undefined

console.log(typeof(true));
//boolean

console.log(typeof({ }));
//object

console.log(typeof(null));
//object

console.log(typeof(NaN));
//number

console.log(typeof([1,2,3,4]));
//object

// How can you find if a variable is an array or NaN besides typeof?

let arr = [];
console.log(arr instanceof Array); // true - arr is a array

let nan = "js"/2;
console.log(isNaN(nan)); // true - as expression "js"/2 is not a number
