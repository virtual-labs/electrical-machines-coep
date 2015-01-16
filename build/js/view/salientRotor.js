var salientrotorcanvas = spr = salientrotorcanvas || {}; 
(function(spr) {
	var globalObject = {
		x : 30,
		y : 60,
		rad : 20

	}

	spr.drawRectangle = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y, rad = globalObject.rad;
		context.beginPath();
		context.rect(x - 8, y - 20, 90, 90);
		//outer rect

		context.moveTo(x - 8, y + 15);
		context.lineTo(x - 28, y + 15);
		context.lineTo(x - 28, y + 35);
		context.lineTo(x - 8, y + 35);

		context.moveTo(x + 82, y + 15);
		context.lineTo(x + 103, y + 15);
		context.lineTo(x + 103, y + 35);
		context.lineTo(x + 82, y + 35);

		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	spr.drawPoints = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(x + 15, y + 4);
		context.lineTo(x + 15, y + 12);
		context.lineTo(x + 60, y + 12);
		context.lineTo(x + 60, y + 4);

		context.moveTo(x + 15, y + 41);
		context.lineTo(x + 15, y + 33);
		context.lineTo(x + 60, y + 33);
		context.lineTo(x + 60, y + 41);

		// z connecting the spirals to xx
		context.moveTo(x + 56, y + 12);
		context.lineTo(x + 56, y);
		context.lineTo(x + 77, y);
		context.lineTo(x + 77, y - 50);
		context.moveTo(x + 79, y - 52);
		context.arc(x + 77, y - 52, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 78, y - 35);
		context.fillText("xx", x + 78, y - 35, 10);

		// z connecting the spirals to x
		context.moveTo(x + 20, y + 12);
		context.lineTo(x + 20, y - 10);
		context.lineTo(x + 67, y - 10);
		context.lineTo(x + 67, y - 50);
		context.moveTo(x + 69, y - 52);
		context.arc(x + 67, y - 52, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 68, y - 35);
		context.fillText("x", x + 68, y - 35, 10);
		context.lineWidth = "2";
					context.strokeStyle = "red";
					context.stroke();

		var labelName;

		for(var i = 0; i <= 5; i++) {
			//context.beginPath();
			
			context.moveTo(x, y - 20);
			context.lineTo(x, y - 50);
			context.moveTo(x + 2, y - 52);
			context.arc(x, y - 52, 2, 0, 2 * Math.PI, false);
			
           // context.strokeStyle = "red";
			//context.stroke();
			
			switch(i) {
				case 0:
					labelName = "R1";
					break;

				case 1:
					labelName = "R2";
					break;

				case 2:
					labelName = "Y1";
					break;

				case 3:
					labelName = "Y2";
					break;

				case 4:
					labelName = "B1";
					break;

				case 5:
					labelName = "B2";
					break;
			}

			context.moveTo(x + 1, y - 35);
			context.fillText(labelName, x + 1, y - 35, 10);
			x = x + 11;
			
			
		}
            context.lineWidth = "2";
			context.strokeStyle = "black";
			context.stroke();
			
		
	}

	spr.drawCurves = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		var centerX = x + 60;
		var centerY = y + 23;
		var height = 37;
		var width = 30;

		// right semi elliptical curve
		context.moveTo(centerX, centerY - height / 2);
		// A1
		context.bezierCurveTo(centerX + width / 2, centerY - height / 2, centerX + width / 2, centerY + height / 2, centerX, centerY + height / 2);
		// A2

		centerX = x + 15;
		centerY = y + 23;
		height = 37;
		width = 30;

		// left semi elliptical curve
		context.moveTo(centerX, centerY + height / 2);
		// A1
		context.bezierCurveTo(centerX - width / 2, centerY + height / 2, centerX - width / 2, centerY - height / 2, centerX, centerY - height / 2);
		// A1

		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	spr.drawSpirals = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		for(var i = 0; i <= 1; i++) {
			context.moveTo(x + 28, y + 33);
			context.arc(x + 24, y + 33, 4, 0, Math.PI, false);
			context.moveTo(x + 28, y + 33);
			context.lineTo(x + 31, y + 12);
			context.moveTo(x + 31, y + 12);
			context.arc(x + 35, y + 12, 4, 0, Math.PI, true);
			x = x + 12;
		}

		context.moveTo(x + 28, y + 33);
		context.arc(x + 24, y + 33, 4, 0, Math.PI, false);
		context.moveTo(x + 28, y + 33);
		context.lineTo(x + 31, y + 12);

		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	spr.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		spr.drawRectangle(globalObject);
		spr.drawPoints(globalObject);
		spr.drawCurves(globalObject);
		spr.drawSpirals(globalObject);
	}
})(salientrotorcanvas);
