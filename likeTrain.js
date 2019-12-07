var canvas;
var myRect;
let song;
let yaxis;

function preload() {
    img = loadImage('asset/201808__.jpg');
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
    text('2019년 10월 9일 수요일',windowWidth/2, 80);
    pop();

    push();
    textSize(10);
    textStyle(ITALIC);
    textFont('Helvetica');
    textAlign(CENTER);
    text('first met 2018_08_',windowWidth/2 - 230, windowHeight/2 - 300);
    pop();

    push();
    textSize(10);
    textStyle(ITALIC);
    textFont('Helvetica');
    textAlign(CENTER);
    text('second met 2018_08_20',windowWidth/2 + 230, windowHeight/2 + 8);
    pop();

    push();
    fill(0,mouseX * 0.25);
    textSize(15);
    textFont('Helvetica');
    textAlign(CORNER);
    text('날씨는 화창했다.',windowWidth/2 - 300,windowHeight/2 + 50);
    text('낮에는 따뜻할 것이라 생각하고 반팔을 입고 나왔는데, 햇빛만 더 했을 뿐이고 온도는 그대로였다.',windowWidth/2 - 300,windowHeight/2 + 75);
    text('석관동과 이문동 그 사이에서 난 밥을 먹고 있었다.',windowWidth/2 - 300,windowHeight/2 + 100);
    text('가게는 세로가 조금 더 긴, 직사각형의 모양을 하고 있었다.',windowWidth/2 - 300,windowHeight/2 + 125);
    text('다른 손님이 들어왔고, 내 앞쪽에 식탁이 하나 더 있었기 때문에 그 사람은 내게 등을 보여준 채로 앉았다.',windowWidth/2 - 300,windowHeight/2 + 150);
    text('좁은 공간, 좁은 식탁, 좁은 의자 덕분에 옆에서 바라보면 기차에 앉은 사람처럼 보일 것 같았다.',windowWidth/2 - 300,windowHeight/2 + 175);
    text('점점 더 나와 사람들, 그리고 우리는 서로의 열린 모습보다 닫힌 모습을 보게 되는 것 같다.',windowWidth/2 - 300,windowHeight/2 + 200);
    text('나는 그의 등과 TV를 번갈아보며 밥을 먹었다.',windowWidth/2 - 300,windowHeight/2 + 225);
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