var dpdtcanvas = dpdtc = dpdtcanvas || {}; 
(function(dpdtc) {
	var globalObject = {
		x : 5,
		y : 80,
	}
	dpdtc.firstRow = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.moveTo(x + 45, y - 10);
		context.lineTo(x + 70, y);
		context.arc(x + 70, y, 2, 0, 2 * Math.PI, false);
		context.fillText("DPDT", x + 50, y + 70);
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
	dpdtc.secondRow = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.moveTo(x + 45, y + 20);
		context.lineTo(x + 70, y + 30);
		context.arc(x + 70, y + 30, 2, 0, 2 * Math.PI, false);
		//context.moveTo(x + 55, y + 25);
		//context.lineTo(x + 55, y - 5);
		//context.moveTo(x + 60, y + 25);
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
	
	dpdtc.toggleLeft = function(state,canIdAttr){
			globalObject.canvas = document.getElementById(canIdAttr);
			globalObject.context = globalObject.canvas.getContext("2d");
			
			//alert(state);
			//alert(canIdAttr);
			if(state=="m"){
				dpdtc.eraseLine(67,45,11);
				dpdtc.drawSlope(67,45,0);
				//alert('ON');
			}else if(state == "l"){
				dpdtc.eraseLine(67,45,0);
				dpdtc.drawSlope(67,45,11);
				//alert('OFF');
			}else if(state == "r"){
				dpdtc.eraseLine(73,97,0);
				dpdtc.drawSlope(67,45,0);
				//alert('OFF');
			}
	}
	
	dpdtc.toggleRight = function(state,canIdAttr){
			globalObject.canvas = document.getElementById(canIdAttr);
			globalObject.context = globalObject.canvas.getContext("2d");
			
			//alert(state);
			//alert(canIdAttr);
			if(state=="m"){
				dpdtc.eraseLine(67,45,11);
				dpdtc.drawSlope(73,97,0);
				//alert('ON');
			}else if(state == "l"){
				dpdtc.eraseLine(67,45,0);
				dpdtc.drawSlope(73,97,0);
				//alert('OFF');
			}else if(state == "r"){
				dpdtc.eraseLine(73,97,0);
				dpdtc.drawSlope(67,45,11);
				//alert('OFF');
			}
	}
		
	dpdtc.eraseLine = function(c,l,t){
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();

			context.moveTo(x+c,y);
			context.lineTo(x+l,y-t);
			
			y = y + 30;
			context.moveTo(x+c,y);
			context.lineTo(x+l,y-t);
			
			context.lineWidth = "4" ;
			context.strokeStyle = "0070E4";
			context.stroke () ;
		}
		
	dpdtc.drawSlope = function(c,l,t){
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();

			context.moveTo(x+c,y);
			context.lineTo(x+l,y-t);
			
			y = y + 30;
			context.moveTo(x+c,y);
			context.lineTo(x+l,y-t);
			
			context.lineWidth = "2" ;
			context.strokeStyle = "black";
			context.stroke () ;		
		}

	dpdtc.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		dpdtc.firstRow();
		dpdtc.secondRow();

	}
})(dpdtcanvas);
