var exp10bcanvas = exp10b = exp10bcanvas || {};
(function(exp10b){
	var globalObject = {
		x : 5,
		y : 80,
		x1: 60,
		y1: 70,
		x2: 15,
		y2: 72,
	}
	exp10b.firstPoint = function(){
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		//three phase ac voltage src
		globalObject.x = globalObject.x +10;
		globalObject.y = globalObject.y + 220;
		threephacvoltagesrc.drawFourPoint(globalObject);
		//tpst
		globalObject.x = globalObject.x +112;
		globalObject.y = globalObject.y -30; 
		switpstcanvas.firstRow(globalObject);
		switpstcanvas.secondRow(globalObject);
		switpstcanvas.thirdRow(globalObject);
		//three phase variac
		globalObject.x = globalObject.x +125;
		globalObject.y = globalObject.y +17;
		variactphcanvas.drawPoint(globalObject);
		variactphcanvas.drawCoils(globalObject);
		//wattmeter
		globalObject.x = globalObject.x +130;
		globalObject.y = globalObject.y -20;
		wattmetercanvas.drawRect(globalObject);
		wattmetercanvas.drawLine(globalObject);
		wattmetercanvas.drawZig(globalObject);
		wattmetercanvas.drawCoil(globalObject);
		//wattmeter
		globalObject.y = globalObject.y +110;
		wattmetercanvas.drawRect(globalObject);
		wattmetercanvas.drawLine(globalObject);
		wattmetercanvas.drawZig(globalObject);
		wattmetercanvas.drawCoil(globalObject);
		//ammeter
		globalObject.x = globalObject.x +113;
		globalObject.y = globalObject.y -110;
		miammdccanvas.firstPoint(globalObject);
		miammdccanvas.drawRectangle(globalObject);
		//voltmeter
		globalObject.x = globalObject.x +123;
		globalObject.y = globalObject.y -20;
		mivoltdccanvas.firstPoint(globalObject);
		mivoltdccanvas.drawRectangle(globalObject);
		
		//squirrel cage IM
		globalObject.x = globalObject.x +74;
		globalObject.y = globalObject.y +6;
		squirrotorcanvas.drawRectangle(globalObject);
		squirrotorcanvas.drawPoints(globalObject);
		squirrotorcanvas.drawEllipse(globalObject);
		squirrotorcanvas.drawCircles(globalObject);
		squirrotorcanvas.connectCircles(globalObject);
		//mechanical rotor block
		globalObject.x = globalObject.x +110;
		globalObject.y = globalObject.y -3;
		mechrotorcanvas.drawPoint(globalObject);
		mechrotorcanvas.drawPoint(globalObject);
		context.font = "17pt Calibri";
		context.fillText("Experiment No. 4(b):", x + 5, y - 50);
		context.fillText("Circuit Diagram: Experimental setup for no Load Testof Induction Motor", x + 5, y - 20);
		context.moveTo(x+122 , y+190);
		context.lineTo(x+122 , y+200);
		for (i=0 ; i<2;i++){
		context.moveTo(x+234 , y+192);
		context.lineTo(x+234 , y+215);
		y = y+ 73;
		}
		
		context.moveTo(x+319 , y+72);
		context.lineTo(x+319 , y+205);
		context.lineTo(x+125 , y+205);
		//context.moveTo(x+566 , y+101);
		//context.lineTo(x+585 , y+101);
		//context.lineTo(x+585 , y+40);
		context.moveTo(x+346 , y+88);
		context.lineTo(x+369 , y+88);
		context.lineTo(x+369 , y+42);
		//context.moveTo(x+350 , y+87);
		//context.lineTo(x+350 , y+101);
		//context.lineTo(x+450 , y+101);
		context.moveTo(x+345 , y+111);
		context.lineTo(x+613 , y+111);
		context.moveTo(x+345 , y+134);
		context.lineTo(x+368 , y+134);
		context.lineTo(x+368 , y+150);
		//context.lineTo(x+430 , y+215);
		context.moveTo(x+692 , y-10);
		context.lineTo(x+692 , y-40);
		context.lineTo(x+756 , y-40);
		context.lineTo(x+756 , y-10);
		context.moveTo(x+692 , y-9);
		context.lineTo(x+613 , y-9);
		context.lineTo(x+613 , y+40);
		context.moveTo(x+734 , y-9);
		context.lineTo(x+734 , y-70);
		context.lineTo(x+645 , y-70);
		context.lineTo(x+645 , y+190);
		context.lineTo(x+490 , y+190);
		context.lineTo(x+490 , y+80);
		context.moveTo(x+709 , y-9);
		context.lineTo(x+709 , y-60);
		context.lineTo(x+640 , y-60);
		context.lineTo(x+640 , y+132);
		context.lineTo(x+615 , y+132);
		//context.moveTo(x+545 , y+216);
		//context.lineTo(x+570 , y+216);
		//context.lineTo(x+570 , y+190);
		context.moveTo(x+702 , y-10);
		context.lineTo(x+717 , y-10);
		context.moveTo(x+731 , y-9);
		context.lineTo(x+747 , y-9);
		context.lineWidth = "2";
		context.strokeStyle = "Black";
		context.stroke();
		
	}
	exp10b.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		exp10b.firstPoint();
	}
	
	
})(exp10bcanvas);