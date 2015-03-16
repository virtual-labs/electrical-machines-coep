var exp6bcanvas = exp6b = exp6bcanvas || {};
(function(exp6b){
	var globalObject = {
		x : 5,
		y : 80,
		x1: 60,
		y1: 70,
		x2: 15,
		y2: 72,
		
	}
	exp6b.firstPoint = function(){
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		//ac voltage source
		globalObject.x = globalObject.x +10;
		globalObject.y = globalObject.y +190;
		threephacvoltagesrc.drawPoint(globalObject);
		//tpst
		globalObject.x = globalObject.x +112;
		globalObject.y = globalObject.y -30;
		switpstcanvas.firstRow(globalObject);
		switpstcanvas.secondRow(globalObject);
		switpstcanvas.thirdRow(globalObject);
		switpstcanvas.drawParallelLines(globalObject);
		//three phase vvvf
		globalObject.x = globalObject.x +134;
		globalObject.y = globalObject.y +15;
		threephivvfcanvas.drawRectangle(globalObject);
		threephivvfcanvas.drawPoints(globalObject);
		threephivvfcanvas.readingShow(globalObject);
		threephivvfcanvas.control(globalObject);
		//voltmeter ac
		globalObject.x = globalObject.x +110;
		globalObject.y = globalObject.y -47;
		acvoltmetercanvas.drawPoint(globalObject);
		acvoltmetercanvas.drawRectangle(globalObject);
		
		//ammeter ac
		globalObject.x = globalObject.x +50;
		globalObject.y = globalObject.y -32;
		miammaccanvas.firstPoint(globalObject);
		miammaccanvas.drawRectangle(globalObject);
		//squirrel cage IM
		globalObject.x = globalObject.x +140;
		globalObject.y = globalObject.y +140;
		squirrotorcanvas.drawRectangle(globalObject);
		squirrotorcanvas.drawPoints(globalObject);
		squirrotorcanvas.drawEllipse(globalObject);
		squirrotorcanvas.drawCircles(globalObject);
		squirrotorcanvas.connectCircles(globalObject);
		//tachometer
		globalObject.x = globalObject.x -157;
		globalObject.y = globalObject.y +14;
		globalObject.x1 = globalObject.x1 +355;
		globalObject.y1 = globalObject.y1 +270;
		globalObject.x2 = globalObject.x2 +480;
		globalObject.y2 = globalObject.y2 +270;
		tachometercanvas.drawRectangle(globalObject);
		tachometercanvas.drawLineMirror(globalObject);
		tachometercanvas.drawCurvesMirror(globalObject);

		//coupling
		globalObject.x = globalObject.x +301;
		globalObject.y = globalObject.y -7;
		couplingcanvas.drawRectangle(globalObject);
		//self excited dc gen
		globalObject.x = globalObject.x +109;
		globalObject.y = globalObject.y -20;
		selfexcdccanvas.drawRectangle(globalObject);
		selfexcdccanvas.drawCoil(globalObject);
		//ammeter
		globalObject.x   = globalObject.x +10;
		globalObject.y   = globalObject.y - 40;
		miammdccanvas.firstPoint(globalObject);
		miammdccanvas.drawRectangle(globalObject);
		//voltmeter
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
		
		context.font = "17pt Calibri";
		context.fillText("", x + 5, y - 50);
		context.fillText("Circuit Diagram: Experimental set up forspeed control with V/F control", x + 5, y - 20);
		
		//a1 to dc ammeter
		context.moveTo(x+797,y+230);
		context.lineTo(x+797,y+183);
		context.lineTo(x+820,y+183);
		
		//A2 to resistive load
		context.moveTo(x+797,y+313);
		context.lineTo(x+797,y+343);
		context.lineTo(x+950,y+343);
		
		context.moveTo(x+942,y+275);
		context.lineTo(x+942,y+343);
		//r1 to b2
		context.moveTo(x+561 , y+197);
		context.lineTo(x+561 , y+170);
		context.lineTo(x+572 , y+170);
		
		context.moveTo(x+584 , y+170);
		context.lineTo(x+597 , y+170);
		
		context.moveTo(x+610 , y+170);
		context.lineTo(x+626 , y+170);
		context.lineTo(x+626 , y+200);
		
		context.moveTo(x+575 , y+199);
		context.lineTo(x+585 , y+199);
		
		context.moveTo(x+600 , y+199);
		context.lineTo(x+612 , y+199);
		
		//from ac ammeter to 
		context.moveTo(x+540 , y+96);
		context.lineTo(x+592 , y+96);
		context.lineTo(x+592 , y+170);
		
		context.moveTo(x+580 , y+198);
		context.lineTo(x+580  , y+150);
		context.lineTo(x+500 , y+150);
		context.lineTo(x+500 , y+230);
		context.lineTo(x+365 , y+230);
		
		//to y2
		context.moveTo(x+365 , y+210);
		context.lineTo(x+480 , y+210);
		context.lineTo(x+480 , y+130);
		context.lineTo(x+588 , y+130);
		context.moveTo(x+597 , y+130);
		context.lineTo(x+606 , y+130);
		context.lineTo(x+606 , y+200);
		
		
		context.moveTo(x+363 , y+190);
		context.lineTo(x+363 , y+96);
		context.lineTo(x+413 , y+96);
		context.moveTo(x+122 , y+162);
		context.lineTo(x+122 , y+170);
		for(i=0;i<2;i++){
		context.moveTo(x+234 , y+162);
		context.lineTo(x+234 , y+188);
		y = y+70;
		}
		
		x = x+528;
		y = y -34;
		context.moveTo(x + 60, y + 25);
		context.bezierCurveTo(x + 56, y + 20, x + 55, y + 20, x + 60, y + 12);
		context.bezierCurveTo(x + 66, y + 9, x + 64, y + 9, x + 70, y + 12);
		context.bezierCurveTo(x + 71, y + 15, x + 76, y + 18, x + 70, y + 25);
		
		x = x-14;
		y = y +40;
		context.moveTo(x + 60, y + 25);
		context.bezierCurveTo(x + 56, y + 20, x + 55, y + 20, x + 60, y + 12);
		context.bezierCurveTo(x + 66, y + 9, x + 64, y + 9, x + 70, y + 12);
		context.bezierCurveTo(x + 71, y + 15, x + 76, y + 18, x + 70, y + 25);
		
		x = x+26;
		y = y ;
		context.moveTo(x + 60, y + 25);
		context.bezierCurveTo(x + 56, y + 20, x + 55, y + 20, x + 60, y + 12);
		context.bezierCurveTo(x + 66, y + 9, x + 64, y + 9, x + 70, y + 12);
		context.bezierCurveTo(x + 71, y + 15, x + 76, y + 18, x + 70, y + 25);
		
		context.lineWidth = "2";
		context.strokeStyle = "Black";
		context.stroke();
		
	}
	exp6b.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		exp6b.firstPoint();
	}
	
})(exp6bcanvas);
