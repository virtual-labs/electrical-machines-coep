var couplingcanvas = cc = couplingcanvas || {};
(function(cc) {
	var globalObject = {
		x : 45,
		y : 60,
	}
	cc.drawRectangle = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		//rectangle
		context.rect(x, y+5, 40, 46);
		
		//middle line
		context.moveTo(x + 20, y+4);
		context.lineTo(x + 20, y + 52);
		//left rect
		context.moveTo(x, y + 18);
		context.lineTo(x - 40, y + 18);
		context.lineTo(x - 40, y + 38);
		context.lineTo(x, y + 38);
		//right rect
		context.moveTo(x + 40, y + 18);
		context.lineTo(x + 80, y + 18);
		context.lineTo(x + 80, y + 38);
		context.lineTo(x + 40, y + 38);
		
		context.moveTo(x, y + 8);
		context.lineTo(x - 10, y + 8);
		context.lineTo(x - 10, y + 12);
		context.lineTo(x, y + 12);
		
		context.moveTo(x + 40, y + 6);
		context.lineTo(x + 50, y + 6);
		context.lineTo(x + 50, y + 15);
		context.lineTo(x + 40, y + 15);
		
		context.moveTo(x + 40, y + 42);
		context.lineTo(x + 50, y + 42);
		context.lineTo(x + 50, y + 50);
		context.lineTo(x + 40, y + 50);
		
		//small middle lines
		context.moveTo(x + 40, y + 46);
		context.lineTo(x + 50, y + 46);
		
		context.moveTo(x + 40, y + 10);
		context.lineTo(x + 50, y + 10);
		
		/*for( i = 0; i < 2; i++) {
			context.moveTo(x + 40, y + 10);
			context.lineTo(x + 50, y + 10);
			context.lineTo(x + 50, y + 15);
			context.lineTo(x + 40, y + 15);
			x = x;
			y = y + 10;
		}*/
		
		/*
		for( i = 0; i < 2; i++) {
			context.moveTo(x + 40, y + 70);
			context.lineTo(x + 50, y + 70);
			context.lineTo(x + 50, y + 75);
			context.lineTo(x + 40, y + 75);
			x = x;
			y = y + 10;
		}
		*/
		context.moveTo(x, y + 43);
		context.lineTo(x - 10, y + 43);
		context.lineTo(x - 10, y + 47);
		context.lineTo(x, y + 47);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	cc.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		cc.drawRectangle(globalObject);
	}
})(couplingcanvas);
