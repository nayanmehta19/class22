const Engine = Matter.Engine;
   const World = Matter.World;
  const  Bodies = Matter.Bodies;
var engine,world,ground;

  function setup() {
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;
var ground_options={
  isStatic:true
}
var ball_options={
  restitution:1.5
}

ground=Bodies.rectangle(200,380,400,20,ground_options)
World.add(world,ground)
console.log(ground);

 ball=Bodies.circle(200,100,40,ball_options)
 World.add(world,ball)
console.log(ball);
}

function draw() {
  background(0,255,255);  
  Engine.update(engine)
 rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,40,40)
 
drawSprites();
}