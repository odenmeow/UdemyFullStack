/*****透過await得到就是完整Response物件而非Promise物件********/
// async function fetchProduct() {
//   const response = await fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
//   );
//   console.log(response);
// }
// fetchProduct();
/*****特殊規則*******/
// async function myFunction() {
//   return 10;
// }
// let promise = myFunction(); //得到Promise物件
// promise.then((data) => {
//   console.log(data); //自動帶入參數10
// });

/*****搭配JSON()******/
// async function fetchProduct() {
//   try {
//     const response = await fetch(
//       "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (e) {
//     // 手動抓出錯誤 而不是依賴Promise chain.catch
//     console.log(e);
//   }
// }
// fetchProduct();

/************開始下面自製內容之前******************* */
// function request() {
//   return new Promise((resolve, reject) => {
//     // 模拟异步操作，比如向服务器发送请求
//     setTimeout(() => {
//       // 假设遇到了一个错误情况
//       const error = new Error("Operation failed");
//       reject(error); // 使用 reject 拒绝 Promise，并传递错误对象
//     }, 1000);
//   });
// }

// // 使用 Promise
// request()
//   .then((result) => {
//     // 如果操作成功，这里的代码将不会执行，因为 Promise 被拒绝了
//     console.log(result);
//   })
//   .catch((error) => {
//     // 捕获 Promise 的拒绝状态，并处理错误
//     console.error("Error:", error.message); // 输出错误信息
//   });
/************開始下面自製內容之前******************* */

//  以下為google後增加的內容補充
function request(num) {
  // 模擬接口請求
  return new Promise((resolve) => {
    //該承諾執行此匿名函數
    // 成功的時候會調用resolve
    // 失敗調用reject 但這邊沒寫、暫時沒關係先忽略
    setTimeout(() => {
      resolve(num * 2); // 如果成功執行完畢後 回傳結果 到下面res1的參數位置
    }, 1000);
  });
}
// 這邊的1跟2 是 數字而不是時間
// 帶入 30 顯示 60 ，一樣2秒就看得到
// 秒數是因為前者執行要等待 1秒 ，自己也要1秒
request(1).then((res1) => {
  console.log(res1); // 1秒後 輸出 2

  request(2).then((res2) => {
    console.log(res2); // 2秒後 輸出 4
  });
});
async function fn() {
  const res1 = await request(5); //花費1秒  res1=10
  const res2 = await request(res1); //花費1秒
  console.log(res2); // 2秒後輸出 20
}
fn();
console.log("看看我有沒有先印出來，後面才是數字");
