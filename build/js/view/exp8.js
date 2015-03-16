var exp8canvas = exp8 = exp8canvas || {}; (function(exp8) {
	var globalObject = {
		x : 5,
		y : 80,
		x1 : 60,
		y1 : 70,
		x2 : 15,
		y2 : 72,

	}

	var xPoint = 340.36, recXPoint = 336.36, t1, t2;
	var motorXPoint = 321.18, motorRecXPoint = 317.18;

	exp8.firstPoint = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		//dc fixed voltage source
		globalObject.y = globalObject.y + 100;
		dcvoltagecanvas.drawPoint(globalObject);
		//dpst
		globalObject.x = globalObject.x + 50;
		globalObject.y = globalObject.y - 1;
		dpstcanvas.firstRow(globalObject);
		dpstcanvas.secondRow(globalObject);
		dpstcanvas.switchDpst(globalObject);
		//rheostat
		globalObject.x = globalObject.x + 200;
		globalObject.y = globalObject.y - 20;
		rheostatcanvas.drawPoint(globalObject);
		rheostatcanvas.drawCurves(globalObject);
		rheostatcanvas.control(globalObject);
		//ammeter
		globalObject.x = globalObject.x + 140;
		globalObject.y = globalObject.y - 30;
		miammdccanvas.firstPoint(globalObject);
		miammdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("I", x + 450, y + 25);
		context.font = "8pt Calibri";
		context.fillText("FA", x + 454, y + 28);
		//voltmeter
		globalObject.x = globalObject.x + 124;
		globalObject.y = globalObject.y - 20;
		mivoltdccanvas.firstPoint(globalObject);
		mivoltdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("V", x + 475, y + 96);
		context.font = "8pt Calibri";
		context.fillText("FA", x + 483, y + 99);
		//resis load
		globalObject.x = globalObject.x - 420;
		globalObject.y = globalObject.y + 250;
		threepresisloadcanvas.drawLine(globalObject);
		threepresisloadcanvas.drawPoint(globalObject);
		threepresisloadcanvas.zigLines(globalObject);
		exp8.redRegister(globalObject);
		exp8.yellowRegister(globalObject);
		exp8.blueRegister(globalObject);
		
		//ammetter ac
		globalObject.x = globalObject.x + 580;
		globalObject.y = globalObject.y + 15;
		miammaccanvas.firstVerticalFig(globalObject);
		//ammetter ac
		globalObject.x = globalObject.x + 80;
		globalObject.y = globalObject.y;
		miammaccanvas.firstVerticalFig(globalObject);
		//ammetter ac
		globalObject.x = globalObject.x + 75;
		globalObject.y = globalObject.y;
		miammaccanvas.firstVerticalFig(globalObject);
		//dc fixed voltage source
		globalObject.x = globalObject.x - 800;
		globalObject.y = globalObject.y + 232;
		//saturday
		dcvoltagecanvas.drawPoint(globalObject);
		//dpst
		globalObject.x = globalObject.x + 51;
		globalObject.y = globalObject.y - 2;
		dpstcanvas.firstRow(globalObject);
		dpstcanvas.secondRow(globalObject);
		dpstcanvas.switchDpst(globalObject);

		globalObject.y = globalObject.y + 30;
		// dc variable
		globalObject.x = globalObject.x + 150;
		globalObject.y = globalObject.y - 65;
		dcvariablecanvas.drawRectangle(globalObject);
		dcvariablecanvas.drawPoints(globalObject);
		dcvariablecanvas.readingShow(globalObject);
		dcvariablecanvas.control(globalObject);
		// rheostatcanvas.drawPoint(globalObject);
		// rheostatcanvas.drawCurves(globalObject);

		globalObject.y = globalObject.y + 45;
		globalObject.x = globalObject.x + 48;
		//rtgrtrtrtrtrrr

		//ammeter
		globalObject.x = globalObject.x + 60;
		globalObject.y = globalObject.y - 30;
		miammdccanvas.firstPoint(globalObject);
		miammdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("I", x + 400, y + 480);
		context.font = "8pt Calibri";
		context.fillText("ASH", x + 403, y + 483);
		//voltmeter
		globalObject.x = globalObject.x + 124;
		globalObject.y = globalObject.y - 20;
		mivoltdccanvas.firstPoint(globalObject);
		mivoltdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("V", x + 420, y + 560);
		context.font = "8pt Calibri";
		context.fillText("ASH", x + 425, y + 563);
		//dc motor
		globalObject.x = globalObject.x + 60;
		globalObject.y = globalObject.y + 15;
		selfexcdccanvas.drawRectangle(globalObject);
		selfexcdccanvas.drawCoil(globalObject);
		//coupling
		globalObject.x = globalObject.x + 143;
		globalObject.y = globalObject.y + 17;
		couplingcanvas.drawRectangle(globalObject);
		//salient pole rotor
		globalObject.x = globalObject.x + 107;
		globalObject.y = globalObject.y + 3;
		salientrotorcanvas.drawRectangle(globalObject);
		salientrotorcanvas.drawPoints(globalObject);
		salientrotorcanvas.drawCurves(globalObject);
		salientrotorcanvas.drawSpirals(globalObject);
		//tachometer
		globalObject.x = globalObject.x + 140;
		globalObject.y = globalObject.y + 5;
		globalObject.x1 = globalObject.x1 + 870;
		globalObject.y1 = globalObject.y1 + 543;
		globalObject.x2 = globalObject.x2 + 878;
		globalObject.y2 = globalObject.y2 + 545;
		tachometercanvas.drawRectangle(globalObject);
		tachometercanvas.drawLine(globalObject);
		tachometercanvas.drawCurves(globalObject);

		globalObject.x = globalObject.x + 10;
		globalObject.y = globalObject.y - 120;
		acvoltmetercanvas.firstHorizacVoltmeter(globalObject);

		globalObject.x = globalObject.x + 6;
		globalObject.y = globalObject.y - 43;
		acvoltmetercanvas.firstHorizacVoltmeter(globalObject);

		globalObject.x = globalObject.x - 85;
		globalObject.y = globalObject.y;
		acvoltmetercanvas.firstHorizacVoltmeter(globalObject);
		//
		
		context.rect(x + 920, y + 502, 74, 17);
		context.rect(x + 622, y + 310, 40, 17);
		context.rect(x + 704, y + 310, 40, 17);
		context.rect(x + 784, y + 310, 40, 17);
		context.rect(x + 680, y + 358, 40, 17);
		context.rect(x + 760, y + 358, 40, 17);
		context.rect(x + 760, y + 400, 40, 17);
		
		context.font = "11pt Calibri";
		context.fillText("I", x + 635, y + 340);
		context.fillText("I", x + 720, y + 340);
		context.fillText("I", x + 800, y + 340);
		context.fillText("V", x + 724, y + 370);
		context.fillText("V", x + 805, y + 370);
		context.fillText("V", x + 805, y + 415);
		context.font = "8pt Calibri";
		context.fillText("R", x + 638, y + 343);
		context.fillText("y", x + 723, y + 343);
		context.fillText("B", x + 803, y + 343);
		context.fillText("RY", x + 730, y + 375);
		context.fillText("YB", x + 810, y + 375);
		context.fillText("BR", x + 810, y + 420);
		
		context.font = "13pt Calibri";
		context.fillText(" DC Shunt Motor ", x + 510, y + 630);
		context.fillStyle = "black";

		context.font = "13pt Calibri";
		context.fillText(" Alternator ", x + 765, y + 620);
		context.fillStyle = "black";

		context.font = "15pt Calibri";
		context.fillText("DC Shunt Motor  Ratings :  ", x, y + 660);
		context.font = "11pt Calibri";
		context.fillText("Field Voltage (max) = 220V  ", x + 8, y + 680);
		context.fillText("Armature Voltage (max) = 440V  ", x + 8, y + 700);
		context.fillText("Capacity = 5 HP ", x + 8, y + 720);
		context.fillText("DC Field Current(max) =  2.3 Amp  ", x + 8, y + 740);
		context.fillText("Armature Current(max) =  9.5 Amp  ", x + 8, y + 760);
		context.fillText("Speed = 1500-2000 R.P.M  ", x + 8, y + 780);
		context.fillStyle = "black";

		context.font = "15pt Calibri";
		context.fillText(" Alternator  Ratings :  ", x + 350, y + 660);
		context.font = "11pt Calibri";
		context.fillText("Rating = 3 KVA  ", x + 358, y + 680);
		context.fillText("Phase = 3  ", x + 358, y + 695);
		context.fillText("Frequency = 50 Hz ", x + 358, y + 710);
		context.fillText("Winding - Delta  ", x + 358, y + 725);
		context.fillText("Armature Voltage = 415V   ", x + 358, y + 740);
		context.fillText("Armature Current = 4.2 Amp ", x + 358, y + 755);
		context.fillText("Excitation Voltage  =220V ", x + 358, y + 770);
		context.fillText("Speed = 1500rpm ", x + 358, y + 785);
		context.fillText("No.of poles = 4 ", x + 358, y + 800);
		context.fillStyle = "black";

//added by shubhangi

		context.font = "15pt Calibri";
		context.fillText(" Abbrivations :  ", x + 690, y + 660);
		context.font = "11pt Calibri";
		context.fillText("I", x + 700, y + 680);
		context.fillText("V", x + 700, y + 700);
		context.fillText("I", x + 700, y + 720);
		context.fillText("V", x + 700, y + 740);
		context.fillText("V", x + 700, y + 760);
		context.fillText("V", x + 725, y + 760);
		context.fillText("V", x + 750, y + 760);
		context.fillText("I", x + 700, y + 780);
		context.fillText("I", x + 715, y + 780);
		context.fillText("I", x + 730, y + 780);

		context.font = "8pt Calibri";
		context.fillText("ASH", x + 703, y + 682);
		context.fillText("ASH", x + 705, y + 702);
		context.fillText("FA ", x + 703, y + 722);
		context.fillText("FA ", x + 707, y + 742);
		context.fillText("RY , ", x + 707, y + 762);
		context.fillText("YB , ", x + 732, y + 762);
		context.fillText("BR  ", x + 758, y + 762);
		context.fillText("R , ", x + 703, y + 782);
		context.fillText("Y , ", x + 718, y + 782);
		context.fillText("B  ", x + 733, y + 782);

		context.font = "11pt Calibri";
		context.fillText(" = Armature current of DC shunt motor ", x + 720, y + 680);
		context.fillText(" = Armature voltage of DC shunt motor  ", x + 720, y + 700);
		context.fillText(" = Field current of an alternator ", x + 720, y + 720);
		context.fillText(" = Field voltage of an Alternator", x + 720, y +740);
		context.fillText("are line voltage of an Alternator ", x + 780, y + 760);
		context.fillText("are line current of an Alternator ", x + 750, y + 780);
		context.fillStyle = "black";
		context.font = "17pt Calibri";
		context.fillText("", x + 5, y - 50);
		context.fillText("Circuit Diagram: Load  Test on Three Phase Alternator", x + 5, y - 20);
		context.stroke();
		
		//threeRegister
      //  context.beginPath();
      //	context.moveTo(x +99, y + 394);
      //	context.lineTo(x+199,y+394);
      //	context.lineTo(x+199,y+370);
        
        
        // context.beginPath();
      
			//for( i = 0; i < 5; i++) {
			//	context.moveTo(x + 99, y + 394);
			//	context.lineTo(x+199,y+394);
      //	context.lineTo(x+199,y+370);
				//context.lineTo(x + 12, y + 85);
				//context.lineTo(x + 5, y + 80);
				//context.lineTo(x + 12, y + 75);
				//context.lineTo(x + 5, y + 70);
				//context.lineTo(x + 12, y + 65);
				//context.lineTo(x + 5, y + 60);
				//context.lineTo(x + 5, y + 38);
				//context.lineTo(x + 15, y + 25);
			//	x = x + 10;
			//	y = y;
			//}
		
       // context.lineWidth = "2";
		//context.strokeStyle = "red";
		//context.stroke();
		
		
		context.beginPath();
		 
		context.moveTo(x + 162, y + 79);
		context.lineTo(x + 238, y + 79);
		context.lineTo(x + 238, y + 120);
		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();

	context.beginPath();
		context.moveTo(x + 334, y + 90);
		context.lineTo(x + 334, y + 48);
		context.lineTo(x + 388, y + 48);
		context.fillRect(x + 331, y + 90, 9, 6);
		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
		// field rheostat
context.beginPath();
		//line to xx
		context.moveTo(x + 162, y + 170);
		context.lineTo(x + 162, y + 193);
		context.lineTo(x + 835, y + 193);

		context.moveTo(x + 847, y + 193);
		context.lineTo(x + 857, y + 193);
		context.lineTo(x + 857, y + 467);
		context.lineTo(x + 850, y + 467);

		context.moveTo(x + 514, y + 193);
		context.lineTo(x + 514, y + 143);

		context.moveTo(x + 363, y + 121);
		context.lineTo(x + 430, y + 121);
		context.lineTo(x + 430, y + 192);

		//2 nd
		context.moveTo(x + 284, y + 250);
		context.lineTo(x + 284, y + 228);
		context.lineTo(x + 542, y + 228);
		context.lineTo(x + 542, y + 443);
		context.lineTo(x + 149, y + 443);
		context.lineTo(x + 149, y + 413);

		// 3rd
		context.moveTo(x + 424, y + 248);
		context.lineTo(x + 424, y + 235);
		context.lineTo(x + 510, y + 235);
		context.lineTo(x + 510, y + 435);
		context.lineTo(x + 284, y + 435);
		context.lineTo(x + 284, y + 417);

		context.moveTo(x + 424, y + 415);
		context.lineTo(x + 424, y + 427);
		context.lineTo(x + 504, y + 427);
		context.moveTo(x + 516, y + 427);
		context.lineTo(x + 535, y + 427);
		context.moveTo(x + 546, y + 427);
		context.lineTo(x + 575, y + 427);
		context.lineTo(x + 575, y + 203);
		context.lineTo(x + 149, y + 203);
		context.lineTo(x + 149, y + 247);

		context.lineWidth = "2";
  	   context.strokeStyle="black";
   	 context.stroke();

		//from ammeter s3
		context.beginPath();//yellow lines
		context.arc(x+754, y + 294, 1.5, 0, 2 * Math.PI, false);
		context.moveTo(x + 754, y + 350);
		context.lineTo(x + 754, y + 385);
		
		context.moveTo(x + 754, y + 328);
		context.lineTo(x + 754, y + 298);
		context.lineTo(x + 754, y + 258);
		context.lineTo(x + 580, y + 258);
		context.moveTo(x + 567, y + 258);
		context.lineTo(x + 546, y + 258);
		context.moveTo(x + 510, y + 258);
		context.lineTo(x + 538, y + 258);
	
		//from r2 ammeter
		
		context.moveTo(x + 794, y + 498);
	//	context.arc(x+794, y + 465, 2, 0, 2 * Math.PI, false);
	//	context.moveTo(x + 793, y + 465);
		context.lineTo(x + 794, y + 460);
		context.moveTo(x + 794, y + 467);
		context.lineTo(x + 794, y + 445);
		context.lineTo(x + 754, y + 445);
		context.lineTo(x + 754, y + 433);
		context.moveTo(x+805,y+462);
		context.lineTo(x+805,y+498);
		context.moveTo(x + 806, y + 460);
		context.lineTo(x + 806, y + 466);
		context.moveTo(x + 754, y + 425);
		context.lineTo(x + 754, y + 385);
		
		context.lineWidth = "2";
		 context.strokeStyle = "#FFD700";
		context.stroke();
		// //
		//from ammeter s2
		context.beginPath();
		context.arc(x+829, y + 294, 1.5, 0, 2 * Math.PI, false);
		context.moveTo(x + 829, y + 294);
		context.lineTo(x + 829, y + 330);
		context.moveTo(x + 829, y + 350);
		context.lineTo(x + 829, y + 387);
		context.arc(x+829, y + 387, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 829, y + 389);
		context.lineTo(x + 829, y + 445);
		context.lineTo(x + 816, y + 445);
		context.lineTo(x + 816, y + 500);
		//context.lineTo(x + 816, y + 445);
		
		
		context.moveTo(x + 828, y + 294);
		context.lineTo(x + 760, y + 294);
		context.moveTo(x + 750, y + 294);
		context.lineTo(x + 680, y + 294);
		context.moveTo(x + 670, y + 294);
		context.lineTo(x + 580, y + 294);
		context.lineTo(x + 580, y + 443);
		context.lineTo(x + 540, y + 443);
		
		context.moveTo(x + 827, y + 468);
		context.arc(x+827, y + 468, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 827, y + 470);
		context.lineTo(x + 827, y + 500);
		
		
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();

		//dpst switch to rehostat

		// context.moveTo(x+192 , y+534);
		// context.lineTo(x+218 , y+534);                                           // dfdfdfdfdfd
		// context.lineTo(x+218 , y+576);

		//ammeter to rehostat
		// context.moveTo(x+317 , y+549);
		// context.lineTo(x+317 , y+504);                                                   //motor rheostat
		// context.lineTo(x+350 , y+504);
		// context.fillRect(x+313,y+549,9,6);

		//dpst switch to dc motor
		// context.moveTo(x+193 , y+621);
		// context.lineTo(x+193 , y+640);                                              //dfdfdf
		// context.lineTo(x+511 , y+640);
		// context.lineTo(x+511 , y+590);
		//
		// context.moveTo(x+347 , y+576);
		// context.lineTo(x+405 , y+576);
		// context.lineTo(x+405 , y+641);
		//
		// context.moveTo(x+463 , y+593);
		// context.lineTo(x+463 , y+640);
context.beginPath();                                         //red lines
		context.moveTo(x + 460, y + 504);
		context.lineTo(x + 510, y + 504);
		//from ammeter s1
		context.moveTo(x + 575, y + 267);
		context.lineTo(x + 674, y + 267);
		context.lineTo(x + 674, y + 294);
	    context.arc(x+674, y + 294, 2, 0, 2 * Math.PI, false);
	    context.moveTo(x + 674, y + 294);
		context.lineTo(x + 674, y + 328);
		context.moveTo(x + 674, y + 350);
		context.lineTo(x + 674, y + 385);
		context.arc(x+674, y + 385, 2, 0, 2 * Math.PI, false);
	    
	
		context.moveTo(x+774, y + 465);
		context.arc(x+772, y + 466, 2, 0, 2 * Math.PI, false);
		context.moveTo(x+772, y + 465); 
		context.lineTo(x+772, y + 498 );
		
		context.moveTo(x+783, y + 465);
		context.arc(x+783, y + 466, 1.5, 0, 2 * Math.PI, false);
		context.moveTo(x+783, y + 465);
		context.lineTo(x+783, y + 498 );
		
		context.moveTo(x + 774, y + 465);
		context.lineTo(x + 674, y + 465);
		context.lineTo(x + 674, y + 386);
		context.arc(x+674, y + 386, 2, 0, 2 * Math.PI, false);
		
		context.moveTo(x + 194, y + 504);
		context.lineTo(x + 230, y + 504);
		context.arc(x+208, y + 504, 2, 0, 2 * Math.PI, false);
			
		context.moveTo(x+310,y+504);
		context.lineTo(x+335,y+504);
	    context.arc(x+336, y + 504, 2, 0, 2 * Math.PI, false);
	
		context.moveTo(x+510,y+504);
		context.arc(x+510, y + 504, 2, 0, 2 * Math.PI, false);
		context.moveTo(x+510,y+504);
		context.lineTo(x+510,y+524);
		//context.lineTo()
		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
		
		context.beginPath();
		context.moveTo(x + 194, y + 594);
		context.lineTo(x + 205, y + 594);
		context.moveTo(x + 340, y + 594);
		context.lineTo(x + 459, y + 594);
		context.moveTo(x + 463, y + 592);
		context.lineTo(x + 510, y + 592);

		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();

	context.beginPath();
		//first fig. ammeter to x
		context.moveTo(x + 513, y + 48);
		context.lineTo(x + 842, y + 48);
		context.lineTo(x + 842, y + 465);
		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();

	context.beginPath();
		context.moveTo(x + 784, y + 429);
		context.lineTo(x + 673, y + 429);
		context.moveTo(x + 808, y + 429);
		context.lineTo(x + 830, y + 429);
		//
		context.moveTo(x + 705, y + 386);
		context.lineTo(x + 672, y + 386);

		context.moveTo(x + 730, y + 386);
		context.lineTo(x + 790, y + 386);
		context.moveTo(x + 815, y + 386);
		context.lineTo(x + 831, y + 386);
		context.moveTo(x + 784, y + 470);
		context.lineTo(x + 784, y + 460);
		context.lineTo(x + 788, y + 460);
		context.moveTo(x + 800, y + 460);
		context.lineTo(x + 812, y + 460);
		
		context.moveTo(x + 822, y + 460);
		context.lineTo(x + 828, y + 460);
		context.lineTo(x + 828, y + 468);

		x = x + 445;
		y = y + 403;
		context.moveTo(x + 60, y + 25);
		context.bezierCurveTo(x + 56, y + 20, x + 55, y + 20, x + 60, y + 12);
		context.bezierCurveTo(x + 66, y + 9, x + 64, y + 9, x + 70, y + 12);
		context.bezierCurveTo(x + 71, y + 15, x + 76, y + 18, x + 70, y + 25);
		x = x + 31;
		context.moveTo(x + 60, y + 25);
		context.bezierCurveTo(x + 56, y + 20, x + 55, y + 20, x + 60, y + 12);
		context.bezierCurveTo(x + 66, y + 9, x + 64, y + 9, x + 70, y + 12);
		context.bezierCurveTo(x + 71, y + 15, x + 76, y + 18, x + 70, y + 25);
		
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
		
		context.beginPath();
	    x = x + 252;
		y = y - 28;
		context.moveTo(x + 25, y + 50);
		context.bezierCurveTo(x + 27, y + 48, x + 30, y + 47, x + 35, y + 52);
		context.bezierCurveTo(x + 35, y + 54, x + 35, y + 52, x + 33, y + 58);
		context.bezierCurveTo(x + 31, y + 57, x + 31, y + 62, x + 27, y + 58);
		x = x - 250;
		y = y - 142;
		context.moveTo(x + 60, y + 25);
		context.bezierCurveTo(x + 56, y + 20, x + 55, y + 20, x + 60, y + 12);
		context.bezierCurveTo(x + 66, y + 9, x + 64, y + 9, x + 70, y + 12);
		context.bezierCurveTo(x + 71, y + 15, x + 76, y + 18, x + 70, y + 25);
		x = x + 30;
		context.moveTo(x + 60, y + 25);
		context.bezierCurveTo(x + 56, y + 20, x + 55, y + 20, x + 60, y + 12);
		context.bezierCurveTo(x + 66, y + 9, x + 64, y + 9, x + 70, y + 12);
		context.bezierCurveTo(x + 71, y + 15, x + 76, y + 18, x + 70, y + 25);
		context.lineWidth = "2";
		context.strokeStyle = "#FFD700";
		context.stroke();
		
		context.beginPath();
		x = x + 180;
		y = y + 37;
		context.moveTo(x + 60, y + 25);
		context.bezierCurveTo(x + 56, y + 20, x + 55, y + 20, x + 60, y + 12);
		context.bezierCurveTo(x + 66, y + 9, x + 64, y + 9, x + 70, y + 12);
		context.bezierCurveTo(x + 71, y + 15, x + 76, y + 18, x + 70, y + 25);
		x = x - 80;

		context.moveTo(x + 60, y + 25);
		context.bezierCurveTo(x + 56, y + 20, x + 55, y + 20, x + 60, y + 12);
		context.bezierCurveTo(x + 66, y + 9, x + 64, y + 9, x + 70, y + 12);
		context.bezierCurveTo(x + 71, y + 15, x + 76, y + 18, x + 70, y + 25);
		x = x + 169;
		y = y - 102;
		context.moveTo(x + 60, y + 25);
		context.bezierCurveTo(x + 56, y + 20, x + 55, y + 20, x + 60, y + 12);
		context.bezierCurveTo(x + 66, y + 9, x + 64, y + 9, x + 70, y + 12);
		context.bezierCurveTo(x + 71, y + 15, x + 76, y + 18, x + 70, y + 25);
		x = x - 47;
		y = y + 268;
		context.moveTo(x + 60, y + 25);
		context.bezierCurveTo(x + 56, y + 20, x + 55, y + 20, x + 60, y + 12);
		context.bezierCurveTo(x + 66, y + 9, x + 64, y + 9, x + 70, y + 12);
		context.bezierCurveTo(x + 71, y + 15, x + 76, y + 18, x + 70, y + 25);
		x = x + 22;
		context.moveTo(x + 60, y + 25);
		context.bezierCurveTo(x + 56, y + 20, x + 55, y + 20, x + 60, y + 12);
		context.bezierCurveTo(x + 66, y + 9, x + 64, y + 9, x + 70, y + 12);
		context.bezierCurveTo(x + 71, y + 15, x + 76, y + 18, x + 70, y + 25);

		context.font = "10pt Calibri";
		context.fillText("+", x - 682, y - 370);
		context.fillText("-", x - 682, y - 250);
		context.fillText("220V", x - 684, y - 314);
		context.fillText("D.C.", x - 684, y - 304);

		context.fillText("+", x - 648, y + 54);
		context.fillText("-", x - 648, y + 174);
		context.fillText("440V", x - 653, y + 114);
		context.fillText("D.C.", x - 653, y + 124);

		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
 
	}
	exp8.redRegister=function(){
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
			for( i = 0; i < 5; i++) {
				context.moveTo(x + 5, y + 90);
				context.lineTo(x + 12, y + 85);
				context.lineTo(x + 5, y + 80);
				context.lineTo(x + 12, y + 75);
				context.lineTo(x + 5, y + 70);
				context.lineTo(x + 12, y + 65);
				context.lineTo(x + 5, y + 60);
				context.lineTo(x + 5, y + 38);
				context.lineTo(x + 15, y + 25);
				x = x + 25;
				y = y;
			}
			//bottom lines
			context.moveTo(x-120, y + 115);
			context.lineTo(x-19, y + 115);
			context.moveTo(x, y + 115);
			for( i = 0; i < 5; i++) {
				context.moveTo(x-120, y + 115);
				context.lineTo(x-120, y + 115 - 25);
				//bottom horizontal liones
				x = x + 25;
				y = y;
			}
			context.moveTo(x-195, y + 115);
			context.lineTo(x-195, y + 125);
		
		//upper lines
		context.moveTo(x-245 , y +7 );
		context.lineTo(x-144, y +7 );

			for( i = 0; i < 5; i++) {// upper horizontal lines
				context.moveTo(x-245, y +7);
				context.lineTo(x-245, y + 22);
				x = x + 25;
				y = y;
			}
			context.moveTo(x - 320, y + 7);
			context.lineTo(x - 320, y - 3);
			//single switch on the top
			context.lineTo(x - 310, y - 12 );
			context.moveTo(x - 320, y - 13);
			context.lineTo(x - 320, y - 25);
			context.moveTo(x - 320, y - 25);
			context.arc(x - 320, y - 25, 2, 0, 2 * Math.PI, false);
			context.moveTo(x - 320, y - 27);
			context.lineTo(x - 320, y - 35);
			
        context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
	}
	exp8.yellowRegister=function(){
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
			for( i = 0; i < 5; i++) {
				context.moveTo(x + 140, y + 90);
				context.lineTo(x + 147, y + 85);
				context.lineTo(x + 140, y + 80);
				context.lineTo(x + 147, y + 75);
				context.lineTo(x + 140, y + 70);
				context.lineTo(x + 147, y + 65);
				context.lineTo(x + 140, y + 60);
				context.lineTo(x + 140, y + 38);
				context.lineTo(x + 150, y + 25);
				x = x + 25;
				y = y;
			}
			context.moveTo(x + 14, y + 115);
			context.lineTo(x + 116, y + 115);
			context.moveTo(x, y + 115);
			for( i = 0; i < 5; i++) {
				context.moveTo(x +15, y + 115);
				context.lineTo(x + 15, y + 115 - 25);
				//bottom horizontal liones
				x = x + 25;
				y = y;
			}
			//upper lines
		context.moveTo(x-112 , y +7 );
		context.lineTo(x-8, y +7 );

			for( i = 0; i < 5; i++) {// upper horizontal lines
				context.moveTo(x-110, y +7);
				context.lineTo(x-110, y + 22);
				x = x + 25;
				y = y;
			}
			context.moveTo(x - 185, y + 7);
			context.lineTo(x - 185, y - 3);
			//single switch on the top
			context.lineTo(x - 175, y - 12 );
			context.moveTo(x - 185, y - 13);
			context.lineTo(x - 185, y - 25);
			context.moveTo(x - 185, y - 25);
			context.arc(x - 185, y - 25, 2, 0, 2 * Math.PI, false);
			context.moveTo(x - 185, y - 25);
			context.lineTo(x - 185, y - 30);
			context.moveTo(x - 185, y + 115);
			context.lineTo(x - 185, y + 124);
        context.lineWidth = "2";
		context.strokeStyle = "#FFD700";
		context.stroke();
	}
exp8.blueRegister=function(){
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
			for( i = 0; i < 5; i++) {
				context.moveTo(x + 280, y + 90);
				context.lineTo(x + 287, y + 85);
				context.lineTo(x + 280, y + 80);
				context.lineTo(x + 287, y + 75);
				context.lineTo(x + 280, y + 70);
				context.lineTo(x + 287, y + 65);
				context.lineTo(x + 280, y + 60);
				context.lineTo(x + 280, y + 38);
				context.lineTo(x + 290, y + 25);
				x = x + 25;
				y = y;
			}
			context.moveTo(x + 155, y + 115);
			context.lineTo(x + 255, y + 115);
			context.moveTo(x, y + 115);
			for( i = 0; i < 5; i++) {
				context.moveTo(x +155, y + 115);
				context.lineTo(x +155, y + 115 - 25);
				//bottom horizontal liones
				x = x + 25;
				y = y;
			}
			context.moveTo(x+80 , y + 115);
			context.lineTo(x+80 , y + 124);
			
				//upper lines
		context.moveTo(x+30 , y +7 );
		context.lineTo(x+130, y +7 );

			for( i = 0; i < 5; i++) {// upper horizontal lines
				context.moveTo(x+30, y +7);
				context.lineTo(x+30, y + 22);
				x = x + 25;
				y = y;
			}
			context.moveTo(x-45, y + 7);
			context.lineTo(x-45, y - 3);
			//single switch on the top
			context.lineTo(x - 36, y - 12 );
			context.moveTo(x - 45, y - 13);
			context.lineTo(x - 45, y - 25);
			context.moveTo(x - 45, y - 25);
			context.arc(x - 45, y - 25, 2, 0, 2 * Math.PI, false);
			context.moveTo(x - 45, y - 25);
			context.lineTo(x - 45, y - 30);
			//context.moveTo(x - 45, y + 115);
			//context.lineTo(x - 45, y + 124);
        context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
	}
	exp8.motorVoltageUp = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		if(motorXPoint > 250.70) {
			context.moveTo(motorXPoint, 629);
			context.lineTo(motorXPoint, 583);

			context.fillRect(motorRecXPoint, 629, 9, 6);

			context.lineWidth = "2";
			context.strokeStyle = "red";
			context.stroke();

			context.beginPath();
			context.moveTo(motorXPoint + 2, 629);
			context.lineTo(motorXPoint + 2, 585);
			context.fillStyle = "#FFFFFF";
			context.fillRect(motorRecXPoint + 8.18, 629, 9, 6);

			context.lineWidth = "2";
			context.strokeStyle = "#FFFFFF";
			context.stroke();

			//console.log("motorXPoint :" +motorXPoint );
			motorXPoint -= 0.81;
			motorRecXPoint -= 0.81;
			context.fillStyle = "red";
		}
	}

	exp8.motorVoltageDown = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		if(motorXPoint < 322.31) {
			context.moveTo(motorXPoint + 0.18, 629);
			context.lineTo(motorXPoint + 0.18, 583);

			context.fillRect(motorRecXPoint + 0.18, 629, 9, 6);

			// context.moveTo(317,120);
			// context.lineTo(xPoint1,120);

			context.lineWidth = "2";
			context.strokeStyle = "red";
			context.stroke();

			context.beginPath();
			context.moveTo(motorXPoint - 2.82, 629);
			context.lineTo(motorXPoint - 2.82, 583);
			context.fillStyle = "#FFFFFF";
			context.fillRect(motorRecXPoint - 8.86, 629, 9, 6);

			context.lineWidth = "4.2";
			context.strokeStyle = "#FFFFFF";
			context.stroke();
			//console.log("motorXPoint :" +motorXPoint );
			motorXPoint += 0.81;
			motorRecXPoint += 0.81;
			context.fillStyle = "red";
		}
	}

	exp8.fieldVoltageUp = function() {

		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		if(xPoint > 270.59) {
			context.moveTo(xPoint, 169);
			context.lineTo(xPoint, 127);

			context.fillRect(recXPoint, 169, 9, 6);

			// // context.moveTo(317,120);
			// // context.lineTo(xPoint1,120);

			context.lineWidth = "2";
			context.strokeStyle = "red";
			context.stroke();
			t1 = xPoint;
			t2 = recXPoint;

			context.beginPath();
			context.moveTo(xPoint + 2.30, 169);
			context.lineTo(xPoint + 2.30, 129);
			context.fillStyle = "#FFFFFF";
			context.fillRect(recXPoint + 8.36, 169, 9, 6);

			context.lineWidth = "2";
			context.strokeStyle = "#FFFFFF";
			context.stroke();
			//console.log("xpoint :" +xPoint );
			xPoint -= 0.64;
			recXPoint -= 0.64;
			context.fillStyle = "black";
		}
	}

	exp8.fieldVoltageDown = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		if(xPoint < 339.73) {
			context.moveTo(xPoint + 1.28, 169);
			context.lineTo(xPoint + 1.28, 127);
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
			context.lineTo(xPoint - 2.64, 127);
			context.fillStyle = "#FFFFFF";
			context.fillRect(recXPoint - 7.52, 169, 9, 6);

			context.lineWidth = "6";
			context.strokeStyle = "#FFFFFF";
			context.stroke();
			//console.log("xpoint :" +xPoint );
			xPoint += 0.64;
			recXPoint += 0.64;
			context.fillStyle = "black";
		}
	}

	exp8.toggleLine1 = function(Dpst1Flag, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
		if(Dpst1Flag == true) {
			exp8.eraseLine1();
			exp8.drawSlope1();
		} else {
			exp8.eraseLine11();
			exp8.drawSlope11();
		}
	}

	exp8.eraseLine1 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(122, 159);
		context.lineTo(99, 148);
		context.moveTo(109, 153);
		context.lineTo(109, 241);
		context.moveTo(112, 154);
		context.lineTo(112, 242);
		context.moveTo(122, 248);
		context.lineTo(100, 238);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}


	exp8.drawSlope1 = function() {
			var context = globalObject.context, x = globalObject.x, y = globalObject.y;
			context.beginPath();
			context.moveTo(122, 159);
			context.lineTo(100, 159);
			context.moveTo(109, 158);
			context.lineTo(109, 248);
			context.moveTo(112, 158);
			context.lineTo(112, 248);
			context.moveTo(122, 249);
			context.lineTo(100, 249);
			context.lineWidth = "2";
			context.strokeStyle = "black";
			context.stroke();
		}
	

	exp8.eraseLine11 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(122, 159);
		context.lineTo(100, 159);
		context.moveTo(109, 158);
		context.lineTo(109, 248);
		context.moveTo(112, 158);
		context.lineTo(112, 248);
		context.moveTo(122, 249);
		context.lineTo(100, 249);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope11 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(122, 159);
		context.lineTo(99, 148);
		context.moveTo(109, 153);
		context.lineTo(109, 241);
		context.moveTo(112, 154);
		context.lineTo(112, 242);
		context.moveTo(122, 248);
		context.lineTo(100, 238);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	exp8.toggleLine2 = function(Dpst2Flag, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
		if(Dpst2Flag == true) {
			exp8.eraseLine2();
			exp8.drawSlope2();
			//alert('ON');
		} else {
			exp8.eraseLine22();
			exp8.drawSlope22();
		}
	}

	exp8.eraseLine2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(152, 583);
		context.lineTo(130, 573);
		context.moveTo(140, 608);
		context.lineTo(140, 577);
		context.moveTo(143, 580);
		context.lineTo(143, 668);
		context.moveTo(152, 673);
		context.lineTo(130, 663);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}
	//
	exp8.drawSlope2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(130, 583);
		context.lineTo(153, 583);
		context.moveTo(140, 582);
		context.lineTo(140, 673);
		context.moveTo(143, 582);
		context.lineTo(143, 673);
		context.moveTo(153, 673);
		context.lineTo(129, 673);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	exp8.eraseLine22 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(131, 583);
		context.lineTo(153, 583);
		context.moveTo(140, 582);
		context.lineTo(140, 673);
		context.moveTo(143, 582);
		context.lineTo(143, 673);
		context.moveTo(153, 673);
		context.lineTo(131, 673);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope22 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(153, 583);
		context.lineTo(131, 573);
		context.moveTo(140, 577);
		context.lineTo(140, 667);
		context.moveTo(143, 580);
		context.lineTo(143, 668);
		context.moveTo(153, 673);
		context.lineTo(131, 663);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	exp8.toggleC2 = function(flagR3TExp8, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagR3TExp8 == true) {
			exp8.eraseLine1C2();
			exp8.drawSlope1C2();
		} else {
			exp8.eraseLine2C2();
			exp8.drawSlope2C2();
		}
	}

	exp8.eraseLine1C2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(154, 355);
		context.lineTo(165, 346);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope1C2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(154, 356);
		context.lineTo(154, 345);

		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
	}

	exp8.eraseLine2C2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(154, 356);
		context.lineTo(154, 345);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope2C2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(154, 356);
		context.lineTo(164, 346);

		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
	}

	exp8.toggleR2T = function(flagR2TExp8, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagR2TExp8 == true) {
			exp8.eraseLine1R2T();
			exp8.drawSlope1R2T();
		} else {
			exp8.eraseLine2R2T();
			exp8.drawSlope2R2T();
		}
	}

	exp8.eraseLine1R2T = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(288, 356);
		context.lineTo(300, 345);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope1R2T = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(289, 358);
		context.lineTo(289, 345);

		context.lineWidth = "2";
		context.strokeStyle = "#FFD700";
		context.stroke();
	}

	exp8.eraseLine2R2T = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(290, 355);
		context.lineTo(290, 345);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope2R2T = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(289, 355);
		context.lineTo(300, 346);

		context.lineWidth = "2";
		context.strokeStyle = "#FFD700";
		context.stroke();
	}

	exp8.toggleR1T = function(flagR1TExp8, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagR1TExp8 == true) {
			exp8.eraseLine1R1T();
			exp8.drawSlope1R1T();
		} else {
			exp8.eraseLine2R1T();
			exp8.drawSlope2R1T();
		}
	}

	exp8.eraseLine1R1T = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(428, 356);
		context.lineTo(440, 346);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope1R1T = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(429, 358);
		context.lineTo(429, 345);

		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
	}

	exp8.eraseLine2R1T = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(429, 356);
		context.lineTo(429, 345);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope2R1T = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(428, 356);
		context.lineTo(439, 346);

		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
	}

	exp8.toggleR3T1 = function(flagR3T1Exp8, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagR3T1Exp8 == true) {
			exp8.eraseLine1R3T1();
			exp8.drawSlope1R3T1();
		} else {
			exp8.eraseLine2R3T1();
			exp8.drawSlope2R3T1();
		}
	}

	exp8.eraseLine1R3T1 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(104, 396);
		context.lineTo(114, 382);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope1R3T1 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(104, 397);
		context.lineTo(104, 381);

		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
	}

	exp8.eraseLine2R3T1 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(104, 396);
		context.lineTo(104, 381);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope2R3T1 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(104, 396);
		context.lineTo(114, 383);

		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
	}

	exp8.toggleR3T2 = function(flagR3T2Exp8, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagR3T2Exp8 == true) {
			exp8.eraseLine1R3T2();
			exp8.drawSlope1R3T2();
		} else {
			exp8.eraseLine2R3T2();
			exp8.drawSlope2R3T2();
		}
	}

	exp8.eraseLine1R3T2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(128, 396);
		context.lineTo(140, 382);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope1R3T2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(129, 398);
		context.lineTo(129, 381);

		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
	}

	exp8.eraseLine2R3T2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(129, 396);
		context.lineTo(129, 381);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope2R3T2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(129, 396);
		context.lineTo(140, 383);

		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
	}

	exp8.toggleR3T3 = function(flagR3T3Exp8, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagR3T3Exp8 == true) {
			exp8.eraseLine1R3T3();
			exp8.drawSlope1R3T3();
		} else {
			exp8.eraseLine2R3T3();
			exp8.drawSlope2R3T3();
		}
	}

	exp8.eraseLine1R3T3 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(153, 397);
		context.lineTo(165, 382);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope1R3T3 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(154, 398);
		context.lineTo(154, 381);

		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
	}

	exp8.eraseLine2R3T3 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(154, 398);
		context.lineTo(154, 381);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope2R3T3 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(154, 398);
		context.lineTo(164, 383);
		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
	}

	exp8.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		exp8.firstPoint();
	}

	exp8.toggleR3T4 = function(flagR3T4Exp8, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagR3T4Exp8 == true) {
			exp8.eraseLine1R3T4();
			exp8.drawSlope1R3T4();
		} else {
			exp8.eraseLine2R3T4();
			exp8.drawSlope2R3T4();
		}
	}

	exp8.eraseLine1R3T4 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(178, 397);
		context.lineTo(190, 381);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope1R3T4 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(179, 398);
		context.lineTo(179, 381);

		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
	}

	exp8.eraseLine2R3T4 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(179, 397);
		context.lineTo(179, 381);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope2R3T4 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(179, 398);
		context.lineTo(189, 382);

		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
	}

	exp8.toggleR3T5 = function(flagR3T5Exp8, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagR3T5Exp8 == true) {
			exp8.eraseLine1R3T5();
			exp8.drawSlope1R3T5();
		} else {
			exp8.eraseLine2R3T5();
			exp8.drawSlope2R3T5();
		}
	}

	exp8.eraseLine1R3T5 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(203, 397);
		context.lineTo(216, 380);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope1R3T5 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(204, 398);
		context.lineTo(204, 381);

		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
	}

	exp8.eraseLine2R3T5 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(204, 397);
		context.lineTo(204, 381);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope2R3T5 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(204, 398);
		context.lineTo(215, 381);

		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
	}

	exp8.toggleR2T1 = function(flagR2T1Exp8, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagR2T1Exp8 == true) {
			exp8.eraseLine1R2T1();
			exp8.drawSlope1R2T1();
		} else {
			exp8.eraseLine2R2T1();
			exp8.drawSlope2R2T1();
		}
	}

	exp8.eraseLine1R2T1 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(239, 397);
		context.lineTo(250, 380);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope1R2T1 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(239, 397);
		context.lineTo(239, 381);

		context.lineWidth = "2";
		context.strokeStyle = "#FFD700";
		context.stroke();
	}

	exp8.eraseLine2R2T1 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(239, 397);
		context.lineTo(239, 381);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope2R2T1 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(239, 397);
		context.lineTo(249, 382);

		context.lineWidth = "2";
		context.strokeStyle = "#FFD700";
		context.stroke();
	}

	exp8.toggleR2T2 = function(flagR2T2Exp8, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagR2T2Exp8 == true) {
			exp8.eraseLine1R2T2();
			exp8.drawSlope1R2T2();
		} else {
			exp8.eraseLine2R2T2();
			exp8.drawSlope2R2T2();
		}
	}

	exp8.eraseLine1R2T2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(263, 396);
		context.lineTo(275, 381);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope1R2T2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(264, 397);
		context.lineTo(264, 380);

		context.lineWidth = "2";
		context.strokeStyle = "#FFD700";
		context.stroke();
	}

	exp8.eraseLine2R2T2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(264, 395);
		context.lineTo(264, 380);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope2R2T2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(264, 396);
		context.lineTo(275, 382);

		context.lineWidth = "2";
		context.strokeStyle = "#FFD700";
		context.stroke();
	}

	exp8.toggleR2T3 = function(flagR2T3Exp8, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagR2T3Exp8 == true) {
			exp8.eraseLine1R2T3();
			exp8.drawSlope1R2T3();
		} else {
			exp8.eraseLine2R2T3();
			exp8.drawSlope2R2T3();
		}

	}

	exp8.eraseLine1R2T3 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(288, 397);
		context.lineTo(300, 383);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope1R2T3 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(289, 398);
		context.lineTo(289, 381);

		context.lineWidth = "2";
		context.strokeStyle = "#FFD700";
		context.stroke();
	}

	exp8.eraseLine2R2T3 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(289, 397);
		context.lineTo(289, 381);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope2R2T3 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(289, 398);
		context.lineTo(300, 384);

		context.lineWidth = "2";
		context.strokeStyle = "#FFD700";
		context.stroke();
	}

	exp8.toggleR2T4 = function(flagR2T4Exp8, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagR2T4Exp8 == true) {
			exp8.eraseLine1R2T4();
			exp8.drawSlope1R2T4();
		} else {
			exp8.eraseLine2R2T4();
			exp8.drawSlope2R2T4();
		}
	}

	exp8.eraseLine1R2T4 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(313, 397);
		context.lineTo(324, 382);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope1R2T4 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(314, 398);
		context.lineTo(314, 381);

		context.lineWidth = "2";
		context.strokeStyle = "#FFD700";
		context.stroke();
	}

	exp8.eraseLine2R2T4 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(314, 398);
		context.lineTo(314, 381);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope2R2T4 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(314, 398);
		context.lineTo(324, 383);

		context.lineWidth = "2";
		context.strokeStyle = "#FFD700";
		context.stroke();
	}

	exp8.toggleR2T5 = function(lagR2T5Exp8, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(lagR2T5Exp8 == true) {
			exp8.eraseLine1R2T5();
			exp8.drawSlope1R2T5();
		} else {
			exp8.eraseLine2R2T5();
			exp8.drawSlope2R2T5();
		}
	}

	exp8.eraseLine1R2T5 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(338, 397);
		context.lineTo(350, 381);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope1R2T5 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(339, 398);
		context.lineTo(339, 381);

		context.lineWidth = "2";
		context.strokeStyle = "#FFD700";
		context.stroke();
	}

	exp8.eraseLine2R2T5 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(339, 398);
		context.lineTo(339, 381);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope2R2T5 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(339, 398);
		context.lineTo(349, 382);

		context.lineWidth = "2";
		context.strokeStyle = "#FFD700";
		context.stroke();
	}

	exp8.toggleR1T1 = function(flagR1T1Exp8, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagR1T1Exp8 == true) {
			exp8.eraseLine1R1T1();
			exp8.drawSlope1R1T1();
		} else {
			exp8.eraseLine2R1T1();
			exp8.drawSlope2R1T1();
		}
	}

	exp8.eraseLine1R1T1 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(378, 397);
		context.lineTo(391, 380);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope1R1T1 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(379, 398);
		context.lineTo(379, 381);

		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
	}

	exp8.eraseLine2R1T1 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(379, 398);
		context.lineTo(379, 381);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope2R1T1 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(379, 398);
		context.lineTo(389, 382);

		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
	}

	exp8.toggleR1T2 = function(flagR1T2Exp8, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagR1T2Exp8 == true) {
			exp8.eraseLine1R1T2();
			exp8.drawSlope1R1T2();
		} else {
			exp8.eraseLine2R1T2();
			exp8.drawSlope2R1T2();
		}
	}

	exp8.eraseLine1R1T2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(403, 397);
		context.lineTo(416, 381);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope1R1T2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(404, 399);
		context.lineTo(404, 381);

		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
	}

	exp8.eraseLine2R1T2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(404, 397);
		context.lineTo(404, 381);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope2R1T2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(404, 397);
		context.lineTo(414, 382);

		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
	}

	exp8.toggleR1T3 = function(flagR1T3Exp8, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagR1T3Exp8 == true) {
			exp8.eraseLine1R1T3();
			exp8.drawSlope1R1T3();
		} else {
			exp8.eraseLine2R1T3();
			exp8.drawSlope2R1T3();
		}
	}

	exp8.eraseLine1R1T3 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(428, 396);
		context.lineTo(442, 380);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope1R1T3 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(429, 397);
		context.lineTo(429, 381);

		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
	}

	exp8.eraseLine2R1T3 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(429, 396);
		context.lineTo(429, 381);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope2R1T3 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(429, 397);
		context.lineTo(440, 383);

		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
	}

	exp8.toggleR1T4 = function(flagR1T4Exp8, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagR1T4Exp8 == true) {
			exp8.eraseLine1R1T4();
			exp8.drawSlope1R1T4();
		} else {
			exp8.eraseLine2R1T4();
			exp8.drawSlope2R1T4();
		}
	}

	exp8.eraseLine1R1T4 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(453, 396);
		context.lineTo(465, 382);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope1R1T4 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(454, 398);
		context.lineTo(454, 381);

		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
	}

	exp8.eraseLine2R1T4 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(454, 396);
		context.lineTo(454, 381);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope2R1T4 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(453, 396);
		context.lineTo(465, 383);

		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
	}

	exp8.toggleR1T5 = function(flagR1T5Exp8, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");

		if(flagR1T5Exp8 == true) {
			exp8.eraseLine1R1T5();
			exp8.drawSlope1R1T5();
		} else {
			exp8.eraseLine2R1T5();
			exp8.drawSlope2R1T5();
		}
	}

	exp8.eraseLine1R1T5 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(479, 396);
		context.lineTo(491, 382);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope1R1T5 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(479, 397);
		context.lineTo(479, 381);

		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
	}

	exp8.eraseLine2R1T5 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(479, 396);
		context.lineTo(479, 381);

		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp8.drawSlope2R1T5 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(479, 396);
		context.lineTo(490, 383);

		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
	}

	exp8.FieldSwitch = function(IfaExp8, VfaExp8) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.font = "10pt Calibri";
		context.fillStyle = "#FFFF00";
		context.fillRect(x - 459, y - 335, 47, 13);
		context.fillRect(x - 372, y - 295, 36, 11);

		context.fillStyle = "black";
		context.fillText((Math.round(IfaExp8 * Math.pow(10, 2)) / Math.pow(10, 2)) + "A", x - 458, y - 324);
		context.fillText(VfaExp8 + "V", x - 369, y - 285);
	}

	exp8.motorSwitch = function(IinExp8, VinExp8, Vry, Vyb, Vbr, Ir, Iy, Ib,VoltReg,speed) {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.font = "10pt Calibri";
		context.fillStyle = "#FFFF00";

		context.fillRect(x - 511, y + 120, 47, 13);
		context.fillRect(x - 424, y + 160, 36, 11);
		context.fillRect(x - 161, y - 1, 36, 13);
		context.fillRect(x - 81, y - 1, 36, 13);
		context.fillRect(x - 81, y + 41, 36, 13);
		context.fillRect(x - 219, y - 49, 36, 13);
		context.fillRect(x - 137, y - 49, 36, 13);
		context.fillRect(x - 57, y - 49, 36, 13);
		context.fillRect(x - 612, y + 239, 38, 18);
		context.fillRect(x - 572, y + 239, 38, 18);

		context.fillStyle = "black";
		context.fillText((Math.round(IinExp8 * Math.pow(10, 2)) / Math.pow(10, 2)) + "A", x - 510, y + 131);
		context.fillText(VinExp8 + "V", x - 421, y + 170);
		context.fillText(Vry.toFixed(0) + "V", x - 160, y + 10);
		context.fillText(Vyb.toFixed(0) + "V", x - 80, y + 10);
		context.fillText(Vbr.toFixed(0) + "V", x - 80, y + 51);
		context.fillText(Ir.toFixed(2) + "A", x - 218, y - 38);
		context.fillText(Iy.toFixed(2) + "A", x - 136, y - 38);
		context.fillText(Ib.toFixed(2) + "A", x - 56, y - 38);
		context.fillText("440 V", x - 609, y + 252);
		context.fillText(VinExp8 + "V", x - 568, y + 252);

		context.fillStyle = "red";
		context.fillRect(x + 78, y + 142, 72, 15);
		context.fillStyle = "black";
		context.fillText(speed.toFixed(0) + " r.p.m", x + 81, y + 154);
	}

	exp8.dpstOff = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		context.moveTo(t1 - 2, 171);
		context.lineTo(t1 - 2, 120);
		context.lineTo(340, 126);
		context.fillStyle = "#FFFFFF";
		context.fillRect(t2 -1 , 169, 9, 6);

		context.lineWidth = "15";
		context.strokeStyle = "#FFFFFF";
		context.stroke();

		context.beginPath();
		context.moveTo(339, 170);
		context.lineTo(339, 128);
		context.lineTo(364, 128);
		context.fillStyle = "black";
		context.fillRect(336, 169, 9, 6);

		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
		//
		xPoint = 340.36;
		recXPoint = 336.36;
	}
})(exp8canvas);
