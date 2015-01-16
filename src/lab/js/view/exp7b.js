var exp7bcanvas = exp7b = exp7bcanvas || {}; 
(function(exp7b) {
	var globalObject = {
		x : 5,
		y : 80,
		x1 : 60,
		y1 : 70,
		x2 : 15,
		y2 : 72

	}
	var xPoint = 316.36, recXPoint = 311.36;
	var motorXPoint = 314.68, motorRecXPoint = 309.68, t1, t2, t3, t4;
	exp7b.firstPoint = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		//1 st fig.
		//dc dixed voltage
		globalObject.y = globalObject.y + 70;
		dcvoltagecanvas.drawPoint(globalObject);
		//dpst
		globalObject.x = globalObject.x + 50;
		globalObject.y = globalObject.y - 1;
		dpstcanvas.firstRow(globalObject);
		dpstcanvas.secondRow(globalObject);
		dpstcanvas.switchDpst(globalObject);
		//rheostat
		globalObject.x = globalObject.x + 175;
		globalObject.y = globalObject.y + 10;
		rheostatcanvas.drawPoint(globalObject);
		rheostatcanvas.drawCurves(globalObject);
		rheostatcanvas.control(globalObject);
		//dc ammeter
		globalObject.x = globalObject.x + 150;
		globalObject.y = globalObject.y - 40;
		miammdccanvas.firstPoint(globalObject);
		miammdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("I", x + 450, y + 25);
		context.font = "8pt Calibri";
		context.fillText("FA", x + 454, y + 28);
		//dc voltmeter
		globalObject.x = globalObject.x + 123;
		globalObject.y = globalObject.y - 20;
		mivoltdccanvas.firstPoint(globalObject);
		mivoltdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("V", x + 520, y + 93);
		context.font = "8pt Calibri";
		context.fillText("FA", x + 528, y + 96);
		//2nd fig.
		//dc dixed voltage
		globalObject.x = globalObject.x - 500;
		globalObject.y = globalObject.y + 240;
		dcvoltagecanvas.drawPoint(globalObject);
		//dpst
		globalObject.x = globalObject.x + 50;
		globalObject.y = globalObject.y - 1;
		dpstcanvas.firstRow(globalObject);
		dpstcanvas.secondRow(globalObject);
		dpstcanvas.switchDpst(globalObject);
		//rheostat
		globalObject.x = globalObject.x + 175;
		globalObject.y = globalObject.y + 10;
		rheostatcanvas.drawPoint(globalObject);
		rheostatcanvas.drawCurves(globalObject);
		rheostatcanvas.control(globalObject);
		//dc ammeter
		globalObject.x = globalObject.x + 150;
		globalObject.y = globalObject.y - 40;
		miammdccanvas.firstPoint(globalObject);
		//miammdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("I", x + 400, y + 250);
		context.font = "8pt Calibri";
		context.fillText("ASH", x + 403, y + 255);
		//dc voltmeter
		globalObject.x = globalObject.x + 123;
		globalObject.y = globalObject.y - 20;
		mivoltdccanvas.firstPoint(globalObject);
		mivoltdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("V", x + 450, y + 290);
		context.font = "8pt Calibri";
		context.fillText("ASH", x + 456, y + 293);
		//self excited
		globalObject.x = globalObject.x + 56;
		globalObject.y = globalObject.y + 30;
		selfexcdccanvas.drawRectangle(globalObject);
		selfexcdccanvas.drawCoil(globalObject);
		//coupling
		globalObject.x = globalObject.x + 145;
		globalObject.y = globalObject.y + 17;
		couplingcanvas.drawRectangle(globalObject);
		//salient pole rotor
		globalObject.x = globalObject.x + 110;
		globalObject.y = globalObject.y + 3;
		salientrotorcanvas.drawRectangle(globalObject);
		salientrotorcanvas.drawPoints(globalObject);
		salientrotorcanvas.drawCurves(globalObject);
		salientrotorcanvas.drawSpirals(globalObject);
	
		//tachometer
		globalObject.x = globalObject.x + 140;
		globalObject.y = globalObject.y + 6;
		globalObject.x1 = globalObject.x1 + 905;
		globalObject.y1 = globalObject.y1 + 280;
		globalObject.x2 = globalObject.x2 + 912;
		globalObject.y2 = globalObject.y2 + 284;
		tachometercanvas.drawRectangle(globalObject);
		tachometercanvas.drawLine(globalObject);
		tachometercanvas.drawCurves(globalObject);

		//ammetter ac
		globalObject.x = globalObject.x - 140;
		globalObject.y = globalObject.y - 108;
		miammaccanvas.VerticalFig(globalObject);
		//text box
		// x = globalObject.x,
		// y = globalObject.y;
		//context.beginPath();
		context.rect(x + 740, y + 152, 50, 18);
		context.font = "11pt Calibri";
		context.fillText("I", x + 747, y + 185);
		context.font = "8pt Calibri";
		context.fillText("SC", x + 750, y + 186);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();

		context.rect(x + 950, y + 240, 79, 17);
		context.fillText(+"r.p.m", x + 964, y + 253);
	   
	    context.rect(x+360,y+200,55,18);//amp reactangle
		 context.fillStyle="yellow";
		 context.lineWidth = "2";
		 context.strokeStyle = "black";
		 context.stroke();
	 		

		context.beginPath(); 
		context.moveTo(x+160 , y+49);
		context.lineTo(x+212 , y+49);
		context.lineTo(x+212 , y+120);
		context.strokeStyle = "red";
		context.stroke();
		
		context.beginPath(); 
		context.moveTo(x+162 , y+142);
		context.lineTo(x+162 , y+180);
		context.lineTo(x+498 , y+180);
		context.lineTo(x+498 , y+127);
		context.strokeStyle="black";
		context.stroke();
		
		context.beginPath(); 
		context.moveTo(x+312 , y+90);
		context.lineTo(x+312 , y+40);
	    context.lineTo(x+372 , y+40);
	    context.fillStyle="black";
        context.fillRect(x+307 ,y+89,9,7);
		context.strokeStyle="red";
		context.stroke();
		
		context.beginPath(); 
		context.moveTo(x+341 , y+121);
		context.lineTo(x+405 , y+121);
		context.lineTo(x+405 , y+180);
		//context.moveTo(x+807, y + 157);
		//context.lineTo(x+807, y + 203);
		context.moveTo(x + 807, y + 159);
		context.arc(x+807, y + 156, 1.5, 0, 2 * Math.PI, false);
		//context.lineWidth="2";
		context.strokeStyle="black";
		context.stroke();
		
		context.beginPath();
		context.moveTo(x+160 , y+238);
		context.lineTo(x+210 , y+238);
		context.lineTo(x+210 , y+313);
		context.strokeStyle="red";
		context.stroke();
		
		context.beginPath();
		context.moveTo(x+160 , y+330);
		context.lineTo(x+160 , y+380);
		context.lineTo(x+540 , y+380);
		context.lineTo(x+540 , y+327);
	//	context.moveTo(x+495 , y+227);
		///context.lineTo(x+540 , y+227);
		//context.lineTo(x+540 , y+240);
		context.strokeStyle="black";
		context.stroke();
		
	    context.beginPath();
	    context.moveTo(x+310 , y+280);
		context.lineTo(x+310 , y+228);
		context.lineTo(x+372 , y+228);
		context.fillRect(x+305 ,y+278,9,6);
		context.lineWidth="2";
		context.strokeStyle="red";
		context.stroke();
	
		context.beginPath();
		context.moveTo(x+496 , y+320);
		context.lineTo(x+496 , y+380);
		
		context.moveTo(x+334 , y+310);
		context.lineTo(x+410 , y+310);
		context.lineTo(x+410 , y+380);
		context.strokeStyle="black";
		context.stroke();
		
		context.beginPath();
		context.moveTo(x+452 , y+228);
		context.lineTo(x+496 , y+228);
		//context.lineTo(x+496 , y+250);
		context.lineTo(x+540 , y+228);
		context.lineTo(x+540 , y+263);
		context.moveTo(x+500 , y+38);
		context.lineTo(x+874 , y+38);
		context.lineTo(x+874 , y+205);
		context.strokeStyle="red";
		context.stroke();
		
		context.beginPath();
		context.moveTo(x+500 , y+130);
		context.lineTo(x+870 , y+130);
		context.moveTo(x+881 , y+130);
		context.lineTo(x+900 , y+130);
		context.lineTo(x+900 , y+206);
		context.lineTo(x+887 , y+206);
		
		context.moveTo(x+817 , y+203);
		context.lineTo(x+817 , y+185);
		context.lineTo(x+862 , y+185);
		context.lineTo(x+862 , y+203);
		context.lineWidth="2";
		context.strokeStyle="black";
		context.stroke();
		
		context.beginPath();//red lines
		context.moveTo(x+807,y+205);
		context.lineTo(x+807,y+237);
		//context.arc(x+807, y + 206, 1.5, 0, 2 * Math.PI, false);
		//context.arc(x+818, y + 206, 1.5, 0, 2 * Math.PI, false);
		context.moveTo(x+818,y+205);
		context.lineTo(x+818,y+237);
		context.lineWidth="2";
		context.strokeStyle="red";
		context.stroke();
		
		context.beginPath();
		context.moveTo(x+829 , y+188);// yellow lines
		//context.lineTo(x+828 , y+203);	
		context.lineTo(x+829 , y+237);
		context.arc(x+829, y + 206, 1.5, 0, 2 * Math.PI, false);
		context.moveTo(x+840 , y+186); 
		context.lineTo(x+840 , y+237);	
		context.arc(x+840, y + 206, 1.5, 0, 2 * Math.PI, false);
		context.lineWidth="2";
		context.strokeStyle="#FFD700";
		context.stroke();
		
		context.beginPath();//blue lines
		context.moveTo(x+851 , y+188);
		context.lineTo(x+851 , y+237);
		//context.arc(x+851, y + 206, 1.5, 0, 2 * Math.PI, false);
		context.moveTo(x+862, y+205 );
		context.lineTo(x+862 , y+237);
		context.lineWidth="2";
		context.strokeStyle="blue";
		context.stroke();
		
		context.beginPath();
		context.moveTo(x+806 , y+156);
		context.lineTo(x+851 , y+156);	
		
		context.fillStyle = "black";
		context.fillText("+", x + 63, y + 40);
		context.fillText("-", x + 63, y + 150);
		context.fillText("+", x + 63, y + 230);
		context.fillText("-", x + 63, y + 340);

		context.fillText("220V", x + 69, y + 100);
		context.fillText("D.C.", x + 70, y + 110);

		context.fillText("440V", x + 69, y + 280);
		context.fillText("D.C.", x + 70, y + 290);

		context.font = "13pt Calibri";
		context.fillText(" DC Shunt Motor ", x + 542, y + 360);
		context.fillStyle = "black";

		context.font = "13pt Calibri";
		context.fillText(" Alternator ", x + 802, y + 360);
		context.fillStyle = "black";

		context.font = "15pt Calibri";
		context.fillText(" DC Shunt Motor  Ratings :  ", x, y + 500);
		context.font = "11pt Calibri";
		context.fillText(" Field Voltage (max) = 220V  ", x + 8, y + 530);
		context.fillText("Armature Voltage (max) = 440V  ", x + 12, y + 550);
		context.fillText("Capacity = 5 HP ", x + 12, y + 570);
		context.fillText("DC Field Current(max) =  2.3 Amp  ", x + 12, y + 590);
		context.fillText("Armature Current(max) =  9.5 Amp  ", x + 12, y + 610);
		context.fillText("Speed = 1500-2000 R.P.M  ", x + 10, y + 630);
		context.fillStyle = "black";

		context.font = "15pt Calibri";
		context.fillText(" Alternator  Ratings :  ", x + 390, y + 500);
		context.font = "11pt Calibri";
		context.fillText(" Rating = 3 KVA  ", x + 396, y + 530);
		context.fillText("Phase = 3  ", x + 400, y + 550);
		context.fillText("Frequency = 50 Hz ", x + 400, y + 570);
		context.fillText("Winding - Delta  ", x + 400, y + 590);
		context.fillText("Armature Voltage = 415V   ", x + 400, y + 610);
		context.fillText("Armature Current = 4.2 Amp ", x + 398, y + 630);
		context.fillText("Excitation voltage = 220V ", x + 400, y + 650);
		context.fillText("Speed=1500 R.P.M ", x + 400, y + 670);
		context.fillText("No.of poles = 4 ", x + 400, y + 690);
		context.fillStyle = "black";

		//added by shubhangi

		context.font = "15pt Calibri";
		context.fillText(" Abbrivations :  ", x + 690, y + 500);
		context.font = "11pt Calibri";
		context.fillText("I", x + 700, y + 530);
		context.fillText("V", x + 700, y + 550);
		context.fillText("V", x + 700, y + 570);
		context.fillText("I", x + 700, y + 590);
		context.fillText("I", x + 700, y + 610);

		context.font = "8pt Calibri";
		context.fillText("ASH", x + 703, y + 532);
		context.fillText("ASH", x + 705, y + 552);
		context.fillText("FA ", x + 707, y + 572);
		context.fillText("FA ", x + 703, y + 592);
		context.fillText("SC ", x + 703, y + 611);

		context.font = "11pt Calibri";
		context.fillText(" = Armature current of DC shunt motor ", x + 720, y + 530);
		context.fillText(" = Armature voltage of DC shunt motor  ", x + 720, y + 550);
		context.fillText(" = Field voltage of an alternator ", x + 720, y + 570);
		context.fillText(" = Field current of an Alternator", x + 720, y + 590);
		context.fillText(" = Short circuit current of an Alternator ", x + 720, y + 610);
		context.fillStyle = "black";

		context.font = "17pt Calibri";
		//context.fillText("Experiment No. 7(b):", x + 5, y - 50);
		context.fillText("Circuit Diagram: Short Circuit test on three phase Alternator", x + 5, y - 20);
		x = x + 810;
		y = y + 105;
		context.moveTo(x + 60, y + 25);
		context.bezierCurveTo(x + 56, y + 20, x + 55, y + 20, x + 60, y + 12);
		context.bezierCurveTo(x + 66, y + 9, x + 64, y + 9, x + 70, y + 12);
		context.bezierCurveTo(x + 71, y + 15, x + 76, y + 18, x + 70, y + 25);
		x = x - 3;
		y = y + 152;
		context.moveTo(x + 23, y - 102);
		context.arc(x + 21, y - 102, 1.5, 0, 2 * Math.PI, false);//yellow dot
		
		context.moveTo(x + 45, y - 102);
		context.arc(x + 43, y - 102, 1.5, 0, 2 * Math.PI, false);//blue dot

		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
		
		context.beginPath();
		context.moveTo(x + 21, y - 77);//yellow lines
		context.lineTo(x + 21, y - 100);
		context.moveTo(x + 23, y - 102);
		context.arc(x + 21, y - 102, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 21, y - 68);//yello curve
		context.bezierCurveTo(x + 21, y - 68, x + 31, y - 73, x + 21, y - 78);
		context.lineWidth="2";
		context.strokeStyle="#FFD700";
		context.stroke();
		
		context.beginPath();
		context.moveTo(x + 43, y - 77);//blue lines
		context.lineTo(x + 43, y - 100);
		context.moveTo(x + 45, y - 102);
		context.arc(x + 43, y - 102, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 43, y - 68);//blue curve
		context.bezierCurveTo(x + 43, y - 68, x + 53, y - 73, x + 43, y - 78);
		
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
		
	}
	exp7b.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		exp7b.firstPoint();
	}

	exp7b.toggleLine1 = function(Dpst1Flag, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
		if(Dpst1Flag == true) {
			exp7b.eraseLine1();
			exp7b.drawSlope1();
			//alert('ON');
		} else {
			exp7b.eraseLine11();
			exp7b.drawSlope11();
		}
	}

	exp7b.eraseLine1 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(122, 128);
		context.lineTo(100, 118);
		context.moveTo(109, 124);
		context.lineTo(109, 211);
		context.moveTo(112, 125);
		context.lineTo(112, 213);
		context.moveTo(122, 218);
		context.lineTo(100, 208);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp7b.drawSlope1 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(122, 129);
		context.lineTo(100, 129);
		context.moveTo(109, 129);
		context.lineTo(109, 218);
		context.moveTo(112, 129);
		context.lineTo(112, 218);
		context.moveTo(122, 219);
		context.lineTo(100, 219);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	exp7b.eraseLine11 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.moveTo(122, 129);
		context.lineTo(100, 129);
		context.moveTo(109, 129);
		context.lineTo(109, 218);
		context.moveTo(112, 129);
		context.lineTo(112, 218);
		context.moveTo(122, 219);
		context.lineTo(100, 219);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp7b.drawSlope11 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(122, 128);
		context.lineTo(100, 118);
		context.moveTo(109, 123);
		context.lineTo(109, 211);
		context.moveTo(112, 124);
		context.lineTo(112, 213);
		context.moveTo(122, 218);
		context.lineTo(100, 208);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	exp7b.toggleLine2 = function(Dpst2Flag, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
		if(Dpst2Flag == true) {
			exp7b.eraseLine2();
			exp7b.drawSlope2();
			// //alert('ON');
		} else {
			exp7b.eraseLine22();
			exp7b.drawSlope22();
		}
	}

	exp7b.eraseLine2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(120, 318);
		context.lineTo(98, 308);
		context.moveTo(108, 313);
		context.lineTo(108, 401);
		context.moveTo(111, 313);
		context.lineTo(111, 403);
		context.moveTo(120, 408);
		context.lineTo(98, 398);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}
	//
	exp7b.drawSlope2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(120, 318);
		context.lineTo(98, 318);
		context.moveTo(108, 318);
		context.lineTo(108, 408);
		context.moveTo(111, 318);
		context.lineTo(111, 408);
		context.moveTo(120, 408);
		context.lineTo(98, 408);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	exp7b.eraseLine22 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(120, 318);
		context.lineTo(98, 318);
		context.moveTo(108, 318);
		context.lineTo(108, 408);
		context.moveTo(111, 318);
		context.lineTo(111, 408);
		context.moveTo(120, 408);
		context.lineTo(98, 408);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp7b.drawSlope22 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(120, 318);
		context.lineTo(98, 308);
		context.moveTo(108, 313);
		context.lineTo(108, 401);
		context.moveTo(111, 313);
		context.lineTo(111, 403);
		context.moveTo(120, 408);
		context.lineTo(98, 398);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	exp7b.FieldSwitch = function(VfaExp7b, IfaExp7b) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.font = "10pt Calibri";
		context.fillStyle = "yellow";
		context.fillRect(x - 438, y - 141, 48, 15);
		context.fillStyle = "black";
		context.fillText((Math.round(IfaExp7b * Math.pow(10, 2)) / Math.pow(10, 2)) + "A", x - 430, y - 130);
		context.fillStyle = "yellow";
		context.fillRect(x - 353, y - 101, 38, 13);
		context.fillStyle = "black";
		context.fillText(VfaExp7b + "V", x - 348, y - 90);

	}

	exp7b.motorSwitch = function(CorrectIinExp7b, VinExp7b, CorrectSpeedExp7b, IscExp7b) {

		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.font = "10pt Calibri";
		context.fillStyle = "yellow";
		context.fillRect(x - 446, y + 45, 53, 16);
		context.fillStyle = "black";
		//context.fillText((Math.round(CorrectIinExp7b * Math.pow(10, 2))/Math.pow(10, 2)) +"A", x - 445, y + 58);
		context.fillText((Math.round(CorrectIinExp7b * Math.pow(10, 2))/Math.pow(10, 2)) +"A", x - 445, y + 58);
		context.fillStyle = "yellow";
		context.fillRect(x - 355, y + 88, 38, 13);
		context.fillStyle = "black";
		context.fillText(VinExp7b + "V", x - 351, y + 99);

		context.fillStyle = "red";
		context.fillRect(x + 144, y + 85, 77, 15);
		context.fillStyle = "black";
		context.fillText(CorrectSpeedExp7b.toFixed(0) + " r.p.m", x + 147, y + 96);
		context.fillStyle = "yellow";
		context.fillRect(x - 66, y - 3, 48, 16);
		context.fillStyle = "black";
		context.fillText((Math.round(IscExp7b * Math.pow(10, 2)) / Math.pow(10, 2)) + "A", x - 62, y + 8);

	}

	exp7b.voltageUpField = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		if(xPoint > 246.40) {
			context.moveTo(xPoint, 169);
			context.lineTo(xPoint, 119);
			context.fillRect(recXPoint, 169, 9, 6);
			context.lineWidth = "2";
			context.strokeStyle = "red";
			context.stroke();
			t1 = xPoint;
			t2 = recXPoint;

			context.beginPath();
			context.moveTo(xPoint + 2, 169);
			context.lineTo(xPoint + 2, 121);
			context.fillStyle = "#FFFFFF";
			context.fillRect(recXPoint + 8.36, 169, 9, 6);

			context.lineWidth = "2";
			context.strokeStyle = "#FFFFFF";
			context.stroke();
			//console.log("xpoint :" +xPoint );
			xPoint -= 0.64;
			recXPoint -= 0.64;
			//xPoint1 -= 0.64;
			context.fillStyle = "black";
		}
	}

	exp7b.voltageDownField = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		if(xPoint < 315.73) {
			context.moveTo(xPoint + 1.28, 169);
			context.lineTo(xPoint + 1.28, 119);

			context.fillRect(recXPoint + 1.28, 169, 9, 6);

			context.lineWidth = "2";
			context.strokeStyle = "red";
			context.stroke();
			t1 = xPoint;
			t2 = recXPoint;

			context.beginPath();
			context.moveTo(xPoint - 2.64, 169);
			context.lineTo(xPoint - 2.64, 119);
			context.fillStyle = "#FFFFFF";
			context.fillRect(recXPoint - 7.52, 169, 9, 6);

			context.lineWidth = "6";
			context.strokeStyle = "#FFFFFF";
			context.stroke();
			//console.log("xpoint :" +xPoint );
			xPoint += 0.64;
			recXPoint += 0.64;
			//xPoint1 += 0.64;
			context.fillStyle = "black";
		}
	}

	exp7b.voltageUpMotor = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		if(motorXPoint > 244.50) {
			context.moveTo(motorXPoint, 358);
			context.lineTo(motorXPoint, 307);

			context.fillRect(motorRecXPoint, 358, 9, 6);
			//
			context.lineWidth = "2";
			context.strokeStyle = "red";
			context.stroke();
			t3 = motorXPoint;
			t4 = motorRecXPoint;

			context.beginPath();
			context.moveTo(motorXPoint + 2, 358);
			context.lineTo(motorXPoint + 2, 309);
			context.fillStyle = "#FFFFFF";
			context.fillRect(motorRecXPoint + 8.68, 358, 9, 6);

			context.lineWidth = "2";
			context.strokeStyle = "#FFFFFF";
			context.stroke();
			//console.log("motorXPoint :" +motorXPoint );
			motorXPoint -= 0.32;
			motorRecXPoint -= 0.32;
			context.fillStyle = "black";
		}
	}

	exp7b.voltageDownMotor = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		if(motorXPoint < 314.50) {
			context.moveTo(motorXPoint + 0.64, 358);
			context.lineTo(motorXPoint + 0.64, 309);

			context.fillRect(motorRecXPoint + 0.64, 358, 9, 6);

			context.lineWidth = "2";
			context.strokeStyle = "red";
			context.stroke();
			t3 = motorXPoint;
			t4 = motorRecXPoint;

			context.beginPath();
			context.moveTo(motorXPoint - 2.32, 358);
			context.lineTo(motorXPoint - 2.32, 307);
			context.fillStyle = "#FFFFFF";
			context.fillRect(motorRecXPoint - 8.36, 358, 9, 6);

			context.lineWidth = "4.2";
			context.strokeStyle = "#FFFFFF";
			context.stroke();
			//console.log("motorXPoint :" +motorXPoint );
			motorXPoint += 0.32;
			motorRecXPoint += 0.32;
			//xPoint1 += 0.64;
			context.fillStyle = "black";
		}
	}

	exp7b.fieldDpstOff = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(t1 - 2, 174);
		context.lineTo(t1 - 2, 114);
		context.lineTo(340, 120);
		context.fillStyle = "#FFFFFF";
		context.fillRect(t2 - 2, 169, 9, 6);

		context.lineWidth = "15";
		context.strokeStyle = "#FFFFFF";
		context.stroke();

		context.beginPath();
		context.moveTo(317, 170);
		context.lineTo(317, 120);
		context.lineTo(340, 120);
		context.fillStyle = "black";
		context.fillRect(312, 169, 9, 6);

		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke(); xPoint = 316.36, recXPoint = 311.36;

	}

	exp7b.motorDpstOff = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(t3 - 2, 363);
		context.lineTo(t3 - 2, 302);
		context.lineTo(340, 308);
		context.fillStyle = "#FFFFFF";
		context.fillRect(t4 - 2, 358, 9, 6);

		context.lineWidth = "15";
		context.strokeStyle = "#FFFFFF";
		context.stroke();

		context.beginPath();
		context.moveTo(315, 358);
		context.lineTo(315, 308);
		context.lineTo(377, 308);
		context.fillStyle = "black";
		context.fillRect(310, 358, 9, 6);

		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke(); motorXPoint = 314.68, motorRecXPoint = 309.68;

	}
})(exp7bcanvas);
