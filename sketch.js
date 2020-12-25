
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5; 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    roof=new Roof(400,100,500,30)
	//Create the Bodies Here.
   bob1=new Bob(300,500,50);
   bob2=new Bob(350,500,50);
   bob3=new Bob(400,500,50);
   bob4=new Bob(450,500,50);
   bob5=new Bob(500,500,50);
	
   bobDiameter=50;
   rope1=new Rope(roof.body, bob1.body,-bobDiameter*2);
   rope2=new Rope(roof.body, bob2.body, -bobDiameter*1)
   rope3=new Rope(roof.body, bob3.body, 0)
   rope4=new Rope(roof.body, bob4.body, bobDiameter*1)
   rope5=new Rope(roof.body, bob5.body, bobDiameter*2)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display();
  rope1.display();
  
  bob2.display();
   rope2.display();

   bob3.display();
   rope3.display();

   bob4.display();
   rope4.display();

   bob5.display();
   rope5.display();
 
}

function keyPressed()
{
   if(keyCode ===UP_ARROW)
   {
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
      //Matter.Body.applyForce(bob5.body, bob5.body.position,{x:50, y:45});
   }
}

