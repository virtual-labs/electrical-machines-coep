var ds = datastore5 = ds || {};
(function() {
	var exp5StoreFlag = false;
	var approxSpeed, Eg, Ish, Il, Ia, Vt, resistance=0;
	var loadRes, outputDCGen, copperLoss, coreLoss, ammeterCopLoss, totalIptoDCGenerator;
	var complexA1, complexB1, complexC1, complexD1, complexE1, complexF1, slip, Nr, statorCurrent;
	var voltageCount = 0, Ra = 3, Rsh = 192, Ns = 1500, counterRes = 0;
	var Iml=0;
	var totalPowerToDcGen=0;

	var speedArray ={"0":0,"5":0,"10":0,"15":0,"20":0,"25":0,"30":0,"35":0,"40":0,"45":0,"50":0,"55":0,"60":0,"65":0,"70":0,"75":0,"80":900,"85":1175,"90":1350,"95":1400,"100":1425,
					 "105":1429,"110":1433,"115":1437,"120":1441,"125":1445,"130":1447,"135":1449,"140":1451,"145":1453,"150":1456,"155":1457,"160":1458,"165":1459,"170":1460,"175":1461,
					 "180":1463,"185":1464,"190":1465,"195":1465,"200":1466,"205":1466,"210":1467,"215":1467,"220":1468,"225":1469,"230":1470,"235":1471,"240":1471,"245":1472,"250":1472,
					 "255":1473,"260":1474,"265":1475,"270":1476,"275":1477,"280":1478,"285":1479,"290":1480,"295":1482,"300":1482,"305":1483,"310":1483,"315":1483,"320":1484,"325":1484,
					 "330":1484,"335":1485,"340":1485,"345":1485,"350":1486,"355":1486,"360":1487,"365":1487,"370":1488,"375":1488,"380":1489,"385":1490,"390":1490,"395":1491,"400":1492,
					 "405":1493,"410":1494,"415":1495,"420":1495,"425":1495,"430":1495,"435":1495,"440":1495,"445":1495,"450":1495,"455":1495,"460":1495,"465":1495,"470":1495,"475":1495,
					 "480":1495,"485":1495,"490":1495,"495":1495,"500":1495};
					 		


	var exp5StoreData = function() {
		exp5StoreFlag = true;
		if(exp5StoreFlag == true){
			model.graphSupplyVoltageExp5(voltageCount);
			model.graphDcCurrentExp5(Iml);
			model.graphAcCurrentExp5(Il);
			model.graphVoltageGeneratorExp5(Vt);
			model.graphSpeedExp5(Nr);
			model.graphFirstWattmeterExp5(firstWattReading);
			model.graphSecondWattmeterExp5(secondWattReading);
			
		}
        exp5StoreFlag = false;
	}
	var exp5DataClearData = function(ExpId) {
		var arr = model.get("ampereValue");
		//console.log("clear amp : " + arr);
		model.clearData();
		var arr1 = model.get("ampereValue");
		//console.log("clear amp : " + arr1);
		var vol = model.get("voltageValue");
		//console.log("clear vol : " + vol);
		var id = "none";

		graph.graphData(id, ExpId);
		exp5StoreFlag = false;
	}
	var calculateCoreLoss1 = function(x) {
		var y = 2 * Math.pow(x, 4) + 8.8 * Math.pow(x, 3) - 17 * Math.pow(x, 2) + 55 * x - 0;
		return y;
	}
	var exp5DataStoreFieldVoltageUp = function(flagExp5Tpst, flagMainLoadExp5, flagLoad1Exp5, flagLoad2Exp5, flagLoad3Exp5, flagLoad4Exp5, flagLoad5Exp5) {//alert("hi");
		//for(var k=0;k<4;i++){
		if(voltageCount < 500)
			voltageCount += 5;
		approxSpeed = speedArray[voltageCount];
		//console.log("approxSpeed :" + approxSpeed);
		Eg = 0.294314 * approxSpeed;
		//console.log("Eg: " + Eg.toFixed(2));
		Ish = Eg / 192;
		//console.log("Ish :" + Ish.toFixed(2));
        if(flagMainLoadExp5 == false || flagMainLoadExp5 == undefined) {
			resistance = 0;
			Il = 0;
		} else {
			if(flagLoad1Exp5 == true) {
				counterRes++;
			}
			if(flagLoad2Exp5 == true) {
				counterRes++;
			}
			if(flagLoad3Exp5 == true) {
				counterRes++;
			}
			if(flagLoad4Exp5 == true) {
				counterRes++;
			}
			if(flagLoad5Exp5 == true) {
				counterRes++;
			}
		}
		//console.log("counterRes : : " + counterRes);

		if(counterRes == 0) {
			loadRes = 0;
			Il = 0;
		} else {
			loadRes = 350 / counterRes;
			counterRes = 0;
			//console.log("Total Load Resisteance loadRes :  " + loadRes);
			Il = Eg / loadRes;
		}
		//console.log("Il :" + Il.toFixed(2));
		Ia = Il + Ish;
		//console.log("Ia :" + Ia.toFixed(2));
		Vt = Eg - (Ia * Ra);
		//console.log("Vt :" + Vt.toFixed(0));
		outputDCGen = Vt * Il;
		//console.log("outputDCGen :" + outputDCGen.toFixed(2));
		copperLoss = Ish * Ish * Rsh;
		//console.log("copperLoss : " + copperLoss.toFixed(2));
		coreLoss = this.calculateCoreLoss1(Ish);
		//console.log("core Loss: " + coreLoss);
		ammeterCopLoss = Ia * Ia * 3;
		//console.log("Armature Copper loass :" + ammeterCopLoss.toFixed(2));
		totalIptoDCGenerator = outputDCGen + copperLoss + ammeterCopLoss + coreLoss;
		//console.log("pmechR :" + totalIptoDCGenerator.toFixed(2));

		//////////////////////////////2nd///////////////////////////////////

		complexC1 = new ComplexNumber(0.095407, -0.136559);
		complexD1 = new ComplexNumber(3.6, 5);
		complexE1 = new ComplexNumber(1, 0);
		complexF1 = new ComplexNumber(voltageCount, 0);

		//for(var r = 1; r <= 2000; r++) {
		var r = 0.01;
		while(r < 200) {
			var pmechR1 = totalIptoDCGenerator / (3 * r);
			////console.log("pmechR :"+ pmechR);
        complexA1 = new ComplexNumber(17.2 + r, 5);
		complexB1 = new ComplexNumber(Math.sqrt(pmechR1), 0);
		var finalExp = ((((complexA1).mult(complexB1)).mult((complexC1).add((complexE1).div(complexA1)))).sub((complexF1).div(complexD1)));
		var ee = Math.sqrt(finalExp.real * finalExp.real + finalExp.imaginary * finalExp.imaginary);
         if(ee < 1) {
				alert("r is :" + r);
				//console.log("ee  is :" + ee.toFixed(2));
				break;
			}
			r = r + 0.01;
		}
		//console.log("r is"+r);
		//console.log("ee  :" + ee.toFixed(2));
		////console.log("r :" + r);
		//console.log("A :" + complexA1);
		//console.log("B :" + complexB1);
		//console.log("r for slip is : " + r);
		slip = 17.2 / (r + 17.2);
		//console.log("slip :" + slip);
		Nr = Ns * (1 - slip);
		//console.log("Nr :" + Nr.toFixed(2));
		//console.log("Final Speed :" + Nr);
		//console.log("Final Vt :" + Vt);
		//console.log("Final Il :" + Il);
		/////////////////// 3rd Step/////////////////////////////////////
		comlexZA = new ComplexNumber(3.6, 5);
		comlexZB = new ComplexNumber(24.02, 203.7);
		comlexZC = new ComplexNumber((17.2 / slip).toFixed(1), 5);
		comlexZD = new ComplexNumber(((17.2 / slip) + 24.02).toFixed(1), 208.7);
		Zab = comlexZA.add((comlexZB.mult(comlexZC)).div(comlexZD));
		//console.log("Zab is :" + Zab);
		complexvoltageCount = new ComplexNumber(voltageCount, 0);
		statorCurrentComplexValue = complexvoltageCount.div(Zab);
		//console.log("statorCurrentComplexValue is : " + statorCurrentComplexValue);
		statorCurrent = Math.sqrt(statorCurrentComplexValue.real * statorCurrentComplexValue.real + statorCurrentComplexValue.imaginary * statorCurrentComplexValue.imaginary);
		//console.log("statorCurrent is : " + statorCurrent.toFixed(2));
		Iml = statorCurrent * Math.sqrt(3);
		//console.log(" Field current is Iml : " + Iml.toFixed(2));
		powerfactor = ((Math.atan(parseFloat(Zab.imaginary) / parseFloat(Zab.real)) * 180 / Math.PI)).toFixed(1);
		//console.log("power factor is : " + powerfactor);
		firstWattReading = ((voltageCount * Il * Math.cos((parseFloat(30) + parseFloat(powerfactor)) * Math.PI / 180))).toFixed(2);
		//console.log("firstWattReading   : " + firstWattReading);
		secondWattReading = ((voltageCount * Il * Math.cos((parseFloat(30) - parseFloat(powerfactor)) * Math.PI / 180))).toFixed(2);
		//console.log("secondWattReading   : " + secondWattReading);
		totalPowerToDcGen = firstWattReading + secondWattReading;
		//console.log("totalPowerToDcGen is : " + totalPowerToDcGen);
		exp5canvas.switchVoltage(voltageCount, Nr, Vt, Il, Iml, firstWattReading, secondWattReading);
       
	}
	var exp5DataStoreFieldVoltageDown = function(flagExp5Tpst, flagMainLoadExp5, flagLoad1Exp5, flagLoad2Exp5, flagLoad3Exp5, flagLoad4Exp5, flagLoad5Exp5) {//alert("hi");
		if(voltageCount > 0)
			voltageCount = voltageCount - 5;
		approxSpeed = speedArray[voltageCount];
		//console.log("approxSpeed :" + approxSpeed);
		Eg = 0.294314 * approxSpeed;
		//console.log("Eg: " + Eg.toFixed(2));
		Ish = Eg / 192;
		//console.log("Ish :" + Ish.toFixed(2));
        if(flagMainLoadExp5 == false || flagMainLoadExp5 == undefined) {
			resistance = 0;
			Il = 0;
		} else {
			if(flagLoad1Exp5 == true) {
				counterRes++;
			}
			if(flagLoad2Exp5 == true) {
				counterRes++;
			}
			if(flagLoad3Exp5 == true) {
				counterRes++;
			}
			if(flagLoad4Exp5 == true) {
				counterRes++;
			}
			if(flagLoad5Exp5 == true) {
				counterRes++;
			}
		}
		//console.log("counterRes : : " + counterRes);
        if(counterRes == 0) {
			loadRes = 0;
			Il = 0;
		} else {
			loadRes = 350 / counterRes;
			counterRes = 0;
			//console.log("Total Load Resisteance loadRes :  " + loadRes);
			Il = Eg / loadRes;
		}
		//console.log("Il :" + Il.toFixed(2));
		Ia = Il + Ish;
		//console.log("Ia :" + Ia.toFixed(2));
		Vt = Eg - (Ia * Ra);
		//console.log("Vt :" + Vt.toFixed(0));
		outputDCGen = Vt * Il;
		//console.log("outputDCGen :" + outputDCGen.toFixed(2));
		copperLoss = Ish * Ish * Rsh;
		//console.log("copperLoss : " + copperLoss.toFixed(2));
		coreLoss = this.calculateCoreLoss1(Ish);
		//console.log("core Loss: " + coreLoss);
		ammeterCopLoss = Ia * Ia * 3;
		//console.log("Armature Copper loass :" + ammeterCopLoss.toFixed(2));
		totalIptoDCGenerator = outputDCGen + copperLoss + ammeterCopLoss + coreLoss;
		//console.log("pmechR :" + totalIptoDCGenerator.toFixed(2));
     
     //////////////////////////////2nd///////////////////////////////////

		complexC1 = new ComplexNumber(0.095407, -0.136559);
		complexD1 = new ComplexNumber(3.6, 5);
		complexE1 = new ComplexNumber(1, 0);
		complexF1 = new ComplexNumber(voltageCount, 0);

		//for(var r = 1; r <= 2000; r++) {
		var r = 0.01;
		while(r < 200) {
			var pmechR1 = totalIptoDCGenerator / (3 * r);
			////console.log("pmechR :"+ pmechR);

			complexA1 = new ComplexNumber(17.2 + r, 5);
			complexB1 = new ComplexNumber(Math.sqrt(pmechR1), 0);
			var finalExp = ((((complexA1).mult(complexB1)).mult((complexC1).add((complexE1).div(complexA1)))).sub((complexF1).div(complexD1)));
			var ee = Math.sqrt(finalExp.real * finalExp.real + finalExp.imaginary * finalExp.imaginary);
            if(ee < 1) {
				alert("r is :" + r);
				//console.log("ee  is :" + ee.toFixed(2));
				break;
			}
			r = r + 0.01;
		}
		//console.log("ee  :" + ee.toFixed(2));
		//console.log("A :" + complexA1);
		//console.log("B :" + complexB1);
		//console.log("r for slip is : " + r);
		slip = 17.2 / (r + 17.2);
		//console.log("slip :" + slip);
		Nr = Ns * (1 - slip);
		//console.log("Nr :" + Nr.toFixed(2));
		//console.log("Final Speed :" + Nr);
		//console.log("Final Vt :" + Vt);
		//console.log("Final Il :" + Il);
		/////////////////// 3rd Step/////////////////////////////////////
		comlexZA = new ComplexNumber(3.6, 5);
		comlexZB = new ComplexNumber(24.02, 203.7);
		comlexZC = new ComplexNumber((17.2 / slip).toFixed(1), 5);
		comlexZD = new ComplexNumber(((17.2 / slip) + 24.02).toFixed(1), 208.7);
		Zab = comlexZA.add((comlexZB.mult(comlexZC)).div(comlexZD));
		//console.log("Zab is :" + Zab);
		complexvoltageCount = new ComplexNumber(voltageCount, 0);
		statorCurrentComplexValue = complexvoltageCount.div(Zab);
		//console.log("statorCurrentComplexValue is : " + statorCurrentComplexValue);
		statorCurrent = Math.sqrt(statorCurrentComplexValue.real * statorCurrentComplexValue.real + statorCurrentComplexValue.imaginary * statorCurrentComplexValue.imaginary);
		//console.log("statorCurrent is : " + statorCurrent.toFixed(2));
		Iml = statorCurrent * Math.sqrt(3);
		//console.log(" Field current is Iml : " + Iml.toFixed(2));
		powerfactor = ((Math.atan(parseFloat(Zab.imaginary) / parseFloat(Zab.real)) * 180 / Math.PI)).toFixed(1);
		//console.log("power factor is : " + powerfactor);
		firstWattReading = ((voltageCount * Il * Math.cos((parseFloat(30) + parseFloat(powerfactor)) * Math.PI / 180))).toFixed(2);
		//console.log("firstWattReading   : " + firstWattReading);
		secondWattReading = ((voltageCount * Il * Math.cos((parseFloat(30) - parseFloat(powerfactor)) * Math.PI / 180))).toFixed(2);
		//console.log("secondWattReading   : " + secondWattReading);
		totalPowerToDcGen = firstWattReading + secondWattReading;
		//console.log("totalPowerToDcGen is : " + totalPowerToDcGen);
        exp5canvas.switchVoltage(voltageCount, Nr, Vt, Il, Iml, firstWattReading, secondWattReading);
    }
	
	var exp5TPST = function(flagExp5Tpst){
		if(flagExp5Tpst == false){
		voltageCount=0;
		Nr=0; 
		Vt=0; 
		Il=0;
		Iml=0;
		firstWattReading=0;
		secondWattReading=0;
		exp5canvas.switchVoltage(voltageCount, Nr, Vt, Il, Iml, firstWattReading, secondWattReading);
		}
	}
	
  function ComplexNumber(real, imaginary) {
		this.real = real;
		this.imaginary = imaginary;
	}

   ComplexNumber.prototype = {
		real : 0,
		imaginary : 0,

       add : function() {
			if(arguments.length == 1)
				return new ComplexNumber(this.real + arguments[0].real, this.imaginary + arguments[0].imaginary);
			else
				return new ComplexNumber(this.real + arguments[0], this.imaginary + arguments[1]);
		},
		sub : function() {
			if(arguments.length == 1)
				return new ComplexNumber(this.real - arguments[0].real, this.imaginary - arguments[0].imaginary);
			else
				return new ComplexNumber(this.real - arguments[0], this.imaginary - arguments[1]);
		},
		mult : function() {
			var multiplier = arguments[0];
			if(arguments.length != 1)
				multiplier = new ComplexNumber(arguments[0], arguments[1]);
			return new ComplexNumber(this.real * multiplier.real - this.imaginary * multiplier.imaginary, this.real * multiplier.imaginary + this.imaginary * multiplier.real);
		},
		div : function() {
			var divisor = arguments[0];
			if(arguments.length != 1)
				divisor = new ComplexNumber(arguments[0], arguments[1]);

			var det = (divisor.real * divisor.real) + (divisor.imaginary * divisor.imaginary);
			return new ComplexNumber((this.real * divisor.real + this.imaginary * divisor.imaginary) / det, (this.imaginary * divisor.real - this.real * divisor.imaginary) / det);
		},
		toString : function() {
			return this.real + " + " + this.imaginary + "j";
		}
	}

	ds.exp5DataStoreFieldVoltageUp = exp5DataStoreFieldVoltageUp;
	ds.exp5DataStoreFieldVoltageDown = exp5DataStoreFieldVoltageDown;
	ds.exp5DataClearData = exp5DataClearData;
	ds.calculateCoreLoss1 = calculateCoreLoss1;
	ds.exp5TPST = exp5TPST;
	})(datastore5);

