var canvas;
var myRect;
let song;
function preload() {
    img = loadImage('asset/20170316.jpg');
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
    text('2019년 10월 13일 일요일',windowWidth/2, 80);
    pop();

    push();
    textSize(10);
    textStyle(ITALIC);
    textFont('Helvetica');
    textAlign(CENTER);
    text('first met 2017_03_16',windowWidth/2 - 230, windowHeight/2 - 300);
    pop();

    push();
    textSize(10);
    textStyle(ITALIC);
    textFont('Helvetica');
    textAlign(CENTER);
    text('second met 2017_03_18',windowWidth/2 + 230, windowHeight/2 + 8);
    pop();

    push();
    fill(0,mouseX * 0.25);
    textSize(15);
    textFont('Helvetica');
    textAlign(CORNER);
    text('계단을 오르는 도중',windowWidth/2+ 250,windowHeight/2 + 80);
    text('뭔가 아득해서. 생각을 하기 시작했다.',windowWidth/2 +147,windowHeight/2 + 105);
    text('계단을 다이아몬드 모양으로 오르락 내리락 하면,',windowWidth/2 + 85,windowHeight/2 + 130);
    text('훨씬 덜 힘들다는 이야기를 들었던 것 같았다.',windowWidth/2,windowHeight/2 + 155);    
    text('재빨리 계단을 다이아몬드 모양으로 오르락 내리락',windowWidth/2,windowHeight/2 + 180);
    text('역시나 힘들다.',windowWidth/2,windowHeight/2 + 205);
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