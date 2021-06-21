

var bgImg;
var player

function preload(){
  bgImg = loadImage("images/LR2.jpg")
}


function setup() {
  createCanvas(displayWidth-100,displayHeight-100);
  player = createSprite(300, 560, 50, 50);
}

function draw() {
  background(0); 
  image(bgImg, -displayWidth-300, 0, displayWidth*4, displayHeight) 
  console.log(player.x, player.y)

  /*position in frony of piano x= 300 - 400, y= 560, 685
    right corner window room x = 1130, y = 560

    selves = x = 1795, y= 360
    other room 

  */
  if(keyDown(UP_ARROW)){
    writePosition(0,-10);
  }
  if(keyDown(DOWN_ARROW)){
    writePosition(0,+10);
  }
  if(keyDown(RIGHT_ARROW)){
    writePosition(10,0);
  }
  if(keyDown(LEFT_ARROW)){
    writePosition(-10, 0);
  }

  camera.position.y = displayHeight/2
  camera.position.x = player.x
  drawSprites();
}

function writePosition(x, y){
  player.x = player.x + x;
  player.y = player.y+y
}