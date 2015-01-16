var cylrotorcanvas = cylrt = cylrotorcanvas || {}; 
(function(cylrt) {

			var globalObject = {
					x: 30,
					y: 60,
					rad:20
					
				}
				cylrt.drawRectangle = function () {
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y,
					rad = globalObject.rad;
					context.beginPath();
					context.rect(x , y ,80 , 80); //outer rect
					context.moveTo(x+80 , y+25);
					context.lineTo(x+104 , y+25);
					context.lineTo(x+104 , y+50);
					context.lineTo(x+80 , y+50);
					context.moveTo(x , y+25);
					context.lineTo(x-28 , y+25);
					context.lineTo(x-28 , y+45);
					context.lineTo(x , y+45);
					context.lineWidth = "2";
					context.strokeStyle = "black";
					context.stroke();
				}	
				cylrt.drawPoints = function() {
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
				//	context.beginPath();
				    for (i = 0 ; i<6 ; i++){
						context.moveTo(x+5 , y)
						context.lineTo(x+5 , y-35);
						context.arc (x+5 , y-35 , 2 , 0 , 2 * Math.PI , false);
						x = x+8 ;
						y = y;
					}
					context.moveTo(x+15 , y+15);
					context.lineTo(x+15 , y-35);
					context.arc(x+15 , y-35 , 2 , 0 , 2 * Math.PI, false);
					context.moveTo(x+15 , y+15);
					context.lineTo(x-15 , y+15);
					context.lineTo(x-25 , y+25)
					context.lineTo(x-25 , y+45);
					context.lineTo(x-10 , y+45);
					context.moveTo(x+15 , y+45);
					context.arc(x, y+45 , 15 , 0 , 2 * Math.PI , false);
					//context.moveTo(x+15 , y+45);
					//last point
					context.moveTo(x+28 , y+25);
					context.lineTo(x+28 , y-35);
					context.arc(x+28 , y-35 , 2 , 0 , 2 * Math.PI, false);
					context.moveTo(x+28 , y+25);
					context.lineTo(x+20 , y+25);
					context.lineTo(x+20 , y+45);
					context.lineTo(x+10 , y+45);
					
					//context.fillText("R1" , x-62 , y-10);
					
					context.font = "6pt Calibri";
					context.fillText("R1", x-55 , y-10 );
					context.fillText("R2", x-42 , y-10 );
					context.fillText("Y1", x-34 , y-10 );
					context.fillText("Y2", x-26 , y-10 );
					context.fillText("x1", x-18 , y-10 );
					context.fillText("x2", x-10 , y-10 );
					context.fillText("x", x+10 , y-10 );
					context.fillText("xx", x+30 , y-10 );
					
					context.lineWidth = "2";
					context.strokeStyle = "black";
					context.stroke();
					
				}
				
				cylrt.drawCoil = function(){
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					context.beginPath ();
					
					y=y+20;
					x = x - 12;
					context.moveTo(x+50,y+25);
						
						for(var j = 0;j<=2;j++){
							context.bezierCurveTo(x+48,y+20,x+48,y+20,x+50,y+17);  // first part
							context.bezierCurveTo(x+52,y+16,x+52,y+15,x+56,y+17);    // second part
							context.bezierCurveTo(x+58,y+20,x+57,y+20,x+56,y+25);  // third part
							x = x + 8;
						}
						
					context.lineWidth = "2" ;
					context.strokeStyle = "black";
					context.stroke () ;
				}
				
		
	cylrt.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		cylrt.drawPoints();
		cylrt.drawRectangle();
		cylrt.drawCoil();
	}
})(cylrotorcanvas);
