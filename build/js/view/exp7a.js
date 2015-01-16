var exp7acanvas = exp7a = exp7acanvas || {};
(function(exp7a) {
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
	exp7a.firstPoint = function() {
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
		context.fillText("FA", x + 528, y + 98);
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
		miammdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("I", x + 400, y + 250);
		context.font = "8pt Calibri";
		context.fillText("ASH", x + 403, y + 253);
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
		globalObject.y = globalObject.y - 120;
		acvoltmetercanvas.HorizacVoltmeter(globalObject);
		//text box
		// x = globalObject.x,
		// y = globalObject.y;
		context.beginPath();
		context.rect(x + 742, y + 152, 50, 18);
		context.font = "11pt Calibri";
		context.fillText("V", x + 747, y + 185);
		context.font = "8pt Calibri";
		context.fillText("OC", x + 754, y + 188);

		context.rect(x + 956, y + 240, 70, 17);
		context.fillText(+"r.p.m", x + 964, y + 253);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();

		context.beginPath();
		context.moveTo(x + 160, y + 49);
		context.lineTo(x + 212, y + 49);
		context.lineTo(x + 212, y + 120);
		context.strokeStyle = "red";
		context.stroke();

		context.beginPath();
		context.moveTo(x + 162, y + 142);
		context.lineTo(x + 162, y + 180);
		context.lineTo(x + 498, y + 180);
		context.lineTo(x + 498, y + 127);
		context.strokeStyle = "black";
		context.stroke();

		context.beginPath();
		context.moveTo(x + 312, y + 90);
		context.lineTo(x + 312, y + 40);
		context.lineTo(x + 372, y + 40);
		context.fillRect(x + 307, y + 89, 9, 7);
		context.strokeStyle = "red";
		context.stroke();

		context.beginPath();
		context.moveTo(x + 341, y + 121);
		context.lineTo(x + 405, y + 121);
		context.lineTo(x + 405, y + 180);

		//context.moveTo(x+807, y + 157);
		//context.lineTo(x+807, y + 203);
		context.moveTo(x + 807, y + 159);
		context.arc(x + 807, y + 156, 1.5, 0, 2 * Math.PI, false);
		//context.lineWidth="2";
		context.strokeStyle = "black";
		context.stroke();
		//////
		context.beginPath();
		context.moveTo(x + 160, y + 238);
		context.lineTo(x + 210, y + 238);
		context.lineTo(x + 210, y + 313);
		context.strokeStyle = "red";
		context.stroke();

		context.beginPath();
		context.moveTo(x + 160, y + 330);
		context.lineTo(x + 160, y + 380);
		context.lineTo(x + 540, y + 380);
		context.lineTo(x + 540, y + 327);

		//context.moveTo(x+495 , y+227);
		//	context.lineTo(x+540 , y+227);
		//context.lineTo(x+540 , y+240);
		context.strokeStyle = "black";
		context.stroke();

		context.beginPath();
		context.moveTo(x + 310, y + 280);
		context.lineTo(x + 310, y + 228);
		context.lineTo(x + 372, y + 228);
		context.fillRect(x + 305, y + 278, 9, 6);
		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();

		context.beginPath();
		context.moveTo(x + 496, y + 320);
		context.lineTo(x + 496, y + 380);

		context.moveTo(x + 334, y + 310);
		context.lineTo(x + 410, y + 310);
		context.lineTo(x + 410, y + 380);
		context.strokeStyle = "black";
		context.stroke();

		context.beginPath();
		context.moveTo(x + 452, y + 228);
		context.lineTo(x + 496, y + 228);
		//context.lineTo(x+496 , y+250);
		context.lineTo(x + 540, y + 228);
		context.lineTo(x + 540, y + 263);
		context.strokeStyle = "red";
		context.stroke();

		context.beginPath();
		context.moveTo(x + 500, y + 38);
		context.lineTo(x + 874, y + 38);
		context.lineTo(x + 874, y + 205);
		context.strokeStyle = "red";
		context.stroke();

		context.beginPath();
		context.moveTo(x + 500, y + 130);
		context.lineTo(x + 870, y + 130);
		context.moveTo(x + 881, y + 130);
		context.lineTo(x + 900, y + 130);
		context.lineTo(x + 900, y + 206);
		context.lineTo(x + 887, y + 206);

		context.moveTo(x + 817, y + 203);
		context.lineTo(x + 817, y + 185);
		context.lineTo(x + 862, y + 185);
		context.lineTo(x + 862, y + 203);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
		//context.moveTo(x + 817, y + 203);
		//context.lineTo(x + 817, y + 185);
		//context.lineTo(x + 862, y + 185);
		//context.lineTo(x + 862, y + 203);

		context.beginPath();
		//red lines
		context.arc(x + 807, y + 155, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 807, y + 155);
		context.lineTo(x + 807, y + 205);
		context.arc(x + 807, y + 206, 1.5, 0, 2 * Math.PI, false);
		context.moveTo(x + 807, y + 205);
		context.lineTo(x + 807, y + 237);

		//context.arc(x+818, y + 206, 1.5, 0, 2 * Math.PI, false);
		context.moveTo(x + 818, y + 205);
		context.lineTo(x + 818, y + 237);
		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();

		context.beginPath();
		context.moveTo(x + 829, y + 188);
		// yellow lines
		//context.lineTo(x+828 , y+203);
		context.lineTo(x + 829, y + 237);
		context.arc(x + 829, y + 206, 1.5, 0, 2 * Math.PI, false);
		context.moveTo(x + 840, y + 186);
		context.lineTo(x + 840, y + 237);
		context.arc(x + 840, y + 206, 1.5, 0, 2 * Math.PI, false);
		context.lineWidth = "2";
		context.strokeStyle = "yellow";
		context.stroke();

		context.beginPath();
		//blue lines
		context.moveTo(x + 851, y + 188);
		context.lineTo(x + 851, y + 237);
		//context.arc(x+851, y + 206, 1.5, 0, 2 * Math.PI, false);
		context.moveTo(x + 862, y + 205);
		context.lineTo(x + 862, y + 237);
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();

		context.beginPath();
		//context.moveTo(x+806 , y+156);
		//context.lineTo(x+851 , y+156);

		context.fillText("+", x + 63, y + 40);
		context.fillText("-", x + 63, y + 150);
		context.fillText("+", x + 63, y + 230);
		context.fillText("-", x + 63, y + 340);

		context.fillText("220V", x + 70, y + 100);
		context.fillText("D.C.", x + 70, y + 110);

		context.fillText("440V", x + 70, y + 280);
		context.fillText("D.C.", x + 70, y + 290);

		context.font = "13pt Calibri";
		context.fillText(" DC Shunt Motor ", x + 542, y + 360);
		context.fillStyle = "black";

		context.font = "13pt Calibri";
		context.fillText(" Alternator ", x + 802, y + 360);
		context.fillStyle = "black";

		context.font = "15pt Calibri";
		context.fillText("DC Shunt Motor  Ratings :  ", x, y + 500);
		context.font = "11pt Calibri";
		context.fillText(" Field Voltage (max) = 220V  ", x + 8, y + 530);
		context.fillText("Armature Voltage (max) = 440V  ", x + 12, y + 550);
		context.fillText("Capacity = 5 HP ", x + 12, y + 570);
		context.fillText("DC Field Current(max) =  2.3 Amp  ", x + 12, y + 590);
		context.fillText("Armature Current(max) =  9.5 Amp  ", x + 12, y + 610);
		//context.fillText(" RPM =  1500  ", x+10 , y+630 );
		context.fillText("Speed = 1500-2000 R.P.M ", x + 10, y + 630);
		context.fillStyle = "black";

		context.font = "15pt Calibri";
		context.fillText(" Alternator  Ratings :  ", x + 390, y + 500);
		context.font = "11pt Calibri";
		context.fillText("Rating = 3 KVA  ", x + 400, y + 530);
		context.fillText("Phase = 3  ", x + 400, y + 550);
		context.fillText("Frequency = 50 Hz ", x + 400, y + 570);
		context.fillText("Winding - Delta  ", x + 400, y + 590);
		context.fillText("Armature Voltage = 415V   ", x + 400, y + 610);
		context.fillText("Armature Current = 4.2 Amp ", x + 400, y + 630);
		context.fillText("Excitation Voltage =220V ", x + 400, y + 650);
		context.fillText("Speed = 1500 R.P.M ", x + 400, y + 670);
		context.fillText("No.of poles = 4 ", x + 400, y + 690);
		context.fillStyle = "black";

		//added by shubhangi

		context.font = "15pt Calibri";
		context.fillText(" Variables Description :  ", x + 690, y + 500);
		context.font = "11pt Calibri";
		context.fillText("I", x + 700, y + 530);
		context.fillText("V", x + 700, y + 550);
		context.fillText("V", x + 700, y + 570);
		context.fillText("I", x + 700, y + 590);
		context.fillText("V", x + 700, y + 610);

		context.font = "8pt Calibri";
		context.fillText("ASH", x + 703, y + 532);
		context.fillText("ASH", x + 705, y + 552);
		context.fillText("FA ", x + 707, y + 572);
		context.fillText("FA ", x + 703, y + 592);
		context.fillText("OC ", x + 707, y + 610);

		context.font = "11pt Calibri";
		context.fillText(" = Armature current of DC shunt motor ", x + 720, y + 530);
		context.fillText(" = Armature voltage of DC shunt motor  ", x + 720, y + 550);
		context.fillText(" = Field voltage of an alternator ", x + 720, y + 570);
		context.fillText(" = Field current of an Alternator", x + 720, y + 590);
		context.fillText(" = open circuit Armature voltage of an Alternator  ", x + 720, y + 610);

		context.fillStyle = "black";

		context.font = "17pt Calibri";
		//context.fillText("", x + 5, y - 50);
		context.fillText("Circuit Diagram: Open Circuit test on three phase Alternator", x + 5, y - 20);
		x = x + 810;
		y = y + 105;
		context.moveTo(x + 60, y + 25);
		context.bezierCurveTo(x + 56, y + 20, x + 55, y + 20, x + 60, y + 12);
		context.bezierCurveTo(x + 66, y + 9, x + 64, y + 9, x + 70, y + 12);
		context.bezierCurveTo(x + 71, y + 15, x + 76, y + 18, x + 70, y + 25);
		x = x - 3;
		y = y + 152;
		context.moveTo(x + 21, y - 77);
		context.lineTo(x + 21, y - 100);
		context.moveTo(x + 23, y - 102);
		context.arc(x + 21, y - 102, 2, 0, 2 * Math.PI, false);

		context.moveTo(x + 43, y - 77);
		context.lineTo(x + 43, y - 100);
		context.moveTo(x + 45, y - 102);
		context.arc(x + 43, y - 102, 2, 0, 2 * Math.PI, false);

		//context.moveTo(x + 21, y - 68);
		//context.bezierCurveTo(x + 21, y - 68, x + 31, y - 73, x + 21, y - 78);

		//context.moveTo(x + 43, y - 68);
		//context.bezierCurveTo(x + 43, y - 68, x + 53, y - 73, x + 43, y - 78);

		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();

		context.beginPath();
		context.moveTo(x + 21, y - 77);
		//yellow lines
		context.lineTo(x + 21, y - 100);
		context.moveTo(x + 23, y - 102);
		context.arc(x + 21, y - 102, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 21, y - 68);
		//yello curve
		context.bezierCurveTo(x + 21, y - 68, x + 31, y - 73, x + 21, y - 78);
		context.lineWidth = "2";
		context.strokeStyle = "yellow";
		context.stroke();

		context.beginPath();
		context.moveTo(x + 43, y - 77);
		//blue lines
		context.lineTo(x + 43, y - 100);
		context.moveTo(x + 45, y - 102);
		context.arc(x + 43, y - 102, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 43, y - 68);
		//blue curve
		context.bezierCurveTo(x + 43, y - 68, x + 53, y - 73, x + 43, y - 78);

		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();

	}
	exp7a.toggleLine = function(flag, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flag == true) {
			exp7a.eraseLine1();
			exp7a.drawSlope1();
			//alert('ON');
		} else {
			exp7a.eraseLine2();
			exp7a.drawSlope2();
		}
	}

	exp7a.eraseLine1 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(122, 127);
		context.lineTo(99, 120);
		context.moveTo(109, 211);
		context.lineTo(109, 123);
		context.moveTo(112, 213);
		context.lineTo(112, 124);
		context.moveTo(122, 218);
		context.lineTo(100, 208);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp7a.drawSlope1 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(122, 128);
		context.lineTo(100, 128);
		context.moveTo(110, 218);
		context.lineTo(110, 128);
		context.moveTo(113, 217);
		context.lineTo(113, 128);
		context.moveTo(122, 218);
		context.lineTo(100, 218);

		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	exp7a.eraseLine2 = function() {

		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(122, 128);
		context.lineTo(100, 128);
		context.moveTo(109, 218);
		context.lineTo(109, 128);
		context.moveTo(112, 217);
		context.lineTo(112, 128);
		context.moveTo(122, 218);
		context.lineTo(100, 218);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp7a.drawSlope2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(122, 127);
		context.lineTo(100, 120);
		context.moveTo(110, 211);
		context.lineTo(110, 123);
		context.moveTo(113, 213);
		context.lineTo(113, 124);
		context.moveTo(122, 218);
		context.lineTo(100, 208);

		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	exp7a.toggleLine1 = function(flag, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flag == true) {
			exp7a.eraseLine3();
			exp7a.drawSlope3();
			//alert('ON');
		} else {
			exp7a.eraseLine4();
			exp7a.drawSlope4();
		}
	}

	exp7a.eraseLine3 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(120, 317);
		context.lineTo(97, 307);
		context.moveTo(110, 313);
		context.lineTo(110, 401);
		context.moveTo(107, 312);
		context.lineTo(107, 400);
		context.moveTo(120, 407);
		context.lineTo(98, 397);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp7a.drawSlope3 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(120, 317);
		context.lineTo(98, 317);
		context.moveTo(111, 317);
		context.lineTo(111, 407);
		context.moveTo(108, 317);
		context.lineTo(108, 407);
		context.moveTo(120, 407);
		context.lineTo(98, 407);

		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	exp7a.eraseLine4 = function() {

		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(120, 317);
		context.lineTo(98, 317);
		context.moveTo(110, 317);
		context.lineTo(110, 407);
		context.moveTo(107, 317);
		context.lineTo(107, 407);
		context.moveTo(120, 407);
		context.lineTo(98, 407);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp7a.drawSlope4 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(120, 317);
		context.lineTo(98, 307);
		context.moveTo(111, 313);
		context.lineTo(111, 402);
		context.moveTo(108, 312);
		context.lineTo(108, 400);
		context.moveTo(120, 407);
		context.lineTo(98, 397);

		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	exp7a.FieldSwitch = function(IfaExp7a, VfaExp7a) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.font = "10pt Calibri";
		context.fillStyle = "#FFFF00";
		context.fillRect(x - 578, y - 128, 47, 13);
		context.fillRect(x - 492, y - 88, 35, 11);

		context.fillStyle = "black";
		context.fillText((Math.round(IfaExp7a * Math.pow(10, 2)) / Math.pow(10, 2)) + "A", x - 576, y - 117);
		context.fillText(VfaExp7a + "V", x - 488, y - 78);

	}

	exp7a.motorSwitch = function(IinExp7a, VinExp7a, speed, Vt) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.font = "10pt Calibri";
		context.fillStyle = "#FFFF00";
		context.fillRect(x - 580, y + 61, 47, 13);
		context.fillRect(x - 494, y + 101, 35, 11);
		context.fillRect(x - 203, y + 10, 46, 14);

		context.fillStyle = "black";
		context.fillText((Math.round(IinExp7a * Math.pow(10, 2)) / Math.pow(10, 2)) + "A", x - 578, y + 72);
		context.fillText(VinExp7a + "V", x - 490, y + 111);
		context.fillText(Vt.toFixed(0) + "V", x - 196, y + 21);

		context.fillStyle = "red";
		context.fillRect(x + 8, y + 95, 72, 19);
		context.fillStyle = "black";

		context.fillText(speed.toFixed(0) + " r.p.m", x + 11, y + 109);
		//context.lineWidth="2";
		//context.strokeStyle="black";
		//context.stroke();

	}

	exp7a.voltageUpField = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		if(xPoint > 246.40) {
			context.moveTo(xPoint, 169);
			context.lineTo(xPoint, 119);

			context.fillRect(recXPoint, 169, 9, 6);

			// context.moveTo(317,120);
			// context.lineTo(xPoint1,120);

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

	exp7a.voltageDownField = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		if(xPoint < 315.73) {
			context.moveTo(xPoint + 1.28, 169);
			context.lineTo(xPoint + 1.28, 119);

			context.fillRect(recXPoint + 1.28, 169, 9, 6);

			// context.moveTo(317,120);
			// context.lineTo(xPoint1,120);

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

	exp7a.voltageUpMotor = function() {
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

	exp7a.voltageDownMotor = function() {
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

	exp7a.fieldDpstOff = function() {
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
		context.stroke();
		xPoint = 316.36, recXPoint = 311.36;

	}

	exp7a.motorDpstOff = function() {
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
		//
		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
		motorXPoint = 314.68, motorRecXPoint = 309.68;

	}

	exp7a.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		exp7a.firstPoint();
	}
})(exp7acanvas);
