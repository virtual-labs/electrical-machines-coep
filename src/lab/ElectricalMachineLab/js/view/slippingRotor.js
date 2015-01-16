var slippingrotorcanvas = src = slippingrotorcanvas || {}; 
(function(src) {
	var globalObject = {
		x : 30,
		y : 60,
		rad : 20

	}
	src.drawRectangle = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y, rad = globalObject.rad;
		context.beginPath();
		context.rect(x, y, 80, 80);
		//outer rect
		context.moveTo(x + 80, y + 25);
		context.lineTo(x + 104, y + 25);
		context.lineTo(x + 104, y + 50);
		context.lineTo(x + 80, y + 50);
		context.moveTo(x, y + 25);
		context.lineTo(x - 28, y + 25);
		context.lineTo(x - 28, y + 45);
		context.lineTo(x, y + 45);
		// for( i = 0; i < 3; i++) {
			// context.moveTo(x - 25, y + 15);
			// context.rect(x - 25, y + 15, 5, 40);
			// context.moveTo(x - 24, y + 55);
			// context.lineTo(x - 24, y + 60)
			// context.lineTo(x - 21, y + 60);
			// context.lineTo(x - 21, y + 55);
			// context.moveTo(x - 23, y + 60);
			// context.lineTo(x - 23, y + 80);
			// context.arc(x - 23, y + 80, 2, 0, 2 * Math.PI, false);
			// x = x + 8;
			// y = y;
		// }
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	src.drawPoints = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		//	context.beginPath();
		for( i = 0; i < 6; i++) {
			context.moveTo(x + 10, y)
			context.lineTo(x + 10, y - 35);
			context.arc(x + 10, y - 35, 2, 0, 2 * Math.PI, false);
			x = x + 12;
			y = y;
		}
		context.font = "7pt Callibri";
		context.fillText("R1", x - 61, y - 10);
		context.fillText("R2", x - 49, y - 10);
		context.fillText("R3", x - 37, y - 10);
		context.fillText("R4", x - 25, y - 10);
		context.fillText("R5", x - 13, y - 10);
		context.fillText("R6", x - 1, y - 10);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();

	}

	src.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		src.drawRectangle(globalObject);
		src.drawPoints(globalObject);
	}
})(slippingrotorcanvas);
