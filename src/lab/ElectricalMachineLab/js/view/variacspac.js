var variacspaccanvas = varspac = variacspaccanvas || {}; 
(function(varspac) {

			var globalObject = {
					x: 40,
					y: 30,
					x1: 5,
					y1: 80,
					x2: 105,
					y2 : 110,
					cx: 5,
					cy: 50,
					rad: 2
				}
				varspac.drawRectangle = function () {
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y,
					x1 = globalObject.x1,
					y1 = globalObject.y1,
					x2 = globalObject.x2,
					y2 = globalObject.y2;
					context.beginPath();
					context.rect(x , y  , 60 , 120);	
					context.rect(x1 , y1  , 30 , 20);	
					context.rect(x2 , y2  , 28 , 20);	
					
					context.font = "15pt Calibri";
					context.fillText("V", x1+8, y1+16);
					context.fillText("V", x2+8, y2+16);
					context.lineWidth= "2";
					context.strokeStyle = "black";
					context.stroke();
				}
				varspac.drawTopLine = function(){
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y,
					cx = globalObject.cx,
					cy = globalObject.cy,
					rad = globalObject.rad;
					context.beginPath();
					context.arc(cx , cy ,rad , 0 , 2 * Math.PI , false);
					context.moveTo(cx+2 , cy);
					context.lineTo(cx+65 , cy);
					context.lineTo(cx+65 , cy+20);
					context.moveTo(cx , cy+85);
					context.arc(cx , cy+85 , rad , 0 , 2 * Math.PI , false );
					context.moveTo(cx+2 , cy+85);
					context.lineTo(cx+125 , cy+85);
					context.arc(cx+125 , cy+85 , rad ,   0 , 2 * Math.PI , false);
					context.lineWidth = "2";
					context.strokeStyle = "black";
					context.stroke();
				}
				varspac.drawCoil = function() {
					var context = globalObject.context,
					cx = globalObject.cx,
					cy = globalObject.cy;
					for (i=0; i<4; i++){
						context.moveTo(cx+65 , cy+20);
						context.bezierCurveTo(cx+68 , cy+18 , cx+68 , cy+15 , cx+73 , cy+20);
						context.bezierCurveTo(cx+76 , cy+26 , cx+76 , cy+24 , cx+73 , cy+30);
						context.bezierCurveTo(cx+72 , cy+31 , cx+70 , cy+36 , cx+65 , cy+30);
						cy = cy+10;
					}
					context.lineTo(cx+65 , cy+45);
					context.moveTo(cx+75 , cy-5);
					context.lineTo(cx+125 , cy-5);
					context.arc(cx+127 , cy-5 , 2 , 0 , 2 * Math.PI , false);
					
					// arrow lines
					context.moveTo(cx+75,cy-5);
					context.lineTo(cx+80,cy-10);
					
					context.moveTo(cx+75,cy-5);
					context.lineTo(cx+80,cy);
					
					context.lineWidth = "2";
					context.strokeStyle = "black";
					context.stroke();
				}

	
	varspac.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
	
		varspac.drawTopLine();
		varspac.drawRectangle();
		varspac.drawCoil();
	}
})(variacspaccanvas);
