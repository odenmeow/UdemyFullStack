/*       FOR          */

for (let i = 0; i < 11; i++) {
  console.log(i); // 0~10
}
console.log("------------");
for (let i = 0; i < 11; i += 3) {
  console.log(i); // 0,3,6,9
}
console.log("------------");
/*       WHILE           */

while (false) {
  // 千萬不要改true 瀏覽器會當機= =
  console.log("執行中");
}
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
console.log("---dowhile-1-----");

/*      DO WHILE           */
// 無論如何會先做一次
let x = 0;
do {
  console.log(x);
  x++;
} while (x < 5);

console.log("---dowhile-2-----");
do {
  console.log(x);
  x++; // 4進去 出來變成5
} while (x < -5); // 5 沒有小於 -5

for (x; x < 10; x++) {
  console.log(x);
}
