var exp3canvas = exp = exp3canvas || {};
(function(exp) {
	var vcount = 0, KcVal, VaIaVal;
	var flag1=0;
	var flag2=0;
	var globalObject = {
		x : 10,
		y : 80,
		x1 : 60,
		y1 : 70,
		x2 : 15,
		y2 : 72,
		topLeftCornerX : 80,
		topLeftCornerY : 40,
		width : 40,
		height : 15,
	}

	exp.firstPoint = function(inputval) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		var inputexpval = inputval;
		context.beginPath();
		//top fig.
		//2nd dc fixed
		globalObject.x = globalObject.x + 10;
		globalObject.y = globalObject.y + 55;
		dcvoltagecanvas.drawPoint(globalObject);
		//dpst switch
		globalObject.x = globalObject.x + 50;
		dpstcanvas.firstRow(globalObject);
		dpstcanvas.secondRow(globalObject);
		dpstcanvas.switchDpst(globalObject);
		// dc variable
		globalObject.x = globalObject.x + 133;
		globalObject.y = globalObject.y - 35;
		//context.fillStyle="yellow";
		dcvariablecanvas.drawRectangle(globalObject);
		dcvariablecanvas.drawPoints(globalObject);
		dcvariablecanvas.readingShow(globalObject);
		dcvariablecanvas.control(globalObject);
		// ac ammeter
		globalObject.x = globalObject.x + 107;
		globalObject.y = globalObject.y + 15;
		miammdccanvas.firstPoint(globalObject);
		miammdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("I", x +350 ,y+5);
		context.font = "8pt Calibri";
		context.fillText("FM", x +353, y+10);
		// voltmeter
		globalObject.x = globalObject.x + 124;
		globalObject.y = globalObject.y - 20;
		mivoltdccanvas.firstPoint(globalObject);
		mivoltdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("V", x +380 ,y+83);
		context.font = "8pt Calibri";
		context.fillText("FM", x +385, y+88);
		//bottom fig.
		//1st dc fixed
		globalObject.x = globalObject.x - 413;
		globalObject.y = globalObject.y + 220;
		dcvoltagecanvas.drawPoint(globalObject);
		//dpst switch
		globalObject.x = globalObject.x + 50;
		globalObject.y = globalObject.y - 1;
		dpstcanvas.firstRow(globalObject);
		dpstcanvas.secondRow(globalObject);
		dpstcanvas.switchDpst(globalObject);
		// dc variable
		globalObject.x = globalObject.x + 134;
		globalObject.y = globalObject.y - 35;
		dcvariablecanvas.drawRectangle(globalObject);
		dcvariablecanvas.drawPoints(globalObject);
		dcvariablecanvas.readingShow(globalObject);
		dcvariablecanvas.control(globalObject);
		// ac ammeter
		globalObject.x = globalObject.x + 107;
		globalObject.y = globalObject.y + 15;
		miammdccanvas.firstPoint(globalObject);
		miammdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("I", x +350 ,y+185);
		context.font = "8pt Calibri";
		context.fillText("AM", x +353, y+190);
		// voltmeter
		globalObject.x = globalObject.x + 124;
		globalObject.y = globalObject.y - 20;
		mivoltdccanvas.firstPoint(globalObject);
		mivoltdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("V", x +385 ,y+265);
		context.font = "8pt Calibri";
		context.fillText("AM", x +390, y+270);
		// sep excited dc
		globalObject.x = globalObject.x + 80;
		globalObject.y = globalObject.y + 19;
		sepexciteddccanvas.drawRectangle(globalObject);
		// tachometer
		globalObject.x = globalObject.x + 140;
		globalObject.y = globalObject.y + 23;
		globalObject.x2 = globalObject.x - 25;
		globalObject.y2 = globalObject.y + 15;
		globalObject.x1 = globalObject.x + 13;
		globalObject.y1 = globalObject.y + 10;
		tachometercanvas.drawLine(globalObject);
		tachometercanvas.drawRectangle(globalObject);
		tachometercanvas.drawCurves(globalObject);
		
		// horizontal line below 5 connecting to A2
		context.moveTo(x + 305, y + 305);
		context.lineTo(x + 493, y + 305);
		
		// f2 to negative of var DC
		context.moveTo(x + 300, y + 126);
		context.lineTo(x + 539, y + 126);
		context.moveTo(x + 550, y + 126);
		context.lineTo(x + 585, y + 126);
		context.lineTo(x + 585, y + 190);
		context.lineWidth = "2";
		context.strokeStyle = "Black";
		context.stroke();
		
		context.beginPath();
		//upper ammeter lines
		context.arc(x+171, y + 35, 2, 0, 2 * Math.PI, false);
		context.moveTo(x+170,y+35);
		context.lineTo(x+193,y+35);
		context.moveTo(x+273,y+35);
		context.lineTo(x+300,y+35);
		
		 //f1 to ammeter
		context.moveTo(x + 421, y + 35);
		context.lineTo(x + 546, y + 35);
		context.lineTo(x + 546, y + 212);
		context.moveTo(x + 546, y + 192);
		context.arc(x+546, y + 193, 2, 0, 2 * Math.PI, false);
		
		//lower ammeter lines
		context.moveTo(x+173,y+214);
		context.arc(x+173, y + 214, 2, 0, 2 * Math.PI, false);
		context.moveTo(x+174,y+214);
		context.lineTo(x+195,y+214);
		context.moveTo(x+274,y+214);
		context.lineTo(x+300,y+214);
		
		//horizontal line above 5 connecting to A1(top fig.)
		context.moveTo(x + 427, y + 213);
		context.lineTo(x + 494, y + 213);
		context.arc(x+495, y + 213, 2, 0 , 2 * Math.PI, false);
		context.moveTo(x + 494, y + 213);
		context.lineTo(x + 494, y + 238);
		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
		
		context.beginPath();
		//top fig.
		context.fillText("220V", x + 80, y + 75);
		context.fillText("D.C.", x + 80, y + 90);
		context.fillText("+", x + 60, y + 25);
		context.fillText("-", x + 60, y + 140);
		//bottom fig.
		context.fillText("440V", x + 80, y + 255);
		context.fillText("D.C.", x + 80, y + 270);
		context.fillText("+", x + 60, y + 205);
		context.fillText("-", x + 60, y + 320);
		context.font = "17pt Calibri";
		context.fillText("", x - 10, y - 50);
		context.fillText("Circuit Diagram: Speed Control of Separately Excited DC Motor", x - 10, y - 20);
		
		context.font = "13pt Calibri";
	    context.fillText(" Separately Excited ", x+490 , y+340 );
	    context.fillText(" DC Motor ", x+510 , y+360 );
	    context.fillStyle = "black";
	    
	    context.font = "15pt Calibri";
	    context.fillText(" Separately Excited DC Motor  Ratings :  ", x , y+500 );
	    context.font = "11pt Calibri";
	    context.fillText(" Field Voltage (max) = 220V  ", x+8 , y+530 );
	    context.fillText("Armature Voltage (max) = 440V  ", x+12 , y+550 );
	    context.fillText("Capacity = 5 HP ", x+12 , y+570 );
	    context.fillText("DC Field Current(max) =  2.3 Amp  ", x+12 , y+590 );
	    context.fillText("Armature Current(max) =  9.5 Amp  ", x+12 , y+610 );
	    context.fillText(" Speed = 1500-2000 R.P.M.  ", x+10 , y+630 );
	    context.fillStyle = "black";
		context.font = "15pt Calibri";
		context.fillText(" Abbrevations:  ", x+450 ,  y+500);
		context.font = "11pt Calibri";
		context.fillText("V", x + 460, y + 530);
		context.fillText("I", x + 460, y + 550);
		context.fillText("V", x + 460, y + 570);
		context.fillText("I", x + 460, y + 590);
		
		context.font = "8pt Calibri";
		context.fillText("FM", x + 465, y + 535);
		context.fillText("FM", x + 465, y + 555);
		context.fillText("AM",x + 465, y + 575);
		context.fillText("AM",x + 465, y + 595);
		
		context.font = "11pt Calibri";
		context.fillText(" = Separately Excited DC Motor field winding voltage ", x + 480, y + 530);
		context.fillText(" = Separately Excited DC Motor field winding current ", x + 480, y + 550);
		context.fillText(" = Separately Excited DC Motor Armature volatge", x + 480, y + 570);
		context.fillText(" = Separately Excited DC Motor Armature current", x + 480, y +590);
		context.fillStyle = "black";
		
		
		x = x + 481;
		y = y + 101;
		
		
		
		context.moveTo(x + 60, y + 25);
		context.bezierCurveTo(x + 56, y + 20, x + 55, y + 20, x + 60, y + 12);
		context.bezierCurveTo(x + 66, y + 9, x + 64, y + 9, x + 70, y + 12);
		context.bezierCurveTo(x + 71, y + 15, x + 76, y + 18, x + 70, y + 25);
		
		context.font = "10pt Calibri";
		context.fillStyle="red";
	    context.rect(x + 174, y +108, 72, 22);
        context.fillRect(x + 174, y +108, 72, 22);
        context.strokeStyle="2";
		context.fillStyle = "black";
		
		context.lineWidth = "2";
		context.strokeStyle = "Black";
		context.stroke();
	}

	exp.switchUp = function(ampere, count) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.font = "10pt Calibri";
		context.fillStyle = "yellow";
		context.fillRect(x - 266, y - 185, 38, 13);
		context.fillStyle = "black";
		context.fillText(count + "V", x - 261, y - 175);
		context.fillStyle = "yellow";
		context.fillRect(x - 412, y - 105, 38, 18);
		context.fillStyle = "black";
		context.fillText(count + "V", x - 405, y - 92);
		context.fillStyle = "yellow";
		context.fillRect(x - 452, y - 105, 38, 17);
		context.fillStyle = "black";
		context.fillText("220V", x - 445, y - 92);
		context.fillStyle = "yellow";
		context.fillRect(x - 353, y - 225, 49, 15);
		context.fillStyle = "black";
		context.fillText((Math.round(ampere * Math.pow(10, 2)) / Math.pow(10, 2)) + "A", x - 348, y - 213);
	}
	exp.switchDown = function(ampere, count) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.font = "10pt Calibri";
		context.fillStyle = "yellow";
		context.fillRect(x - 266, y - 185, 38, 13);
		context.fillStyle = "black";
		context.fillText(count + "V", x - 258, y - 175);
		context.fillStyle = "yellow";
		context.fillRect(x - 410, y - 100, 34, 12);
		context.fillStyle = "black";
		context.fillText(count + "V", x - 405, y - 92);
		context.fillStyle = "yellow";
		context.fillRect(x - 353, y - 225, 49, 15);
		context.fillStyle = "black";
		context.fillText((Math.round(ampere * Math.pow(10, 2)) / Math.pow(10, 2)) + "A", x - 348, y - 213);
	}
	exp.switchUp1 = function(vcount, IaRa, correctSpeed) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.font = "10pt Calibri";
		context.fillStyle = "yellow";
		context.fillRect(x - 264, y - 6, 38, 12);
		context.fillStyle = "black";
		context.fillText(vcount + "V", x - 258, y + 5);
		context.fillStyle = "yellow";
		context.fillRect(x - 410, y + 75, 38, 17);
		context.fillStyle = "black";
		context.fillText(vcount + "V", x - 405, y + 88);
		context.fillStyle = "yellow";
		context.fillRect(x - 450, y + 75, 38, 17);
		context.fillStyle = "black";
		context.fillText("440V", x - 445, y + 88);
		context.fillStyle = "yellow";
		context.fillRect(x - 351, y - 46, 49, 15);
		context.fillStyle = "black";
		context.fillText(IaRa.toFixed(2) + "A", x - 347, y - 33);
		context.fillStyle = "red";
		context.fillRect(x + 10, y - 25, 70, 19);
		context.fillStyle = "black";
		context.fillText(correctSpeed.toFixed(0) + "r.p.m", x + 12, y - 12);
	}
	exp.switchDown1 = function(vcount, IaRa, correctSpeed) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.font = "10pt Calibri";
		context.fillStyle = "yellow";
		context.fillRect(x - 264, y - 6, 38, 12);
		context.fillStyle = "black";
		context.fillText(vcount + "V", x - 258, y + 5);
		context.fillStyle = "yellow";
		context.fillRect(x - 410, y + 75, 38, 17);
		context.fillStyle = "black";
		context.fillText(vcount + "V", x - 405, y + 88);
		context.fillStyle = "yellow";
		context.fillRect(x - 351, y - 46, 49, 15);
		context.fillStyle = "black";
		context.fillText(IaRa.toFixed(2) + "A", x - 347, y - 33);
		context.fillStyle = "red";
		context.fillRect(x + 10, y - 25, 70, 19);
		context.fillStyle = "black";
		context.fillText(correctSpeed.toFixed(0) + "r.p.m", x + 12, y - 12);
	}
	exp.init = function(id, inputval) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		exp.firstPoint(inputval);
	}
	exp.toggleLine = function(flag, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
		if(flag2==0)
		{
		   if(flag == true)
		    {
			 exp.eraseLine1();
			 exp.drawSlope1();
			 flag1=1;
		     flag2=0; 
		    } else 
		    {
			 exp.eraseLine2();
			 exp.drawSlope2();
			 flag1=0;
		   }
		}else{
			     alert("First Open the Armature Supply !!!");
		     }
	}
	exp.eraseLine1 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(137, 114);
		context.lineTo(115, 104);
		context.moveTo(125, 108);
		context.lineTo(125, 198);
		context.moveTo(127, 112);
		context.lineTo(128, 200);
		context.moveTo(137, 204);
		context.lineTo(115, 194);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}
	exp.drawSlope1 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(137, 114);
		context.lineTo(115, 114);
		context.moveTo(137, 204);
		context.lineTo(115, 204);
		context.moveTo(125, 114);
		context.lineTo(125, 203);
		context.moveTo(128, 114);
		context.lineTo(128, 203);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke()
	}
	exp.eraseLine2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(137, 114);
		context.lineTo(115, 114);
		context.moveTo(137, 204);
		context.lineTo(115, 204);
		context.moveTo(125, 114);
		context.lineTo(125, 203);
		context.moveTo(128, 114);
		context.lineTo(128, 203);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}
	exp.drawSlope2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(137, 114);
		context.lineTo(115, 104);
		context.moveTo(125, 108);
		context.lineTo(125, 198);
		context.moveTo(128, 111);
		context.lineTo(128, 200);
		context.moveTo(137, 204);
		context.lineTo(115, 194);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	exp.toggleLine1 = function(flag, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
		if(flag1==1){
			
		
		if(flag == true) {
			
			exp.eraseLine3();
			exp.drawSlope3();
			flag2=true;
			
		} else {
			exp.eraseLine4();
			exp.drawSlope4();
			flag2=false;
		}
		}
		else{
			alert("Excite the Field winding first.");
		}
	}
	exp.eraseLine3 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(137, 292);
		context.lineTo(115, 282);
		context.moveTo(125, 289);
		context.lineTo(125, 377);
		context.moveTo(128, 289);
		context.lineTo(128, 378);
		context.moveTo(137, 382);
		context.lineTo(115, 373);
		context.lineWidth = "6";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}
	exp.drawSlope3 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(137, 294);
		context.lineTo(115, 294);
		context.moveTo(125, 294);
		context.lineTo(125, 384);
		context.moveTo(128, 294);
		context.lineTo(128, 384);
		context.moveTo(137, 384);
		context.lineTo(115, 384);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	exp.eraseLine4 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(137, 294);
		context.lineTo(116, 294);
		context.moveTo(125, 294);
		context.lineTo(125, 383);
		context.moveTo(128, 294);
		context.lineTo(128, 383);
		context.moveTo(137, 384);
		context.lineTo(116, 384);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}
	exp.drawSlope4 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(138, 294);
		context.lineTo(115, 282);
		context.moveTo(125, 288);
		context.lineTo(125, 377);
		context.moveTo(128, 289);
		context.lineTo(128, 378);
		context.moveTo(138, 384);
		context.lineTo(115, 373);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
})(exp3canvas);
