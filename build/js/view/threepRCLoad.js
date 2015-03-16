var threeprcloadcanvas = tprcl = threeprcloadcanvas || {};
 (function(tprcl) {
		var globalObject = {
					x: 15,
					y: 40
				
				}
				
				tprcl.drawLine = function() {
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					context.beginPath ();
					
					context.rect(x-10,y-20,415,145);

					for(var j=0;j<3;j++){
						if(j==1){
							x = 150;
							y = 40;
						}else if(j==2){
							x = 290;
							y=40;
						}
						
						context.moveTo ( x+4 , y+7 );
						context.lineTo(x+106 , y+7);
						
						for (i = 0; i < 5; i++) {                                                 // upper horizontal lines
							context.moveTo(x+5, y+7);
							context.lineTo(x+5 , y + 22);
							x = x + 25;
							y = y;
						}
						
						context.moveTo(x-70, y+7);
						context.lineTo(x -70 , y-3);                                       //single switch on the top
						context.lineTo(x-60 , y-12);
					
						context.moveTo(x-70,y-13);
						context.lineTo(x-70,y-25);
						context.moveTo(x-70,y-25);
						context.arc(x-70 , y-25, 2 , 0 , 2 * Math.PI , false);   
						context.moveTo(x-70,y-27);
						context.lineTo(x-70,y-35);
					}									
					context.lineWidth = "2" ;
					context.strokeStyle = "black";
					context.stroke () ;		
				}
				
				tprcl.drawPoint = function(){
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					context.beginPath();
			
					for(var j=0;j<3;j++){
						if(j==1){
							x = 150;
							y = 40;
						}else if(j==2){
							x = 290;
							y=40;
						}
					
						context.moveTo(x+4 , y+115);
						context.lineTo(x+106 , y+115);
						context.moveTo(x , y+115);
						for (i = 0; i < 5; i++) {
							context.moveTo(x+5, y+115);
							context.lineTo(x+5 , y+ 115 - 22);                                     //bottom horizontal liones
							x = x + 25;
							y = y;
						}
						
						context.moveTo(x-70 , y+115);
						context.lineTo(x- 70 , y +138);
					}
					
					context.lineWidth = "2" ;
					context.strokeStyle = "black";
					context.stroke () ;		

				}
			
				tprcl.zigLines = function() {
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					
					for(var j=0;j<3;j++){
						if(j==1){
							x = 150;
							y = 40;
						}else if(j==2){
							x = 290;
							y=40;
						}
					
						for(i = 0; i < 5; i++){
							context.moveTo(x+5 , y+86);
							context.lineTo(x+5,y+70);
							context.lineTo(x+12 , y+66 );
							context.lineTo(x+5 , y+62);
							context.lineTo(x+12 , y+58);
							context.lineTo(x+5 , y+54);
							context.lineTo(x+12 , y+50);
							context.lineTo(x+5 , y+46);
							context.lineTo(x+5 , y+38);
							context.lineTo(x+15 , y+25);
							x=x+25;
							y=y;
						}					
					}
									
						
					context.lineWidth = "2" ;
					context.strokeStyle = "black";
					context.stroke () ;			
				}
				
				
				tprcl.drawConnection = function(){
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					context.beginPath ();
					
					
					x = x - 43;
					
					
					for(var k=0;k<3;k++){
						
						if(k==1){
							x = x + 10;
						}else if(k==2){
							x = x +15;
						}
				
					
						for(var j=0;j<5;j++){
							y = globalObject.y;
							for(var i=0;i<=1;i++){
								context.moveTo(x+38,y+85);
								context.bezierCurveTo(x+45,y+82,x+43,y+83,x+48,y+85);
								context.bezierCurveTo(x+56,y+88,x+54,y+88,x+58,y+85);
								y = y+8;
							}					
							x = x+25;
						}
					}
					context.lineWidth = "2" ;
					context.strokeStyle = "black";
					context.stroke () ;
				}
				

	tprcl.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		tprcl.drawLine();
		tprcl.drawConnection();
		tprcl.drawPoint();
		tprcl.zigLines();
	}
})(threeprcloadcanvas);
