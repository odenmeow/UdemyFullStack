/*                IIFE, destructuring assignment                      */

// 避免汙染其他變數

// function hello() {
//   console.log("hello");
// }
/***  不會導致外面的hello不能重新宣告、命名變數    ***/
(function hello() {
  console.log("hello");
})();
let hello = 5;
console.log(hello);
/***  其實也不需要命名   匿名函數  ***/
(function () {
  console.log("hello");
})();
/***  其實也不需要命名 - arrow函數   ***/
(() => {
  console.log("hello");
})();

/**               destructuring assignment                  **/

//  版本一
// let arr = [1, 2, 3, 4, 5, 6, 7];
// // 不需要傻傻一個一個去用index 賦值
// let [a1, a2, a3, a4, a5, a6, a7] = arr;
// console.log("a5 is", a5);

//  版本二 關於剩餘參數 採陣列
let arr = [100, 200, 300, 400, 500];
let [a1, a2, ...a3] = arr;
console.log("版本二 a1 is", a1);
console.log("版本二 a3 is", a3);

//  版本三 關於物件解構

let Oni = {
  name: "Oni",
  age: 25,
  addr: "Tw",
  height: 167,
  weight: 66,
};

let { name, age, addr } = Oni;
console.log(name, age, addr);
let { height, weight, ...detail } = Oni;
console.log(height, weight, detail);
