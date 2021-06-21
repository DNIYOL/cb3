class Container {
  
  constructor(x, y, width, height) {
    var options = {
        isStatic:true,
        'restitution':0.3,
        'friction':0.5,
        'density':0.1,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
     var pos =this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x, pos.y);
     rotate(angle);
     //imageMode(CENTER);
     rectMode(BOTTOM);
     fill(0);
     //image(this.image,0, 0, this.width, this.height);
     rect(0, 0, this.width, this.height)
     pop();
  }
};
