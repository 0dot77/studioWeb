var angle;
var textSwitch1;
var textSwitch2;
var count;
var canvas;
var keyboardSound;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    canvas = createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    angle = 15;
    textSwitch1 = 0;
    textSwitch2 = 0;
    count = 0;

    var button = createButton("reset");
}

function draw() {
    background(255);

    angleMode(DEGREES);
    var useTime;
    rectMode(CENTER);
    useTime = millis() * 0.01;
     for(var i =0; i< 500; i++) {
        noStroke();
        fill(127 + 50 * sin(useTime + i * 0.53), 127 + 50 * sin(useTime + i * 0.33), 127 + 50 * sin(useTime  + i * 0.23));
        rect(windowWidth/2, windowHeight/2, 50, 100);
    }
    push();
    translate(windowWidth/2 - 150,windowHeight/2 - 100);
    fill(0);
    rotate(-30);
    textStyle(BOLD);
    textSize(20);
    textFont('Helvetica');
    textAlign(CENTER);
    text('그러니까 돈이 직업을 결정하는 데 어느정도 중요한 역할을 했다는 것', textSwitch1,0);
    pop();

    push();
    translate(windowWidth/2 + 100, windowHeight/2 + 150);
    fill(0);
    rotate(-30);
    textSize(20);
    textStyle(BOLD);
    textAlign(CENTER);
    text('생각하기에 가정적인 안정감은 돈과 관련이 없을 수 없다.', textSwitch2 , 0);
    pop();

    push();
    translate(windowWidth/2 - 220, windowHeight/2 + 130);
    fill(0);
    textStyle(BOLD);
    rotate(35);
    textSize(20);
    textAlign(CENTER);
    text('점점 더 모호해지는 나에 대하여',textSwitch2,0);
    pop();

    push();
    translate(windowWidth/2 + 200, windowHeight/2 - 80);
    fill(0);
    textStyle(BOLD);
    rotate(40);
    textSize(20);
    textAlign(CENTER);
    text('사랑하는 존재의 부재, 그리고 내면의 불안함',textSwitch1,0);
    pop();
    
    textSwitch1 += 0.05;
    textSwitch2 -= 0.05;
}
/*축을 중심에 두고 돌리고 싶을 때는 push, pop에 translate를 두는 것이 아니라,
바깥에 떼어 놓아야 한다. */

function mousePressed() {
    if(winMouseX > windowWidth/2-25 && winMouseX < windowWidth/2+25 && winMouseY > windowHeight/2 - 50  && winMouseY < windowHeight/2 + 50) {
        window.open("list.html",'_self');
    }
}