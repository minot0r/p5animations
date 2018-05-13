var wHeight = 480;
var wWidth = 640;
var maxLinesAmount = 3;
var bColor;

function setup(){
	createCanvas(wWidth, wHeight);
	bColor = color('black');
	angleMode(DEGREES);
}

function draw(){
	background(bColor);
	stroke('white');
	noFill();

	for(var spacement = (wHeight/(maxLinesAmount))/2; spacement < wHeight; spacement += wHeight/(maxLinesAmount)){
		beginShape();
			curveVertex(0, mouseY);
			curveVertex(0, spacement);
			/*curveVertex(wWidth/3, spacement);
			curveVertex(2*wWidth/3, spacement);*/
			curveVertex(wWidth, spacement);
			curveVertex(wWidth, mouseY);
		endShape();
	}

}