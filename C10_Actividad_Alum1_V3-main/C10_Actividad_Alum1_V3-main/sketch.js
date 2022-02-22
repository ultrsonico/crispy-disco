var fondo,fondoimg;
var gato,gatoimg;

function preload(){
  fondoimg=loadImage("fondo.png");
  gatoimg=loadAnimation("gato.png","gato2.png");
}

function setup() {
createCanvas(windowWidth,windowHeight);
fondo=createSprite(width/2,120);
 fondo.addImage(fondoimg);
 gato=createSprite(120,180,20,50);
 gato.addAnimation("corriendo",gatoimg)
 gato.scale=2.0;
}
function draw() {
drawSprites();

}

