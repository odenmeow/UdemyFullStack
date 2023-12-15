/*                 JSON   Storage                      */
/*          JSON +  Storage          */
console.log("------------未採用JSON ----------");

// localStorage.setItem("myLuckyNumbers", [1, 2, 3, 4, 5, 6]);

// let myNumbers = localStorage.getItem("myLuckyNumbers");
// console.log(typeof myNumbers); //string 不能forEach
console.log("------------JSON ----------");

let myLuckyNumbers = [1, 2, 3, 4, 5, 6];
localStorage.setItem("myNumbers", JSON.stringify(myLuckyNumbers));
let myarr = JSON.parse(localStorage.getItem("myNumbers"));
console.log(myarr);
myarr.forEach((e) => {
  console.log(e);
});
