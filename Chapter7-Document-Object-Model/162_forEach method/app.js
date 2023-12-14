/*          ForEach            */
//

let myLuckyNumbers = [1, 2, 3, 4, 5, 6, 7];
// for (let i = 0; i < myLuckyNumbers.length; i++) {
//   myLuckyNumbers[i] = myLuckyNumbers[i] + 3;
// }
// console.log(myLuckyNumbers);
console.log("---------------拆開的寫法 -----------------");
/*              拆開的寫法                   */
function plus3(n) {
  console.log(n + 3);
}
myLuckyNumbers.forEach(plus3);
console.log("---------------放去內部的寫法 -----------------");
/*              放去內部的寫法                   */
myLuckyNumbers.forEach(function (n) {
  console.log(n + 3);
});
console.log("---------------內部箭頭的寫法 -----------------");

/*              內部箭頭的寫法                   */
myLuckyNumbers.forEach((e) => console.log(e + 3));

console.log(
  "---------------內部箭頭的寫法+ 帶入第二個參數+this-----------------"
);

/*              index 顯出，this是 Window物件                  */
myLuckyNumbers.forEach(
  (element, index) => console.log(this, ":", index, ":", element + 3)
  //避免使用 + 來連接   否則this會變成字串 類似 [object Window]
);
console.log(
  "---------------內部傳統的寫法+ 帶入第二個參數+this -----------------"
);

/*              index 顯出，this是 Window物件 (沒直屬父親)                 */
myLuckyNumbers.forEach(function (element, index) {
  console.log(this, ":", index, ":", element + 3);
});
// 你還是得到Window 而不是呼叫者，因為它內部直接幫你呼叫function，
// 沒有直屬父親，所以this指向Global或者Window
