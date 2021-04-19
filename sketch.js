var catImg3 , catImg1,  catImg2, cat ;
var mouseImg3, mouseImg1, mouseImg2 , mouse;
var gardenImg, garden , bg
function preload() {
  bg = loadImage ("images/garden.png");
  catImg1 = loadAnimation ("images/cat1.png");
  catImg2 = loadAnimation ("images/cat2.png");
  mouseImg1 - loadAnimation ("images/mouse1.png");
  mouseImg2 = loadAnimation ("images/mouse2.png");
  mouseImg3 = loadAnimation ("images/mouse3.png");

}

function setup(){
    createCanvas(1000,800);
    cat = createSprite (870,600);
    cat.addAnimation ("tomSleeping",catImg1);
    cat.scale = 0,3;
    
    mouse = createSprite (200,600);
    mouse.addAnimation ("jerryStanding",mouseImg1);
    mouse.scale = 0.11;

    

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x <  cat .width/2 + mouse.width/2 ){
        cat.velocityX = 0;
        cat.addAnimation (catImg3);
        cat.x = 300;
        mouse.addAnimation (mouseImg3);
    }

    drawSprites();
}


function keyPressed(){

  if (keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation ("catRunning", catImg2);
      cat.changeAnimation ("catRunning");

 

 
      mouse.addAnimation ("jerryTeasing", jerryImg2);
      mouse.changeAnimation ("jerryTeasing");
  }


}
