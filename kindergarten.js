var canvas;
var myRect;
let song;
function preload() {
    img = loadImage('asset/20161203.jpg');
}
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
}
function draw() {
    background(255);
    imageMode(CENTER);
    image(img,windowWidth/2,windowHeight/2 - 150,500,300);


    push();
    fill(0,mouseX * 0.25);
    textSize(70);
    textFont('Helvetica');
    textAlign(CENTER);
    text('2019년 10월 14일 월요일',windowWidth/2, 80);
    pop();

    push();
    textSize(10);
    textStyle(ITALIC);
    textFont('Helvetica');
    textAlign(CENTER);
    text('first met 2016_12_03',windowWidth/2 - 230, windowHeight/2 - 300);
    pop();

    push();
    textSize(10);
    textStyle(ITALIC);
    textFont('Helvetica');
    textAlign(CENTER);
    text('second met 2016_12_07',windowWidth/2 + 230, windowHeight/2 + 8);
    pop();

    var useTime;
    rectMode(CENTER);
    useTime = millis() * 0.001;
    for(var i =0; i< 500; i++) {
        noStroke();
        fill(127 + 50 * sin(useTime + i * 0.053),127 + 50 * sin(useTime  + i * 0.033),127 + 50 * sin(useTime  + i * 0.023))
    }
    rect(windowWidth/2, windowHeight/2 + 300, 50,100);
    
    push();
    fill(0,mouseX * 0.25);
    textSize(15);
    textFont('Helvetica');
    textAlign(CENTER);
    text('오랜만에 화창한 날씨 아래서 책을 읽고 싶었다.',windowWidth/2,windowHeight/2 + 80);
    text('놀이터에 아이들, 나, 그리고 어른들',windowWidth/2,windowHeight/2 + 105);
    text('어른들과 나의 간격은 조금씩, 그리고 더 큰 폭으로 줄어들었다.',windowWidth/2,windowHeight/2 + 130);
    text('아이들과 나의 간극은 조금씩, 그리고 더 큰 폭으로 늘어났다.',windowWidth/2,windowHeight/2 + 155);
    text('어느새 아저씨가 되었다. 할아버지가 되면 무슨 느낌일까.',windowWidth/2,windowHeight/2 + 180);
    pop();

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
    if(winMouseX > windowWidth/2-25 && winMouseX < windowWidth/2+25 && winMouseY > windowHeight/2 + 250 && winMouseY < windowHeight/2 + 350) {
        window.open("index.html",'_self');
    }
}