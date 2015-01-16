var dcvariablecanvas = dcv = dcvariablecanvas || {}; 
(function(dcv) {
	var globalObject = {
		x : 25,
		y : 20,
	}
	dcv.drawRectangle = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.rect(x, y, 80, 130);
		context.rect(x + 60, y + 75, 15, 25);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	dcv.drawPoints = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		for( i = 0; i < 2; i++) {
			context.moveTo(x - 22, y + 15);
			context.arc(x - 22, y + 15, 2, 0, 2 * Math.PI, false);
			context.moveTo(x - 20, y + 15);
			context.lineTo(x, y + 15);
			x = x;
			y = y + 90;
			
			
		}
		//context.beginPath();
		y = y - 140;
		for( i = 0; i < 2; i++) {
			context.moveTo(x + 80, y - 25);
			context.lineTo(x + 107, y - 25);
			context.arc(x + 107, y - 25, 2, 0, 2 * Math.PI, false);
			x = x;
			y = y + 90;
			
		}
		y = y - 140;
		context.font = "10pt Calibri";
		context.fillText("+", x-25, y-70 );
		context.fillText("-", x-25, y+40 );
		context.fillText("+", x+90, y-70 );
		context.fillText("-", x+100, y+40 );
		context.fillText("i/p", x-20, y-12 );
		context.fillText("o/p", x+84, y-12 );
		
		
		
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	dcv.readingShow = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.moveTo(x + 40, y + 110);
		context.lineTo(x + 40, y + 130);
		
		context.moveTo(x, y + 110);
		context.lineTo(x + 80, y +110);
		x = x;
		y = y + 20;
		//middle switch 
		context.moveTo(x + 40, y +10);
		context.arc(x + 40, y +10, 2, 0, 2 * Math.PI, false);
		
		context.moveTo(x + 40, y+10);
		context.lineTo(x + 40, y+30 );
				
		context.moveTo(x + 28, y+30 );
		context.lineTo(x + 40, y + 45);
		context.lineTo(x + 40, y + 60);
		context.arc(x + 40, y + 60, 2, 0, 2 * Math.PI, false);
		
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	dcv.control = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		
		context.moveTo(x + 62, y + 85);
		context.lineTo(x + 68, y + 77);
		context.lineTo(x + 71, y + 85);
		context.moveTo(x + 62, y + 90);
		context.lineTo(x + 68, y + 98);
		context.lineTo(x + 71, y + 90);
		
		
		for( i = 0; i < 2; i++) {
					context.moveTo(x + 62, y + 85);
					context.lineTo(x + 72, y + 85);
					x = x;
					y = y + 5 ;
					//alert(y);
			}
		
		
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	dcv.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		dcv.drawRectangle(globalObject);
		dcv.drawPoints(globalObject);
		dcv.readingShow(globalObject);
		dcv.control(globalObject);
	}
})(dcvariablecanvas);
