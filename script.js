const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext("2d");
const SNAKE_SPEED = 5;

let snake = {
  x: 100,
  y: 50,
  w: 7,
  h: 7
};

let apple = {
  x: 180,
  y: 100,
  w: 7,
  h: 7
};

let segment = [];
let direction;
let score = 0;

gameOver();

function drawSnake() {
ctx.beginPath();
ctx.rect(snake.x,snake.y,snake.w, snake.h);
ctx.fillStyle = "#90EE90"
ctx.fill();
ctx.closePath;
};

function drawApple() {
ctx.beginPath();
ctx.rect(apple.x,apple.y,apple.w, apple.w);
ctx.fillStyle = "#FF0000"
ctx.fill();
ctx.closePath;
};

function gameOver () {
  let gradient = ctx.createLinearGradient(0,0, canvas.width, 0);
  gradient.addColorStop("0","blue");
  ctx.rect(120, 75, 200, 100 )
  ctx.fillStyle = gradient;
  ctx.fillText("Game Over", 120, 75);
}

function moveSnake() {
  switch (direction) {
    case "right":
      snake.x += SNAKE_SPEED
      break;
    case "left":
      snake.x -= SNAKE_SPEED
      break;
    case "up":
      snake.y -= SNAKE_SPEED
      break;
    case "down":
      snake.y += SNAKE_SPEED
      break;
    default:
      break;
  }
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
    drawApple();
    drawSnake();
    moveSnake();
    appleDetection();
  if (snake.x + SNAKE_SPEED === canvas.width || snake.x + SNAKE_SPEED < 0) {
    gameOver();
    reset();
  }
  if (snake.y + SNAKE_SPEED === canvas.height || snake.y+ SNAKE_SPEED < 0 ) {
    gameOver();
    reset();
  }
  }, 100);
  gameOver();
};

function reset(){
 window.location.reload();
};

function appleDetection () {
  if (snake.x < apple.x + apple.w &&
    snake.x + snake.w > apple.x &&
    snake.y < apple.y + apple.h &&
    snake.y + snake.h > apple.y) {
     eatApple();
     trackScore();
    }
  }

function eatApple (){
  apple.x = Math.floor(Math.random(5) * canvas.width)
  apple.y = Math.floor(Math.random(5) * canvas.height)
}

function trackScore (score) {
  
}
