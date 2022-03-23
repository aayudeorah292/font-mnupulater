nosex=0;
nosey=0;
rightwristx=0;
leftwristx=0;
difference=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,120);

    poseNet = ml5.poseNet(video,modelLoaded) ;
    poseNet.on("pose",gotPoses);
}
function draw(){
    background("#969A97");
}
function modelLoaded(){
    console.log("posenet is intialize");
}
function gotPoses(results){
    if (results.length >0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx - rightwristx);
    }
}
function draw(){
    background("#969A97");
    fill("#f90093");
    textSize(difference);
    text("Aayu",50,400);
}