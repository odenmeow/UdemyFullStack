console.log("start"); //sync 同步 所以先執行了

process.nextTick(function () {
  // 優先層級最高的queue
  console.log("nextTick1");
});

setTimeout(function () {
  // 普通層級
  console.log("setTimeout");
}, 0);

// 14本身建造出來是synchronous 同步。
new Promise(function (resolve, reject) {
  // 這邊的匿名函數是會被自動執行的
  console.log("promise");
  resolve("resolve");
}).then(function (result) {
  // 後來才會
  console.log("promise then");
});

// IIFE async 呼叫是同步，直接開始執行該函數內容
// 並不是callbackfn 所以直接run
(async function () {
  console.log("async");
})();

setImmediate(function () {
  console.log("setImmediate");
});

process.nextTick(function () {
  console.log("nextTick2");
});

console.log("end");
