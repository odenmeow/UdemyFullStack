/*                   Storage                      */
/*            Storage          */
console.log("------------Storage----------");

// window.localStorage
localStorage.setItem("name", "Oni");
localStorage.setItem("age", 25);

let myName = localStorage.getItem("name");
let myAge = localStorage.getItem("age");

console.log(myName, typeof myName);
console.log(myAge, typeof myAge);

console.log("------------RemoveItem----------");

localStorage.removeItem("name");
localStorage.clear();
