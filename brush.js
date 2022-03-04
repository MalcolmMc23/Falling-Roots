

class Brush {
  constructor(x, y, r) {
    this.loc = createVector( x, y);
    this.r = r;
  }

  run() {
    this.render();
    this.update();
  }

  update() {
    // this.loc.x = mouseX;
    // this.loc.y = mouseY
  }

  render() {
    // fill(0,255,100);
    // ellipse(this.loc.x, this.loc.y, this.r);
  }

}
