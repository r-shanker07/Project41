var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;

var maxDrops=100;
var man, manI

function preload(){
    manI = loadImage("images/Walking Frame/walking_1.png")
}

function setup(){
   createCanvas(300,500)
   engine = Engine.create()
   world = engine.World; 

   man = createSprite(150, 500, 30,30)
   man.setImage("man,manI")

   umbrella = new Umbrella(150,700,200)

   for(var i=0; i<maxDrops; i++){
      maxDrops.push(new Drop(random(0,400),random(0,400)))
   }

}

function draw(){
    drop.display()
    umbrella.display()
}   

