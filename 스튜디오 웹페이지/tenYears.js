var canvas;
var myRect;
let song;
function preload() {
    img = loadImage('asset/20170419.jpg');
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
    text('first met 2017_04_19',windowWidth/2 - 230, windowHeight/2 - 300);
    pop();
    
    push();
    textSize(10);
    textStyle(ITALIC);
    textFont('Helvetica');
    textAlign(CENTER);
    text('second met 2017_04_24',windowWidth/2 + 230, windowHeight/2 + 8);
    pop();

    push();
    fill(0, mouseX * 0.25);
    textSize(70);
    textFont('Helvetica');
    textAlign(CENTER);
    text('2019년 10월 7일 월요일',windowWidth/2, 80);
    pop();

    push();
    fill(0,mouseX * 0.25);
    textSize(15);
    textFont('Helvetica');
    textAlign(CORNER);
    text('10년, 아득한 시간이다.',windowWidth/2 - 300,windowHeight/2 + 80);
    text('아득한 시간에 대해 어떠한 설명도 존재하지 않는다.',windowWidth/2 - 250,windowHeight/2 + 105);
    text('그저 지나온 시간을 반추하며 느낌을 되새겨볼 뿐이다. 10년이면 가능한 것인가?',windowWidth/2 - 250,windowHeight/2 + 130);
    text('10년이면 무언가에 도달할 수 있는 시간인가? 의문을 던지지 않을 수 없다.',windowWidth/2 - 250,windowHeight/2 + 155);
    text('앞으로의 10년을 견디면 무언가에 도달할 수 있다는 얘기가, 내게는 조금 가혹하게 들린다.',windowWidth/2 - 250,windowHeight/2 + 180);
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