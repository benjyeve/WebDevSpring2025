// https://www.granadatile.com/media/GalleryImagenew/Geometric-Egyptian-Floor-Compiled-Granada-Cement-Tile.jpg
// state 1 reference
//Use WASD or arrow keys to move between states
let state;
let smileyColor;
function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
  state = 0;
}
function draw() {
  if (state == 0) {
    background(100);
    state0();
  } else if (state == 1) {
    background("#654753"); // maroon red
    for (let squareX = 100; squareX < width; squareX += 100) {
      for (let squareY = 100; squareY < height; squareY += 100) {
        state1(squareX, squareY);
      }
    }
  } else if (state == 2) {
    background("#670c12"); // dark red
    for (let squareX = 100; squareX < width; squareX += 100) {
      for (let squareY = 100; squareY < height; squareY += 100) {
        state2(squareX, squareY);
      }
    }
  } else if (state == 3) {
    background("#478b1d"); // green
    for (let squareX = 100; squareX < width; squareX += 100) {
      for (let squareY = 100; squareY < height; squareY += 100) {
        state3(squareX, squareY);
      }
    }
  } else if (state == 4) {
    background("#2b6ea2"); // blue
    for (let squareX = 100; squareX < width; squareX += 100) {
      for (let squareY = 100; squareY < height; squareY += 100) {
        state4(squareX, squareY);
      }
    }
  }
}
function state1(tileCenterX, tileCenterY) {
  noStroke();
  push();
  translate(tileCenterX, tileCenterY);
  fill("#654753"); // maroon red
  stroke("#ceab73");
  rect(0, 0, 100, 100);
  fill("#ba906a"); // beige
  noStroke();
  rect(0, 0, 70, 70);
  fill("#654753"); // maroon red
  rect(0, 0, 25, 25);
  push();
  fill("#c2bfb8"); // grayish white
  rotate(radians(45));
  rect(0, 0, 16, 16);
  pop();
  fill("#516765"); // greenish
  rect(0, 0, 12, 12);
  pop();
  for (let i = 1; i > -2; i -= 2) {
    for (let j = 1; j > -2; j -= 2) {
      push();
      mirror(tileCenterX, tileCenterY, i, j);
      translate(tileCenterX, tileCenterY);
      push();
      fill("#c2bfb8"); // grayish white
      translate(-35, -35);
      rotate(radians(45));
      rect(0, 0, 16, 16);
      pop();
      fill("#654753"); // maroon red
      rect(-41, -41, 12, 12);
      fill("#516765"); // greenish
      rect(-29, -29, 12, 12);
      fill("#c2bfb8"); // grayish white
      arc(-49, -49, 24, 24, 0, HALF_PI, PIE);
      fill("#82a496"); // aquamarine
      triangle(-49, -9, -49, -38, -35, -23);
      triangle(-9, -49, -38, -49, -23, -35);
      pop();
    }
  }
}
function state2(tileCenterX, tileCenterY) {
  push();
  translate(tileCenterX, tileCenterY);
  noStroke();
  fill("#cf3543"); // red
  rect(0, 0, 100, 100);
  push();
  fill("#45a62a"); // green
  stroke(0);
  strokeWeight(0.5);
  rotate(radians(45));
  rect(0, 0, 70, 70);
  noStroke();
  pop();
  pop();
  for (let i = 1; i > -2; i -= 2) {
    for (let j = 1; j > -2; j -= 2) {
      push();
      mirror(tileCenterX, tileCenterY, i, j);
      translate(tileCenterX, tileCenterY);
      stroke(0);
      strokeWeight(1);
      line(-30, -35, -35, -25);
      fill(0);
      noStroke();
      ellipse(0, 0, 10, 29);
      arc(-49, -49, 24, 24, 0, HALF_PI, PIE);
      push();
      translate(-42, 0);
      rotate(radians(45));
      rect(0, 0, 12, 10);
      pop();
      push();
      translate(0, -42);
      rotate(radians(45));
      rect(0, 0, 10, 12);
      pop();
      noFill();
      stroke(0);
      strokeWeight(10);
      arc(-10, -10, 20, 20, radians(180), radians(270), CHORD);
      pop();
    }
  }
  strokeWeight(1);
}
function state3(tileCenterX, tileCenterY) {
  for (let i = 1; i > -2; i -= 2) {
    for (let j = 1; j > -2; j -= 2) {
      push();
      mirror(tileCenterX, tileCenterY, i, j);
      translate(tileCenterX, tileCenterY);
      stroke(0);
      strokeWeight(10);
      fill(smileyColor);
      ellipse(-25, -25, 50, 50);
      arc(-25, -25, 20, 20, radians(45), radians(135));
      strokeWeight(8);
      line(-30, -37, -30, -30);
      line(-20, -37, -20, -30);
      pop();
    }
  }
}
function state4(tileCenterX, tileCenterY) {
  for (let i = 1; i > -2; i -= 2) {
    for (let j = 1; j > -2; j -= 2) {
      push();
      mirror(tileCenterX, tileCenterY, i, j);
      translate(tileCenterX, tileCenterY);
      noFill();
      strokeWeight(1);
      fill("#a10a0a"); // red
      ellipse(-25, -25, 50, 50);
      stroke(0);
      fill("#9a8a07"); // yellow
      arc(0, 0, 50, 50, radians(180), radians(270));
      noFill();
      arc(-10, -10, 20, 10, radians(180), radians(270));
      arc(-30, -30, 20, 10, radians(180), radians(235));
      pop();
    }
  }
  push();
  translate(tileCenterX, tileCenterY);
  fill(150);
  ellipse(0, 0, 10, 20);
  pop();
}
function state0() {
  textAlign(CENTER);
  textSize(25);
  fill(0);
  text(
    "Use WASD or arrow keys to navigate the wallpaper patterns",
    width / 2,
    height / 2
  );
} //mirror function that takes in -1 or 1 for the i and j values to mirror a shape over the x or y-axis, or both
function mirror(tileCenterX, tileCenterY, i, j) {
  let x = 0,
    y = 0;
  if (i == -1) {
    x = 2 * tileCenterX;
  }
  if (j == -1) {
    y = 2 * tileCenterY;
  }
  translate(x, y);
  scale(i, j);
  if (j == 1) {
    smileyColor = color("#d1d339"); // yellow
  } else {
    smileyColor = color("#1f94c0"); // blue
  }
}
function keyPressed() {
  if (key == "d" || key == "D" || keyCode == RIGHT_ARROW) {
    state += 1;
    if (state > 4) {
      state = 1;
    }
  }
  if (key == "a" || key == "A" || keyCode == LEFT_ARROW) {
    state -= 1;
    if (state < 1) {
      state = 4;
    }
  }
}
