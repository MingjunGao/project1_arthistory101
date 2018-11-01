var noiseScale =0.02;
var particles_a = [];
var particles_b = [];
var particles_c = [];
var particles_d =[];
//arrays 
var nums =1500;//for each particle
var noiseScale = 700;
var x;
var y;
//
var xBrush;
var yBrush;
var cBrush;//color (r,g,b,trans); to make differnet blues and purple, alter r(red) and b(blue) values
//
var s2;

var clrLine;

var waterlilies = [];//arrayyyy of waterlily leaves
var numWaterlilies =15;//density
var speed =1.5
var scl;

var lilybuds =[];//arrayy of waterlily buds
var numLilybuds =6;//density, need fewer flowers than leaves


function setup() {
  createCanvas(windowWidth, 500); 
  
  
  for(var i = 0; i < nums; i++){
		particles_a[i] = new Particle(random(0, width),random(0,height));
		particles_b[i] = new Particle(random(0, width),random(0,height));
		particles_c[i] = new Particle(random(0, width),random(0,height));
    particles_d[i] =new Particle (random (0, width),random(0,height));
	}
 
  //leaf + bud
  for(i=0;i<numWaterlilies;i++){
    //        drawleaf(x,y,r,g,b)
		leaf1 = new drawleaf (random(width),random(height),random(35,98),random(30,50),random(17,97),1) ;// generate one leaf
		waterlilies.push(leaf1); //add it to the array.
    lilybuds [i] = new drawLily (random(0, width),random(0,height));
    
	}
  
  
}//setup ends
    
  


function draw() {
  background(100,118,140);
  //use noise to create a natural variety of blue and purple
  for (var x=0; x < width; x++) {
    var noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    push();
    stroke((noiseVal*166),124,181);
    line(x, mouseY+noiseVal*80, x, height);
    pop();
  }
  

  for(var i = 0; i < nums; i++){//particle increase until nums
		var radius = map(i,0,nums,1,2);//map 
		var alpha = map(i,0,nums,0,250);//map

		fill(random(60,132),random(78,118), random(122,187),alpha);//purple
		particles_a[i].move();
		particles_a[i].display(radius);
		particles_a[i].checkEdge();

		fill(random (17,170),random(59,146), random(0,127),alpha);//purple no.2
		particles_b[i].move();
		particles_b[i].display(radius);
		particles_b[i].checkEdge();

		fill(205,250,250,alpha);//white
		particles_c[i].move();
		particles_c[i].display(radius);
		particles_c[i].checkEdge();
    
    fill(16,89,180,alpha);//deep purple...
		particles_d[i].move();
		particles_d[i].display(radius);
		particles_d[i].checkEdge();
    
	}  
  


  //moving leaves in array numb:15
  for(i=0;i<numWaterlilies;i++){
		waterlilies[i].dis();
   //lily display
  lilybuds [i].update();
  lilybuds [i].dis();
   
  }
 
  
  

  

  
}//draw ends




function drawLily(x,y){//velocity and acceration 

  this.position =createVector(x,y);//vectors 
  this.velocity = createVector();
  this.acceleration = createVector (0.01, -0.002);//from left to right bottom to top
  this.topspeed =10;
  this.color =color (255);

  this.update = function (){
    this.velocity.add (this. acceleration);
    this.velocity.limit (this.topspeed);
    this.position.add (this.velocity);
  }
  
  


this.dis=function (){//flower 
  
  push();
  fill (255);
beginShape(); 
  vertex(this.position.x, this.position.y-25);//top
  bezierVertex(this.position.x+5, this.position.y-25, this.position.x+13, this.position.y-30, this.position.x+15, this.position.y-25);//top right
  bezierVertex(this.position.x+17, this.position.y-11, this.position.x+11, this.position.y-7, this.position.x+0, this.position.y-7);//bottom right
  bezierVertex(this.position.x-9, this.position.y-9, this.position.x-13, this.position.y-10, this.position.x-14, this.position.y-13);//bottom lef
  bezierVertex(this.position.x-10, this.position.y-23, this.position.x-6, this.position.y-25, this.position.x, this.position.y-25);//top lft
  endShape();
  pop();

  
}//dis ends

}//function drawlily ends 




