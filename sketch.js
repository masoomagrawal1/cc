
// giving short names 
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;




var engine,world,object,ground,c1,c2,c3;
function setup() {
   engine=Engine.create();  //creates physics engine 
   world=engine.world;    //creating a physical world

    var option1_box={
      restitution:0.7 //bouncynesss
    }

   object=Bodies.circle(200,100,20,option1_box);
   World.add(world,object ); // add body(object) to the world

   c1=Bodies.circle(50,80,10,option1_box);
   World.add(world,c1);

   c2=Bodies.circle(150,100,15,option1_box)
   World.add(world,c2);
  
   c3=Bodies.circle(70,180,12,option1_box);
   World.add(world,c3);






   var options={
    isStatic: true// makes object static
  }
   ground=Bodies.rectangle(200,390,400,20,options);
   World.add(world,ground);
   

   
  createCanvas(400,400);
 
}

function draw() {
  background(0); 
  Engine.update(engine);  //updating physics engine
 
  ellipseMode(RADIUS)
  fill("yellow");
  ellipse(object.position.x,object.position.y,20,20);

  fill("blue");
  ellipse(c1.position.x,c1.position.y,10,10);

  fill("red");
  ellipse(c2.position.x,c2.position.y,15,15);

  fill("purple");
  ellipse(c3.position.x,c3.position.y,12,12)

  rectMode(CENTER);
  fill("green")
  rect(ground.position.x,ground.position.y,width,20);

  drawSprites();
}