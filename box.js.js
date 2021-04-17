class Box{
    constructor(x,y,w,h){
        var options={
            restitution:0.8,
            friction:1,
            density:1
    
        }
        this.surface=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        this.b=loadImage("sprites/wood1.png")
        World.add(myworld,this.surface);

    }
    display(){
        var pos=this.surface.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle=this.surface.angle
        push()
        translate(pos.x,pos.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.b,0,0,this.w,this.h)
        pop()
    }
}