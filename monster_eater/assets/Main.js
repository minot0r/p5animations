var wHeight = 480;
var wWidth = 640;
var bColor;
var monster;
var food = [];

function setup(){
	bColor = color(255, 255, 255);
	monster = new Monster(random(wWidth), random(wHeight));

	for(var i = 0; i < 1; i++){
		food.push(createVector(random(wWidth), random(wHeight))); /* Adding food at a random location */
	}

	createCanvas(wWidth, wHeight);
}

function draw(){
	background(bColor);

	for(var i = 0; i < food.length; i++){
		noStroke();								/*														 */
		fill(color(66, 244, 92));				/* Iterating through the food element and rendering them */
		ellipse(food[i].x, food[i].y, 15, 15)	/*														 */
	}

	monster.render();
	monster.moveTowards(food[0]);
}