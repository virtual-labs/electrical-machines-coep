var switpdtcanvas = tpdt = switpdtcanvas || {};
(function(tpdt) {
	var globalObject = {
		x : 5,
		y : 80,
	}
	tpdt.firstRow = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.moveTo(x + 45, y - 10);
		context.lineTo(x + 70, y);
		context.arc(x + 70, y, 2, 0, 2 * Math.PI, false);
		context.fillText("TPDT", x + 50, y + 90);
		for( i = 0; i < 2; i++) {
			context.moveTo(x + 5, y);
			context.arc(x, y, 2, 0, 2 * Math.PI, false);
			
			context.moveTo(x + 2, y);
			if(i==1){
				x = x - 15;
			}
			context.lineTo(x + 40, y);
			
			context.moveTo(x + 44, y)
			context.arc(x + 42, y, 2, 0, 2 * Math.PI, false);
			x = x + 100;
			y = y;

		}
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	tpdt.secondRow = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.moveTo(x + 45, y + 20);
		context.lineTo(x + 70, y + 30);
		context.arc(x + 70, y + 30, 2, 0, 2 * Math.PI, false);
		//context.moveTo(x + 55, y + 55);
		//context.lineTo(x + 55, y - 5);
		//context.moveTo(x + 60, y + 55);
		//context.lineTo(x + 60, y - 5);
		for( i = 0; i < 2; i++) {
			context.moveTo(x + 5, y + 30);
			context.arc(x, y + 30, 2, 0, 2 * Math.PI, false);
			context.moveTo(x + 2, y + 30);
			if(i==1){
				x = x - 15;
			}
			context.lineTo(x + 40, y + 30);
			context.moveTo(x + 44, y + 30);
			context.arc(x + 42, y + 30, 2, 0, 2 * Math.PI, false);
			x = x + 100;
			y = y;		
		}
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	tpdt.thirdRow = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.moveTo(x + 45, y + 50);
		context.lineTo(x + 70, y + 60);
		context.arc(x + 70, y + 60, 2, 0, 2 * Math.PI, false);

		for( i = 0; i < 2; i++) {
			context.moveTo(x + 5, y + 60);
			context.arc(x , y + 60, 2, 0, 2 * Math.PI, false);
			context.moveTo(x + 2, y + 60);
			if(i==1){
				x = x - 15;
			}
			context.lineTo(x + 40, y + 60);
			context.moveTo(x + 44, y + 60);
			context.arc(x + 42, y + 60, 2, 0, 2 * Math.PI, false);
			x = x + 100;
			y = y;
		}
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();

	}

	
	
	tpdt.toggleLeft = function(state,canIdAttr){
			globalObject.canvas = document.getElementById(canIdAttr);
			globalObject.context = globalObject.canvas.getContext("2d");
			
			if(state=="m"){
				tpdt.eraseLine(67,45,11);
				tpdt.drawSlope(67,45,0);
				//alert('ON');
			}else if(state == "l"){
				tpdt.eraseLine(67,45,0);
				tpdt.drawSlope(67,45,11);
				//alert('OFF');
			}else if(state == "r"){
				tpdt.eraseLine(73,97,0);
				tpdt.drawSlope(67,45,0);
				//alert('OFF');
			}
	}
	
	tpdt.toggleRight = function(state,canIdAttr){
			globalObject.canvas = document.getElementById(canIdAttr);
			globalObject.context = globalObject.canvas.getContext("2d");
			
			//alert(state);
			//alert(canIdAttr);
			if(state=="m"){
				tpdt.eraseLine(67,45,11);
				tpdt.drawSlope(73,97,0);
				//alert('ON');
			}else if(state == "l"){
				tpdt.eraseLine(67,45,0);
				tpdt.drawSlope(73,97,0);
				//alert('OFF');
			}else if(state == "r"){
				tpdt.eraseLine(73,97,0);
				tpdt.drawSlope(67,45,11);
				//alert('OFF');
			}
	}
		
	tpdt.eraseLine = function(c,l,t){
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();

			context.moveTo(x+c,y);
			context.lineTo(x+l,y-t);
			
			y = y + 30;
			context.moveTo(x+c,y);
			context.lineTo(x+l,y-t);
			
			y = y + 30;
			context.moveTo(x+c,y);
			context.lineTo(x+l,y-t);
			
			
			context.lineWidth = "4" ;
			context.strokeStyle = "0070E4";
			context.stroke () ;
		}
		
	tpdt.drawSlope = function(c,l,t){
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();

			context.moveTo(x+c,y);
			context.lineTo(x+l,y-t);
			
			y = y + 30;
			context.moveTo(x+c,y);
			context.lineTo(x+l,y-t);
			
			y = y + 30;
			context.moveTo(x+c,y);
			context.lineTo(x+l,y-t);
	
			context.lineWidth = "2" ;
			context.strokeStyle = "black";
			context.stroke () ;		
		}

	tpdt.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		tpdt.firstRow();
		tpdt.secondRow();
		tpdt.thirdRow();

	}
})(switpdtcanvas);
