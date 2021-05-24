var ball,ball2,ballImg,ball2Img,ballGroup,ball2Group;
var hippo,hippoImg;
var ibr,ibl,ibu,ibh;
var score=0;
var gameState=0;
var nxt;

function preload(){
ballImg=loadImage("images/ball.png")
hippoImg=loadImage("images/hippo.png")
ball2Img=loadImage("images/ball2.png")

}

function setup(){
  createCanvas(800,600)

nxt=createButton("PLAY")
nxt.position(700,550)
nxt.style("font-size","20px")
nxt.style("color","white")
nxt.style("background","red")
nxt.mousePressed(()=>{
  gameState=1
})

ibr=createSprite(790,300,20,600)
ibr.visible=false;

ibu=createSprite(400,-2,800,20)
ibu.visible=false;

ibl=createSprite(10,300,20,600)
ibl.visible=false;

ballGroup=new Group()
ball2Group=new Group()

hippo=createSprite(400,100,70,70)
hippo.addImage(hippoImg)
hippo.scale=0.9;
hippo.debug=false;
hippo.setCollider("rectangle",0,10,20,1)
}

function draw(){
background(0)


if(gameState===0){
  clear()
  background(0)
  nxt.show()
  textSize(25)
  fill(255)
  text("Hungry Hippos!",300,30)
  text("Hey! this is one more game by Sidakbir Singh",120,100)
  text("To play the game there are some instructions.The instructions are: ",30,150)
  text("1. If you collect red ball you will get 2 points. ",130,200)
  text("2. If you collect golden ball you will get 4 points. ",120,250)
  text("3. If you miss a ball your will get less by 2 points. ",120,300)
  text("4. Remember, the max score is 70 points after that the game will end. ",20,350)
  text("5. You can move left to right with the help of arrow keys. ",100,400)
textSize(60)
text(" ENJOY! ",260,500)

}
if(gameState===1){
  balls();
  nxt.hide()
if(ballGroup.collide(hippo)){
  ballGroup.destroyEach()
  score+=2;
}

if(ballGroup.collide(ibu)){
  ballGroup.destroyEach()

  score=score-2;
}

if(ball2Group.collide(hippo)){
  ball2Group.destroyEach()
  score+=4;
}

if(ball2Group.collide(ibu)){
  ball2Group.destroyEach()

  score=score-2;
}

if(score===70 || score >70){
  clear()
  background(0)
  hippo.destroy()
  ballGroup.destroyEach()
  ball2Group.destroyEach()

  fill(255)
  strokeWeight(6)
  textSize(50)
  text("YOU WON!! WELL DONE!",100,300)
  text("Click refresh to play again!",100,350)
}
hippo.collide(ibr);
hippo.collide(ibl);




if(keyDown(RIGHT_ARROW)){
  hippo.x+=10;
}

if(keyDown(LEFT_ARROW)){
  hippo.x-=10;
}



drawSprites()
textSize(30)
fill(255)
text("Score: "+score,50,50)
}
}
function balls(){
  if (frameCount % 60 === 0) {
    ball = createSprite(Math.round(random(50,760)), 500, 100, 100);
    ball.velocityY = -4;
    ball.addImage(ballImg)
  ball.scale=1.5
  ball.lifetime=150
  ballGroup.add(ball)

  
 /* var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: ball.addImage(ballImg);
              break;
      case 2: ball.addImage(ball2Img);
               break;
      default: break;
    }*/
}
if (frameCount % 230 === 0) {
  ball2 = createSprite(Math.round(random(50,760)), 500, 100, 100);
  ball2.velocityY = -4;
  ball2.addImage(ball2Img)
ball2.scale=1.5
ball2.lifetime=150
ball2Group.add(ball2)


}
}
