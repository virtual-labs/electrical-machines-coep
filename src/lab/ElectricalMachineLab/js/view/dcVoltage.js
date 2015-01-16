var dcvoltagecanvas = dcvc = dcvoltagecanvas || {};
(function(dcvc){
				var globalObject = {
					x: 15,
					y: 60
				}
		
				dcvc.drawPoint = function(globalObject,inputid){
					var context = globalObject.context,	x = globalObject.x,	y = globalObject.y;
					var input = inputid;
					context.beginPath();
					
					// upper verticle line
					context.moveTo(x+50,y-20);
					context.lineTo(x+50,y+10);
					
					// big circle
					context.moveTo(x+65,y+25);
					context.arc(x+50 , y+25 , 15 , 0 , 2*Math.PI, false);     
					
					// lower verticle line
					context.moveTo(x+50,y+40);
					context.lineTo(x+50,y+72);
					
					// endpoint circles
					context.moveTo(x+52,y-21);
					context.arc(x+50 , y-21 , 2 , 0 , 2*Math.PI, false);
					
					context.moveTo(x+52,y+69);
					context.arc(x+50 , y+69 , 2 , 0 , 2*Math.PI, false);					
					
					//context.moveTo(x+20,y+20);
					//context.rect(x+1,y+10,30,15);
										
					//console.log(">>> : "+input);
					$("#"+input+"input").css("display","block");
					context.fillText("V", x+30 , y+7);
					//context.fillText("+", x+47 , y+20);
					
					context.moveTo(x+46 , y+20);
					context.lineTo(x+54 , y+20);
					context.moveTo(x+50 , y+16);
					context.lineTo(x+50 , y+24);			
					
					context.moveTo(x+47 , y+35);
					context.lineTo(x+54 , y+35);					
				        
					context.lineWidth = "2" ;
					context.strokeStyle = "black";
					context.stroke ();
				}
				
				dcvc.init = function(id,inputid){
					
					globalObject.canvas = document.getElementById(id);
					globalObject.context = globalObject.canvas.getContext("2d");
					dcvc.drawPoint(globalObject,inputid);
				}

			})(dcvoltagecanvas);
