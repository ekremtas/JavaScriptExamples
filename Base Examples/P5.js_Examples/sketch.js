/*
function setup() {
createCanvas(500,500);

}
function draw() {
//ellipse(50,50,80,80);

//Mouse hareketi ile ekranda daireler oluşturma.
if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);

}
*/
let WindowX = 0;
let WindowY = 0;

function setup(){
    createCanvas(500,500);


}


function draw() {
  //fill(fillVal);
  if(WindowX<0){
    WindowX=0;
  }
  else if(WindowY<0){
    WindowY=0;
  }
  
  rect(WindowX, WindowY, 50, 50);
  
  keyPressed(keyCode);
  
    

}




function keyPressed(keyCode) {
 
 switch(keyCode){
     case DOWN_ARROW:
     WindowY=WindowY+50;
      rect(WindowX, WindowY, 50, 50);
      break;

     case UP_ARROW:
      rect(WindowX,WindowY-50,50,50);
      break;

     case RIGHT_ARROW:
      WindowX+50;
      break;

     case LEFT_ARROW:
      WindowX-50;
 }
 
 
 
 
 
 
/*  if (keyCode === UP_ARROW) {
    //fillVal = 255;
    rect(WindowX,WindowY+50,50,50);
  } else if (keyCode === DOWN_ARROW) {
    //fillVal = 130;
    rect(WindowX,WindowY-50,50,50);
  }
  else if (keyCode === LEFT_ARROW) {
    //fillVal = 130;
    WindowX+=50;
  }
   else if (keyCode === RIGHT_ARROW) {
    //fillVal = 130;
    rect(WindowX+50,WindowY,50,50);
  }*/
  
}





