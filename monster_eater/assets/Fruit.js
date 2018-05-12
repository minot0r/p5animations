function Fruit(x, y){
	this.position = createVector(x, y);
	this.colour = color(random(255), random(255), random(255));

	this.render = function(){
		noStroke();								
		fill(this.colour);				
		ellipse(this.position.x, this.position.y, 15, 15);
		fill('grey');
		beginShape();
			curveVertex(this.position.x, this.position.y-5);
			curveVertex(this.position.x-5, this.position.y-5);
			curveVertex(this.position.x-15, this.position.y-10);
			curveVertex(this.position.x-3, this.position.y-10);
			curveVertex(this.position.x, this.position.y-5);
			fill('darkgrey');
			curveVertex(this.position.x-2, this.position.y-10);
			curveVertex(this.position.x+10, this.position.y-15);
			//curveVertex(this.position.x+5, this.position.y-5);
			curveVertex(this.position.x+3, this.position.y-5);
		endShape(CLOSE);
	}

}