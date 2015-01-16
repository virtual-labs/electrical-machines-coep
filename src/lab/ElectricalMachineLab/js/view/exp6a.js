var exp6acanvas = exp = exp6acanvas || {}; 
(function(exp) {
	var globalObject = {
		x : 10,
		y : 80,
		
		x1: 60,
		y1: 70,
		x2: 15,
		y2: 72,
		
		topLeftCornerX : 80,
		topLeftCornerY : 40,
		width : 40,
		height : 15
	}
	exp.firstPoint = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		
		// three phase ac voltage src
		globalObject.y   = globalObject.y + 200;		
		threephacvoltagesrc.drawPoint(globalObject);
		
		
		// tpst switch
		globalObject.x   = globalObject.x + 112;
		globalObject.y   = globalObject.y - 20;
		switpstcanvas.firstRow(globalObject);
		switpstcanvas.secondRow(globalObject);
		switpstcanvas.thirdRow(globalObject);
		switpstcanvas.drawParallelLines(globalObject);
		
		//3 phase variac
		globalObject.x   = globalObject.x + 125;
		globalObject.y   = globalObject.y + 17;
		variactphcanvas.drawPoint(globalObject);
		variactphcanvas.drawCoils(globalObject);
		
		// voltmeter
		globalObject.x   = globalObject.x + 152;
		globalObject.y   = globalObject.y ;
		acvoltmetercanvas.drawPoint(globalObject);
		acvoltmetercanvas.drawRectangle(globalObject);
		
		
		// ammeter
		 globalObject.x = globalObject.x+50;
		 globalObject.y = globalObject.y-32;
		 miammaccanvas.firstPoint(globalObject);
		 miammaccanvas.drawRectangle(globalObject);
		
		
				//tachometer
				globalObject.x   = globalObject.x + 140;
				globalObject.y   = globalObject.y + 40;
				globalObject.x1 = globalObject.x + 20;
				globalObject.y1 = globalObject.y + 10;
				globalObject.x2 = globalObject.x + 90;
				globalObject.y2 = globalObject.y + 13;
				tachometercanvas.drawRectangle(globalObject);
				tachometercanvas.drawLineMirror(globalObject);
				tachometercanvas.drawCurvesMirror(globalObject);
				// squirrle 
				globalObject.x   = globalObject.x + 155;
				globalObject.y   = globalObject.y - 15;
				squirrotorcanvas.drawRectangle(globalObject);
				squirrotorcanvas.drawPoints(globalObject);
				squirrotorcanvas.drawEllipse(globalObject);
				squirrotorcanvas.drawCircles(globalObject);
				squirrotorcanvas.connectCircles(globalObject);
				
				//coupling 
				globalObject.x   = globalObject.x + 145;
				globalObject.y   = globalObject.y +7;
				cc.drawRectangle(globalObject);
					
				//self excited dc generator
				globalObject.x   = globalObject.x + 110;
				globalObject.y   = globalObject.y -20;
				selfexcdccanvas.drawRectangle(globalObject);
				selfexcdccanvas.drawCoil(globalObject);
				
				// ammeter
				globalObject.x   = globalObject.x +10;
				globalObject.y   = globalObject.y - 40;
				miammdccanvas.firstPoint(globalObject);
				miammdccanvas.drawRectangle(globalObject);
				
				
				// voltmeter
				globalObject.x   = globalObject.x + 123;
				globalObject.y   = globalObject.y -  20;
				mivoltdccanvas.firstPoint(globalObject);
				mivoltdccanvas.drawRectangle(globalObject);
				
				//resistive load bank
				globalObject.x   = globalObject.x + 20;
				globalObject.y   = globalObject.y+ 50;
				spresisloadcanvas.drawLine(globalObject);
				spresisloadcanvas.drawPoint(globalObject);
				spresisloadcanvas.zigzag(globalObject);
				spresisloadcanvas.middleLine(globalObject);
					
				
				// -------------------------- DRAWING LINES ------------------------------------
					
				
				context.moveTo(x+224,y+182);
				context.lineTo(x+224,y+208);
				
				
				context.moveTo(x+224,y+255);
				context.lineTo(x+224,y+280);
				
				context.moveTo(x+337,y+224);
				context.lineTo(x+337,y+165);
				context.lineTo(x+440,y+165);
				
				context.moveTo(x+337,y+247);
				context.lineTo(x+360,y+247);
				context.lineTo(x+360,y+279);
				context.lineTo(x+531,y+279);
				context.lineTo(x+531,y+171);
				
				context.moveTo(x+530,y+160);
				context.lineTo(x+530,y+70);
				context.lineTo(x+786,y+70);
				context.lineTo(x+786,y+114);
				
				context.moveTo(x+758,y+125);
				context.lineTo(x+758,y+152);
			
				context.moveTo(x+337,y+270);
				context.lineTo(x+350,y+270);
				context.lineTo(x+350,y+300);
				context.lineTo(x+550,y+300);
				context.lineTo(x+550,y+170);
				
				context.moveTo(x+549,y+160);
				context.lineTo(x+549,y+107);
				context.lineTo(x+757,y+107);
				context.lineTo(x+757,y+115);
				
				context.moveTo(x+785,y+125);
				context.lineTo(x+785,y+152);
				
				context.moveTo(x+560,y+165);
				context.lineTo(x+650,y+165);
				context.lineTo(x+650,y+153);
				context.lineTo(x+737,y+153);
				
				//a1 to dc ammeter
				context.moveTo(x+977,y+179);
				context.lineTo(x+977,y+137);
				context.lineTo(x+997,y+137);
				
				//A2 to resistive load
				context.moveTo(x+977,y+269);
				context.lineTo(x+977,y+297);
				context.lineTo(x+1130,y+297);
				
				context.moveTo(x+1122,y+225);
				context.lineTo(x+1122,y+298);
				
				x = x + 290;
				y = y + 240;
				// line from r2 to y1 of squi. cage IM
				context.moveTo(x+461,y-87);
				context.lineTo(x+473,y-87);
				
				// line from y2 to b1 of squi. cage IM
				context.moveTo(x+486,y-87);
				context.lineTo(x+498,y-87);
				
				// line from r2 to b2 of squi. cage IM
				context.moveTo(x+449,y-90);
				context.lineTo(x+449,y-120);
				context.lineTo(x+514,y-120);
				context.lineTo(x+514,y-90);
			
				context.moveTo(x+20,y-35);
				context.lineTo(x+20,y+31);
				
				context.moveTo(x-178,y-23);
				context.lineTo(x-178,y-7);			
			
				context.moveTo(x-178,y+30);
				context.lineTo(x-178,y+40);
				
				context.fillText("R", x-180, y-44 );
				context.fillText("Y", x-180, y+5 );
				context.fillText("B", x-180, y+53);
				
				context.font = "17pt Calibri";
				context.fillText("", x-240, y-250 );
				context.fillText("Circuit Diagram: Experimental set-up for speed control with stator voltage variation.", x-240, y-200 );
			
				var xx = x;
				var yy = y;
			    x = xx + 215;
				y = yy -129;
				context.moveTo(x+25,y+50);
				context.bezierCurveTo(x+30,y+48,x+30,y+45,x+38,y+50);
				context.bezierCurveTo(x+41,y+56,x+41,y+54,x+38,y+60);
				context.bezierCurveTo(x+35,y+61,x+32,y+66,x+25,y+60);
					
				x = xx + 233;
				y = yy -129;
				context.moveTo(x+25,y+50);
				context.bezierCurveTo(x+30,y+48,x+30,y+45,x+38,y+50);
				context.bezierCurveTo(x+41,y+56,x+41,y+54,x+38,y+60);
				context.bezierCurveTo(x+35,y+61,x+32,y+66,x+25,y+60);
					
				x = xx + 442;
				y = yy -175;
				context.moveTo(x+25,y+50);
				context.bezierCurveTo(x+30,y+48,x+30,y+45,x+38,y+50);
				context.bezierCurveTo(x+41,y+56,x+41,y+54,x+38,y+60);
				context.bezierCurveTo(x+35,y+61,x+32,y+66,x+25,y+60);
				
				x = xx + 470;
				y = yy -175;
				context.moveTo(x+25,y+50);
				context.bezierCurveTo(x+30,y+48,x+30,y+45,x+38,y+50);
				context.bezierCurveTo(x+41,y+56,x+41,y+54,x+38,y+60);
				context.bezierCurveTo(x+35,y+61,x+32,y+66,x+25,y+60);
				
				context.lineWidth = "2";
				context.strokeStyle = "Black";
				context.stroke();
			
	}
	

	exp.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		exp.firstPoint();
	
	}
})(exp6acanvas);
