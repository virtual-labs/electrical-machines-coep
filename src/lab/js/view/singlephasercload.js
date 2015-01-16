var sprccanvas = rccan = sprccanvas || {};

(function(rccan) {
	
	var globalObject = {
		x : 15,
		y : 40
	}
	rccan.drawLine = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(x + 115, y);
		context.moveTo(x, y);
		for( i = 0; i < 5; i++) {// upper horizontal lines
			context.moveTo(x + 5, y);
			context.lineTo(x + 5, y + 15);
			x = x + 25;
			y = y;
		}
		context.moveTo(x - 70, y);
		context.lineTo(x - 70, y - 15);
		//single switch on the top
		context.lineTo(x - 55, y - 25);
		context.fillText("Main(M)", x - 60, y - 10);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	rccan.drawPoint = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(x - 5, y - 30);
		context.lineTo(x + 55, y - 30);
		context.lineTo(x + 55, y - 25);
		context, moveTo(x + 55, y - 22);
		context.arc(x + 55, y - 22, 2, 0, 2 * Math.PI, false);
		//point next to switch
		//context.fillStyle = "#000000";
		//context.fill();
		context.moveTo(x - 5, y - 30);
		context.arc(x - 5, y - 30, 3, 0, 2 * Math.PI, false);
		// initial circle point
		context.moveTo(x, y + 115);
		context.lineTo(x + 115, y + 115);
		context.moveTo(x, y + 115);
		for( i = 0; i < 5; i++) {
			context.moveTo(x + 5, y + 115);
			context.lineTo(x + 5, y + 115 - 15);
			//bottom horizontal liones
			x = x + 25;
			y = y;
		}

		context.moveTo(x - 70, y + 115);
		context.lineTo(x - 70, y + 130);
		context.lineTo(x - 130, y + 130);
		context.arc(x - 130, y + 130, 3, 0, 2 * Math.PI, false);
		//last line and circle
		//context.fillText("1 &#216; R-L Load" ,  x-110, y+135);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();

	}

	rccan.parLines = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		for( i = 0; i < 5; i++) {
			context.moveTo(x - 5, y + 100);
			context.lineTo(x + 15, y + 100);
			context.moveTo(x - 5, y + 90);
			context.lineTo(x + 15, y + 90);
			context.moveTo(x + 5, y + 90);
			context.lineTo(x + 5, y + 75);
			x = x + 25;
			y = y;
		}

		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	rccan.zigLines = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		for( i = 0; i < 5; i++) {
			context.moveTo(x + 5, y + 75);
			context.lineTo(x + 15, y + 70);
			context.lineTo(x + 5, y + 65);
			context.lineTo(x + 15, y + 60);
			context.lineTo(x + 5, y + 55);
			context.lineTo(x + 15, y + 50);
			context.lineTo(x + 5, y + 45);
			context.lineTo(x + 5, y + 30);
			context.lineTo(x + 10, y + 20);
			x = x + 25;
			y = y;
		}
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	rccan.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		rccan.drawLine();
		rccan.drawPoint();
		rccan.parLines();
		rccan.zigLines();

	}
})(sprccanvas);