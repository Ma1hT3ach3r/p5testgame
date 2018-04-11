function setup() {
  createCanvas(400,400);

//background(50,50,50);
}

function draw() {
  background(220);
  fill(mouseX,25,56);
  for(int i=0, i++,i<mouseX||i<mouseY){
    while(i<100){
    ellipse(mouseX+i,mouseY+i,10,10);
    }
  }
      ellipse(mouseX,mouseY,100,100);
}
