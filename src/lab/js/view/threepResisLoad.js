var threepresisloadcanvas = tprlc = threepresisloadcanvas || {};
 (function(tprlc) {

	var globalObject = {
		x : 15,
		y : 40
	}
	tprlc.drawLine = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.strokeRect(x - 10, y - 20, 415, 145);
	//	alert('x : ' + x + '  y: ' + y);
		for(var j = 0; j < 3; j++) {
			if(j == 1) {
				x = x + 10;
			} else if(j == 2) {
				x = x +15;
			}
			
			context.moveTo(x + 4, y + 7);
			context.lineTo(x + 106, y + 7);

			for( i = 0; i < 5; i++) {// upper horizontal lines
				context.moveTo(x + 5, y + 7);
				context.lineTo(x + 5, y + 22);
				x = x + 25;
				y = y;
			}
			context.moveTo(x - 70, y + 7);
			context.lineTo(x - 70, y - 3);
			//single switch on the top
			context.lineTo(x - 60, y - 12);
			context.moveTo(x - 70, y - 13);
			context.lineTo(x - 70, y - 25);
			context.moveTo(x - 70, y - 25);
			context.arc(x - 70, y - 25, 2, 0, 2 * Math.PI, false);
			context.moveTo(x - 70, y - 27);
			context.lineTo(x - 70, y - 35);
		}
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	tprlc.drawPoint = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		for(var j = 0; j < 3; j++) {
			if(j == 1) {
				x = x + 10;
			} else if(j == 2) {
				x = x +15;
			}
			context.moveTo(x + 4, y + 115);
			context.lineTo(x + 106, y + 115);
			context.moveTo(x, y + 115);
			for( i = 0; i < 5; i++) {
				context.moveTo(x + 5, y + 115);
				context.lineTo(x + 5, y + 115 - 25);
				//bottom horizontal liones
				x = x + 25;
				y = y;
			}
			context.moveTo(x - 70, y + 115);
			context.lineTo(x - 70, y + 138);
		}
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	tprlc.zigLines = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;

		for(var j = 0; j < 3; j++) {
			if(j == 1) {
				x = x + 10;
			} else if(j == 2) {
				x = x +15;
			}
			for( i = 0; i < 5; i++) {
				context.moveTo(x + 5, y + 90);
				context.lineTo(x + 12, y + 85);
				context.lineTo(x + 5, y + 80);
				context.lineTo(x + 12, y + 75);
				context.lineTo(x + 5, y + 70);
				context.lineTo(x + 12, y + 65);
				context.lineTo(x + 5, y + 60);
				context.lineTo(x + 5, y + 38);
				context.lineTo(x + 15, y + 25);
				x = x + 25;
				y = y;
			}
		}
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	tprlc.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		tprlc.drawLine(globalObject);
		tprlc.drawPoint(globalObject);
		tprlc.zigLines(globalObject);
	}
})(threepresisloadcanvas);
