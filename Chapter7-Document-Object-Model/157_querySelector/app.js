/*             createElement             */
// 上隻影片他沒講到，這邊講。

let e = document.createElement("h1");
console.log(e);

/*              querySelector                  */

let first_found = document.querySelector(".my-p");
console.log(first_found);

/*              querySelector                  */

let foundElements = document.querySelectorAll(".my-p");
console.log(foundElements);

/*              HTMLCollection是動態         */
/*              NodeList是靜態         */
let hellos = document.getElementsByClassName("hello");
let helloss = document.querySelectorAll(".hello");

console.log(hellos.length);
console.log(helloss.length);

let body = document.querySelector("body");
let p = document.createElement("p");
p.innerText = "this is a new p";
p.classList.add("hello");
body.appendChild(p);
console.log("改變DOM之後，沒做二次get或query 。");
console.log("document.getElementsByClassName('hello')得: " + hellos.length);
console.log("document.querySelectorAll('.hello')得: " + helloss.length);
