const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;


function setup() 
{
   var canvas = createCanvas(480,800);
  
   engine = Engine.create();
   world = engine.world;

  wallUp = new Ground(100,10,1200,20);
  wallDown = new Ground(600,height,1200,20);
  wallLeft = new Ground(5,height,20,1700);
  wallRight = new Ground(475,height,20,1700);

  plinko1 = new Divisions(50,height,20,500);
  
  
}

function draw() 
{
  background("black");  
  wallDown.display();
  wallLeft.display();
  wallRight.display();
  wallUp.display();
  
  plinko1.display();
  drawSprites();
}