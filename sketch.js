var paperObject,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constriant = Matter.Constriant;
var b1,b2,b3;
var dustbin, db;
var XYZ;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	groundSprite=createSprite(width/2, height-65, width,10);
	groundSprite.shapeColor=color("cyan");

	


	engine = Engine.create();
	world = engine.world;
	
	//Create a Ground
	 ground = Bodies.rectangle(width/2, height-65, width, 10 , {isStatic:true} );
 	 World.add(world, ground);

	// DBR = Bodies.rectangle(640,height-160 ,150 ,180  , {isStatic:false} );
	// World.add(world, DBR);
	  
	 //XYZ = new Launcher(paper.body,{x:200, y:100});
	 b1 = new Container(640,height-65,150,30);
	 b2 = new Container(560,height-160,20,180);
	 b3 = new Container(710,height-160,20,180);
    //  dustbin = new ContainerL(640,height-160,150,180);
	
	dustbin=createSprite(640, height-160, 150,180);
	// dustbin.shapeColor=color("blue");
	// dustbin.image = loadImage("sprites/dustbingreen.png");
	db = loadImage("dustbingreen.png");
	dustbin.addImage(db);
	dustbin.scale=0.55;


    paperObject = new paper(100,300,70);
	//launcher = new Launcher(paperObject.body,{x:370,y:270});
	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
  	background(0);
	 paperObject.display(); 
	 b1.display(); 
     b2.display();
	 b3.display();
	//  XYZ.display();
	//dustbin.display();

	


	  drawSprites();
	 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:80,y:-130});
	}
}
function mouseDragged(){

	Matter.Body.setPosition(paperObject.body,{x:mouseX,y:mouseY});
  }
  
  
  function mouseReleased(){
	
	launcher.fly();
  }



