/*               Primitive Data Type                  */
let myNamePrimitive = "Oni";
console.log(typeof myNamePrimitive); //string 原始型態

let myNameObject = new String("Oni");
console.log(typeof myNameObject); // object 物件!!!!

/* 開始講超綱的東西 測量 */
const { performance } = require("perf_hooks"); //node.js
let startTime = performance.now();
for (let i = 0; i < 10000000; i++) {
  // let a = new String("asdasdl;kjklgjdgklvbnm,x.as");
  let a = "asdasdl;kjklgjdgklvbnm,x.as";
}
console.log(performance.now() - startTime);
