// 创建 Promise 对象，并使用 resolve 方法将其解决为成功状态
// const promise = new Promise((resolve, reject) => {
//   console.log("你好"); //  這邊是建立的時候就會順便自動執行的部分
//   resolve("Success!"); // 這不是執行這是回傳參數幫我們塞到then 的參數那邊
//   // 在這邊return沒用 只能當作中斷函數往下執行的operator而已
// });

// // 使用 then 方法注册在成功状态下要执行的回调函数
// promise.then((result) => {
//   console.log(result); // 输出：Success!
// });

// async function myFunction(){
//     return 10;
// }
// let pp=myFunction();  //得到Promise物件
// pp.then(data=>{
//     console.log(data); //自動帶入參數10
// })

/***     --------------請先熟讀以上 -1  ------------------------------*/

// let balance = 0; //shared resource

// const randomDelay = () => {
//   // 回傳是一個Promise物件
//   // 如果執行該Promise物件的.then(param=>{})方法
//   // resolve參數是 如果想要then 自動帶入參數
//   return new Promise((resolve) => {
//     console.log(resolve); //[Function (anonymous)]
//     setTimeout(() => {
//       console.log("AAA");
//     }, Math.random() * 10000 + 1);
//     // 這邊如果說沒有人執行resolve() 則Promise物件處於pending
//     // 然後node.js可能會覺得一直等待、也沒計算時間應該真的沒有事情做
//     // 就自動關閉程式了
//     // 如果在這邊執行resolve() 則`RRRs`出現後0~10秒會出現`AAA`

//   });
//   // 上面這邊創建物件的時候就會開始直接自動執行! 我們提供的fn
//   // 所以setTimeout 會自動被執行，然後return無效，但也無所謂。
//   // 第二個resolve  有其意義，因為
//   // ，當隨機秒發生的時候 0.1秒~0.001秒
//   // Promise物件 也就是我們new的那個物件 內部因為執行了setTimeout這個第二個promise物件
//   // 所以要等待它完成
// };
// let p = randomDelay();
// p.then((x) => {
//   // 這邊裡面要執行 必須等p執行完畢 ，
//   // 並且p傳入的resolve 要被執行 也就是有人對他做 () 才會從pending變成success
//   // p 物件兩行 分別是console(resolve)跟setTimeout

//   console.log("RRRs");
// });

/***     --------------請先熟讀以上 -2  ------------------------------*/

let balance = 0; //shared resource
// 不用太看，就是延遲時間的裝置。
const randomDelay = () => {
  // 回傳是一個Promise物件
  // 如果執行該Promise物件的.then(param=>{})方法
  // resolve參數是 如果想要then 自動帶入參數
  return new Promise((resolve) => {
    console.log(resolve); //[Function (anonymous)]
    setTimeout(resolve, Math.random() * 100 + 1);
    // 上面的函數雖然也是Promise的一種，異步的一種，但是如果她沒被解決
    // 那麼外層的Promise就不會執行.then ，因此 我下面程式碼會等待一段時間。
  });
  // 上面這邊創建物件的時候就會開始直接自動執行! 我們提供的fn
  // 所以setTimeout 會自動被執行，然後return無效，但也無所謂。
  // 當隨機秒發生的時候 0.1秒~0.001秒，第二個resolve 會被Timout執行
  // 然後 Promise物件的狀態才會從Pending轉為success
  // Promise物件 也就是我們new的那個物件 內部因為執行了setTimeout這個第二個promise物件
  // 所以要等待它完成
};
/**         上面計時器共用 但是我先屏蔽  race Condition             */
// async function loadBalance() {
//   await randomDelay(); //等時間到達 0~0.1s
//   return balance;
// }
// async function saveBalance(value) {
//   await randomDelay();
//   balance = value;
// }

// async function sellGrapes() {
//   const balance = await loadBalance();
//   console.log(`賣葡萄前，帳戶${balance}`);
//   const newBalance = balance + 50;
//   await saveBalance(newBalance);
//   console.log(`賣葡萄後，帳戶${newBalance}`);
// }
// async function sellOlives() {
//   const balance = await loadBalance();
//   console.log(`賣橄欖前，帳戶${balance}`);
//   const newBalance = balance + 50;
//   await saveBalance(newBalance);
//   console.log(`賣橄欖後，帳戶${newBalance}`);
// }

// /** 由於讀取錢跟存錢都要花時間 所以互相會對同一個變數產生錯誤 */
// // 持有舊訊息、並且以此為依據更改 所以出錯。
// // 時間差 常常交錯而過 導致錯誤
// async function main() {
//   await Promise.all([sellGrapes(), sellOlives()]);
//   const balance = await loadBalance();
//   console.log(`兩者都賣光後金額為${balance}`);
// }
// main();

/******下面透過MUTEX 解決race condition  */

let mutex = Promise.resolve(); //return fulfilled promise
async function loadBalance() {
  await randomDelay(); //等時間到達 0~0.1s
  return balance;
}
async function saveBalance(value) {
  await randomDelay();
  balance = value;
}

async function sellGrapes() {
  mutex = mutex.then(async () => {
    const balance = await loadBalance();
    console.log(`賣葡萄前，帳戶${balance}`);
    const newBalance = balance + 50;
    await saveBalance(newBalance);
    console.log(`賣葡萄後，帳戶${newBalance}`);
  });
  // return的東西會變成後續.then的參數
  return mutex;
}
async function sellOlives() {
  mutex = mutex.then(async () => {
    const balance = await loadBalance();
    console.log(`賣橄欖前，帳戶${balance}`);
    const newBalance = balance + 50;
    await saveBalance(newBalance);
    console.log(`賣橄欖後，帳戶${newBalance}`);
  });
  return mutex;
}

/** 由於讀取錢跟存錢都要花時間 所以互相會對同一個變數產生錯誤 */
// 持有舊訊息、並且以此為依據更改 所以出錯。
// 時間差 常常交錯而過 導致錯誤
async function main() {
  // 下面會同時啟用 賣葡萄跟賣水果，如果他們有順序地賣就不會出事
  await Promise.all([sellGrapes(), sellOlives()]);
  const balance = await loadBalance();
  console.log(`兩者都賣光後金額為${balance}`);
}
main();

// 心得總結 : 我覺得例子不夠優秀，不太能看出其優勢，只能說賣東西被迫排隊。
