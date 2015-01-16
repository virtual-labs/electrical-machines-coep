var exp1bcanvas = exp1b = exp1bcanvas || {};
(function(exp1b){
var globalObject = {
		x : 5,
		y : 140,
		rad:20
	}
	exp1b.firstPoint = function(){
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
		globalObject.x = globalObject.x + 134;
		globalObject.y = globalObject.y - 35;
		
		// dc variable
		dcvariablecanvas.drawRectangle(globalObject);
		dcvariablecanvas.drawPoints(globalObject);
		dcvariablecanvas.readingShow(globalObject);
		dcvariablecanvas.control(globalObject);

		globalObject.x = globalObject.x + 108;
		globalObject.y = globalObject.y + 14;

		// ac ammeter
		miammdccanvas.firstPoint(globalObject);
		miammdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("I", x +350 ,y+150);
		context.font = "8pt Calibri";
		context.fillText("ASH", x +353, y+155);
		
		globalObject.x = globalObject.x + 200;
		
		context.lineWidth = "2";
		context.strokeStyle = "Black";
		context.stroke();
		// voltmeter
		globalObject.x = globalObject.x - 77;
		globalObject.y = globalObject.y - 20;
		mivoltdccanvas.firstPoint(globalObject);
		mivoltdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("V", x +370 ,y+230);
		context.font = "8pt Calibri";
		context.fillText("ASH", x +375, y+235);
		
		//dc shunt machine
		globalObject.x = globalObject.x +50;
		globalObject.y = globalObject.y +20;
		selfexcdccanvas.drawRectangle(globalObject);
		selfexcdccanvas.drawCoil(globalObject);
		//coupling
		globalObject.x = globalObject.x + 145;
		globalObject.y = globalObject.y +17;
		couplingcanvas.drawRectangle(globalObject);
		//mirror sep excited machine
		globalObject.x = globalObject.x + 100;
		globalObject.y = globalObject.y -17;
		sepexciteddccanvas.drawRectangleMirrorOne(globalObject);
		
		//context.moveTo(811,315);
		//context.lineTo(925,315);
		context.lineWidth = "2" ;
		context.strokeStyle = "black";
		context.stroke () ;
			
		//2nd ammeter
		globalObject.x = globalObject.x + 209 ;
		globalObject.y = globalObject.y  -3 ;
		miammdccanvas.firstPoint(globalObject);
		miammdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("I", x +970 ,y+148);
		context.font = "8pt Calibri";
		context.fillText("ASE", x +973, y+150);
		//2nd voltmeter
        globalObject.x = globalObject.x + 123;
		globalObject.y = globalObject.y - 20;
		mivoltdccanvas.firstPoint(globalObject);
		mivoltdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("V", x +1000 ,y+230);
		context.font = "8pt Calibri";
		context.fillText("ASE", x +1005, y+235);
		
		// resistive load 
		globalObject.x = globalObject.x +70;
		globalObject.y = globalObject.y + 50;
		spresisloadcanvas.drawLine(globalObject);
		spresisloadcanvas.drawPoint(globalObject);
		spresisloadcanvas.zigzag(globalObject);
		spresisloadcanvas.middleLine(globalObject);
		
		//3rd voltmeter		
		globalObject.x = globalObject.x -464;
		globalObject.y = globalObject.y -210;
		mivoltdccanvas.firstPoint(globalObject);
		mivoltdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("V", x +605 ,y+70);
		context.font = "8pt Calibri";
		context.fillText("FSE", x +613, y+73);
		
		//3rd ammeter
		globalObject.x = globalObject.x -122 ;
		globalObject.y = globalObject.y  + 20 ;
		miammdccanvas.firstPoint(globalObject);
		miammdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("I", x +580 ,y-10);
		context.font = "8pt Calibri";
		context.fillText("FSE", x +583, y-8);
		// 2nd variable dc
		globalObject.x = globalObject.x -107;
		globalObject.y = globalObject.y -15;
		dcvariablecanvas.drawRectangle(globalObject);
		dcvariablecanvas.drawPoints(globalObject);
		dcvariablecanvas.readingShow(globalObject);
		dcvariablecanvas.control(globalObject);
		//2nd dpst switch
		globalObject.x = globalObject.x -134;
		globalObject.y = globalObject.y + 35;
		dpstcanvas.firstRow(globalObject);
		dpstcanvas.secondRow(globalObject);
		dpstcanvas.switchDpst(globalObject);
			
		//2nd dc fixed
		
		globalObject.x=globalObject.x-50;
		globalObject.y=globalObject.y+1;
		dcvoltagecanvas.drawPoint(globalObject);
		
		// tachometer
		globalObject.x = globalObject.x + 615;
		globalObject.y = globalObject.y + 166;
		globalObject.x2 = globalObject.x - 25;
		globalObject.y2 = globalObject.y + 15;
		globalObject.x1 = globalObject.x + 13;
		globalObject.y1 = globalObject.y + 10;
		tachometercanvas.drawLine(globalObject);
		tachometercanvas.drawRectangle(globalObject);
		tachometercanvas.drawCurves(globalObject);
		context.font = "10pt Calibri";
		context.fillStyle="red";
		context.rect(x+860,y+180,70,17);
		context.fillRect(x+860,y+180,70,17);
		context.strokeStyle="2";
		context.fillStyle = "black";
		
        context.font = "17pt Calibri";
		context.fillText("", x + 5, y - 120);
		context.fillText("Circuit Diagram : Load Test on Separately Excited DC Generator", x + 5, y - 90);
		
		
		context.stroke();
		
		context.beginPath();
		context.moveTo(x + 415, y + 269);
		context.lineTo(x + 452, y + 269);
		context.moveTo(x + 290, y + 269);
		context.lineTo(x + 420, y + 269);
		
		context.moveTo(x+805 , y+268);
		context.lineTo(x+805 , y+335);
		context.lineTo(x+985 , y+335);
		context.moveTo(x+984 , y+335);
		context.lineTo(x+1093, y+335);
		
		context.moveTo(x+1042 , y+269);
		context.lineTo(x+1042 , y+335);
		context.strokeStyle="black";
		context.stroke();
		
		
		context.beginPath();
		
		context.moveTo(x+1045 , y+175);
		context.lineTo(x+1090 , y+175);
		//upper block lines
		context.moveTo(x+285,y+15);
		context.arc(x+285, y + 15, 2, 0, 2 * Math.PI, false);
		context.moveTo(x+400,y+15);
		context.lineTo(x+418,y+15);
		
		context.moveTo(x+500,y+15);
		context.lineTo(x+525,y+15);
		context.arc(x+526, y + 15, 2, 0, 2 * Math.PI, false);
		
		context.moveTo(x+648,y+15);
		context.arc(x+648, y + 15, 2, 0, 2 * Math.PI, false);
		context.moveTo(x+647,y+15);
		context.lineTo(x+715,y+15);
		context.lineTo(x+715,y+160);
		context.arc(x+715, y + 158, 2, 0, 2 * Math.PI, false);
		context.moveTo(x+715,y+100);
		context.lineTo(x+715,y+178);
			
			//lower block lines
		context.moveTo(x+162,y+179);
		context.arc(x+162,y+179, 2, 0, 2 * Math.PI, false);
		context.moveTo(x+160,y+179);
		context.lineTo(x+185,y+179);
		
		context.moveTo(x+265,y+179);
		context.lineTo(x+290,y+179);
		
		context.moveTo(x + 415, y + 178);
		context.lineTo(x + 453, y + 178);
		context.lineTo(x + 453, y + 204);
		
		context.moveTo(x+808,y+175);
		context.lineTo(x+925,y+175);
		
		context.arc(x+804,y+175, 2, 0, 2 * Math.PI, false);
		context.moveTo(x+804,y+175);
		context.lineTo(x+804,y+208);
		
		//context.moveTo(x+1090,y+175);
		//context.arc(x+1092,y+175, 2, 0, 2 * Math.PI, false);
		//context.moveTo(x+1090,y+175);
		//context.lineTo(x+1167,y+175);
		//context.lineTo(x+1167,y+183);
		//context.arc(x+1167,y+183, 2, 0, 2 * Math.PI, false);
		//context.lineTo(x+1170,y+150);
		//context
		context.lineWidth="2";
		context.strokeStyle="red";
		context.stroke();	
			
		context.beginPath();
		context.moveTo(x+523,y+106);
		context.lineTo(x+710,y+106);
		context.moveTo(x+720,y+106);
		context.lineTo(x+755,y+106);	
		context.lineTo(x+755,y+160);
		
		
	    context.font = "13pt Calibri";
	    context.fillText(" DC Shunt Motor ", x+445 , y+310 );
	    context.fillStyle = "black";
		
		context.font = "13pt Calibri";
	    context.fillText(" Separately Excited ", x+672 , y+310 );
	    context.fillText(" DC Generator ", x+695 , y+330 );
	    
	    context.font = "15pt Calibri";
	    context.fillText(" DC Shunt Motor / Separately Excited DC Generator Ratings :  ", x , y+390 );
	    context.font = "11pt Calibri";
	    context.fillText(" Field Voltage (max) = 220V  ", x+8 , y+420 );
	    context.fillText("Armature Voltage (max) = 440V  ", x+12 , y+440 );
	    context.fillText("Capacity = 5 HP ", x+12 , y+460 );
	    context.fillText("DC Field Current(max) =  2.3 Amp  ", x+12 , y+480 );
	    context.fillText("Armature Current(max) =  9.5 Amp  ", x+12 , y+500 );
	    context.fillText(" Speed = 1500-2000 R.P.M.  ", x+10 , y+520 );
	    context.fillStyle = "black";
		
		//added by shubhangi

		context.font = "15pt Calibri";
		context.fillText(" Abbrevations:  ", x+700 ,  y+390);
		context.font = "11pt Calibri";
		context.fillText("V", x + 710, y + 410);
		context.fillText("I", x + 710, y + 430);
		context.fillText("V", x + 710, y + 450);
		context.fillText("I", x + 710, y + 470);
		context.fillText("V", x + 710, y + 490);
		context.fillText("I", x + 710, y + 510);
		
		context.font = "8pt Calibri";
		context.fillText("ASH", x + 715, y + 415);
		context.fillText("ASH", x + 715, y + 435);
		context.fillText("FSE ",x + 718, y + 455);
		context.fillText("FSE ",x + 715, y + 475);
		context.fillText("ASE" ,x + 715, y + 495);
		context.fillText("ASE", x + 715, y + 515);
		
		context.font = "11pt Calibri";
		context.fillText(" = Armature voltage of DC shunt motor ", x + 730, y + 415);
		context.fillText(" = Armature current of DC shunt motor  ", x + 730, y + 435);
		context.fillText(" = Field voltage of DC Separately Excited Generator", x + 730, y + 455);
		context.fillText(" = Field current of DC Separately Excited Generator", x + 730, y +475);
		context.fillText(" = Field voltage of DC Separately Excited Generator ", x + 730, y +495);
		context.fillText(" = Field current of DC Separately Excited Generator", x + 730, y + 515);
		
		context.fillStyle = "black";
		
		context.font = "17pt Calibri";
		context.fillText("", x + 5, y - 50);
		
		context.font = "10pt Calibri";
		context.fillText("440V", x+70, y + 225);
		context.fillText("D.C.", x+70, y + 240);
		context.fillText("+", x+60, y + 170);
		context.fillText("-", x+60, y + 280);
		
		context.fillText("220V", x+308, y + 60);
		context.fillText("D.C.", x+308, y + 70);
		context.fillText("+", x+292, y + 10);
		context.fillText("-", x+292, y + 118);
		
		x = x+650;
		y = y+82;
		context.moveTo(x + 60, y + 25);
		context.bezierCurveTo(x + 56, y + 20, x + 55, y + 20, x + 60, y + 12);
		context.bezierCurveTo(x + 66, y + 9, x + 64, y + 9, x + 70, y + 12);
		context.bezierCurveTo(x + 71, y + 15, x + 76, y + 18, x + 70, y + 25);
		
		context.lineWidth = "2";
		context.strokeStyle = "Black";
		context.stroke();
	 }
	exp1b.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		exp1b.firstPoint();

	}
	
	
	exp1b.toggleArmatureDpstSwitch = function(flagArmature,canIdAttr){
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
		
		if(flagArmature == true){
				exp1b.eraseLineArmatureDpstSwitch1();
				exp1b.drawSlopeArmatureDpstSwitch1();
				//alert('ON');
			}else{
				exp1b.eraseLineArmatureDpstSwitch2();
				exp1b.drawSlopeArmatureDpstSwitch2();
			}		
	}
	
	exp1b.eraseLineArmatureDpstSwitch1 = function(){
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();
			
			context.moveTo(357,154);
			context.lineTo(334,145);
			context.moveTo(344,152);
			context.lineTo(344,238);
			context.moveTo(347,152);
			context.lineTo(347,239);
			context.moveTo(356,244);
			context.lineTo(334,236);
			
			context.lineWidth = "5" ;
			context.strokeStyle = "#FFFFFF";
			context.stroke () ;
	}
	
	exp1b.drawSlopeArmatureDpstSwitch1 = function(){
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();
			
			context.moveTo(357,155);
			context.lineTo(334,155);
			context.moveTo(345,155);
			context.lineTo(345,245);
			context.moveTo(348,155);
			context.lineTo(348,245);
			context.moveTo(357,245);
			context.lineTo(334,245);
			
			context.lineWidth = "2" ;
			context.strokeStyle = "black";
			context.stroke () ;
	}
	
	exp1b.eraseLineArmatureDpstSwitch2 = function(){
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();
			
			context.moveTo(357,155);
			context.lineTo(334,155);
			context.moveTo(345,155);
			context.lineTo(345,245);
			context.moveTo(348,155);
			context.lineTo(348,245);
			context.moveTo(357,245);
			context.lineTo(334,245);
			
			context.lineWidth = "5" ;
			context.strokeStyle = "#FFFFFF";
			context.stroke () ;
	}
	
	exp1b.drawSlopeArmatureDpstSwitch2 = function(){
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();
			
			context.moveTo(357,155);
			context.lineTo(334,146);
			context.moveTo(345,150);
			context.lineTo(345,240);
			context.moveTo(348,151);
			context.lineTo(348,241);
			context.moveTo(357,245);
			context.lineTo(334,237);
			
			context.lineWidth = "2" ;
			context.strokeStyle = "black";
			context.stroke () ;
	}
	
	exp1b.toggleMotorDpstSwitch = function(flagMotor,canIdAttr){
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
		
		if(flagMotor == true){
				exp1b.eraseLineMotorDpstSwitch1();
				exp1b.drawSlopeMotorDpstSwitch1();
				//alert('ON');
			}else{
				exp1b.eraseLineMotorDpstSwitch2();
				exp1b.drawSlopeMotorDpstSwitch2();
			}
	}
	
	exp1b.eraseLineMotorDpstSwitch1 = function(){
		var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();
			
			context.moveTo(121,318);
			context.lineTo(99,308);
			context.moveTo(110,315);
			context.lineTo(110,401);
			context.moveTo(113,317);
			context.lineTo(113,402);
			context.moveTo(121,408);
			context.lineTo(99,398);
			
			context.lineWidth = "5" ;
			context.strokeStyle = "#FFFFFF";
			context.stroke () ;
	}
	
	exp1b.drawSlopeMotorDpstSwitch1 = function(){
		var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();
			
			context.moveTo(121,319);
			context.lineTo(99,319);
			context.moveTo(110,319);
			context.lineTo(110,409);
			context.moveTo(113,319);
			context.lineTo(113,409);
			context.moveTo(121,409);
			context.lineTo(99,409);
			
			context.lineWidth = "2" ;
			context.strokeStyle = "black";
			context.stroke () ;
	}
	
	exp1b.eraseLineMotorDpstSwitch2 = function(){
		var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();
			
			context.moveTo(121,319);
			context.lineTo(99,319);
			context.moveTo(110,319);
			context.lineTo(110,409);
			context.moveTo(113,319);
			context.lineTo(113,409);
			context.moveTo(121,409);
			context.lineTo(99,409);
			
			context.lineWidth = "5" ;
			context.strokeStyle = "#FFFFFF";
			context.stroke () ;
	}
	
	exp1b.drawSlopeMotorDpstSwitch2 = function(){
		var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();
			
			context.moveTo(121,318);
			context.lineTo(99,308);
			context.moveTo(110,313);
			context.lineTo(110,403);
			context.moveTo(113,315);
			context.lineTo(113,404);
			context.moveTo(121,408);
			context.lineTo(99,398);
			
			context.lineWidth = "2" ;
			context.strokeStyle = "black";
			context.stroke () ;
	}
	
	exp1b.toggleMainLoad = function(flagMainLoad,canIdAttr){
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
			
			if(flagMainLoad == true){
				
				var context = globalObject.context,
				x = globalObject.x,
				y = globalObject.y;
				context.beginPath();
				
				context.moveTo(1173,338);
				context.lineTo(1183,326);
				context.lineWidth = "5" ;
				context.strokeStyle = "#FFFFFF";
				context.stroke () ;
				
				context.beginPath();
				context.moveTo(1173,339);
				context.lineTo(1173,325);
				context.lineWidth = "2" ;
				context.strokeStyle = "red";
				context.stroke () ;
				
			}else{
				
				
				var context = globalObject.context,
				x = globalObject.x,
				y = globalObject.y;
				context.beginPath();
				
				context.moveTo(1173,338);
				context.lineTo(1173,326);
				context.lineWidth = "5" ;
				context.strokeStyle = "#FFFFFF";
				context.stroke () ;
				
				context.beginPath();
				context.moveTo(1173,339);
				context.lineTo(1183,327);
				context.lineWidth = "2" ;
				context.strokeStyle = "red";
				context.stroke () ;
			}
			
		}
			
			exp1b.toggleLoad1 = function(flagLoad1,canIdAttr){
				globalObject.canvas = document.getElementById(canIdAttr);
				globalObject.context = globalObject.canvas.getContext("2d");
			
				if(flagLoad1 == true){
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					context.beginPath();
					
					context.moveTo(1122,388);
					context.lineTo(1127,375);
					context.lineWidth = "5" ;
					context.strokeStyle = "#FFFFFF";
					context.stroke () ;
					
					context.beginPath();
					context.moveTo(1122,389);
					context.lineTo(1122,371);
					context.lineWidth = "2" ;
					context.strokeStyle = "blue";
					context.stroke () ;
					
				}else{
					
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					context.beginPath();
					
					context.moveTo(1122,389);
					context.lineTo(1122,375);
					context.lineWidth = "5" ;
					context.strokeStyle = "#FFFFFF";
					context.stroke () ;
					
					context.beginPath();
					context.moveTo(1122,389);
					context.lineTo(1127,375);
					context.lineWidth = "2" ;
					context.strokeStyle = "blue";
					context.stroke () ;
					}
			}
			
			exp1b.toggleLoad2 = function(flagLoad2,canIdAttr){
				globalObject.canvas = document.getElementById(canIdAttr);
				globalObject.context = globalObject.canvas.getContext("2d");
			
				if(flagLoad2 == true){
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					context.beginPath();
					
					context.moveTo(1146,388);
					context.lineTo(1152,375);
					context.lineWidth = "5" ;
					context.strokeStyle = "#FFFFFF";
					context.stroke () ;
					
					context.beginPath();
					context.moveTo(1147,389);
					context.lineTo(1147,371);
					context.lineWidth = "2" ;
					context.strokeStyle = "blue";
					context.stroke () ;
					
				}else{
					
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					context.beginPath();
					
					context.moveTo(1147,389);
					context.lineTo(1147,375);
					context.lineWidth = "5" ;
					context.strokeStyle = "#FFFFFF";
					context.stroke () ;
					
					context.beginPath();
					context.moveTo(1147,389);
					context.lineTo(1152,375);
					context.lineWidth = "2" ;
					context.strokeStyle = "blue";
					context.stroke () ;
					}
			}
			
			exp1b.toggleLoad3 = function(flagLoad3,canIdAttr){
				globalObject.canvas = document.getElementById(canIdAttr);
				globalObject.context = globalObject.canvas.getContext("2d");
			
				if(flagLoad3 == true){
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					context.beginPath();
					
					context.moveTo(1172,388);
					context.lineTo(1177,375);
					context.lineWidth = "5" ;
					context.strokeStyle = "#FFFFFF";
					context.stroke () ;
					
					context.beginPath();
					context.moveTo(1172,389);
					context.lineTo(1172,371);
					context.lineWidth = "2" ;
					context.strokeStyle = "blue";
					context.stroke () ;
					
				}else{
					
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					context.beginPath();
					
					context.moveTo(1172,389);
					context.lineTo(1172,375);
					context.lineWidth = "5" ;
					context.strokeStyle = "#FFFFFF";
					context.stroke () ;
					
					context.beginPath();
					context.moveTo(1172,389);
					context.lineTo(1177,375);
					context.lineWidth = "2" ;
					context.strokeStyle = "blue";
					context.stroke () ;
					}
			}
			
			exp1b.toggleLoad4= function(flagLoad4,canIdAttr){
				globalObject.canvas = document.getElementById(canIdAttr);
				globalObject.context = globalObject.canvas.getContext("2d");
			
				if(flagLoad4 == true){
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					context.beginPath();
					
					context.moveTo(1197,388);
					context.lineTo(1202,375);
					context.lineWidth = "5" ;
					context.strokeStyle = "#FFFFFF";
					context.stroke () ;
					
					context.beginPath();
					context.moveTo(1197,389);
					context.lineTo(1197,371);
					context.lineWidth = "2" ;
					context.strokeStyle = "blue";
					context.stroke () ;
					
				}else{
					
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					context.beginPath();
					
					context.moveTo(1197,389);
					context.lineTo(1197,375);
					context.lineWidth = "5" ;
					context.strokeStyle = "#FFFFFF";
					context.stroke () ;
					
					context.beginPath();
					context.moveTo(1197,389);
					context.lineTo(1202,375);
					context.lineWidth = "2" ;
					context.strokeStyle = "blue";
					context.stroke () ;
					}
			}	
			
			exp1b.toggleLoad5= function(flagLoad5,canIdAttr){
				globalObject.canvas = document.getElementById(canIdAttr);
				globalObject.context = globalObject.canvas.getContext("2d");
			
				if(flagLoad5== true){
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					context.beginPath();
					
					context.moveTo(1222,388);
					context.lineTo(1228,375);
					context.lineWidth = "5" ;
					context.strokeStyle = "#FFFFFF";
					context.stroke () ;
					
					context.beginPath();
					context.moveTo(1222,389);
					context.lineTo(1222,371);
					context.lineWidth = "2" ;
					context.strokeStyle = "blue";
					context.stroke () ;
					
				}else{
					
					var context = globalObject.context,
					x = globalObject.x,
					y = globalObject.y;
					context.beginPath();
					
					context.moveTo(1222,389);
					context.lineTo(1222,375);
					context.lineWidth = "5" ;
					context.strokeStyle = "#FFFFFF";
					context.stroke () ;
					
					context.beginPath();
					context.moveTo(1222,389);
					context.lineTo(1228,375);
					context.lineWidth = "2" ;
					context.strokeStyle = "blue";
					context.stroke () ;
					}
			}
			
			exp1b.armatureSwitch = function(ampere,count){
				var context = globalObject.context,x = globalObject.x, y = globalObject.y;
				context.font = "10pt Calibri";
				context.fillStyle="yellow";
				context.fillRect(x-246, y-171, 38,13);
				context.fillStyle="black";
				context.fillText(count+"V", x-239, y -160);
				context.fillStyle="yellow";
				context.fillRect(x - 390, y - 91, 38, 17);
	 	 		context.fillStyle="black";
	 	 		context.fillText(count + "V", x - 384, y - 78);
	
	  			context.fillStyle="yellow";
	  			context.fillRect(x - 430, y - 91, 38, 17);
	  			context.fillStyle="black";
	  			context.fillText("220V", x - 426, y - 78);
				context.fillStyle="yellow";
				context.fillRect(x-331,y-211,49,15);
				context.fillStyle="black";
				context.fillText((Math.round(ampere*Math.pow(10,2))/Math.pow(10,2))+"A",x-320,y-199);
					
			}
			
			exp1b.motorSwitch = function(ampere,genAmpere,count,vcount,speed){
				var context = globalObject.context,x = globalObject.x, y = globalObject.y;
				context.font = "10pt Calibri";
				context.fillStyle="yellow";
				context.fillRect(x-479, y-8, 37,13);
				context.fillStyle="black";
				context.fillText(count+"V", x-473, y+3);
				context.fillStyle="yellow";
				context.fillRect(x - 625, y + 73, 38, 18);
	 	 		context.fillStyle="black";
	 	 		context.fillText(count + "V", x - 620, y + 86);
 	
                context.fillStyle="yellow";	  		
	  			context.fillRect(x - 665, y + 73, 38, 17);
	  			context.fillStyle="black";
	  			context.fillText("440V", x - 660, y + 86);
				context.fillStyle="yellow";
				context.fillRect(x-565,y-48,48,14);
				context.fillStyle="black";
				context.fillText((Math.round(ampere*Math.pow(10,2))/Math.pow(10,2))+"A",x-555,y-36);
				//context.fillText(ampere.toFixed(2)+"A",x-555,y-36);
				
				context.fillStyle="red";
				context.fillRect(x+11, y -21, 68,15);
				context.fillStyle="black";
				context.fillText(speed.toFixed(0)+" r.p.m", x+14, y-9);
				
				///////// generator current/////////////
				context.fillStyle="yellow";
				context.fillRect(x +62, y - 51, 49, 15);
	  			context.fillStyle="black";
	  			context.fillText((Math.round(genAmpere*Math.pow(10,2))/Math.pow(10,2))+"A", x +77, y -39);
	  			
	  			///////// generator voltage/////////////
				context.fillStyle="yellow";
				context.fillRect(x +148, y - 11 , 38, 13);
	  			context.fillStyle="black";
	  			context.fillText(vcount.toFixed(0)+"V", x +152, y );
					
			}

})(exp1bcanvas);