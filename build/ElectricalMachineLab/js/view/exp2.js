var exp2canvas = exp = exp2canvas || {}; 
(function(exp) {
	var count2=0,KcVal,VaIaVal;
	var flag1=0;
	var flag2=0;
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
		height : 15,
		
	}
	exp.firstPoint = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		globalObject.y = globalObject.y + 200;

		//top fig.
		//2nd dc fixed
		globalObject.x = globalObject.x - 3;
		globalObject.y = globalObject.y - 154;
		dcvoltagecanvas.drawPoint(globalObject);

		//2nd dpst switch
		globalObject.x = globalObject.x + 51;
		globalObject.y = globalObject.y - 1;
		dpstcanvas.firstRow(globalObject);
		dpstcanvas.secondRow(globalObject);
		dpstcanvas.switchDpst(globalObject);

		// 2nd variable dc
		globalObject.x = globalObject.x + 134;
		globalObject.y = globalObject.y - 35;
		dcvariablecanvas.drawRectangle(globalObject);
		dcvariablecanvas.drawPoints(globalObject);
		dcvariablecanvas.readingShow(globalObject);
		dcvariablecanvas.control(globalObject);

		//3rd ammeter upper
		globalObject.x = globalObject.x + 108;
		globalObject.y = globalObject.y + 15;
		miammdccanvas.firstPoint(globalObject);
		miammdccanvas.drawRectangle(globalObject);
		
		context.font = "11pt Calibri";
		context.fillText("I", x +350 ,y);
		context.font = "8pt Calibri";
		context.fillText("FM", x +353, y+5);
		
		//3rd voltmeter
		globalObject.x = globalObject.x + 123;
		globalObject.y = globalObject.y - 21;
		mivoltdccanvas.firstPoint(globalObject);
		mivoltdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("V", x +375 ,y+80);
		context.font = "8pt Calibri";
		context.fillText("FM", x +380, y+85);

		//middle fig.
		//1st dc fixed
		globalObject.x = globalObject.x - 416;
		globalObject.y = globalObject.y + 194;
		dcvoltagecanvas.drawPoint(globalObject);

		//1st dpst switch
		globalObject.x = globalObject.x + 52;
		globalObject.y = globalObject.y - 0;
		dpstcanvas.firstRow(globalObject);
		dpstcanvas.secondRow(globalObject);
		dpstcanvas.switchDpst(globalObject);

		//1st dc variable
		globalObject.x = globalObject.x + 135;
		globalObject.y = globalObject.y - 35;
		dcvariablecanvas.drawRectangle(globalObject);
		dcvariablecanvas.drawPoints(globalObject);
		dcvariablecanvas.readingShow(globalObject);
		dcvariablecanvas.control(globalObject);

		//1st ac ammeter
		globalObject.x = globalObject.x + 108;
		globalObject.y = globalObject.y + 14;
		miammdccanvas.firstPoint(globalObject);
		miammdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("I", x +350 ,y+150);
		context.font = "8pt Calibri";
		context.fillText("AM", x +353, y+155);
		globalObject.x = globalObject.x + 200;
        
    
		context.lineWidth = "2";
		context.strokeStyle = "Black";
		context.stroke();

		//1st voltmeter
		globalObject.x = globalObject.x - 77;
		globalObject.y = globalObject.y - 20;
		mivoltdccanvas.firstPoint(globalObject);
		mivoltdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("V", x +375 ,y+230);
		context.font = "8pt Calibri";
		context.fillText("AM", x +380, y+235);

		// separately excited dc
		globalObject.x = globalObject.x + 90;
		globalObject.y = globalObject.y + 21;
		sepexciteddccanvas.drawRectangle(globalObject);

		//coupling
		globalObject.x = globalObject.x + 145;
		globalObject.y = globalObject.y + 17;
		couplingcanvas.drawRectangle(globalObject);

		//separately excited mirror image
		globalObject.x = globalObject.x + 100;
		globalObject.y = globalObject.y - 17;
		sepexciteddccanvas.drawRectangleMirror(globalObject);

		// tachometer
		globalObject.x = globalObject.x + 140;
		globalObject.y = globalObject.y + 22;
		globalObject.x2 = globalObject.x - 25;
		globalObject.y2 = globalObject.y + 15;
		globalObject.x1 = globalObject.x + 13;
		globalObject.y1 = globalObject.y + 10;
		tachometercanvas.drawLine(globalObject);
		tachometercanvas.drawRectangle(globalObject);
		tachometercanvas.drawCurves(globalObject);

		//2nd ac ammeter upper
		globalObject.x = globalObject.x + 70;
		globalObject.y = globalObject.y - 25;
		miammdccanvas.firstPoint(globalObject);
		miammdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("I", x +1020 ,y+150);
		context.font = "8pt Calibri";
		context.fillText("AG", x +1023, y+155);

		 // 2nd voltmeter
		globalObject.x = globalObject.x + 123;
		globalObject.y = globalObject.y - 20;
		mivoltdccanvas.firstPoint(globalObject);
		mivoltdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("V", x +1040 ,y+230);
		context.font = "8pt Calibri";
		context.fillText("AG", x +1045, y+235);

		//resistive load bank
		globalObject.x = globalObject.x + 19;
		globalObject.y = globalObject.y + 50;
		spresisloadcanvas.drawLine(globalObject);
		spresisloadcanvas.drawPoint(globalObject);
		spresisloadcanvas.zigzag(globalObject);
		spresisloadcanvas.middleLine(globalObject);

		 //bottom fig
	     //dc fixed
		globalObject.x = globalObject.x - 1110;
		globalObject.y = globalObject.y + 150;
		dcvoltagecanvas.drawPoint(globalObject);

		 //dpst switch
		globalObject.x = globalObject.x + 52;
		dpstcanvas.firstRow(globalObject);
		dpstcanvas.secondRow(globalObject);
		dpstcanvas.switchDpst(globalObject);

		// 2nd variable dc
		globalObject.x = globalObject.x + 134;
		globalObject.y = globalObject.y - 35;
		dcvariablecanvas.drawRectangle(globalObject);
		dcvariablecanvas.drawPoints(globalObject);
		dcvariablecanvas.readingShow(globalObject);
		dcvariablecanvas.control(globalObject);

		// 3rd ammeter lower
		globalObject.x = globalObject.x + 108;
		globalObject.y = globalObject.y + 15;
		miammdccanvas.firstPoint(globalObject);
		miammdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("I", x +345 ,y+310);
		context.font = "8pt Calibri";
		context.fillText("FG", x +350, y+315);

		//3rd voltmeter lower
		globalObject.x = globalObject.x + 123;
		globalObject.y = globalObject.y - 20;
		mivoltdccanvas.firstPoint(globalObject);
		mivoltdccanvas.drawRectangle(globalObject);
		context.font = "11pt Calibri";
		context.fillText("V", x +370 ,y+385);
		context.font = "8pt Calibri";
		context.fillText("FG", x +378, y+390);
		
		context.font = "10pt Calibri";
		context.fillStyle="red";
	    context.rect(x+900,y+180,70,17);
        context.fillRect(x+900,y+180,70,17);
        context.strokeStyle="2";
		context.fillStyle = "black";
        
		context.font = "17pt Calibri";
		context.fillText("", x - 10, y - 50);
		context.fillText("Circuit Diagram : Load test on separately excited DC Motor", x - 10, y - 20);
       context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
		//top fig. horizontal lines
		context.beginPath();
		context.arc(x+160, y + 25, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 160, y + 25);
		context.lineTo(x + 183, y + 25);
		
		context.moveTo(x + 263, y + 25);
		context.lineTo(x + 285, y + 25);
		context.arc(x+288, y + 25, 2, 0, 2 * Math.PI, false);
		
		context.moveTo(x + 413, y + 23);
		context.lineTo(x + 545, y + 23);
		context.lineTo(x + 545, y + 158);
		context.moveTo(x + 545, y + 158);
		context.arc(x+545, y + 158, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 545, y + 159);
		context.lineTo(x + 545, y + 178);
		
		
		//middle fig. horizontal lines
		context.moveTo(x+160, y + 178);
		context.arc(x+162, y + 178, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 160, y + 178);
		context.lineTo(x + 183, y + 178);
		
		context.moveTo(x + 263, y + 178);
		context.lineTo(x + 285, y + 178);
		context.arc(x+290, y + 178, 2, 0, 2 * Math.PI, false);
		
		context.moveTo(x + 417, y + 178);
		context.lineTo(x + 490, y + 178);
		context.arc(x+493, y +178, 2, 0, 2 * Math.PI, false);
		context.moveTo(x+493, y +178);
		context.lineTo(x+493, y +202);
		
		context.moveTo(x + 844, y + 175);
		context.arc(x+844, y +175, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 846, y + 175);
		context.lineTo(x + 960, y + 175);
		
		context.moveTo(x + 844, y + 175);
		context.lineTo(x + 844, y + 207);
		
		//bottom fig. horizontal lines`
		context.moveTo(x+160, y + 335);
		context.arc(x+156, y + 335, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 160, y + 335);
		context.lineTo(x + 178, y + 335);
		
		context.moveTo(x + 259, y + 335);
		context.lineTo(x + 285, y + 335);
		context.arc(x+286, y + 335, 2, 0, 2 * Math.PI, false);
		
		context.moveTo(x + 410, y + 335);
		context.lineTo(x + 750, y + 335);
		context.moveTo(x + 761, y + 335);
		context.lineTo(x + 791, y + 335);
		context.lineTo(x + 791, y + 295);
		context.arc(x+791, y + 295, 2, 0, 2 * Math.PI, false);
		context.moveTo(x + 791, y + 295);
		context.lineTo(x + 791, y + 278);
		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();

		context.beginPath();
		//top fig. horizontal lines
		context.moveTo(x + 293, y + 115);
		context.lineTo(x + 538, y + 115);
		context.moveTo(x + 549, y + 115);
		context.lineTo(x + 585, y + 115);
		context.lineTo(x + 585, y + 160);

		//middle fig. horizontal lines
		//context.moveTo(x + 416, y + 178);
		//context.lineTo(x + 490, y + 178);
		context.moveTo(x + 293, y + 269);
		context.lineTo(x + 490, y + 269);
		
		context.moveTo(x + 844, y + 269);
		context.lineTo(x + 844, y + 337);
		context.lineTo(x + 1088, y + 337);
		context.moveTo(x + 1083, y + 269);
		context.lineTo(x + 1083, y + 337);

		/*
		//bottom fig. horizontal lines`
				context.moveTo(x + 410, y + 335);
				context.lineTo(x + 750, y + 335);
				context.moveTo(x + 761, y + 335);
				context.lineTo(x + 790, y + 335);
				context.lineTo(x + 790, y + 298);*/
		
		context.moveTo(x + 282, y + 426);
		context.lineTo(x + 755, y + 426);
		context.lineTo(x + 755, y + 295);

		context.font = "13pt Calibri";
	    context.fillText(" Separately Excited ", x+490 , y+300 );
	    context.fillText(" DC Motor ", x+500 , y+320 );
	    context.fillStyle = "black";
		
		context.font = "13pt Calibri";
	    context.fillText(" Separately Excited ", x+755 , y+360 );
	    context.fillText(" DC Generator ", x+765 , y+380 );
	    context.fillStyle = "black";
		
		context.font = "15pt Calibri";
	    context.fillText(" Separately Excited DC Motor / Separately Excited DC Generator Ratings :  ", x , y+530 );
	    context.font = "11pt Calibri";
	    context.fillText(" Field Voltage (max) = 220V  ", x+8 , y+560 );
	    context.fillText("Armature Voltage (max) = 440V  ", x+12 , y+580 );
	    context.fillText("Capacity = 5 HP ", x+12 , y+600 );
	    context.fillText("DC Field Current(max) =  2.3 Amp  ", x+12 , y+620 );
	    context.fillText("Armature Current(max) =  9.5 Amp  ", x+12 , y+640 );
	    context.fillText(" Speed = 1500-2000 R.P.M.  ", x+10 , y+660 );
	    context.fillStyle = "black";
		
		context.font = "15pt Calibri";
		context.fillText(" Abbrevations:  ", x+660 ,  y+530);
		context.font = "11pt Calibri";
		context.fillText("V", x + 670, y + 560);
		context.fillText("I", x + 670, y + 580);
		context.fillText("V", x + 670, y + 600);
		context.fillText("I", x + 670, y + 620);
		context.fillText("V", x + 670, y + 640);
		context.fillText("I", x + 670, y + 660);
		context.fillText("V", x + 670, y + 680);
		context.fillText("I", x + 670, y + 700);
		
		context.font = "8pt Calibri";
		context.fillText("FM", x + 675, y + 565);
		context.fillText("FM", x + 675, y + 585);
		context.fillText("AM",x + 678, y + 605);
		context.fillText("AM",x + 675, y + 625);
		context.fillText("FG" ,x + 675, y + 645);
		context.fillText("FG", x + 675, y + 665);
		context.fillText("AG" ,x + 675, y + 685);
		context.fillText("AG", x + 675, y + 705);
		
		context.font = "11pt Calibri";
		context.fillText(" = Separately Excited DC Motor field voltage ", x + 690, y + 560);
		context.fillText(" = Separately Excited DC Motor field current ", x + 690, y + 580);
		context.fillText(" = Separately Excited DC Motor Armature volatge", x + 690, y + 600);
		context.fillText(" = Separately Excited DC Motor Armature current", x + 690, y +620);
		context.fillText(" = Separately Excited DC Generator field voltage ", x + 690, y +640);
		context.fillText(" = Separately Excited DC Generator field current", x + 690, y + 660);
		context.fillText(" = Separately Excited DC Generator Armature voltage ", x + 690, y +680);
		context.fillText(" = Separately Excited DC Generator Armature current ", x + 690, y + 700);
		
		context.fillStyle = "black";
		
		
		
		context.font = "10pt Calibri";

		context.fillText("+", x + 50, y + 15);
		context.fillText("-", x + 50, y + 130);
		context.fillText("+", x + 50, y + 170);
		context.fillText("-", x + 50, y + 283);
		context.fillText("+", x + 50, y + 325);
		context.fillText("-", x + 50, y + 440);
		x = x + 450;
		y = y + 91;
		context.moveTo(x + 90, y + 25);
		context.bezierCurveTo(x + 86, y + 20, x + 85, y + 20, x + 90, y + 12);
		context.bezierCurveTo(x + 96, y + 9, x + 94, y + 9, x + 100, y + 12);
		context.bezierCurveTo(x + 101, y + 15, x + 106, y + 18, x + 100, y + 25);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
		
		context.beginPath();
		x = x + 240;
		y = y + 220;
		context.moveTo(x + 60, y + 25);
		context.bezierCurveTo(x + 56, y + 20, x + 55, y + 20, x + 60, y + 12);
		context.bezierCurveTo(x + 66, y + 9, x + 64, y + 9, x + 70, y + 12);
		context.bezierCurveTo(x + 71, y + 15, x + 76, y + 18, x + 70, y + 25);
		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();

context.beginPath();
		context.fillText("220V", x - 625, y - 240);
		context.fillText("D.C.", x - 625, y - 230);

		context.fillText("440V", x - 625, y - 90);
		context.fillText("D.C.", x - 625, y - 80);

		context.fillText("220V", x - 625, y + 70);
		context.fillText("D.C.", x - 625, y + 80);

        context.lineWidth = "2";
		context.strokeStyle = "Black";
		context.stroke();
	}
	
  exp.switchUp = function(VfExp2,IfExp2, ActualSpeed){
		var context = globalObject.context,x = globalObject.x, y = globalObject.y;
			context.font = "10pt Calibri";
			context.fillStyle="yellow";
			context.fillRect(x-40, y-275, 38,13);
			context.fillStyle="black";
			context.fillText(VfExp2+"V", x-36, y -265);
			context.fillStyle="yellow";
			context.fillRect(x -186  , y-194 , 37, 18);
 	 		context.fillStyle="black";
 	 		context.fillText(VfExp2 + "V", x - 184, y - 180);
            context.fillStyle="yellow";
            context.fillRect(x - 226, y - 194, 38, 18);
            context.fillStyle="black";
  			context.fillText("220V", x - 220, y - 180);
  			context.fillStyle="yellow";
			context.fillRect(x-126,y-314,48,15);
			context.fillStyle="black";
			context.fillText((Math.round(IfExp2*Math.pow(10,2))/Math.pow(10,2))+"A",x-117,y-302);	     //If  current
			
			context.fillStyle="red";
			context.fillRect(x+492,y-134,68,15);
			context.fillStyle="black";                                                                             //Rough speed N  
	 	    context.fillText( ActualSpeed.toFixed(0) +"r.p.m",x+494,y-123);	
	 	   
}
		
  exp.switchDown = function(VfExp2,IfExp2, ActualSpeed){
			var context = globalObject.context,x = globalObject.x, y = globalObject.y;
			context.font = "10pt Calibri";
			context.fillStyle="yellow";
			context.fillRect(x-40, y-275, 38,13);
			context.fillStyle="black";  
			context.fillText(VfExp2+"V", x-38, y -265);
			context.fillStyle="yellow";
			context.fillRect(x -186  , y-194 , 37, 18);
 	 		context.fillStyle="black";
 	 		context.fillText(VfExp2 + "V", x - 184, y - 180);
 	 		context.fillStyle="yellow";
            context.fillRect(x - 226, y - 194, 38, 18);
            context.fillStyle="black";  
  			context.fillText("220V", x - 220, y - 180);
  			context.fillStyle="yellow";
  			context.fillRect(x-126,y-314,48,15);
			context.fillStyle="black";
			context.fillText((Math.round(IfExp2*Math.pow(10,2))/Math.pow(10,2))+"A",x-117,y-302);	     //If  current
			context.fillStyle="red";
			context.fillRect(x+492,y-134,68,15);
			context.fillStyle="black";                                                                             //Rough speed N  
	 	    context.fillText( ActualSpeed.toFixed(0) +"r.p.m",x+494,y-123);					
	 		
		}		

  exp.switchUp1 = function(count2, IagExp2, ActIa,ActualSpeed, ActVt,VfgExp2 ,IfgExp2){		
		var context = globalObject.context,x = globalObject.x, y = globalObject.y;
			context.font = "10pt Calibri";
			context.fillStyle="yellow";
			context.fillRect(x-38, y-122, 38,13);	
			context.fillStyle="black";  					
			context.fillText(count2+"V", x-34, y -112);
			context.fillStyle="yellow";
			context.fillRect(x -184  , y-41 , 38, 18);
            context.fillStyle="black";  
 			context.fillText(count2 + "V", x - 179, y -27);
  			context.fillStyle="yellow";
  			context.fillRect(x - 224, y -41, 38, 18);
  			context.fillStyle="black";  
  			context.fillText("440V", x - 219, y -27);
             
            context.fillStyle="red";
			context.fillRect(x+492,y-134,68,15);
			context.fillStyle="black";                                                                             //Rough speed N  
	 	    context.fillText( ActualSpeed.toFixed(0) +"r.p.m",x+494,y-123);	
		    context.fillStyle="yellow";
		    context.fillRect(x+544,y-164,49,15);                         //Iag reading of generator
		    context.fillStyle="black";  
		    context.fillText(IagExp2.toFixed(2)+"A", x+550, y-153);	
		   
		   //context.fillStyle="pink";                                        //Vt Reading of Generator
			context.fillStyle="yellow";
			context.fillRect(x+630,y-124,38,13);
			context.fillStyle="black";  
			context.fillText(ActVt.toFixed(0)+"V", x+635, y-114);
		    context.fillStyle="yellow";
		    context.fillRect(x-124,y-162,48,15);
			context.fillStyle="black";  
			context.fillText(ActIa.toFixed(2)+"A", x-121 , y-150);
		     		 
  }	
  
  	exp.switchDown1 = function(count2, IagExp2, ActIa,ActualSpeed, ActVt,VfgExp2 ,IfgExp2){
	  var context = globalObject.context,x = globalObject.x, y = globalObject.y;
			context.font = "10pt Calibri";
			context.fillStyle="yellow";
			context.fillRect(x-38, y-122, 38,13);						
			context.fillStyle="black";
			context.fillText(count2+"V", x-34, y -112);
			context.fillStyle="yellow";
			context.fillRect(x -184  , y-41 , 38, 18);
 			context.fillStyle="black";
 			context.fillText(count2 + "V", x - 179, y -27);
  			context.fillStyle="yellow";
  			context.fillRect(x - 224, y -41, 38, 18);
  			context.fillStyle="black";
  			context.fillText("440V", x - 219, y -27);
		       // if(ActualSpeed > 0)	{	  
		    context.fillStyle="red";
			context.fillRect(x+492,y-134,68,15);
			context.fillStyle="black";                                                                             //Rough speed N  
	 	    context.fillText( ActualSpeed.toFixed(0) +"r.p.m",x+494,y-123);	
		     context.fillStyle="yellow";
		    context.fillRect(x+544,y-164,49,15);                         //Iag reading of generator
		    context.fillStyle="black";  
		    context.fillText(IagExp2.toFixed(2)+"A", x+550, y-153);	
		   //context.fillStyle="pink";                                        //Vt Reading of Generator
			context.fillStyle="yellow";
			context.fillRect(x+630,y-124,38,13);
			context.fillStyle="black";
			context.fillText(ActVt.toFixed(0)+"V", x+635, y-114);
		    context.fillStyle="yellow";
		    context.fillRect(x-124,y-162,48,15);
			context.fillStyle="black";  
			context.fillText(ActIa.toFixed(2)+"A", x-121 , y-150);
		     		 
			
			
		}		
		
 exp.switchUp2 = function(VfgExp2 ,IfgExp2, IagExp2, ActIa , ActualSpeed, ActVt){
 	        //alert("hello");
	  var context = globalObject.context,x = globalObject.x, y = globalObject.y;
			context.font = "10pt Calibri";
			context.fillStyle="yellow";
			context.fillRect(x-44, y+36, 38,13);						
			context.fillStyle="black";
			context.fillText(VfgExp2+"V", x-38, y +47);
 			context.fillStyle="yellow";
 			context.fillRect(x-190 , y+116 , 38, 18);
 			context.fillStyle="black";
 			context.fillText(VfgExp2+"V", x - 184, y +128);
            //context.fillStyle="pink";  			
  			context.fillStyle="yellow";
  			context.fillRect(x-230 , y +116, 38, 18);
  			context.fillStyle="black";
  			context.fillText("220V", x - 224, y +128);
		    context.fillStyle="yellow";
		    context.fillRect(x-130, y-4, 49,15);                                 //Ifg Reading
			context.fillStyle="black";
			context.fillText(IfgExp2.toFixed(2)+"A",x-124, y +8);
		   // if(ActualSpeed > 0)	{	  
		   context.fillStyle="red";
		   context.fillRect(x+492,y-134,68,15);
		   context.fillStyle="black";                                                                             //Actual speed N  
	 	   context.fillText( ActualSpeed.toFixed(0) +"r.p.m",x+494,y-123);	
		   //context.fillStyle="pink";                                        //Vt Reading
			context.fillStyle="yellow";
			context.fillRect(x+630,y-124,38,13);
			context.fillStyle="black";
			context.fillText(ActVt.toFixed(0)+"V", x+635, y-114);
 			  context.fillStyle="yellow";
		    context.fillRect(x+544,y-164,49,15);                         //Iag reading of generator
		    context.fillStyle="black";  
		    context.fillText(IagExp2.toFixed(2)+"A", x+550, y-153);	
		    context.fillStyle="yellow";
		    context.fillRect(x-124,y-162,48,15);
			context.fillStyle="black";  
			context.fillText(ActIa.toFixed(2)+"A", x-121, y-150);
		     		 
}	
  
 exp.switchDown2 = function(VfgExp2 ,IfgExp2, IagExp2, ActIa , ActualSpeed, ActVt){
	  var context = globalObject.context,x = globalObject.x, y = globalObject.y;
			context.font = "10pt Calibri";
			context.fillStyle="yellow";
			context.fillRect(x-44, y+36, 38,13);						
			context.fillStyle="black";
			context.fillText(VfgExp2+"V", x-38, y +47);
 			context.fillStyle="yellow";	
 			context.fillRect(x-190 , y+116 , 38, 18);
 			context.fillStyle="black";
 			context.fillText(VfgExp2+"V", x - 184, y +128);
  			context.fillStyle="yellow";	
  			context.fillRect(x-230 , y +116, 38, 18);
  			context.fillStyle="black";
  			context.fillText("220V", x - 224, y +128);
		 	context.fillStyle="yellow";
		    context.fillRect(x-130, y-4, 49,15);                                 //Ifg Reading
			context.fillStyle="black";
			context.fillText(IfgExp2.toFixed(2)+"A",x-124, y +8);
		    // if(ActualSpeed > 0)	{	  
		    context.fillStyle="red";
			context.fillRect(x+492,y-134,68,15);
			context.fillStyle="black";                                                                             //Actual speed N  
	 	    context.fillText( ActualSpeed.toFixed(0) +"r.p.m",x+494,y-123);	
			  
		   //context.fillStyle="pink";                                        //Vt Reading
			context.fillStyle="yellow";	
			context.fillRect(x+630,y-124,38,13);
			context.fillStyle="black";
			context.fillText(ActVt.toFixed(0)+"V", x+635, y-114);
     		context.fillStyle="yellow";
		    context.fillRect(x+544,y-164,49,15);                         //Iag reading of generator
		    context.fillStyle="black";  
		    context.fillText(IagExp2.toFixed(2)+"A", x+550, y-153);	
		   
			context.fillStyle="yellow";
			context.fillRect(x+630,y-124,38,13);
			context.fillStyle="black";
			context.fillText(ActVt.toFixed(0)+"V", x+635, y-114);
		    context.fillStyle="yellow";
		    context.fillRect(x-124,y-162,48,15);
			context.fillStyle="black";  
			context.fillText(ActIa.toFixed(2)+"A", x-121 , y-150);
		     		 
	}		
		
  exp.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		exp.firstPoint();
		

	}
	
	exp.toggleLine1= function(flag,canIdAttr){
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
		
		if(flag2==0)
		{				
		 if(flag==true){
				exp.eraseLine1();
				exp.drawSlope1();
				//alert('ON');
				 flag1=1;
		         flag2=0; 
			}else{
				exp.eraseLine11();
				exp.drawSlope11();
				 flag1=0;
			}		
	    }else{
			     alert("First Open the Armature Supply !!!");
		     }
	}

	exp.eraseLine1 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(125, 104);
		context.lineTo(100, 94);
		context.moveTo(112, 100);
		context.lineTo(112, 188);
		context.moveTo(115, 102);
		context.lineTo(115, 190);
		context.moveTo(126, 194);
		context.lineTo(103, 185);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp.drawSlope1 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(125, 105);
		context.lineTo(100, 105);
		context.moveTo(112, 104);
		context.lineTo(112, 194);
		context.moveTo(115, 104);
		context.lineTo(115, 194);
		context.moveTo(126, 195);
		context.lineTo(100, 195);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	exp.eraseLine11 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
 	    context.moveTo(125, 105);
		context.lineTo(103, 105);
		context.moveTo(112, 104);
		context.lineTo(112, 194);
		context.moveTo(115, 104);
		context.lineTo(115, 194);
		context.moveTo(125, 195);
		context.lineTo(103, 195);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp.drawSlope11 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
	    context.moveTo(125, 104);
		context.lineTo(100, 94);
		context.moveTo(112, 98);
		context.lineTo(112, 188);
		context.moveTo(115, 100);
		context.lineTo(115, 190);
		context.moveTo(126, 194);
		context.lineTo(103, 185);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	exp.toggleLine2 = function(flag, canIdAttr) {
		
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
		
		if(flag1==1)
		{	
		if(flag == true) {
			exp.eraseLine2();
			exp.drawSlope2();
			//alert('ON');
			flag2=true;
		  } else {
			exp.eraseLine22();
			exp.drawSlope22();
			flag2=false;
		  }
		}
		else{
			alert("Excite the Field winding first.");
			
		   }
	
		
	}

	exp.eraseLine2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(126, 259);
		context.lineTo(104, 247);
		context.moveTo(114, 255);
		context.lineTo(114, 340);
		context.moveTo(117, 257);
		context.lineTo(117, 342);
		context.moveTo(126, 348);
		context.lineTo(103, 337);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp.drawSlope2 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(127, 258);
		context.lineTo(104, 258);
		context.moveTo(115, 259);
		context.lineTo(115, 348);
		context.moveTo(118, 259);
		context.lineTo(118, 348);
		context.moveTo(126, 348);
		context.lineTo(104, 348);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	exp.eraseLine22 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
	    context.moveTo(126, 258);
		context.lineTo(104, 258);
		context.moveTo(115, 259);
		context.lineTo(115, 348);
		context.moveTo(118, 259);
		context.lineTo(118, 348);
		context.moveTo(126, 348);
		context.lineTo(104, 348);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp.drawSlope22 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(126, 259);
		context.lineTo(104, 247);
		context.moveTo(114, 253);
		context.lineTo(114, 341);
		context.moveTo(117, 255);
		context.lineTo(117, 342);
		context.moveTo(126, 348);
		context.lineTo(103, 337);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	exp.toggleLine3 = function(flag, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
		
		    if(flag == true) {
			exp.eraseLine3();
			exp.drawSlope3();
			flag1==1;
			//alert('ON');
		    } else {
			exp.eraseLine33();
			exp.drawSlope33();
			flag1==0;
		   }
		}

	exp.eraseLine3 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(121, 414);
		context.lineTo(98, 404);
		context.moveTo(109, 410);
		context.lineTo(109, 498);
		context.moveTo(112, 410);
		context.lineTo(112, 499);
		context.moveTo(121, 504);
		context.lineTo(98, 494);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp.drawSlope3 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(121, 415);
		context.lineTo(99, 415);
		context.moveTo(109, 415);
		context.lineTo(109, 505);
		context.moveTo(112, 415);
		context.lineTo(112, 505);
		context.moveTo(121, 505);
		context.lineTo(98, 505);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}

	exp.eraseLine33 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
	    context.moveTo(121, 415);
		context.lineTo(99, 415);
		context.moveTo(109, 415);
		context.lineTo(109, 505);
		context.moveTo(112, 415);
		context.lineTo(112, 505);
		context.moveTo(121, 505);
		context.lineTo(98, 505);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp.drawSlope33 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
	 	context.moveTo(121, 414);
		context.lineTo(98, 404);
		context.moveTo(109, 410);
		context.lineTo(109, 498);
		context.moveTo(112, 410);
		context.lineTo(112, 499);
		context.moveTo(121, 504);
		context.lineTo(98, 494);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();
	}
  exp.toggleLine4 = function(flag, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
		if(flag == true) {
			//alert('ON');
			exp.eraseLine4();
			exp.drawSlope4();
			
		} else {
			exp.eraseLine44();
			exp.drawSlope44();
		}
	}
	
	exp.eraseLine4 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(1169, 279);
		context.lineTo(1177, 266);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp.drawSlope4 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(1167, 279);
		context.lineTo(1167, 265);
		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
	}

	exp.eraseLine44 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(1167, 278);
		context.lineTo(1167, 266);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
	}

	exp.drawSlope44 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(1169, 279);
		context.lineTo(1177, 266);
		context.lineWidth = "2";
		context.strokeStyle = "red";
		context.stroke();
	}
	
	exp.toggleLine5 = function(flag, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
		if(flag == true) {
			//alert('ON');
			exp.eraseLine5();
			exp.drawSlope5();
			
		} else {
			exp.eraseLine55();
			exp.drawSlope55();
		}
	}
	
  exp.eraseLine5 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(1117, 329);
		context.lineTo(1122, 315);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
  }

  exp.drawSlope5 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(1117, 329);
		context.lineTo(1117, 314);
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
  }

  exp.eraseLine55 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(1117, 329);
		context.lineTo(1117, 314);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
  }

  exp.drawSlope55 = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(1117, 329);
		context.lineTo(1122, 315);
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
  }

  exp.toggleLine6 = function(flag, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
		if(flag == true) {
			//alert('ON');
			exp.eraseLine6();
			exp.drawSlope6();
			
		} else {
			exp.eraseLine66();
			exp.drawSlope66();
		}
  }
	
  exp.eraseLine6 = function() {
	var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(1142, 329);
		context.lineTo(1148, 315);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
  }

  exp.drawSlope6 = function() {
	var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(1142, 329);
		context.lineTo(1142, 315);
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
  }

  exp.eraseLine66 = function() {
	var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(1142, 329);
		context.lineTo(1142, 315);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
  }

  exp.drawSlope66 = function() {
	var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(1142, 329);
		context.lineTo(1148, 315);
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
  }
	
  exp.toggleLine7 = function(flag, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
		if(flag == true) {
			//alert('ON');
			exp.eraseLine7();
			exp.drawSlope7();
			
		} else {
			exp.eraseLine77();
			exp.drawSlope77();
		}
  }
	
  exp.eraseLine7 = function() {
	var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(1167, 329);
		context.lineTo(1172, 315);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
  }

  exp.drawSlope7 = function() {
	var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(1167, 329);
		context.lineTo(1167, 314);
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
  }

  exp.eraseLine77 = function() {
	var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(1167, 329);
		context.lineTo(1167, 314);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
  }

  exp.drawSlope77 = function() {
	var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(1167, 329);
		context.lineTo(1172, 315);
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
  }
	
  exp.toggleLine8 = function(flag, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
		if(flag == true) {
			//alert('ON');
			exp.eraseLine8();
			exp.drawSlope8();
			
		} else {
			exp.eraseLine88();
			exp.drawSlope88();
		}
  }
	
  exp.eraseLine8 = function() {
	var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(1192, 329);
		context.lineTo(1197, 315);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
  }

  exp.drawSlope8 = function() {
	var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(1192, 329);
		context.lineTo(1192, 314);
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
  }

  exp.eraseLine88 = function() {
	var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(1192, 329);
		context.lineTo(1192, 314);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
  }

  exp.drawSlope88 = function() {
	var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(1192, 329);
		context.lineTo(1197, 315);
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
  }
		
  exp.toggleLine9 = function(flag, canIdAttr) {
		globalObject.canvas = document.getElementById(canIdAttr);
		globalObject.context = globalObject.canvas.getContext("2d");
		if(flag == true) {
			//alert('ON');
			exp.eraseLine9();
			exp.drawSlope9();
			
		} else {
			exp.eraseLine99();
			exp.drawSlope99();
		}
  }
	
  exp.eraseLine9 = function() {
	var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(1217, 329);
		context.lineTo(1222, 315);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
  }

  exp.drawSlope9 = function() {
	var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(1217, 329);
		context.lineTo(1217, 314);
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
  }

  exp.eraseLine99 = function() {
	var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(1217, 329);
		context.lineTo(1217, 314);
		context.lineWidth = "5";
		context.strokeStyle = "#FFFFFF";
		context.stroke();
  }

  exp.drawSlope99 = function() {
	var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();
		context.moveTo(1217, 329);
		context.lineTo(1222, 315);
		context.lineWidth = "2";
		context.strokeStyle = "blue";
		context.stroke();
  }
		
})(exp2canvas);
