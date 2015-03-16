var selfexcdccanvas = sedcm = selfexcdccanvas || {}; 
(function(sedcm) {

			var globalObject ={
					x: 30,
					y: 40,
					rad:20
					
				}
				sedcm.drawRectangle = function (globalObject) {
				//	alert('hi');
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y,
					rad = globalObject.rad;
					context.beginPath();
					
					context.rect(x , y ,85 , 100); //outer rect
					//to make left rect
				    context.moveTo(x , y+35);
					context.lineTo(x-28 , y+35);
					context.lineTo(x-28 , y+60);
					context.lineTo(x , y+60);
					//for the top sq. with point
					context.moveTo(x-5 , y+35);
					context.lineTo(x-5, y+25);
					context.lineTo(x-20 , y+25);
					context.lineTo(x-20 , y+35);
					context.moveTo(x-12 , y+25);
					context.lineTo(x-12 , y+5);
					context.arc(x-12 , y+5 , 2 , 0 , 2 * Math.PI , false);
					
					//for the bottom box with point
					context.moveTo(x-5 , y+60);
					context.lineTo(x-5 , y+70);
					context.lineTo(x-20 , y+70);
					context.lineTo(x-20 , y+60);
					context.moveTo(x-12, y+70);
					context.lineTo(x-12 , y+90);
					context.arc(x-12 , y+90 , 2 , 0 , 2 * Math.PI, false);
					context.moveTo(x-15 , y+35);
					context.lineTo(x-15 , y+45);
					context.lineTo(x+5 , y+45);
					context.lineTo(x+5 , y+15);
				    context.lineTo(x+25 , y+15);
					context.lineTo(x+25 , y+30);
					context.moveTo(x+30 , y+30);
					context.lineTo(x+30 , y+25);
					context.lineTo(x+20 , y+25);
					context.lineTo(x+20 , y+30);
					
					// context.font = "13pt Calibri";
					// context.fillText(" DC Shunt Motor ", x-20 , y+130 );
		            // context.fillStyle = "black";
					
					context.moveTo(x+40 , y+49);
					context.arc(x+25 , y+45 , 15 , 0 , 2 * Math.PI , false);
					
					context.moveTo(x+30, y+60);
					context.lineTo(x+30 , y+67);
					context.lineTo(x+20 , y+67);
					context.lineTo(x+20 , y+60);
					context.moveTo(x+25 , y+60);
					context.lineTo(x+25 , y+85);
					context.lineTo(x+5 , y+85);
					context.lineTo(x+5 , y+55);
					context.lineTo(x-15 , y+55);
					context.lineTo(x-15 , y+60);
					context.moveTo(x+85 , y+35);
					context.lineTo(x+103 , y+35);
					context.lineTo(x+103 , y+55);
					context.lineTo(x+85 , y+55);
					
					context.font = "10pt Calibri";
					context.fillText("A1", x-30 , y+20  );
					context.fillText("A2", x-30 , y+82 );
					context.fillText("F1", x+72 , y+15 );
					context.fillText("F2", x+72 , y+90 );
					
					 
					context.lineWidth = "2";
					context.strokeStyle = "black";
					context.stroke();
					
					
					
					
				}	
				sedcm.drawCoil = function (globalObject){
				var context = globalObject.context,
				x = globalObject.x,
				y = globalObject.y;
				context.moveTo(x+25 , y+15);
				context.lineTo(x+70  , y+15);
				context.lineTo(x+70 , y+25);
				for (i =0; i <5; i++){
				context.bezierCurveTo(x+73 , y+23 , x+73 , y+20 , x+78 , y+25);
				context.bezierCurveTo(x+81 , y+31 , x+81 , y+29 , x+78 , y+35);
				context.bezierCurveTo(x+77 , y+36 , x+75, y+41, x+70, y+35);
				y = y+10;
				}
				context.lineTo(x+70 , y+35);
				context.lineTo(x+25 , y+35);
				context.lineWidth = "2";
				context.strokeStyle = "black";
				context.stroke();
				}
				
				sedcm.drawRectangleMirror = function (globalObject) {
					
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y,
					rad = globalObject.rad;
					context.beginPath();
					context.rect(x , y ,85 , 100); //outer rect
			
					// left input
					context.moveTo(x , y+35);
					context.lineTo(x-18 , y+35);
					context.lineTo(x-18 , y+55);
					context.lineTo(x , y+55);
					
					// right input
					context.moveTo(x+85 , y+35);
					context.lineTo(x+103 , y+35);
					context.lineTo(x+103, y+55);
					context.lineTo(x+85 , y+55);
					
					
					context.rect(x+88,y+30,11,5);
					context.rect(x+88,y+55,11,5);
					//A1
					context.moveTo(x+94,y+30);
					context.lineTo(x+94,y);
					context.arc(x+94 , y-2 , 2 , 0 , 2 * Math.PI , false);
					
					//A2
					context.moveTo(x+94,y+60);
					context.lineTo(x+94,y+90);
					context.arc(x+94 , y+92 , 2 , 0 , 2 * Math.PI , false);
					
					context.moveTo(x+72 , y+45)
					context.arc(x+57 , y+45 , 15 , 0 , 2 * Math.PI , false);
					context.rect(x+53,y+25,9,5);
					context.rect(x+53,y+60,9,5);
					
					context.moveTo(x+57 , y+30);
					context.lineTo(x+57 , y+10);
					context.lineTo(x+77 , y+10);
					context.lineTo(x+77 , y+40);
					context.lineTo(x+95 , y+40);
					context.lineTo(x+95 , y+35);					
					
					context.moveTo(x+57 , y+60);
					context.lineTo(x+57 , y+80);
					context.lineTo(x+77 , y+80);
					context.lineTo(x+77 , y+50);
					context.lineTo(x+95 , y+50);
					context.lineTo(x+95 , y+55);			
					
					context.font = "10pt Calibri";
					context.fillText("A1", x+100, y+10 );
					context.fillText("A2", x+100, y+90 );
								
					context.lineWidth = "2";
					context.strokeStyle = "black";
					context.stroke();
				}	
				
				sedcm.drawCoilMirror = function (globalObject){
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					
					context.moveTo(x+29 , y+65);
					context.lineTo(x+29 , y+80);
					context.lineTo(x+60 , y+80);
					
					context.moveTo(x+29 , y+25);
					context.lineTo(x+29 , y+10);
					context.lineTo(x+60 , y+10);
					
					y = y + 10;				
					 for (i =0; i <4; i++){
						 context.moveTo(x+30 , y+25);
						 context.bezierCurveTo(x+27 , y+27 , x+27 , y+30 , x+22 , y+25);
						 context.bezierCurveTo(x+19 , y+19 , x+19 , y+21 , x+22 , y+15);
						 context.bezierCurveTo(x+23 , y+14 , x+25, y+9, x+30, y+15);
					 	 y = y+10;
					 }
					 					
					context.fillText("F1", x +5, y-30 );
					context.fillText("F2", x+5 , y+35);
					context.lineWidth = "2";
					context.strokeStyle = "black";
					context.stroke();
				}
				
					
	sedcm.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		sedcm.drawRectangle(globalObject);
		sedcm.drawCoil(globalObject);
	}
})(selfexcdccanvas);
