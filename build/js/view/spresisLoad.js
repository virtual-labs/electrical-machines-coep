var spresisloadcanvas = sprl = spresisloadcanvas || {}; 
(function(sprl) {
	var globalObject = {
		x : 15,
		y : 40
	}
	sprl.drawLine = function(globalObject) {
		//upper lines
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(x, y+10);
		context.lineTo(x + 115, y+10);
		context.moveTo(x, y);
		for( i = 0; i < 5; i++) {
			context.moveTo(x + 5, y+10);
			context.lineTo(x + 5, y + 30);
			x = x + 25;
			y = y;
		}
		context.fillText("Main(M)", x - 52, y - 10);
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
		
		context.beginPath();
		
		context.moveTo(x - 70, y+9);
		context.lineTo(x - 70, y -3);		
		context.lineTo(x - 60, y -18);
		context.moveTo(x - 70, y-3);
	    context.arc(x - 70, y -4, 2, 0, 2 * Math.PI, false);
		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
		
	}
	sprl.drawPoint = function(globalObject) {
		
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		//upper lines
		context.moveTo(x - 5, y - 30);
		context.lineTo(x + 55, y - 30);
		context.lineTo(x + 55, y - 25);
		context, moveTo(x + 55, y - 22);
		context.arc(x + 55, y - 22, 2, 0, 2 * Math.PI, false);
		context.moveTo(x - 5, y - 30);
		context.arc(x - 20, y - 30, 2, 0, 2 * Math.PI, false);
		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
		
		//lower lines
		// initial circle point
		context.beginPath();
		context.moveTo(x, y + 115);
		context.lineTo(x + 115, y + 115);
		context.moveTo(x, y + 115);
		for( i = 0; i < 5; i++) {
			context.moveTo(x + 5, y + 115);
			context.lineTo(x + 5, y + 115 - 10);
			x = x + 25;
			y = y;
		}
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
		context.beginPath();
		context.moveTo(x - 70, y + 115);
		context.lineTo(x - 70, y + 130);
		context.lineTo(x - 142, y + 130);
		context.arc(x - 144, y + 130, 2, 0, 2 * Math.PI, false);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();

	}
	sprl.zigzag = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(x, y + 85);

		for( i = 0; i < 5; i++) {
			context.moveTo(x + 5, y + 75);
			context.lineTo(x + 10, y + 80);
			context.lineTo(x + 5, y + 85);
			context.lineTo(x + 10, y + 90);
			context.lineTo(x + 5, y + 95);
			context.lineTo(x + 10, y + 100);
			context.lineTo(x + 5, y + 105);
			context.lineWidth = "2";
			context.strokeStyle = "blue";
			context.stroke();
			x = x + 25;
			y = y;
		}

	}
	sprl.middleLine = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		for( i = 0; i < 5; i++) {
			context.moveTo(x + 5, y + 75);
			context.lineTo(x + 5, y + 45);
			context.lineTo(x + 10, y + 30);
			x = x + 25;
			y = y;
		}
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
	}

	sprl.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		sprl.drawLine(globalObject);
		sprl.drawPoint(globalObject);
		sprl.zigzag(globalObject);
		sprl.middleLine(globalObject);
	}
})(spresisloadcanvas);
