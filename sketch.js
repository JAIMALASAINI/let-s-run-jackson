var path,boy;
var pathImg,Runningboy; 

function preload(){
  //pre-load images
  pathImg=loadImage("path.png");
  Runningboy=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  

  //creating path
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;

  boy=createSprite(200,200);
  boy.addAnimation("Runningboy",Runningboy);
  boy.scale=0.1;

  //creating invisible boundaries
  boundary1=createSprite(395,200,10,400);
  boundary2=createSprite(5,200,10,400);
  boundary1.visible=false;
  boundary2.visible=false;
}

function draw() {
  background(0);
  //creating condition to repeat the background
  if (path.y > 400) {
    path.y = height/2;
  }
  //making the boy 
  drawSprites();
}
