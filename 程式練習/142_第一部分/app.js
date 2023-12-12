/*1. 編寫一個名為“printEvery3()”的函式，它打印出等差數列 1, 4, 7, …, 88。     */

function printEvery3() {
  for (let i = 1; i <= 88; i = i + 3) {
    console.log(i);
  }
}
printEvery3();
/*2.編寫一個名為table9to9的函式，它打印出九九乘法表的內容。*/
function table9to9() {
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      console.log(i, "x", j, "=", i * j);
    }
  }
}
table9to9();
/*3.編寫一個名為isUpperCase的函式，唯一的參數是一個String，
      其功能為來檢查參數中String的第一個字母是否為大寫。*/

function isUpperCase(str) {
  if (str.length == 0) {
    console.log("長度等於零");
    return;
  }
  if (
    str[0].charCodeAt(0) >= "A".charCodeAt(0) &&
    str[0].charCodeAt(0) <= "Z".charCodeAt(0)
  ) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}
isUpperCase("ABCD");
isUpperCase("");
// ""== (false       or      0       or     ""    or     ''  )
// ""!= (undefined    or     null)
isUpperCase("aBCD");

/* 追加特殊題目    以後再看*/
// let 或是 const  結果一樣。
// const f = (function () {
//   let count = 0;
//   return function () {
//     return `I have been called ${++count} time(s).`;
//   };
// })();
// console.log(f()); //I have been called 1 time(s).
// console.log(f()); //I have been called 2 time(s).

/*4.編寫一個名為isAllUpperCase的函式，唯一的參數是一個String，
其功能為來檢查參數中String的所有字母是否為大寫。  */

function isAllUpperCase(str) {
  if (str.length == 0) return console.log(false);
  let a_ASCII = "A".charCodeAt(0);
  let z_ASCII = "Z".charCodeAt(0);
  for (let i = 0; i < str.length; i++) {
    if (
      str[i][0].charCodeAt(0) >= a_ASCII &&
      str[i][0].charCodeAt(0) <= z_ASCII
    ) {
    } else {
      return console.log(false);
    }
  }
  return console.log(true);
}
console.log("--------4.全大寫否 印出-------");
isAllUpperCase("ABCD"); // returns true
isAllUpperCase(""); // returns false
isAllUpperCase("ABCDEFGHIJKLm"); // returns false

console.log("--------5.position的函式-------");
/*編寫一個名為position的函式，唯一的參數是一個String，
其功能為找到參數String當中的第一個大寫字母，並且回傳字母以及其index位置。 */

function position(str) {
  if (str.length == 0) return console.log(-1);
  let a_ASCII = "A".charCodeAt(0);
  let z_ASCII = "Z".charCodeAt(0);
  for (let i = 0; i < str.length; i++) {
    if (
      str[i][0].charCodeAt(0) >= a_ASCII &&
      str[i][0].charCodeAt(0) <= z_ASCII
    ) {
      return console.log(str[i], i);
    } else {
    }
  }
  return console.log(-1);
}

position("abcd"); // prints -1
position("AbcD"); // prints A 0
position("abCD"); // prints C 2

/*編寫一個名為findSmallCount的函式，其參數為一個整數的array以及另一個整數，
功能是回傳一個整數，來表示array中有多少元素小於第二個參數。 */
console.log("--------6.findSmallCount的函式-------");

function findSmallCount(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i]) count++;
  }
  return console.log(count);
}

findSmallCount([1, 2, 3], 2); // returns 1
findSmallCount([1, 2, 3, 4, 5], 0); // returns 0

/* 編寫一個名為findSmallerTotal的函式，其參數為一個整數的array以及另一個整數，
回傳值為array中小於第二個參數的所有元素的總和。*/
console.log("--------7.findSmallerTotal-------");

function findSmallerTotal(arr, num) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) if (num > arr[i]) sum += arr[i];
  return console.log(sum);
}
findSmallerTotal([1, 2, 3], 3); // returns 3
findSmallerTotal([1, 2, 3], 1); // returns 0
findSmallerTotal([3, 2, 5, 8, 7], 999); // returns 25
findSmallerTotal([3, 2, 5, 8, 7], 0); // returns 0

console.log("--------8.stars-------");
/*編寫一個名為stars的函式，功能為按以下模式打印出星星層： */
// hint: 由於console默認換行，不換行要用別的方法 process.stdout.write("This");
// 先組成後再輸出。
function stars(num) {
  let text = "";
  for (let i = 1; i <= num; i++) {
    if (i > 1) text += "\n";
    for (let j = 1; j <= i; j++) {
      text += "*";
    }
  }
  return console.log(text);
}

stars(1);
console.log("----");
// *
stars(4);
// *
// **
// ***
// ****
console.log("--------9.stars2-------");
/*編寫一個名為stars2的函式，功能為按以下模式打印出星星層： */

function stars2(num) {
  let text = "";

  for (let line = 1; line <= num * 2 - 1; line++) {
    if (line != 1) text += "\n";
    if (line <= num) {
      for (let stars = 1; stars <= line; stars++) {
        text += "*";
      }
    } else {
      for (let stars = 0; stars <= num * 2 - 1 - line; stars++) {
        text += "*";
      }
    }
  }

  return console.log(text);
}
stars2(1);

// *
console.log("----------");
stars2(2);
// *
// **
// *

console.log("----------");
stars2(3);
// *
// **
// ***
// **
// *

console.log("----------");
stars2(4);
// *
// **
// ***
// ****
// ***
// **
// *

console.log("--------9.stars3-變身用push-------");
function star3(num) {
  let arr = [];
  let graph = "";
  for (let line = 1; line <= num; line++) {
    let text = "";
    for (let star = 1; star <= line; star++) {
      text += "*";
    }
    arr.push(text);
  }

  for (let i = 0; i < arr.length; i++) {
    graph += arr[i] + "\n";
  }
  for (let i = arr.length - 2; i >= 0; i--) {
    graph += arr[i] + "\n";
  }
  console.log(graph);
}
console.log("--------star3-----");
star3(2);
console.log("--------10. fibonacci-------");
/*首幾個費波那契數是：0、1、 1、 2、 3、 5、 8、 13、 21、 34、 55、 89、 144、 233、 377、 610、 987、…。
編寫一個名為fib的函式，唯一的參數是個整數n，回傳值為斐波那契數列的第n項。 */
function fib(num) {
  // 0,1,1,2,3,5,8
  let arr = [1, 1, 2]; // [0,1,sum] [1,1,2] [1,2,3]

  if (num < 0) return console.log("不可以負數");
  if (num == 0) return console.log(0);
  if (num <= 2) return console.log(1);
  for (let i = 3; i <= num; i++) {
    arr[2] = arr[1] + arr[0]; // 第三項等於前兩和 之後
    arr[0] = arr[1];
    arr[1] = arr[2];
  }
  return console.log(arr[2]);
}
fib(0); // returns 0
fib(1); // returns 1
fib(2); // returns 1
fib(3); // returns 2
fib(8); // returns 21
