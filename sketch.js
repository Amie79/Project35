//Create variables here
var dog,happydog,database,foodS,foodStock,dog_img,happydog_img,bottles;
function preload()
{
  //load images here
  
  dog_img=loadImage("images/dogImg.png");
  happydog_img=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250,50,40);
  dog.addImage(dog_img);
  dog.scale=0.30;
  database=firebase.database();
  foodStock=database.ref('Bottles of Milk');
  foodStock.on("value",readStock);
  bottles=20;
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happydog_img);

}
  drawSprites();
  //add styles here
textSize(15);
fill("blue");
stroke("blue");
//strokeWeight(1);
text("Bottles remaining: "+bottles,180,120);
text("Press the up arrow key to feed the cute doggie",110,50);
}

function readStock(data){

  foodS.data.val();
}
function writeStock(bottles){
  if(bottles<1){
    bottles=0;
  }else{
    bottles=bottles-1;
  }
 database.ref('/').update({
  Food: bottles
})
}


