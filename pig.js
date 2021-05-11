class Pig extends BaseClass{
    
    constructor(x,y){
       
         super(x,y,50,50)
          this.image=loadImage("sprites/enemy.png")
          this.visibility=255
          //255 means fully visible pic and 0 means invisible
         
        
    }
    display(){
     
     
     
      if(this.box.speed<2.5){
        super.display()
        
      }else{
        
        World.remove(world,this.box)
        push ()
        this.visibility-=5
        tint(255,this.visibility)
        image(this.image,this.box.position.x,this.box.position.y,50,50)
        pop ()
      }

  
    }
    score(){
    if(this.visibility<255&&this.visibility>0){
     score=score+1



    }
    
    
    
    }

  }
