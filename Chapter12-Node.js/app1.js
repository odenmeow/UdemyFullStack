// (function (exports, require, module, __filename, __dirname) {
//   // Module code actually lives in here
// })(); //IIFE

console.log("這是app1.js文件");
let name = "oni";
require("./app2");
// 上面這個函數幫我們丟進去 node.js提供的第二個參數
// 由於使用IIFE 所以不會被汙染變數!!!

console.log(__filename);
console.log(__dirname);
