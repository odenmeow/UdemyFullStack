const http = require("http");
const fs = require("fs");
let myfilePath = "C" + __dirname.substring(1); //0不需要，從1開始擷取

// request obj  ,  response obj
const server = http.createServer((req, res) => {
  //   console.log(req.headers);
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  //   res.write("歡迎來到我的網頁");
  //   res.end();
  //   console.log(req.url); // 請求的url是什麼

  if (req.url == "/") {
    res.write("歡迎來到我的網頁");
    res.end();
    // 如果沒有這個會導致轉圈圈的問題，瀏覽器收不到回應完成的訊號
    // 必須一個一個增加，因為asynchronous 會導致可能先end() 結果還沒送出檔案
  } else if (req.url == "/anotherPage") {
    res.write("歡迎來到另一個頁面");
    res.end();
    // 如果沒有這個會導致轉圈圈的問題，瀏覽器收不到回應完成的訊號
    // 必須一個一個增加，因為asynchronous 會導致可能先end() 結果還沒送出檔案
  } else if (req.url == "/myFile") {
    fs.readFile(myfilePath + "/myFile.html", (e, data) => {
      if (e) {
        res.write("存取html文件出錯");
        res.end();
        // 如果沒有這個會導致轉圈圈的問題，瀏覽器收不到回應完成的訊號
        // 必須一個一個增加，因為asynchronous 會導致可能先end() 結果還沒送出檔案
      } else {
        res.write(data);
        res.end();
        // 如果沒有這個會導致轉圈圈的問題，瀏覽器收不到回應完成的訊號
        // 必須一個一個增加，因為asynchronous 會導致可能先end() 結果還沒送出檔案
      }
    });
  } else {
    res.write("不存在這頁面");
    res.end();
    // 如果沒有這個會導致轉圈圈的問題，瀏覽器收不到回應完成的訊號
    // 必須一個一個增加，因為asynchronous 會導致可能先end() 結果還沒送出檔案
  }
});

server.listen(3000, () => {
  console.log("正在3000運行中");
});
