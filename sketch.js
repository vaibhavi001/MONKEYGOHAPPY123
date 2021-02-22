
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,survivalTime
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
ground=createSprite(400,400,900,10);
 ground.velocityX=4;
ground.x=ground.width/2
console.log(ground.x);
  
 
bananaGroup= createGroup();

monkey=createSprite(300,100,20,20);
monkey.addAnimation("moving",monkey_running);
 monkey.scale=0.4;
monkey.collide(ground); 
}


function draw() {

  stroke("white");
  textSize(20);
  fill("white");
  text("score="+score,500,500)
  
  stroke("black")
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50)
  
 
   food();
obstacles();
 
  if(keyDown("space")){
  monkey.velocityY=-4;
  }
  drawSprites();
}
function food(){
if (frameCount%80==0){
banana=createSprite(400,200,20,20);
banana.y=Math.round(random(100,200));
banana.addImage(bananaImage);
banana.velocityX=-4;
banana.scale=0.4;

bananaGroup.add(banana);
}
}

function obstacles(){
if (frameCount%300==0){
obstacle=createSprite(400,200,20,20);
obstacle.lifetime=150;
obstacle.addImage(obstacleImage);
obstacle.scale=0.2
}
}



