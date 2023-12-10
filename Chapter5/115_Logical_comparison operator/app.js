/*          logical, comparison operator            */
/*            ==             */
console.log("    ==    ");
console.log(3 == 3);
console.log(3 == 5);

/*            ===             */
console.log("    ===    ");
console.log(3 == "3"); //true
console.log(3 === "3"); //false
console.log(3 === 5 - 2); //true 有優先順序 ===比較後面才做;
/**    加碼  === 使用變數    **/
let x = "3";
let y = "3";
console.log(x === y); // true

/*            && || Logical Op             */
console.log(1 || 0); // 1
console.log(1 && 0); // 0
console.log(1 && 1); // 1
console.log(true && false); //false
// 一個回傳 true false 一個回傳 1或0

/** 混搭 0 1 true false && || 會怎樣?    **/
console.log("-------混搭 0 1 true false && || 會怎樣?-------");
/*  或運算|| */
// 第一個值為真  直接回傳第一個值 !
// 第一個值為假  直接回傳第二個值 !
console.log(0 || true); //true
console.log(1 || true); //1
console.log(true || 0); //true
console.log(true || 1); //true
console.log("----4/16----");
console.log(1 || false); //1
console.log(0 || false); //false
console.log(false || 1); //1
console.log(false || 0); //0
/*  and運算&& */
// 第一個值為真  直接回傳第2個值 !
// 第一個值為假  直接回傳第1個值 !
console.log("----8/16----");
console.log(0 && true); //0
console.log(1 && true); //true
console.log(true && 0); //0
console.log(true && 1); //1
console.log("----12/16----");
console.log(0 && false); //0
console.log(1 && false); //false
console.log(false && 1); //false
console.log(false && 0); //false

/*            結合邏輯跟比較             */
console.log("------結合邏輯跟比較 -----");
console.log(5 > 2 && 100 > 5);
