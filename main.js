lipstickX=0;
lipstickY=0;

function preload(){

}

function setup(){
    canvas= createCanavs(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}

function draw(){

}

function take_snapshot(){
    save('vaishvi.png');
}