/*              Hoisting                 */
// hoisting
// function hello(){...}
// var x=undefined;
// let y; // cannot access y before initializatio n
// const z;
// let myFunction

// myFunction();
// 不管arrow fn 或 匿名fn 或具名fn  因為是let 然後賦予，所以都不能先取得
let myFunction = () => {
  console.log("this is my function");
};

console.log(x); // 只有x 可以被hoisting 因為他用var
// console.log(y);
// console.log(z);

hello();
function hello() {
  console.log("hello");
}
var x = 5;
let y = 10;
const z = 6;
console.log("GOT 未定義", my); //undefined
// console.log(myName); // myName is not defined.

var my;

// let w
let w;
console.log(w); //並不是hoisting 階段產生 而是executionPhase
