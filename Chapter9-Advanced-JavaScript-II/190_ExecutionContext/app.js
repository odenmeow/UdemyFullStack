/*              Execution context                 */

console.log(window);
// console.log("nihow" + this);

let a = 3;
let result = area(a);
console.log(result);

function area(s) {
  // function Execution Phase
  // 1. creation phase
  // s=3
  // scope, this 指向 WindowObject
  // hoisting
  return s * s; // 計算 s 的平方並返回結果
}

// JavaScript Execution Context:

// 1. Creation Phase:
//    1.1 Global Object
//    1.2 先不管 (scope)
//    1.3 this keyword (如果是瀏覽器 那就綁window 如果node.js那可能 {} 總之綁定Global OBJ)
//    1.4 Variable Initialization:
//        - a: undefined
//        - result: undefined
//        - area: function

// 2. Execution Phase:
//    - a is assigned the value 3
//    - The function area(s) calculates the square of its parameter s
//    - result gets assigned the value 9
