/*                       Element Object 2                      */
/*           getAttribute          */
console.log("----------getAttribute--------------");

let a = document.querySelector("a");
console.log(a.getAttribute("title"));
console.log(a.getAttribute("href"));

console.log("----------remove--------------");

let btn = document.querySelector("#disappear");
btn.addEventListener("click", () => {
  // a.remove("href");  // 不是attr消失而是node本身
  // a.removeAttribute("href");
  a.remove();
  // a.toggleAttribute 也有~
});

console.log("----------style--------------");
// btn.style.backgroundColor = "green";
// btn.style.color = "white";
btn.style = "background-Color:gray;color:white;";
