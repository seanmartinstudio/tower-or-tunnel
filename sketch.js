let squareSize1 = 100;
let squareSize2 = 100;
let squareSize3 = 100;
let lineX = 100;
let lineY = 100;


function setup() {
  createCanvas(600, 600);
  background(0);
}

function greenSquare() {
  noFill()
  strokeWeight(4)
  stroke(color(0, 255, 0))
  square(0, 0, squareSize1)
}

function whiteSquare() {
  noFill()
  strokeWeight(4)
  stroke(color(255))
  square(0, 0, squareSize3)
}

function blackSquare() {
  noFill()
  strokeWeight(4)
  stroke(color(0))
  square(0, 0, squareSize2)

  //fill in X axis with green as squares progress
  strokeWeight(4)
  stroke(0, 255, 0)
  line(0, 0, 0, lineY)

  //fill in Y axis with green as squares progress
  strokeWeight(4)
  stroke(0, 255, 0)
  line(lineX, 0, 0, 0)
}

function draw() {
  frameRate(13)

  greenSquare()
  squareSize1 += 15

  if(squareSize1 > width) {
    blackSquare()
    squareSize2 += 15
    lineX += 17
    lineY += 17
  }

    if(squareSize1 && squareSize2 > width) {
      squareSize1 = 100
      squareSize2 = 100
      squareSize3 = 100
      strokeWeight(4)
      stroke(0)
      line(100, 0, 600, 0)
      line(0, 100, 0, 600)
     }    
}

function keyPressed() {
  // download 30-second GIF of animation
  if (key === 's') {
    saveGif('mySketch_2', 30);
  }
}
