var canvas;
var myRect;
let song;
function preload() {
    img = loadImage('asset/201811__.jpg');
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
    text('2019년 10월 15일 화요일',windowWidth/2, 80);
    pop();

    push();
    textSize(10);
    textStyle(ITALIC);
    textFont('Helvetica');
    textAlign(CENTER);
    text('first met 2018_11___',windowWidth/2 - 230, windowHeight/2 - 300);
    pop();

    push();
    textSize(10);
    textStyle(ITALIC);
    textFont('Helvetica');
    textAlign(CENTER);
    text('second met 2018_11_29',windowWidth/2 + 230, windowHeight/2 + 8);
    pop();

    push();
    fill(0,mouseX * 0.25);
    textSize(15);
    textFont('Helvetica');
    textAlign(CENTER);
    text('신발을 신으며, 재개발 하고 있는 곳을 올려다봤다.',windowWidth/2,windowHeight/2 + 80);
    text('8단지라고 불렸던, 그 신축 아파트가 들어서는 곳은 내가 아주 어렸을 적 지냈던 곳이다.',windowWidth/2,windowHeight/2 + 105);
    text('5층짜리 빌라였는데, 비가 많이 오는 날에는 천장에서 물이 새기도 했다.',windowWidth/2,windowHeight/2 + 130);
    text('봄에 그 빌라 앞은 꽃들이 흐드러지게 피었다.',windowWidth/2,windowHeight/2 + 155);
    text('그 꽃을 좋아했다.',windowWidth/2,windowHeight/2 + 180);
    text('공사장 소리는 더욱 커지지만, 꽃의 모습과 향기 그리고 그 때는 더욱 짙게 사라지는 중이다.',windowWidth/2,windowHeight/2 + 205);
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