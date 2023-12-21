/*         Constructor               */

// function Student(major, age, major) {
//   this.name = name;
//   this.age = age;

//   this.major = major;
// }
// Student.prototype.sayHi = function () {
//   console.log(this.name, "說你好");
// };
/*             Class                     */

// class Student {
//   constructor(name, age, major) {
//     this.name = name;
//     this.age = age;
//     this.major = major;
//   }
//   sayHi() {
//     console.log(this.name + "說你好");
//   }
// }
// let oX = {
//   name: "oX",
// };
// let oni = new Student("Oni", 25, "no");
// oni.__proto__ = { magic: "存在" };
// oX.__proto__ = oni;
// console.log(oX.name);
// console.log(oX.magic);
// /*              extends                 */
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHi() {
//     console.log(this.name + "說你好");
//   }
// }
// class Student extends Person {
//   constructor(name, age, major, grade) {
//     super(name, age);
//     // 相當於Person.call(this,name,age)
//     // 原本Person因為是傳統fn所以有this，但被替換
//     // 所以是真的繼承了跟 .__proto__透過chain查詢的假貨不同!
//     this.major = major;
//     this.grade = grade;
//   }
//   study() {
//     console.log(this.name + "正在讀", this.major);
//   }
// }

// let umi = new Student("Umi", 16, "All Subject", "A+");
// umi.sayHi();
// umi.study();
/*             static     - 對照組                   */

// function Student(name, age, major) {
//   this.name = name;
//   this.age = age;
//   this.major = major;
// }
// Student.exampleProperty = 10;
// Student.exampleFunction = function () {
//   console.log("名稱隨便取的");
// };
// Student.exampleFunction();
// Student.prototype.sayHi = function () {
//   console.log(this.name + "說你好");
// };

// let oni = new Student("Oni", 25, "QQ");
// oni.sayHi();
// oni.exampleFunction();  這是綁定在Student不會傳到oni身上
/*             static                        */

class Student {
  static title = "學生";
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.sayhi = function () {
      console.log("你好");
    };
  }
  static star() {
    console.log("******");
  }
}
let oni = new Student("Oni", 25);
console.log(oni.title); //undefined
console.log(Student.title); //學生
// oni.star(); //報錯 沒這東西
Student.star();
// 由此可見跟JAVA 很類似，同樣可以被繼承!
// JAVA 類別直接呼叫方法或者屬性是可以的
// JAVA method 本來就是共用的 不會在記憶體很多份
// JAVA static 共用屬性跟隨在類別身上也很像

// 從物件去呼喊 JAVA不用特別設定但 JS要改用prototype
// 這沒辦法寫得像JAVA了，只能像之前那樣設定 obj.__proto__=Student.prototype
// Student.prototype.method=function (){xxxxx}
// Student.prototype 物件間共用方法、屬性 為了省記憶體
class p extends Student {
  constructor(name, age) {
    super(name, age);
  }
}
console.log("p開始表演");
p.star(); //...幹真的有耶
