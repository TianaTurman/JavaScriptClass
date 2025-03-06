//  Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;
// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;
// Size of the ball (in px)
const BALL_SIZE = 20;
// Paddle elements
const playerPaddle = document.querySelector('.player-paddle');
const computerPaddle = document.querySelector('.computer-paddle');
const ball = document.querySelector('.ball');
// Paddle movement variables
let playerPaddleYPosition = 200;
let playerPaddleVelocity = 0; // Player movement speed
const PLAYER_SPEED = 5; // Adjust speed as needed
// The y-velocity of the computer paddle
let computerPaddleYPosition = 200;
let computerPaddleYVelocity = 2;
// Ball's position and velocity
let ballXPosition = GAME_AREA_WIDTH / 2 - BALL_SIZE / 2;
let ballYPosition = GAME_AREA_HEIGHT / 2 - BALL_SIZE / 2;
let ballXVelocity = 3;
let ballYVelocity = 3;
// Update the pong world
function update() {
    // Update the computer paddle's position (simple AI)
    if (computerPaddleYPosition + PADDLE_HEIGHT / 2 < ballYPosition) {
        computerPaddleYPosition += 2; // Move down
    } else {
        computerPaddleYPosition -= 2; // Move up
    }
    // Apply the paddle positions
    playerPaddleYPosition += playerPaddleVelocity;
    playerPaddle.style.top = `${playerPaddleYPosition}px`;
    computerPaddle.style.top = `${computerPaddleYPosition}px`;
    // Ball movement logic
    ballXPosition += ballXVelocity;
    ballYPosition += ballYVelocity;
    // Apply ball position
    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`;
    // Ball collision with top and bottom walls
    if (ballYPosition <= 0 || ballYPosition + BALL_SIZE >= GAME_AREA_HEIGHT) {
        ballYVelocity *= -1; // Reverse direction
    }
    // Ball collision with left paddle (player)
    if (
        ballXPosition <= PADDLE_WIDTH &&
        ballYPosition + BALL_SIZE >= playerPaddleYPosition &&
        ballYPosition <= playerPaddleYPosition + PADDLE_HEIGHT
    ) {
        ballXVelocity *= -1; // Reverse ball direction
        ballXPosition = PADDLE_WIDTH; // Prevent sticking
    }
    // Ball collision with right paddle (computer)
    if (
        ballXPosition + BALL_SIZE >= GAME_AREA_WIDTH - PADDLE_WIDTH &&
        ballYPosition + BALL_SIZE >= computerPaddleYPosition &&
        ballYPosition <= computerPaddleYPosition + PADDLE_HEIGHT
    ) {
        ballXVelocity *= -1; // Reverse ball direction
        ballXPosition = GAME_AREA_WIDTH - PADDLE_WIDTH - BALL_SIZE; // Prevent sticking
    }
    // Ball collision with left and right walls (reset)
    if (ballXPosition <= 0 || ballXPosition + BALL_SIZE >= GAME_AREA_WIDTH) {
        // Reset ball to center
        ballXPosition = GAME_AREA_WIDTH / 2 - BALL_SIZE / 2;
        ballYPosition = GAME_AREA_HEIGHT / 2 - BALL_SIZE / 2;
        ballXVelocity = -ballXVelocity; // Reverse direction
    }
}
// Move player paddle using keyboard
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        playerPaddleVelocity = -PLAYER_SPEED; // Move up
    } else if (event.key === 'ArrowDown') {
        playerPaddleVelocity = PLAYER_SPEED; // Move down
    }
});
document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        playerPaddleVelocity = 0; // Stop movement
    }
});
// Call the update() function every 35ms
setInterval(update, 35);