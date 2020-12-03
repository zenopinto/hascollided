var car,wall,car2,car3,border,bor,bor2;
var speed,weight,wal,all,thickness;

function setup() {
  
 speed=random(223,321) 
 weight=random(30,52)
 thickness=random(22,83)
 car = createSprite(50,190,50,50);
 car.velocityX=speed


 
 
 all=createSprite(1200,200,thickness)
}

function draw() {
  background(255,255,255);
  
  if(hasCollided(all,car)){
    car.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

    if(damage>10){
      wall.shapeColor="red"
    }
    if(damage<10){
      wall.shapeColor="green"
    }
  }
  drawSprites();
}
function hasCollided(){
  carRightEdge=car.x +car.width;
  allLeftEdge= wall.x;
  if(carRightEdge>=allLeftEdge){
    return true
  }
  return false
}