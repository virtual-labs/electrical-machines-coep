var mivoltdccanvas = mvdc = mivoltdccanvas || {}; 
(function(mvdc) {

	var globalObject = {
		x : 60,
		y : 10,
		// topLeftCornerX : 80,
		// topLeftCornerY : 40,
		// width : 40,
		// height : 15
		
	}
	mvdc.firstPoint = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.arc(x, y+20, 2, 0, 2 * Math.PI, false);
		//context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
		
		context.beginPath();
		context.moveTo(x, y + 23);
		context.lineTo(x, y + 55);
		context.moveTo(x + 15, y + 70);
		context.arc(x, y + 70, 15, 0, 2 * Math.PI, false);
		context.moveTo(x, y + 85);
		context.lineTo(x, y + 108);
		context.moveTo(x, y + 114);
		context.arc(x, y + 111, 2, 0, 2 * Math.PI, false);
		
		context.font = "10pt Calibri";
		context.fillText("V", x-5, y + 73);
		
		context.lineWidth = "2";
		context.strokeStyle = "Black";
		context.stroke();
	}
	mvdc.drawRectangle = function(globalObject) {
		
		var context = globalObject.context, x = globalObject.x, y = globalObject.y, topLeftCornerX = globalObject.topLeftCornerX, topLeftCornerY = globalObject.topLeftCornerY, width = globalObject.width, height = globalObject.height;
		context.beginPath();
		context.font = "10pt Calibri";
		context.fillStyle="yellow";
		context.rect(x-45,y+35,40,15);
		context.fillRect(x-45,y+35,40,15);
		context.moveTo(x - 7, y + 77);
		context.lineTo(x + 6, y + 77);
		context.strokeStyle="2";
		context.fillStyle = "black";
		context.stroke();

	}

	mvdc.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		mvdc.firstPoint(globalObject);
		mvdc.drawRectangle(globalObject);

	}
})(mivoltdccanvas);
