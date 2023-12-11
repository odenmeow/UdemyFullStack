/*       return          */

function print100() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i == 5) {
      return;
    }
  }
}
print100();
/*       nestedloop          */
console.log("-----nestedloop---------");
for (let i = 0; i < 3; i++) {
  for (let j = 5; j < 7; j++) {
    console.log(j);
  }
}
console.log("-----nestedloop2---------");
let counter = 0;
for (let i = 0; i < 30; i++) {
  for (let j = 0; j < 70; j++) {
    counter++;
  }
}
console.log("計算了" + counter + "次"); // 0~29 =30 * 70 =2100
/*               break                 */

console.log("-----break---------");

for (let i = 0; i < 100; i++) {
  console.log(i);
  if (i == 10) {
    break;
  }
}
console.log("-----NestedLoopbreak---------");

// 不想寫了 就是break只會退出一層 loop
// return 才會退出

let count = 0;
for (let i = 0; i < 30; i++) {
  for (let j = 0; j < 70; j++) {
    count++;
    if (count == 100) {
      break;
    }
  }
}
console.log(count); //2060 因為 到100退出 還剩40還沒++

console.log("-----return---------");
let count2 = 0;
for (let i = 0; i < 30; i++) {
  for (let j = 0; j < 70; j++) {
    count2++;
    if (count2 == 100) {
      // return;   需要是function的巢狀迴圈才有效
    }
  }
}
console.log(count2); //2060 因為 到100退出 還剩40還沒++
console.log("-----continue---------");

for (let i = 0; i < 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}
