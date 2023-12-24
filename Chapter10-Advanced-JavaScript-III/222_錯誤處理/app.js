/*             錯誤處理          */

try {
  whatever();
  // console.log("hihi");
} catch (e) {
  // console.log("有錯誤" + e);
  // console.log(e);
  if (e instanceof TypeError) {
    console.log("發生TypeError");
  } else if (e instanceof ReferenceError) {
    console.log("發生ReferenceError");
  } else {
    console.log("發生其他種類的error");
  }
} finally {
  // 錯誤與否都會執行
  console.log("一定存在");
}
// 發生錯誤會自動被做成 Error Object
// TypeError , ReferenceError, SyntaxError

/*           instanceof  為...的instance                       */
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }
// let milk = new Person("cow");
// console.log(milk instanceof Person);
