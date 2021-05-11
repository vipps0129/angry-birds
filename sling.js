class Sling{

 constructor(z,a){
  var c_options={
  bodyA:z,
  pointB:a,
  stiffness:0.05,
  length:10
  }
  this.pointB=a
  this.sling1=loadImage("sprites/sling1.png")
  this.sling2=loadImage("sprites/sling2.png")
  this.sling3=loadImage("sprites/sling3.png")
  this.chain=Constraint.create(c_options)
  World.add(world,this.chain)
 }
 fly(){
    //null means nothing
    this.chain.bodyA=null
 }
attach(b){
  this.chain.bodyA=b
}
 display(){

   image (this.sling1,200,90)
   var posB=this.pointB
   stroke(48,22,8)
   if(this.chain.bodyA!=null){
    var posA=this.chain.bodyA.position;
  
     if(posA.x<210){
    strokeWeight(7)
    line(posA.x-20,posA.y,posB.x+30,posB.y+65)
    image(this.sling3,posA.x-25,posA.y-12,15,40)
    line(posA.x-20,posA.y,posB.x-27,posB.y+65)
     }
     else{
      strokeWeight(4)
      line(posA.x+20,posA.y,posB.x+30,posB.y+65)
      image(this.sling3,posA.x+25,posA.y-12,15,40)
      line(posA.x+20,posA.y,posB.x-27,posB.y+65)
     }

    }else{
      strokeWeight(6)
      line(220,110,posB.x+30,posB.y+65)
      image(this.sling3,210,100,15,40)
      line(220,110,posB.x-27,posB.y+65)
     

    }  
    image (this.sling2,170,90)








 }





}