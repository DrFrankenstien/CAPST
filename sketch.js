
var birdy;
var pipes;
var start_button;
var score;
var you_died;
var bg;

function preload() {
  birdy = loadImage("Flappy-Bird.png");
  you_died = loadImage("you_died.png");
  bg_img = loadImage("Backround.jpeg");
  start_button = loadImage("start.png");
  pipes = loadImage("pipes.png");

}


function setup() {

  createCanvas(1000, 1000);

  bg = createSprite(500, 500);
  bg.addImage("bg", bg_img);

  bg.scale = 6;

  bird = createSprite(200, 200);
  bird.addImage("Flappy", birdy);
  bird.scale = 0.10;

  pipeGroup = createGroup()

  end = createSprite(500, 500);
  end.addImage("end_game", you_died);
  end.visible = false;

}


function draw() {
  background("lightblue");

  spawnObstacles()

  if (pipeGroup.isTouching(bird)) {
    end.visible = true;
    pipeGroup.setLifetimeEach(-1);
    pipeGroup.setVelocityXEach(0);



  }
  drawSprites();
}


function spawnObstacles() {

  if (frameCount % 60 === 0) {




    r_num = Math.round(random(1, 2));
    switch (r_num) {
      case 1:
        pipe = createSprite(900, 500);
        break;
      case 2:
        pipe = createSprite(900, 300);
        break;
      default:
        break;
    }
    pipe.addImage("pipe", pipes);
    pipe.velocityX = -6;
    pipe.scale = 3;




    pipe.lifetime = 220;

    pipeGroup.add(pipe);

  }
}







