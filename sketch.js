//Create variables 
var dog,dog1,foodS,foodStock

function preload()
{
	//load images here
  dog1Img=loadImage("images/dogImg.png")
  dogImg=loadImage("images/dogImg.png")


}

function setup() {
  createCanvas(500,500);
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.4;
  
  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

    
}


function draw() {  
  background(46, 139, 87);
  
    textSize(20)
    fill(225)
    text("Food Remaining:" + foodS, 250,480);
    text("note:press up_arrow key to feed",130,90,300,20);
  
    
    
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogImg);
  }


  drawSprites();
  //add styles here
  
 
}

function readStock(data){
  foodS=data.val();
}

function writeStock (x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food: x 
  })
}




