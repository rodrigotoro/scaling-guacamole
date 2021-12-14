class BaseMover{
    constructor(x, y, r, colour) {
    this.x = x;
    this.y = y;
    this.r =r;
      this.red = colour[0];
      this.green = colour[1];
      this.blue = colour[2];
    this.pos = createVector(x,y);
    this.vel = p5.Vector.random2D();

    }
  }