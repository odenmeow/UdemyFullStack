/*        Inheritance and the Prototype Chain         */

let Oni = {
  name: "oni",
  sayHi() {
    console.log(this.name + "說你好");
  },
};

let Umi = {
  __proto__: Oni,
  name: "umi", //overwrite
};
Umi.sayHi(); //umi說你好
console.log("Umi.__proto__", Umi.__proto__); //確實指向了Oni物件
// Umi.__proto__ { name: 'oni', sayHi: [Function: sayHi] }
console.log("Oni.__proto__", Oni.__proto__); //確實指向了Oni物件
// Oni.__proto__ [Object: null prototype] {}
console.log(Umi); // { name: 'umi' }
console.log(Umi.prototype); // undefined

function Animal(name, age) {
  this.name = name;
  this.age = age;
  this.walk = function () {
    console.log(this.name + "走路中");
  };
}
Animal.prototype.hello = function () {
  console.log(this.name + "你好");
};
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.walk = function () {
    console.log(this.name + "走路中");
  };
}
Person.prototype.hello = function () {
  console.log(this.name + "你好");
};

let oni = new Person("Oni", 25); //new關鍵字提供this物件給Person 然後
let umi = new Person("Umi", 16); //oni.__proto__ = Person.prototype

console.log(oni, typeof oni);
console.log(oni.__proto__ == umi.__proto__); //true 繼承  都指向同一個物件
console.log(oni.__proto__); //{ hello: [Function (anonymous)] }
console.log(Person.__proto__); //{}  沒這東西
console.log(Person.prototype); //{ hello: [Function (anonymous)] }
/*    下面可以見到物件持有的屬性、至少看見constructor    
      不像 Person.prototype 沒設Person.prototype.hello 
      就剩下 {}
*/
console.log(Object.getOwnPropertyNames(Person.prototype)); //[ 'constructor' ]
console.log(Object.keys(Person.prototype)); //[ ]
/*    下面比較 Animal 跟 Person 是否不相同 */
console.log("右邊是Animal.prototype", Animal.prototype);
console.log("右邊是Person.prototype", Person.prototype);
console.log("右邊是兩者是否同一個物件", Animal.prototype == Person.prototype);

/*      類別 或者說Constructor方法物件? 的 prototype     */

// Person.prototype.hello = function () {....}

console.log("確認方法是否各自持有 或者共用");
console.log(oni.walk == umi.walk); //false
console.log(oni.hello == umi.hello); //true
oni.hello(); //Oni你好
umi.hello(); //Umi你好

Person.prototype.type = "人類";
console.log(oni.type);
console.log(umi.type);

let arr = [1, 2, 3];
let arrArr = new Array(1, 2, 3);

let str = "字串";
console.log(typeof str);
console.log(str.__proto__); // 要去瀏覽器查看才有，這編譯功能差
let strStr = new String("字串");
console.log(strStr);
console.log(typeof strStr);
// console.log(Object.getOwnPropertyNames(String.prototype));
