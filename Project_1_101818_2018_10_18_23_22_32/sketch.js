//                                                                      //
//   Monet Waterlilies   //                                              //
//                       //                                             //
//////////////////////////////////////////////////////////////////////////
//                                                                      //
// Controls:                                                            //
//    mouse:                                                            //
//      press & move: mouse draw mode                                   //
//                                                                      //
//    keyboard:                                                         //
//        'c': clear canvas                                             //
//        '[': iters -= 3                                               //
//        ']': iters += 3                                               //
//        'z': brush step -= 3                                          //
//        'x': brush step += 3                                          //
//        'q': brush scale -= .1                                        //
//        'w': brush scale += .1                                        //
//        's': save image                                               //
//                             //                                       //
//                                                                      //
//   Inspired by.                                                       //
//                                                                      //
//////////////////////////////////////////////////////////////////////////   
//boolean to change color of the class HERE
//https://www.youtube.com/watch?v=1Osb_iGDdjk&index=12&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA
//
var x;
var y;
//
var xBrush;
var yBrush;
var cBrush;//color (r,g,b,trans); to make differnet blues and purple, alter r(red) and b(blue) values
//
var s2;



function setup() {
  createCanvas(1000, 300);
  background(200);//has to be inside setup
 // Brush1 = new Brush (random(width), r);
  //draw water when mouse moves

  
}

function draw() {
  
  /*brush on random location, random blue and purple
 color (blue) = 
 color (purple) = 
 */
    brushWater= new Brush (random(1000),random(188));
    brushWater.brushStroke(random(60,132),random(78,118), random(122,187), random (160,200));
  
    brushGrn = new Brush (random(1000), random(140,300));
    brushGrn.brushStroke(random (17,170),random(59,146), random(0,127), random (5,150));
  
  if (mouseIsPressed) {
    //mouse pressed to use the brush to draw water with highlight
    brushHand1 =new Brush (mouseX,mouseY);
    brushHand1.brushStroke2 (random(60,132),random(78,118), random(122,187), random (150,190),7);
  
  }
  //if (mousePressed) {
  
    
  //}
  
}

//two brushes
//one automatic brush 
//one brush draw with the mouse moves 
class Brush {
  //brush out the background
  //color should change from blues to purples//used when mouse moved
constructor(x_,y_){
    this.xBrush = x_;
    this.yBrush = y_;
}
  
  brushStroke(r,g, b, trans){
  noStroke();
  fill (color (r, g, b,trans));
  //rotate(random(3));
  ellipse (this.xBrush, this.yBrush, random(15, 30), random (10,15));
  }  //brushstroke ends
  
  brushStroke2(r,g, b, trans,s2){//brushHand1 =new Brush (mouseX,mouseY);
  
    noStroke();
    fill (r,g,b, trans);
    rect (this.xBrush, this.yBrush, random(15,20), s2);
    fill (255);//white highlight
    rect (this.xBrush, this.yBrush-5, random(6), 2);
    
  }//brushstroke2
      
  
  
}//class brush ends
class drawWaterLily {
  
  constructor (lx_,ly_){
    this.lx =lx_;
    this.ly =ly_;
    
  
    
   
    
  }
  
  
  
}//class waterlily ends
