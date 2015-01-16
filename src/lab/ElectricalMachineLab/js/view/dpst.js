var dpstcanvas = dpstc = dpstcanvas || {}; 
(function(dpstc) {
	var globalObject = {
		x : 5,
		y : 80,
	}
	dpstc.firstRow = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		
		//context.fillText("DPST", x + 40, y + 70);
		for( i = 0; i < 2; i++) {
			context.beginPath();
			context.moveTo(x + 5, y-20);
			context.arc(x, y-20, 2, 0, 2 * Math.PI, false);
			
			context.moveTo(x + 2, y-20);
			context.lineTo(x + 40, y-20);
			context.moveTo(x + 44, y-20);
			context.arc(x + 42, y-20, 2, 0, 2 * Math.PI, false);
			x = x + 70;
			y = y;
			context.strokeStyle = "red";
			context.stroke();
		 }
		context.lineWidth = "2";
		// context.strokeStyle = "black";
		// context.stroke();
	}
	
	dpstc.secondRow = function(globalObject) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		
		
		for( i = 0; i < 2; i++) {
			context.beginPath();
			context.moveTo(x + 5, y + 70);
			
			context.strokeStyle = "red";
			context.stroke();
			context.beginPath();
			context.arc(x, y + 70, 2, 0, 2 * Math.PI, false);
			context.moveTo(x + 2, y + 70);
			context.lineTo(x + 40, y + 70);
			context.moveTo(x + 44, y + 70);
			context.arc(x + 42, y + 70, 2, 0, 2 * Math.PI, false);
			x = x + 70;
			y = y;
			context.strokeStyle = "black";
			context.stroke();
		}
		context.lineWidth = "2";
		// context.strokeStyle = "red";
		// context.stroke();
	}
	dpstc.switchDpst = function(globalObject){
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		//context.strokeStyle = "red";
		// context.stroke();
		context.moveTo(x + 45, y - 30);
		context.lineTo(x + 67, y-20);
		context.moveTo(x + 45, y + 60);
		context.lineTo(x + 67, y + 70);
		context.moveTo(x+55,y-25);
		context.lineTo(x+55,y+63);	
		
		context.moveTo(x+58,y-23);
		context.lineTo(x+58,y+65);
				
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
		
	}
	dpstc.switchDpstMirror = function(globalObject){
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.moveTo(x + 66, y -30);
		context.lineTo(x + 41, y-20);
		
		context.moveTo(x + 66, y + 60);
		context.lineTo(x + 41, y + 70);
		
		context.moveTo(x+55,y-25);
		context.lineTo(x+55,y+63);	
		
		context.moveTo(x+58,y-26);
		context.lineTo(x+58,y+64);
				
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
		
	}
	dpstc.toggleLine = function(flag,canIdAttr){
			globalObject.canvas = document.getElementById(canIdAttr);
			globalObject.context = globalObject.canvas.getContext("2d");
			
			//alert(flag);
			//alert(canIdAttr);
		/*
			if(flag==true){
						dpstc.eraseLine(45,11);
						dpstc.drawSlope(45,0);
						//alert('ON');
					}else{
						dpstc.eraseLine(45,0);
						dpstc.drawSlope(45,11);
						//alert('OFF');
					}*/
		
	}
		
	dpstc.eraseLine = function(l,t){
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();

			context.moveTo(x+67,y);
			context.lineTo(x+l,y-t);
			
			y = y + 30;
			context.moveTo(x+67,y);
			context.lineTo(x+l,y-t);
			
			
			context.lineWidth = "4" ;
			context.strokeStyle = "#0070E4";
			context.stroke () ;
		}
		
	dpstc.drawSlope = function(l,t){
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();

			context.moveTo(x+67,y);
			context.lineTo(x+l,y-t);
			
			y = y + 30;
			context.moveTo(x+67,y);
			context.lineTo(x+l,y-t);
			
			context.lineWidth = "2" ;
			context.strokeStyle = "black";
			context.stroke () ;		
		}

	
	dpstc.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		dpstc.firstRow(globalObject);
		dpstc.secondRow(globalObject);
		dpstc.switchDpst(globalObject);
    }
})(dpstcanvas);
