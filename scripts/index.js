console.log("JS IS RUNNING");

//canvas initialization
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//start button
const startButton = document.getElementById("start");

//create the player
const player = new Component(0, 200, 45, 45, "orange", ctx);

//start button on click
startButton.onclick = function(){
    console.log("starting");
    const game = new Game(ctx, canvas.width, canvas.height, player);
    game.start();
}

document.addEventListener("keydown", (e) =>{
    switch (e.code){
        case "ArrowUp":
            player.speedY -=1;
            break;
        case "ArrowDown":
            player.speedY +=1;
            break;
        case "ArrowLeft":
            player.speedX -=1;
            break;
        case "ArrowRight":
            player.speedX +=1;
            break;
    }
});

//stop speed
document.addEventListener("keyup", () => {
    player.speedX = 0;
    player.speedY = 0;
});