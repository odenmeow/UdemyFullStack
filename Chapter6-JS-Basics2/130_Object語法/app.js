/*       Object           */
let Oni = {
  first_name: "AI",
  last_name: "oni",
  age: 25,
  isStudying: true,

  sayHi() {
    console.log("Oni say Hi");
  },
  walk(step) {
    console.log("Oni go for", step, "step.");
  },
  sayAge() {
    console.log("oni is " + this.age + " years old.");
  },
};
console.log(Oni);
console.log(Oni.age);
console.log(Oni["last_name"]);

Oni.sayHi(); //Oni say Hi
Oni.walk(3); //Oni go for 3 step.
Oni["walk"](5); //Oni go for 5 step.
Oni["walk"](); //Oni go for undefined step.
Oni.sayAge();

function hello() {
  console.log("hello");
  console.log(this); // window object (GlobalObj 瀏覽器=window object)
}
hello();
// ⚠️查對象==Array?，不該用typeof

let arr = [1, 2, 3, 4, 5];
console.log(typeof arr);

function helloWord() {
  console.log("hello,word");
}
console.log(helloWord); //hello,word
console.log(helloWord()); //undefined
console.log(typeof helloWord); // fucction
console.log(typeof helloWord()); //先印出 hellow,word 再印出undefined

/*          確認是不是array        */
console.log(Array.isArray(arr));
console.log(Array.isArray(Oni));
