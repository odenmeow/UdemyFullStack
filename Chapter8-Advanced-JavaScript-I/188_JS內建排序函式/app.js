/*              JS內建排序函式                */

/*        JS內建排序函式        */

let myName = "Oni";
myName.toUpperCase();
console.log(myName);

let myArr = [5, 6, 4, 2, 1, 3, 13, 8, 9, 11, 15];
myArr.sort();
console.log(myArr);
// 默認按 字符串排序 所以
// [(1, 11, 13, 15, 2, 3, 4, 5, 6, 8, 9)];

myArr.sort((a, b) => a - b);
console.log(myArr);
// a-b 如果是負數  a前,b後
// 我們提供他比較的規則，如何比出大小就好，剩下它自己會實作排序

let names = ["Onini", "Umi", "Davinci", "Cate"];

names.sort((a, b) => {
  if (a.length > b.length) {
    return 1; // 1 代表 第二個參數要在後面
  } else if (a.length < b.length) {
    return -1; // -1 代表 第二個參數要在前面
  } else {
    return 0; // 保持不變
  }
});
console.log(names);
