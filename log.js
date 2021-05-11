class Log extends   BaseClass {
    
    constructor(x,y,w,h,a){
        super(x,y,w,h,a)
        
          this.angle=a
          Matter.Body.setAngle(this.box,this.angle)
          this.image=loadImage("sprites/wood2.png")
         
        
    }

   

    

 }


 
 