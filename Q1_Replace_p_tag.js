// Visit any page on the browser, and replace the content of all the p tags
// with the phrase “How’s the Josh?” using Javascript

const pArray = document.getElementsByTagName("p");
for (let p of pArray) {
  p.innerHTML = "How's the JOSH!";
}
