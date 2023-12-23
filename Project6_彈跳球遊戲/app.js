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
function drawCircle() {
  console.log("畫圓");
  // 撞牆壁反彈與否
  if (circle_x + radius >= canvasWidth) {
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
}
let game = setInterval(drawCircle, 25);
