class BaseClass {
    
    constructor(x,y,w,h,a){
        var options={
            restitution:0.5
          }
          this.box=Bodies.rectangle(x,y,w,h,options)
          this.width=w;
          this.height=h;
          
          this.image=loadImage("sprites/base.png")
          World.add(world,this.box)
        
    }

    display(){
        var pos=this.box.position
        push ()
        translate(pos.x,pos.y)
        angleMode(RADIANS)
        rotate(this.box.angle)
        imageMode(CENTER);
       /* image(image,x,y,width,height) */ 
       
        image(this.image,0,0,this.width,this.height);
        pop()
         
    }
   
    

 }


 
 