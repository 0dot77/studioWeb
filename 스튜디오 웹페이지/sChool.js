var canvas;
var myRect;
let song;
function preload() {
    img = loadImage('asset/20180503.jpg');
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
    text('first met 2018_05_03',windowWidth/2 - 230, windowHeight/2 - 300);
    pop();

    push();
    textSize(10);
    textStyle(ITALIC);
    textFont('Helvetica');
    textAlign(CENTER);
    text('second met 2018_05_09',windowWidth/2 + 230, windowHeight/2 + 8);
    pop();


    push();
    fill(0,mouseX * 0.25);
    textSize(70);
    textFont('Helvetica');
    textAlign(CENTER);
    text('2019년 10월 23일 수요일',windowWidth/2, 80);
    pop();

    push();
    fill(0,mouseX * 0.25);
    textSize(15);
    textFont('Helvetica');
    textAlign(CENTER);
    text('어떤 때 보다 큰, 시계의 괴기스럽고 거대한 소리에',windowWidth/2,windowHeight/2 + 80);
    text('그 무게감을 이겨내지 못했다.',windowWidth/2,windowHeight/2 + 105);
    text('힘내세요! 라는 말 한 마디를 건네고 싶었다.',windowWidth/2,windowHeight/2 + 130);
    text('소리의 무게감 하나를 이겨내지 못했다.',windowWidth/2,windowHeight/2 + 155);
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