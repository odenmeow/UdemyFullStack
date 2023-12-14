/*           Arrow Function             */
//

let Oni = {
  name: "OniSan",
  age: 25,
  sayhi: () => {
    console.log(this);
    console.log(this.age + "hihihi"); // 不可放入this，並不會得到Oni物件本身
  },
  sayhi2: function () {
    console.log(this);
    console.log(this.age + "hihihi");
  },
  hello: (function a() {
    //要不要命名 取決可讀性而已 ，其他地方用不了。
    console.log("hello u");
  })(), //默默自動執行  建立做一次就沒用了，通常用於初始化之類的行為。
};
Oni.sayhi();
Oni.sayhi2();

// (() => {
//   console.log("hello u");
// })();

window.addEventListener("click", () => {
  alert("有人點我");
});

let addition = (a, b) => {
  return a + b; // {} 一定要加return，否則回傳undefined
};
console.log(addition(2, 2));
let num = () => 15; //直接return expression
console.log(num());

console.log("----------------了解this----------------------");

let BMI = {
  test: function () {
    console.log("BMI.test", this);
    // BMI，由被呼叫時看是誰叫的。

    function testtest() {
      console.log("BMI.test > testtest(ES5)", this);
      // 由被呼叫時看是誰叫的。testtest() 找不到是誰叫的
      // 指向 window。
      // 若要傳遞 this，解決方式是
      // 在 BMI.test()設一個變數把 this 接起來
      // eg. let that = this
    }

    let testtest2 = () => {
      console.log("BMI.test > testtest2(ES6)", this);
      // 指向 BMI => 被鎖住哩！
    };

    testtest();
    testtest2();
  },
  test2: () => {
    console.log("BMI.test2", this);
    // 指向 window。因為 arrow function 沒有 this。
    // 往上一層又找不到<沒有其他函數 (是物件)>，往上持續找到最上層是 window。
    // 這樣的寫法，原本就是指向 window。
  },
  t3: this,
  t4: console.log("t4的測試得到" + this),
};

BMI.test();
BMI.test2();
console.log("我是BMI.t3: >>> ", BMI.t3);
console.log(BMI.t4);

console.log("------------------this進階X 傳統函數-----------------");
// 題解，關於這邊，因為第二個傳統function是在另一個function內部，
// 沒有直屬物件，所以分發Global (Window) 給它當爸爸。
var x = 10;
var obj = {
  x: 20,
  f: function () {
    console.log("Output#1: ", this.x);
    var foo = function () {
      console.log("Output#2: ", this.x);
    };
    foo();
  },
};

obj.f();

console.log("------------------this進階Y 箭頭函數-----------------");
// 原因是因為 第二個是箭頭函數，使用LexcicalContext
// 也就是撰寫當下的上下文，查看 有沒有傳統函數包圍，並且直接挪用它的this。
// 如果 沒有被傳統函數包圍，則往外，然後就得到Window了
// 因為Window 調用傳統函數來執行整個js檔案

// 簡單說明:
//    因為傳統函數會建立this    (綁定直屬物件，傳統函數(){ 該 this 代表其直屬物件})
//    再說一次!!! 傳統函數建立的this會指向傳統函數的直屬物件。
var x = 10;
var obj = {
  x: 20,
  f: function () {
    console.log("Output#1: ", this.x);
    var foo = () => {
      console.log("Output#2: ", this.x);
    }; // arrow function
    foo();
  },
};

obj.f();