function Particle(x, y){
	this.dir = createVector(0, 0);
	this.vel = createVector(0, 0);
	this.pos = createVector(x, y);
	this.speed = 0.4;

	this.move = function(){
		var angle = noise(this.pos.x/noiseScale, this.pos.y/noiseScale)*TWO_PI*noiseScale;//turn circlres
		this.dir.x = cos(angle);
		this.dir.y = sin(angle);//direction 
		this.vel = this.dir.copy();
		this.vel.mult(this.speed);//velocity
		this.pos.add(this.vel); //new position 
	}

	this.checkEdge = function(){
		if(this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0){
			this.pos.x = random(5, width);
			this.pos.y = random(50, height);//set up condition to check the edge
		}
	}

	this.display = function(r){
    	noStroke();
	   smooth();
		ellipse(this.pos.x, this.pos.y, r, r); //set up the inner circle
	}
}

function drawleaf (x,y,r_, g_, b_,scl){//set up the leaf 
  this.x=x;
  this.y=y;
  this.color = color (random (71,153), random(109,153), random(71,108),220);
  //this.scale =scale(3);
  this.r=r_;
  this.g=g_;
  this.b=b_;
  this.shadowfill = color (104,53,59);//dark green

  this.scale =scl;
  

this.dis= function leaf () {//lead.dis
  
 //scale (this.scale);
noStroke();

  this.x += speed/scl;//speed
  if(this.x-70> width/scl){ //loop to the left!
    this.x = -80;
  }

   push();
  //random(35,98),random(30,50),random(17,97)
  fill (this.r,this.g,this.b);//red shadow composition y+2
  beginShape();
  vertex(this.x+3, this.y-100+3);//top
  bezierVertex(this.x+20+3, this.y-100+3, this.x+40+3, this.y-120+3, this.x+60+3, this.y-100+3);//top right
  bezierVertex(this.x+105+3, this.y-66+3, this.x+85+3, this.y-30+3, this.x+2+3, this.y-30+3);//bottom right
  bezierVertex(this.x-35+3, this.y-35+3, this.x-50+3, this.y-40+3, this.x-55+3, this.y-55+3);//bottom lef
  bezierVertex(this.x-40+3, this.y-95+3, this.x-25+3, this.y-100+3, this.x+3, this.y-100+3);//top lft
  endShape();
   pop();
  
    fill (this.color);
  beginShape(); //big leaf
  vertex(this.x, this.y-100);//top
  bezierVertex(this.x+20, this.y-100, this.x+40, this.y-120, this.x+60, this.y-100);//top right
  bezierVertex(this.x+105, this.y-66, this.x+85, this.y-30, this.x+2, this.y-30);//bottom right
  bezierVertex(this.x-35, this.y-35, this.x-50, this.y-40, this.x-55, this.y-55);//bottom lef
  bezierVertex(this.x-40, this.y-95, this.x-25, this.y-100, this.x, this.y-100);//top lft
  endShape();
  
  push();
  scale(this.scale);
  //small shadow
   fill (this.shadowfill);
  beginShape(); //body parts y+100
  vertex(this.x+7, this.y+4+1);//top
  bezierVertex(this.x+8+7, this.y+1, this.x+25+7, this.y-5+1, this.x+37+7, this.y+10+1);//top right
  bezierVertex(this.x+40+7, this.y+30+1, this.x+25+7, this.y+45+1, this.x-20+7, this.y+44+1);//bottom right
  bezierVertex(this.x-55+7, this.y+40+1, this.x-70+7, this.y+45+1, this.x-75+7, this.y+35+1);//bottom lef
  bezierVertex(this.x-60+7, this.y+1, this.x-45+7, this.y+1, this.x-20+7, this.y+10+1);//top lft
  endShape(); 
 
  //small leaf
  
    fill(this.color);
   beginShape(); //body parts y+100
    vertex(this.x, this.y+4);//top
    bezierVertex(this.x+8, this.y, this.x+25, this.y-5, this.x+37, this.y+10);//top right
    bezierVertex(this.x+40, this.y+30, this.x+25, this.y+45, this.x-20, this.y+44);//bottom right
  bezierVertex(this.x-55, this.y+40, this.x-70, this.y+45, this.x-75, this.y+35);//bottom lef
  bezierVertex(this.x-60, this.y, this.x-45, this.y, this.x-20, this.y+10);//top lft
  endShape(); 
  pop();
  
  }//display ends
 
  
}//function drawleadf ends


