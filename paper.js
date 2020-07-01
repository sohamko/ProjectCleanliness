class Paper  {
constructor(x,y){
    //super(x,y,50,50);
    this.image=loadImage("sprites/paper1.png")
  this.body = Bodies.rectangle(x, y, width, height, options);
var options={
'density':1.2,
'restitution':0.5,
'friction':0.5,
isStatic:false,

}

this.body=Bodies.circle(x,y,20,options);
this.width=20;
World.add(world,this.body);
}

display(){
   // super.display();
var pos=this.body.position;
var angle=this.body.angle;
push();
fill("red");
translate(pos.x,pos.y);
rotate(angle)
rectMode(CENTER);
circle(pos.x,pos.y,this.width,this.height);
stroke("green");
strokeWeight(10);
pop();



}

} 