var sprlloadcanvas = sprll = sprlloadcanvas || {}; 
(function(sprll) {
	var globalObject = {
		x : 15,
		y : 40
	}
	sprll.drawLine = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(x + 115, y);
		context.moveTo(x, y);
		for( i = 0; i < 5; i++) {
			context.moveTo(x + 5, y);
			context.lineTo(x + 5, y + 20);
			x = x + 25;
			y = y;
		}
		context.moveTo(x - 70, y);
		context.lineTo(x - 70, y - 15);
		context.lineTo(x - 55, y - 25);
		context.fillText("Main(M)", x - 60, y - 10);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	sprll.drawPoint = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(x - 5, y - 30);
		context.lineTo(x + 55, y - 30);
		context.lineTo(x + 55, y - 25);
		context.moveTo(x + 55, y - 22);
		context.arc(x + 55, y - 22, 2, 0, 2 * Math.PI, false);
		context.moveTo(x - 5, y - 30);
		context.arc(x - 12, y - 30, 2, 0, 2 * Math.PI, false);
		// initial circle point
		context.moveTo(x, y + 115);
		context.lineTo(x + 115, y + 115);
		context.moveTo(x, y + 115);
		for( i = 0; i < 5; i++) {
			context.moveTo(x + 5, y + 115);
			context.lineTo(x + 5, y + 115 - 15);
			x = x + 25;
			y = y;
		}
		context.moveTo(x - 70, y + 115);
		context.lineTo(x - 70, y + 130);
		context.lineTo(x - 135, y + 130);
		context.arc(x - 137, y + 130, 2, 0, 2 * Math.PI, false);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();

	}
	sprll.zigzag = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		for( i = 0; i < 5; i++) {
			context.moveTo(x + 5, y + 50);
			context.lineTo(x + 10, y + 55);
			context.lineTo(x + 5, y + 60);
			context.lineTo(x + 10, y + 65);
			context.lineTo(x + 5, y + 70);
			context.lineTo(x + 5, y + 80);
			x = x + 25;
			y = y;
		}
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	sprll.middleLine = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		for( i = 0; i < 5; i++) {
			context.moveTo(x + 5, y + 50);
			context.lineTo(x + 5, y + 35);
			context.lineTo(x + 10, y + 20);
			x = x + 25;
			y = y;
		}
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	sprll.drawCoil = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;

		for( i = 0; i < 5; i++) {
			context.moveTo(x + 5, y + 80);
			context.bezierCurveTo(x + 8, y + 78, x + 8, y + 75, x + 13, y + 80);
			context.bezierCurveTo(x + 16, y + 86, x + 16, y + 84, x + 13, y + 90);
			context.bezierCurveTo(x + 12, y + 91, x + 10, y + 96, x + 5, y + 90);
			context.bezierCurveTo(x + 8, y + 88, x + 8, y + 85, x + 13, y + 90);
			context.bezierCurveTo(x + 16, y + 96, x + 16, y + 94, x + 13, y + 100);
			context.bezierCurveTo(x + 12, y + 101, x + 10, y + 106, x + 5, y + 100);
			x = x + 25;
			y = y;
		}

		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	sprll.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		sprll.drawLine();
		sprll.drawPoint();
		sprll.zigzag();
		sprll.middleLine();
		sprll.drawCoil();
	}
})(sprlloadcanvas);
