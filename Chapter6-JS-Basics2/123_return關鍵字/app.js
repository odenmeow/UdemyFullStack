/*       return關鍵字            */

//算圓形面積

function circle(r) {
  3.14 * r ** 2;
}
console.log(circle(10)); //undefined

function circle(r) {
  return 3.14 * r ** 2;
}
console.log(circle(10)); //undefined

/*  自製特殊情況2 */
function sayHiToPeople(name) {
  return console.log("你好" + name);
}
console.log(sayHiToPeople());

/*  特殊情況in class */

function calculate(radius) {
  radius * radius;
}
let result = calculate(5) + calculate(5);
console.log(result); // 得到NaN  undefined+undefined=NaN
/*        轉換Celsius to Fahrenheit   */
//        攝氏溫標（°C） 華氏溫標（°F）
//        °F = °C * 1.8 + 32

function convertor(c) {
  return c * 1.8 + 32;
}
let input = Number(prompt("請輸入攝氏溫度"));
window.alert("經換算後得到" + convertor(input) + " °F");

// 懶得考慮絕對零度以下了
