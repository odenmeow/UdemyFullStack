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

// 地板控制功能 (附加到canvas身上)
c.addEventListener("mousemove", (e) => {
  //   console.log(e.clientX);  滑鼠的畫布上 水平移動位置0-1000px
  ground_x = e.clientX;
});

function drawCircle() {
  console.log("畫圓");
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
