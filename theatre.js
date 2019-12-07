var canvas;
var myRect;
let song;

function preload() {
    img = loadImage('asset/20160822.jpg');
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
    textSize(10);
    textStyle(ITALIC);
    textFont('Helvetica');
    textAlign(CENTER);
    text('first met 2016_08_22',windowWidth/2 - 230, windowHeight/2 - 300);
    pop();

    push();
    textSize(10);
    textStyle(ITALIC);
    textFont('Helvetica');
    textAlign(CENTER);
    text('second met 2016_08_25',windowWidth/2 + 230, windowHeight/2 + 8);
    pop();

    push();
    fill(0,mouseX * 0.25);
    textSize(70);
    textFont('Helvetica');
    textAlign(CENTER);
    text('2019년 10월 7일 목요일',windowWidth/2, 80);
    pop();

    push();
    fill(0,mouseX * 0.25);
    textSize(15);
    textFont('Helvetica');
    textAlign(CENTER);
    text('모든 관계는 사람과 사람의 다양한 요소들이 충돌하며 생성된다.',windowWidth/2,windowHeight/2 + 80);
    text('길을 걷다 우연히 마주하게 된, 한 차례 관계의 충돌은 나에게 이런 생각이 들게 만들었다.',windowWidth/2,windowHeight/2 + 105);
    text('관계의 충돌은 가끔 고요한 억압으로도 발현될 수 있다는 것이다.',windowWidth/2,windowHeight/2 + 130);
    pop();

    var useTime;
    rectMode(CENTER);
    useTime = millis() * 0.001;
    for(var i =0; i< 500; i++) {
        noStroke();
        fill(127 + 50 * sin(useTime + i * 0.053),127 + 50 * sin(useTime  + i * 0.033),127 + 50 * sin(useTime  + i * 0.023));
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