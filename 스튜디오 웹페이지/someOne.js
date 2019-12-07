var canvas;
var myRect;
let song;

function preload() {
    img = loadImage('asset/20181228.jpg');
}
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
}
function draw() {
    background(255);
    push();
    imageMode(CENTER);
    image(img,windowWidth/2,windowHeight/2 - 150,500,300);
    pop();

    push();
    textSize(10);
    textStyle(ITALIC);
    textFont('Helvetica');
    textAlign(CENTER);
    text('first met 2018_12_28',windowWidth/2 - 230, windowHeight/2 - 300);
    pop();
    
    push();
    textSize(10);
    textStyle(ITALIC);
    textFont('Helvetica');
    textAlign(CENTER);
    text('second met 2019_01_11',windowWidth/2 + 230, windowHeight/2 + 8);
    pop();

    push();
    fill(0,mouseX * 0.25);
    textSize(70);
    textFont('Helvetica');
    textAlign(CENTER);
    text('2019년 10월 20일 일요일',windowWidth/2, 80);
    pop();

    push();
    fill(0,mouseX * 0.25);
    textSize(15);
    textFont('Helvetica');
    textAlign(CORNER);
    text('종종 어딘가로 떠나고 싶다는 이야기를 한다.',windowWidth/2 - 250,windowHeight/2 + 80);
    text('사람사는 곳은 어디나 똑같으니, 이 편한 나라, 공간, 장소를 떠나지 말라고 한다.',windowWidth/2 - 250,windowHeight/2 + 105);
    text('사람이 산다는 것은 똑같겠다.',windowWidth/2 - 250,windowHeight/2 + 130);
    text('그렇지만 진정 같이 살아나갈 수 있는 사람들이 좀 더 많은 곳으로,',windowWidth/2 - 250,windowHeight/2 + 155);
    text('가고싶다.',windowWidth/2 - 250,windowHeight/2 + 180);
    pop();

    var useTime;
    rectMode(CENTER);
    useTime = millis() * 0.001;
    for(var i =0; i< 500; i++) {
        noStroke();
        fill(127 + 50 * sin(useTime + i * 0.053),127 + 50 * sin(useTime  + i * 0.033),127 + 50 * sin(useTime  + i * 0.023))
    }
    rect(windowWidth/2, windowHeight/2 + 300, 50,100);
    

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
    if(winMouseX > windowWidth/2-25 && winMouseX < windowWidth/2+25 && winMouseY > windowHeight/2 + 250 && winMouseY < windowHeight/2 + 350) {
        window.open("index.html",'_self');
    }
}