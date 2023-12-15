/*                   EventBubbling                      */
/*            EventBubbling          */
console.log("------------EventBubbling----------");

let a = document.querySelector(".a");
let b = document.querySelector(".b");

a.addEventListener("click", () => {
  alert("A 事件監聽!");
});
b.addEventListener("click", (e) => {
  // e.stopPropagation();
  e.preventDefault();
  alert("B 事件監聽!");
});
