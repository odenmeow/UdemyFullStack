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
function convertor(grade) {
  switch (grade) {
    case "A":
      return 4.0;
    case "A-":
      return 3.7;
    case "B+":
      return 3.4;
    case "B":
      return 3.0;
    case "B-":
      return 2.7;
    case "C+":
      return 2.4;
    case "C":
      return 2.0;
    case "C-":
      return 1.7;
    case "D+":
      return 1.4;
    case "D":
      return 1.0;
    case "D-":
      return 0.7;
    case "F":
      return 0.0;
    default:
      return 0;
  }
}
/* 以下是我額外新增的，讓輸入的時候可以算出GPA ，而不是只有按選單才能算出*/
let allCredits = document.querySelectorAll(".class-credit");
allCredits.forEach((credit) => {
  credit.addEventListener("input", (e) => {
    setGPA();
  });
});
function setGPA() {
  let formlength = document.querySelectorAll("form").length;
  let credits = document.querySelectorAll(".class-credit");
  let selectedGrade = document.querySelectorAll("select");
  let sum = 0; //分子
  let creditSum = 0; //分母
  for (let i = 0; i < credits.length; i++) {
    creditSum += Number(credits[i].value); // 空字串+ "5" =string
    // console.log("空字串number", Number("")); // 得到0 = number
  }
  // console.log(0 * 不輸入== credits[i].valueAsNumber == NaN ); //NaN
  // console.log(0 * false); //0
  // console.log(0 * ""); //0
  // console.log(0 * null); //0
  // console.log(0 * NaN); //NaN
  // console.log(0 * undefined); //NaN

  // console.log("-----", "" * 5 + "2", typeof ("" * 5 + "2")); //string = "02"
  // console.log("-----", "" * 5 + 2, typeof ("" * 5 + 2));    //number  = 2
  // console.log("-----", "" * 5, typeof ("" * 5));            //number  = 0

  for (let i = 0; i < formlength; i++) {
    // 不填入得到空字串 "" ； 填入5得到  字串 "5"
    // console.log("valueAsNum NaN?:", isNaN(credits[i].value));
    sum += credits[i].value * convertor(selectedGrade[i].value);
  }

  //   console.log(sum, creditSum);
  //   console.log(sum / creditSum);
  let gpa = document.getElementById("result-gpa");
  if (creditSum != 0) {
    gpa.innerText = (sum / creditSum).toFixed(2);
  } else {
    gpa.innerText = "0.00";
  }
}
