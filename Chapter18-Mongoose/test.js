class People {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }
}
let umi = new People("Umi", 16, 155);
let { age, height } = umi;
console.log(age); //得到16
console.log(name); // ReferenceError = undefined
