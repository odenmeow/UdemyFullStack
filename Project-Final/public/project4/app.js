let hero = document.querySelector(".hero");
let slider = document.querySelector(".slider");
let animation = document.querySelector("section.animation-wrapper");

const time_line = new TimelineMax();

//param 1是要控制的對象
//param 2是duration
//param 3是控制對象的原始狀態
//param 4是控制對象的動畫結束後狀態
//param 5提早進場
time_line
  .fromTo(
    hero,
    1,
    { height: "0%" },
    { height: "100%", ease: Power2.easeInOut } // 套件提供的功能
  )
  .fromTo(hero, 0.8, { width: "80%" }, { width: "100%" })
  .fromTo(
    slider,
    1,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=0.8"
  )
  .fromTo(animation, 0.3, { opacity: 1 }, { opacity: 0 });

window.setTimeout(() => {
  animation.style.pointerEvents = "none";
}, 2100);

/*                  以上是動畫開場                                 */
// 避免enter直接送出表單
window.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
  }
});

// 防止form內部垃圾桶交出表單 (也防止所有默認按鈕行為)
let allBtns = document.querySelectorAll("button"); //NodeList static 新增的按鈕要自己附加
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
function creditInputRestrictGPA() {
  let allCredits = document.querySelectorAll(".class-credit");
  allCredits.forEach((credit) => {
    credit.addEventListener("input", (e) => {
      if (e.target.value > 6) {
        e.target.value = 6;
      } else if (e.target.value < 0) {
        e.target.value = 0;
      }
      setGPA();
    });
  });
}
creditInputRestrictGPA();

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

//  課堂之間的個人插入 ( 數字不可自己輸入否則瀏覽器會讓我超出 0-6 )
//  寫在上面的allCredits的forEach那邊

function makeSelectTag() {
  var grades = [
    "",
    "A",
    "A-",
    "B+",
    "B",
    "B-",
    "C+",
    "C",
    "C-",
    "D+",
    "D",
    "D-",
    "F",
  ];
  let newSelect;
  newSelect = document.createElement("select");
  newSelect.setAttribute("name", "select");
  newSelect.classList.add("select");
  grades.forEach((g) => {
    var opt = document.createElement("option");
    opt.setAttribute("value", g);
    let textNode = document.createTextNode(g);
    opt.appendChild(textNode);
    newSelect.appendChild(opt);
  });
  return newSelect;
}
function makeTrashBtn() {
  let newBtn = document.createElement("button");
  newBtn.classList.add("trash-btn");
  let newI = document.createElement("i");
  newI.classList.add("fas");
  newI.classList.add("fa-trash");
  newBtn.append(newI);
  return newBtn;
}

function makeInput1() {
  let newInput1 = document.createElement("input");
  newInput1.setAttribute("type", "text");
  newInput1.setAttribute("list", "opt");
  newInput1.setAttribute("placeholder", "class category");
  newInput1.classList.add("class-type");
  return newInput1;
}
function makeInput2() {
  let newInput2 = document.createElement("input");
  newInput2.setAttribute("type", "text");
  newInput2.setAttribute("placeholder", "class number");
  newInput2.classList.add("class-number");
  return newInput2;
}
function makeInput3() {
  let newInput3 = document.createElement("input");
  newInput3.setAttribute("type", "number");
  newInput3.setAttribute("placeholder", "credits");
  newInput3.setAttribute("min", "0");
  newInput3.setAttribute("max", "6");
  newInput3.classList.add("class-credit");
  return newInput3;
}
// 增加表單 的功能製作
let addBtn = document.querySelector(".plus-btn");
addBtn.addEventListener("click", () => {
  let newForm = document.createElement("form");
  let newDiv = document.createElement("div");
  newDiv.classList.add("grader");

  //製作五個小元素 包含最後選單跟垃圾桶
  let newInput1 = makeInput1();
  let newInput2 = makeInput2();
  let newInput3 = makeInput3();
  let newSelect = makeSelectTag();
  let newBtn = makeTrashBtn();
  newInput3.addEventListener("change", () => {
    setGPA();
  });
  newSelect.addEventListener("change", (e) => {
    setGPA();
    changeColor(e.target);
  });
  newBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.parentElement.parentElement.style =
      "animation:scaleDown 0.3s ease forwards";

    e.target.parentElement.parentElement.addEventListener(
      "animationend",
      (e) => {
        e.target.remove();
        setGPA();
      }
    );
  });

  newDiv.appendChild(newInput1);
  newDiv.appendChild(document.createTextNode(" "));
  newDiv.appendChild(newInput2);
  newDiv.appendChild(document.createTextNode(" "));
  newDiv.appendChild(newInput3);
  newDiv.appendChild(document.createTextNode(" "));
  newDiv.appendChild(newSelect);
  newDiv.appendChild(document.createTextNode(" "));
  newDiv.appendChild(newBtn);
  newDiv.appendChild(document.createTextNode(" "));
  newForm.appendChild(newDiv);
  document.querySelector(".all-inputs").append(newForm);
  newForm.style.animation = "scaleUp 0.5s ease forwards";
});

