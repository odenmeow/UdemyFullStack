/*                       Element Object 1                      */
/*            addEventListener          */

let mybtn = document.querySelector("#my-btn");
mybtn.addEventListener("click", () => {
  alert("你點了我的btn");
});
/*            addEventListener          */
console.log("----------appendChild--------------");
let body = document.querySelector("body");
let myH1 = document.createElement("h1");
// innerHTML 標籤會被讀做標籤 , innerText 標籤也是純文字
// myH1.innerText = "我是附加的H1";
myH1.innerHTML = "<a href='https://www.google.com'>Google</a>";
body.appendChild(myH1);
/*                     children                                 */

body = document.querySelector("body");
console.log("----------body--------------");
console.log(body);
console.log("----------body.children--------------");
console.log(body.children); // HTMLCollection
console.log("----------body.children.children--------------");
console.log(body.children[0].children); // 物件[0] 才有children 才有另一個HTMLCollection

/*                     childNodes 被跳過ㄌ                                 */

/*                     parentElement                                 */
console.log("----------parentElement--------------");
let firstP = document.querySelector("p");
console.log("----------parentElement=div--------------");
console.log(firstP.parentElement);
console.log("----------parentElement.parentElement=body--------------");
console.log(firstP.parentElement.parentElement);

/*                     classList                                 */
// 紀錄找到的元素所持有的class列表
console.log("----------classList--------------");
firstP = document.querySelector("p");
console.log(firstP.classList);
firstP.classList.add("blue");
console.log(firstP.classList);

firstP.addEventListener("click", () => {
  firstP.classList.toggle("blue"); // 有blue就讓他變沒有，沒有blue就讓他有。
  console.log(firstP.classList);
});

console.log(firstP.classList.contains("red")); // true
