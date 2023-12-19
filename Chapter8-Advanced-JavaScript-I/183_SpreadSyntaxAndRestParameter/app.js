/*                Spread Syntax                  */
const parts = ["手", "腳"];
const otherParts = ["頭", "身體", ...parts];
console.log(otherParts); //[ '頭', '身體', '手', '腳' ]

// 可用來複製array
// copy by reference

const arr = [1, 2, 3];
const arr2 = [...arr];
console.log(arr2); // [1,2,3]
arr2.pop();
console.log(arr2); // [1,2]
console.log(arr); // [1,2,3]
/*         屬於shallow copy 所以要小心primitive以外的對象          */
let Oni = {
  name: "oni",
  age: 25,
};
arr.push(Oni); //const 但是，陣列可以更動內容 ! 只要不換新陣列替代
console.log("arr", arr);
let arr3 = [...arr];
console.log("arr3", arr3);
arr3[3].fami = "umi";
// 明明只更動arr3[3] Oni，但是 arr的Oni也被更改了。
// 因為Oni 只複製參照。
arr3[2] = 10;
// 若更改primitive 資料，arr的數字3 不會被連動。
console.log("arr3", arr3);
console.log("arr", arr);

/* 使用Spread Syntax 串聯 */
let nums1 = [1, 2, 3];
let nums2 = [4, 5, 6];
console.log([...nums1, ...nums2]);

/*                 Spread Syntax 應用在function                          */

function sum(x, y, z, a, b, c) {
  return x + y + z + a + b + c;
}
let array = [1, 2, 3, 10, 10, 10, 20];
console.log(sum(array[0], array[1], array[2], 1, 1, 1));
// 或者
console.log(sum(...array, 222));

/*                RestParameter 應用在function                          */
// 壓縮剩餘的參數到某一個array變數 (param)

function sum2(a, ...args) {
  let sum = 0;
  sum += a;
  console.log("a: ", a); //100
  args.forEach((e) => {
    sum += e;
  });
  return sum;
}

console.log(sum2(100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
