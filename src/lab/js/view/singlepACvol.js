var acsinphasecanvas = spacv = acsinphasecanvas || {};
(function(spacv){
				var globalObject = {
					x: 15,
					y: 60
				}
		
				spacv.drawPoint = function(){
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					context.beginPath();
					
					// upper verticle line
					context.moveTo(x+50,y-50);
					context.lineTo(x+50,y+10);
					
					// big circle
					context.moveTo(x+65,y+25);
					context.arc(x+50 , y+25 , 15 , 0 , 2*Math.PI, false);     
					
					// lower verticle line
					context.moveTo(x+50,y+40);
					context.lineTo(x+50,y+110);
					
					// endpoint circles
					context.moveTo(x+52,y-52);
					context.arc(x+50 , y-52 , 2 , 0 , 2*Math.PI, false);
					context.moveTo(x+52,y+112);
					context.arc(x+50 , y+112 , 2 , 0 , 2*Math.PI, false);
					
					// innner waveform
					context.moveTo(x+38,y+25);
					context.bezierCurveTo(x+46,y+22,x+44,y+22,x+50,y+25);
					context.bezierCurveTo(x+56,y+28,x+54,y+28,x+60,y+25);
					
					//context.moveTo(x+20,y+20);
					context.rect(x+10,y+10,20,15);
					context.font = "10pt Calibri";
					context.fillText("V", x+18 , y+20);
					context.fillText("ph", x+55 , y-40);
					context.fillText("N", x+55 , y+105);
					context.lineWidth = "2" ;
					context.strokeStyle = "black";
					context.stroke () ;		

				}
			
				
				spacv.init = function(id){
					globalObject.canvas = document.getElementById(id);
					globalObject.context = globalObject.canvas.getContext("2d");
					spacv.drawPoint();
				}

})(acsinphasecanvas);