// fs (file system)

const fs = require("fs");
const path = require("path");
let myfilePath = path.join(__dirname + "/myFile.txt");
myfilePath = "C" + myfilePath.substring(1); //0不需要，從1開始擷取

// console.log(__dirname);
// console.log(__filename);
// c:\CodeSForGit\2023WebFullStack\Chapter12-Node.js

// fs.writeFile(myfilePath, "今天很冷", (e) => {
//   if (e) {
//     throw e;
//   }
//   console.log("文件成功撰寫完畢");
// });
/*********    如果檔案存在              ************** */
fs.readFile(myfilePath, "utf8", (e, data) => {
  if (e) throw e;
  console.log(data);
});
/*********    如果檔案不存在              ************** */
fs.readFile("myfilePath", "utf8", (e, data) => {
  if (e) {
    console.log(e);
  }
  console.log(data); //undefined
});
