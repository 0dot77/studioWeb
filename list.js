var canvas;
var myRect;
let song;
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
}
function draw() {
    background(255);
    var useTime;
    rectMode(CENTER);
    useTime = millis() * 0.001;

    for (var j = 0; j < 50; j ++) {
        fill(132 + 118 * sin(useTime + j * 0.6), 132 + 80 * sin(useTime + j * 0.4), 132 + 5 * sin(useTime + j * 0.56));
        ellipse(width/2 + 100 * sin(useTime + j * 0.03), height/2 + 50 * sin(useTime + j * 0.05), 100 + 100 * sin(useTime + j * 0.12), 10);
    
        //fill(118 + 132 * sin(time + j * 0.0052),98 + 142 * sin(time + j * 0.059),150 + 100 * sin(time + j * 0.5));
        //ellipse(width/2 + 500 * sin(time + j * 0.31), height/2 + 50 * cos(time + j * 0.003), 10,10);
        fill(122 + 118 * sin(useTime + j * 0.11), 150 + 80 * sin(useTime + j * 0.12), 132 + 20 * sin(useTime + j * 0.56));
        ellipse(width/2 + 100 * sin(useTime + j * 0.03), height/2 + 50 * sin(useTime + j * 0.05), 25, 10 + 200 * sin(useTime + j * 0.12));
        noStroke();
      }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}