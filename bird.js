class Bird extends BaseClass {
    
    constructor(x,y){
         super(x,y,50,50)
         
          this.image=loadImage("sprites/bird.png")
          this.a=[]
         this.image2=loadImage("sprites/smoke.png")
    }

    display(){
       super.display()
      if(gameState===1&&this.box.position.y<460&&this.box.velocity.x>10){
       var b=[this.box.position.x,this.box.position.y]
       
      this.a.push(b)
      //console.log(this.a)
      }
      for(var i=0;i<this.a.length;i=i+1){
      image(this.image2,this.a[i][0],this.a[i][1])
      
     /* textSize(20)
      text(a[i][0]+","+a[i][1],10,10)*/
    
      }
    

 }


}
