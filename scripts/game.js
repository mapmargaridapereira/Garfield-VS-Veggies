class Game {
    constructor(ctx, width, height, player){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.intervalId = null;
        this.frames = 0;
    }

    start(){
        this.intervalId = setInterval(this.update, 10)
    }


    update = ()=>{
        this.frames++;
        this.clear();
        this.player.newPos();
        this.player.draw();
        this.food.generateFood();
        this.food.draw();
        }

        stop(){
            clearInterval(this.intervalId);
        }

        //clears canvas 
        clear(){
            this.ctx.clearRect(0, 0, this.width, this.height);
        }


        generateFood() {
            const foodX = Math.floor(Math.random() * (canvas.width - 10));
            const foodY = Math.floor(Math.random() * (canvas.height - 10));
            return { foodX, foodY };
          }
}

