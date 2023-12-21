/*        Function Methods          */

/*          function.bind                */

let Oni = {
  name: "Oni",
  age: 25,
};
function getAge() {
  return this.age; //沒有叫做age的 因為綁定外面的
}
console.log(getAge());
let newFn = getAge.bind(Oni);
console.log(getAge()); // 原始沒有被改變
console.log(newFn()); // 回傳新的到另一個variable上

/*          function.call                */

function getName(country, eyeSight) {
  console.log(this.name + "來自" + country + "視力" + eyeSight);
  return this.age;
}

getName.call(Oni, "tw", "nearSighted");
getName.apply(Oni, ["tw", "nearSighted"]);
