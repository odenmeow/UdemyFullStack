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

console.log("-----------4. calc_byManual---------");
/*求s=a+aa+aaa+aaaa+aa...a的值，其中a是小於10的數字，相加的項數為n。
例如，當a = 2，n=5時，s=2+22+222+2222+22222。若a  =2, n = 3，
則輸出結果的形式如：2+22+222 = 246。
編寫一個名為calc的函式，參數為a與n，回傳值為s。*/
function calc_byFunction(units, terms) {
  let arr = [];
  for (let i = 0; i < terms; i++) {
    let numberText = "";
    for (let j = 0; j <= i; j++) {
      numberText += Number(units);
    }
    arr.push(numberText);
  }
  console.log(arr);
  let summary = 0;
  do {
    summary += Number(arr.pop());
  } while (arr.length > 0);
  console.log(summary);
}
function calc_byManual(units, terms) {
  let sum = 0;
  for (let i = 0; i < terms; i++) {
    let number = units / 10; //第一項=*1
    for (let j = 0; j <= i; j++) {
      number = number * 10;
      sum += number;
    }
  }
  console.log(sum);
}

calc_byManual(2, 3); // returns 246
calc_byManual(8, 5); // returns 98760
console.log("-----------4. calc_byFunction---------");
calc_byFunction(2, 3); // returns 246
calc_byFunction(8, 5); // returns 98760

console.log("-----------5. shuffle---------");
/*1. 編寫一個名為"shuffle()”的函數，唯一的參數為一個array of integers，
return type也是array of integers，返回的array與參數array的元素相同，
但元素順序為隨機排序的結果。
*/

function shuffle(arr) {
  //[0,1) *4 就會 0,1,2,3     *10  0,~9

  let ranNum;
  let randArr = [];
  let times = arr.length;
  while (arr.length) {
    ranNum = Math.floor(Math.random() * arr.length);
    randArr.push(arr[ranNum]);
    arr.splice(ranNum, 1);
  }

  console.log(randArr);
}

shuffle([2, 11, 37, 42]);
// returns 一個經過洗牌後的 array。
// 可能是[42, 11, 37, 2]

console.log("_----splice");
const months = ["Jan", "March", "April", "June"];
months.splice(1, 1);
console.log(months);

console.log("-------------shuffle SWAP----------------");

function shuffle_Swap(arr) {
  let currentIndex = arr.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  // 好像做到>0就可以，因為最後一個自己跟自己交換
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Swap it with the current element.
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return console.log(arr);
}
shuffle_Swap([2, 11, 37, 42]);
