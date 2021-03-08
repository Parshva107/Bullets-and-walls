var bullet,wall;
var speed,weight;
var thickness;
var damage;
function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50,200,40,20);
  bullet.shapeColor=color("white");
  bullet.velocityX = speed;
  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = ("255,0,0");  
  damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

}

function draw() {
  background("black");  
  console.log(damage);
if(bullet.isTouching(wall)){
 bullet.velocityX = 0
 if (hasCollided(bullet,wall)){
 bullet.velocityX=0;
 }
 if(damage>10){
 wall.shapeColor=color("255,0,0")
    
if(damage<10){
 wall.shapeColor=color("0,255,0")
 }
 }
 } 
  
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {return true}
  return false
}
