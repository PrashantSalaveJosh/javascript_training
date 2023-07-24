/*3. Declare a variable let arraySize = 25;. Using a for loop, add numbers 
from one onwards into an array till the arraySize is reached.
*/

let arraySize = 25;
let arr = new Array(arraySize);

for (let i = 0; i < arr.length; i++) {
  arr[i] = i + 1;
}

for (let num of arr) {
  console.log(num);
}
