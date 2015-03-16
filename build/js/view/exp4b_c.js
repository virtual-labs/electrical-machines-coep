var exp4bcanvas = exp4b = exp4bcanvas || {}; (function(exp4b) {
	var globalObject = {
		x : 5,
		y : 80,
		x1 : 60,
		y1 : 70,
		x2 : 15,
		y2 : 72,
	}
	exp4b.firstPoint = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		//three phase ac voltage src
		globalObject.x = globalObject.x + 10;
		globalObject.y = globalObject.y + 220;
		threephacvoltagesrc.drawFourPoint(globalObject);
		//tpst
		globalObject.x = globalObject.x + 112;
		globalObject.y = globalObject.y - 30;
		switpstcanvas.firstRow(globalObject);
		switpstcanvas.secondRow(globalObject);
		switpstcanvas.thirdRow(globalObject);
		switpstcanvas.drawParallelLines(globalObject);
		//three phase variac
		globalObject.x = globalObject.x + 125;
		globalObject.y = globalObject.y + 17;
		variactphcanvas.drawPoint(globalObject);
		variactphcanvas.drawCoils(globalObject);
		//wattmeter
		globalObject.x = globalObject.x + 130;
		globalObject.y = globalObject.y - 10;
		wattmetercanvas.drawRect(globalObject);
		wattmetercanvas.drawLine(globalObject);
		wattmetercanvas.drawZig(globalObject);
		wattmetercanvas.drawCoil(globalObject);
		wattmetercanvas.drawValueRect(globalObject);
		//wattmeter
		globalObject.y = globalObject.y + 110;
		wattmetercanvas.drawRect(globalObject);
		wattmetercanvas.drawLine(globalObject);
		wattmetercanvas.drawZig(globalObject);
		wattmetercanvas.drawCoil(globalObject);
		wattmetercanvas.drawValueRect(globalObject);

		//voltmeter
		globalObject.x = globalObject.x + 186;
		globalObject.y = globalObject.y - 133;
		acvoltmetercanvas.drawPoint(globalObject);
		acvoltmetercanvas.drawRectangle(globalObject);
		//ammeter ac
		globalObject.x = globalObject.x - 74;
		globalObject.y = globalObject.y - 32;
		miammaccanvas.firstPoint(globalObject);
		miammaccanvas.drawRectangle(globalObject);
		// sqirrel motor
		globalObject.x = globalObject.x + 242;
		globalObject.y = globalObject.y + 7;
		squirrotorcanvas.drawRectangle(globalObject);
		squirrotorcanvas.drawPoints(globalObject);
		squirrotorcanvas.drawEllipse(globalObject);
		squirrotorcanvas.drawCircles(globalObject);
		squirrotorcanvas.connectCircles(globalObject);
		//tachometer
		globalObject.x = globalObject.x + 141;
		globalObject.y = globalObject.y + 16;
		globalObject.x1 = globalObject.x1 + 830;
		globalObject.y1 = globalObject.y1 + 183;
		globalObject.x2 = globalObject.x2 + 835;
		globalObject.y2 = globalObject.y2 + 186;
		tachometercanvas.drawRectangle(globalObject);
		tachometercanvas.drawLine(globalObject);
		tachometercanvas.drawCurves(globalObject);

		context.font = "17pt Calibri";
		context.fillText("Experiment No. 4(b):", x + 5, y - 50);
		context.fillText("Circuit Diagram: Experimental setup for no Load Test of Induction Motor", x + 5, y - 20);
		context.moveTo(x + 122, y + 190);
		context.lineTo(x + 122, y + 200);

		for( i = 0; i < 2; i++) {
			context.moveTo(x + 234, y + 192);
			context.lineTo(x + 234, y + 215);
			y = y + 73;
		}

		context.moveTo(x + 319, y + 72);
		context.lineTo(x + 319, y + 205);
		context.lineTo(x + 125, y + 205);

		context.moveTo(x + 346, y + 88);
		context.lineTo(x + 369, y + 88);
		context.lineTo(x + 369, y + 48);

		context.moveTo(x + 345, y + 111);
		context.lineTo(x + 613, y + 111);
		context.moveTo(x + 345, y + 134);
		context.lineTo(x + 368, y + 134);
		context.lineTo(x + 368, y + 159);

		context.moveTo(x + 612, y - 34);
		context.lineTo(x + 738, y - 34);
		context.moveTo(x + 612, y - 35);
		context.lineTo(x + 612, y);

		context.moveTo(x + 738, y - 50);
		context.lineTo(x + 800, y - 50);
		context.lineTo(x + 800, y - 35);
		context.moveTo(x + 738, y - 50);
		context.lineTo(x + 738, y - 35);

		context.moveTo(x + 781, y - 32);
		context.lineTo(x + 781, y - 70);
		context.lineTo(x + 645, y - 70);
		context.lineTo(x + 645, y + 200);
		context.lineTo(x + 490, y + 200);
		context.lineTo(x + 490, y + 90);

		context.moveTo(x + 757, y - 32);
		context.lineTo(x + 757, y - 60);
		context.lineTo(x + 640, y - 60);
		context.lineTo(x + 640, y + 110);
		context.lineTo(x + 615, y + 110);

		context.moveTo(x + 750, y - 32);
		context.lineTo(x + 760, y - 32);
		context.moveTo(x + 775, y - 32);
		context.lineTo(x + 787, y - 32);

		context.moveTo(x + 489, y - 6);
		context.lineTo(x + 489, y + 54);

		context.lineWidth = "2";
		context.strokeStyle = "Black";
		context.stroke();
	}

	exp4b.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		exp4b.firstPoint();
	}
})(exp4bcanvas);

