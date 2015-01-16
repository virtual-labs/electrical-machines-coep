var spstcanvas = spstc = spstcanvas || {}; 
(function(spstc) {
	var globalObject = {
		x : 5,
		y : 80,
	}
	spstc.drawLines = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.moveTo(x + 45, y - 10);
		context.lineTo(x + 67, y);
		//context.fillText("SPST", x + 40, y + 50);
		
		for( i = 0; i < 2; i++) {
			context.moveTo(x + 5, y);
			context.arc(x, y, 2, 0, 2 * Math.PI, false);
			context.moveTo(x + 2, y);
			context.lineTo(x + 40, y);
			context.moveTo(x + 42, y)
			context.arc(x + 42, y, 2, 0, 2 * Math.PI, false);
			x = x + 70;
			y = y;
		}
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}	
	spstc.toggleLine = function(flag,canIdAttr){
			globalObject.canvas = document.getElementById(canIdAttr);
			globalObject.context = globalObject.canvas.getContext("2d");
			
			//alert(flag);
			//alert(canIdAttr);
			if(flag==true){
				spstc.eraseLine(45,10);
				spstc.drawSlope(45,0);
				//alert('ON');
			}else{
				spstc.eraseLine(45,0);
				spstc.drawSlope(45,10);
				//alert('OFF');
			}
		}
	
	spstc.drawArcs = function(){
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.moveTo(x + 42, y)
		context.arc(x + 42, y, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 112, y)
		context.arc(x +112, y, 2, 0, 2 * Math.PI, false);
	}
		
	spstc.eraseLine = function(l,t){
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();

			context.moveTo(x+67,y);
			context.lineTo(x+l,y-t);
			
			context.lineWidth = "3" ;
			context.strokeStyle = "#0070E4";
			context.stroke () ;
		}
		
	spstc.drawSlope = function(l,t){
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();

			context.moveTo(x+67,y);
			context.lineTo(x+l,y-t);

			context.lineWidth = "2" ;
			context.strokeStyle = "black";
			context.stroke () ;		
		}


	spstc.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		spstc.drawLines(globalObject);

	}
})(spstcanvas);
