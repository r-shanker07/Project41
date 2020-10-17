class Drop{
    constructor(x,y,r){
        var options ={
            friction:0.1;
        }
        this.r=r;

        this.body = Bodies.circle(x,y,this.r,options)
        this.color = color("blue")
        World.add(world, this.body)

        if(this.body.position > height){
            MediaStreamTrackEvent.Body.setPosition(this.body,{x:random(0,400), y:random(0,400)})
        }
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle
        
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        noStroke()
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
};