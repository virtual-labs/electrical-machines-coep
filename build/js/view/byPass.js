var bypasscanvas = bpl = bypasscanvas || {}; 
(function(bpl) {
	var globalObject = {
		x : 15,
		y : 80
	}
	bpl.drawCoil = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.arc(x - 10, y, 2, 0, 2 * Math.PI, false);
		context.moveTo(x - 8, y);
		context.lineTo(x + 45, y);
		y = y - 25;
		for(var i = 0; i <= 1; i++) {
			x = 0;
			context.moveTo(x + 60, y + 25);
			context.bezierCurveTo(x + 56, y + 20, x + 55, y + 20, x + 60, y + 12);
			// first part
			context.bezierCurveTo(x + 66, y + 9, x + 64, y + 9, x + 70, y + 12);
			// second part
			context.bezierCurveTo(x + 71, y + 15, x + 76, y + 18, x + 70, y + 25);
			// third part
			context.lineTo(x + 130, y + 25);
			context.arc(x + 132, y + 25, 2, 0, 2 * Math.PI, false);
		}
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	bpl.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		bpl.drawCoil(globalObject);
	}
})(bypasscanvas);
