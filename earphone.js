var canvas;
var myRect;
let song;
function preload() {
    img = loadImage('asset/20170404.jpg');
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
    fill(0,mouseX * 0.25);
    textSize(70);
    textFont('Helvetica');
    textAlign(CENTER);
    text('2019년 10월 16일 수요일',windowWidth/2, 80);
    pop();

    push();
    textSize(10);
    textStyle(ITALIC);
    textFont('Helvetica');
    textAlign(CENTER);
    text('first met 2017_04_04',windowWidth/2 - 230, windowHeight/2 - 300);
    pop();

    push();
    textSize(10);
    textStyle(ITALIC);
    textFont('Helvetica');
    textAlign(CENTER);
    text('second met 2017_04_25',windowWidth/2 + 230, windowHeight/2 + 8);
    pop();

    push();
    fill(0,mouseX * 0.25);
    textSize(15);
    textFont('Helvetica');
    textAlign(CENTER);
    text('이어폰 대신 헤드셋을 끼고 나왔다.',windowWidth/2,windowHeight/2 + 80);
    text('Johnny Mercer의 Ac-Cent-Tchu-Ate the Positive를 듣고 있었다',windowWidth/2,windowHeight/2 + 105);
    text('노래를 듣다보니, 갑자기 춤을 추고 싶어졌다.',windowWidth/2,windowHeight/2 + 130);
    text('어쩌면 이어폰은',windowWidth/2,windowHeight/2 + 155);
    text('모두가 노래를 들으며 춤을 췄으면 하는,',windowWidth/2,windowHeight/2 + 180);
    text('행복한 상상에서 만들기 시작한 것 아니었을까?',windowWidth/2,windowHeight/2 + 205);
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