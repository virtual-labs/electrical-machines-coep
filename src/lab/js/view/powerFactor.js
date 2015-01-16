var powerfactorcanvas = pfc = powerfactorcanvas || {}; 
(function(pfc) {
	var globalObject = {
		x : 15,
		y : 40
	}
	pfc.drawRect = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		// upper horizontal
		context.moveTo(x + 8, y - 25);
		context.lineTo(x + 98, y - 25);

		// for right verticle
		//	context.moveTo(x+98 , y-25);
		context.lineTo(x + 98, y + 120);

		// for lower horizontal
		//	context.moveTo(x+98,y+120);
		context.lineTo(x + 8, y + 120);

		// for left verticle line
		//	context.moveTo(x+8,y+120);
		context.lineTo(x + 8, y - 25);

		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	
	pfc.drawLine = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		// upper horizontal
		context.moveTo(x - 5, y);
		context.lineTo(x + 35, y);
		context.moveTo(x + 55, y);
		context.lineTo(x + 110, y);

		context.moveTo(x - 8, y);
		context.arc(x - 8, y, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 113, y);
		context.arc(x + 113, y, 2, 0, 2 * Math.PI, false);

		// middle horizontal
		context.moveTo(x - 5, y + 50);
		context.lineTo(x + 110, y + 50);

		context.moveTo(x - 8, y + 50);
		context.arc(x - 8, y + 50, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 113, y + 50);
		context.arc(x + 113, y + 50, 2, 0, 2 * Math.PI, false);

		// lower horizontal
		context.moveTo(x - 5, y + 100);
		context.lineTo(x + 110, y + 100);

		context.moveTo(x - 8, y + 100);
		context.arc(x - 8, y + 100, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 113, y + 100);
		context.arc(x + 113, y + 100, 2, 0, 2 * Math.PI, false);

		context.moveTo(x + 20, y);
		context.lineTo(x + 20, y + 14);
		context.lineTo(x + 30, y + 14);

		context.moveTo(x + 20, y + 50);
		context.lineTo(x + 20, y + 36);
		context.lineTo(x + 30, y + 36);

		context.moveTo(x + 60, y + 14);
		context.lineTo(x + 75, y + 14);

		context.moveTo(x + 60, y + 36);
		context.lineTo(x + 75, y + 36);

		context.moveTo(x + 75, y + 14);
		context.lineTo(x + 75, y + 80);
		context.lineTo(x + 55, y + 80);
		context.moveTo(x + 35, y + 80);
		context.lineTo(x + 20, y + 80);
		context.lineTo(x + 20, y + 100);

		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	pfc.drawZig = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		for( i = 0; i <= 1; i++) {
			context.moveTo(x + 30, y + 14);
			context.lineTo(x + 35, y + 9);
			context.lineTo(x + 40, y + 14);
			context.lineTo(x + 45, y + 9);
			context.lineTo(x + 50, y + 14);
			context.lineTo(x + 55, y + 9);
			context.lineTo(x + 60, y + 14);
			x = x;
			y = y + 22;

		}

		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	pfc.drawCoil = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		y = y - 25;

		for(var i = 0; i <= 1; i++) {
			x =globalObject.x -16;
			context.moveTo(x + 50, y + 25);

			for(var j = 0; j <= 1; j++) {
				context.bezierCurveTo(x + 46, y + 20, x + 45, y + 20, x + 50, y + 12);
				// first part
				context.bezierCurveTo(x + 56, y + 9, x + 54, y + 9, x + 60, y + 12);
				// second part
				context.bezierCurveTo(x + 61, y + 15, x + 66, y + 18, x + 60, y + 25);
				// third part
				x = x + 10;
			}
			y = y + 80;
		}
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();

	}
	pfc.drawValueRect = function(globalObject) {
		
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.rect(x+50,y-47,40,15);
		context.font = "10pt Calibri";		
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	pfc.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		pfc.drawRect(globalObject);
		pfc.drawLine(globalObject);
		pfc.drawZig(globalObject);
		pfc.drawCoil(globalObject);
		pfc.drawValueRect(globalObject);
	}
})(powerfactorcanvas);
