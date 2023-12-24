/*          客製化錯誤          */

class NotArrayError extends TypeError {
  constructor(message) {
    super(message);
  }
  printSolution() {
    return "確定參數為array再執行!";
  }
}

function sumArray(arr) {
  // Array Class static method
  if (!Array.isArray(arr)) {
    // throw "參數需要為array";
    throw new NotArrayError("參數並非array");
    // 使用TypeError 則會不僅僅只告訴你文字，而且還能知道錯的位置、更詳細。
  }
  let result = 0;
  arr.forEach((element) => {
    result += element;
  });
  return result;
}
console.log(sumArray([1, 2, 3, 4, 5]));
// console.log(sumArray("你好")); //沒有forEach 故，出錯。

try {
  sumArray("hi");
} catch (e) {
  // console.log(e);
  console.log(e.printSolution());
}
