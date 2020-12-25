class Rope{
    constructor(bodyA, bodyB,xOffset){
        var ropeOptions={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04
            //length:10 //PLAY WITH THIS LENGTH PROPERTY TO HAVE FUN!! 
        }
        this.xOffset=xOffset;
        this.rope=Constraint.create(ropeOptions);
        World.add(world,this.rope)

    }

    display()
    {
        
        var pointA =    this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        push();
        stroke("white")
        //pointA+offset because of distance from center of roof and pointB.y-25 so that it touches the circumference of the bob
        line (pointA.x+this.xOffset, pointA.y, pointB.x,pointB.y-25); 
        pop();
    }
}