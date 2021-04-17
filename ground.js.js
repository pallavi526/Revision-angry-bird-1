class Ground{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.surface=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        World.add(myworld,this.surface);

    }
    display(){
        var pos=this.surface.position;

        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h)
    }
}