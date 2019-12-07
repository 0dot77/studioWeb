var drops  = [];
var c1,c2;
var canvas;
var myRect;
let song;
let img;

function preload() {
    img = loadImage('asset/20160820.jpg');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    for(var i=0; i<2000; i++){
    drops[i] = new Drop();
  }
    c1 = color(30, 30, 50);
    c2 = color(0, 150);
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
    text('first met 2016_08_20',windowWidth/2 - 230, windowHeight/2 - 300);
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
    text('2019년 10월 7일 월요일',windowWidth/2, 80);
    pop();

    push();
    fill(0,mouseX * 0.25);
    textSize(15);
    textFont('Helvetica');
    textAlign(CENTER);
    text('위에서 아래로 쏟아진다',windowWidth/2,windowHeight/2 + 80);
    text('그렇게 비는 모든 것을 한 차례 적신다.',windowWidth/2,windowHeight/2 + 105);
    text('비는 무언가를 가리지 않는다.',windowWidth/2,windowHeight/2 + 130);
    pop();


    for(var i=0; i<drops.length; i++){
		drops[i].show();
		drops[i].move();
  }
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

function Drop(){
    //display drops
        this.x = random(0, 2880);
        this.y = random(-10, 2000);
        this.d = 2;
        this.h = random(2, 10);
        this.col= map(this.h, 2, 10, 100, 255);
        
        this.show = function(){
            noStroke();
            fill(this.col,100);
            ellipse(this.x, this.y, this.d, this.h);
        }
    
    //move object
        this.vel = 0;
        this.grv = map(this.h,2,10,3,10);
        this.off = map(this.h,2,10,windowHeight/2,windowHeight);
    
        this.move = function(){
            this.y += this.vel;
            this.vel = this.grv;
            if(this.y > this.off){
                this.y = -10;
            }
        }
    }