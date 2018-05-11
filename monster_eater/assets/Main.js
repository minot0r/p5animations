var wHeight = 480;
var wWidth = 640;
var bColor;
var monster;

function setup(){
	bColor = color(0, 0, 0);
	monster = new Monster(wWidth, wHeight);

	createCanvas(wWidth, wHeight);
}

function draw(){
	background(bColor);
	monster.render();
}