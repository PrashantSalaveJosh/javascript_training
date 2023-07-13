/*Use let and const to create arrays and objects. Try modifying, 
  deleting properties within the array or object. What do you expect to 
  happen in both cases? What actually happens in both cases. 
  What is the difference between an object declared as a let or 
  a const variable?
 */

// object with let

let person = {
  name: "Prashant",
  profession: "Software Developer",
  phone_no: 9087654321
}

console.log(person.name); //log name property

//Adding a property
person.age = 27; //added age property
console.log(person.age);

// modifying property value
person.phone_no = 8907654321; //changed phone no
console.log(person.phone_no);

// deleting a property
delete person.age;
console.log(person);

// object with const
const car = {
  name: "Tata Safari",
  colour: "Black",
  price: "20 lac"
}

console.log(car);

// adding a property
car.model = "4WD";
console.log(car.model);

// modifying a property
car.colour = "White";
console.log(car.colour);

// deleting a property
delete car.model;
console.log(car);

/* car = {
   name:"Toyota"
 }  TypeError: Assignment to constant variable.

 console.log(car);
*/
