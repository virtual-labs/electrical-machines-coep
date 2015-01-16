var ds = datastore4b = ds || {}; 
(function(){
	var voltageCount=0;
	var slips = 1;
	var complexno,powerfactor;
	var frictionWinding = 140;
	var statorCopperLoss,rotorCopperLoss;
	var iLine=0;
	var firstWattReading,secondWattReading,Is,lineCurrent,correctSpeed,Ir,fIr,totalCopperLoss,power,lineCurrent=0;
	var phaseCurrent,Zab,s1,s12;
	var exp4bStoreFlag=false;
	var speedArray ={"0":0,"5":0,"10":0,"15":0,"20":0,"25":0,"30":0,"35":0,"40":0,"45":0,"50":0,"55":0,"60":0,"65":0,"70":0,"75":0,"80":900,"85":1175,"90":1350,"95":1400,"100":1425,
					 "105":1429,"110":1433,"115":1437,"120":1441,"125":1445,"130":1447,"135":1449,"140":1451,"145":1453,"150":1456,"155":1457,"160":1458,"165":1459,"170":1460,"175":1461,
					 "180":1463,"185":1464,"190":1465,"195":1465,"200":1466,"205":1466,"210":1467,"215":1467,"220":1468,"225":1469,"230":1470,"235":1471,"240":1471,"245":1472,"250":1472,
					 "255":1473,"260":1474,"265":1475,"270":1476,"275":1477,"280":1478,"285":1479,"290":1480,"295":1482,"300":1482,"305":1483,"310":1483,"315":1483,"320":1484,"325":1484,
					 "330":1484,"335":1485,"340":1485,"345":1485,"350":1486,"355":1486,"360":1487,"365":1487,"370":1488,"375":1488,"380":1489,"385":1490,"390":1490,"395":1491,"400":1492,
					 "405":1493,"410":1494,"415":1495,"420":1495,"425":1495,"430":1495,"435":1495,"440":1495,"445":1495,"450":1495,"455":1495,"460":1495,"465":1495,"470":1495,"475":1495,
					 "480":1495,"485":1495,"490":1495,"495":1495,"500":1495};		
				
	
	var exp4bStoreStoreData = function()
	{
		exp4bStoreFlag = true;
				if(exp4bStoreFlag == true)
		{
			model.getBlockRorotSuppVoltageExp4b(voltageCount);
			model.getTotalCopperLossExp4b(totalCopperLoss);
			model.getBlockRotorPhaseAngleExp4b(powerfactor);
			model.getPhaseCurrentExp4b(phaseCurrent);
			model.getPowerExp4b(power);
			model.getfirstwattreading4b(firstWattReading);
			model.getsecondwattreading4b(secondWattReading);
			model.getlineCurrent(lineCurrent);
		}
       exp4bStoreFlag=false;
	}
	
   var exp4bDataClearData = function(ExpId) {
		var arr = model.get("ampereValue");
		//console.log("clear amp : " + arr);
		model.clearData();
		var arr1 = model.get("ampereValue");
		//console.log("clear amp : " + arr1);
		var vol = model.get("voltageValue");
		//console.log("clear vol : " + vol);
		var id = "none";

		graph.graphData(id, ExpId);
		exp4bStoreFlag = false;
	}
	
	
	var exp4bDataStoreSwitchUp = function(){
		//console.log("increment");
		if(voltageCount >0)
		voltageCount=voltageCount-5;
		//console.log("up :"+voltageCount);
		complexA = new ComplexNumber(3.6 , 5 );
		complexB = new ComplexNumber(24.02 , 203.7 );
		complexC = new ComplexNumber(17.2, 5);
		complexD =new ComplexNumber(24.02,203.7);
		complexE = new ComplexNumber(17.2,5);
		fZab = complexA.add((complexB.mult(complexC)).div(complexD.add(complexE)));
		//console.log("fzab:"+fZab);
		Zab = Math.sqrt(fZab.real * fZab.real + fZab.imaginary * fZab.imaginary);
		//console.log("zab:"+Zab.toFixed(1));
		Is = (voltageCount/Zab.toFixed(1));
		//console.log("Is:>>"+Is);
		lineCurrent=(Is*Math.sqrt(3)).toFixed(1);		
	//	console.log("lineCurrent:"+lineCurrent);
		complexF = new ComplexNumber(Is,0);
		statorCopperLoss = (3*(lineCurrent*lineCurrent)*3.6).toFixed(2);
		Ir = complexF.mult(complexB).div(complexB.add(complexC));
		fIr = Math.sqrt(Ir.real*Ir.real + Ir.imaginary*Ir.imaginary);
		//console.log("Ir :"+Ir+"fIr :"+fIr);
		rotorCopperLoss = 3 * fIr * fIr * 17.2;
		//console.log("rotorCopperLoss :"+rotorCopperLoss);
		//console.log("statorCopperLoss :"+statorCopperLoss);
		totalCopperLoss = parseFloat(statorCopperLoss) + parseFloat(rotorCopperLoss);
		console.log("totalCopperLoss :"+totalCopperLoss);
		powerfactor = (Math.atan(fZab.imaginary/fZab.real))*180/Math.PI;		
		//console.log("powerfactor : "+powerfactor);
		s1 = (Math.cos(59*Math.PI/180));
		//console.log("s1: "+s1);
		firstWattReading = ((voltageCount *lineCurrent* s1)).toFixed(2);
		//console.log("firstWattReading :"+firstWattReading);
		s12 = (Math.cos(0.7 *Math.PI/180));
		//console.log("s12: "+s12);
		secondWattReading = ((voltageCount *lineCurrent* s12)).toFixed(2);		
		//console.log("secondWattReading :"+secondWattReading);
		phaseCurrent = lineCurrent / 2.54;
		//console.log("phaseCurrent :"+phaseCurrent); 
		power=Math.sqrt(3) * voltageCount * lineCurrent * (Math.cos(powerfactor * Math.PI / 180));
		//console.log("power is :"+power);		
		exp4bcanvas.switchVoltage(voltageCount,lineCurrent,firstWattReading,secondWattReading);		
	}
	var exp4bDataStoreSwitchDown = function(){
		//console.log("decrement");
		if(voltageCount <500)
		voltageCount=voltageCount+5;
		//console.log("down :"+voltageCount);
		correctSpeed = speedArray[voltageCount];
		complexA = new ComplexNumber(3.6 , 5 );
		complexB = new ComplexNumber(24.02 , 203.7 );
		complexC = new ComplexNumber(17.2, 5);
		complexD = new ComplexNumber(24.02,203.7);
		complexE = new ComplexNumber(17.2,5);
		fZab = complexA.add((complexB.mult(complexC)).div(complexD.add(complexE)));
	    //console.log("fzab:"+fZab);
		Zab = Math.sqrt(fZab.real * fZab.real + fZab.imaginary * fZab.imaginary);
		//console.log("zab:"+Zab.toFixed(1));
		Is = (voltageCount/Zab.toFixed(1)).toFixed(1);
		//console.log("Is:>>"+Is);
		
		lineCurrent=(Is*Math.sqrt(3)).toFixed(1);		
		//console.log("lineCurrent:"+lineCurrent);
		if(lineCurrent>3.8)
		{
	
			alert("Motor Current is greater than its limited value.");
			lineCurrent=3.8;
		}
		complexF = new ComplexNumber(Is,0);
		statorCopperLoss = (3*(lineCurrent*lineCurrent)*3.6).toFixed(2);
		//console.log("lineCurrent:"+lineCurrent);
		Ir = complexF.mult(complexB).div(complexB.add(complexC));
		
		fIr = Math.sqrt(Ir.real*Ir.real + Ir.imaginary*Ir.imaginary); 
		//console.log("Ir :"+Ir+" fIr :"+fIr);
		rotorCopperLoss = 3 * fIr * fIr * 17.2;
		//console.log("rotorCopperLoss :"+rotorCopperLoss);		 
		//console.log("statorCopperLoss :"+statorCopperLoss);
		totalCopperLoss = parseFloat(statorCopperLoss) + parseFloat(rotorCopperLoss);
		//console.log("totalCopperLoss :"+totalCopperLoss);	
		powerfactor = (Math.atan(fZab.imaginary/fZab.real))*180/Math.PI;
		//console.log("powerfactor : "+powerfactor);
		s1 = (Math.cos(59*Math.PI/180));
		//console.log("s1: "+s1);
		firstWattReading = ((voltageCount *lineCurrent* s1)).toFixed(2);		
		//console.log("firstWattReading :"+firstWattReading);
		s12 = (Math.cos(0.7*Math.PI/180));
		//console.log("s12: "+s12);
		secondWattReading = ((voltageCount *lineCurrent* s12)).toFixed(2);		
		//console.log("secondWattReading :"+secondWattReading);
		phaseCurrent = lineCurrent / 2.54;
		//console.log("phaseCurrent :"+phaseCurrent);
		power=Math.sqrt(3) * voltageCount * lineCurrent * (Math.cos(powerfactor * Math.PI / 180));
		//console.log("power is :"+power);
		
		exp4bcanvas.switchVoltage(voltageCount,lineCurrent,firstWattReading,secondWattReading);
	}
	var calculateCoreLoss = function(x){
		var y = (0.0015*x*x) -(0.11*x);
		//console.log("y >>"+y);
		return y;
	}
    var exp4bTPST = function(flagExp4bDpst){
		if(flagExp4bDpst == false){
			voltageCount=0;
			lineCurrent=0;
			firstWattReading=0;
			secondWattReading=0;
			correctSpeed=0;
			exp4bcanvas.switchVoltage(voltageCount,lineCurrent,firstWattReading,secondWattReading);
		    }	
	}
	function ComplexNumber(real,imaginary) {
    	this.real = real;
    	this.imaginary = imaginary;
	}
	ComplexNumber.prototype = {
		real: 0,
		imaginary: 0,
		
		add: function() {
		    if(arguments.length == 1)
		          return new ComplexNumber(this.real + arguments[0].real, this.imaginary + arguments[0].imaginary);
		    else
		          return new ComplexNumber(this.real + arguments[0], this.imaginary + arguments[1]);
		},
		sub: function(){
  			  if(arguments.length == 1)
        		  return new ComplexNumber(this.real - arguments[0].real, this.imaginary - arguments[0].imaginary);
    		  else
        		  return new ComplexNumber(this.real - arguments[0], this.imaginary - arguments[1]);	
		},
		mult: function() {
    		 var multiplier = arguments[0];
    		 if(arguments.length != 1)
        			multiplier = new ComplexNumber(arguments[0], arguments[1]);
			 return new ComplexNumber(this.real * multiplier.real - this.imaginary * multiplier.imaginary,                    
             this.real * multiplier.imaginary + this.imaginary * multiplier.real);             
		},		
		 div : function(){
			   var divisor = arguments[0];
			    if(arguments.length != 1)
			           divisor = new ComplexNumber(arguments[0], arguments[1]);
			   
			   var det = (divisor.real*divisor.real) + (divisor.imaginary * divisor.imaginary);
			   //console.log(det);
			   //console.log((this.real * divisor.real +this.imaginary * divisor.imaginary));
			   return new ComplexNumber((this.real * divisor.real +this.imaginary * divisor.imaginary)/det,                    
			      (this.imaginary * divisor.real - this.real * divisor.imaginary)/det);
			     },		
		toString: function() {
 		   return this.real + " + " + this.imaginary + "j";
			}
	}
	
	ds.exp4bDataStoreSwitchUp=exp4bDataStoreSwitchUp;
	ds.exp4bDataStoreSwitchDown=exp4bDataStoreSwitchDown;
	ds.exp4bTPST = exp4bTPST;
	ds.exp4bStoreStoreData =exp4bStoreStoreData;
	ds.exp4bDataClearData=exp4bDataClearData;
	
})(datastore4b);
