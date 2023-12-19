/*               JavaScript String Comparison                 */

console.log("b" > "a000202023b"); //true

console.log("12" < "2"); //true

console.log("11" + 5);
console.log("11" + "5" + 5);
console.log("11" * 0 + 5);

// 1.      唯有 * 這個 operator 讓  "字串" 包含空字串
// 去乘 [ "" ,'', false,  null,]  =  0 數字
// 去乘 [ NaN , undefined ]  = [NaN,undefined]

// 2.       字串 + 數字 一律得到 連接行為而已
