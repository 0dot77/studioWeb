var canvas;
var myRect;
let song;
function preload() {
    img = loadImage('asset/20160706.jpg');
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
    text('2019년 10월 11일 금요일',windowWidth/2, 80);
    pop();
    
    push();
    textSize(10);
    textStyle(ITALIC);
    textFont('Helvetica');
    textAlign(CENTER);
    text('first met 2016_07_06',windowWidth/2 - 230, windowHeight/2 - 300);
    pop();

    push();
    textSize(10);
    textStyle(ITALIC);
    textFont('Helvetica');
    textAlign(CENTER);
    text('second met 2016_07_07',windowWidth/2 + 230, windowHeight/2 + 8);
    pop();

    push();
    fill(0,mouseX * 0.25);
    textSize(15);
    textFont('Helvetica');
    textAlign(CORNER);
    text('국립현대미술관의 <광장> 전시를 보다가 구매하게 된 <광장>.',windowWidth/2-250 ,windowHeight/2 + 50);
    text('현재 진행형인 지금의 이슈로 인해 사람들이 광장으로 나가고 있다.',windowWidth/2 - 250,windowHeight/2 + 75);
    text('광 장',windowWidth/2,windowHeight/2 + 100);
    text('책 표지에 대문짝처럼 크게 쓰여있는 이 책을 1호선에서 읽고 있었다.',windowWidth/2 - 250,windowHeight/2 + 125);
    text('맞은편 할아버지의 눈이 심상치 않았다.',windowWidth/2 - 250,windowHeight/2 + 150);
    text('스마트 시대에 책을 읽는 게 신기해서 그렇게 뚫어져라 내 책을 쳐다보신건지,',windowWidth/2 - 250,windowHeight/2 + 175);
    text('아니면 광 장 이라는 글자 자체가 거슬리셨던 걸까?',windowWidth/2- 250,windowHeight/2 + 200);
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