
img = "";
objects = [];
status = "";

function preload(){
  img = loadImage('dog_cat.jpg');
}


function setup() {
  canvas = createCanvas(640, 420);//alterar tamanho do canvas
  canvas.center();
//acrecentar video e video.hide
//recortar objectDector e document.get... e colar na unção start
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status: Detectando Objetos";
}
/*function start(){
 colar aqui linha 16 e 17
}*/

function modelLoaded() {
  console.log("Modelo Carregado!")
  status = true;
  objectDetector.detect(img, gotResult);//trocar img para video, recortar e colar na função draw
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}


function draw() {
  image(img, 0, 0, 640, 420);// trocar img para video e atualizar tamanho

      if(status != "")
      {
        //acrescentar r,g,b
        //colar linha 26 alterada
        for (i = 0; i < objects.length; i++) {
          document.getElementById("status").innerHTML = "Status: Objeto Detectado";
    
          fill("#FF0000");// trocar por rgb
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke("#FF0000");//trocar por rgb
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
      }
}