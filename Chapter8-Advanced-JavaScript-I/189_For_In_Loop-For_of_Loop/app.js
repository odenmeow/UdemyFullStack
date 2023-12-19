/*           For in loop   / of loop              */

/*       of loop            */

let numbers = [10, 20, 30];

numbers.forEach((n) => {
  console.log(n);
});

for (let n of numbers) {
  console.log(n);
}

console.log("---hi-----");
for (let i of "Hi Oni and Umi") {
  console.log(i);
}

/*      in loop             */

let Oni = {
  name: "Oni",
  age: 25,
};
for (let property in Oni) {
  console.log(property);
}
for (let property in Oni) {
  console.log(Oni[property]); // 最保守
}
for (let property in Oni) {
  console.log(Oni.property); //無效!  Oni並沒有property屬性
}

let num = [100, 44, 22];
for (let i in num) {
  console.log(i, num[i]);
}
