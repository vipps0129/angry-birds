//arrays
var a=10;
var b="vishawaradhya";
var c=true;
var d=null;
var e;
console.log(a,b,c,d,e)



//Engine is a controller used to create a physical world
//world refers to physical world/nature
//bodies-- objects in the world

//namespacing 
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var engine,world;
var box1,ground,box2,bg,bg1;
var sling,score=0,gameState=0,chance=0;

function preload(){
getTime()
}

function setup() {
  createCanvas(1200,500);

  engine=Engine.create()
  world=engine.world
 
  //JSON: another way of storing data (javascript object notation)
  //in terms of key-value pair
  var options={
    isStatic:true

  }
  ground=Bodies.rectangle(600,480,1200,10,options)
  World.add(world,ground)
 
  ground2=Bodies.rectangle(160,380,350,180,options)
  World.add(world,ground2)
  
  box1=new Box(900,450,70,70);
  box2=new Box(1100,450,70,70)
  pig1=new Pig(1000,460)
  pig2=new Pig(1000,375)
  log1=new Log(1000,400,10,350,PI/2)
  log2=new Log(1000,310,10,350,PI/2)
  log3=new Log(960,270,10,130,PI/5)
  log4=new Log(1060,270,10,130,-PI/5)
  box3=new Box(900,360,70,70)
  box4=new Box(1100,360,70,70)
  box5=new Box(1000,270,70,70)
  bird=new Bird(100,100)
  
  sling=new Sling(bird.box,{x:200,y:50})
}




function draw() {
  if(bg1!=undefined){
  background(bg1); 
  }
  textSize(30)
  text("score:"+score,1050,70)
  Engine.update(engine);
   textSize(30)
   text("chance:"+chance,1050,40)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1200,15)
  rect(ground2.position.x,ground2.position.y,350,180)
  box1.display();
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  bird.display()
  pig1.display()
  pig1.score()
  log1.display()
  pig2.display()
  pig2.score()
  log2.display()
  log3.display()
  log4.display()
  sling.display()
 //thickness of the line
 if(chance===5||score===100){
 gameState=2
 textSize(40)
 text("game over",500,200)
 if(score===100){
  textSize(40)
  text("you won",500,100)
 }
 }
}

function mouseDragged(){
  if(gameState===0&&gameState!=2){
Matter.Body.setPosition(bird.box,{x:mouseX,y:mouseY})  

}
}

function mouseReleased(){
  sling.fly()
  gameState=1
 
}
 
function keyPressed(){
if(keyCode===32&&gameState!=2){
  Matter.Body.setPosition(bird.box,{x:200,y:50})
sling.attach(bird.box)
gameState=0
bird.a=[]
  chance=chance+1


}
}
 //js consists of synchronous functions means it executes everything together
  async function getTime(){ 
    var r= await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata') 
    var rj=await r.json() 
    var dt=rj.datetime 
    var h=dt.slice(11,13) 
    if(h>=06 && h<=18){ bg="sprites/bg.png" }
    else{ bg="sprites/bg2.jpg" } 
 bg1=loadImage(bg) }




