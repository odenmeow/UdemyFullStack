/*        Prototype inheritance          */
/*          call善用                */
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.m = function () {
    console.log("人類的方法");
  };
}
Person.prototype.sayHi = function () {
  //不能用arrow Fn 否則綁定window或undefined
  console.log(this.name + "說你好");
};
let oni = new Person("Oni", 25);
oni.sayHi();
function Student(name, age, major, grade) {
  Person.call(this, name, age);
  this.major = major;
  this.grade = grade;
}

/*        Object.create 建立出新的物件 讓人繼承                 */

// Student.prototype = Person.prototype;
// 上面這個做法會導致指向 Person的記憶體資料 而不是創造獨立的資料
// 因此如果增加方法，會導致其實增加在Person.prototype、共享 ，而不是Student獨有。
Student.prototype = Object.create(Person.prototype);
Student.prototype.study = function () {
  console.log(this.name + "正在讀" + this.major);
};
Student.prototype.rrrr = "不讀書";
let umi = new Student("Umi", 16, "allSubject", "4.0");
console.log(umi);
// 需先設定prototype 為 Person.prototype的副本 (記憶體位置不同的獨立物件) 才能hi()
umi.sayHi();
umi.study();

let onisan = new Person("Oni", 25);
// onisan.study();
console.log(umi.__proto__);
console.log(Student.prototype);
console.log(onisan);
//Person { name: 'Oni', age: 25, m: [Function (anonymous)] }
console.log(Person.prototype);
// 都是Person { study: [Function (anonymous)] }
Person.prototype.newWord = function () {
  console.log("說點東西而已");
};
onisan.newWord();
onisan.m();
Person.prototype.name = "共用";
console.log("onisan名字", onisan.name);
let objX = {
  name: "objX",
};
Person.prototype.kk = "box";
objX.__proto__ = Person.prototype;
console.log(objX.name); //objX
// console.log(objX.m()); //沒持有這個
// 僅有prototype有的才能
console.log(objX.kk); //box
objX.__proto__ = oni;
objX.m();
objX.__proto__.age = 35;
console.log(objX.age); // 35
console.log(oni.age); //35
oni.age = 40;
console.log(objX.age);
