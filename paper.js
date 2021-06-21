class paper {
  
    constructor(x, y, diameter) {
      var options = {
          isStatic: false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
      }
      this.body = Bodies.circle(x, y, diameter-45, options);
      this.diameter = diameter;
      this.image = loadImage("paperW.png");
      

      World.add(world, this.body);
    }
    display(){
       var pos =this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       imageMode(CENTER);
       fill('255');
       image(this.image,0, 0, 70,70);
       pop();
    }
  };
  