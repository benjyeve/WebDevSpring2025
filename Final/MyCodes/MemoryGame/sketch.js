let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
let matched = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

let lbTimes = [1000, 1000, 1000]
let lbAttempts = [1000, 1000, 1000]

let gameState = 0;

let state = 0;
let cardClicked = -1;
let clickedIndex = -1;
let cardClickedTwo = -1;
let clickedIndexTwo = -1;

let attempts = 0;
let matches = 0;

let offsetX = 50; 
let offsetY = 50;

let bgMusic;
let pgTurn;

let batImg;
let candyImg;
let catImg;
let cornImg;
let ghostImg;
let pumpkinImg;
let skeletonImg;
let witchImg;
let bgImg;
let cardImg;
let titleImg;
let endImg;

let volumeImg;
let muteButton = 1;

let scFont;

let sizeX = 1;
let firstLoop = 0;

let timerValue = 0;
let timeElapsed = 0;

let lb = 0;
  
function preload() {
  
  bgMusic = loadSound('bgMusic.mp3');
  pgTurn = loadSound('PgTurn.mp3');
  
  batImg = loadImage('bat.png');
  candyImg = loadImage('candy.png');
  catImg = loadImage('cat.png');
  cornImg = loadImage('corn.png');
  ghostImg = loadImage('ghost.png');
  pumpkinImg = loadImage('pumpkin.png');
  skeletonImg = loadImage('skeleton.png');
  witchImg = loadImage('witch.png');
  bgImg = loadImage('background.png');
  cardImg = loadImage('cardBg.png');
  
  titleImg = loadImage('Start.png');
  endImg = loadImage('end.jpg');
  
  volumeImg = loadImage('volume.png');
  
  scFont = loadFont('Scary Halloween Font.ttf');
  
}

function setup() {
  createCanvas(800, 800);
  
  shuffle(numbers, true);
//   print(numbers);
  
//   print(numbers[0]);
//   print(numbers[1]);
//   print(numbers[2]);
//   print(numbers[3]);
//   print(numbers[4]);
//   print(numbers[5]);
//   print(numbers[6]);
//   print(numbers[7]);
//   print(numbers[8]);
//   print(numbers[9]);
//   print(numbers[10]);
//   print(numbers[11]);
//   print(numbers[12]);
//   print(numbers[13]);
//   print(numbers[14]);
//   print(numbers[15]);

  bgMusic.loop();
  
  setInterval(timeIt, 1000);
}

function draw() {
  background(220);
  
  if (gameState === 0) {
  
    titleScreen();
    
  } else if (gameState === 1) {
    
    gamePlay();
    
  } else if (gameState === 2) {
    
    endScreen();
    
  } else if (gameState === 3) {
    
    timeLeaderboard();
    
  } else if (gameState === 4) {
    
    attemptsLeaderboard();
    
  } 
}

function cardBack(x, y) {
      let backIndex = 4 * y + x
      
      
      if (matched[backIndex] === 0 && clickedIndex != backIndex && clickedIndexTwo != backIndex){
        let size = 200;
        let xPos = x * size;
        let yPos = y * size;
        
        image(cardImg, xPos, yPos);     
  } 
  
  if (matched[backIndex] === 0 && clickedIndex === backIndex && clickedIndexTwo != backIndex && sizeX > 0 && firstLoop === 1 && state === 1) {
        let size = 200;
        let xPos = x * size;
        let yPos = y * size;
    
  push();
  translate(xPos, yPos);
  sizeX -= .033;
  scale(sizeX, 1);
  image(cardImg, 0, 0);
  pop();
      
  }
  
  if (matched[backIndex] === 0 && clickedIndex != backIndex && clickedIndexTwo === backIndex && sizeX > 0 && firstLoop === 1 && state === 2) {
        let size = 200;
        let xPos = x * size;
        let yPos = y * size;
    
  push();
  translate(xPos, yPos);
  sizeX -= .033;
  scale(sizeX, 1);
  image(cardImg, 0, 0);
  pop();
      
  }
  
  if (sizeX <= 0) {
    
    sizeX = 1;
    firstLoop = 0;
    
  }
}

