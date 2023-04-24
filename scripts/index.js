console.log("JS IS RUNNING");

//canvas initialization
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//start button
const startButton = document.getElementById("start");

//create the player
const player = new Player(0, 200, 45, 45, "orange", ctx);


//start button on click
startButton.onclick = function () {
  console.log("starting");
  const game = new Game(ctx, canvas.width, canvas.height, player);
  game.start();
};

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      if (player.direction !== "down") {
        player.speedX = 0;
        player.speedY = -5;
        player.direction = "up";
      }
      player.ctx.drawImage( player.x, player.y, player.w, player.h);
      break;
    case "ArrowDown":
      if (player.direction !== "up") {
        player.speedX = 0;
        player.speedY = 5;
        player.direction = "down";
      }
      player.ctx.drawImage( player.x, player.y, player.w, player.h);
      break;
    case "ArrowLeft":
      if (player.direction !== "right") {
        player.speedX = -5;
        player.speedY = 0;
        player.direction = "left";
      }
      player.ctx.drawImage( player.x, player.y, player.w, player.h);
      break;
    case "ArrowRight":
      if (player.direction !== "left") {
        player.speedX = 5;
        player.speedY = 0;
        player.direction = "right";
      }
      player.ctx.drawImage( player.x, player.y, player.w, player.h);
      break;
  }
});
