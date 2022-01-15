leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
canvas = createCanvas(550,550);
canvas.position(560,150);

video = createCapture(VIDEO);
video.size(550,500);
poseNet = ml5.poseNet(video.modelLoaded);
poseNet.on("pose",gotPoses);
}

function modelLoaded(){
console.log('PoseNet Is Initalized!');
}

function draw(){
background("grey");
document.getElementById("font_size").innerHTML = "Font size: " + difference + "px";
textSize(difference);
Fill("#ffe787");
text("Anthony",50,400);
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}