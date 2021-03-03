
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1
var bobObject2
var bobObject3
var bobObject4
var bobObject5
var roofObject
var rope1
var rope2
var rope3
var rope4
var rope5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   bobObject1 = new ball(215,500)
   bobObject2 = new ball(315,500)
   bobObject3 = new ball(415,500)
   bobObject4 = new ball(515,500)
   bobObject5 = new ball(615,500)
   roofObject = new roof(400,150,450,50)
   rope1 = new rope(bobObject1.body,roofObject.body, -100*2, 0 )
   rope2 = new rope(bobObject2.body,roofObject.body, -100*1, 0 )
   rope3 = new rope(bobObject3.body,roofObject.body, -100*0, 0 )
   rope4 = new rope(bobObject4.body,roofObject.body, -100*-1, 0 )
   rope5 = new rope(bobObject5.body,roofObject.body, -100*-2, 0 )
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



