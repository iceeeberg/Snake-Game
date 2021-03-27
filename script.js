const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext("2d");
const SNAKE_SPEED = 5;

let snake = {
  segment: [
    {x: 100, y: 50},
    {x: 95, y: 50},
  ],
  w: 7,
  h: 7
};

let apple = {
  x: 180,
  y: 100,
  w: 7,
  h: 7
};

let direction;
let score = 0;
 
function drawSnake() {
    snake.segment.forEach((snakePart) => {
    ctx.beginPath();
    ctx.rect(snakePart.x,snakePart.y,snake.w, snake.h);
    ctx.fillStyle = "#90EE90"
    ctx.fill();
    ctx.closePath;
    })
  }

function drawApple() {
ctx.beginPath();
ctx.rect(apple.x,apple.y,apple.w, apple.w);
ctx.fillStyle = "#FF0000"
ctx.fill();
ctx.closePath;
};

function gameOver () {
  let gradient = ctx.createLinearGradient(0,0, canvas.width, canvas.height);
  gradient.addColorStop("0","blue");
  ctx.rect(120, 75, 200, 100 )
  ctx.fillStyle = gradient;
  ctx.fillText("Game Over", 120, 75);
}


function moveSnake() {
  if (direction){
    for (let index = 0; index < snake.segment.length - 1; index++) {
      snake.segment[index + 1].x = snake.segment[index].x
      snake.segment[index + 1].y = snake.segment[index].y
    }
  }
  switch (direction) {
    case "right":
      snake.segment[0].x += SNAKE_SPEED
      break;
    case "left":
      snake.segment[0].x -= SNAKE_SPEED
      break;
    case "up":
      snake.segment[0].y -= SNAKE_SPEED
      break;
    case "down":
      snake.segment[0].y += SNAKE_SPEED
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
  if (snake.segment[0].x + SNAKE_SPEED === canvas.width || snake.segment[0].x + SNAKE_SPEED < 0) {
    gameOver();
    reset();
  }
  if (snake.segment[0].y + SNAKE_SPEED === canvas.height || snake.segment[0].y+ SNAKE_SPEED < 0 ) {
    gameOver();
    reset();
  }
}, 100);
};

function reset(){
 window.location.reload();
};

function appleDetection () {
  if (snake.segment[0].x < apple.x + apple.w &&
    snake.segment[0].x + snake.w > apple.x &&
    snake.segment[0].y < apple.y + apple.h &&
    snake.segment[0].y + snake.h > apple.y) {
     eatApple();
     snake.segment.x++
     snake.segment.y++
    }
  }

function eatApple (){
  apple.x = Math.floor(Math.random(5) * canvas.width)
  apple.y = Math.floor(Math.random(5) * canvas.height)
}

gameOver();
