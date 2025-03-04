// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');
//Get Player Paddle Element
const playerPaddle = document.querySelector('.player-paddle');
//get ball
const ball = document.querySelector('.ball')

// The player paddle should start at the middle of the game area.
let playerPaddleYPosition = 200;
let playerPaddleVelocity = 0;
let player_speed = 5; 

// The y-velocity of the computer paddle
let computerPaddleYPosition = 200;
let computerPaddleYVelocity = 2;


// the ball velocity and position
let ballXPosition = GAME_AREA_WIDTH / 2 - BALL_SIZE / 2
let ballYPosition = GAME_AREA_WIDTH / 2 - BALL_SIZE / 2
let ballXVelocity = 3;
let ballYVelocity = 3;

// Update the pong world
function update() {
    // Update the computer paddle's position (simple AI)
    if (computerPaddleYPosition + PADDLE_HEIGHT / 2 < ballYPosition) {
        computerPaddleYPosition += 2; // Move down
    }else {
        computerPaddleYPosition -= 2; // Move up
    }

// Apply the player paddle positions


// Ball movement logic



// Apply ball position



// Ball collision with top and bottom walls




// Ball collision with left paddle (player)





// Ball collision with right paddle (computer)



// Ball collision with left and right walls (reset)


// Move player paddle using keyboard

}

// Call the update() function every 35ms
setInterval(update, 35);
