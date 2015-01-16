var miammaccanvas = miaac = miammaccanvas || {}; 
(function(miadc) {
	var globalObject = {
		x : 10,
		y : 80
		
	}
	miaac.firstPoint = function(globalObject) {
			var context = globalObject.context, x = globalObject.x, y = globalObject.y;
			context.beginPath();
			context.arc(x + 60, y, 15, 0, 2 * Math.PI, false);
			context.font = "15pt Calibri";
			context.fillText("A", x + 55, y );
			context.strokeStyle = "black";
			context.stroke();
				
			context.beginPath();			
			context.arc(x, y, 2, 0, 2 * Math.PI, false);
			context.moveTo(x + 3, y);
			context.lineTo(x + 45, y);
			context.moveTo(x + 75, y);			
			context.moveTo(x + 75, y);
			context.lineTo(x + 120, y);
			context.moveTo(x + 126, y);
			context.strokeStyle = "red";
			context.stroke();
			
			context.beginPath();
			context.arc(x + 123, y, 2, 0, 2 * Math.PI, false);	
			context.strokeStyle = "red";
			context.stroke();	
			
			context.beginPath();				
			x = x + 13;
			y = y - 80;
			context.moveTo(x+40,y+85);
			context.bezierCurveTo(x+45,y+82,x+43,y+83,x+48,y+85);
			context.bezierCurveTo(x+56,y+88,x+54,y+88,x+56,y+85);
			
			
			context.lineWidth = "2";
			context.strokeStyle = "black";
			context.stroke();
			
	}
	miaac.firstVerticalFig = function(globalObject) {
			var context = globalObject.context, x = globalObject.x, y = globalObject.y;
			context.beginPath();
			context.arc(x, y, 2, 0, 2 * Math.PI, false);
			context.moveTo(x, y+2);
			context.lineTo(x , y+35);
			
			context.moveTo(x+10 , y+45);
			context.arc(x , y+45, 10, 0, 2 * Math.PI, false);
			
			context.font = "10pt Calibri";
			context.fillText("A", x - 4, y+46 );
			
			context.moveTo(x , y+55);
			context.lineTo(x, y+90);
			context.moveTo(x , y+92);
			context.arc(x, y+92, 2, 0, 2 * Math.PI, false);
			
			x = x -49;
			y = y -36;
			context.moveTo(x+39,y+84);
			context.bezierCurveTo(x+45,y+82,x+43,y+83,x+48,y+85);
			context.bezierCurveTo(x+56,y+88,x+54,y+88,x+56,y+85);
			
			//innner waveform
			// context.moveTo(x-10,y+50);
			// context.bezierCurveTo(x,y+52,x-4,y+52,x+2,y+50);
			// //context.bezierCurveTo(x+8,y+58,x+6,y+58,x+12,y+50);
			
			context.lineWidth = "2";
			context.strokeStyle = "Black";
			context.stroke();
			
	}
	
	miaac.VerticalFig = function(globalObject) {
			var context = globalObject.context, x = globalObject.x, y = globalObject.y;
			context.beginPath();
			context.arc(x, y, 1.5, 0, 2 * Math.PI, false);
			context.moveTo(x, y+2);
			context.lineTo(x , y+11);
			
			context.moveTo(x , y+30);
			context.lineTo(x, y+48);
			
			context.moveTo(x , y+50);
			context.arc(x, y+50, 1.5, 0, 2 * Math.PI, false);
			
			context.lineWidth = "2";
			context.strokeStyle = "red";
			context.stroke();
			
			context.beginPath();
			context.moveTo(x+10 , y+20);
			context.arc(x , y+20, 10, 0, 2 * Math.PI, false);
			
			context.font = "10pt Calibri";
			context.fillText("A", x - 4, y+22 );
			
		//	context.moveTo(x , y+50);
		//	context.arc(x, y+50, 1.5, 0, 2 * Math.PI, false);
			
			x = x -49;
			y = y -60;
			context.moveTo(x+39,y+84);
			context.bezierCurveTo(x+45,y+82,x+43,y+83,x+48,y+85);
			context.bezierCurveTo(x+56,y+88,x+54,y+88,x+56,y+85);
			
			//innner waveform
			// context.moveTo(x-10,y+50);
			// context.bezierCurveTo(x,y+52,x-4,y+52,x+2,y+50);
			// //context.bezierCurveTo(x+8,y+58,x+6,y+58,x+12,y+50);
			
			context.lineWidth = "2";
			context.strokeStyle = "Black";
			context.stroke();
			
	}
	
	miaac.drawRectangle = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.font = "10pt Calibri";
		context.fillStyle="yellow";
		context.rect(x+8,y-33,40,15);
		context.fillRect(x+8,y-33,40,15);
		context.strokeStyle="2";
		context.fillStyle = "black";
		context.stroke();
	}

	miaac.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		miaac.firstPoint(globalObject);
		miaac.drawRectangle(globalObject);

	}
})(miammaccanvas);