let allTrash = document.querySelectorAll(".trash-btn");
allTrash.forEach((trash) => {
  trash.addEventListener("click", (e) => {
    console.log(e.target.parentElement.parentElement.classList.add("remove"));
  });
  let form = trash.parentElement.parentElement;
  form.addEventListener("transitionend", (e) => {
    e.target.remove();
    setGPA();
  });
});

// 排序演算法
let btnDescend = document.querySelector(".sort-descending");
let btnAscend = document.querySelector(".sort-ascending");
btnDescend.addEventListener("click", () => {
  handleSorting("descending"); // 大到小  降序
});
btnAscend.addEventListener("click", () => {
  handleSorting("ascending"); // 小到大  升序
});

function handleSorting(direction) {
  let graders = document.querySelectorAll("div.grader");
  // 不交換form 交換下面的div就好
  let objectArray = [];
  for (let i = 0; i < graders.length; i++) {
    let class_name = graders[i].children[0].value; // class category
    let class_number = graders[i].children[1].value; // class number
    let class_credit = graders[i].children[2].value; // class credit
    let class_grade = graders[i].children[3].value;
    console.log(class_name, class_number, class_credit, class_grade);
    if (
      !(
        class_name == "" &&
        class_number == "" &&
        class_credit == "" &&
        class_grade == ""
      )
    ) {
      let class_object = {
        class_name,
        class_number,
        class_credit,
        class_grade,
      };
      objectArray.push(class_object);
    }
  }

  // 取得objectArray之後 要把成績換成數字才能排序。
  for (let i = 0; i < objectArray.length; i++) {
    objectArray[i].class_grade_number = convertor(objectArray[i].class_grade);
  }

  objectArray = mergeSort(objectArray);
  if (direction == "descending") {
    objectArray = objectArray.reverse();
  }

  // 表單innerHTML 生成、插入數值、重新追加監聽。
  byTeacher_MakeFormByHTML(objectArray);
  // select監聽追加
  ReAppendSelectionListener();
  // credit監聽追加+數字上限追加+自動重算追加
  ReAppendCreditListener();
  // 垃圾桶功能重新追加、阻止垃圾桶送出表單
  ReAppendTrashListener();
}
function ReAppendSelectionListener() {
  // select監聽追加
  let allSelects = document.querySelectorAll(".select");
  allSelects.forEach((select) => {
    changeColor(select);
    select.addEventListener("change", (e) => {
      setGPA();
      changeColor(select);
    });
  });
}
function ReAppendCreditListener() {
  // credit監聽追加+數字上限追加+自動重算追加
  creditInputRestrictGPA();
  let allCredits = document.querySelectorAll(".class-credit");
  allCredits.forEach((credit) => {
    credit.addEventListener("change", (e) => {
      setGPA();
    });
  });
}
function ReAppendTrashListener() {
  // 垃圾桶功能重新追加、阻止垃圾桶送出表單
  let allTrash = document.querySelectorAll(".trash-btn");
  allTrash.forEach((trash) => {
    trash.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.parentElement.parentElement.style.animation =
        "scaleDown 0.5s ease forwards";
      e.target.parentElement.parentElement.addEventListener(
        "animationend",
        (e) => {
          e.target.remove();
          setGPA();
        }
      );
    });
  });
}
function byTeacher_MakeFormByHTML(objectArray) {
  let allInputs = document.querySelector(".all-inputs");
  allInputs.innerHTML = "";
  for (let i = 0; i < objectArray.length; i++) {
    allInputs.innerHTML += `<form>
      <div class="grader">
        <input
          type="text"
          class="class-type"
          placeholder="class category"
          list="opt"
          value="${objectArray[i].class_name}"
        />
        <input
          type="text"
          class="class-number"
          placeholder="class number"
          value="${objectArray[i].class_number}"
        />
        <input
          type="number"
          class="class-credit"
          placeholder="credits"
          min="0"
          max="6"
          value="${objectArray[i].class_credit}"
        />
        <select name="select" class="select">
          <option value=""></option>
          <option value="A">A</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B">B</option>
          <option value="B-">B-</option>
          <option value="C+">C+</option>
          <option value="C">C</option>
          <option value="C-">C-</option>
          <option value="D+">D+</option>
          <option value="D">D</option>
          <option value="D-">D-</option>
          <option value="F">F</option>
        </select>
        <button class="trash-btn">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </form>`;
  }
  graders = document.querySelectorAll("div.grader");
  for (let i = 0; i < graders.length; i++) {
    graders[i].children[3].value = objectArray[i].class_grade;
  }
}

function merge(a1, a2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < a1.length && j < a2.length) {
    if (a1[i].class_grade_number > a2[j].class_grade_number) {
      result.push(a2[j]);
      j++;
    } else {
      result.push(a1[i]);
      i++;
    }
  }
  while (i < a1.length) {
    result.push(a1[i]);
    i++;
  }
  while (j < a2.length) {
    result.push(a2[j]);
    j++;
  }
  return result;
}
function mergeSort(arr) {
  if (arr.length == 0) {
    return;
  }
  if (arr.length == 1) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
  }
}
