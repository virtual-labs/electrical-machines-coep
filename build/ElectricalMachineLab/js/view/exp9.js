var exp9canvas = exp9 = exp9canvas || {}; (function(exp9) {
	var yPoint = 297, yPoint1 = 292, xxPoint = 316, xPoint1 = 400, c = 0, xPoint3 = 316, xPoint4 = 379, yPoint4 = 314, yPoint5 = 295;
	var globalObject = {
		x : 5,
		y : 80,
		x1 : 60,
		y1 : 70,
		x2 : 15,
		y2 : 72,
	}
	var xPoint = 316.36, recXPoint = 311.36;
	var motorXPoint = 314.68, motorRecXPoint = 309.68, t1, t2, t3, t4;
	exp9.firstPoint = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		//first fig.
		//dc fixed voltage source
		globalObject.y = globalObject.y + 40
		dcvoltagecanvas.drawPoint(globalObject);
		//dpst
		globalObject.x = globalObject.x + 50;
		dpstcanvas.firstRow(globalObject);
		dpstcanvas.secondRow(globalObject);
		dpstcanvas.switchDpst(globalObject);
		//rheostat
		globalObject.x = globalObject.x + 170;
		globalObject.y = globalObject.y - 10;
		rheostatcanvas.drawPoint(globalObject);
		rheostatcanvas.drawCurves(globalObject);
		rheostatcanvas.control(globalObject);
		//ammeter
		globalObject.x = globalObject.x + 150;
		globalObject.y = globalObject.y - 30;
		miammdccanvas.firstPoint(globalObject);
		miammdccanvas.drawRectangle(globalObject);
		//voltmeter
		globalObject.x = globalObject.x + 124;
		globalObject.y = globalObject.y - 20;
		mivoltdccanvas.firstPoint(globalObject);
		mivoltdccanvas.drawRectangle(globalObject);
		//ac voltage source
		globalObject.x = globalObject.x - 450;
		globalObject.y = globalObject.y + 230;
		threephacvoltagesrc.drawPoint(globalObject);
		//dpst
		globalObject.x = globalObject.x + 112;
		globalObject.y = globalObject.y - 30;
		switpstcanvas.firstRow(globalObject);
		switpstcanvas.secondRow(globalObject);
		switpstcanvas.thirdRow(globalObject);
		switpstcanvas.drawParallelLines(globalObject);
		//3 phase variac
		globalObject.x = globalObject.x + 135;
		globalObject.y = globalObject.y + 10;
		variactphcanvas.drawPoint(globalObject);
		variactphcanvas.drawCoils(globalObject);
		//power factor meter
		globalObject.x = globalObject.x + 330;
		powerfactorcanvas.drawRect(globalObject);
		powerfactorcanvas.drawLine(globalObject);
		powerfactorcanvas.drawZig(globalObject);
		powerfactorcanvas.drawCoil(globalObject);
		powerfactorcanvas.drawValueRect(globalObject);
		//ammeter ac
		globalObject.x = globalObject.x - 131;
		globalObject.y = globalObject.y - 15;
		miammaccanvas.firstPoint(globalObject);
		miammaccanvas.drawRectangle(globalObject);
		//voltmeter ac
		globalObject.x = globalObject.x - 50;
		globalObject.y = globalObject.y + 32;
		acvoltmetercanvas.drawPoint(globalObject);
		acvoltmetercanvas.drawRectangle(globalObject);
		//resis load
		globalObject.x = globalObject.x - 150;
		globalObject.y = globalObject.y + 236;
		spresisloadcanvas.drawLine(globalObject);
		spresisloadcanvas.drawPoint(globalObject);
		spresisloadcanvas.zigzag(globalObject);
		spresisloadcanvas.middleLine(globalObject);
		//ammeter
		globalObject.x = globalObject.x + 90;
		globalObject.y = globalObject.y - 50;
		miammdccanvas.firstPoint(globalObject);
		miammaccanvas.drawRectangle(globalObject);
		//voltmeter
		globalObject.x = globalObject.x + 124;
		globalObject.y = globalObject.y - 20;
		mivoltdccanvas.firstPoint(globalObject);
		mivoltdccanvas.drawRectangle(globalObject);
		//self excites dc gen
		globalObject.x = globalObject.x + 50;
		globalObject.y = globalObject.y + 80;
		selfexcdccanvas.drawRectangle(globalObject);
		selfexcdccanvas.drawCoil(globalObject);
		//coupling
		globalObject.x = globalObject.x + 144;
		globalObject.y = globalObject.y + 17;
		couplingcanvas.drawRectangle(globalObject);
		//salient pole rotor
		globalObject.x = globalObject.x + 108;
		globalObject.y = globalObject.y + 3;
		salientrotorcanvas.drawRectangle(globalObject);
		salientrotorcanvas.drawPoints(globalObject);
		salientrotorcanvas.drawCurves(globalObject);
		salientrotorcanvas.drawSpirals(globalObject);
		//tachometer
		globalObject.x = globalObject.x + 141;
		globalObject.y = globalObject.y + 5;
		globalObject.x1 = globalObject.x1 + 910;
		globalObject.y1 = globalObject.y1 + 497;
		globalObject.x2 = globalObject.x2 + 910;
		globalObject.y2 = globalObject.y2 + 498;
		tachometercanvas.drawRectangle(globalObject);
		tachometercanvas.drawLine(globalObject);
		tachometercanvas.drawCurves(globalObject);
		context.font = "16pt Calibri";
		context.fillText("", x + 5, y - 60);
		context.fillText("Circuit Diagram:  V Curves and Inverted V Curves of three Phase Synchronous Motor", x + 5, y - 40);
		
		context.strokeStyle = "black";
		context.stroke();
		
		context.beginPath();
		context.moveTo(x + 160, y + 20);
		context.lineTo(x + 207, y + 20);
		context.lineTo(x + 207, y + 70);
		context.moveTo(x + 308, y + 40);
		context.lineTo(x + 308, y);
		context.lineTo(x + 370, y);
		context.fillRect(x + 303, y + 40, 9, 7);
		//Vph value
		context.font = "13pt Calibri";
	 	context.fillText("V", x +40, y+181 );
	 	context.font = "10pt Calibri";
	 	context.fillText("ph", x + 49, y+181);
	 	context.font = "9pt Calibri";
		context.fillText("239.6V", x +38, y + 198);
		
		
		context.font = "13pt Calibri";
	 	context.fillText("I", x +450, y+380 );
	 	context.font = "10pt Calibri";
	 	context.fillText("G", x + 455, y+380 );
	 	
	 	context.font = "13pt Calibri";
	 	context.fillText("V", x +480, y+470 );
	 	context.font = "10pt Calibri";
	 	context.fillText("G", x + 488, y+470 );
		
		context.font = "13pt Calibri";
	 	context.fillText("I", x +440, y-16 );
	 	context.font = "10pt Calibri";
	 	context.fillText("FS", x + 445, y-16 );
		
		context.font = "13pt Calibri";
	 	context.fillText("p.f.", x + 639, y + 156);
	 	
	 	context.fillText("I", x + 550, y + 156);
	 	context.font = "10pt Calibri";
	 	context.fillText("AL", x + 554, y + 156);
	 	
	 	context.font = "13pt Calibri";
	 	context.fillText("V", x +515, y+57 );
	 	context.font = "10pt Calibri";
	 	context.fillText("FS", x + 523, y+57 );
	 	
	 	context.font = "13pt Calibri";
	 	context.fillText("V", x +500, y + 220);
	 	context.font = "10pt Calibri";
	 	context.fillText("LL", x + 510, y + 220);
	 	
		context.strokeStyle = "red";
		context.stroke();
		
		//context.fillStyle = "black";
	    context.beginPath();
		context.font = "13pt Calibri";
	    context.fillText(" DC Shunt Generator ", x+543 , y+580 );
	    context.fillStyle = "black";
		
		context.font = "13pt Calibri";
	    context.fillText(" Synchronous Motor ", x+780 , y+580 );
	    context.fillStyle = "black";
	    context.font = "15pt Calibri";
	    context.fillText(" DC Shunt Generator  Ratings :  ", x , y+670 );
	    context.font = "11pt Calibri";
	    context.fillText(" Field Voltage (max) = 220V  ", x+8 , y+710 );
	    context.fillText("Armature Voltage (max) = 440V  ", x+12 , y+730 );
	    context.fillText("Capacity = 5 HP ", x+12 , y+750 );
	    context.fillText("DC Field Current(max) =  2.3 Amp  ", x+12 , y+770 );
	    context.fillText("Armature Current(max) =  9.5 Amp  ", x+12 , y+790 );
	    context.fillText(" Speed =  1500-2000 r.p.m  ", x+10 , y+690 );
	    context.fillStyle = "black";
	    
	    context.font = "15pt Calibri";
	    context.fillText(" Synchronous Motor Rating :  ", x +335, y+670 );
	    context.font = "11pt Calibri";
	    context.fillText(" Rating = 3 KVA  ", x+340 , y+710 );
	    context.fillText("Phase = 3  ", x+344 , y+730 );
	    context.fillText("Frequency = 50 Hz ", x+344 , y+750 );
	    context.fillText("Winding - Delta  ", x+344 , y+770 );
	    context.fillText("Armature Voltage = 415V   ", x+344 , y+790 );
	    context.fillText(" Armature Current = 4.2 Amp ", x+342 , y+810 );
	    context.fillText("Ex. V =220V ", x+346 , y+830 );
	   // context.fillText(" RPM = 1500V ", x+344 , y+860 );
	    context.fillText("No. of Poles = 4 ", x+344 , y+690 );
	    context.fillStyle = "black";
	    
	    //-------------------------------------------
	    context.font = "15pt Calibri";
		context.fillText(" Abbreviations :  ", x + 590, y + 670);

		context.font = "13pt Calibri";
		context.fillText(" V", x + 596, y + 690);
		context.font = "8pt Calibri";
		context.fillText(" LL", x + 607, y + 690);
		context.font = "11pt Calibri";
		context.fillText("=3-\u2205 Line to Line Voltage supplied to synchronous motor", x + 622, y + 690);

		context.font = "13pt Calibri";
		context.fillText("I", x + 602, y + 710);
		context.font = "8pt Calibri";
		context.fillText("AL ", x + 607, y + 710);
		context.font = "11pt Calibri";
		context.fillText("= Armature line current of synchronous motor", x + 622, y + 710);
 
		context.font = "13pt Calibri";
		context.fillText("V ", x + 598, y +730);
		context.font = "8pt Calibri";
		context.fillText("FS  ", x + 607, y +730);
		context.font = "11pt Calibri";
		context.fillText("= Field voltage of synchronous motor ", x + 622, y +730);

		context.font = "13pt Calibri";
		context.fillText("I ", x + 602, y + 750);
		context.font = "8pt Calibri";
		context.fillText("FS ", x + 607, y + 750);
		context.font = "11pt Calibri";
		context.fillText("= Field current of synchronous motor ", x + 622, y +750);

		context.font = "13pt Calibri";
		context.fillText("V ", x + 598, y + 770);
		context.font = "8pt Calibri";
		context.fillText("G", x + 607, y + 770);
		context.font = "11pt Calibri";
		context.fillText("= DC shunt Generator Terminal voltage", x + 622, y + 770);
		
		context.font = "13pt Calibri";
		context.fillText("I", x + 602, y + 790);
		context.font = "8pt Calibri";
		context.fillText("G", x + 607, y + 790);
		context.font = "11pt Calibri";
		context.fillText("= DC shunt Generator load current", x + 622, y + 790);
		context.fillStyle = "black";
		
		//-----------------------------------------------------

		//from fig. 1 voltmeter to xx
		context.moveTo(x + 164, y + 110);
		context.lineTo(x + 164, y + 130);
		context.lineTo(x + 869, y + 130);
		context.moveTo(x + 879, y + 130);
		context.lineTo(x + 893, y + 130);
		context.lineTo(x + 893, y + 420);
		context.lineTo(x + 883, y + 420);

		//draw small circles inside salient pole rotor
		context.moveTo(x + 816, y + 490);
		context.arc(x + 816, y + 490, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 816, y + 500);
		context.arc(x + 816, y + 500, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 870, y + 500);
		context.arc(x + 870, y + 500, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 870, y + 490);
		context.arc(x + 870, y + 489, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 813, y + 489);
		context.lineTo(x + 813, y + 500);
		context.moveTo(x + 818, y + 490);
		context.lineTo(x + 818, y + 500);
		context.moveTo(x + 913, y + 489);
		context.lineTo(x + 913, y + 500);
		context.moveTo(x + 867, y + 488);
		context.lineTo(x + 867, y + 500);
		context.moveTo(x + 872, y + 488);
		context.lineTo(x + 872, y + 500);
		context.strokeStyle = "black";
		context.stroke();


		//from fig1 ammeter to x
		context.beginPath();
	    context.moveTo(x + 495, y);
		context.lineTo(x + 873, y);
		context.lineTo(x + 873, y + 418);
		
		context.arc(x + 873, y + 421, 2, 0, 2 * Math.PI, false);		
		context.moveTo(x + 873, y+423);
		context.lineTo(x + 873, y + 452);
		context.strokeStyle = "red";
		context.stroke();
		
		context.beginPath();
	    context.moveTo(x + 333, y + 72);
		context.lineTo(x + 370, y + 72);
		context.lineTo(x + 370, y + 130);
		context.moveTo(x + 494, y + 90);
		context.lineTo(x + 494, y + 130);
		context.strokeStyle = "black";
		context.stroke();

		//2 nd fig.connection lines
		// three phase volt. source to 3 phase variac
		context.beginPath();
		moveTo(x + 155, y + 181);
		context.lineTo(x + 155, y + 187);
		context.moveTo(x + 265, y + 180);
		context.lineTo(x + 278, y + 180);
		context.lineTo(x + 278, y + 198);
		context.strokeStyle = "red";
		context.stroke();
		
		context.beginPath();
		context.moveTo(x + 269, y + 230);
		context.lineTo(x + 278, y + 230);
		context.lineTo(x + 278, y + 224);
			
		context.strokeStyle = "gold";
		context.stroke();
		//------------ first row red
		
		context.beginPath();
		context.arc(x + 279, y + 200, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 280, y + 200);
		context.lineTo(x + 311, y + 200);	
		
		context.moveTo(x + 311, y + 200);
	    context.bezierCurveTo(x+303,y+212,x+326,y+215,x+318,y+199);  // first part
		
	    context.moveTo(x + 319, y + 200);
	    context.bezierCurveTo(x+308,y+213,x+333,y+213,x+325,y+200);//second part
	
        context.moveTo(x + 327, y + 200);
		context.bezierCurveTo(x+313,y+213,x+341,y+213,x+332,y+200);  // third part
		
		 context.moveTo(x + 333, y + 200);
		 context.bezierCurveTo(x+319,y+213,x+350,y+213,x+338,y+200);  // fourth part
		 
	    context.moveTo(x + 339, y + 200);
		context.bezierCurveTo(x+329,y+213,x+357,y+213,x+344,y+200);  // fifth part
		
		 context.moveTo(x + 344, y + 200);
		 context.lineTo(x + 360, y + 200);
		 context.strokeStyle = "red";
		context.stroke();
		
		//------------ second row gold
		
		context.beginPath();
		context.arc(x + 279, y + 223, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 280, y + 223);
		context.lineTo(x + 311, y + 223);	
		
		context.moveTo(x + 311, y + 224);
		context.bezierCurveTo(x+303,y+235,x+326,y+236,x+318,y+222);  // first part
		
		context.moveTo(x + 319, y + 221);
	    context.bezierCurveTo(x+308,y+236,x+333,y+236,x+325,y+222);//second part
		
		context.moveTo(x + 327, y + 221);
		context.bezierCurveTo(x+313,y+236,x+341,y+236,x+331,y+222);  // third part
		
		context.moveTo(x + 333, y + 222);
		context.bezierCurveTo(x+319,y+236,x+350,y+237,x+338,y+222);  // fourth part
		
		context.moveTo(x + 339, y + 222);
		context.bezierCurveTo(x+329,y+236,x+357,y+236,x+344,y+222);  // fifth part
		context.moveTo(x + 346, y + 223);
		context.lineTo(x + 360, y + 223);
		context.strokeStyle = "gold";
		context.stroke();
		
		//----------third row blue
		
		context.beginPath();
		context.arc(x + 279, y + 246, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 312, y + 246);
		context.lineTo(x + 283, y + 246);
		
		
		context.moveTo(x + 311, y + 247);
		context.bezierCurveTo(x+303,y+258,x+326,y+257,x+318,y+245);  // first part
	
	
		context.moveTo(x + 319, y + 244);
	    context.bezierCurveTo(x+308,y+259,x+333,y+257,x+325,y+245);//second part
	  
	    context.moveTo(x + 327, y + 244);
		context.bezierCurveTo(x+313,y+259,x+341,y+259,x+331,y+245);  // third part
		
			
	    context.moveTo(x + 333, y + 245);
	    context.bezierCurveTo(x+319,y+259,x+350,y+260,x+338,y+245);  // fourth part
	    
	  
	    context.moveTo(x + 339, y + 245);
		context.bezierCurveTo(x+329,y+259,x+357,y+259,x+344,y+245);  // fifth part
		context.moveTo(x + 346, y + 246);
		context.lineTo(x + 360, y + 246);
		
        context.strokeStyle = "blue";
		context.stroke();
		//-----------
		
		
		context.beginPath();
		context.lineTo(x + 278, y + 224);
		context.moveTo(x + 265, y + 280);
		context.lineTo(x + 278, y + 280);		
		context.lineTo(x + 278, y + 248);
		context.strokeStyle = "blue";
		context.stroke();
		
		context.beginPath();
		context.moveTo(x + 390, y + 217);
		context.lineTo(x + 423, y + 217);
		context.lineTo(x + 423, y + 175);
		context.lineTo(x + 493, y + 175);
		context.moveTo(x + 613, y + 174);
		context.lineTo(x + 613, y + 186);
		context.arc(x + 613, y + 190, 2, 0, 2 * Math.PI, false);		
		context.moveTo(x + 613, y+190);
		context.lineTo(x + 613, y + 192);
		context.moveTo(x + 615, y+190);
		context.lineTo(x + 628, y + 190);
		
		context.moveTo(x + 720, y+190);
		context.lineTo(x + 721, y + 190);
		context.arc(x +734, y + 190, 2, 0, 2 * Math.PI, false);	
		
		
		context.moveTo(x + 737, y + 190);
		context.lineTo(x + 805, y + 190);
	    context.lineTo(x + 805, y + 235);
		context.moveTo(x + 805, y + 245);
		context.lineTo(x + 805, y + 285);
		context.moveTo(x + 805, y + 295);
		context.lineTo(x + 805, y + 420);
		
		context.moveTo(x + 270, y + 415);
	    context.lineTo(x + 270, y + 392);
		context.lineTo(x + 378, y + 392);
		context.moveTo(x + 506, y + 392);
		context.lineTo(x + 541, y + 392);
		context.lineTo(x + 541, y + 455);
			
		context.arc(x + 542, y + 457, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 542, y + 460);		
		context.lineTo(x + 542, y + 477);	
		
         
		context.moveTo(x+156,y+180);
		context.lineTo(x+156,y+186);
		context.arc(x + 156, y + 190, 2, 0, 2 * Math.PI, false)
  					
		context.strokeStyle = "red";
		context.stroke();	
		
		context.beginPath();
		context.arc(x + 817, y + 422, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 817, y + 423);		
		context.lineTo(x + 817, y + 452);			
		context.strokeStyle = "red";
		context.stroke();
		
		context.beginPath();
		context.arc(x + 806, y + 422, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 806, y + 423);		
		context.lineTo(x + 806, y + 452);			
		context.strokeStyle = "red";
		context.stroke();
		
		context.beginPath();
		context.moveTo(x + 390, y + 240);
		context.lineTo(x + 440, y + 240);
		context.lineTo(x + 440, y + 290);
		context.lineTo(x + 550, y + 290);
		context.lineTo(x + 550, y + 240);
	    context.lineTo(x + 610, y + 240);
	    
	    context.arc(x + 613, y + 240, 2, 0, 2 * Math.PI, false);
	    context.moveTo(x + 616, y + 240);
	   	context.lineTo(x + 627, y + 240);
	    
	    context.moveTo(x + 734, y + 240);
	    context.arc(x + 734, y + 240, 2, 0, 2 * Math.PI, false);	   
		context.lineTo(x + 828, y + 240);
		context.lineTo(x + 828, y + 285);
		context.moveTo(x + 828, y + 297);
		context.lineTo(x + 828, y + 375);
		context.moveTo(x + 828, y + 386);
		context.lineTo(x + 828, y + 420);
		
		context.arc(x + 828, y + 421, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 828, y + 423);		
		context.lineTo(x + 828, y + 452);	
		context.strokeStyle = "gold";
		context.stroke();
		
		context.beginPath();
		context.arc(x + 839, y + 421, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 839, y + 423);		
		context.lineTo(x + 839, y + 452);	
		context.strokeStyle = "gold";
		context.stroke();
		
		context.beginPath();
		context.arc(x + 850, y + 421, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 850, y + 423);		
		context.lineTo(x + 850, y + 452);	
		
		context.moveTo(x + 734, y + 290);
	    context.arc(x + 734, y + 290, 2, 0, 2 * Math.PI, false);
	    context.moveTo(x + 720, y + 290);		
		context.lineTo(x + 733, y + 290);	
	    
		context.strokeStyle = "blue";
		context.stroke();
		
		context.beginPath();
		context.arc(x + 861, y + 421, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 861, y + 423);		
		context.lineTo(x + 861, y + 452);	
		context.strokeStyle = "blue";
		context.stroke();
		
		context.beginPath();
		context.moveTo(x + 390, y + 263);
		context.lineTo(x + 423, y + 263);
		context.lineTo(x + 423, y + 300);
		context.lineTo(x + 613, y + 300);
		context.lineTo(x + 613, y + 290);
		context.arc(x + 613, y + 291, 2, 0, 2 * Math.PI, false);
		
		context.moveTo(x + 614, y + 290);
		context.lineTo(x + 630, y + 290);
		context.strokeStyle = "blue";
		context.stroke();
		
		context.beginPath();
		context.moveTo(x + 816, y + 422);
		context.lineTo(x + 816, y + 380);
		context.lineTo(x + 861, y + 380);
		context.lineTo(x + 861, y + 418);
		context.moveTo(x + 840, y + 380);
		context.lineTo(x + 840, y + 418);
		context.strokeStyle = "black";
		context.stroke();
		
		context.beginPath();
		context.moveTo(x + 733, y + 290);
		context.lineTo(x + 850, y + 290);
		context.lineTo(x + 850, y + 375);
		context.moveTo(x + 850, y + 386);
		context.lineTo(x + 850, y + 420);
		context.strokeStyle = "blue";
		context.stroke();
		
				
		context.beginPath();		
		context.moveTo(x + 278, y + 572);
		context.lineTo(x + 278, y + 590);
		context.lineTo(x + 543, y + 590);
		context.moveTo(x + 503, y + 485);
		context.lineTo(x + 503, y + 590);
		context.moveTo(x + 543, y + 545);
		context.lineTo(x + 543, y + 590);
		context.strokeStyle = "black";
		context.stroke();
		
		context.beginPath();	
		x = x + 800;
		y = y + 327;
		context.moveTo(x + 27, y + 50);
	    context.bezierCurveTo(x + 27, y + 48, x + 30, y + 47, x + 35, y + 52);
		context.bezierCurveTo(x + 35, y + 54, x + 35, y + 52, x + 33, y + 58);
		context.bezierCurveTo(x + 31, y + 57, x + 31, y + 62, x + 27, y + 58);
		context.strokeStyle = "gold";
		context.stroke();
		
		context.beginPath();		
		x = x + 23;
		context.moveTo(x + 27, y + 50);
		context.bezierCurveTo(x + 27, y + 48, x + 30, y + 47, x + 35, y + 52);
		context.bezierCurveTo(x + 35, y + 54, x + 35, y + 52, x + 33, y + 58);
		context.bezierCurveTo(x + 31, y + 57, x + 31, y + 62, x + 27, y + 58);
		context.strokeStyle = "blue";
		context.stroke();
		
		context.beginPath();	
		x = x - 23;
		y = y - 90;
		context.moveTo(x + 27, y + 50);
		context.bezierCurveTo(x + 27, y + 48, x + 30, y + 47, x + 35, y + 52);
		context.bezierCurveTo(x + 35, y + 54, x + 35, y + 52, x + 33, y + 58);
		context.bezierCurveTo(x + 31, y + 57, x + 31, y + 62, x + 27, y + 58);
		context.strokeStyle = "gold";
		context.stroke();
		
		context.beginPath();	
		x = x - 23;
		context.moveTo(x + 27, y + 50);
		context.bezierCurveTo(x + 27, y + 48, x + 30, y + 47, x + 35, y + 52);
		context.bezierCurveTo(x + 35, y + 54, x + 35, y + 52, x + 33, y + 58);
		context.bezierCurveTo(x + 31, y + 57, x + 31, y + 62, x + 27, y + 58);
		y = y - 50;
		context.moveTo(x + 27, y + 50);
		context.bezierCurveTo(x + 27, y + 48, x + 30, y + 47, x + 35, y + 52);
		context.bezierCurveTo(x + 35, y + 54, x + 35, y + 52, x + 33, y + 58);
		context.bezierCurveTo(x + 31, y + 57, x + 31, y + 62, x + 27, y + 58);
		context.strokeStyle = "red";
		context.stroke();
		
		context.beginPath();	
		x = x + 32;
		y = y - 81;
		context.moveTo(x + 60, y + 25);
		context.bezierCurveTo(x + 56, y + 20, x + 55, y + 20, x + 60, y + 12);
		context.bezierCurveTo(x + 66, y + 9, x + 64, y + 9, x + 70, y + 12);
		context.bezierCurveTo(x + 71, y + 15, x + 76, y + 18, x + 70, y + 25);
		context.rect(x + 140, y + 340, 80, 20);
		context.font = "10pt Calibri";
		context.fillText("+", x - 495, y - 97);
		context.fillText("-", x - 550, y + 14);
		context.fillText("220V", x - 740, y - 45);
		context.fillText("D.C.", x - 740, y - 35);
		context.lineWidth = "2";
		context.strokeStyle = "Black";
		context.stroke();
	}
	exp9.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		exp9.firstPoint();
	}
	exp9.toggleDpst = function(flagExp9Dpst, canIdAttr) {//alert("dog");
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
		if(flagExp9Dpst == true) {
			exp9.eraseLine1();
			exp9.drawSlope1();
		} else {
			 exp9.eraseLine11();
			 exp9.drawSlope11();
		}
	}
	exp9.eraseLine1 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(122, 99);
		context.lineTo(100, 89);
		context.moveTo(109, 95);
		context.lineTo(109, 183);
		context.moveTo(112, 95);
		context.lineTo(112, 185);
		context.moveTo(122, 189);
		context.lineTo(100, 180);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}
	exp9.drawSlope1 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(122, 100);
		context.lineTo(100, 100);
		context.moveTo(109, 100);
		context.lineTo(109, 190);
		context.moveTo(112, 100);
		context.lineTo(112, 190);
		context.moveTo(122, 190);
		context.lineTo(100, 190);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	exp9.eraseLine11 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(122, 100);
		context.lineTo(102, 100);
		context.moveTo(109, 100);
		context.lineTo(109, 190);
		context.moveTo(112, 100);
		context.lineTo(112, 190);
		context.moveTo(122, 190);
		context.lineTo(102, 190);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}
	exp9.drawSlope11 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(122, 99);
		context.lineTo(100, 89);
		context.moveTo(109, 94);
		context.lineTo(109, 183);
		context.moveTo(112, 95);
		context.lineTo(112, 185);
		context.moveTo(122, 189);
		context.lineTo(100, 180);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
	exp9.FieldSwitch = function(FieldVoltage, FieldCurrent) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.font = "10pt Calibri";
		context.fillStyle = "yellow";
		context.fillRect(x - 584, y - 502, 48, 15);
		context.fillStyle = "black";
		context.fillText((Math.round(FieldCurrent * Math.pow(10, 2)) / Math.pow(10, 2)) + "A", x - 578, y - 490);
		context.fillStyle = "yellow"
		context.fillRect(x - 497, y - 462, 38, 13);
		context.fillStyle = "black";
		context.fillText(FieldVoltage + "V", x - 492, y - 452);
	}
	exp9.TpstSwitch = function(voltageCount, approxSpeed, Ial, Vt, wattmeterReading, Il) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.font = "10pt Calibri";
		context.fillStyle = "yellow";
		context.fillRect(x - 503, y - 280, 38, 13);
		context.fillStyle = "black";
		context.fillText(voltageCount + "V", x - 500, y - 270);
		context.fillStyle = "yellow"
		context.fillRect(x - 448, y - 335, 38, 13);
		context.fillStyle = "black";
		context.fillText(Ial.toFixed(2) + "A", x - 447, y - 325);
		context.fillStyle = "yellow"
		context.fillRect(x - 275, y - 334, 38, 13);
		context.fillStyle = "black";
		context.fillText(wattmeterReading.toFixed(2), x - 273, y - 324);
		context.fillStyle = "yellow"
		context.fillRect(x - 558, y - 117, 38, 13);
		context.fillStyle = "black";
		context.fillText(Il.toFixed(2) + "A", x - 556, y - 107);
		context.fillStyle = "yellow"
		context.fillRect(x - 487, y - 69, 38, 13);
		context.fillStyle = "black";
		context.fillText(Vt.toFixed(0) + "V", x - 485, y - 59);
		context.fillStyle = "red"
		context.fillRect(x + 3, y - 31, 78, 18);
		context.fillStyle = "black";
		context.fillText(approxSpeed.toFixed(0) + " rpm", x + 7, y - 19);
	}
	exp9.voltageUpField = function(flagExp9Dpst) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		if(xPoint > 246.40) {
			context.moveTo(xPoint - 4, 120);
			context.lineTo(xPoint - 4, 79);
			context.fillRect(recXPoint - 4, 120, 9, 6);
			context.lineWidth = "2";
			context.strokeStyle = "red";
			context.stroke();
			t1 = xPoint;
			t2 = recXPoint;

			context.beginPath();
			context.moveTo(xPoint - 2, 120);
			context.lineTo(xPoint - 2, 81);
			context.strokeStyle = "#FFFFFF";
			
			context.fillStyle = "#FFFFFF";
			context.fillRect(recXPoint + 4.36, 120, 9, 6);
			context.lineWidth = "2";
			context.strokeStyle = "#FFFFFF";
			context.stroke();
			xPoint -= 0.64;
			recXPoint -= 0.64;
			context.fillStyle = "red";
		}
	}
	exp9.voltageDownField = function(flagExp9Dpst) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		if(xPoint < 315.73) {
			context.moveTo(xPoint - 3.28, 120);
			context.lineTo(xPoint - 3.28, 79);
			context.fillRect(recXPoint - 3.28, 120, 9, 6);
			context.lineWidth = "2";
			context.strokeStyle = "red";
			context.stroke();
			t1 = xPoint;
			t2 = recXPoint;

			context.beginPath();
			context.moveTo(xPoint - 6.64, 120);
			context.lineTo(xPoint - 6.64, 79);
			context.fillStyle = "#FFFFFF";
			context.fillRect(recXPoint - 11.52, 120, 9, 6);
			context.lineWidth = "6";
			context.strokeStyle = "#FFFFFF";
			context.stroke();
			xPoint += 0.64;
			recXPoint += 0.64;
			context.fillStyle = "red";
		}
	}

	exp9.fieldDpstOff = function(flagExp9Dpst) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(t1 - 2, 123);
		context.lineTo(t1 - 2, 74);
		context.lineTo(313, 80);
		context.fillStyle = "#FFFFFF";
		context.fillRect(t2 - 4, 120, 9, 6);
		context.lineWidth = "15";
		context.strokeStyle = "#FFFFFF";
		context.stroke();

		context.beginPath();
		context.moveTo(313, 120);
		context.lineTo(313, 80);
		context.lineTo(318, 80);
		context.fillStyle = "black";
		context.fillRect(308, 120, 9, 6);
		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
		xPoint = 316.36, recXPoint = 311.36;
	}

	exp9.toggleTPST = function(flagExp9Tpst, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
		if(flagExp9Tpst == true) {
			exp9.eraseLine2();
			exp9.drawSlope2();
		} else {
			exp9.eraseLine22();
			exp9.drawSlope22();
		}
	}
	exp9.eraseLine2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(205, 250);
		context.lineTo(228, 259);
		context.moveTo(213, 254);
		context.lineTo(213, 351);
		context.moveTo(218, 255);
		context.lineTo(218, 352);
		context.moveTo(206, 299);
		context.lineTo(229, 309);
		context.moveTo(205, 350);
		context.lineTo(228, 358);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}
	exp9.drawSlope2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(228, 260);
		context.lineTo(206, 260);
		context.moveTo(214, 260);
		context.lineTo(214, 360);
		context.moveTo(218, 260);
		context.lineTo(218, 360);
		context.moveTo(229, 310);
		context.lineTo(206, 310);
		context.moveTo(228, 360);
		context.lineTo(206, 360);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	exp9.eraseLine22 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(228, 260);
		context.lineTo(206, 260);
		context.moveTo(214, 260);
		context.lineTo(214, 360);
		context.moveTo(218, 260);
		context.lineTo(218, 360);
		context.moveTo(229, 310);
		context.lineTo(206, 310);
		context.moveTo(228, 360);
		context.lineTo(206, 360);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp9.drawSlope22 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(205, 250);
		context.lineTo(228, 259);
		context.moveTo(214, 254);
		context.lineTo(214, 353);
		context.moveTo(218, 255);
		context.lineTo(218, 354);
		context.moveTo(206, 299);
		context.lineTo(229, 309);
		context.moveTo(205, 350);
		context.lineTo(228, 358);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	exp9.toggleMainLoad = function(flagExp9MainLoad, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagExp9MainLoad == true) {
			exp9.eraseLine3();
			exp9.drawSlope3();
		} else {
			exp9.eraseLine33();
			exp9.drawSlope33();
		}
	}
	exp9.eraseLine3 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(352, 517);
		context.lineTo(361, 504);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}
	exp9.drawSlope3 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(350, 516);
		context.lineTo(350, 502);
		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
	}
	exp9.eraseLine33 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(350, 516);
		context.lineTo(350, 504);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}
	exp9.drawSlope33 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(352, 517);
		context.lineTo(361, 504);
		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
	}
	exp9.toggleLoad1 = function(flagExp9Load1, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagExp9Load1 == true) {
			exp9.eraseLine4();
			exp9.drawSlope4();
		} else {
			exp9.eraseLine44();
			exp9.drawSlope44();
		}
	}
	exp9.eraseLine4 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(300, 566);
		context.lineTo(305, 552);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp9.drawSlope4 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(300, 567);
		context.lineTo(300, 552);
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
	}

	exp9.eraseLine44 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(300, 567);
		context.lineTo(300, 552);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp9.drawSlope44 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(300, 567);
		context.lineTo(305, 552);
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
	}

	exp9.toggleLoad2 = function(flagExp9Load2, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagExp9Load2 == true) {
			exp9.eraseLine5();
			exp9.drawSlope5();
		} else {
			exp9.eraseLine55();
			exp9.drawSlope55();
		}
	}
	exp9.eraseLine5 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(325, 566);
		context.lineTo(330, 552);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}
	exp9.drawSlope5 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(325, 567);
		context.lineTo(325, 551);
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
	}
	exp9.eraseLine55 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(325, 567);
		context.lineTo(325, 551);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}
	exp9.drawSlope55 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(325, 567);
		context.lineTo(330, 552);
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
	}
	exp9.toggleLoad3 = function(flagExp9Load3, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagExp9Load3 == true) {
			exp9.eraseLine6();
			exp9.drawSlope6();
		} else {
			exp9.eraseLine66();
			exp9.drawSlope66();
		}
	}
	exp9.eraseLine6 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(350, 566);
		context.lineTo(354, 552);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp9.drawSlope6 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(350, 567);
		context.lineTo(350, 552);
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
	}

	exp9.eraseLine66 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(350, 567);
		context.lineTo(350, 552);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp9.drawSlope66 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(350, 567);
		context.lineTo(354, 552);
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
	}

	exp9.toggleLoad4 = function(flagExp9Load4, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagExp9Load4 == true) {
			exp9.eraseLine7();
			exp9.drawSlope7();
		} else {
			exp9.eraseLine77();
			exp9.drawSlope77();
		}
	}
	exp9.eraseLine7 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(375, 566);
		context.lineTo(380, 551);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}
	exp9.drawSlope7 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(375, 567);
		context.lineTo(375, 552);
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
	}
	exp9.eraseLine77 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(375, 567);
		context.lineTo(375, 552);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}
	exp9.drawSlope77 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(375, 567);
		context.lineTo(380, 551);
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
	}
	exp9.toggleLoad5 = function(flagExp9Load5, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagExp9Load5 == true) {
			exp9.eraseLine8();
			exp9.drawSlope8();
		} else {
			exp9.eraseLine88();
			exp9.drawSlope88();
		}
	}
	exp9.eraseLine8 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(400, 566);
		context.lineTo(405, 552);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}
	exp9.drawSlope8 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(400, 567);
		context.lineTo(400, 552);
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
	}
	exp9.eraseLine88 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(400, 567);
		context.lineTo(400, 552);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}
	exp9.drawSlope88 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(400, 567);
		context.lineTo(405, 552);
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
	}
	exp9.voltageUp = function(flagExp9Tpst) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		if(xxPoint < 352) {
			for(var i = 0; i <= 2; i++) {
				context.moveTo(xxPoint - 1.5, yPoint);
				context.lineTo(xPoint1 - 1.5, yPoint);
				this.canvas_arrow(context, xxPoint - 1.5, yPoint, xxPoint - 1.5, yPoint1 + 1.7);
				yPoint += 23;
				yPoint1 += 23;
			}
			context.lineWidth = "2";
			context.strokeStyle = "#FFFFFF";
			context.stroke();

			context.beginPath();
			xxPoint += 0.353;
			console.log("xxPoint : " + xxPoint); yPoint = 297, yPoint1 = 292 ;
			for(var i = 0; i <= 2; i++) {
				context.moveTo(xxPoint, yPoint);
				context.lineTo(xPoint1, yPoint);
				this.canvas_arrow(context, xxPoint, yPoint, xxPoint, yPoint1);
				yPoint += 23;
				yPoint1 += 23;
			}
			context.lineWidth = "2";
			context.strokeStyle = "black";
			context.stroke(); yPoint = 297, yPoint1 = 292 ;
			c += 5;
			console.log("count :" + c);
		}
	}
	exp9.voltageDown = function(flagExp9Tpst) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		if(xxPoint > 316) {
			for(var i = 0; i <= 2; i++) {
				context.moveTo(xxPoint + 1.5, yPoint);
				context.lineTo(xPoint1 + 1.5, yPoint);
				this.canvas_arrow(context, xxPoint + 1.5, yPoint, xxPoint + 1.5, yPoint1 + 1.7);
				yPoint += 23;
				yPoint1 += 23;
			}
			context.lineWidth = "2";
			context.strokeStyle = "#FFFFFF";
			context.stroke();

			context.beginPath();
			xxPoint -= 0.353;
			console.log("xPoint : " + xxPoint);
			yPoint = 297, yPoint1 = 292;

			for(var i = 0; i <= 2; i++) {
				context.moveTo(xxPoint, yPoint);
				context.lineTo(xPoint1 + 2, yPoint);
				this.canvas_arrow(context, xxPoint, yPoint, xxPoint, yPoint1);
				yPoint += 23;
				yPoint1 += 23;
			}
			context.lineWidth = "2";
			context.strokeStyle = "black";
			context.stroke(); yPoint = 297, yPoint1 = 292;
			c -= 5;
			console.log("count :" + c);
		}

	}
	exp9.TPSTOff = function(flagExp9Tpst) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(xxPoint - 1.5, yPoint - 1.5);
		if(xxPoint > 316) {
			console.log("xPoint : " + xxPoint);
			for(var i = 0; i <= 2; i++) {
				context.moveTo(xxPoint - 10, yPoint);
				context.lineTo(xPoint1 - 20, yPoint);
				this.canvas_arrow1(context, xxPoint, yPoint, xxPoint, yPoint1 - 0.7);
				yPoint += 23;
				yPoint1 += 23;
			} yPoint = 297, yPoint1 = 292;
			context.lineWidth = "2";
			context.strokeStyle = "#FFFFFF";
			context.stroke();

			context.beginPath();
			if(xxPoint > 316) {
				for(var i = 0; i <= 2; i++) {
					context.moveTo(xPoint3 + 1.5, yPoint);
					context.lineTo(xPoint4 + 1.5, yPoint);
					this.canvas_arrow(context, xPoint3 + 1.5, yPoint, xPoint3 + 1.5, yPoint1 + 1.7);
					yPoint += 23;
					yPoint1 += 23;
				}

				context.lineWidth = "2";
				context.strokeStyle = "black";
				context.stroke();
				yPoint = 297, yPoint1 = 292, xxPoint = 316, xPoint1 = 400;
			}
		}

	}
	exp9.canvas_arrow = function(context, fromx, fromy, tox, toy) {
		var headlen = 4;
		var angle = Math.atan2(toy - fromy, tox - fromx);
		context.moveTo(fromx, fromy);
		context.lineTo(tox, toy);
		context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
		context.moveTo(tox, toy);
		context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
	}

	exp9.canvas_arrow1 = function(context, fromx, fromy, tox, toy) {
		var headlen = 7;
		var angle = Math.atan2(toy - fromy, tox - fromx);
		context.moveTo(fromx, fromy);
		context.lineTo(tox, toy);
		context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
		context.moveTo(tox, toy);
		context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
	}
	
	exp9.toggleLoad = function(){
			exp9.eraseLine44();
			exp9.drawSlope44();
			
			exp9.eraseLine55();
			exp9.drawSlope55();
			
			exp9.eraseLine66();
			exp9.drawSlope66();
			
			exp9.eraseLine77();
			exp9.drawSlope77();
			
			exp9.eraseLine88();
			exp9.drawSlope88();
	}
	
})(exp9canvas);
