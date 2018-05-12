var wHeight = 480;
var wWidth = 640;
var bColor;
var monster;
var fruits = [];

function setup(){
	bColor = color(255, 255, 255);
	monster = new Monster(random(wWidth), random(wHeight));

	for(var i = 0; i < 5; i++){
		fruits.push(new Fruit(random(wWidth), random(wHeight))); /* Adding fruit at a random location */
	}

	createCanvas(wWidth, wHeight);
}

function draw(){
	background(bColor);

	for(var i = 0; i < fruits.length; i++){
		fruits[i].render();		
	}

	monster.render();
	monster.findNearestIn(fruits, true);
}