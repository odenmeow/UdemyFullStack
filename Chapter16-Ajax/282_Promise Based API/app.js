const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

/*      throw 錯誤 新增p tag的alarm寫法      */
function alarm(name, delay) {
  if (isNaN(Number(delay))) {
    throw new TypeError("型態錯誤");
  }
  setTimeout(() => {
    output.innerHTML = name + "起床";
  }, delay);
}

button.addEventListener("click", (e) => {
  try {
    alarm(name.value, delay);
  } catch (error) {
    // 代表delay型態錯誤
    console.log(e.target);
    let existP = document.querySelector("p");
    if (existP) {
      existP.innerText += "?";
    } else {
      let p = document.createElement("p");
      p.innerText = "不可以丟NaN過來";
      e.target.parentElement.insertBefore(p, e.target);
      delay.append("錯誤");
    }
  }
});

/*       Promise寫法       */
// return Promise object
// pending 的 delay秒=> fulfilled
// if delay < 0 則 => rejected
// function alarm(name, delay) {
//   // return Promise object
//   // pending 的 delay秒=> fulfilled
//   // if delay < 0 則 => rejected
//   return new Promise((resolve, reject) => {
//     if (isNaN(Number(delay))) {
//       reject(new TypeError("型態錯誤"));
//     }
//     if (delay < 0) {
//       reject("delay不能小於0");
//     } else {
//       setTimeout(() => {
//         resolve(name + "起床");
//       }, delay);
//     }
//   });
// }
// button.addEventListener("click", (e) => {
//   let promiseObject = alarm(name.value, delay.value);
//   promiseObject
//     .then((resolve) => {
//       output.innerHTML = resolve;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// /*         await async版本         */
// button.addEventListener("click", async () => {
//   //只要不再是pending 程式就會繼續往下是
//   // 所以reject resolve 都會讓awiat 不繼續等待
//   try {
//     let result = await alarm(name.value, delay.value);
//     output.innerText = result;
//   } catch (errorMessage) {
//     console.log(errorMessage);
//   }
// });
