const c = document.getElementById("myCanvas");
const canvasHeight = c.height;
const canvasWidth = c.width;

const ctx = c.getContext("2d");
// 球的開局素質
let circle_x = 160;
let circle_y = 60;
let radius = 20;
// 球的方向
let xSpeed = 20;
let ySpeed = 20;

// 地板設定
let ground_x = 100;
let ground_y = 500;
let ground_height = 5;
let brickArray = [];

// min,max
function getRandomArbitrary(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

class Brick {
  static brick_size = 50;
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = Brick.brick_size;
    this.height = Brick.brick_size;
    brickArray.push(this);
  }
  drawBrick() {
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  touchingBall(ballX, ballY) {
    // 不考慮側面撞擊，以覆蓋與否判別。
    // 以下為 球覆蓋的情況
    return (
      ballX + radius >= this.x &&
      ballX + radius <= this.x + Brick.brick_size &&
      ballY + radius >= this.y &&
      ballY + radius <= this.y + Brick.brick_size
    );
  }
}
// 檢查是否有重疊
function isOverlapping() {
  if (brickArray.length < 2) {
    console.log("還沒重疊");
    return false;
  }
  let newBrick = brickArray[brickArray.length - 1];

  for (let i = 0; i < brickArray.length - 1; i++) {
    if (
      Math.abs(brickArray[i].x - newBrick.x) <= 50 &&
      Math.abs(brickArray[i].x - newBrick.x) >= 0 &&
      Math.abs(brickArray[i].y - newBrick.y) <= 50 &&
      Math.abs(brickArray[i].y - newBrick.y) >= 0
    ) {
      console.log("重疊了");
      return true;
    }
  }
  return false;
}
// 製作所有的brick
const maxAttemp = 2000;
let attemp = 0;
for (let i = 0; i < 10; i++) {
  new Brick(
    getRandomArbitrary(0, canvasWidth - Brick.brick_size),
    getRandomArbitrary(0, canvasHeight - Brick.brick_size)
  );
  if (attemp >= maxAttemp) {
    console.log("無限迴圈避免");
    console.log(brickArray);
    break;
  }
  if (isOverlapping()) {
    console.log("重疊了");
    let t = brickArray.pop();
    console.log(t);
    i--;
    attemp++;
    continue;
  }
}

// 地板控制功能 (附加到canvas身上)
c.addEventListener("mousemove", (e) => {
  //   console.log(e.clientX);  滑鼠的畫布上 水平移動位置0-1000px
  ground_x = e.clientX;
});

function drawCircle() {
  console.log("畫圓");
  // 撞到磚塊與否
  brickArray.forEach((brick, index) => {
    if (brick.touchingBall(circle_x, circle_y)) {
      //改變x , y 方向速度 並移除該brick

      if (circle_y >= brick.y + Brick.brick_size) {
        // 下方往上撞
        ySpeed *= -1;
      } else if (circle_y <= brick.y) {
        // 上方往下撞
        ySpeed *= -1;
      } else if (circle_x < brick.x) {
        xSpeed *= -1;
      } else if (circle_x > brick.x + Brick.brick_size) {
        xSpeed *= -1;
      }
      brickArray.splice(index, 1);
      if (brickArray.length == 0) {
        alert("遊戲結束");
        clearInterval(game);
      }
    }
  });
  // 撞到地板與否?
  if (
    circle_x + radius >= ground_x &&
    circle_x - radius <= ground_x + 200 &&
    circle_y + radius >= ground_y &&
    circle_y - radius <= ground_y
  ) {
    if (ySpeed > 0) {
      // 往下走
      circle_y -= 40;
    } else {
      circle_y += 40;
    }
    ySpeed *= -1;
  }
  if (circle_x + radius >= canvasWidth) {
    // 撞牆壁反彈與否
    xSpeed *= -1;
  }
  if (circle_x + radius <= 0) {
    xSpeed *= -1;
  }
  if (circle_y + radius >= canvasHeight) {
    ySpeed *= -1;
  }
  if (circle_y + radius <= 0) {
    ySpeed *= -1;
  }
  // 改變移動方向
  circle_x += xSpeed;
  circle_y += ySpeed;

  // 畫黑色背景
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  /***畫出所有brick，先畫避免覆蓋球***/
  brickArray.forEach((brick) => {
    brick.drawBrick();
  });
  /***畫球****/
  ctx.beginPath();
  ctx.arc(circle_x, circle_y, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = "yellow";
  ctx.fill();
  /***畫出可以控制的地板***/
  ctx.fillStyle = "orange";
  ctx.fillRect(ground_x, ground_y, 200, ground_height);
}
let game = setInterval(drawCircle, 25);
