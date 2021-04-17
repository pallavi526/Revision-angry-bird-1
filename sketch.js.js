const Chaitu=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;


var myengine,myworld,ground;
var sling
function setup(){
  var canvas=createCanvas(400,400);
  myengine=Chaitu.create();
  myworld=myengine.world;

  ground= new Ground(200,390,400,10);

  box1=new Box(200,100,50,50)
  box2=new Box(230,150,50,50)

  rope=new SlingShot(box1.body,{x:100,y:100})
}
function draw()
{
  background(0);
 Chaitu.update(myengine)
  
 ground.display();
 box1.display();

 box2.display();
 rope.display();
  
}
