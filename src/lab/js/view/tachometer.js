var tachometercanvas = tcm = tachometercanvas || {}; 
(function(tcm) {

		var globalObject = {
					x: 40,
					y: 60,
					x1: 60,
					y1: 70,
					x2: 15,
					y2: 72,
					centerX: 20,
					centerY: 40,
					radius: 10,
					startingAngle: 1.6 * Math.PI,
					endingAngle:  0.4 * Math.PI,
					counterclockwise: true
				}
				
				tcm.drawRectangle = function (globalObject) {
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y,
					x1 = globalObject.x1,
					y1 = globalObject.y1,
					x2 = globalObject.x2,
					y2 = globalObject.y2;
					context.beginPath();
					context.rect(x , y  , 90 , 40);
					context.rect(x1 , y1 , 60 , 20 );
					context.font = "10pt Calibri";
					context.fillText("r.p.m.", x+30 , y+20 );
					//context.moveTo(x , y+140);					
					context.lineWidth= "2";
					context.strokeStyle = "black";
					context.stroke();
				}
				
				tcm.drawLine = function(globalObject) {
					var context = globalObject.context,
					x2 = globalObject.x2,
					y2= globalObject.y2;
					context.beginPath();
					context.rect(x2 , y2 , 25 , 15);
					context.moveTo(x2 , y2);
					context.lineTo(x2 -10 , y2+8);
					context.lineTo(x2 , y2+15);
					context.lineWidth = "2";
					context.strokeStyle = "black";
					context.stroke();
				}
				
				
				tcm.drawCurves = function(globalObject){
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					context.beginPath();
				    
				    x = x - 85;
				    y = y - 3;
				    
					var centerX = x+60;
					var centerY = y+23;
					var height = 37;
					var width = 30;

					// right semi elliptical curve
					context.moveTo(centerX, centerY - height/2); // A1
	  			  	context.bezierCurveTo(
				    centerX + width/2, centerY - height/2, 
				    centerX + width/2, centerY + height/2, 
				    centerX, centerY + height/2); // A2
					
					x = globalObject.x;
					y = globalObject.y;
					
					context.moveTo(x-17,y+40);
					context.lineTo(x-26,y+38);
					context.lineTo(x-21,y+33);
				
					
					context.lineWidth = "2";
					context.strokeStyle = "black";
					context.stroke();
				}

				tcm.drawLineMirror = function(globalObject) {
					var context = globalObject.context,
					x2 = globalObject.x2,
					y2= globalObject.y2;
					context.beginPath();
					context.rect(x2 , y2 , 25 , 15);
					context.moveTo(x2+25 , y2);
					context.lineTo(x2 +35 , y2+8);
					context.lineTo(x2+25 , y2+15);
					 context.lineWidth = "2";
					context.strokeStyle = "black";
					context.stroke();
				}
				
				tcm.drawCurvesMirror = function(globalObject){
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					context.beginPath();
				    
				     x = x + 95;
				    // y = y - 3;
				    
					centerX = x + 15;
					centerY = y + 23;
					height = 37;
					width = 30;
			
					// left semi elliptical curve
					context.moveTo(centerX, centerY + height / 2);
					// A1
					context.bezierCurveTo(centerX - width / 2, centerY + height / 2, centerX - width / 2, centerY - height / 2, centerX, centerY - height / 2);
					// A1
					
					context.moveTo(x+6,y+45);
					context.lineTo(x+12,y+42);
					context.lineTo(x+15,y+35);
				
					context.lineWidth = "2";
					context.strokeStyle = "black";
					context.stroke();
				}
				
			tcm.init = function(id) {
				globalObject.canvas = document.getElementById(id);
				globalObject.context = globalObject.canvas.getContext("2d");
				tcm.drawLine(globalObject);
				//tcm.drawArc();
				tcm.drawRectangle(globalObject);
				tcm.drawCurves(globalObject);
			}
})(tachometercanvas);
