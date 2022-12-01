var bg,bgImg;

function preload(){
  bgImg = loadImage("assets/bg.jpeg")
}

function setup() {
  createCanvas(windowWidth,windowHeight );
  //adicionar a imagem de fundo
  bg = createSprite(displayWidth/2,displayHeight/2 + 130,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1
}

function draw() {
  background(0); 

  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando touches (toques)

  //libere as balas e mude a imagem do personagem para a posição de tiro quando a tecla espaço for pressionada

  drawSprites();
}
