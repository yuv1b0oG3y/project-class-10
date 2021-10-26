var sea,ship;
var seaImg,shipImg;

function preload(){
  //uncomment the code to add animation to ship 

  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(1600,800);
  background("blue");

  // Moving background
  sea=createSprite(400,200, 1600, 800);
  sea.addImage(seaImg);
  sea.velocityX = -5;

  
  ship = createSprite(170,400,100,100);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale = 0.5;
  
}

function draw() {
  background(0);
  sea.velocityX = -3;

  //uncomment code to reset the background
  if(sea.x < 0){
    sea.x = 40;
  }

 
  drawSprites();
}