function mousePressed() {
  if (mouseX>20 && mouseX<70 && mouseY>20 && mouseY<70){
    
      if (muteButton === 1){
        
        muteButton = 0;
        
    } else if (muteButton === 0){
      
      muteButton = 1;
      
    }
}
  
  if (gameState === 0) {
    if (mouseX>250 && mouseX<550 && mouseY>550 && mouseY<650){
      
      gameState = 1;
      timerValue = 0;
      
    }
    
    if (mouseX>150 && mouseX<350 && mouseY>666.5 && mouseY<733.5){
      
      gameState = 3;
  
    }
    
    if (mouseX>350 && mouseX<650 && mouseY>666.5 && mouseY<733.5){
     
      gameState = 4;
      
    }
  }
  
  else if (gameState === 1) {

    let mouseColumn = (Math.floor ((mouseX-100)/150))
    let mouseRow = (Math.floor ((mouseY-100)/150))

    let tempIndex = 4 * mouseRow + mouseColumn

    if (matched[tempIndex] === 0) {
      if (state === 0) {
        clickedIndex = tempIndex;
        cardClicked = numbers[clickedIndex];
        state = 1;
        firstLoop = 1;

      } else if (state === 1 && tempIndex != clickedIndex) {

        cardClickedTwo = numbers[tempIndex];

        clickedIndexTwo = tempIndex;

        state = 2;
        firstLoop = 1;

      } else if (state === 2) {
         if (cardClickedTwo === cardClicked) {
          matched[clickedIndexTwo] = 1;
          matched[clickedIndex] = 1;
          matches++;
        }

        cardClicked = -1;
        clickedIndex = -1;
        cardClickedTwo = -1;
        clickedIndexTwo = -1;
        attempts++;
        if (matches === 8){
          gameState = 2;
          timeElapsed = timerValue;
          lb = 1;
          
        }
        state = 0;
      }
    }
  } else if (gameState === 2) {
    
    
    if (mouseX>250 && mouseX<550 && mouseY>550 && mouseY<650){
     
      gameState = 0
      state = 0;
      cardClicked = -1;
      clickedIndex = -1;
      cardClickedTwo = -1;
      clickedIndexTwo = -1;

      attempts = 0;
      matches = 0;
      
      timerValue = 0;
      
      matched = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      shuffle(numbers, true);

      
    }
  } else if (gameState === 3) {
    
    if (mouseX>250 && mouseX<550 && mouseY>550 && mouseY<650) {
      
      gameState = 0;
      
    }
  } else if (gameState === 4) {
    
    if (mouseX>250 && mouseX<550 && mouseY>550 && mouseY<650) {
      
      gameState = 0;
      
    }   
  }
}

function gamePlay() {
 
  bgImage();
  
  volumePlay();
  
  push();
  fill(235, 97, 35);
  textSize(40);
  stroke(.1);
  textAlign(CENTER);
  textFont(scFont);
  
  text('Attempts: ' + attempts, 225, 65);
  
  text('Time Spent: ' + timerValue, 575, 65);
  pop();
  
  
  push(); 
  translate(100, 100);
  scale(.75);
  
  for (let y=0; y<4; y++) {
    for (let x=0; x<4; x++) {
      let size = 200;
      let xPos = x * size;
      let yPos = y * size;
      
      noFill();
      
      push();
      strokeWeight(3);
      translate(100, 100);
      rect(xPos, yPos, size);
      pop();

    }
  }
  
  for(i=0; i<16; i++) {
    
    if(matched[i] === 0) {
      
      let yPos = Math.floor(i/4) * 200 + 25;
      let xPos = (i % 4) * 200 + 25;
      
      if (numbers[i] === 1) {
    bat(xPos + 75, yPos + 75);
    
   } 
    else if (numbers[i] === 2) {  
    candy(xPos, yPos);
    
  } else if (numbers[i] === 3) {
    cat(xPos, yPos);
    
  } else if (numbers[i] === 4) {
    corn(xPos, yPos);
 
  } else if (numbers[i] === 5) {
    ghost(xPos, yPos);
    
  } else if (numbers[i] === 6) {
    pumpkin(xPos, yPos);
    
  } else if (numbers[i] === 7) {
    skeleton(xPos, yPos);
    
  } else if (numbers[i] === 8) {
    witch(xPos, yPos);
 
  }
    
    cardBack ((i % 4), Math.floor(i/4));

    }      
    }
  pop();
}

