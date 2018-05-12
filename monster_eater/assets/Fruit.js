function Fruit(x, y){
	this.position = createVector(x, y);

	this.render = function(){
		noStroke();								
		fill(color(66, 244, 92));				
		ellipse(this.position.x, this.position.y, 15, 15);
	}

}