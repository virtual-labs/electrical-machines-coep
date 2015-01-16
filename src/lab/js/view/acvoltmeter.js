var acvoltmetercanvas = acvm = acvoltmetercanvas || {}; 
(function(acvm) {

			var globalObject = {
					x: 15,
					y: 60
				}
		
				acvm.drawPoint = function(globalObject){
					var context = globalObject.context,	x = globalObject.x,	y = globalObject.y;
					context.beginPath();
					
					// upper verticle line
					context.moveTo(x+50,y-30);
					context.lineTo(x+50,y+10);
					
					// big circle
					context.moveTo(x+65,y+25);
					context.arc(x+50 , y+25 , 15 , 0 , 2*Math.PI, false);     
					
					// lower verticle line
					context.moveTo(x+50,y+40);
					context.lineTo(x+50,y+80);
					
					// endpoint circles
					context.moveTo(x+52,y-32);
					context.arc(x+50 , y-32 , 2 , 0 , 2*Math.PI, false);
					context.moveTo(x+52,y+82);
					context.arc(x+50 , y+82 , 2 , 0 , 2*Math.PI, false);
					
					context.fillText("V", x+45 , y+26);
					
					y = y-55;
					context.moveTo(x+38,y+85);
					context.bezierCurveTo(x+45,y+82,x+43,y+83,x+48,y+85);
					context.bezierCurveTo(x+56,y+88,x+54,y+88,x+58,y+85);
					
					context.lineWidth = "2" ;
					context.strokeStyle = "black";
					context.stroke () ;		

				}
				acvm.drawRectangle = function(globalObject) {
					var context = globalObject.context, x = globalObject.x, y = globalObject.y;
					context.beginPath();
					context.font = "10pt Calibri";
		            context.fillStyle="yellow";
					context.rect(x+3,y-10,40,15);
					context.fillRect(x+3,y-10,40,15);
					context.strokeStyle="2";
		            context.fillStyle = "black";
		            context.stroke();
				}
			
				acvm.firstHorizacVoltmeter = function(globalObject) {
					
					var context = globalObject.context,	x = globalObject.x,	y = globalObject.y;
					context.beginPath();
					
					// upper verticle line
					context.moveTo(x-140,y+25);
					context.lineTo(x-130,y+25);
					
					// big circle
					context.moveTo(x-114,y+25);
					context.arc(x-124 , y+25 , 8 , 0 , 2*Math.PI, false);     
					
					// lower verticle line
					context.moveTo(x-117,y+25);
					context.lineTo(x-110,y+25);
					
					context.fillText("V", x-127 , y+26);
					
					x= x-168;
					y = y-57;
					context.moveTo(x+37,y+86);
					context.bezierCurveTo(x+45,y+82,x+40,y+83,x+45,y+85);
					context.bezierCurveTo(x+49,y+86,x+48,y+86,x+49,y+82);
					
					// context.moveTo(x+38,y+85);
					// context.bezierCurveTo(x+45,y+82,x+43,y+83,x+48,y+85);
					// context.bezierCurveTo(x+56,y+88,x+54,y+88,x+58,y+85);
					
					context.lineWidth = "2" ;
					context.strokeStyle = "black";
					context.stroke () ;		
				}
	
	
				acvm.HorizacVoltmeter = function(globalObject) {
					
					var context = globalObject.context,	x = globalObject.x,	y = globalObject.y;
					context.beginPath();
					
					// upper verticle line
					context.moveTo(x-140,y+25);
					context.lineTo(x-135,y+25);
					
					// big circle
					context.moveTo(x-125,y+25);
					context.arc(x-130 , y+25 , 6 , 0 , 2*Math.PI, false);     
					
					// lower verticle line
					context.moveTo(x-120,y+25);
					context.lineTo(x-125,y+25);
					
					context.fillText("V", x-133 , y+27);
				
					 x= x-172;
					y = y-57;
					 context.moveTo(x+37,y+86);
					context.bezierCurveTo(x+46,y+82,x+41,y+83,x+46,y+85);
					 context.bezierCurveTo(x+49,y+86,x+48,y+86,x+49,y+82); 					
					// context.moveTo(x+38,y+85);
					// context.bezierCurveTo(x+45,y+82,x+43,y+83,x+48,y+85);
					// context.bezierCurveTo(x+56,y+88,x+54,y+88,x+58,y+85);
					
					context.lineWidth = "1" ;
					context.strokeStyle = "black";
					context.stroke () ;		
				}
	
	acvm.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		acvm.drawPoint(globalObject);
		acvm.drawRectangle(globalObject);
	}
})(acvoltmetercanvas);
