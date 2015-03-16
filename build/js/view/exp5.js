var exp5canvas = exp5 = exp5canvas || {}; (function(exp5) {
	var yPoint = 314, yPoint1 = 306, xPoint = 272, xPoint1 = 358, c = 0,xPoint3 = 272, xPoint4 = 337, yPoint4 = 314, yPoint5 = 309;
	var globalObject = {
		x : 5,
		y : 80,
		x1 : 60,
		y1 : 70,
		x2 : 15,
		y2 : 72,
	}
	exp5.firstPoint = function() {
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

		//voltmeter
		globalObject.x = globalObject.x + 130;
		globalObject.y = globalObject.y - 33;
		acvoltmetercanvas.drawPoint(globalObject);
		acvoltmetercanvas.drawRectangle(globalObject);

		//ac ammeter
		globalObject.x = globalObject.x + 50;
		globalObject.y = globalObject.y - 32;
		miammaccanvas.firstPoint(globalObject);
		miammaccanvas.drawRectangle(globalObject);

		//wattmeter
		globalObject.x = globalObject.x + 130;
		globalObject.y = globalObject.y;
		wattmetercanvas.drawRect(globalObject);
		wattmetercanvas.drawLine(globalObject);
		wattmetercanvas.drawZig(globalObject);
		wattmetercanvas.drawCoil(globalObject);
		wattmetercanvas.drawValueRect(globalObject);
		//wattmeter
		globalObject.y = globalObject.y + 180;
		wattmetercanvas.drawRect(globalObject);
		wattmetercanvas.drawLine(globalObject);
		wattmetercanvas.drawZig(globalObject);
		wattmetercanvas.drawCoil(globalObject);
		wattmetercanvas.drawValueRect(globalObject);

		// squirrel cage induction motor
		globalObject.x = globalObject.x + 170;
		globalObject.y = globalObject.y + 80;
		squirrotorcanvas.drawRectangle(globalObject);
		squirrotorcanvas.drawPoints(globalObject);
		squirrotorcanvas.drawEllipse(globalObject);
		squirrotorcanvas.drawCircles(globalObject);
		squirrotorcanvas.connectCircles(globalObject);

		// coupling
		globalObject.x = globalObject.x + 145;
		globalObject.y = globalObject.y + 7;
		couplingcanvas.drawRectangle(globalObject);

		//self excited DC generator
		globalObject.x = globalObject.x + 109;
		globalObject.y = globalObject.y - 20;
		selfexcdccanvas.drawRectangle(globalObject);
		selfexcdccanvas.drawCoil(globalObject);

		// dc ammeter
		globalObject.x = globalObject.x + 20;
		globalObject.y = globalObject.y - 50;
		miammdccanvas.firstPoint(globalObject);
		miammdccanvas.drawRectangle(globalObject);
		// voltmeter dc
		globalObject.x = globalObject.x + 160;
		globalObject.y = globalObject.y + 13;
		mivoltdccanvas.firstPoint(globalObject);
		mivoltdccanvas.drawRectangle(globalObject);

		// single phase resistive load
		globalObject.x = globalObject.x + 30;
		globalObject.y = globalObject.y + 17;
		spresisloadcanvas.drawLine(globalObject);
		spresisloadcanvas.drawPoint(globalObject);
		spresisloadcanvas.zigzag(globalObject);
		spresisloadcanvas.middleLine(globalObject);

		//techometere
		globalObject.x = globalObject.x - 620;
		globalObject.y = globalObject.y + 47;
		globalObject.x1 = globalObject.x1 + 532;
		globalObject.y1 = globalObject.y1 + 435;
		globalObject.x2 = globalObject.x2 + 652;
		globalObject.y2 = globalObject.y2 + 435;
		tachometercanvas.drawRectangle(globalObject);
		tachometercanvas.drawLineMirror(globalObject);
		tachometercanvas.drawCurvesMirror(globalObject);
		//
		// //-----------------------------------DRAWING LINES--------------------------------

		context.moveTo(x + 122, y + 190);
		context.lineTo(x + 122, y + 200);
		context.moveTo(x + 121, y + 190);
		context.lineTo(x + 121, y + 201);

		context.moveTo(x + 235, y + 189);
		context.lineTo(x + 235, y + 215);
		context.moveTo(x + 235, y + 260);
		context.lineTo(x + 235, y + 290);

		context.moveTo(x + 320, y + 234);
		context.lineTo(x + 360, y + 234);
		context.lineTo(x + 360, y + 142);
		context.lineTo(x + 426, y + 142);

		//middle line to slipping motor
		context.moveTo(x + 320, y + 257);
		context.lineTo(x + 753, y + 257);
		context.lineTo(x + 753, y + 317);
		context.moveTo(x + 753, y + 328);
		context.lineTo(x + 753, y + 366);

		//two small hor lines for slipping rotor
		context.moveTo(x + 744, y + 365);
		context.lineTo(x + 760, y + 365);
		context.moveTo(x + 770, y + 365);
		context.lineTo(x + 786, y + 365);

		context.moveTo(x + 732, y + 362);
		context.lineTo(x + 732, y + 336);
		context.lineTo(x + 797, y + 336);
		context.lineTo(x + 797, y + 362);

		//short circuit lines from V to V
		context.moveTo(x + 670, y + 184);
		context.lineTo(x + 670, y + 250);
		context.moveTo(x + 670, y + 264);
		context.lineTo(x + 670, y + 315);
		context.moveTo(x + 670, y + 328);
		context.lineTo(x + 670, y + 360);

		context.moveTo(x + 347, y + 280);
		context.lineTo(x + 360, y + 280);
		context.lineTo(x + 360, y + 322);
		context.lineTo(x + 550, y + 322);

		context.moveTo(x + 670, y + 322);
		context.lineTo(x + 779, y + 322);
		context.lineTo(x + 779, y + 331);
		context.moveTo(x + 779, y + 340);
		context.lineTo(x + 779, y + 365);

		context.moveTo(x + 672, y + 142);
		context.lineTo(x + 706, y + 142);
		context.lineTo(x + 706, y + 252);
		context.moveTo(x + 706, y + 263);
		context.lineTo(x + 706, y + 317);
		context.moveTo(x + 706, y + 325);
		context.lineTo(x + 706, y + 365);
		context.lineTo(x + 735, y + 365);

		context.moveTo(x + 1127, y + 339);
		context.lineTo(x + 1169, y + 339);

		context.moveTo(x + 1161, y + 370);
		context.lineTo(x + 1161, y + 340);

		context.moveTo(x + 1176, y + 500);
		context.lineTo(x + 969, y + 500);
		context.lineTo(x + 969, y + 470);

		context.moveTo(x + 1161, y + 465);
		context.lineTo(x + 1161, y + 500);

		context.moveTo(x + 1002, y + 339);
		context.lineTo(x + 969, y + 339);
		context.lineTo(x + 969, y + 392);
		x = x + 644;
		y = y + 202;
		context.moveTo(x + 25, y + 50);
		context.bezierCurveTo(x + 30, y + 48, x + 30, y + 45, x + 38, y + 50);
		context.bezierCurveTo(x + 41, y + 56, x + 41, y + 54, x + 38, y + 60);
		context.bezierCurveTo(x + 35, y + 61, x + 32, y + 66, x + 25, y + 60);
		x = x;
		y = y + 65;
		context.moveTo(x + 25, y + 50);
		context.bezierCurveTo(x + 30, y + 48, x + 30, y + 45, x + 38, y + 50);
		context.bezierCurveTo(x + 41, y + 56, x + 41, y + 54, x + 38, y + 60);
		context.bezierCurveTo(x + 35, y + 61, x + 32, y + 66, x + 25, y + 60);
		x = x + 84;
		y = y;
		context.moveTo(x + 25, y + 50);
		context.bezierCurveTo(x + 30, y + 48, x + 30, y + 45, x + 38, y + 50);
		context.bezierCurveTo(x + 41, y + 56, x + 41, y + 54, x + 38, y + 60);
		context.bezierCurveTo(x + 35, y + 61, x + 32, y + 66, x + 25, y + 60);
		x = x - 48;
		y = y - 65;
		context.moveTo(x + 25, y + 50);
		context.bezierCurveTo(x + 30, y + 48, x + 30, y + 45, x + 38, y + 50);
		context.bezierCurveTo(x + 41, y + 56, x + 41, y + 54, x + 38, y + 60);
		context.bezierCurveTo(x + 35, y + 61, x + 32, y + 66, x + 25, y + 60);
		x = x;
		y = y + 65;
		context.moveTo(x + 25, y + 50);
		context.bezierCurveTo(x + 30, y + 48, x + 30, y + 45, x + 38, y + 50);
		context.bezierCurveTo(x + 41, y + 56, x + 41, y + 54, x + 38, y + 60);
		context.bezierCurveTo(x + 35, y + 61, x + 32, y + 66, x + 25, y + 60);
		x = x + 74;
		y = y + 14;
		context.moveTo(x + 25, y + 50);
		context.bezierCurveTo(x + 30, y + 48, x + 30, y + 45, x + 38, y + 50);
		context.bezierCurveTo(x + 41, y + 56, x + 41, y + 54, x + 38, y + 60);
		context.bezierCurveTo(x + 35, y + 61, x + 32, y + 66, x + 25, y + 60);

		context.rect(x - 180, y + 110, 80, 20);
		context.font = "17pt Calibri";
		context.fillText("", x - 750, y - 310);
		context.fillText("Circuit Diagram: Experimental set-up for load test on Induction Motor(Squirrel Cage)", x - 750, y - 270);

		context.lineWidth = "2";
		context.strokeStyle = "Black";
		context.stroke();

	}
	exp5.toggleLine = function(flag, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flag == true) {
			exp5.eraseLine1();
			exp5.drawSlope1();
			// //alert('ON');
		} else {
			exp5.eraseLine2();
			exp5.drawSlope2();
		}
	}
	exp5.eraseLine1 = function() {
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

	exp5.drawSlope1 = function() {
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

	exp5.eraseLine2 = function() {

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

	exp5.drawSlope2 = function() {
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
	exp5.toggleMainLoad = function(flagMainLoadExp5, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagMainLoadExp5 == true) {
			var context = globalObject.context, x = globalObject.x, y = globalObject.y;
			context.beginPath();

			// context.moveTo(1283,322);
			// context.lineTo(1292,308);
			context.moveTo(1252, 442);
			context.lineTo(1264, 430);
			context.lineWidth = "5";
			context.strokeStyle = "#FFFFFF";
			context.stroke();

			context.beginPath();
			// context.moveTo(1283,322);
			// context.lineTo(1283,308);
			context.moveTo(1252, 442);
			context.lineTo(1252, 430);
			context.lineWidth = "2";
			context.strokeStyle = "black";
			context.stroke();

		} else {

			var context = globalObject.context, x = globalObject.x, y = globalObject.y;
			context.beginPath();

			// context.moveTo(1282,322);
			// context.lineTo(1282,310);
			context.moveTo(1252, 442);
			context.lineTo(1252, 430);
			context.lineWidth = "5";
			context.strokeStyle = "#FFFFFF";
			context.stroke();

			context.beginPath();
			context.moveTo(1251, 442);
			context.lineTo(1264, 430);
			context.lineWidth = "2";
			context.strokeStyle = "black";
			context.stroke();
		}
	}

	exp5.toggleLoad1 = function(flagLoad1Exp5, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagLoad1Exp5 == true) {

			var context = globalObject.context, x = globalObject.x, y = globalObject.y;
			context.beginPath();

			context.moveTo(1201, 492);
			context.lineTo(1206, 478);
			context.lineWidth = "5";
			context.strokeStyle = "#FFFFFF";
			context.stroke();

			context.beginPath();
			context.moveTo(1201, 493);
			context.lineTo(1201, 479);
			context.lineWidth = "2";
			context.strokeStyle = "black";
			context.stroke();

		} else {
			var context = globalObject.context, x = globalObject.x, y = globalObject.y;
			context.beginPath();

			context.moveTo(1201, 493);
			context.lineTo(1201, 479);
			context.lineWidth = "5";
			context.strokeStyle = "#FFFFFF";
			context.stroke();

			context.beginPath();
			context.moveTo(1201, 493);
			context.lineTo(1207, 479);
			context.lineWidth = "2";
			context.strokeStyle = "black";
			context.stroke();
		}
	}

	exp5.toggleLoad2 = function(flagLoad2Exp5, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagLoad2Exp5 == true) {
			var context = globalObject.context, x = globalObject.x, y = globalObject.y;
			context.beginPath();

			context.moveTo(1226, 493);
			context.lineTo(1232, 478);
			context.lineWidth = "5";
			context.strokeStyle = "#FFFFFF";
			context.stroke();

			context.beginPath();
			context.moveTo(1226, 493);
			context.lineTo(1226, 478);
			context.lineWidth = "2";
			context.strokeStyle = "black";
			context.stroke();

		} else {

			var context = globalObject.context, x = globalObject.x, y = globalObject.y;
			context.beginPath();

			context.moveTo(1226, 493);
			context.lineTo(1226, 478);
			context.lineWidth = "5";
			context.strokeStyle = "#FFFFFF";
			context.stroke();

			context.beginPath();
			context.moveTo(1226, 493);
			context.lineTo(1232, 478);
			context.lineWidth = "2";
			context.strokeStyle = "black";
			context.stroke();
		}
	}

	exp5.toggleLoad3 = function(flagLoad3Exp5, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagLoad3Exp5 == true) {
			var context = globalObject.context, x = globalObject.x, y = globalObject.y;
			context.beginPath();

			context.moveTo(1251, 493);
			context.lineTo(1257, 478);
			context.lineWidth = "5";
			context.strokeStyle = "#FFFFFF";
			context.stroke();

			context.beginPath();
			context.moveTo(1251, 493);
			context.lineTo(1251, 478);
			context.lineWidth = "2";
			context.strokeStyle = "black";
			context.stroke();

		} else {

			var context = globalObject.context, x = globalObject.x, y = globalObject.y;
			context.beginPath();

			context.moveTo(1251, 493);
			context.lineTo(1251, 478);
			context.lineWidth = "5";
			context.strokeStyle = "#FFFFFF";
			context.stroke();

			context.beginPath();
			context.moveTo(1251, 493);
			context.lineTo(1257, 478);
			context.lineWidth = "2";
			context.strokeStyle = "black";
			context.stroke();
		}
	}

	exp5.toggleLoad4 = function(flagLoad4Exp5, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagLoad4Exp5 == true) {
			var context = globalObject.context, x = globalObject.x, y = globalObject.y;
			context.beginPath();

			context.moveTo(1276, 493);
			context.lineTo(1281, 478);
			context.lineWidth = "5";
			context.strokeStyle = "#FFFFFF";
			context.stroke();

			context.beginPath();
			context.moveTo(1276, 493);
			context.lineTo(1276, 478);
			context.lineWidth = "2";
			context.strokeStyle = "black";
			context.stroke();

		} else {

			var context = globalObject.context, x = globalObject.x, y = globalObject.y;
			context.beginPath();

			context.moveTo(1276, 493);
			context.lineTo(1276, 478);
			context.lineWidth = "5";
			context.strokeStyle = "#FFFFFF";
			context.stroke();

			context.beginPath();
			context.moveTo(1276, 493);
			context.lineTo(1281, 478);
			context.lineWidth = "2";
			context.strokeStyle = "black";
			context.stroke();
		}
	}

	exp5.toggleLoad5 = function(flagLoad5Exp5, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagLoad5Exp5 == true) {
			var context = globalObject.context, x = globalObject.x, y = globalObject.y;
			context.beginPath();

			context.moveTo(1301, 493);
			context.lineTo(1307, 478);
			context.lineWidth = "5";
			context.strokeStyle = "#FFFFFF";
			context.stroke();

			context.beginPath();
			context.moveTo(1301, 493);
			context.lineTo(1301, 478);
			context.lineWidth = "2";
			context.strokeStyle = "black";
			context.stroke();

		} else {

			var context = globalObject.context, x = globalObject.x, y = globalObject.y;
			context.beginPath();

			context.moveTo(1301, 493);
			context.lineTo(1301, 478);
			context.lineWidth = "5";
			context.strokeStyle = "#FFFFFF";
			context.stroke();

			context.beginPath();
			context.moveTo(1301, 493);
			context.lineTo(1307, 478);
			context.lineWidth = "2";
			context.strokeStyle = "black";
			context.stroke();
		}
	}
	exp5.switchVoltage = function(voltageCount,Nr,Vt,Il,Iml,firstWattReading,secondWattReading) {

		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.font = "10pt Calibri";
		context.fillStyle = "yellow";
		context.fillRect(x - 189, y - 250, 36, 11);
		context.fillStyle = "black";
		context.fillText(voltageCount + "V", x - 187, y - 240);
		context.fillStyle = "yellow";
		context.fillRect(x - 134, y - 305, 36, 11);
		context.fillStyle = "black";
		context.fillText(Iml.toFixed(2)+"A", x - 130, y - 296);
		context.fillStyle = "yellow";
		context.fillRect(x + 23, y - 318, 61, 11);
		context.fillStyle = "black";
		context.fillText(firstWattReading+"W", x + 25, y - 310);
		context.fillStyle = "yellow";
		context.fillRect(x + 23, y - 138, 61, 11);
		context.fillStyle = "black";
		context.fillText(secondWattReading+"W", x + 25, y - 129);
		context.fillStyle = "yellow";
		context.fillRect(x + 425, y - 100, 46, 13);
		context.fillStyle = "black";
		context.fillText(Il.toFixed(2) + "A", x + 427, y - 90);
		context.fillStyle = "yellow";
		context.fillRect(x + 547, y - 27, 36, 11);
		context.fillStyle = "black";
		context.fillText(Vt.toFixed(0) + "V", x + 550, y - 18);
		context.fillStyle = "yellow";
		context.fillRect(x + 5, y - 23, 75, 16);
		context.fillStyle = "black";
		context.fillText(Nr.toFixed(0) + "r.p.m", x + 8, y - 13);

	}
	
	exp5.voltageUp = function(flagExp5Tpst){
			var context = globalObject.context, x = globalObject.x, y = globalObject.y;
			  context.beginPath();
			
			  if(xPoint < 307.21099999999996){
			   for(var i=0;i<=2;i++)
			   {
			    context.moveTo(xPoint-1.5,yPoint);
			    context.lineTo(xPoint1-1.5,yPoint);
			    this.canvas_arrow(context,xPoint-1.5,yPoint,xPoint-1.5,yPoint1+1.7);
			       
			    yPoint += 23;
			    yPoint1 +=23;
			   }
			   
			   context.lineWidth = "2" ;
			   context.strokeStyle = "#FFFFFF";
			   context.stroke ();
			   
			   context.beginPath();
			   xPoint += 0.353;
			   console.log("xPoint : "+ xPoint);
			   yPoint = 314, yPoint1 = 309;
			   
			   for(var i=0;i<=2;i++)
			   {
			    context.moveTo(xPoint,yPoint);
			    context.lineTo(xPoint1,yPoint);
			    this.canvas_arrow(context,xPoint,yPoint,xPoint,yPoint1);
			       
			    yPoint += 23;
			    yPoint1 +=23;
			   }
			   
			   context.lineWidth = "2" ;
			   context.strokeStyle = "black";
			   context.stroke ();
			   
			   yPoint = 314, yPoint1 = 309;c+=5;console.log("count :"+c);
			  }
		     
			  
 		}
 
	 exp5.voltageDown = function(){
		  var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		    context.beginPath();
		  
		  if(xPoint > 272){
		   for(var i=0;i<=2;i++)
		   {
		    context.moveTo(xPoint+1.5,yPoint);
		    context.lineTo(xPoint1+1.5,yPoint);
		    this.canvas_arrow(context,xPoint+1.5,yPoint,xPoint+1.5,yPoint1+1.7);
		       
		    yPoint += 23;
		    yPoint1 +=23;
		   }
		   
		   context.lineWidth = "2" ;
		   context.strokeStyle = "#FFFFFF";
		   context.stroke ();
		   
		   context.beginPath();
		   xPoint -= 0.353;
		   console.log("xPoint : "+ xPoint);
		   yPoint = 314, yPoint1 = 309;
		   
		   for(var i=0;i<=2;i++)
		   {
		    context.moveTo(xPoint,yPoint);
		    context.lineTo(xPoint1+2,yPoint);
		    this.canvas_arrow(context,xPoint,yPoint,xPoint,yPoint1);		       
		    yPoint += 23;
		    yPoint1 +=23;
		   }
		   
		   context.lineWidth = "2" ;
		   context.strokeStyle = "black";
		   context.stroke ();
		   
		   yPoint = 314, yPoint1 = 309;c-=5;console.log("count :"+c);
		  }
		     
			  
 		}
 		
 		
 	exp5.TPSTOff = function() {
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
 		
 	 exp5.canvas_arrow  = function(context, fromx, fromy, tox, toy){
		  var headlen =4;   // length of head in pixels
		  var angle = Math.atan2(toy-fromy,tox-fromx);
		  context.moveTo(fromx, fromy);
		  context.lineTo(tox, toy);
		  context.lineTo(tox-headlen*Math.cos(angle-Math.PI/6),toy-headlen*Math.sin(angle-Math.PI/6));
		  context.moveTo(tox, toy);
		  context.lineTo(tox-headlen*Math.cos(angle+Math.PI/6),toy-headlen*Math.sin(angle+Math.PI/6));
	 }
	 
	 
	 exp5.canvas_arrow1 = function(context, fromx, fromy, tox, toy) {
		var headlen = 10;
		// length of head in pixels
		var angle = Math.atan2(toy - fromy, tox - fromx);
		context.moveTo(fromx, fromy);
		context.lineTo(tox, toy);
		context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
		context.moveTo(tox, toy);
		context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
	}
 		
	exp5.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		exp5.firstPoint();

	}
})(exp5canvas);
