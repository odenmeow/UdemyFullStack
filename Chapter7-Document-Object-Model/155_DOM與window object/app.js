/*             window             */
// console.log(this);
// console.log(window); //系統隱含的;
/*             alert             */
// window.alert("效果一樣");
// alert("效果一樣");

/*             addEventListener()             */
// 跳過 後續會說

/*             setInterval()             */
function sayHelloInterval() {
  console.log("你好");
  console.log("oni");
}
let interval = window.setInterval(sayHelloInterval, 2000);
/*             clearInterval()             */
window.clearInterval(interval);

/*            window Object 概念          */
let Umi = {
  name: "Umi",
  age: 15,
};
let Oni = {
  name: "oni",
  age: 25,
  sis: Umi,
};
console.log(Oni.sis.name); // "Umi"
/*            window Object - console          */

console.error("RED文字 表示ERR");
/*            window Object - document          */
console.log(window.document);
