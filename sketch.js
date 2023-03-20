let squareSize1 = 100;
let squareSize2 = 100;
let lineX = 100;
let lineY = 100;


function setup() {
  createCanvas(600, 600);
  background(0);
}

function whiteSquare() {
  noFill()
  strokeWeight(4)
  stroke(color(0, 255, 0))
  square(0, 0, squareSize1)
}

function blackSquare() {
  noFill()
  strokeWeight(4)
  stroke(color(0))
  square(0, 0, squareSize2)

  strokeWeight(4)
  stroke(0, 255, 0)
  line(0, 0, 0, lineY)

  strokeWeight(4)
  stroke(0, 255, 0)
  line(lineX, 0, 0, 0)
}

function draw() {
  frameRate(10)

  whiteSquare()
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
      strokeWeight(4)
      stroke(0)
      line(100, 0, 600, 0)
      line(0, 100, 0, 600)
      
    }



    
    
}
