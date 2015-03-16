var wattmetercanvas = wtmtr = wattmetercanvas || {}; 
(function(wtmtr) {

			var globalObject = {
					x: 15,
					y: 70
				}
				wtmtr.drawRect = function(globalObject) {
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					context.beginPath ();
					context.moveTo(x+8,y-25);
					context.rect(x+8,y-25,90,80);						
					context.lineWidth = "2" ;
					context.strokeStyle = "black";
					context.stroke () ;		
				}
				
				wtmtr.drawLine = function(globalObject) {
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					context.beginPath ();
					 context.font = "10pt Calibri";
					// upper horizontal
					context.moveTo ( x-5 , y );
					context.lineTo(x+35 , y);
					context.moveTo(x+55 , y);
					context.lineTo(x+110 , y);
					
					context.moveTo(x-8 , y);
					context.arc(x-8 , y , 2 , 0 , 2*Math.PI, false);
					context.fillText("M",x-8,y+13);
					
					context.moveTo(x+113 , y);		
					context.arc(x+113 , y , 2 , 0 , 2*Math.PI, false);
					context.fillText("L",x+116,y+13);
					
						
					context.moveTo(x+20,y);
					context.lineTo(x+20,y+20);
					context.lineTo(x+30,y+20);
							
						
					context.moveTo(x+60,y+20);
					context.lineTo(x+75,y+20);
					
					
					context.moveTo(x+75,y+20);
					context.lineTo(x+75,y+40);
					context.lineTo(x+110,y+40);
					
					context.moveTo(x+113 , y+40);		
					context.arc(x+113 , y+40 , 2 , 0 , 2*Math.PI, false);
					context.fillText("V",x+116,y+52);
						
					
					context.lineWidth = "2" ;
					context.strokeStyle = "black";
					context.stroke () ;		
				}
				
				
				wtmtr.drawZig = function(globalObject) {
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					context.beginPath ();
				
					y= y +6;
					context.moveTo(x+30,y+14);
					context.lineTo(x+35,y+9);
					context.lineTo(x+40,y+14);
					context.lineTo(x+45,y+9);
					context.lineTo(x+50,y+14);
					context.lineTo(x+55,y+9);
					context.lineTo(x+60,y+14);
					
					context.lineWidth = "2" ;
					context.strokeStyle = "black";
					context.stroke () ;
				}
				
				wtmtr.drawCoil = function(globalObject){
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					context.beginPath ();
					
					y=y-25;
					
					x = globalObject.x- 16;
					context.moveTo(x+50,y+25);
					
					for(var j = 0;j<=1;j++){
						context.bezierCurveTo(x+47,y+20,x+47,y+20,x+50,y+12);  // first part
						context.bezierCurveTo(x+56,y+9,x+54,y+9,x+60,y+12);    // second part
						context.bezierCurveTo(x+61,y+15,x+65,y+18,x+60,y+25);  // third part
						x = x + 10;
					}
						
					context.lineWidth = "2" ;
					context.strokeStyle = "black";
					context.stroke () ;
				}
				
			wtmtr.drawValueRect = function(globalObject){
					var context = globalObject.context,x = globalObject.x,y = globalObject.y;
					context.beginPath ();
					context.font = "10pt Calibri";
		            context.fillStyle="yellow";
					context.rect(x+35,y-46,65,15);
					context.fillRect(x+35,y-46,65,15);						
					context.strokeStyle="2";
		            context.fillStyle = "black";
		            context.stroke();
					}
	
	
			wtmtr.init = function(id) {
				globalObject.canvas = document.getElementById(id);
				globalObject.context = globalObject.canvas.getContext("2d");
				wtmtr.drawRect(globalObject);
				wtmtr.drawLine(globalObject);
				wtmtr.drawZig(globalObject);
				wtmtr.drawCoil(globalObject);
				wtmtr.drawValueRect(globalObject);
				//wtmtr.drawValueRect(globalObject);
			}
})(wattmetercanvas);
