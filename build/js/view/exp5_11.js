var exp5canvas = exp5 =exp5canvas || {}; 
(function(exp5) {
	var globalObject = {
		x : 10,
		y : 80,		
		x1: 60,
		y1: 70,
		x2: 15,
		y2: 72,
		
		topLeftCornerX : 80,
		topLeftCornerY : 40,
		width : 40,
		height : 15
	}
	exp5.firstPoint = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		
		// three phase ac voltage src
		globalObject.y   = globalObject.y + 120;		
		threephacvoltagesrc.drawPoint(globalObject);		
		
		// tpst switch
		globalObject.x   = globalObject.x + 112;
		globalObject.y   = globalObject.y - 20;
		switpstcanvas.firstRow(globalObject);
		switpstcanvas.secondRow(globalObject);
		switpstcanvas.thirdRow(globalObject);
		switpstcanvas.drawParallelLines(globalObject);
	
		// wattmeter
		globalObject.x   = globalObject.x + 120;
		wattmetercanvas.drawRect(globalObject);
		wattmetercanvas.drawLine(globalObject);
		wattmetercanvas.drawZig(globalObject);
		wattmetercanvas.drawCoil(globalObject);
		wattmetercanvas.drawValueRect(globalObject);
		// wattmeter
		globalObject.y   = globalObject.y + 100;
		wattmetercanvas.drawRect(globalObject);
		wattmetercanvas.drawLine(globalObject);
		wattmetercanvas.drawZig(globalObject);
		wattmetercanvas.drawCoil(globalObject);
		
		// dc ammeter		
		 globalObject.x = globalObject.x+113;
		 globalObject.y = globalObject.y-100;
		 miammaccanvas.firstPoint(globalObject);
		 miammaccanvas.drawRectangle(globalObject);
		
		// voltmeter ac		
		globalObject.x = globalObject.x +287;
		globalObject.y = globalObject.y +32;
		acvoltmetercanvas.drawPoint(globalObject);
		acvoltmetercanvas.drawRectangle(globalObject);
		
		// squirrel cage induction motor
		globalObject.x   = globalObject.x + 120;
		globalObject.y   = globalObject.y + 150;
		squirrotorcanvas.drawRectangle(globalObject);
		squirrotorcanvas.drawPoints(globalObject);
		squirrotorcanvas.drawEllipse(globalObject);
		squirrotorcanvas.drawCircles(globalObject);
		squirrotorcanvas.connectCircles(globalObject);
		
		
		// coupling
		globalObject.x   = globalObject.x + 145;
		globalObject.y   = globalObject.y+7;
		couplingcanvas.drawRectangle(globalObject);
		
		
		//self excited DC generator
		globalObject.x   = globalObject.x + 109;
		globalObject.y   = globalObject.y-20;
		selfexcdccanvas.drawRectangle(globalObject);
		selfexcdccanvas.drawCoil(globalObject);
		
		// dc ammeter
		globalObject.x   = globalObject.x +20;
		globalObject.y   = globalObject.y - 50;
		miammdccanvas.firstPoint(globalObject);
		miammdccanvas.drawRectangle(globalObject);
		
		
		// voltmeter dc
		globalObject.x   = globalObject.x + 160;
		globalObject.y   = globalObject.y +13;
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
		globalObject.x = globalObject.x -620;
		globalObject.y = globalObject.y +47;
		globalObject.x1 = globalObject.x1+562;
		globalObject.y1 = globalObject.y1 +315;
		globalObject.x2 = globalObject.x2 +682;
		globalObject.y2 = globalObject.y2 +317;
		tachometercanvas.drawRectangle(globalObject);
		tachometercanvas.drawLineMirror(globalObject);
		tachometercanvas.drawCurvesMirror(globalObject);		
	
		//-----------------------------------DRAWING LINES--------------------------------
		
		// line from L of lower wattmeter to power factor meter 
		context.moveTo(x+345,y+200);
		context.lineTo(x+466,y+200);
		
		// line from switch(middle)  to power factor meter 
		context.moveTo(x+225,y+147);
		context.lineTo(x+225,y+163);
		context.lineTo(x+468,y+163);
		context.lineTo(x+468,y+149);		
		
		x = x + 345;
		y = y + 190;
		context.moveTo(x + 25, y-30);
		context.arc(x + 25, y-27, 2, 0, 2 * Math.PI, false);
		
		//line from V of upper wattmeter to v of lower wattmeter 
		context.moveTo(x+3,y-50);
		context.lineTo(x+25,y-50);		
		context.lineTo(x+25,y+5);				
	
		context.moveTo(x+25,y+16);
		context.lineTo(x+25,y+50);
		context.lineTo(x+1,y+50);
			
		
		// line from A2 to lower end of resistive load
		context.moveTo(x+649,y+170);
		context.lineTo(x+649,y+189);
		context.lineTo(x+880,y+189);

		// line from A1 to ammeter
		context.moveTo(x+649,y+88);
		context.lineTo(x+649,y+29);
		context.lineTo(x+679,y+29);

		// line from ammeter to upper end of resistive load
		context.moveTo(x+800,y+29);
		context.lineTo(x+870,y+29);
		
		// line from voltmeter to upperend
		context.moveTo(x+841,y+60);
		context.lineTo(x+841,y+30);
		
		// line from voltmeter to lowerend
		context.moveTo(x+841,y+188);
		context.lineTo(x+841,y+150);
		
		// line from r2 to y1 of squi. cage IM
		context.moveTo(x+425,y+55);
		context.lineTo(x+435,y+55);
		
		// line from y2 to b1 of squi. cage IM
		context.moveTo(x+452,y+55);
		context.lineTo(x+463,y+55);
		
		// line from r2 to b2 of squi. cage IM
		context.moveTo(x+412,y+58);
		context.lineTo(x+412,y+5);
		context.lineTo(x+477,y+5);
		context.lineTo(x+477,y+58);
		
		// line from power factor meter to R1
		context.moveTo(x+240,y-90);
		context.lineTo(x+360,y-90);
		context.lineTo(x+360,y+56);
		context.lineTo(x+410,y+56);
		
		// line from power factor meter to R2 & y1
		context.moveTo(x+245,y-40);
		context.lineTo(x+270,y-40);
		context.lineTo(x+271,y+25);
		context.lineTo(x+353,y+25);
		context.moveTo(x+365,y+25);
		context.lineTo(x+405,y+25);
		
		context.moveTo(x+417,y+25);
		context.lineTo(x+430,y+25);
		context.lineTo(x+430,y+38);
		
		context.moveTo(x+430,y+47);
		context.lineTo(x+430,y+54);
		
		// line from power factor meter to squirrel y2 
		context.moveTo(x+245,y+9);
		context.lineTo(x+245,y+44);
		context.lineTo(x+310,y+44);
		
		context.lineTo(x+352,y+44);
		context.moveTo(x+366,y+44);
		context.lineTo(x+405,y+44);
		
		context.moveTo(x+418,y+44);
		context.lineTo(x+457,y+44);
		context.lineTo(x+457,y+55);
		
		//3 phase ac voltage to tpst switch
		context.moveTo(x-233,y-40);
		context.lineTo(x-233,y-50);
		
		context.moveTo(x-233,y);
		context.lineTo(x-233,y+12);
		
		x = x +0;
		y = y -45;
		context.moveTo(x+25,y+50);
		context.bezierCurveTo(x+30,y+48,x+30,y+45,x+38,y+50);
		context.bezierCurveTo(x+41,y+56,x+41,y+54,x+38,y+60);
		context.bezierCurveTo(x+35,y+61,x+32,y+66,x+25,y+60);
		
		
		x = x +294;
		y = y +45;
		context.moveTo(x + 60, y + 25);
		context.bezierCurveTo(x + 56, y + 20, x + 55, y + 20, x + 60, y + 12);
		context.bezierCurveTo(x + 66, y + 9, x + 64, y + 9, x + 70, y + 12);
		context.bezierCurveTo(x + 71, y + 15, x + 76, y + 18, x + 70, y + 25);
		
		x = x ;
		y = y +20;
		context.moveTo(x + 60, y + 25);
		context.bezierCurveTo(x + 56, y + 20, x + 55, y + 20, x + 60, y + 12);
		context.bezierCurveTo(x + 66, y + 9, x + 64, y + 9, x + 70, y + 12);
		context.bezierCurveTo(x + 71, y + 15, x + 76, y + 18, x + 70, y + 25);
		
		x = x+52 ;
		y = y -20;
		context.moveTo(x + 60, y + 25);
		context.bezierCurveTo(x + 56, y + 20, x + 55, y + 20, x + 60, y + 12);
		context.bezierCurveTo(x + 66, y + 9, x + 64, y + 9, x + 70, y + 12);
		context.bezierCurveTo(x + 71, y + 15, x + 76, y + 18, x + 70, y + 25);
		
		x = x ;
		y = y +20;
		context.moveTo(x + 60, y + 25);
		context.bezierCurveTo(x + 56, y + 20, x + 55, y + 20, x + 60, y + 12);
		context.bezierCurveTo(x + 66, y + 9, x + 64, y + 9, x + 70, y + 12);
		context.bezierCurveTo(x + 71, y + 15, x + 76, y + 18, x + 70, y + 25);
		
		//value rectangle for wattmetere
		 context.rect(x-402,y+50,40,15); 
		 context.font = "10pt Calibri";
		 context.fillText("W", x-377, y+62);
		 		
		 context.font = "17pt Calibri";
		 context.fillText("Experiment No.5:", x-680, y-250 );
		 context.fillText("Circuit Diagram: Experimental set-up for load test on Induction Motor(Squirrel Cage)", x-680, y-210 );
		//small bezier curve (link) vertical 
		 x = x +58;
		 y = y -30;
		context.moveTo(x+25,y+50);
		context.bezierCurveTo(x+27,y+48,x+30,y+47,x+35,y+52);
		context.bezierCurveTo(x+35,y+54,x+35,y+52,x+33,y+58);
		context.bezierCurveTo(x+31,y+57,x+31,y+62,x+27,y+58);
	
		context.moveTo(x-280,y-80);
		context.lineTo(x-160,y-80);		
		context.moveTo(x-280,y-30);
		context.lineTo(x-158,y-30);		
		context.moveTo(x-284,y+20);
		context.lineTo(x-160,y+20);
		
		context.lineWidth = "2";
		context.strokeStyle = "Black";
		context.stroke();
			
	}
	exp5.toggleLine= function(flag,canIdAttr){
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
		
		if(flag==true){
				exp5.eraseLine1();
			    exp5.drawSlope1();
				// //alert('ON');
			 }else{
			    exp5.eraseLine2();
			    exp5.drawSlope2();
			}		
	}
	exp5.eraseLine1= function(){
		var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();	
			
			context.moveTo(194,268);
			context.lineTo(172,260);
			context.moveTo(194,318);
			context.lineTo(172,309);
			context.moveTo(194,368);
			context.lineTo(172,359);
		    context.moveTo(179,263);
		    context.lineTo(179,363);
		    context.moveTo(183,265);
			context.lineTo(183,365);			
			
			context.lineWidth = "5" ;
			context.strokeStyle = "#FFFFFF";
			context.stroke () ;
	}
	
	exp5.drawSlope1= function(){
		var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();
						
			context.moveTo(194,270);
			context.lineTo(172,270);
		    context.moveTo(194,320);
		    context.lineTo(172,320);
		    context.moveTo(194,370);
		    context.lineTo(172,370);
		    context.moveTo(179,270);
		    context.lineTo(179,370);
		    context.moveTo(183,270);
		    context.lineTo(183,370);
			
			context.lineWidth = "2" ;
			context.strokeStyle = "black";
			context.stroke () ;
	}
	
	exp5.eraseLine2= function(){
		
		var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();
			
			context.moveTo(194,270);
			context.lineTo(172,270);
		    context.moveTo(194,320);
		    context.lineTo(172,320);
		    context.moveTo(194,370);
		    context.lineTo(172,370);
		    context.moveTo(179,270);
		    context.lineTo(179,370);
		    context.moveTo(183,270);
		    context.lineTo(183,370);
			
			context.lineWidth = "5" ;
			context.strokeStyle = "#FFFFFF";
			context.stroke () ;
	}
	
	exp5.drawSlope2= function(){
		var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();
			context.moveTo(194,268);
			context.lineTo(172,260);
			context.moveTo(194,318);
			context.lineTo(172,309);
			context.moveTo(194,368);
			context.lineTo(172,359);
		    context.moveTo(179,263);
		    context.lineTo(179,363);
		    context.moveTo(183,265);
			context.lineTo(183,365);
			
			context.lineWidth = "2" ;
			context.strokeStyle = "black";
			context.stroke () ;
	}
	
	exp5.toggleMainLoad = function(flagMainLoadExp5,canIdAttr){
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
			
		if(flagMainLoadExp5 == true){
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();
						
			context.moveTo(1283,322);
			context.lineTo(1292,308);
			context.lineWidth = "5" ;
			context.strokeStyle = "#FFFFFF";
			context.stroke () ;
						
			context.beginPath();
			context.moveTo(1282,322);
			context.lineTo(1282,308);
			context.lineWidth = "2" ;
			context.strokeStyle = "black";
			context.stroke () ;
					
		}else{
					
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();
						
			context.moveTo(1282,322);
			context.lineTo(1282,310);
			context.lineWidth = "5" ;
			context.strokeStyle = "#FFFFFF";
			context.stroke () ;
						
			context.beginPath();
			context.moveTo(1283,323);
			context.lineTo(1292,309);
			context.lineWidth = "2" ;
			context.strokeStyle = "black";
			context.stroke () ;
		}
	}
	
	exp5.toggleLoad1 = function(flagLoad1Exp5,canIdAttr){
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
			
		if(flagLoad1Exp5 == true){
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();
						
			context.moveTo(1231,372);
			context.lineTo(1237,357);
			context.lineWidth = "5" ;
			context.strokeStyle = "#FFFFFF";
			context.stroke () ;
						
			context.beginPath();
			context.moveTo(1231,373);
			context.lineTo(1231,358);
			context.lineWidth = "2" ;
			context.strokeStyle = "black";
			context.stroke () ;
					
		}else{
					
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();
						
			context.moveTo(1231,373);
			context.lineTo(1231,358);
			context.lineWidth = "5" ;
			context.strokeStyle = "#FFFFFF";
			context.stroke () ;
						
			context.beginPath();
			context.moveTo(1231,373);
			context.lineTo(1237,358);
			context.lineWidth = "2" ;
			context.strokeStyle = "black";
			context.stroke () ;
		}
	}
	
	exp5.toggleLoad2 = function(flagLoad2Exp5,canIdAttr){
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
			
		if(flagLoad2Exp5 == true){
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();
						
			context.moveTo(1256,372);
			context.lineTo(1261,357);
			context.lineWidth = "5" ;
			context.strokeStyle = "#FFFFFF";
			context.stroke () ;
						
			context.beginPath();
			context.moveTo(1256,373);
			context.lineTo(1256,357);
			context.lineWidth = "2" ;
			context.strokeStyle = "black";
			context.stroke () ;
					
		}else{
					
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();
						
			context.moveTo(1256,373);
			context.lineTo(1256,358);
			context.lineWidth = "5" ;
			context.strokeStyle = "#FFFFFF";
			context.stroke () ;
						
			context.beginPath();
			context.moveTo(1256,373);
			context.lineTo(1261,358);
			context.lineWidth = "2" ;
			context.strokeStyle = "black";
			context.stroke () ;
		}
	}
	
	exp5.toggleLoad3 = function(flagLoad3Exp5,canIdAttr){
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
			
		if(flagLoad3Exp5 == true){
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();
						
			context.moveTo(1281,372);
			context.lineTo(1287,357);
			context.lineWidth = "5" ;
			context.strokeStyle = "#FFFFFF";
			context.stroke () ;
						
			context.beginPath();
			context.moveTo(1281,373);
			context.lineTo(1281,357);
			context.lineWidth = "2" ;
			context.strokeStyle = "black";
			context.stroke () ;
					
		}else{
					
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();
						
			context.moveTo(1281,373);
			context.lineTo(1281,358);
			context.lineWidth = "5" ;
			context.strokeStyle = "#FFFFFF";
			context.stroke () ;
						
			context.beginPath();
			context.moveTo(1281,373);
			context.lineTo(1287,358);
			context.lineWidth = "2" ;
			context.strokeStyle = "black";
			context.stroke () ;
		}
	}
	
	exp5.toggleLoad4 = function(flagLoad4Exp5,canIdAttr){
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
			
		if(flagLoad4Exp5 == true){
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();
						
			context.moveTo(1306,372);
			context.lineTo(1311,357);
			context.lineWidth = "5" ;
			context.strokeStyle = "#FFFFFF";
			context.stroke () ;
						
			context.beginPath();
			context.moveTo(1306,373);
			context.lineTo(1306,357);
			context.lineWidth = "2" ;
			context.strokeStyle = "black";
			context.stroke () ;
					
		}else{
					
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();
						
			context.moveTo(1306,373);
			context.lineTo(1306,358);
			context.lineWidth = "5" ;
			context.strokeStyle = "#FFFFFF";
			context.stroke () ;
						
			context.beginPath();
			context.moveTo(1306,373);
			context.lineTo(1311,358);
			context.lineWidth = "2" ;
			context.strokeStyle = "black";
			context.stroke () ;
		}
	}
	
	exp5.toggleLoad5 = function(flagLoad5Exp5,canIdAttr){
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
			
		if(flagLoad5Exp5 == true){
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();
						
			context.moveTo(1331,372);
			context.lineTo(1336,357);
			context.lineWidth = "5" ;
			context.strokeStyle = "#FFFFFF";
			context.stroke () ;
						
			context.beginPath();
			context.moveTo(1331,373);
			context.lineTo(1331,357);
			context.lineWidth = "2" ;
			context.strokeStyle = "black";
			context.stroke () ;
					
		}else{
					
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();
						
			context.moveTo(1331,373);
			context.lineTo(1331,358);
			context.lineWidth = "5" ;
			context.strokeStyle = "#FFFFFF";
			context.stroke () ;
						
			context.beginPath();
			context.moveTo(1331,373);
			context.lineTo(1336,358);
			context.lineWidth = "2" ;
			context.strokeStyle = "black";
			context.stroke () ;
		}
	}
	

	exp5.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		exp5.firstPoint();
	
	}
})(exp5canvas);
