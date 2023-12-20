/*              Scope And Closure                 */

function hello() {
  // 區域變數
  let a = 10; //只有hello 內可訪問  function scope  / const let var都適用
  console.log(a);
}
hello();
function hello2() {
  console.log(a);
}
// hello2();// ReferenceError: a is not defined

let x = 10; //全域變數
function helloA() {
  function helloB() {
    console.log(x + 10);
  }
  helloB();
}
helloA();

/////////////scope

let myName = "Oni"; //var let const 都會有 global scope
function sayHi() {
  console.log(myName + "你好"); //有抓到global 全域變數
  function sayHi2() {
    console.log(myName + "你好"); //有效
  }
  sayHi2();
}
sayHi();

// 以下是 let const 的狀況
//curly bracket   let const 屬於 Block scope
if (true) {
  let j = 100;
}
console.log(j);

for (let f = 0; f < 10; f++) {}
// console.log(f); //ReferenceError: f is not defined
// 以下是 var
if (true) {
  var j = 100;
}
console.log(j);
var f = 100; // 會被下面redeclaration reassignment ，沒有block scope
for (var f = 0; f < 10; f++) {}
console.log(f);
//上面就是為什麼不要用var 避免無意識重新賦值之類
/*               Closure          */
// 下面證明，function declaration 也有 function scope

function sayYa() {
  var YY = 11;
  console.log("Ya");
  // sayYa2(); // 可以這邊執行或者
  function sayYa2() {
    console.log("Ya2");
  }
  // sayYa2(); // 這邊也可以執行
}
// sayYa2(); // 無法執行ReferenceError: sayYa2 is not defined 因為這邊只能被sayYa 這個block 所見
sayYa();
console.log("~~~~~~~~~~~", YY); // 跟block不同，closure 無法訪問裡面，最多只能內層訪問外面
// 下面解釋了，他如果closure找不到 宣告的變數，會往外層去搜尋
let c = 100;
function add(a, b) {
  return a + b + c;
}
add(3, 4);

// 下面又是一個特殊案例 CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC-1

let name = "Oni";
function sayName() {
  let name = "Umi";
  console.log("我是", name);
  sayName2(); //並不是這邊往外查找 而是定義的時候往外!
}

function sayName2() {
  console.log("我是", name);
}

sayName(); //得到??
// 我猜是 Umi 然後 Oni
// 我猜第二個是因為sayName2 早就先在 create context階段
// 就擬定使用哪個  外部的context   (這個例子而言是global的 name="Oni")

// 下面是特殊案例 CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC-2

let identify = "Oni";
function talkWith() {
  let identify = "Umi";
  console.log(identify + "說話");
  function talkWith2() {
    //執行之前不知道有宣告，這是動態宣告的東西 所以使用Umi
    // 不知道上面那句正確否，但即使錯，也是會使用identify='Umi' 因為就在他頭上。
    // 如果有很多層函數，會往外找，直到global 都找不到 才會出現 undefined的錯誤消息
    console.log(identify + "說話");
  }
  talkWith2();
}
talkWith();
// Umi說話;
// Umi說話;
