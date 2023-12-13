/*            Function Declaration            */
// 還沒宣告 就可以先使用 (當然後面一定要記得宣告)

console.log("尚未宣告可先放上來 addition(3, 2)", addition(3, 2));

function addition(a, b) {
  return a + b;
}
console.log("addition(3, 2)", addition(3, 2));
/*            Function Expression            */
console.log("-----------分隔下面是expression--------");
// 使用會出現error
// console.log("尚未宣告先放上來 myAddition(10, 5)", myAddition(10, 5));

let myAddition = function (a, b) {
  return a + b;
};
console.log("myAddition(10, 5)", myAddition(10, 5));

/* 關於 hoisting 先提一下 */
console.log("-----------hoisting 先提一下--------");
console.log(myVar); // undefined
var myVar = 10;

// var 的 hoisting： 使用 var 声明的变量會被 hoisting。
// 它會在其所在的作用域（全局或函数作用域）的頂部進行聲明提升，
// 但初始化（賦值）不會提升，所以在初始化之前會是 undefined。

// let 的 hoisting： 使用 let 声明的变量也會被 hoisting，
// 但在作用域的頂部進行聲明提升時，它不會被初始化。
// 變量保持在「暫時性死區（Temporal Dead Zone，TDZ）」中，
// 直到程序執行到聲明它的位置時才會初始化。這意味著在聲明之前，
// 變量無法被訪問並且會引發錯誤。

console.log("----------配合物件使用--------");
let Oni = {
  name: "Oni",
  greet() {
    console.log(this.name + "打招呼");
  },
  walk: function () {
    console.log(this.name + "正在走路");
  },
};
Oni.greet();
Oni.walk();

console.log("----------addEventListener--------");

// first parameter event?
// 事件發生後 要執行的function?

function react() {
  alert("有人在點螢幕!!");
}

// addEventListener 本身是 higher order function
// react 是一個 callback function
window.addEventListener("click", react);
// window.addEventListener("click", function () {
//   alert("有人在點螢幕!!");
// });

// 1. 如果程式碼有許多callback function ，都採用function declaration
//     命名其他變數要避開。
// 2. callback function 沒有意義的話。

// IIFE  immediately invoked function expression
console.log("----------IIFE--------");

(function (a, b) {
  console.log(a + b);
})(10, 5);
