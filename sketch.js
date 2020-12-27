
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bob1,bob2,bob3,bob4,bob5;
var roof;
var line1,line2,line3,line4,line5;
function preload()
{
	
}

function setup() {
	createCanvas(800,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	line1 = new Roof(300,200,2,350)
	line2 = new Roof(360,200,2,350)
	line3 = new Roof(420,200,2,350)
	line4 = new Roof(480,200,2,350)
	line5 = new Roof(540,200,2,350)
	bob1 = new Bob(300,400,0,0)
	bob2 = new Bob(360,400,0,0)
	bob3 = new Bob(420,400,0,0)
	bob4 = new Bob(480,400,0,0)
	bob5 = new Bob(540,400,0,0)

	roof = new Roof(400,50,400,50)

	


	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255)
  
  drawSprites();
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  line1.display();
  line2.display();
  line3.display();
  line4.display();
  line5.display();


}