function titleScreen(){
  
  image(titleImg, 0, 0);
  
  volumePlay();
  
  rectMode(CENTER);
  
  push();
  
  if (mouseX>250 && mouseX<550 && mouseY>550 && mouseY<650){
    
    fill(200, 56, 5);
  
  } else {
    
    fill (235, 141, 18);
    
  }

  rect(400, 600, 300, 100);
  
  pop();
  
  push();
  
  fill(0);
  textFont(scFont)
  textAlign(CENTER);
  textSize(40);
  text('PLAY', 400, 612.5);
  
  pop();
  
  push();
  
  if (mouseX>150 && mouseX<350 && mouseY>666.5 && mouseY<733.5){
    
    fill(200, 56, 5);
  
  } else {
    
    fill (235, 141, 18);
    
  }

  rect(250, 700, 200, 67);
  
  pop();
  
  push();
  
  textFont(scFont)
  textAlign(CENTER);
  textSize(14.5);
  text('TIMES LEADERBOARD', 250, 705);
  
  pop();
  
  push();
  
  if (mouseX>350 && mouseX<650 && mouseY>666.5 && mouseY<733.5){
    
    fill(200, 56, 5);
  
  } else {
    
    fill (235, 141, 18);
    
  }

  rect(550, 700, 200, 67);
  
  pop();
  
  push();
  
  textFont(scFont)
  textAlign(CENTER);
  textSize(14.5);
  text('ATTEMPTS LEADERBOARD', 550, 705);
  
  pop();
}

function endScreen() {
  
  if (lb === 1) {
  lbTimes.push(timeElapsed);
  lbTimes.sort(compare);
  
  lbAttempts.push(attempts);
  lbAttempts.sort(compare);
    
  lb = 0;
    
  }
  
  image(bgImg, 0, 0, 800, 800);
  
  volumePlay();
  
  push();
  fill(235, 141, 18);
  strokeWeight(2);
  stroke(0);
  textAlign(CENTER);
  textSize(50);
  textFont(scFont);
  text('YOU WIN!', 400, 100);
  text('YOUR TIME: ' + timeElapsed + ' SECONDS', 400, 200);
  text('YOUR ATTEMPTS: ' + attempts, 400, 250);
  
  if (attempts<8) {
    
    text ('YOU CHEATER!', 400, 350)
    
  } else if (attempts<12) {
    
    text ('YOUR MEMORY PUTS', 400, 350);
    text ('ELEPHANTS TO SHAME', 400, 400);
    
  } else if (attempts<20) {
    
    text('THAT\'S PRETTY GOOD!', 400, 350);
    text('CAN YOU DO BETTER?', 400, 400);
    
  } else if (attempts<25) {
    
    text('NOT BAD BUT', 400, 350);
    text('NOT GOOD EITHER', 400, 400);
    
  } else {
    
    text("YOU'D FORGET YOUR HEAD", 400, 350);
    text('IF IT WASN\'T ATTACHED', 400, 400);
  }
  
  push();
  rectMode(CENTER);
  
  if (mouseX>250 && mouseX<550 && mouseY>550 && mouseY<650){
    
    fill(200, 56, 5);
  
  } else {
    
    fill (235, 141, 18);
    
  }

  rect(400, 600, 300, 100);
  pop();
  
  push();
  
  noStroke();
  fill(0);
  textFont(scFont)
  textAlign(CENTER);
  textSize(40);
  text('TRY AGAIN', 400, 612.5);
  
  pop();
  pop();
  
}

