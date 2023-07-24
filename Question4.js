/*3. Declare a variable let arraySize = 25;. Using a while, add numbers 
from one onwards into an array till the arraySize is reached.
*/

let arraySize = 25;
let arr = new Array(arraySize);
let i = 0;

while (i < arr.length) {
  arr[i] = i + 1;
  i++;
}

i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}
