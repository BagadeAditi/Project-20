var cat,catImg,catWalk,catCaught
var mouse,mouseImg,mouseTease,mouseCaught
var bg,bg1

function preload() {
    //load the images here
    catImg=loadAnimation("images/cat1.png")
    mouseImg=loadAnimation("images/mouse1.png")
    bg1=loadImage("images/garden.png")
    catWalk=loadAnimation("images/cat2.png","images/cat3.png")
    mouseTease=loadAnimation("images/mouse2.png","images/mouse3.png")
    catCaught=loadAnimation("images/cat4.png")
    mouseCaught=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(500,400);
    //create tom and jerry sprites here

    //background
    bg=createSprite(250,200,500,400);
    bg.addImage(bg1)
    bg.scale=0.6

    //mouse
    mouse=createSprite(100,300,20,20);
    mouse.addAnimation("mouse1",mouseImg)
    mouse.scale=0.1

    //cat
    cat=createSprite(400,300,20,20)
    cat.addAnimation("cat1",catImg)
    cat.scale=0.1

}

function draw() {
    background(225);
    //Write condition here to evalute if tom and jerry collide
    if( cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX=0    
        cat.addAnimation("catCaught1",catCaught) 
        cat.changeAnimation("catCaught1")
        mouse.addAnimation("mouseCaught1",mouseCaught) 
        mouse.changeAnimation("mouseCaught1")
        cat.x=mouse.x+50
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode===LEFT_ARROW){
        cat.velocityX=-5    
        cat.addAnimation("catWalk1",catWalk) 
        cat.changeAnimation("catWalk1")  
        mouse.addAnimation("mouseTease1",mouseTease) 
        mouse.changeAnimation("mouseTease1")  
    }

}