function timeLeaderboard() {
  
  image(bgImg, 0, 0, 800, 800)
  
  push();
  fill(235, 141, 18);
  strokeWeight(2);
  stroke(0);
  textAlign(CENTER);
  textSize(50);
  textFont(scFont);
  text('TIMES', 400, 100);
  text('1. ' + lbTimes[0] + ' SECONDS', 400, 200);
  text('2. ' + lbTimes[1] + ' SECONDS', 400, 325);
  text('3. ' + lbTimes[2] + ' SECONDS', 400, 450);
  
  push();
  rectMode(CENTER);
  
  if (mouseX>250 && mouseX<550 && mouseY>550 && mouseY<650){
    
    fill(200, 56, 5);
  
  } else {
    
    fill (235, 141, 18);
    
  }

  rect(400, 600, 300, 100);
  pop();
  
  push();
  
  fill(0);
  textFont(scFont)
  textAlign(CENTER);
  textSize(40);
  text('GO BACK', 400, 612.5);
  
  pop();
  pop();
  
}

function attemptsLeaderboard() {
  
  image(bgImg, 0, 0, 800, 800);
  
  push();
  fill(235, 141, 18);
  strokeWeight(2);
  stroke(0);
  textAlign(CENTER);
  textSize(50);
  textFont(scFont);
  text('ATTEMPTS', 400, 100);
  text('1. ' + lbAttempts[0] + ' moves', 400, 200);
  text('2. ' + lbAttempts[1] + ' moves', 400, 325);
  text('3. ' + lbAttempts[2] + ' moves', 400, 450);
  
  push();
  rectMode(CENTER);
  
  if (mouseX>250 && mouseX<550 && mouseY>550 && mouseY<650){
    
    fill(200, 56, 5);
  
  } else {
    
    fill (235, 141, 18);
    
  }

  rect(400, 600, 300, 100);
  pop();
  
  push();
  
  fill(0);
  textFont(scFont)
  textAlign(CENTER);
  textSize(40);
  text('GO BACK', 400, 612.5);
  
  pop();
  pop();
  
}

function bat(x, y) {
  push();
  translate(-100, -100);
  image(batImg, x, y, 200, 200);
  pop();
}

function candy(x, y) {
  push();
  translate(-25, -25);
  image(candyImg, x, y, 200, 200);
  pop();
}

function cat(x, y) {
  push();
  translate(0, -17.5);
  image(catImg, x, y, 140, 200)
  pop();
}

function corn(x, y) {
  push();
  translate(-22.5, 0);
  image(cornImg, x, y, 200, 148)
  pop();
}

function ghost(x, y) {
  push();
  translate(-10, -20)
  image(ghostImg, x, y, 163, 190);
  pop();
}

function pumpkin(x, y) {
  push();
  translate(-15, -10);
  image(pumpkinImg, x, y, 180, 178);
  pop();
}

function skeleton(x, y) {
  push();
    translate(0, -25);
  image(skeletonImg, x, y, 149, 200)
  pop();
}

function witch(x, y) {
  push();
  translate(-20, 0);
  image(witchImg, x, y, 190, 163);
  pop();
}

function bgImage() {
  image(bgImg, 0, 0);
}

function timeIt() {
  if (timerValue >= 0) {
    timerValue++;
  }
}

function compare(x, y){
  if(x<y){
    return -1;
  }
  else{
    return 1;
  }
}

function volumePlay() {
  
  image(volumeImg, 20, 20, 50, 50);
  
  if (muteButton === 1){
  
  bgMusic.setVolume(0.05);
  
  } else if (muteButton === 0 ) {
    
  bgMusic.setVolume(0);
    
  }
}