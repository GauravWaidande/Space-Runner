var spaceship,
  ship1Img,
  enemyship,
  ship2Img,
  back,
  backImg,
  gameState,
  bonus,
  bonusImg,
  score,
  bonusscore,
  startb,
  playb,
  restartb,
  backb,
  level2b,
  backbImg,
  startbImg,
  arrows,
  arrowsImg,
  leftarrow,
  rightarrow,
  uparrow,
  downarrow,
  line1,
  line2,
  line3,
  line4;
  
function preload() {
  
  ship1Img = loadImage("Spaceship1.png");
  ship2Img = loadImage("spaceship2.png");
  backImg = loadImage("space.jpg");
  bonusImg = loadImage("star.png");
  startbImg=loadImage("button(spacerunner).png");
  backbImg=loadImage("backbutton.png");
  arrowsImg=loadImage("arrowkeys.png");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  back = createSprite(width/2, height/2, 10, 10);
  back.addImage("back", backImg);
  back.scale = 10;
  
  startb=createSprite(width/3,height/2.050,10,10);
  startb.addImage("b1",startbImg);
  startb.scale=0.05;
  
  playb=createSprite(-50,-50,10,10);
  playb.addImage("b2",startbImg);
  playb.scale=0.05;
  
  restartb=createSprite(-50,-50,10,10);
  restartb.addImage("b3",startbImg);
  restartb.scale=0.05;
  
  backb=createSprite(-50,-50,10.10);
  backb.addImage("b4",backbImg);
  backb.scale=0.2;

  level2b=createSprite(width/2.9,-50,10,10);
  level2b.addImage("b5",startbImg);
  level2b.scale=0.05;
  
  arrows=createSprite(-50,-50,10,10);
  arrows.addImage("a1",arrowsImg);
  arrows.scale=0.4;
  
  leftarrow=createSprite(width-142,height-80,33,33);
  leftarrow.visible=false;
  rightarrow=createSprite(width-57,height-80,33,33);
  rightarrow.visible=false;
  downarrow=createSprite(width-99,height-80,33,33);
  downarrow.visible=false;
  uparrow=createSprite(width-99,height-125,33,33);
  uparrow.visible=false;
  
  line1=createSprite(width/2,height/2,width,5);
  line1.visible=false;
  line2=createSprite(width/2,height-5,width,5);
  line2.visible=false;
  line3=createSprite(width-5,height/2,5,height);
  line3.visible=false;
  line4=createSprite(width/90,height/2,5,height);
  line4.visible=false;

  bonus = createSprite(random(width-50,width-600),-30,10,10);
  bonus.addImage("point", bonusImg);
  bonus.scale = 0.06;

  spaceship = createSprite(width-200,height-200, 10, 10);
  spaceship.addImage("ship1", ship1Img);
  spaceship.scale = 0.25;
  spaceship.visible=false;

  enemyship = createSprite(random(width-50,width-600),-50,10,10);
  enemyship.addImage("ship2", ship2Img);
  enemyship.scale = 0.2;
  enemyship.setCollider("rectangle",0,0,400,400);

  gameState = "serve";

  score = 0;
  
  bonusscore=0;
  
}

