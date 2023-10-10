/*
1. Write a function that can stop execution of a function for the number of 
milliseconds sent as an argument
Example:
  const func = async () => {
  console.log(“Printing before”)
  //Call your function here eg. sleep(3000)
  console.log(“Printing after”)
}
*/

const func = async (time) => {
  console.log("Printing before");
  setTimeout(() => {
    console.log(`Executed after ${time} seconds`);
  }, time);
  console.log("Printing after");
};

func(5000);
