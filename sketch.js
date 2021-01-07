var car;
var weight, speed, deformation;
var wall;



function setup() {
  createCanvas(800,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(800,200,30, height/2);
  car.velocityX = speed;
}

function draw() {
  background(0);  
  if(isTouching(car,wall)){
    car.velocityX = 0;
    deformation();
  }
  
  drawSprites();
}
function deformation(){
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation  = 0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
        car.shapeColor = color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }
  
}
function isTouching(object1, object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2
  && object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object1.y < object2.height/2 + object1.height/2){
    return true
} 
else{
  return false
}}
