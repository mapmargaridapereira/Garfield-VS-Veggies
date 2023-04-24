class Game {
  constructor(ctx, width, height, player) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.player = player;
    this.intervalId = null;
    this.frames = 0;
    this.food = [];
  }

  start() {
    this.intervalId = setInterval(this.update, 10);
  }

  update = () => {
    this.frames++;
    this.clear();
    this.player.newPos();
    this.player.draw();
    // this.food.spawn();
    this.updateFood();
    this.grabFood();
  };

  stop() {
    clearInterval(this.intervalId);
  }

  //clears canvas
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  updateFood() {
      for (let i = 0; i < this.food.length; i++) {
          this.food[i].draw(); // continue draw enemy
        }
        if (this.frames % 200 === 0) {
            let foodPositionX = Math.floor(Math.random() * (canvas.width - 20));
            let foodPositionY = Math.floor(Math.random() * (canvas.height - 20));
            
            this.food.push(
                new Food(foodPositionX, foodPositionY, 20, 20, "green", this.ctx)
                );
            }
            
        }
        grabFood = () => {
          for (let i = 0; i < this.food.length; i++) {
            if (this.player.crashWith(this.food[i]) /* || this.food.length > 2 */) {
              this.food.splice(i, 1);
              console.log('here')
              //this.generateFood()
          } 
          }
        }
    }

    
/*collectFood(){
    const eating = this.food.some((food) => {
        return this.player.crashWith(food);
    });*/