function draw() {
  
  background("blue");
  
  //infinite running
  if(bonus.y>windowHeight){
    bonus.y=-30;
    bonus.x=random(width-50,width-600);
  }
  if(enemyship.y>height){
    enemyship.y=-50;
    enemyship.x=random(width-50,width-600);
  }
  if(back.y>height){
    back.y=width/2;
    back.x=height/2;
  }
  
  
  //buttons
  if(touches.lenght>0||mousePressedOver(startb)){
    gameState="rules";
    touches=[];
  }
  if(touches.lenght>0||mousePressedOver(playb)){
    gameState="play";
    touches=[];
  }
  if(touches.lenght>0||mousePressedOver(backb)){
    gameState="serve";
    touches=[];
  }
  if(touches.lenght>0||mousePressedOver(restartb)){
    gameState="play";
    score = 0;
    bonusscore=0;
    touches=[];
  }
  if(touches.lenght>0||mousePressedOver(level2b)){
    gameState="rules2";
    touches=[];
  }
  
  //level 1 gameStates
  if(gameState==="serve"){
    
    spaceship.visible=false;
    spaceship.velocityY=0;
    spaceship.velocityX=0;
    enemyship.y=-50;
    bonus.y=-30;
    bonus.velocityY=0;
    enemyship.velocityY=0;
    back.velocityY=0;
    score = 0;
    bonusscore=0;
    backb.x=-50;
    backb.y=-50;
    startb.x=width/3;
    startb.y=height/2.050;
    arrows.x=-50;
    arrows.y=-50;
    level2b.y=-50;
    
  }
  if(gameState==="rules"){
    
    spaceship.visible=false;
    spaceship.velocityY=0;
    spaceship.velocityX=0;
    enemyship.y=-50;
    bonus.y=-30;
    bonus.velocityY=0;
    enemyship.velocityY=0;
    back.velocityY=0;
    score = 0;
    bonusscore=0;
    playb.x=width/7.5;
    playb.y=height/1.37;
    startb.y=-50;
    startb.x=-50;
    restartb.y=-50;
    restartb.x=-50;
    backb.x=-50;
    backb.y=-50;
    arrows.x=-50;
    arrows.y=-50;
    level2b.y=-50;
    
  }
  if(gameState==="play"){
    
    spaceship.visible=true;
    spaceship.collide(line1);
    spaceship.collide(line2);
    spaceship.collide(line3);
    spaceship.collide(line4);
    bonus.velocityY=10;
    enemyship.velocityY=10;
    back.velocityY=10;
    score = score + Math.round(getFrameRate()/60);
    playb.y=-50;
    playb.x=-50;
    startb.y=-50;
    startb.x=-50;
    restartb.y=-50;
    restartb.x=-50;
    backb.x=width/15;
    backb.y=height/20;
    arrows.x=width-100;
    arrows.y=height-100;
    level2b.y=-50;
    
    if(spaceship.isTouching(bonus)){
      bonusscore=bonusscore+1;
      bonus.y=-30;
      bonus.velocityY=15;
      bonus.x=random(width-50,width-600);
    }
    
    
    if(spaceship.isTouching(enemyship)){
      gameState="end";
    }
    
    
    if(touches.lenght>0||mousePressedOver(leftarrow)){
      spaceship.velocityX=-4;
    }
    if(touches.lenght>0||mousePressedOver(rightarrow)){
      spaceship.velocityX=4;
    }
    if(touches.lenght>0||mousePressedOver(downarrow)){
      spaceship.velocityY=4;
    }
    if(touches.lenght>0||mousePressedOver(uparrow)){
      spaceship.velocityY=-4;
    }
    
    
  }
  if(gameState==="end"){
    
    spaceship.visible=false;
    spaceship.velocityY=0;
    spaceship.velocityX=0;
    enemyship.y=-50;
    bonus.y=-30;
    bonus.velocityY=0;
    enemyship.velocityY=0;
    back.velocityY=0;
    playb.y=-50;
    playb.x=-50;
    startb.y=-50;
    startb.x=-50;
    backb.x=-50;
    backb.y=-50;
    arrows.x=-50;
    arrows.y=-50;
    restartb.y=height/1.80;
    restartb.x=width/3;
    
  }
  

  //level 2 gameStates
  if(gameState==="rules2"){

    spaceship.visible=false;
    spaceship.velocityY=0;
    spaceship.velocityX=0;
    enemyship.y=-50;
    bonus.y=-30;
    bonus.velocityY=0;
    enemyship.velocityY=0;
    back.velocityY=0;
    score = 0;
    bonusscore=0;
    playb.x=width/7.5;
    playb.y=height/1.37;
    startb.y=-50;
    startb.x=-50;
    restartb.y=-50;
    restartb.x=-50;
    backb.x=-50;
    backb.y=-50;
    arrows.x=-50;
    arrows.y=-50;
    level2b.y=-50;

  }


  drawSprites();
  
  
  if(gameState==="serve"){
    fill("green");
    textSize(20);
    text("Space Runner",width/3,height/2.3);
    text("Start",width/2.7,height/2); 
  }
  
  
  if(gameState==="rules"){
    textSize(13.4);
    fill("yellow");
    text("Story :",width-360,height/5);
    text("Sam and his friends have gone on a space journey to collect",width-360,height/4);
    text("stars but they are not able to because of their enemies. Help",width-360,height/3.47);
    text("them in this mission.",width-360,height/3.04);
    fill("red");
    text("Rules :",width-360,height/2.6);
    text("Collect the stars to increase the stars score",width-360,height/2.3);
    text("The game will get over if you crash with the enemyship",width-360,height/2);
    text("Control the spaceship with the arrows",width-360,height/1.77);
    text("The score will keep increasing while you play",width-360,height/1.60);
    text("You can leave the game if you want by pressing back button",width-360,height/1.47);
    text("Start playing",width/6,height/1.35);
  }
  
  
  if(gameState==="play"){
    fill("white");
    textSize(15);
    text("Score "+score,width-75,height-590);
    text("Stars "+bonusscore,width-75,height-570);
  }
  
  
  if(gameState==="end"){
    fill("red");
    textSize(30);
    text("Game Over",width/3,height/2);
    textSize(20);
    text("Restart",width/2.7,height/1.77);
    fill("white");
    text("Stars "+bonusscore,width/3,height/1.60);
    if(bonusscore===7||bonusscore>7){
      fill("green");
      text("New level unlocked !",width/3,height/1.43);
      text("Level 2",width/2.7,height/1.31);
      level2b.y=height/1.33;
   }
  }
  
  
}