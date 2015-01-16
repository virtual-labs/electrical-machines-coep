var squirrotorcanvas = sqrc = squirrotorcanvas || {}; 
(function(sqrc) {
	var globalObject = {
		x : 30,
		y : 45,
		rad : 20
	}
	sqrc.drawRectangle = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y, rad = globalObject.rad;
		context.beginPath();
		context.rect(x, y, 80, 80);
		//outer rect
		context.moveTo(x + 80, y + 25);
		context.lineTo(x + 105, y + 25);
		context.lineTo(x + 105, y + 45);
		context.lineTo(x + 80, y + 45);
		context.moveTo(x, y + 25);
		context.lineTo(x - 28, y + 25);
		context.lineTo(x - 28, y + 45);
		context.lineTo(x, y + 45);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	sqrc.drawPoints = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		var labelName;

		for(var i = 0; i <= 5; i++) {
			context.moveTo(x + 5, y);
			context.lineTo(x + 5, y - 35);
			context.moveTo(x + 7, y - 37);
			context.arc(x + 5, y - 37, 2, 0, 2 * Math.PI, false);

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

			context.moveTo(x + 6, y - 15);
			context.fillText(labelName, x + 6, y - 15, 11.3);
			x = x + 13;
		}
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();

	}

	sqrc.drawEllipse = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		var centerX;
		var centerY;
		var height;
		var width;

		for( i = 0; i <= 3; i++) {
			if(i % 2 == 0) {
				centerX = x + 15;
				centerY = y + 40;
				height = 45;
				width = 30;
			} else {
				centerX = x + 15;
				centerY = y + 40;
				height = 30;
				width = 15;
				x = x + 50;
			}

			context.moveTo(centerX, centerY - height / 2);
			// A1

			context.bezierCurveTo(centerX + width / 2, centerY - height / 2, centerX + width / 2, centerY + height / 2, centerX, centerY + height / 2);
			// A2

			context.bezierCurveTo(centerX - width / 2, centerY + height / 2, centerX - width / 2, centerY - height / 2, centerX, centerY - height / 2);
			// A1

		}
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();

	}

	sqrc.drawCircles = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		// circles are drawn from top & clockwise

		for(var i = 0; i <= 1; i++) {
			context.moveTo(x + 18, y + 22);
			context.arc(x + 15, y + 22, 3, 0, 2 * Math.PI, false);

			context.moveTo(x + 26, y + 35);
			context.arc(x + 23, y + 35, 3, 0, 2 * Math.PI, false);

			context.moveTo(x + 25, y + 50);
			context.arc(x + 22, y + 50, 3, 0, 2 * Math.PI, false);

			context.moveTo(x + 18, y + 60);
			context.arc(x + 15, y + 58, 3, 0, 2 * Math.PI, false);

			context.moveTo(x + 10, y + 43);
			context.arc(x + 7, y + 43, 3, 0, 2 * Math.PI, false);

			context.moveTo(x + 11, y + 29);
			context.arc(x + 8, y + 29, 3, 0, 2 * Math.PI, false);
			x = x + 50;
		}

		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	sqrc.connectCircles = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(x + 15, y + 19);
		context.lineTo(x + 65, y + 19);
		context.moveTo(x + 15, y + 25);
		context.lineTo(x + 65, y + 25);

		context.moveTo(x + 23, y + 33);
		context.lineTo(x + 73, y + 33);
		context.moveTo(x + 23, y + 39);
		context.lineTo(x + 73, y + 39);

		context.moveTo(x + 22, y + 47);
		context.lineTo(x + 72, y + 47);
		context.moveTo(x + 22, y + 53);
		context.lineTo(x + 72, y + 53);

		context.moveTo(x + 15, y + 56);
		context.lineTo(x + 65, y + 56);
		context.moveTo(x + 15, y + 61);
		context.lineTo(x + 65, y + 61);

		context.moveTo(x + 7, y + 40);
		context.lineTo(x + 57, y + 40);
		context.moveTo(x + 7, y + 46);
		context.lineTo(x + 57, y + 46);

		context.moveTo(x + 8, y + 26);
		context.lineTo(x + 58, y + 26);
		context.moveTo(x + 8, y + 32);
		context.lineTo(x + 58, y + 32);

		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	sqrc.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		sqrc.drawRectangle(globalObject);
		sqrc.drawPoints(globalObject);
		sqrc.drawEllipse(globalObject);
		sqrc.drawCircles(globalObject);
		sqrc.connectCircles(globalObject);
	}
})(squirrotorcanvas);
