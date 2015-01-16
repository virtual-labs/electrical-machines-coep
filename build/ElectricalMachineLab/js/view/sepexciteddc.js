var sepexciteddccanvas = spexdc = sepexciteddccanvas || {}; 
(function(spexdc) {
		
			var globalObject = {
					x: 30,
					y: 40,
					rad:20
					
				}
				
				
				spexdc.drawRectangle = function (globalObject) {
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
					context.arc(x-12 , y , 2 , 0 , 2 * Math.PI , false);
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
					context.moveTo(x+40 , y+45);
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
					for(i=0 ; i<2 ; i++){
						context.moveTo(x+40 , y-20 );
						context.arc(x+40 , y-20 , 2 , 0 , 2 * Math.PI , false);
						context.moveTo(x+40 , y-18);
						context.lineTo(x+40 , y+20);
						x = x+40;
						y = y;
					}
				
					context.font = "10pt Calibri";
					context.fillText("A1", x - 110, y+17);
					context.fillText("A2", x - 110, y+80 );
					context.fillText("F1", x - 60, y-10 );
					context.fillText("F2", x+10 , y-10 );
					
					x = globalObject.x;
					y = globalObject.y;
					 
					
					// context.font = "13pt Calibri";
					// context.fillText(" Separately Excited  ", x-30 , y+120 );
		            // context.fillText(" DC Generator ", x-25 , y+140 );
		            // context.fillStyle = "black";
					
					
					context.moveTo(x+40,y+20);
					context.lineTo(x+46,y+25);
					context.lineTo(x+46,y+45);
					context.moveTo(x+80,y+20);
					context.lineTo(x+74,y+25);
					context.lineTo(x+74,y+45);
					
					x = x + 26;
					y = y + 35;
					for(var j = 0;j<=3;j++){
						context.moveTo(x+20,y+10);
						context.bezierCurveTo(x+17,y+15,x+17,y+15,x+20,y+19);  // first part
						context.bezierCurveTo(x+23,y+20,x+23,y+20,x+26,y+19);    // second part
						context.bezierCurveTo(x+29,y+17,x+29,y+15,x+27,y+10);  // third part
						x = x + 7;
					}
					
					context.lineWidth = "2";
					context.strokeStyle = "black";
					context.stroke();
				}	
				
				spexdc.drawRectangleMirror = function (globalObject) {
					
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
					
					
					
				
				
					x = x + 5;
					y = y + 20;
					
					for(var j = 0;j<=3;j++){
						context.moveTo(x+10,y+30);
						context.bezierCurveTo(x+13,y+25,x+13,y+25,x+10,y+21);  // first part
						context.bezierCurveTo(x+7,y+20,x+7,y+20,x+4,y+21);    // second part
						context.bezierCurveTo(x+1,y+23,x+2,y+25,x+3,y+30);  // third part
						x = x + 7;
					}
				
					context.moveTo(x-24,y+29);
					context.lineTo(x-24,y+50);
					context.lineTo(x-28,y+55);
					context.lineTo(x-28,y+95);
					context.moveTo(x-26,y+97);
					context.arc(x-28 , y+97 , 2 , 0 , 2 * Math.PI , false);
					
					context.moveTo(x+4,y+29);
					context.lineTo(x+4,y+50);
					context.lineTo(x+8,y+55);
					context.lineTo(x+8,y+95);
					context.moveTo(x+10,y+97);
					context.arc(x+8 , y+97 , 2 , 0 , 2 * Math.PI , false);
					
					context.font = "10pt Calibri";
					context.fillText("A1", x+70, y+10 );
					context.fillText("A2", x+70, y+50 );
					context.fillText("F1", x-50, y+100 );
					context.fillText("F2", x+15, y+100 );
					
					context.lineWidth = "2";
					context.strokeStyle = "black";
					context.stroke();
				}	
				spexdc.drawRectangleMirrorOne = function (globalObject) {
					
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
					
					// context.font = "13pt Calibri";
					// context.fillText(" Separately Excited  ", x-38 , y+130 );
		            // context.fillText(" DC Generator ", x-20 , y+150 );
		            // context.fillStyle = "black";
				
					x = x + 5;
					y = y + 30;
					for(i=0 ; i<2 ; i++){
						context.moveTo(x , y-50 );
						context.arc(x , y-50 , 2 , 0 , 2 * Math.PI , false);
						context.moveTo(x , y-48);
						context.lineTo(x , y-8);
						x = x+40;
						y = y;
					}
					x = globalObject.x - 35;
					y = globalObject.y;
					 
					context.moveTo(x+40,y+20);
					context.lineTo(x+46,y+25);
					context.lineTo(x+46,y+45);
					context.moveTo(x+80,y+20);
					context.lineTo(x+74,y+25);
					context.lineTo(x+74,y+45);
					
					x = x + 26;
					y = y + 35;
					for(var j = 0;j<=3;j++){
						context.moveTo(x+20,y+10);
						context.bezierCurveTo(x+17,y+15,x+17,y+15,x+20,y+19);  // first part
						context.bezierCurveTo(x+23,y+20,x+23,y+20,x+26,y+19);    // second part
						context.bezierCurveTo(x+29,y+17,x+29,y+15,x+27,y+10);  // third part
						x = x + 7;
					}
					/*for(var j = 0;j<=3;j++){
						context.moveTo(x+10,y+30);
						context.bezierCurveTo(x+13,y+25,x+13,y+25,x+10,y+21);  // first part
						context.bezierCurveTo(x+7,y+20,x+7,y+20,x+4,y+21);    // second part
						context.bezierCurveTo(x+1,y+23,x+2,y+25,x+3,y+30);  // third part
						x = x + 7;
					}
				
					context.moveTo(x-24,y+29);
					context.lineTo(x-24,y+50);
					context.lineTo(x-28,y+55);
					context.lineTo(x-28,y+95);
					context.moveTo(x-26,y+97);
					context.arc(x-28 , y+97 , 2 , 0 , 2 * Math.PI , false);
					
					context.moveTo(x+4,y+29);
					context.lineTo(x+4,y+50);
					context.lineTo(x+8,y+55);
					context.lineTo(x+8,y+95);
					context.moveTo(x+10,y+97);
					context.arc(x+8 , y+97 , 2 , 0 , 2 * Math.PI , false);*/
					
					context.font = "10pt Calibri";
					context.fillText("A1", x+80, y-10 );
					context.fillText("A2", x+80, y+40 );
					context.fillText("F1", x-30 , y-50 );
					context.fillText("F2", x+30, y-50 );
					
					context.lineWidth = "2";
					context.strokeStyle = "black";
					context.stroke();
				}	
	spexdc.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		spexdc.drawRectangle(globalObject);
	}
})(sepexciteddccanvas);
