/*Use let and const to create arrays and objects. Try modifying, 
  deleting properties within the array or object. What do you expect to 
  happen in both cases? What actually happens in both cases. 
  What is the difference between an object declared as a let or 
  a const variable?
 */

//array with let declaration
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);

//add element in array
fruits.splice(2, 0, "pear"); //2 is for position, 0 for no deletion and element to add
console.log(fruits);

//we can also add using index

fruits[4] = "Guava"; 
console.log(fruits); // add new element "Guava"

//replace element
fruits[3] = "orange"; 
console.log(fruits); //replace element at 3 with orange

//delete element

//delete fruits[3]; //delete element at 3 but creates a hole

fruits = fruits.filter(f => f !== "pear");
console.log(fruits);// delete element "pear"

// array with const declaration
const cars = ["Tata", "Maruti", "Hyundai"];
console.log(cars);

cars[3] = "Kia";
console.log(cars);

cars.splice(2, 0, "MG");
console.log(cars); //MG will add at 2 position

// cars = cars.filter(c => c !== "MG");  error - Assignment to const variable
// console.log(cars);
