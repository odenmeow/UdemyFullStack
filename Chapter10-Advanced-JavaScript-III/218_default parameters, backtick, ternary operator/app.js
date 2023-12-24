/*                ternary operator                       */

let age = 12;
let price = age < 18 ? 50 : 150;
console.log(price); //50

// 下面是 有點不合人性的寫法 QQ
// if (age < 18) {
//   price = 50;
// } else if (age < 60) {
//   price = 150;
// } else {
//   price = 70;
// }
// age = 59;
// price = age < 18 ? 50 : age < 60 ? 150 : 70;
// console.log(price);
/*               Default parameters                      */

// 過去的作法
function mutiply(a, b) {
  //   if (a == undefined) {
  //     a = 1;
  //   }
  //   if (b == undefined) {
  //     b = 1;
  //   }
  return a * b; //數字跟undefined相乘 為 NaN
}
console.log(mutiply(5));

function defaultMutiply(a = 1, b = 1) {
  return a * b;
}
console.log(defaultMutiply());
/*               BackTick                      */

let years_old = 25;
let addr = "TW";
let oni = "Oni Lin";
let introduce = oni + "年紀" + years_old + "住在" + addr;
console.log(introduce);

introduce = `${oni}年紀${years_old}住在${addr}`;
console.log(introduce);
