/*  編寫一個名為mySort的函式，參數為一個array of numbers，
回傳值為一個將元素由小到大排序的array。   */

function mySort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        arr[i] = arr[i] ^ arr[j];
        arr[j] = arr[i] ^ arr[j]; // j=i(i^j)^j=i 因為 j^0=j
        arr[i] = arr[i] ^ arr[j]; // i=i(i^j)^j(i)=j    i,j(實際內容)
      }
    }
  }
  console.log(arr);
}

mySort([17, 0, -3, 2, 1, 0.5]); // returns [-3, 0, 0.5, 1, 2, 17]
// [0, 17, -3, 2, 1, 0.5];
// [0, 17, -3, 2, 1, 0.5];
// [0, -3, 17, 2, 1, 0.5];
// [0, -3, 2, 17, 1, 0.5];

/*落地問題: 一球從h米高度自由落下，每次落地後反跳回原高度的一半，再落下。
求小球在第n次落地時，總共經過多少公尺？
編寫一個名為distance的函式，參數為h與n，回傳值為小球經過的總距離。 */

console.log("-------------落第------------");

function distance(journey, times) {
  let sum = journey;

  for (let i = 1; i < times; i++) {
    sum += journey;
    journey /= 2;
  }
  console.log(sum);
}
console.log(distance(100, 4)); // 275
console.log(distance(500, 7)); // 1484.375

/*打印出所有的"水仙花數"。所謂"水仙花數"是指一個三位數，其各位數字立方和等於該數本身。
例如：153是一個"水仙花數"，因為$153=1^3+5^3+3^3$，
或370也是水仙花數，因為$370=3^3+7^3+0^3$ */
console.log("-------------PPDI------------");

function PPDI(num) {
  for (let i = 100; i < 1000; i++) {
    let hundreds = Math.floor(i / 100);
    let tens = Math.floor((i - 100 * hundreds) / 10);
    let units = (i % 100) - tens * 10;
    let sum = 0;
    sum = Math.pow(hundreds, 3) + Math.pow(tens, 3) + Math.pow(units, 3);
    if (sum == i) {
      console.log(sum);
    }
  }
}
PPDI();
// 153
// 370
// 371
// 407
