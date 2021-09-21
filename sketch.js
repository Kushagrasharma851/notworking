var backgroundImage,marioImage,floorImage,outImages,runningImage;
var mario,floor,floor2,floor3,floor4,edges;
var ob1,ob2,ob3,ob4,ob5,ob6,objects;
function preload(){

backgroundImage=loadImage("images/background.png");

marioImage = loadAnimation("images/walk1.png","images/walk2.png","images/walk3.png");

}



function setup() {
  createCanvas(displayWidth*5,displayHeight);
  mario = createSprite(100, 150, 50, 50);
  mario.scale=0.8;

  mario.addAnimation("mario",marioImage);
  mario.setCollider("circle",0,0,19);

  floor = createSprite(200,600,500, 150);
  floor2 = createSprite(1400,600,1200, 150);
 // floor = createSprite(displayWidth/2,displayHeight-120 ,3000, 150);
 objects=createGroup();
 ob1 = createSprite(533,587,25,20);
 ob2 = createSprite(666,480,25,20);
 ob3 = createSprite(811,444,21,170);
 //ob2 = createSprite(666,480,10,5);
 //ob2 = createSprite(666,480,10,5);
 //ob2 = createSprite(666,480,10,5);
 mario.debug=true;
 ob1.setCollider("rectangle",0,0,40,40);
 ob2.setCollider("rectangle",0,0,40,40);
 ob3.setCollider("rectangle",0,0,21,170);
 //ob2.setCollider("rectangle",0,0,50,50);
 //ob2.setCollider("rectangle",0,0,50,50);
 objects.add(ob1);
 objects.add(ob2);
 objects.add(ob3);
 //objects.add(ob4);
 //objects.add(ob5);
 //objects.add(ob6);

 edges=createEdgeSprites();
}


function draw() {
  background(backgroundImage);  
 camera.position.x=mario.x;
 camera.position.y=displayHeight/2;
 // image(floorImage,displayWidth/2,displayHeight-80,displayWidth,50);
mario.velocityY+=5;
mario.collide(floor);
mario.collide(floor2);
mario.collide(objects);
mario.setCollider("rectangle",0,0,100,100);
text(mouseX+","+mouseY,mouseX,mouseY);
//mario.debug=true;
if(keyDown (UP_ARROW) && mario.y>470){

 

  mario.velocityY=-40;

}
if(keyDown (RIGHT_ARROW) ){

  mario.x+=10;

}
if(keyDown (LEFT_ARROW) ){

  mario.x-=10;

}
mario.collide(edges);


  drawSprites();


}









