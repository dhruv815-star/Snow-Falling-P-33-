const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies =Matter.Bodies;

var engine,world;
var snow = [];
var snowImg;

function preload()
{
  snowImg = loadImage("snow3.jpg");
}
function setup() 
{
  var canvas = createCanvas(1000,600);
  
  engine = Engine.create();
  world = engine.world;
}

function draw() 
{
  background(snowImg); 
  
  Engine.update(engine);

  //creating snow falling.
  if(frameCount % 40 === 0)
  {
    snow.push(new Snow(random(50,950),10));
  }

  //displaying snow falling.
  for(var j=0; j< snow.length; j++)
  {
    snow[j].display();
  }

}
