var threephacvoltagesrc = tphacvsrc = threephacvoltagesrc || {}; 
(function(tphacvsrc) {

				var globalObject = {
					x: 15,
					y: 40
				}
		
				tphacvsrc.drawPoint = function(globalObject){
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					context.beginPath();
					context.moveTo(x+110,y-20);
					context.lineTo(x+40,y-20);	
					context.lineTo(x+40,y);
					
					context.moveTo(x+50,y+10);
					context.arc(x+40 , y+10, 10 , 0 , 2 * Math.PI , false);
					
					context.moveTo(x+40,y+20);
					context.lineTo(x+40,y+41);
					
					
					//context.moveTo(x+112,y-20);
					//context.lineTo(x+112,y-30);
					context.strokeStyle = "red";
					context.lineWidth="2";
					context.stroke() ;
					
					context.beginPath();
					context.moveTo(x+25,y+70);
					context.arc(x+15 , y+70, 10 , 0 , 2 * Math.PI , false);
					context.strokeStyle = "blue";
					context.stroke () ;
					
					context.beginPath();
					context.moveTo(x+75,y+70);
					context.arc(x+65 , y+70, 10 , 0 , 2 * Math.PI , false);		
					context.strokeStyle = "gold";
					context.stroke () ;						
									
					context.beginPath();	
					context.moveTo(x+20,y+63);
					context.lineTo(x+40,y+40);
					context.strokeStyle = "blue";
					context.stroke () ;
					
					context.beginPath();	
					context.moveTo(x+40,y+40);
					context.lineTo(x+60,y+63);
					context.strokeStyle = "gold";
					context.stroke () ;
					
					
					
					// line from circle to y
					context.beginPath();
					context.moveTo(x+70,y+77);
					context.lineTo(x+80,y+87);
					context.lineTo(x+90,y+87);
					context.lineTo(x+90,y+20);
					context.lineTo(x+110,y+20);
					context.strokeStyle = "gold";
					context.stroke () ;
					
					
					// line from circle to B
					context.beginPath();
					context.moveTo(x+10,y+77);
					context.lineTo(x,y+87);
					context.lineTo(x,y+105);
					context.lineTo(x+100,y+105);
					context.lineTo(x+100,y+70);
					context.lineTo(x+110,y+70);
					context.strokeStyle = "blue";
					context.stroke () ;
					
					// line from circle to N
					context.beginPath();
					//context.moveTo(x+40,y+20);
					//context.lineTo(x+40,y+44);	
					
					
					//context.moveTo(x+40,y+110);
					x = x+15;
					y = y+50;
					//context.moveTo(x+25,y+50);
					//context.bezierCurveTo(x+30,y+48,x+30,y+45,x+38,y+50);
					//context.bezierCurveTo(x+41,y+56,x+41,y+54,x+38,y+60);
					//context.bezierCurveTo(x+35,y+61,x+32,y+66,x+25,y+60);
					
					//context.lineTo(x+25,y+80);
					//context.lineTo(x+95,y+80);
					
					//context.moveTo(x+99,y-70);
					//context.arc(x+97 , y-70 , 2 , 0 , 2*Math.PI, false); 
					//context.strokeStyle = "black";
					context.lineWidth = "2" ;
					context.stroke () ;
					//context.fillText("R", x+93 , y-55);

					context.beginPath();
					
					//context.moveTo(x+99,y-30);
					//context.arc(x+97 , y-30 , 2 , 0 , 2*Math.PI, false); 
					//context.fillText("Y", x+93 , y-15);

					
					context.moveTo(x+99,y+20);
					context.arc(x+97 , y+20 , 2 , 0 , 2*Math.PI, false);
					//context.fillText("B", x+93 , y+35);					 
					//context.moveTo(x+99,y+80);
					//context.arc(x+97 , y+80 , 2 , 0 , 2*Math.PI, false); 
					//context.fillText("N", x+93 , y+75);
		
					
					x = x - 48;
					y = y - 65;
					context.moveTo(x+40,y+85);
					context.bezierCurveTo(x+45,y+82,x+43,y+83,x+48,y+85);
					context.bezierCurveTo(x+56,y+88,x+54,y+88,x+56,y+85);
					
					x = x + 50;
					context.moveTo(x+40,y+85);
					context.bezierCurveTo(x+45,y+82,x+43,y+83,x+48,y+85);
					context.bezierCurveTo(x+56,y+88,x+54,y+88,x+56,y+85);
					
					x = x - 25;
					y = y - 60;
					context.moveTo(x+40,y+85);
					context.bezierCurveTo(x+45,y+82,x+43,y+83,x+48,y+85);
					context.bezierCurveTo(x+56,y+88,x+54,y+88,x+56,y+85);
					
					// context.rect(x,y+50,40,15);
					// context.font = "10pt Calibri";
					// context.fillText("V", x+10 , y+65 );
					context.rect(x,y+50,40,15);
					// context.font = "10pt Calibri";
					// context.fillText("V", x+28 , y+63 );
					
					
					context.strokeStyle = "black";
					//context.lineWidth = "2" ;
					context.stroke () ;		

				}
				tphacvsrc.drawFourPoint = function(globalObject){
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					context.beginPath();

					context.moveTo(x+110,y-20);
					context.lineTo(x+40,y-20);	
					context.lineTo(x+40,y);
					
					context.moveTo(x+50,y+10);
					context.arc(x+40 , y+10, 10 , 0 , 2 * Math.PI , false);
					context.moveTo(x+25,y+70);
					context.arc(x+15 , y+70, 10 , 0 , 2 * Math.PI , false);
					context.moveTo(x+75,y+70);
					context.arc(x+65 , y+70, 10 , 0 , 2 * Math.PI , false);
					
					context.moveTo(x+23,y+63);
					context.lineTo(x+40,y+40);
					context.lineTo(x+60,y+63);
					
					// line from circle to y
					context.moveTo(x+70,y+77);
					context.lineTo(x+80,y+87);
					context.lineTo(x+90,y+87);
					context.lineTo(x+90,y+20);
					context.lineTo(x+110,y+20);
					
					// line from circle to B
					context.moveTo(x+10,y+77);
					context.lineTo(x,y+87);
					context.lineTo(x,y+105);
					context.lineTo(x+100,y+105);
					context.lineTo(x+100,y+70);
					context.lineTo(x+110,y+70);
					
					// line from circle to N
					context.moveTo(x+40,y+20);
					context.lineTo(x+40,y+40);					
					
					//context.moveTo(x+40,y+110);
					
					x = x+15;
					y = y+50;
					//context.moveTo(x+25,y+50);
					//context.bezierCurveTo(x+30,y+48,x+30,y+45,x+38,y+50);
					// context.bezierCurveTo(x+41,y+56,x+41,y+54,x+38,y+60);
					// context.bezierCurveTo(x+35,y+61,x+32,y+66,x+25,y+60);
					
					// context.lineTo(x+25,y+80);
					// context.lineTo(x+95,y+80);
												
								
				/*
					context.moveTo(x+99,y-70);
									context.arc(x+97 , y-70 , 2 , 0 , 2*Math.PI, false); 
									context.fillText("R", x+93 , y-55);
				
									
									context.moveTo(x+99,y-30);
									context.arc(x+97 , y-30 , 2 , 0 , 2*Math.PI, false); 
									context.fillText("Y", x+93 , y-15);
				
									
									context.moveTo(x+99,y+20);
									context.arc(x+97 , y+20 , 2 , 0 , 2*Math.PI, false);
									context.fillText("B", x+93 , y+35);
																		   context.moveTo(x+99,y+80);
									context.arc(x+97 , y+80 , 2 , 0 , 2*Math.PI, false); 
									context.fillText("N", x+93 , y+75);
						*/
				
					
					x = x - 48;
					y = y - 65;
					context.moveTo(x+40,y+85);
					context.bezierCurveTo(x+45,y+82,x+43,y+83,x+48,y+85);
					context.bezierCurveTo(x+56,y+88,x+54,y+88,x+56,y+85);
					
					x = x + 50;
					context.moveTo(x+40,y+85);
					context.bezierCurveTo(x+45,y+82,x+43,y+83,x+48,y+85);
					context.bezierCurveTo(x+56,y+88,x+54,y+88,x+56,y+85);
					
					x = x - 25;
					y = y - 60;
					context.moveTo(x+40,y+85);
					context.bezierCurveTo(x+45,y+82,x+43,y+83,x+48,y+85);
					context.bezierCurveTo(x+56,y+88,x+54,y+88,x+56,y+85);
					
					context.rect(x,y+50,40,15);
					// context.font = "10pt Calibri";
					// context.fillText("V", x+27 , y+63 );
					
					context.lineWidth = "2" ;
					context.strokeStyle = "black";
					context.stroke () ;		
				}
				
	tphacvsrc.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		tphacvsrc.drawPoint(globalObject);
		tphacvsrc.drawFourPoint(globalObject);
	
	}
})(threephacvoltagesrc);
