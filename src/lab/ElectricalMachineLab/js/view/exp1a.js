var exp1acanvas = exp1a = exp1acanvas || {}; 
(function(exp1a) {
	var globalObject = {
		x : 5,
		y : 70,
		rad : 20		
	}
	exp1a.firstPoint = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
				
		globalObject.y = globalObject.y + 200;
		
		//dc fixed
		dcvoltagecanvas.drawPoint(globalObject);
		globalObject.x=globalObject.x+50;
		globalObject.y=globalObject.y-1;
		
		//dpst switch
		dpstcanvas.firstRow(globalObject);
		dpstcanvas.secondRow(globalObject);
		dpstcanvas.switchDpst(globalObject);
		globalObject.x = globalObject.x +133;
		globalObject.y = globalObject.y - 35;

		// dc variable
		dcvariablecanvas.drawRectangle(globalObject);
		dcvariablecanvas.drawPoints(globalObject);
		dcvariablecanvas.readingShow(globalObject);
		dcvariablecanvas.control(globalObject);

		globalObject.x = globalObject.x + 107;
		globalObject.y = globalObject.y + 15;

		// ac ammeter
		miammdccanvas.firstPoint(globalObject);
		miammdccanvas.drawRectangle(globalObject);
		globalObject.x = globalObject.x + 200;
		context.lineWidth = "2";
		context.strokeStyle = "Black";
		context.stroke();
		// voltmeter
		globalObject.x = globalObject.x - 77;
		globalObject.y = globalObject.y - 20;
		mivoltdccanvas.firstPoint(globalObject);
		mivoltdccanvas.drawRectangle(globalObject);

		//dc shunt motor
		globalObject.x = globalObject.x + 55;
		globalObject.y = globalObject.y + 20;
		selfexcdccanvas.drawRectangle(globalObject);
		selfexcdccanvas.drawCoil(globalObject);
		
		//coupling
		globalObject.x = globalObject.x + 145;
		globalObject.y = globalObject.y + 17;
		couplingcanvas.drawRectangle(globalObject);
		
       //dc shunt mirror
        globalObject.x = globalObject.x + 100;
		globalObject.y = globalObject.y -17;
       	selfexcdccanvas.drawRectangleMirror(globalObject);
       	selfexcdccanvas.drawCoilMirror(globalObject);
       	
       	//2nd ammeter
       	globalObject.x = globalObject.x +95;
       	globalObject.y = globalObject.y -3;
       	miammdccanvas.firstPoint(globalObject);
       	miammdccanvas.drawRectangle(globalObject);
       	
       	//2nd voltmeter
       	globalObject.x = globalObject.x + 124;
		globalObject.y = globalObject.y -20;
		mivoltdccanvas.firstPoint(globalObject);
		mivoltdccanvas.drawRectangle(globalObject);
		
		//resis load 
		globalObject.x = globalObject.x + 20;
		globalObject.y = globalObject.y + 50;
		spresisloadcanvas.drawLine(globalObject);
		spresisloadcanvas.drawPoint(globalObject);
		spresisloadcanvas.zigzag(globalObject);
		spresisloadcanvas.middleLine(globalObject);
		context.font = "17pt Calibri";
		context.fillText("Experiment No.1(a):", x + 5, y - 50);
		context.fillText("Circuit Diagram: To perform Load Test on Self Excited DC Generator", x + 5, y - 20);
		context.moveTo(x + 290, y + 270);
		context.lineTo(x + 410, y + 270);

		context.moveTo(x + 415, y + 180);
		context.lineTo(x + 457, y + 180);
		
		context.moveTo(x + 415, y + 270);
		context.lineTo(x + 457, y + 270);
		
		context.moveTo(x+1000 , y+336);
		context.lineTo(x+807 , y+336);
		context.lineTo(x+807, y+273);
		
		context.moveTo(x+932, y+268);
		context.lineTo(x+932, y+338);
		context.font = "10pt Calibri";
		context.fillText("220V", x+68, y + 226);
		context.fillText("D.C.", x+68, y + 241);
		context.fillText("+", x+60, y + 170);
		context.fillText("-", x+60, y + 280);
				
		context.lineWidth = "2";
		context.strokeStyle = "Black";
		context.stroke();
	}
	exp1a.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		exp1a.firstPoint();
	}
})(exp1acanvas);
