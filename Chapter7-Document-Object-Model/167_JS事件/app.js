/*                   JS Events                         */
/*            JS Events           */
console.log("------------ JS Events ----------");
let btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e);
});
console.log("------------ keydownEvnet ----------");
window.addEventListener("keydown", (e) => {
  console.log(e);
});

console.log("------------ PreventDefault ----------");
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); //阻止預設行為
  if (window.confirm("確認提交?")) {
    form.submit();
  } else {
    console.log("已取消提交");
  }
});
