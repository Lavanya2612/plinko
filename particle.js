class Particle{
    constructor(x, y, r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        
        this.y= y;
        this.x =x;
        this.r =r
        this.body = Bodies.circle(x, y, r, options);
        this.color=(random(0,255),random(0,255),random(0,255) )
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop();
      }
}