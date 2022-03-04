  // Malcolm McDonald
  // 1101
  // Lapt Root Brush

  let brush
  let roots;
  let count = 0

  function setup() {
    var cnv = createCanvas(600, 600);
    cnv.position((windowWidth-width)/2,30);
    background(20)
    brush = new Brush(mouseX, mouseY,10);
    roots = [];
  }

  function draw(){
    //background(20)
    brush.run();
    runRoots();
    checkRoots();
  }

  function checkRoots(){
    for (let i = 0; i < roots.length; i++){
      if(roots[i].isDead){
        roots.splice(i, 1)
      }
    }
  }

  function runRoots(){
    for (let i = 0; i < roots.length; i++){
      roots[i].run();
    }
  }


  function mouseMoved(){
    brush.loc.x = mouseX;
    brush.loc.y = mouseY;
    roots.push(new Root(mouseX, mouseY, 15, color(0,
      255,0), 133));
      }
