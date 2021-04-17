class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA :bodyA,
            pointB :pointB,
            stiffness :0.7,
            length :30
        }
        this.pointB=pointB;
        this.sling=Constraint.create(options);
        World.add(myworld,this.sling)
    }
  display(){
    var pointA=this.sling.bodyA.position
    var pointB=this.pointB

    line(pointA.x,pointA.y,pointB.x,pointB.y)
  }
}