var variactphcanvas = vtphac = variactphcanvas || {}; 
(function(vtphac) {
			var globalObject = {
					x: 15,
					y: 40
				}
		
				vtphac.drawPoint = function(globalObject){
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					context.beginPath();
					
					
					// voltage up down
					context.fillStyle   = 'black';
					context.moveTo(x+36,y-4);
					context.lineTo(x+36,y+4);
					context.lineTo(x+24,y);
					context.lineTo(x+36,y-4);
					context.moveTo(x+60,y-4);
					context.lineTo(x+60,y+4);
					context.lineTo(x+72,y);
					context.lineTo(x+60,y-4);
					context.fill();
					context.beginPath();
					context.rect(x+20,y-7,56,12);
                    
					context.moveTo(x+72,y+12);
					context.lineTo(x+72,y+23);
					context.moveTo(x+72,y+23);
			        context.bezierCurveTo(x + 72, y +23, x + 92, y +25, x + 72, y +30);
				    context.moveTo(x+72,y+29);
					context.lineTo(x+72,y+32);
					
					context.moveTo(x+72,y+35);
					context.lineTo(x+72,y+47);
					context.moveTo(x+72,y+47);
					context.bezierCurveTo(x + 72, y +47, x + 92, y +49, x + 72, y +54);
					context.moveTo(x+72,y+52);
					context.lineTo(x+72,y+57);
/////////////////////////////////////////////////////
					
					context.moveTo(x+10,y-10);
					context.rect(x+10,y-10,80,100);
					context.moveTo(x+80,y-35);
					// context.rect(x+50,y-35,40,15);
					// context.moveTo(x+83,y-20);
					// context.fillText("V", x+81 , y-24,11);				
					
					for(var i=0;i<=2;i++)
					{
						context.moveTo(x-10,y+10);
						context.lineTo(x+20,y+10);
						context.moveTo(x+55,y+10);
						context.lineTo(x+70,y+10);
						context.moveTo(x-10,y+10);
						context.arc(x-12 , y+10 , 2 , 0 , 2*Math.PI, false);
						context.moveTo(x+74,y+10);
						context.arc(x+72 , y+10 , 2 , 0 , 2*Math.PI, false);
						
						
						
						y = y + 23;
					}
					
					// Draw Arrow
					vtphac.canvas_arrow  = function(context, fromx, fromy, tox, toy){
					    var headlen = 4;   // length of head in pixels
					    var angle = Math.atan2(toy-fromy,tox-fromx);
					    context.moveTo(fromx, fromy);
					    context.lineTo(tox, toy);
					    context.lineTo(tox-headlen*Math.cos(angle-Math.PI/6),toy-headlen*Math.sin(angle-Math.PI/6));
					    context.moveTo(tox, toy);
					    context.lineTo(tox-headlen*Math.cos(angle+Math.PI/6),toy-headlen*Math.sin(angle+Math.PI/6));
					}

					
					
					// explicitely written for future purpose
					y = globalObject.y;
					// context.moveTo(x+28,y+20);
					// context.lineTo(x+28,y+74);
					for(var i=0;i<=2;i++)
					{
						context.moveTo(x+20,y+27);
						context.lineTo(x+100,y+27);
						this.canvas_arrow(context,x+20,y+27,x+20,y+22);
						// context.moveTo(x+24,y+23);
						// context.lineTo(x+28,y+20);
						// context.lineTo(x+32,y+23);
						y = y + 23;
					}						
					context.lineWidth = "2" ;
					context.strokeStyle = "black";
					context.stroke () ;
				}				
				vtphac.drawCoils = function(globalObject){
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					context.beginPath();

					for(var k=0;k<=2;k++){
						x = globalObject.x;
						for(var j = 0;j<=4;j++){
							context.moveTo(x+20,y+10);
							context.bezierCurveTo(x+17,y+15,x+17,y+15,x+20,y+19);  // first part
							context.bezierCurveTo(x+23,y+20,x+23,y+20,x+26,y+19);    // second part
							context.bezierCurveTo(x+29,y+17,x+29,y+15,x+27,y+10);  // third part
							x = x + 7;
						}
						y = y + 23;
					}

					context.lineWidth = "1" ;
					context.strokeStyle = "black";
					context.stroke () ;		

				}
	
	
	vtphac.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		vtphac.drawPoint(globalObject);
		vtphac.drawCoils(globalObject);
	}
})(variactphcanvas);
