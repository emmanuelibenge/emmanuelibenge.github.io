// get canvas and context
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// set canvas size to match window
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// generate a random number between min and max
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// generate a random RGB color string
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;        // horizontal position
    this.y = y;        // vertical position
    this.velX = velX;  // horizontal velocity
    this.velY = velY;  // vertical velocity
    this.color = color;
    this.size = size;  // radius of the ball
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    // bounce off edges
    if (this.x + this.size >= width) this.velX = -Math.abs(this.velX);
    if (this.x - this.size <= 0) this.velX = Math.abs(this.velX);
    if (this.y + this.size >= height) this.velY = -Math.abs(this.velY);
    if (this.y - this.size <= 0) this.velY = Math.abs(this.velY);

    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect(balls) {
    for (const ball of balls) {
      if (this !== ball) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          this.color = ball.color = randomRGB();
        }
      }
    }
  }
}
// create an array to store all balls
const balls = [];

// create 25 balls with random properties
while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    random(size, width - size),   // x position
    random(size, height - size),  // y position
    random(-7, 7),                // x velocity
    random(-7, 7),                // y velocity
    randomRGB(),                  // color
    size                          // size
  );
  balls.push(ball);
}

// animation loop
function loop() {
  // semi-transparent background to create trails
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect(balls);
  }

  requestAnimationFrame(loop);
}

// start the animation
loop();