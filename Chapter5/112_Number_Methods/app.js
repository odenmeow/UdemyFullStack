/*         Number Methods             */
let age = 25;
console.log(age.toString() + age);
console.log(typeof age.toString());
// function也是物件 ，故 age.toString 可以被印出 所以小心點喔，後續應該會教。

/*         toFixed(n)           */

const pi = 3.1415926;
console.log(pi.toFixed(3));
console.log(typeof pi.toFixed(3));
/*           function也是物件           */
let r = 11;
let s = r.toString;
console.log(s);
// 無法使用s()，除非是r.toString() 才有得到11 但是如果function就GG。
console.log(s.call(5));

/*           0.1+0.2 !=0.3           */
if (0.1 + 0.2 != 0.3) {
  console.log("不等於哦");
  console.log(0.1 + 0.2);
  //得到 0.30000000000000004
}
