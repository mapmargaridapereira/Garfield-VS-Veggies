console.log("JS IS RUNNING");

//canvas initialization
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//start button
const startButton = document.getElementById("start");

//create the player
const player = new Player(0, 200, 45, 45, "orange", ctx);
const food = new Food(Game.foodX, Game.foodY, 10, 10, "blue", ctx);

//start button on click
startButton.onclick = function(){
    console.log("starting");
    const game = new Game(ctx, canvas.width, canvas.height, player, food);
    game.start();
}

document.addEventListener("keydown", (e) =>{
    switch (e.code){
        case "ArrowUp":
            player.speedY = -5;
            player.speedX = 0;
            break;
        case "ArrowDown":
            player.speedY = 5;
            player.speedX = 0;
            break;
        case "ArrowLeft":
            player.speedX = -5;
            player.speedY = 0;
            break;
        case "ArrowRight":
            player.speedX = 5;
            player.speedY = 0;
            break;
    }
});

