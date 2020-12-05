
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var fruitGroup, obstacleGroup
var score
var survivalTime = 0
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(400,400)
  
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1

  ground = createSprite(400,350,900,10)
  ground.velocityX = -4
  ground.x = ground.width/2
  console.log(ground.x)
  
  obstaclegroup = new Group()
  fruitGroup = new Group()
}


function draw() {
  background("white")
  
  stroke("white")
  textSize(20)
  fill("white")
  text("Score: " + score, 200, 50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 200,50)
  
  
  
  if(keyDown("space")){
    monkey.velocityY = -12
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground)
  
  if(ground.x<0){
    ground.x = ground.width/2
  }
  
  
  console.log(ground.x)
  drawSprites();
  fruit();
  obs();
}

function fruit(){
  if(frameCount%80 === 0){
    banana = createSprite(400,400,20,20)
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.y = Math.round(random(120,240))
    banana.velocityX = -3
    banana.lifetime = 200
    fruitGroup.add(banana)
  }
}

function obs(){
  if(frameCount%300 === 0){
    obstacle = createSprite(400,320,20,20)
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.15
    obstacle.velocityX = -3
    obstacle.lifetime = 200
    
  }
}


