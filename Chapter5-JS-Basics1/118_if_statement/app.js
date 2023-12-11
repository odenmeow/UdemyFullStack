/*          if statement            */
/*                      */
if (5 > 3 && 6 > 10) console.log("This is true"); //沒東西出現
if (5 > 3 && 6 < 10) console.log("This is true"); //出現字了
if (5 > 7) {
  console.log("This is true"); // 跟上面一樣只是做括號
} else {
  console.log("失敗了所以我出現了");
}

console.log("------ if else if ------------else");

let age = 12;
if (age <= 12) {
  console.log("你是小屁孩");
} else if (age > 12 && age <= 30) {
  console.log("底層社畜年紀");
} else {
  console.log("老了ㄏㄏ");
}
console.log("------------   練習題       ------------ ");

let input_age = window.prompt("請輸入年紀");
console.log(typeof input_age); //String
input_age = Number(input_age);
console.log("內容為" + input_age);
console.log(typeof input_age); // number

if (input_age <= 12 && input_age >= 0) {
  window.alert("額同票100");
} else if (input_age > 12 && input_age <= 65) {
  window.alert("盤子票250");
} else if (input_age < 120) {
  window.alert("老票150");
} else {
  window.alert("太老或太小、不可能、不能買");
}
