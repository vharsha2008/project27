class Bob {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          restitution:0.6,
          friction:1.5,
          density:1.5          
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("pink");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };