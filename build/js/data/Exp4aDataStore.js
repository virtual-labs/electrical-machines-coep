var ds = datastore4a = ds || {}; 
//var model =new exp_Model();
(function(){
	var voltageCount=0;
	var slips,Nr;
	var Ns = 1500;
	var complexno;
	var powerfactor,power;
	var coreLoss;
	var frictionWinding=140;
	var statorCopperLoss,totalCopperLoss,rotorCopperLoss;
	
	var iLine=0;
	var firstWattReading,secondWattReading;
	var Is,fIs;
	var correctSpeed;
	var StoreFlagExp4a = false;
	var complexA,complexB,complexC,complexD;
	var exp4aStoreFlag = false;
	/* var speedArray ={"0":0,"5":0,"10":0,"15":0,"20":0,"25":0,"30":0,"35":0,"40":0,"45":0,"50":0,"55":0,"60":0,"65":0,"70":0,"75":0,"80":900,"85":1175,"90":1350,"95":1400,"100":1425,
					 "105":1429,"110":1433,"115":1437,"120":1441,"125":1445,"130":1447,"135":1449,"140":1451,"145":1453,"150":1456,"155":1457,"160":1458,"165":1459,"170":1460,"175":1461,
					 "180":1463,"185":1464,"190":1465,"195":1465,"200":1466,"205":1466,"210":1467,"215":1467,"220":1468,"225":1469,"230":1470,"235":1471,"240":1471,"245":1472,"250":1472,
					 "255":1473,"260":1474,"265":1475,"270":1476,"275":1477,"280":1478,"285":1479,"290":1480,"295":1482,"300":1482,"305":1483,"310":1483,"315":1483,"320":1484,"325":1484,
					 "330":1484,"335":1485,"340":1485,"345":1485,"350":1486,"355":1486,"360":1487,"365":1487,"370":1488,"375":1488,"380":1489,"385":1490,"390":1490,"395":1491,"400":1492,
					 "405":1493,"410":1494,"415":1495,"420":1495,"425":1495,"430":1495,"435":1495,"440":1495,"445":1495,"450":1495,"455":1495,"460":1495,"465":1495,"470":1495,"475":1495,
					 "480":1495,"485":1495,"490":1495,"495":1495,"500":1495}; */

var speedArray ={"0":0,"2":0,"4":0,"6":0,"8":0,"10":0,"12":0,"14":0,"16":0,"18":0,"20":0,"22":0,"24":0,"26":0,"28":0,"30":0,
                 "32":0,"34":0,"36":0,"38":0,"40":0,"42":0,"44":0,"46":0,"48":0,"50":0,"52":0,"54":0,"56":0,"58":0,"60":0,
                "62":0,"64":0,"66":0,"68":0,"70":0,"72":0,"74":0,"76":0,"78":0,"80":900,"82":900,"84":900,"86":1175,"88":1175,
                "90":1350,"92":1350,"94":1350,"96":1400,"98":1400,"100":1425,"102":1425,"104":1425,"106":1429, "108":1429,
                "110":1433,"112":1433,"114":1433,"116":1437,"118":1437,"120":1441,"122":1441,"124":1441,"126":1445,"128":1445,
                "130":1447,"132":1447,"134":1447,"136":1449,"138":1449,"140":1451,"142":1451,"144":1451,"146":1453,"148":1453,
                "150":1456,"152":1456,"154":1456,"156":1457,"158":1457,"160":1458,"162":1458,"164":1458,"166":1459,"168":1459,
                "170":1460,"172":1460,"174":1460,"176":1461,"178":1461,"180":1463,"182":1463,"184":1463,"186":1464,"188":1464,
                "190":1465,"192":1465,"194":1465,"196":1465,"198":1465,"200":1466,"202":1466,"204":1466,"206":1466,"208":1466,
                "210":1467,"212":1467,"214":1467,"216":1467,"218":1467,"220":1468,"222":1468,"224":1468,"226":1469,"228":1469,
                "230":1470,"232":1470,"234":1470,"236":1471,"238":1471,"240":1471,"242":1471,"244":1471,"246":1472,"248":1472,
                "250":1472,"252":1472,"254":1472,"256":1473,"258":1473,"260":1474,"262":1474,"264":1474,"266":1475,"268":1475,
                "270":1476,"272":1476,"274":1476,"276":1477,"278":1477,"280":1478,"282":1478,"284":1478,"286":1479,"288":1479,
                "290":1480,"292":1480,"294":1480,"296":1482,"298":1482,"300":1482,"302":1482,"304":1482,"306":1483,"308":1483,
                "310":1483,"312":1483,"314":1483,"316":1483,"318":1483,"320":1484,"322":1484,"324":1484,"326":1484,"328":1484,
                "330":1484,"332":1484,"334":1484,"336":1485,"338":1485,"340":1485,"342":1485,"344":1485,"346":1485,"348":1485,
                "350":1486,"352":1486,"354":1486,"356":1486,"358":1486,"360":1487,"362":1487,"364":1487,"366":1487,"368":1487,
                "370":1488,"372":1488,"374":1488,"376":1488,"378":1488,"380":1489,"382":1489,"384":1489,"386":1490,"388":1490,
                "390":1490,"392":1490,"394":1490,"396":1491,"398":1491,"400":1492,"402":1492,"404":1492,"406":1493,"408":1493,
                "410":1494,"412":1494,"414":1494,"416":1495,"418":1495,"420":1495,"422":1495,"424":1495,"426":1495,"428":1495,
                "430":1495,"432":1495,"434":1495,"436":1495,"438":1495,"440":1495,"442":1495,"444":1495,"446":1495,"448":1495,
                "450":1495,"452":1495,"454":1495,"456":1495,"458":1495,"460":1495,"462":1495,"464":1495,"466":1495,"468":1495,
                "470":1495,"472":1495,"474":1495,"476":1495,"478":1495,"480":1495,"482":1495,"484":1495,"486":1495,
                "488":1495,"490":1495,"492":1495,"494":1495,"496":1495,"498":1495,"500":1495};

			
				
	var exp4aStoreStoreData = function()
	{
		exp4aStoreFlag = true;
		if(exp4aStoreFlag == true){
			model.graphCoreLossExp4a(coreLoss);
			model.graphSupplyVoltageExp4a(voltageCount);
			model.graphSpeedExp4a(correctSpeed);
			model.graphCurrentExp4a(fIs);
			model.graphpower4a(power);
			model.graphrotorangle4a(powerfactor);
			model.graphtotalcopperloss4a(totalCopperLoss);
			model.graphfirstwattreading4a(firstWattReading);
			model.graphsecondwattreading4a(secondWattReading);
			
			
		}
		exp4aStoreFlag = false;
	}
	
   var exp4aDataClearData = function(ExpId) {
		var arr = model.get("ampereValue");
		//console.log("clear amp : " + arr);
		model.clearData();
		var arr1 = model.get("ampereValue");
		//console.log("clear amp : " + arr1);
		var vol = model.get("voltageValue");
		//console.log("clear vol : " + vol);
		var id = "none";
        graph.graphData(id, ExpId);
		exp4aStoreFlag = false;
	}
	
	var exp4aDataStoreSwitchUp = function(){
		if(voltageCount >0)
		voltageCount=voltageCount-2;
		//console.log("voltageCount ::"+voltageCount);
		Nr = speedArray[voltageCount];
		slips = (Ns-Nr)/ Ns;
		//console.log("Nr: "+Nr+"slip :"+slips);
		correctSpeed = speedArray[voltageCount];
		complexA = new ComplexNumber(3.6 , 5 );
		complexB = new ComplexNumber(24.02 , 203.7 );
		complexC = new ComplexNumber((17.2/slips) , 5);
		complexD = new ComplexNumber(((17.2/slips)+24.02) ,208.7);
		complexE = new ComplexNumber(17.2,5);
		//console.log("A :"+complexA);
		//console.log("B :"+complexB);
		//console.log("C :"+complexC);
		//console.log("D :"+complexD);
		
		fZab = complexA.add((complexB.mult(complexC)).div(complexD));
	    //console.log("fzab:"+fZab);
		var Zab = Math.sqrt(fZab.real * fZab.real + fZab.imaginary * fZab.imaginary);
		//console.log("zab:"+Zab.toFixed(1));
		//console.log("voltage :"+voltageCount);
		Is = (parseFloat(voltageCount)/parseFloat(Zab));
		complexF = new ComplexNumber(Is,0);
		//console.log("Is:>>"+Is);
		fIs=(Math.round((Is*Math.sqrt(3))*Math.pow(10,1))/Math.pow(10,1));		
		//console.log("fIs:"+fIs);
		coreLoss = (voltageCount * voltageCount)/ 1752;
		//console.log("coreLoss"+coreLoss);
		
		//----------------------------------------
		complexF = new ComplexNumber(Is,0);
		statorCopperLoss = (3*(fIs*fIs)*3.6).toFixed(2);
		Ir = complexF.mult(complexB).div(complexB.add(complexC));
		
		console.log("Ir down :"+Ir); 
		fIr = Math.sqrt(Ir.real*Ir.real + Ir.imaginary*Ir.imaginary);
		//console.log("Ir :"+Ir+"fIr :"+fIr);
		rotorCopperLoss = parseFloat(3 * fIr * fIr * 17.2);
		//console.log("rotorCopperLoss :"+rotorCopperLoss);
		//console.log("statorCopperLoss :"+statorCopperLoss);
		 
		totalCopperLoss=parseFloat(statorCopperLoss) + rotorCopperLoss;
		
		console.log("totalCopperLoss :"+totalCopperLoss);
		
		//---------------------------------
		powerfactor = ((Math.atan(parseFloat(fZab.imaginary) /parseFloat(fZab.real))*180/Math.PI)).toFixed(1);
		//console.log("powerfactor:"+powerfactor);
		var dd=parseFloat(fZab.imaginary) /parseFloat(fZab.real);
		//console.log("powerfactor: "+powerfactor+ "  dd :"+dd+"    ::"+fZab.imaginary+"::  "+fZab.real);
		
		firstWattReading = ((voltageCount *fIs*Math.cos(parseFloat(30)+parseFloat(powerfactor))*Math.PI/180)).toFixed(2);
		//console.log("firstWattReading :"+firstWattReading);
		var s12 = (Math.cos(-50*Math.PI/180));
		//console.log("s12: "+s12);
		secondWattReading = ((voltageCount *fIs* s12)).toFixed(2);
		//console.log("secondWattReading :"+secondWattReading);
		power=Math.sqrt(3) * voltageCount * fIs * (Math.cos(powerfactor * Math.PI / 180));
		//console.log("power is :"+power);		
		exp4acanvas.switchVoltage(voltageCount,fIs,firstWattReading,secondWattReading,correctSpeed);	
		}
	var exp4aDataStoreSwitchDown = function(){
		if(voltageCount <500)
		voltageCount=voltageCount+2;
		//console.log("voltageCount ::"+voltageCount);
		Nr = speedArray[voltageCount];
		slips = (Ns-Nr)/ Ns;
		//console.log("slip :"+slips);
		//console.log("down :"+voltageCount);
		correctSpeed = speedArray[voltageCount];
		complexno = new ComplexNumber(33.81,373.07);
		//console.log("complexno :> "+complexno);
		
		complexA = new ComplexNumber(3.6 , 5 );
		complexB = new ComplexNumber(24.02 , 203.7 );
		complexC = new ComplexNumber((17.2/slips).toFixed(1) , 5);
		complexD = new ComplexNumber(((17.2/slips)+24.02).toFixed(1),208.7);
		//console.log("A :"+complexA);
		//console.log("B :"+complexB);
		//console.log("C :"+complexC);
		//console.log("D :"+complexD);
		fZab = complexA.add((complexB.mult(complexC)).div(complexD));
	    //console.log("fzab:"+fZab);
		var Zab = Math.sqrt(fZab.real * fZab.real + fZab.imaginary * fZab.imaginary);
		//console.log("zab:dwn "+Zab.toFixed(1));
		//console.log("voltage dwn:"+voltageCount);
		Is = (parseFloat(voltageCount)/parseFloat(Zab));
		//console.log("Is:dwn >>"+Is);
		fIs=(Math.round((Is*Math.sqrt(3))*Math.pow(10,2))/Math.pow(10,2));	
		console.log("fIs:"+fIs);
		coreLoss = (voltageCount * voltageCount)/ 1752;
		//console.log("coreLoss :"+coreLoss);	
		//----------------------------------
		
		
		
		complexF = new ComplexNumber(Is,0);
		statorCopperLoss = (3*(fIs*fIs)*3.6).toFixed(2);
		Ir = complexF.mult(complexB).div(complexB.add(complexC));
		
		console.log("Ir up :"+Ir); 
		fIr = Math.sqrt(Ir.real*Ir.real + Ir.imaginary*Ir.imaginary);
		//console.log("Ir :"+Ir+"fIr :"+fIr);
		rotorCopperLoss = 3 * fIr * fIr * 17.2;
		//console.log("rotorCopperLoss :"+rotorCopperLoss);
		//console.log("statorCopperLoss :"+statorCopperLoss);
		 
		totalCopperLoss=parseFloat(statorCopperLoss) + parseFloat(rotorCopperLoss);
		
		console.log("totalCopperLoss :"+totalCopperLoss);
		
		//---------------------------------------------------------
		
		
		
		
		powerfactor = ((Math.atan(parseFloat(fZab.imaginary) /parseFloat(fZab.real))*180/Math.PI)).toFixed(1);
		//console.log("powerfactor:"+powerfactor);
		var dd= parseFloat(fZab.imaginary) /parseFloat(fZab.real);
		//console.log("powerfactor: "+powerfactor+ "  dd :"+dd+"    ::"+fZab.imaginary+"::  "+fZab.real);
		//console.log("::::>>>"+(parseFloat(30)+parseFloat(powerfactor)));
		firstWattReading = ((voltageCount * fIs * Math.cos((parseFloat(30)+parseFloat(powerfactor))*Math.PI/180))).toFixed(2);
		//console.log("firstWattReading :"+firstWattReading);
		var s12 = (Math.cos(50*Math.PI/180));
		//console.log("s12: "+s12);
		secondWattReading = ((voltageCount *fIs* s12)).toFixed(2);
		//console.log("secondWattReading :"+secondWattReading);
		power=Math.sqrt(3) * voltageCount * fIs * (Math.cos(powerfactor * Math.PI / 180));
		//console.log("power is :"+power);
    	exp4acanvas.switchVoltage(voltageCount,fIs,firstWattReading,secondWattReading,correctSpeed);
	}
	var exp4aTPST = function(flagExp4aDpst){
		if(flagExp4aDpst == false){
			voltageCount=0;
			fIs=0;
			firstWattReading=0;
			secondWattReading=0;
			correctSpeed=0;
			exp4acanvas.switchVoltage(voltageCount,fIs,firstWattReading,secondWattReading,correctSpeed);
		}
	}
	var calculateCoreLoss = function(x){
		var y = (0.0015*x*x) -(0.11*x);
		//console.log("y >>"+y);
		return y;
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
			   
			   var det = parseFloat( parseFloat(divisor.real)* parseFloat(divisor.real)) + (divisor.imaginary * divisor.imaginary);
			   console.log("det:"+det);
			   //console.log((this.real * divisor.real +this.imaginary * divisor.imaginary));
			   return new ComplexNumber((this.real *  parseFloat(divisor.real) +this.imaginary * divisor.imaginary)/det,                    
			      (this.imaginary *  parseFloat(divisor.real) - this.real * divisor.imaginary)/det);
			     },
		
		toString: function() {
 		   return this.real + " + " + this.imaginary + "j";
			}
	}
	
	ds.exp4aDataStoreSwitchUp=exp4aDataStoreSwitchUp;
	ds.exp4aDataStoreSwitchDown=exp4aDataStoreSwitchDown;
	ds.exp4aTPST =exp4aTPST;
	ds.exp4aStoreStoreData =exp4aStoreStoreData;
	ds.exp4aDataClearData=exp4aDataClearData;
	
})(datastore4a);
