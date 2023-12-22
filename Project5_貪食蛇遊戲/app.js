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
