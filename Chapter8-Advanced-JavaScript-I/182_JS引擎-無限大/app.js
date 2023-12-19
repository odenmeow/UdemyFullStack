/*                NaN / Infinity                  */
console.log(typeof Infinity); //number
console.log(typeof NaN); //number

console.log(5 / 0); //Infinity
/*                Array 連接                   */

let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
console.log(num1 + num2); // 1,2,34,5,6   括號也不見了
console.log(typeof (num1 + num2)); // string

console.log(num1.concat(num2)); //[1, 2, 3, 4, 5, 6];
