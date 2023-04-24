class Player {
  constructor(x, y, w, h, color, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.ctx = ctx;
    this.speedX = 0;
    this.speedY = 0;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  newPos() {
    if (this.x <= 0) {
      this.x = 0;
    } else if (this.x + 45 >= 700) {
      //player size minus canvas width
      this.x = 650; //change here
    }
    this.x += this.speedX;

    if (this.y <= 0) {
      this.y = 0;
    } else if (this.y + 45 >= 500) {
      this.y = 450; //change here
    }
    this.y += this.speedY;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.h;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.w;
  }
}

class Food {
    constructor(x, y, w, h, color, ctx) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.ctx = ctx;
    }

draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}



  /*checkCollision() {
    const head = this.body[0];
    if (head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS) {
      return true;
    }
    for (let i = 1; i < this.body.length; i++) {
      if (head.x === this.body[i].x && head.y === this.body[i].y) {
        return true;
      }
    }
    return false;
  }
}*/

/*class Food {
  constructor(posX, posY, width, height, color) {
    this.w = width;
    this.h = height;
    this.color = color;
    this.x = posX;
    this.y = posY;
  }

  spawn(posX, posY) {
    const matrix = Array.from({ length: 20 }, () => Array(20).fill(0));
    for (let i = 0; i < posX.length; i++) {
      const x = Math.floor(posX[i] / 10);
      const y = Math.floor(posY[i] / 10);
      matrix[y][x] = 1;
    }

    const free = [];
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 20; j++) {
        if (!matrix[i][j]) free.push([i, j]);
      }
    }

    const foodPos = Math.floor(Math.random() * free.length);
    this.x = free[foodPos][1] * 10;
    this.y = free[foodPos][0] * 10;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}
*/