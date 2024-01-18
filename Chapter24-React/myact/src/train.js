class Car {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getAge = () => {
    return this;
  };
  getName() {
    let x = () => {
      return this; //undefined 因為沒有物件呼叫它所以指向最外面global
    };
    return x(); //沒有物件呼叫所以指向最外面global
  }
  gg() {
    return this.getName();
  }
}

console.log("=======class 內函數=============");
let c = new Car("1號", 11);
// console.log(c.getName());
// console.log(c.gg());
console.log(c.getAge());
console.log(c.gg());

// arrowFunction不會創造內部this 指向直屬外部物件
// 由於外面沒有傳統function 所以也不會借用this 因此是undefined
let o = {
  name: "umi",
  age: 16,
  getByArr: () => {
    // 這邊是arrowfn，所以沒有this可以綁==undefined
    console.log(this.age);
    // 這邊用傳統也是undefined 因為是呼叫時順便綁定
  },
  getByFn: function () {
    console.log(this.name);
  },
  getByArrInFn: function () {
    // 內部可以好幾層 arr 都能捕捉到傳統綁定的this
    let arrfn = () => {
      console.log(this.age);
    };
    arrfn();
  },
  getByFnInFn: function () {
    let fn = function () {
      console.log(this.age);
    };
    fn();
  },
};

console.log("=======傳統物件內函數=============");
o.getByArr(); // 箭頭函數沒自己的this
o.getByFn(); // 傳統函數有，可以綁物件
o.getByArrInFn(); // 傳統內部箭頭函數會依賴 傳統的this
o.getByFnInFn(); // 傳統內部傳統 不能綁定

console.log("=======傳統class內函數=============");

function Person(age, name) {
  this.age = age;
  this.name = name;
  this.a = () => {
    console.log(this.age);
  };
  this.n = function () {
    console.log(this.name);
  };
}
let p = new Person(25, "oni");
p.a();
p.n();
