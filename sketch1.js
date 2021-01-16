var angle=0;
var angle2=0;
function setup(){
createCanvas(400,400);
rectMode(CENTER);
angleMode(DEGREES);




}
function draw(){
background("black");
stroke(255);
fill("white");
push(); 
translate(50,50);
rotate(angle); 
rect(0,0,100,50);
pop(); 
push();
translate(300,300);
rotate(-angle2*20);
rect(0,0,50,50);
 pop();
angle=angle+10;
angle2=angle2-30;
}