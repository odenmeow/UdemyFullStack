/*             Call Stack and Recursion                */
// 按照 A B C D E F G...執行步驟
function f1() {
  console.log("開始執行f1");
  f2(); // 步驟B : 執行到一半 f2放入 call stack， 所以系統先執行f2 。
  console.log("結束執行f1");
}

f1(); // 步驟A  f1先放入 call stack 。

function f2() {
  console.log("開始執行f2");
  console.log("結束執行f2");
  // 步驟C : 執行完畢f2 所以要 將其從 call stack 移除，系統繼續執行f1。
}
/*                  Recursion                */

function s(n) {
  if (n == 1) {
    // 如果沒這個，會一直往負數 然後stack overflow
    return 2;
  } else {
    return 2 * s(n - 1);
  }
}
console.log(s(10));

//題目練習，請往下，我有重新寫addUntil。
let x = 5;
function addUpTo(n) {
  // 1+2+3+....+n = ?
  // for迴圈
  // 公式解
  // 遞迴解
  if (n == 2) {
    return 0;
  }
  n--;
  x--;
  console.log(x);
  return addUpTo(n);
}
addUpTo(5); //4  3  2
// 裡面並不會記住 5，而是記住外面的 ref 所以跟著改動!

/*        回憶起上次說到的Closure        */
let name = "Oni";
function sayName() {
  // let name = "Umi";
  console.log("我是", name);
  name = "umi";
  sayName2(); //並不是這邊往外查找 而是定義的時候往外!
}
function sayName2() {
  console.log("我是", name);
}
sayName(); //得到 Oni 然後 Umi 代表綁定ref 而非當時狀態!

function addUntil(n) {
  // 1+2+3+....+n = ?
  // for迴圈
  // 公式解
  // 遞迴解
  if (n == 1) {
    return 1;
  }
  return n + addUntil(n - 1);
}
console.log(addUntil(100));
