song1 = "";
song2 = "";

function preload(){
   song1 = loadSound("Is halloween.mp3");
   song2 = loadSound("the magic tree.mp3");
}

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized.');
}
function draw(){
    image(video, 0, 0, 600, 500);
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log('right wrist Y = ' + rightWristY + 'right wrist x = ' + rightWristX);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log('left wrist Y = ' + leftWristY + 'left wrist x = ' + leftWristX);
    }
}