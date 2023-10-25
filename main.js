function preload(){

}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    tinte_color =""
}
function filtro(){
    tinte_color=document.getElementById("color").value 
}
function draw(){
    image(video,0,0,640,480);
    tint(tinte_color);
}
function take_snapshot(){
save("fotos.png")
}