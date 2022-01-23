var obsatcles1, obsatcles1Img
var doorImg, door, doorsGroup;
var invisibleBlockGroup, invisibleBlock;
var climberImg, climber, climbersGroup;
var gameState = "play"
function preload(){
    obsatcles1 = loadImage("obstacles.gif");
    doorImg = loadImage("DOOR.png");
    climberImg = loadImage("obstacles.gif2");
    ghostImg = loadImage("ghost.png");
    
  }


function setup() {
 createCanvas(600,600);
 obsatcles1 = createSprite(300,300);
  obsatcles1.addImage("obstacles",obsatcles1Im);
  obsatcles1.velocityY = 5;
  doorsGroup=newGroup();
  obsatclesGroup=newGroup();
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
}
function draw() {
    background(255);
   if(tower.y >400){
        tower.y = 300
      } 
    
    if (gameState === "play") {
      
      if(keyDown("left_arrow")){
          ghost.x = ghost.x - 3;
  
        
      }
      if(keyDown("right_arrow")){
    
            ghost.x = ghost.x + 3;
  
        
        
      }
      if(keyDown("space")){
    
           ghost.velocityY = -10;
  
      
        
      }
    
    ghost.velocityY = ghost.velocityY + 0.8;
    
     
       
      
      
  
    
  
       if(climbersGroup.isTouching(ghost)){
        ghost.velocityY = 0;
      }
      if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
        ghost.destroy();
        gameState = "end"
      }
      if (gameState === "end"){
        stroke("yellow");
        fill("yellow");
        textSize(30);
        text("Game Over", 230,250)
        function spawnDoors() {
            //write code here to spawn the clouds
            if (frameCount % 60 === 0) {
              var obsatcles1 = createSprite(400,120,40,10);
              obsatcles1.y = Math.round(random(80,120));
              obsatcles1.addImage(cloudImage);
              cloud.scale = 0.5;
              cloud.velocityX = -3;
              
               //assign lifetime to the variable
              cloud.lifetime = 200;
              
              //adjust the depth
              cloud.depth = trex.depth;
              trex.depth = trex.depth + 1;
              
              //add each cloud to the group
              cloudsGroup.add(cloud);}
            }
   
