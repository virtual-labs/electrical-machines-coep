var miammdccanvas = miadc = miammdccanvas || {}; 
(function(miadc) {
	var globalObject = {
		x : 10,
		y : 80
		// topLeftCornerX : 80,
		// topLeftCornerY : 40,
		// width : 40,
		// height : 15
	}
	miadc.firstPoint = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.arc(x, y, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 3, y);
		context.lineTo(x + 45, y);
		context.moveTo(x + 75, y);
		context.strokeStyle = "red";
		context.stroke();
		
		context.beginPath();
		
		context.arc(x + 60, y, 15, 0, 2 * Math.PI, false);
		context.font = "15pt Calibri";
		context.fillText("A", x + 55, y + 5);
		context.moveTo(x + 55, y + 7);
		context.lineTo(x + 67, y + 7);
		context.strokeStyle = "black";
		context.stroke();
		
		
		context.beginPath();
		context.moveTo(x + 75, y);
		context.lineTo(x + 120, y);
		context.moveTo(x + 126, y);
		context.strokeStyle = "red";
		context.stroke();
		
		context.beginPath();
		context.arc(x + 123, y, 2, 0, 2 * Math.PI, false);
		
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();

	}
	miadc.drawRectangle = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.font = "10pt Calibri";
		context.fillStyle="yellow";
		context.rect(x-8,y-25,51,17);
		context.fillRect(x-8,y-25,51,17);
		context.strokeStyle="2";
		context.fillStyle = "black";
		context.stroke();
	}

	miadc.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		miadc.firstPoint(globalObject);
		miadc.drawRectangle(globalObject);

	}
})(miammdccanvas);
