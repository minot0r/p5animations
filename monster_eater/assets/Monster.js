function Monster(x, y){
	this.position = createVector(x, y);
	this.direction = createVector(0, 0);
	this.force = createVector(0, 0);

	this.render = function(){
		noStroke();
		fill(color(122, 66, 244));
		ellipseMode(CENTER);
		ellipse(this.position.x, this.position.y, 10, 10);
		beginShape();
			vertex(this.position.x, this.position.y+10);
			vertex(this.position.x-20, this.position.y-20);
			vertex(this.position.x, this.position.y-10);
			vertex(this.position.x+20, this.position.y-20);
		endShape(CLOSE);
		beginShape();
			vertex(this.position.x-5, this.position.y-5);
			vertex(this.position.x-20, this.position.y);
			vertex(this.position.x+5, this.position.y+5);

			vertex(this.position.x+5, this.position.y-5);
			vertex(this.position.x+20, this.position.y);
			vertex(this.position.x-5, this.position.y+5);
		endShape(CLOSE);
		fill(0);
		ellipse(this.position.x-3, this.position.y-5, 2, 2);
		ellipse(this.position.x+3, this.position.y-5, 2, 2);
	}

	this.moveTowards = function(object){
		var newDirection = p5.Vector.sub(object, this.position);
		newDirection.setMag(5); /* Maximum length of the vector = speedness */

		var newDirectionMovement = p5.Vector.sub(newDirection, this.direction);
		newDirectionMovement.limit(0.1); /* Limit force */

		this.force.add(newDirectionMovement);
		this.direction.add(this.force);
		this.position.add(this.direction);
		this.force.mult(0);
	}

	this.findNearestIn = function(list, drawLines){
		var nearest;
		var shortestDistance = Number.MAX_SAFE_INTEGER;
		for(object in list){
			var distanceBetweenMAndO = this.position.dist(list[object].position);
			if(distanceBetweenMAndO < shortestDistance){
				stroke(color(244, 66, 66));
				strokeWeight(1);
				if(drawLines)
					line(this.position.x, this.position.y, list[object].position.x, list[object].position.y);
				shortestDistance = distanceBetweenMAndO;
				nearest = object;
			}
		}


		if(typeof nearest !== 'undefined' && shortestDistance <= 7) {
			list.splice(nearest, 1);
			list.push(new Fruit(random(wWidth), random(wHeight)));
		} else {
			this.moveTowards(list[nearest].position);
			stroke(color(65, 244, 98));
			strokeWeight(2);
				if(drawLines)
					line(this.position.x, this.position.y, list[nearest].position.x, list[nearest].position.y);
		}
	}

}