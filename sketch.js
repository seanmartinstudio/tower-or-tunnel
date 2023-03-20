let squareSize1 = 100
let squareSize2 = 100

function setup() {
  createCanvas(600, 600);
  background(0);
}

function whiteSquare() {
  noFill()
  strokeWeight(4)
  stroke(255, 255)
  square(0, 0, squareSize1)
}

function blackSquare() {
  noFill()
  strokeWeight(4)
  stroke(0)
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
