function Monster(canvasWidth, canvasHeight){
	this.x = random(canvasWidth);
	this.y = random(canvasHeight);
	this.position = createVector(this.x, this.y);
	this.direction = createVector(0, 0);
	this.acceleration = createVector(0, 0);

	this.render = function(){
		noStroke();
		fill(color(122, 66, 244));
		ellipseMode(CENTER);
		ellipse(this.position.x, this.position.y, 10, 10);
	}
}