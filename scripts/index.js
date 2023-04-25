console.log("JS IS RUNNING");

//canvas initialization
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//start button
const startButton = document.getElementById("start");

//create the player
const player = new Player(10, 200, 60, 60, "orange", ctx);

//audio variable declaration
const bgMusic = new Audio("./sounds/bgmusic.mp3");
bgMusic.volume = 0.2;
const gameOverSound = new Audio("./sounds/gameover.mp3");
gameOverSound.volume = 0.5;
const eatingSound = new Audio("./sounds/chomp.mp3");
const eatingVeggiesSound = new Audio("./sounds/ew.mp3");

//create new game
const game = new Game(ctx, canvas.width, canvas.height, player);
//start button on click
startButton.onclick = function () {
if(!game.gameRunning){
  console.log("starting");
  game.start();
  game.gameRunning = true
} else {
  game.reset()
  game.start();
}
};

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      if (player.direction !== "down") {
        player.speedX = 0;
        player.speedY = -5;
        player.direction = "up";
        player.image.src = './img/garfield/garfield_head_up.png';
        player.ctx.drawImage(player.image, player.x, player.y, player.w, player.h);
      }
      break;
    case "ArrowDown":
      if (player.direction !== "up") {
        player.speedX = 0;
        player.speedY = 5;
        player.direction = "down";
        player.image.src = './img/garfield/garfield_head_down.png';
        player.ctx.drawImage(player.image, player.x, player.y, player.w, player.h);
      }
      break;
    case "ArrowLeft":
      if (player.direction !== "right") {
        player.speedX = -5;
        player.speedY = 0;
        player.direction = "left";
        player.image.src = './img/garfield/garfield_head_left.png';
        player.ctx.drawImage(player.image, player.x, player.y, player.w, player.h);
      }
      break;
    case "ArrowRight":
      if (player.direction !== "left") {
        player.speedX = 5;
        player.speedY = 0;
        player.direction = "right";
        player.image.src = './img/garfield/garfield_head_right.png';
        player.ctx.drawImage(player.image, player.x, player.y, player.w, player.h);
      }
      break;
  }
});
