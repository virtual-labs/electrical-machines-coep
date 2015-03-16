var exp4bcanvas = exp4b = exp4bcanvas || {}; (function(exp4b) {
	var yPoint = 314, yPoint1 = 306, xPoint = 272, xPoint1 = 358, c = 0,xPoint3 = 272, xPoint4 = 337, yPoint4 = 314, yPoint5 = 309;
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
		threephacvoltagesrc.drawPoint(globalObject);
	
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

		//voltmeter
		globalObject.x = globalObject.x + 130;
		globalObject.y = globalObject.y - 33;
		acvoltmetercanvas.drawPoint(globalObject);
		acvoltmetercanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("V", x + 450, y + 200);
		context.font = "8pt Calibri";
		context.fillText("S", x + 456, y + 203);

		//ac ammeter
		globalObject.x = globalObject.x + 50;
		globalObject.y = globalObject.y - 32;
		miammaccanvas.firstPoint(globalObject);
		miammaccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("I", x + 450, y + 100);
		context.font = "8pt Calibri";
		context.fillText("L", x + 454, y + 102);

		//wattmeter
		globalObject.x = globalObject.x + 130;
		globalObject.y = globalObject.y;
		wattmetercanvas.drawRect(globalObject);
		wattmetercanvas.drawLine(globalObject);
		wattmetercanvas.drawZig(globalObject);
		wattmetercanvas.drawCoil(globalObject);
		wattmetercanvas.drawValueRect(globalObject);
		context.font = "11pt Calibri";
		context.fillText("W-1", x + 600, y + 90);
		
		//wattmeter
		globalObject.y = globalObject.y + 180;
		wattmetercanvas.drawRect(globalObject);
		wattmetercanvas.drawLine(globalObject);
		wattmetercanvas.drawZig(globalObject);
		wattmetercanvas.drawCoil(globalObject);
		wattmetercanvas.drawValueRect(globalObject);
		context.font = "11pt Calibri";
		context.fillText("W-2", x + 560, y + 290);
	
		// sqirrel motor
		globalObject.x = globalObject.x + 221;
		globalObject.y = globalObject.y - 145;
		squirrotorcanvas.drawRectangle(globalObject);
		squirrotorcanvas.drawPoints(globalObject);
		squirrotorcanvas.drawEllipse(globalObject);
		squirrotorcanvas.drawCircles(globalObject);
		squirrotorcanvas.connectCircles(globalObject);

		//mech rotor
		globalObject.x = globalObject.x + 134;
		globalObject.y = globalObject.y;
		mrc.drawPoint(globalObject);
		context.font = "11pt Calibri";
		context.fillText("Speed", x + 900, y + 170);

		context.font = "13pt Calibri";
	    context.fillText(" Induction Motor ", x+748 , y+280 );
	    context.fillStyle = "black";
		
		context.font = "15pt Calibri";
	    context.fillText(" Induction Motor Ratings :  ", x , y+500 );
	    context.font = "11pt Calibri";
	    context.fillText(" Ratings = 2.2 kW  ", x+8 , y+530 );
	    context.fillText("Voltage = 415V  ", x+12 , y+550 );
	    context.fillText("Frequency = 50 Hz ", x+12 , y+570 );
	    context.fillText("Speed =  1435 r.p.m.  ", x+12 , y+590 );
	    context.fillText("p.f. = 0.85  ", x+12 , y+610 );
	    context.fillText(" Winding - Delta  ", x+10 , y+630 );
	    context.fillStyle = "black";
	    
	    context.font = "15pt Calibri";
	    context.fillText(" Abbrivations :  ", x+400 , y+500 );
	    context.font = "11pt Calibri";
	    context.fillText("V", x+408 , y+530 );
	    context.fillText("I", x+408 , y+550 );
	    context.fillText("W-1 = First Watt-line ready", x+408 , y+570 );
	    context.fillText("W-2 = Second Watt-line ready", x+408 , y+590 );
	    
	    //context.font = "8pt Calibri";
	    context.fillText("S = Supply Voltage", x+415 , y+532 );
	    context.fillText("L = Line Voltage", x+412 , y+552 );
	   
	    context.fillStyle = "black";
		
		context.font = "17pt Calibri";
		//context.fillText("", x + 5, y - 50);
		context.fillText("Circuit Diagram: Blocked Rotor Test of Induction Motor", x + 5, y - 20);
		
		
		//two small hor lines for slipping rotor
		context.moveTo(x + 797, y + 140);
		context.lineTo(x + 810, y + 140);
		context.moveTo(x + 820, y + 140);
		context.lineTo(x + 838, y + 140);

		
        context.moveTo(x + 786, y + 140);
		context.lineTo(x + 786, y + 110);
		context.lineTo(x + 847, y + 110);
		context.lineTo(x + 847, y + 140);
		
	//	connect two wattmeter
		context.moveTo(x + 670, y + 180);
		context.lineTo(x + 670, y + 265);
		
		//Bazier Curve
		// context.moveTo(x + 670, y +263);
		// context.bezierCurveTo(x + 670, y +263, x + 695, y +258, x + 670, y +249);
		context.moveTo(x + 670, y + 261);
		context.lineTo(x + 670, y + 317);
		//Bazier Curve
		context.moveTo(x + 670, y + 328);
		context.bezierCurveTo(x + 670, y + 328, x + 695, y + 321, x + 670, y + 317);
		context.moveTo(x + 670, y + 327);
		context.lineTo(x + 670, y + 365);

		context.font = "9pt Calibri";
		context.fillText("239.6V", x + 4, y + 206);
		context.lineWidth = "2";
		context.strokeStyle = "Black";
		context.stroke();
		//mech motor join
		context.beginPath();
		context.moveTo(x + 883, y + 203);
		context.lineTo(x + 883, y + 221);
		context.lineWidth = "2";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
		
		context.beginPath();
		context.moveTo(x + 122, y + 191);
		context.lineTo(x + 122, y + 198);
		context.arc(x+122 , y+200, 2 , 0, 2 * Math.PI , false);
		
		
		context.moveTo(x + 235, y + 189);
		context.lineTo(x + 235, y + 216);
		context.arc(x+235 , y+217, 2 , 0, 2 * Math.PI , false);
		context.moveTo(x + 235, y + 217);
		context.lineTo(x + 268, y + 217);
		
		//context.arc(x + 279, y + 200, 2, 0, 2 * Math.PI, false);
		
		//context.moveTo(x + 280, y + 200);
		//context.lineTo(x + 311, y + 200);	
		
		context.moveTo(x + 268, y + 217);
	    context.bezierCurveTo(x+258,y+229,x+283,y+232,x+275,y+216);  // first part
		
	    
		
		context.moveTo(x + 320, y + 234);
		context.lineTo(x + 360, y + 234);
		context.lineTo(x + 360, y + 142);
		context.lineTo(x + 426, y + 142);

		context.moveTo(x + 549, y + 142);
		context.arc(x+549 , y+142, 2 , 0, 2 * Math.PI , false);
		context.moveTo(x + 551, y + 142);
		context.lineTo(x + 565, y + 142);

		context.moveTo(x + 655, y + 142);
		context.lineTo(x + 665, y + 142);
		context.arc(x+670 , y+142, 2 , 0, 2 * Math.PI , false);
		context.moveTo(x + 670, y + 141);
		context.lineTo(x + 784, y + 141);
		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
		
		context.beginPath();
		
		context.moveTo(x + 235, y + 262);
		context.lineTo(x + 235, y + 290);
		
		
		context.moveTo(x + 235, y + 263);
		context.lineTo(x + 268, y + 263);
		context.arc(x+235 , y+263, 2 , 0, 2 * Math.PI , false);
		
		context.moveTo(x + 320, y + 280);
		context.lineTo(x + 360, y + 280);
		context.lineTo(x + 360, y + 322);
		context.lineTo(x + 565, y + 322);
		
		context.moveTo(x + 655, y + 322);
		context.lineTo(x + 665, y + 322);
		context.arc(x+670 , y+322, 2 , 0, 2 * Math.PI , false);
		
		//from 2 wattmeter to R4
		context.moveTo(x + 672, y + 322);
		context.lineTo(x + 710, y + 322);
		context.lineTo(x + 710, y + 261);
		//Bazier Curve
		context.moveTo(x + 710, y + 263);
		context.bezierCurveTo(x + 710, y + 263, x + 730, y + 256, x + 710, y + 250);
		context.moveTo(x + 710, y + 250);
		context.lineTo(x + 710, y + 147);
		//Bazier Curve
		context.moveTo(x + 710, y + 147);
		context.bezierCurveTo(x + 710, y + 147, x + 730, y + 140, x + 710, y + 135);
		context.moveTo(x + 710, y + 135);
		context.lineTo(x + 710, y + 70);
		context.lineTo(x + 830, y + 70);
		context.lineTo(x + 830, y + 105);
		//Bazier Curve
		context.moveTo(x + 828, y + 115);
		context.bezierCurveTo(x + 828, y + 115, x + 850, y + 110, x + 828, y + 105);
		context.moveTo(x + 829, y + 114);
		context.lineTo(x + 829, y + 141);
		

		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
		
		context.beginPath();
		//middle line to slipping motor
		context.moveTo(x + 320, y + 257);  //yellow lines
		context.lineTo(x + 740, y + 257);
		context.lineTo(x + 740, y + 148);
		//Bazier Curve
		context.moveTo(x + 740, y + 148);
		context.bezierCurveTo(x + 740, y + 148, x + 760, y + 140, x + 740, y + 135);
		context.lineTo(x + 740, y + 135);
		context.lineTo(x + 740, y + 90);
		context.lineTo(x + 803, y + 90);
		context.lineTo(x + 803, y + 105);
		
		


		//Bazier Curve
		context.moveTo(x + 803, y + 115);
		context.bezierCurveTo(x + 803, y + 115, x + 820, y + 110, x + 803, y + 105);
		context.moveTo(x + 803, y + 115);
		context.lineTo(x + 803, y + 140)
		context.lineWidth = "2";
		context.strokeStyle = "gold";
		context.stroke();

//------------ first row red
		
		context.beginPath();
		context.moveTo(x + 235, y + 191);
		context.lineTo(x + 235, y + 214);
		
		context.moveTo(x + 235, y + 217);
		context.arc(x + 235, y + 217, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 236, y + 217);
		context.lineTo(x + 267, y + 217);	
		
		context.moveTo(x + 267, y + 217);
	    context.bezierCurveTo(x+259,y+229,x+281,y+232,x+274,y+216);  // first part
		
		context.moveTo(x + 275, y + 217);
	    context.bezierCurveTo(x+264,y+230,x+288,y+230,x+281,y+217);//second part
		
	    context.moveTo(x + 283, y + 217);
		context.bezierCurveTo(x+269,y+230,x+297,y+230,x+289,y+217);  // third part
		
	 
	    context.moveTo(x + 289, y + 217);
		context.bezierCurveTo(x+275,y+230,x+306,y+230,x+295,y+217);  // fourth part
		 
        context.moveTo(x + 295, y + 217);
		context.bezierCurveTo(x+283,y+230,x+312,y+230,x+301,y+217);  // fifth part
		
		 context.moveTo(x + 301, y + 217);
		 context.lineTo(x + 317, y + 217);
		
	 
		 context.strokeStyle = "red";
		context.stroke();
		
		//------------ second row gold
		
		context.beginPath();
				
		context.moveTo(x + 235, y + 240);
		context.arc(x + 235, y + 240, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 236, y + 240);
		context.lineTo(x + 267, y + 240);	
		  
	    context.moveTo(x + 267, y + 241);		
		context.bezierCurveTo(x+259,y+252,x+281,y+253,x+274,y+239);  // first part 
		
		context.moveTo(x + 275, y + 238);
	    context.bezierCurveTo(x+264,y+253,x+288,y+253,x+281,y+239);//second part
		
		context.moveTo(x + 283, y + 238);
		context.bezierCurveTo(x+269,y+253,x+297,y+253,x+289,y+239);  // third part
		
		context.moveTo(x + 289, y + 239);
		context.bezierCurveTo(x+275,y+253,x+306,y+254,x+295,y+239);  // fourth part
		
		context.moveTo(x + 295, y + 239);
		context.bezierCurveTo(x+283,y+253,x+312,y+253,x+301,y+239);  // fifth part
		
		
		context.moveTo(x + 301, y + 240);
		context.lineTo(x + 317, y + 240);
		context.strokeStyle = "gold";
		context.stroke();
		
		//----------third row blue
		
		context.beginPath();
				
		context.moveTo(x + 235, y + 263);
		context.arc(x + 235, y + 263, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 236, y + 263);
		context.lineTo(x + 267, y + 263);
		
		
		 context.moveTo(x + 267, y + 264);		
		context.bezierCurveTo(x+259,y+275,x+281,y+274,x+274,y+262);  // first part 		
	
	
		context.moveTo(x + 275, y + 261);
	    context.bezierCurveTo(x+264,y+276,x+288,y+274,x+281,y+262);//second part
		
		context.moveTo(x + 283, y + 261);
		context.bezierCurveTo(x+269,y+276,x+297,y+276,x+289,y+262);  // third part
		
    	context.moveTo(x + 289, y + 262);
		context.bezierCurveTo(x+275,y+276,x+306,y+277,x+295,y+262);  // fourth part
		
		context.moveTo(x + 295, y + 262);
		context.bezierCurveTo(x+283,y+276,x+312,y+276,x+301,y+262);  // fifth part
		
		context.moveTo(x + 301, y + 263);
		context.lineTo(x + 317, y + 263);
		
        context.strokeStyle = "blue";
		context.stroke(); 
		//-----------


	}
	exp4b.toggleLine = function(flag, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flag == true) {
			exp4b.eraseLine1();
			exp4b.drawSlope1();
			// //alert('ON');
		} else {
			exp4b.eraseLine2();
			exp4b.drawSlope2();
		}
	}
	exp4b.eraseLine1 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(194, 268);
		context.lineTo(172, 260);
		context.moveTo(194, 318);
		context.lineTo(172, 309);
		context.moveTo(194, 368);
		context.lineTo(172, 359);
		context.moveTo(179, 263);
		context.lineTo(179, 363);
		context.moveTo(183, 265);
		context.lineTo(183, 365);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp4b.drawSlope1 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(194, 270);
		context.lineTo(172, 270);
		context.moveTo(194, 320);
		context.lineTo(172, 320);
		context.moveTo(194, 370);
		context.lineTo(172, 370);
		context.moveTo(179, 270);
		context.lineTo(179, 370);
		context.moveTo(183, 270);
		context.lineTo(183, 370);

		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	exp4b.eraseLine2 = function() {

		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(194, 270);
		context.lineTo(172, 270);
		context.moveTo(194, 320);
		context.lineTo(172, 320);
		context.moveTo(194, 370);
		context.lineTo(172, 370);
		context.moveTo(179, 270);
		context.lineTo(179, 370);
		context.moveTo(183, 270);
		context.lineTo(183, 370);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp4b.drawSlope2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(194, 268);
		context.lineTo(172, 260);
		context.moveTo(194, 318);
		context.lineTo(172, 309);
		context.moveTo(194, 368);
		context.lineTo(172, 359);
		context.moveTo(179, 263);
		context.lineTo(179, 363);
		context.moveTo(183, 265);
		context.lineTo(183, 365);

		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	exp4b.voltageUp = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		if(xPoint < 307.21099999999996) {
			for(var i = 0; i <= 2; i++) {
				context.moveTo(xPoint - 1.5, yPoint);
				context.lineTo(xPoint1 - 1.5, yPoint);
				this.canvas_arrow(context, xPoint - 1.5, yPoint, xPoint - 1.5, yPoint1 + 1.7);
				yPoint += 23;
				yPoint1 += 23;
			}

			context.lineWidth = "2";
			context.strokeStyle = "#FFFFFF";
			context.stroke();

			context.beginPath();
			xPoint += 0.353;
			//console.log("xPoint : " + xPoint); 
			yPoint = 314, yPoint1 = 309;

			for(var i = 0; i <= 2; i++) {
				context.moveTo(xPoint, yPoint);
				context.lineTo(xPoint1, yPoint);
				this.canvas_arrow(context, xPoint, yPoint, xPoint, yPoint1);
				yPoint += 23;
				yPoint1 += 23;
			}

			context.lineWidth = "2";
			context.strokeStyle = "black";
			context.stroke(); yPoint = 314, yPoint1 = 309;
			c += 5;
			//console.log("count :" + c);
		}

	}

	exp4b.voltageDown = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		if(xPoint > 272) {
			for(var i = 0; i <= 2; i++) {
				context.moveTo(xPoint + 1.5, yPoint);
				context.lineTo(xPoint1 + 1.5, yPoint);
				this.canvas_arrow(context, xPoint + 1.5, yPoint, xPoint + 1.5, yPoint1 + 1.7);
				yPoint += 23;
				yPoint1 += 23;
			}

			context.lineWidth = "2";
			context.strokeStyle = "#FFFFFF";
			context.stroke();

			context.beginPath();
			xPoint -= 0.353;
			console.log("xPoint : " + xPoint); yPoint = 314, yPoint1 = 309;

			for(var i = 0; i <= 2; i++) {
				context.moveTo(xPoint, yPoint);
				context.lineTo(xPoint1 + 2, yPoint);
				this.canvas_arrow(context, xPoint, yPoint, xPoint, yPoint1);
				yPoint += 23;
				yPoint1 += 23;
			}

			context.lineWidth = "2";
			context.strokeStyle = "black";
			context.stroke(); yPoint = 314, yPoint1 = 309;
			c -= 5;
			console.log("count :" + c);
		}

	}

	exp4b.TPSTOff = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(xPoint - 1.5, yPoint - 1.5);
		if(xPoint > 272) {
			console.log("xPoint : " + xPoint);

			for(var i = 0; i <= 2; i++) {
				context.moveTo(xPoint - 10, yPoint);
				context.lineTo(xPoint1 - 20, yPoint);
				this.canvas_arrow1(context, xPoint, yPoint, xPoint, yPoint1 - 0.7);
				yPoint += 23;
				yPoint1 += 23;
			} yPoint = 314, yPoint1 = 309;
			context.lineWidth = "2";
			context.strokeStyle = "#FFFFFF";
			context.stroke();

			context.beginPath();
			if(xPoint < 307.21099999999996) {
				for(var i = 0; i <= 2; i++) {
					context.moveTo(xPoint3 + 1.5, yPoint);
					context.lineTo(xPoint4 + 1.5, yPoint);
					this.canvas_arrow(context, xPoint3 + 1.5, yPoint, xPoint3 + 1.5, yPoint1 + 1.7);
					yPoint += 23;
					yPoint1 += 23;
				}

				context.lineWidth = "2";
				context.strokeStyle = "black";
				context.stroke(); yPoint = 314, yPoint1 = 309; xPoint = 272, xPoint1 = 358;

			}
		}

	}
	// Draw Arrow
	exp4b.canvas_arrow = function(context, fromx, fromy, tox, toy) {
		var headlen = 4;
		// length of head in pixels
		var angle = Math.atan2(toy - fromy, tox - fromx);
		context.moveTo(fromx, fromy);
		context.lineTo(tox, toy);
		context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
		context.moveTo(tox, toy);
		context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
	}
	
	exp4b.canvas_arrow1 = function(context, fromx, fromy, tox, toy) {
		var headlen = 10;
		// length of head in pixels
		var angle = Math.atan2(toy - fromy, tox - fromx);
		context.moveTo(fromx, fromy);
		context.lineTo(tox, toy);
		context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
		context.moveTo(tox, toy);
		context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
	}
	
	exp4b.switchVoltage = function(volCount, lineCurrent, firstWattReading, secondWattReading) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.font = "10pt Calibri";
		context.fillStyle = "yellow";
		context.fillRect(x - 531, y - 11, 38, 11);
		context.fillStyle = "black";
		context.fillText(volCount + "V", x - 527, y - 1);
		context.fillStyle = "yellow";
		context.fillRect(x - 476, y - 66, 37, 11);
		context.fillStyle = "black";
		context.fillText(lineCurrent + "A", x - 472, y - 57);
		if(firstWattReading > 0) {
			context.fillStyle = "yellow";
			context.fillRect(x - 318, y - 79, 62, 11);
			context.fillStyle = "black";
			context.fillText(firstWattReading + "W", x - 315, y - 70);
			context.clearRect(x - 400, y - 94, 72, 12);

		} else {
			context.fillStyle = "yellow";
			context.fillRect(x - 318, y - 79, 62, 11);
			context.fillStyle = "black";
			context.fillText(Math.abs(firstWattReading) + "W", x - 315, y - 70);
			context.fillStyle = "red";
			context.fillText("Negative", x - 380, y - 73);
			context.fillStyle = "black";

		}
		context.fillStyle = "yellow";
		context.fillRect(x - 318, y + 101, 62, 11);
		context.fillStyle = "black";
		context.fillText(secondWattReading + "W", x - 318, y + 110);
	}
	exp4b.init = function(canid) {
		globalObject.canvas = document.getElementById(canid);
		globalObject.context = globalObject.canvas.getContext("2d");
		exp4b.firstPoint();

	}
})(exp4bcanvas);
