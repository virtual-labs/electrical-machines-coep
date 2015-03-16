var sinphvvvfcanvas = spvvvf = sinphvvvfcanvas || {}; 
(function(spvvvf) {
	var globalObject = {
		x : 25,
		y : 20,
	}
	spvvvf.drawRectangle = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.rect(x, y, 80, 130);
		context.rect(x + 60, y + 60, 15, 25);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	spvvvf.drawPoints = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		for( i = 0; i < 2; i++) {
			context.moveTo(x - 22, y + 15);
			context.arc(x - 22, y + 15, 2, 0, 2 * Math.PI, false);
			context.moveTo(x - 20, y + 15);
			context.lineTo(x, y + 15);
			x = x;
			y = y + 20;
		}
		for( i = 0; i < 2; i++) {
			context.moveTo(x + 80, y - 25);
			context.lineTo(x + 107, y - 25);
			context.arc(x + 107, y - 25, 2, 0, 2 * Math.PI, false);
			x = x;
			y = y + 20;
		}

		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	spvvvf.readingShow = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.moveTo(x + 40, y + 90);
		context.lineTo(x + 40, y + 130);
		for( i = 0; i < 2; i++) {
			context.moveTo(x, y + 90);
			context.lineTo(x + 80, y + 90);
			x = x;
			y = y + 20;
		}
		context.moveTo(x + 40, y - 30);
		context.arc(x + 40, y - 30, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 40, y - 28);
		context.lineTo(x + 40, y );
		
		context.moveTo(x + 28, y );
		context.lineTo(x + 40, y + 15);
		context.lineTo(x + 40, y + 35);
		context.arc(x + 40, y + 35, 2, 0, 2 * Math.PI, false);
		
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	spvvvf.control = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.moveTo(x + 62, y + 70);
		context.lineTo(x + 68, y + 62);
		context.lineTo(x + 71, y + 70);
		context.moveTo(x + 62, y + 75);
		context.lineTo(x + 68, y + 82);
		context.lineTo(x + 71, y + 75);
		for( i = 0; i < 2; i++) {
			context.moveTo(x + 62, y + 70);
			context.lineTo(x + 72, y + 70);
			x = x;
			y = y + 5;
		}

		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	spvvvf.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		spvvvf.drawRectangle();
		spvvvf.drawPoints();
		spvvvf.readingShow();
		spvvvf.control();
	}
})(sinphvvvfcanvas);
