let squareSize1 = 100;
let squareSize2 = 100;
let alphaWhite = 0;
let alphaBlack = 0;

function setup() {
  createCanvas(600, 600);
  background(0);
}

function whiteSquare(alphaWhite) {
  noFill()
  strokeWeight(4)
  stroke(color(255, alphaWhite))
  square(0, 0, squareSize1)
}

function blackSquare(alphaBlack) {
  noFill()
  strokeWeight(4)
  stroke(color(0, alphaBlack))
  square(0, 0, squareSize2)
}

function draw() {
  frameRate(10)

  whiteSquare()
  squareSize1 += 15
 
  if(squareSize1 > width) {
    blackSquare()
    squareSize2 += 15
  }

    if(squareSize1 && squareSize2 > width) {
      squareSize1 = 100
      squareSize2 = 100
    }
}