var exp4bcanvas = exp4b = exp4bcanvas || {}; (function(exp4b) {
	var globalObject = {
		x : 5,
		y : 80,
		x1 : 60,
		y1 : 70,
		x2 : 15,
		y2 : 72,
	}
	exp4b.firstPoint = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		//three phase ac voltage src
		globalObject.x = globalObject.x + 10;
		globalObject.y = globalObject.y + 220;
		threephacvoltagesrc.drawFourPoint(globalObject);
		//tpst
		globalObject.x = globalObject.x + 112;
		globalObject.y = globalObject.y - 30;
		switpstcanvas.firstRow(globalObject);
		switpstcanvas.secondRow(globalObject);
		switpstcanvas.thirdRow(globalObject);
		switpstcanvas.drawParallelLines(globalObject);
		//three phase variac
		globalObject.x = globalObject.x + 125;
		globalObject.y = globalObject.y + 17;
		variactphcanvas.drawPoint(globalObject);
		variactphcanvas.drawCoils(globalObject);
		//wattmeter
		globalObject.x = globalObject.x + 130;
		globalObject.y = globalObject.y - 10;
		wattmetercanvas.drawRect(globalObject);
		wattmetercanvas.drawLine(globalObject);
		wattmetercanvas.drawZig(globalObject);
		wattmetercanvas.drawCoil(globalObject);
		wattmetercanvas.drawValueRect(globalObject);
		//wattmeter
		globalObject.y = globalObject.y + 110;
		wattmetercanvas.drawRect(globalObject);
		wattmetercanvas.drawLine(globalObject);
		wattmetercanvas.drawZig(globalObject);
		wattmetercanvas.drawCoil(globalObject);
		wattmetercanvas.drawValueRect(globalObject);

		//voltmeter
		globalObject.x = globalObject.x + 186;
		globalObject.y = globalObject.y - 133;
		acvoltmetercanvas.drawPoint(globalObject);
		acvoltmetercanvas.drawRectangle(globalObject);
		//ammeter ac
		globalObject.x = globalObject.x - 74;
		globalObject.y = globalObject.y - 32;
		miammaccanvas.firstPoint(globalObject);
		miammaccanvas.drawRectangle(globalObject);
		// sqirrel motor
		globalObject.x = globalObject.x + 242;
		globalObject.y = globalObject.y + 7;
		squirrotorcanvas.drawRectangle(globalObject);
		squirrotorcanvas.drawPoints(globalObject);
		squirrotorcanvas.drawEllipse(globalObject);
		squirrotorcanvas.drawCircles(globalObject);
		squirrotorcanvas.connectCircles(globalObject);
		//tachometer
		globalObject.x = globalObject.x + 141;
		globalObject.y = globalObject.y + 16;
		globalObject.x1 = globalObject.x1 + 830;
		globalObject.y1 = globalObject.y1 + 183;
		globalObject.x2 = globalObject.x2 + 835;
		globalObject.y2 = globalObject.y2 + 186;
		tachometercanvas.drawRectangle(globalObject);
		tachometercanvas.drawLine(globalObject);
		tachometercanvas.drawCurves(globalObject);

		context.font = "17pt Calibri";
		context.fillText("Experiment No. 4(b):", x + 5, y - 50);
		context.fillText("Circuit Diagram: Experimental setup for no Load Test of Induction Motor", x + 5, y - 20);
		context.moveTo(x + 122, y + 190);
		context.lineTo(x + 122, y + 200);

		for( i = 0; i < 2; i++) {
			context.moveTo(x + 234, y + 192);
			context.lineTo(x + 234, y + 215);
			y = y + 73;
		}

		context.moveTo(x + 319, y + 72);
		context.lineTo(x + 319, y + 205);
		context.lineTo(x + 125, y + 205);

		context.moveTo(x + 346, y + 88);
		context.lineTo(x + 369, y + 88);
		context.lineTo(x + 369, y + 48);

		context.moveTo(x + 345, y + 111);
		context.lineTo(x + 613, y + 111);
		context.moveTo(x + 345, y + 134);
		context.lineTo(x + 368, y + 134);
		context.lineTo(x + 368, y + 159);

		context.moveTo(x + 612, y - 34);
		context.lineTo(x + 738, y - 34);
		context.moveTo(x + 612, y - 35);
		context.lineTo(x + 612, y);

		context.moveTo(x + 738, y - 50);
		context.lineTo(x + 800, y - 50);
		context.lineTo(x + 800, y - 35);
		context.moveTo(x + 738, y - 50);
		context.lineTo(x + 738, y - 35);

		context.moveTo(x + 781, y - 32);
		context.lineTo(x + 781, y - 45);
		context.moveTo(x + 781, y - 55);
		context.lineTo(x + 781, y - 70);
		context.lineTo(x + 650, y - 70);
		context.lineTo(x + 650, y + 200);
		context.lineTo(x + 490, y + 200);
		context.lineTo(x + 490, y + 90);

		context.moveTo(x + 757, y - 32);
		context.lineTo(x + 757, y - 45);

		context.moveTo(x + 757, y - 65);
		context.lineTo(x + 757, y - 65);

		context.moveTo(x + 757, y - 55);
		context.lineTo(x + 757, y - 63);
		context.lineTo(x + 660, y - 63);
		context.lineTo(x + 660, y + 110);
		context.lineTo(x + 610, y + 110);

		context.moveTo(x + 750, y - 32);
		context.lineTo(x + 760, y - 32);
		context.moveTo(x + 775, y - 32);
		context.lineTo(x + 787, y - 32);

		context.moveTo(x + 489, y - 6);
		context.lineTo(x + 489, y + 54);

		
		
		context.moveTo(x + 781, y - 55);
		context.bezierCurveTo(x + 781, y - 55, x + 800, y - 50, x + 781, y - 45);
		context.lineTo(x + 781, y - 30);

		context.moveTo(x + 757, y - 45);
		context.bezierCurveTo(x + 757, y - 45, x + 780, y - 50, x + 757, y - 55);

		
		
		
		context.lineWidth = "2";
		context.strokeStyle = "Black";
		context.stroke();
	}

	exp4b.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		exp4b.firstPoint();
	}
})(exp4bcanvas);
