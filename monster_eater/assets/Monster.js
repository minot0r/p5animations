function Monster(x, y){
	this.position = createVector(x, y);
	this.direction = createVector(0, 0);
	this.acceleration = createVector(0, 0);

	this.render = function(){
		noStroke();
		fill(color(122, 66, 244));
		ellipseMode(CENTER);
		ellipse(this.position.x, this.position.y, 10, 10);
	}

	this.moveTowards = function(object){
		var newDirection = p5.Vector.sub(object, this.position);

		var newDirectionMovement = p5.Vector.sub(newDirection, this.direction);

		push();
			translate(this.position.x, this.position.y);
			stroke('red');
			line(0, 0, this.direction.x*10, this.direction.y*10);
			stroke('blue');
			line(0, 0, newDirection.x, newDirection.y);
			stroke('green');
			line(0, 0, newDirectionMovement.x, newDirectionMovement.y);
		pop();


		newDirectionMovement.limit(0.1); /* Limit speed */

		this.acceleration.add(newDirectionMovement);
		this.direction.add(this.acceleration);
		this.position.add(this.direction);
		this.acceleration.mult(0);
	}


}