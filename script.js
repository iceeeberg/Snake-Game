const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext("2d");

let snakePositionX = 100;
let snakePositionY = 50;
let snakeSpeedX = 5;

let applePositionX = 180;
let applePositionY = 100;
let snakeSpeedY = 5;

let score = 0;

function drawSnake() { 
ctx.beginPath();
ctx.rect(snakePositionX,snakePositionY,7,7 );
ctx.fillStyle = "#90EE90"
ctx.fill();
ctx.closePath;
};

function drawApple() {
ctx.beginPath();
ctx.arc(applePositionX,applePositionY,2,0,Math.PI*2,);
ctx.fillStyle = "#FF0000"
ctx.fill();
ctx.closePath;
};

// function gameOver () {
//   let gradient = ctx.createLinearGradient(0,0, canvas.width, 0);
//   gradient.addColorStop("0","blue");
//   ctx.fillStyle = gradient;
//   ctx.fillText("Game Over", 120, 75);
// }

let direction;

function moveSnake() {
  switch (direction) {
    case "right":
      snakePositionX += snakeSpeedX
      break;
    case "left":
      snakePositionX -= snakeSpeedX
      break;
    case "up":
      snakePositionY -= snakeSpeedY
      break;
    case "down":
      snakePositionY += snakeSpeedY
      break;
    default:
      break;
  }

  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowDown":
        direction = "down"
        break;
      case "ArrowUp":
        direction = "up"
          break;
      case "ArrowRight":
        direction = "right"
          break;
      case "ArrowLeft":
        direction = "left"
          break;
      default:
        break;
    }
  })

window.onload = () => {
  setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    drawApple();
    moveSnake();
  }, 100);
};
}

// function moveSnake() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawSnake();
//   drawApple();
//   if (snakePositionX + snakeSpeedX === canvas.width || snakePositionX + snakeSpeedX < 0 ) {
//     snakeSpeedX = -snakeSpeedX
//     gameOver();
//   };
//   snakePositionX += snakeSpeedX
//   if (snakePositionY + snakeSpeedY === canvas.height || snakePositionY + snakeSpeedY < 0){
//     snakeSpeedY = -snakeSpeedY
//     gameOver();
//   };
//   snakePositionY += snakeSpeedY
// }
// setInterval(moveSnake, 100);

