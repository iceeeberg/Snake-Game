const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext("2d");

let snakePositionX = 100;
let snakePositionY = 50;
let snakeSpeedX = 2;

let applePositionX = 180;
let applePositionY = 100;
let snakeSpeedY = 2;


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

drawSnake();
drawApple();

function moveSnake() {
  document.addEventListener('keydown', (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSnake();
  drawApple();
  switch (e.keyCode) {
    case 37:
      snakePositionX -= snakeSpeedX
      break;
    case 38:
      snakePositionY -= snakeSpeedY
      break;
    case 39:
      snakePositionX += snakeSpeedX
      break;
    case 40:
      snakePositionY += snakeSpeedY
    default:
      break;
    }
  }) 
}

setInterval(moveSnake, 100)

if (snakePositionX + snakeSpeedX === canvas.width || snakePositionX + snakeSpeedX < 0 ) {
      snakeSpeedX = -snakeSpeedX
    };
if (snakePositionY + snakeSpeedY === canvas.height || snakePositionY + snakeSpeedY < 0){
      snakeSpeedY = -snakeSpeed
};


// function moveSnake() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawSnake();
//   drawApple();
//   if (snakePositionX + snakeSpeedX === canvas.width || snakePositionX + snakeSpeedX < 0 ) {
//     snakeSpeedX = -snakeSpeedX
//   };
//   snakePositionX += snakeSpeedX
//   if (snakePositionY + snakeSpeedY === canvas.height || snakePositionY + snakeSpeedY < 0){
//     snakeSpeedY = -snakeSpeedY
//   };
//   snakePositionY += snakeSpeedY
// }
// setInterval(moveSnake, 100);

