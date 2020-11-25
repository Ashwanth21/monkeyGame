
var monkey , monkey_running
var banana ,bananaImage, stone, obstacleImage
var FoodGroup, obstacleGroup;
var ground;
var score1=0
var PLAY=1;
var END=0;
var score=0;
var gameState=PLAY;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200)
  monkey=createSprite(50,110,20,50); 
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  ground=createSprite(450,190,800,20);
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
}


function draw() {
  background("white");
  text("Survival Time"+score1,500,50)
  //text("Score:"+score,500,50)
  
  monkey.collide(ground);
  if(gameState === PLAY){

   if (keyDown("space")){
     monkey.velocityY=-15
   }
    monkey.velocityY=monkey.velocityY+2
    ground.velocityX = -(4 + 3* score1/100)
    //scoring
    score1 = score1 + 1
    
    }
    if (ground.x < 200){
      ground.x = 300;
    }
    if(monkey.isTouching(obstacleGroup)){
      gameState=END;
    }
  spawnStone()
  drawSprites();
  spawnBanana();
   
}
 if(gameState===END){
    
    ground.velocityX = 0;
    monkey.velocityY = 0
    obstacleGroup.velocityX=0;
    banana.velocityX=0;
    obstaclesGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
     
     obstaclesGroup.setVelocityXEach(0);
     FoodGroup.setVelocityXEach(0);
    }



function spawnBanana(){
  if (frameCount % 60 === 0){ 
    var banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -6;
    FoodGroup.add(banana)
    banana.lifetime = 200;
  }
} 



function spawnStone(){
  if (frameCount % 160 === 0){ 
    var stone = createSprite(600,170,40,10);
    //stone.y = Math.round(random(80,120));
    stone.addImage(obstaceImage);
   stone.scale = 0.1;
   stone.velocityX = -6;
    obstacleGroup.add(stone);
    stone.lifetime = 300;
  }
} 
   