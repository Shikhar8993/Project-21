var bullet , wall;
var speed ,weight;
var deformation;

function setup() {
  createCanvas(800,400);
  speed = random(55,90);
  weight=random(400,1500);
  
  thicknes=random(22,93);

  
 
  bullet = createSprite(50, 200, 50, 5);
  



  wall=createSprite(600,200,40,height/2);
  

   
   


 
}

function draw() {
  background("black");  
  bullet.velocityX = speed;
  

 if(hascollided(bullet,wall)){
   bullet.velocityX=0;
   var damage=0.5*weight*speed*speed/(thicknes*thicknes*thicknes);


   if(damage>10){
    bullet.shapeColor = "red"
  }
  if(damage<10){
    bullet.shapeColor = "green"
  }

 }
  
  drawSprites();
}



 function hascollided(bullet,wall){
   bulletRightEdge=bullet.x + bullet.width;
   wallLeftEdge=wall.x;
   if(bulletRightEdge>=wallLeftEdge){
     return true;
   }
   return false;


 }
