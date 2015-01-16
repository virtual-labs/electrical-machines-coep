var rheostatcanvas = rc = rheostatcanvas || {}; 
(function(rc) {
	var globalObject = {
		x : 15,
		y : 40
	}

	rc.drawPoint = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		// horirzontal lines of cylindrical shape
		context.moveTo(x + 8, y + 30);
		context.lineTo(x + 93, y + 30);
		context.moveTo(x + 8, y + 55);
		context.lineTo(x + 93, y + 55);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();

		// i/o lines
		context.beginPath();
		context.moveTo(x + 10, y + 42);
		context.lineTo(x - 10, y + 42);
		context.moveTo(x - 10, y + 42);
		context.arc(x - 12, y + 42, 2, 0, 2 * Math.PI, false);
		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();

		context.beginPath();
		context.moveTo(x + 98, y + 42);
		context.lineTo(x + 112, y + 42);
		context.moveTo(x + 116, y + 42);
		context.arc(x + 114, y + 42, 2, 0, 2 * Math.PI, false);

		//slider upper horizontal line
		context.moveTo(x + 12, y + 30);
		context.lineTo(x + 12, y + 17);
		context.lineTo(x + 91, y + 17);
		context.lineTo(x + 91, y + 30);
		context.moveTo(x + 24, y + 30);
		context.lineTo(x + 24, y + 17);
		context.moveTo(x + 78, y + 30);
		context.lineTo(x + 78, y + 17);
		
		
		//context.fillRect(x+18, y +17, 5,11);
		
      
      
        //	context.moveTo(x + 30, y + 18);
        // context.lineTo(x + 30, y + 33);
		// context.lineTo(x + 45, y + 33);
		// context.lineTo(x + 45, y + 18);
		// context.lineTo(x + 30, y + 18);

		// left stand
		context.moveTo(x + 18, y + 55);
		context.lineTo(x + 8, y + 65);
		context.lineTo(x + 8, y + 75);
		context.moveTo(x + 23, y + 55);
		context.lineTo(x + 12, y + 66);
		context.lineTo(x + 12, y + 75);

		// right stand
		context.moveTo(x + 83, y + 55);
		context.lineTo(x + 93, y + 65);
		context.lineTo(x + 93, y + 75);
		context.moveTo(x + 78, y + 55);
		context.lineTo(x + 89, y + 66);
		context.lineTo(x + 89, y + 75);

		context.moveTo(x - 8, y + 75);
		context.rect(x - 8, y + 75, 120, 15);

		// context.moveTo(x + 60, y - 10);
		// context.rect(x + 60, y - 10, 30, 15);

		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();

	}
	
	rc.control = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;		
		context.fillStyle   = 'black';
		context.beginPath();
        context.moveTo(x + 24, y + 17);
		context.lineTo(x + 12, y + 24);
		context.moveTo(x + 24, y + 30);
		context.lineTo(x + 12, y + 24);
		context.moveTo(x + 77, y + 17);
		context.lineTo(x + 90, y + 25);
		context.moveTo(x + 77, y + 30);
		context.lineTo(x + 90, y + 25);
        context.fill();
		context.lineWidth = "2";
		context.strokeStyle = "black";		
		context.stroke();
		
    }
	
	rc.drawCurves = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		// right semi ellipse
		var centerX = x + 91;
		var centerY = y + 42;
		var height = 24;
		var width = 17;

		context.moveTo(centerX, centerY - height / 2);
		// A1
		context.bezierCurveTo(centerX + width / 2, centerY - height / 2, centerX + width / 2, centerY + height / 2, centerX, centerY + height / 2);
		// A2

		// left full ellipse
		centerX = x + 10;
		centerY = y + 42;
		height = 24;
		width = 17;

		context.moveTo(centerX, centerY - height / 2);
		// A1
		context.bezierCurveTo(centerX + width / 2, centerY - height / 2, centerX + width / 2, centerY + height / 2, centerX, centerY + height / 2);
		// A2

		context.bezierCurveTo(centerX - width / 2, centerY + height / 2, centerX - width / 2, centerY - height / 2, centerX, centerY - height / 2);
		// A1

		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();

	}
	rc.drawCurvesMirror = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		// right semi ellipse
		var centerX = x + 91;
		var centerY = y + 42;
		var height = 24;
		var width = 17;
		
		context.moveTo(centerX, centerY - height / 2);
		// A1
		context.bezierCurveTo(centerX + width / 2, centerY - height / 2, centerX + width / 2, centerY + height / 2, centerX, centerY + height / 2);
		// A2

		// left full ellipse
		centerX = x + 10;
		centerY = y + 42;
		height = 24;
		width = 17;
		console.log("centerX : "+centerX+" centerY : " +centerY+" height :"+height+ "width: "+width);
		context.moveTo(centerX, centerY - height / 2);
		
		//context.bezierCurveTo(centerX + width / 2, centerY - height / 2, centerX + width / 2, centerY + height / 2, centerX, centerY + height / 2);
		
 		//context.bezierCurveTo(centerX - width / 2, centerY + height / 2, centerX - width / 2, centerY - height / 2, centerX, centerY - height / 2);
 		//context.bezierCurveTo(10,15,5,10,10,5);
		

		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();

	}

	rc.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		rc.drawPoint(globalObject);
		rc.drawCurvesMirror(globalObject);
		rc.control(globalObject);
	}
})(rheostatcanvas);
