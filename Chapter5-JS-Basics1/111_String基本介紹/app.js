/*     字串             */
// let _name = "oni";
// console.log(_name);

// let sentence = "he'sagood guy";

let firstname = "oni";
let last_name = "lin";
console.log(firstname + last_name);
// 得到onilin 沒空格^ v ^

/*         文字+數字 會怎樣?  1      */

let a = 10;
let b = "10";
console.log(a + b); // 1010
console.log(10 + a + b); // 2010

/*         文字+數字 會怎樣?  版本2      */

let n1 = 20;
let n2 = 30;
let name = "json";
let n3 = 10;
let n4 = 15;
//猜看看?
console.log(n1 + n2 + name + n3 + n4);
// 結果1 50json25
// 結果2 50json1015   >>>
