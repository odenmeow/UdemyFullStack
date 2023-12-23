const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
// 他會回傳一個 canvas的 drawing context
// 用來canvas中畫圖

const unit = 20;
const row = canvas.height / unit; //320/20=16格子
const column = canvas.width / unit; //320/20=16格子

let snake = []; //element=object (x,y)  for body

// |   | 2 | 1 | 0 |   |   |   |   |   |   |   |
// |   |   |   |   |   |   |   |   |   |   |   |
// |   |   |   |   |   |   |   |   |   |   |   |
// |   |   |   |   |   |   |   |   |   |   |   |
function createSnake() {
  snake[0] = {
    x: 80,
    y: 0,
  };
  snake[1] = {
    x: 60,
    y: 0,
  };
  snake[2] = {
    x: 40,
    y: 0,
  };
  snake[3] = {
    x: 20,
    y: 0,
  };
}
createSnake();
class Fruit {
  constructor() {
    this.x = Math.floor(Math.random() * column) * unit;
    this.y = Math.floor(Math.random() * row) * unit;
  }
  drawFruit() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, unit, unit);
  }
  pickLocation() {
    let overlapping = false;
    let new_x;
    let new_y;
    function checkOverlap(new_x, new_y) {
      for (let i = 0; i < snake.length; i++) {
        if (new_x == snake[i].x && new_y == snake[i].y) {
          overlapping = true;
          return;
        } else {
          overlapping = false;
          // 如果沒設定 會導致重疊後被設定為true，
          // 之後即使真的沒有重疊
          // 也沒人幫你設定false;
          // 他之前以為預設false就能免去後面設定false
        }
      }
    }
    do {
      new_x = Math.floor(Math.random() * column) * unit;
      new_y = Math.floor(Math.random() * row) * unit;
      checkOverlap(new_x, new_y);
      console.log("印數字");
    } while (overlapping);

    this.x = new_x;
    this.y = new_y;
  }
}
let myFruit = new Fruit();
window.addEventListener("keydown", changeDirection);
let d = "Right";
let score = 0;
let highestScore;
loadHighestScore();

document.getElementById("myScore").innerHTML = "遊戲分數: " + score;
document.getElementById("myBestScore").innerHTML = "最高分數: " + highestScore;

function changeDirection(e) {
  if (e.key == "ArrowLeft" && d != "Right") {
    console.log("已按左鍵");
    d = "Left";
  } else if (e.key == "ArrowRight" && d != "Left") {
    console.log("已按右鍵");
    d = "Right";
  } else if (e.key == "ArrowUp" && d != "Down") {
    console.log("已按上鍵");
    d = "Up";
  } else if (e.key == "ArrowDown" && d != "Up") {
    console.log("已按下鍵");
    d = "Down";
  }
  // draw 1 d=left    d=up   d=right
  // frame 之間差...0.1秒，但是window.addEvent很快，所以出錯!
  // draw 2 d=right
  // 因此要避免 Next frame 出現之前能夠連續按
  // draw 執行完， d 才能再度改變。
  window.removeEventListener("keydown", changeDirection);
}
function draw() {
  // 畫圖之前先確認蛇撞自己沒
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
      clearInterval(myGame);
      alert("遊戲結束");

      if (highestScore < score) {
        localStorage.setItem("highestScore", score);
      }
      return;
    }
  }
  console.log("drawing");
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  myFruit.drawFruit();

  for (let i = 0; i < snake.length; i++) {
    if (i) {
      ctx.fillStyle = "lightblue";
    } else {
      ctx.fillStyle = "lightgreen";
    }

    if (snake[i].x >= canvas.width) {
      // exceed right boundary
      snake[i].x = 0;
    }
    if (snake[i].x < 0) {
      // exceed left boundary
      snake[i].x = canvas.width - unit;
    }
    if (snake[i].y < 0) {
      // exceed top boundary
      snake[i].y = canvas.height - unit;
    }
    if (snake[i].y >= canvas.height) {
      // exceed bottom boundary
      snake[i].y = 0;
    }

    ctx.strokeStyle = "white";
    ctx.fillRect(snake[i].x, snake[i].y, unit, unit);
    ctx.strokeRect(snake[i].x, snake[i].y, unit, unit);
  }
  // 以目前的d 變數方向決定蛇的下一影格
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;
  if (d == "Left") {
    snakeX -= unit;
  } else if (d == "Right") {
    snakeX += unit;
  } else if (d == "Up") {
    snakeY -= unit;
  } else if (d == "Down") {
    snakeY += unit;
  }
  let newHead = {
    x: snakeX,
    y: snakeY,
  };
  // 確認是否吃到果實
  if (snake[0].x == myFruit.x && snake[0].y == myFruit.y) {
    console.log("吃到果實了!");
    score++;
    document.getElementById("myScore").innerHTML = "遊戲分數: " + score;

    // 更新新果實位置
    myFruit.pickLocation();
  } else {
    // 如果吃到果實 unshift就好   沒吃到就 pop+unshift
    snake.pop();
  }
  snake.unshift(newHead);
  // 頭做好了
  // 可以開始控制了
  window.addEventListener("keydown", changeDirection);
}

function loadHighestScore() {
  if (localStorage.getItem("highestScore")) {
    highestScore = Number(localStorage.getItem("highestScore"));
  } else {
    highestScore = 0;
  }
}
let myGame = setInterval(draw, 100);
