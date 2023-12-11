/*       終極密碼         */

function gameStart() {
  let isInputContinue = true;
  let secret = Math.floor(Math.random() * 100) + 1;
  // random 0~0.9999
  // floor 讓最小 0,99.999->99
  let max = 100;
  let min = 0;
  let inputNum;
  do {
    inputNum = Number(
      window.prompt(secret + "請輸入數字範圍" + min + " ~ " + max)
    );

    console.log(secret); // 還沒載入DOM所以console沒東西;

    // 輸入文字之類 NaN  關閉 false 沒輸入 false (edge)
    // 原本使用 if(isNaN(inputNum)) 但只能檢查是不是輸入數字以外，不能檢查沒輸入。
    if (!inputNum) {
      // 沒輸入直接按確定 inputNum=false，沒輸入不能給她通過。
      window.alert(`禁止文字符號", ${inputNum == false}`);
      continue;
    }

    //非數字或空白那些 都是falsy
    if (inputNum == secret) {
      window.alert("猜到了!");
      isInputContinue(false);
      return console.log("成功了");
    }

    if (inputNum > max || inputNum < min) {
      window.alert("不可離題");
      continue;
    }
    // 往小猜了，min=小 到 max是新範圍

    if (inputNum < secret) {
      min = inputNum;
    } else {
      max = inputNum;
    }
  } while (isInputContinue);
}

let input_isGameStart = window.prompt("輸入y開始猜數字遊戲，其他不會開始玩");
if (input_isGameStart == "y" || input_isGameStart == "Y") {
  gameStart();
}
