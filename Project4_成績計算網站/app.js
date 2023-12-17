// let hero = document.querySelector(".hero");
// let slider = document.querySelector(".slider");
// let animation = document.querySelector("section.animation-wrapper");

// const time_line = new TimelineMax();

// //param 1是要控制的對象
// //param 2是duration
// //param 3是控制對象的原始狀態
// //param 4是控制對象的動畫結束後狀態
// //param 5提早進場
// time_line
//   .fromTo(
//     hero,
//     1,
//     { height: "0%" },
//     { height: "100%", ease: Power2.easeInOut } // 套件提供的功能
//   )
//   .fromTo(hero, 0.8, { width: "80%" }, { width: "100%" })
//   .fromTo(
//     slider,
//     1,
//     { x: "-100%" },
//     { x: "0%", ease: Power2.easeInOut },
//     "-=0.8"
//   )
//   .fromTo(animation, 0.3, { opacity: 1 }, { opacity: 0 });

// window.setTimeout(() => {
//   animation.style.pointerEvents = "none";
// }, 2100);

/*                  以上是動畫開場                                 */
// 避免enter直接送出表單
window.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
  }
});

// 防止form內部垃圾桶交出表單 (也防止所有默認按鈕行為)
let allBtns = document.querySelectorAll("button");
// 如果是HTMLCollection則不能forEach ， 除非透過Array.from(丟進來).forEach才能用
allBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

// 改變  選擇成績 選項opt對應顏色
let allSelects = document.querySelectorAll("select");
// console.log(allSelects);
// allSelects.forEach((select) => {
//   console.log(select);
//   console.log(select.options);
//   console.log(select.options.length);
// });
// 以上註解是我自己練習用

allSelects.forEach((select) => {
  select.addEventListener("change", (e) => {
    // console.log(e.target);
    // console.log(e.target.value);
    setGPA();
    changeColor(e.target);
  });
});

function changeColor(target) {
  if (target.value == "A" || target.value == "A-") {
    target.style.backgroundColor = "lightgreen";
    target.style.color = "black";
  } else if (
    target.value == "B" ||
    target.value == "B-" ||
    target.value == "B+"
  ) {
    target.style.backgroundColor = "yellow";
    target.style.color = "black";
  } else if (
    target.value == "C" ||
    target.value == "C-" ||
    target.value == "C+"
  ) {
    target.style.backgroundColor = "orange";
    target.style.color = "black";
  } else if (
    target.value == "D" ||
    target.value == "D-" ||
    target.value == "D+"
  ) {
    target.style.backgroundColor = "red";
    target.style.color = "white";
  } else if (target.value == "F") {
    target.style.backgroundColor = "gray";
    target.style.color = "white";
  } else {
    target.style.backgroundColor = "gray";
    target.style.color = "white";
  }
}
function setGPA() {}
