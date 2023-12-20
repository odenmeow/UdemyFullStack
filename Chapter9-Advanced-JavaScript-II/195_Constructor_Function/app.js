/*            Constructor Function                */

/*複習、this 在方法會指向外圍物件 */
//  另外我還記得 arrow fn 沒有自己的this 所以會使用其他傳統fn的this對象
//  如果一直往外找 找不到，則會使用最外圍的global fn 的this
let oni_origin = {
  name: "Oni",
  walk() {
    console.log(this.name + "走路");
  },
};
oni_origin.walk();
/*              目的 => 為了產生相似物件                 */
// 通常Constructor  fn 開頭都用大寫
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.walk = function () {
    console.log(this.name + "走路中");
  };
}
// 屬於變數 用小寫
let oni = new Person("Oni", 25);
let umi = new Person("Umi", 16);
console.log(oni);
console.log(umi);
umi.walk();
console.log(oni.walk == umi.walk);
console.log(undefined == undefined); //true
