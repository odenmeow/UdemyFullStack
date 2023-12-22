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
window.addEventListener("keydown", changeDirection);
let d = "Right";
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
}
function draw() {
  console.log("drawing");
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < snake.length; i++) {
    if (i) {
      ctx.fillStyle = "lightblue";
    } else {
      ctx.fillStyle = "lightgreen";
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
  // 如果吃到果實 unshift就好   沒吃到就 pop+unshift
  snake.pop();
  snake.unshift(newHead);
}
let myGame = setInterval(draw, 100);
