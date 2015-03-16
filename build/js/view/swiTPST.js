var switpstcanvas = tpst = switpstcanvas || {}; 
(function(tpst) {
	var globalObject = {
		x : 5,
		y : 30,
	}
	tpst.firstRow = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();	
		context.moveTo(x + 45, y - 10);
		context.lineTo(x + 70, y);
		//context.fillText("TPST", x + 40, y + 90);
		for( i = 0; i < 2; i++) {
			context.moveTo(x + 5, y);
			context.arc(x, y, 2, 0, 2 * Math.PI, false);
			context.moveTo(x + 2, y);
			context.lineTo(x + 40, y);
			context.moveTo(x + 44, y)
			context.arc(x + 42, y, 2, 0, 2 * Math.PI, false);
			x = x + 70;
			y = y;
		}
		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
	}
	tpst.secondRow = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();	
		context.moveTo(x + 45, y + 40);
		context.lineTo(x + 70, y + 50);
		//context.moveTo(x + 55, y + 55);
		//context.lineTo(x + 55, y - 5);
		//context.moveTo(x + 60, y + 55);
		//context.lineTo(x + 60, y - 5);
		y=y+20;
		for( i = 0; i < 2; i++) {
			context.moveTo(x + 5, y + 30);
			context.arc(x, y + 30, 2, 0, 2 * Math.PI, false);
			context.moveTo(x + 2, y + 30);
			context.lineTo(x + 40, y + 30);
			context.moveTo(x + 44, y + 30);
			context.arc(x + 42, y + 30, 2, 0, 2 * Math.PI, false);
			x = x + 70;
			y = y;
		}
		context.lineWidth = "2";
		context.strokeStyle = "gold";
		context.stroke();
	}
	tpst.thirdRow = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();	
		context.moveTo(x + 45, y + 90);
		context.lineTo(x + 70, y + 100);
		y=y+40;
		for( i = 0; i < 2; i++) {
			context.moveTo(x + 5, y + 60);
			context.arc(x, y + 60, 2, 0, 2 * Math.PI, false);
			context.moveTo(x + 2, y + 60);
			context.lineTo(x + 40, y + 60);
			context.moveTo(x + 44, y + 60);
			context.arc(x + 42, y + 60, 2, 0, 2 * Math.PI, false);
			x = x + 70;
			y = y;
		}
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
	}
	
	tpst.toggleLine = function(flag,canIdAttr){
			globalObject.canvas = document.getElementById(canIdAttr);
			globalObject.context = globalObject.canvas.getContext("2d");
			
			//alert(flag);
			//alert(canIdAttr);
			// if(flag==true){
				// tpst.eraseLine(45,11);
				// tpst.drawSlope(45,0);
				// //alert('ON');
			// }else{
				// tpst.eraseLine(45,0);
				// tpst.drawSlope(45,11);
				// //alert('OFF');
			// }
	}
		
	tpst.eraseLine = function(l,t){
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();

			context.moveTo(x+67,y);
			context.lineTo(x+l,y-t);
			
			y = y + 30;
			context.moveTo(x+67,y);
			context.lineTo(x+l,y-t);
			
			y = y + 30;
			context.moveTo(x+67,y);
			context.lineTo(x+l,y-t);
			
			context.lineWidth = "4" ;
			context.strokeStyle = "#0070E4";
			context.stroke () ;
		}
		
	tpst.drawSlope = function(l,t){
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();

			context.moveTo(x+67,y);
			context.lineTo(x+l,y-t);
			
			y = y + 30;
			context.moveTo(x+67,y);
			context.lineTo(x+l,y-t);
			
			y = y + 30;
			context.moveTo(x+67,y);
			context.lineTo(x+l,y-t);
			
			context.lineWidth = "2" ;
			context.strokeStyle = "black";
			context.stroke () ;		
		}
	tpst.drawRectangle = function(l,t){
		
			var context = globalObject.context,
					
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath ();		
			context.moveTo(x+30,y+100);
			context.lineTo(x+30,y+300);
			context.moveTo(x+35,y+100);
			context.lineTo(x+35,y+300);
								
			context.lineWidth = "2" ;
			context.strokeStyle = "black";
			context.stroke () ;		
	}

	tpst.drawParallelLines = function(globalObject){
		
			var context = globalObject.context, x = globalObject.x, y = globalObject.y;
			context.beginPath();
			
			context.moveTo(x+53,y-8);
			context.lineTo(x+53,y+92);	
			context.moveTo(x+57,y-7);
			context.lineTo(x+57,y+94);
						
			context.lineWidth = "2";
			context.strokeStyle = "black";
			context.stroke();
	}

	tpst.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
	
		tpst.firstRow(globalObject);
		tpst.secondRow(globalObject);
		tpst.thirdRow(globalObject);
		tpst.drawParallelLines(globalObject);
		
		
	}
})(switpstcanvas);
