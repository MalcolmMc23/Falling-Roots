class Root {
  constructor(x, y, r, c, l) {
    this.loc = createVector(x, y);
    this.r = r;
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.lifespan = l;
    this.isDead = false;
    this.clr = c
    this.speed = createVector(random(-.06,.06), .06)
  }
  run() {
    this.render();
    this.update();
  }

  render() {
    fill(100, 150, 50);
    // noStroke()
    ellipse(this.loc.x, this.loc.y, this.r);
  }

  update() {
    this.vel.add(this.speed);

    this.lifespan = this.lifespan - 1;
    if(this.lifespan < 0) this.isDead = true;
    this.r -= .08;
    this.acc = createVector(random(-0.3, 0.3), random(-0.3, 0.3));
    this.vel.add(this.acc);
    this.vel.limit(2.5)
    this.loc.add(this.vel);

    count++
    if (count === 100){
    roots.push(new Root(this.loc.x, this.loc.y, this.r , color(random( 1, 255), random( 1, 255), random( 1, 255)), 30));
    count = 0

  }
}
}
