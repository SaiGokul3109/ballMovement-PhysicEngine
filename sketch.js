const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground;
var right;
var left;
var topwall;
var ball;
var but1;
var but2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  but1=createImg('rightarrow.png');
  but1.position(250,30);
  but1.size(60,60);
  but1.mouseClicked(hForce);
  
  but2=createImg('uparrow.png');
  but2.position(20,30);
  but2.size(50,50);
  but2.mouseClicked(vForce);

  ground=new Ground(200,390,400,20);
  right = new Ground(390,200,20,400)
  left = new Ground(10,200,20,400);
  topwall = new Ground(200,10,400,20);

  var ball_options={
    restitution:0.9
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  right.show();
  left.show();
  topwall.show();

  Engine.update(engine);
}
function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.04,y:0});
}
function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.04});
}