/*               Switch                     */

// let num = prompt("請輸入1到5");

// if (num == "1") {88
//   alert("1");
// } else if (num == "2") {
//   alert("2");
// } else if (num == "3") {
//   alert("3");
// } else if (num == "4") {
//   alert("4");
// } else if (num == "5") {
//   alert("5");
// }

let num = prompt("輸入1到5");
switch (num) {
  case "1":
    alert("輸入了數字1");

  case "2":
    alert("輸入了數字2");

  case "3":
    alert("輸入了數字3");

  case "4":
    alert("輸入了數字4");
    break;
  case "5":
    alert("輸入了數字5");

  default:
    alert("沒有輸入1到5 我不會告訴你輸入了哪個數");
}
