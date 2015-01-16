var ds = datastore9 = ds || {};
(function() {
	var fieldVoltage = 0, fieldCurrent = 0, approxSpeed = 0;

	var Rfa = 180, voltageCount = 0,y, Ef = 0, Ein = 0,Ish=0, KaValue = 0, counterRes = 0, Ra = 3, Rsh = 192, delta = 0, Ial = 0, wattmeterReading=0;
	var loadRes, outputDCGen, copperLoss, coreLoss, armatureCopLoss, totalIptoDCGenerator, phai = 0,Vt=0,Il=0,resistance=0,Ia=0;
	var exp9StoreFlag = false;
	var complexX1Real,complexX1Img,complexX1,complexX2Real,complexX2Img,complexX2,complexX3,complexX;

    var speedArray ={"0":0,"5":0,"10":0,"15":0,"20":0,"25":0,"30":0,"35":0,"40":0,"45":0,"50":0,"55":0,"60":0,"65":0,"70":0,"75":0,"80":900,"85":1175,"90":1350,"95":1400,"100":1425,
					 "105":1429,"110":1433,"115":1437,"120":1441,"125":1445,"130":1447,"135":1449,"140":1451,"145":1453,"150":1456,"155":1457,"160":1458,"165":1459,"170":1460,"175":1461,
					 "180":1463,"185":1464,"190":1465,"195":1465,"200":1466,"205":1466,"210":1467,"215":1467,"220":1468,"225":1469,"230":1470,"235":1471,"240":1471,"245":1472,"250":1472,
					 "255":1473,"260":1474,"265":1475,"270":1476,"275":1477,"280":1478,"285":1479,"290":1480,"295":1482,"300":1482,"305":1483,"310":1483,"315":1483,"320":1484,"325":1484,
					 "330":1484,"335":1485,"340":1485,"345":1485,"350":1486,"355":1486,"360":1487,"365":1487,"370":1488,"375":1488,"380":1489,"385":1490,"390":1490,"395":1491,"400":1492,
					 "405":1493,"410":1494,"415":1495,"420":1495,"425":1495,"430":1495,"435":1495,"440":1495,"445":1495,"450":1495,"455":1495,"460":1495,"465":1495,"470":1495,"475":1495,
					 "480":1495,"485":1495,"490":1495,"495":1495,"500":1495};	
					 
	 var speedArray1 ={"0":0,"5":0,"10":0,"15":0,"20":0,"25":0,"30":0,"35":0,"40":0,"45":0,"50":0,"55":0,"60":0,"65":0,"70":0,"75":0,"80":900,"85":1175,"90":1350,"95":1400,"100":1425,
					 "105":1429,"110":1433,"115":1437,"120":1441,"125":1445,"130":1447,"135":1449,"140":1451,"145":1453,"150":1456,"155":1457,"160":1458,"165":1459,"170":1460,"175":1461,
					 "180":1463,"185":1464,"190":1465,"195":1465,"200":1466,"205":1466,"210":1467,"215":1467,"220":1468,"225":1469,"230":1470,"235":1471,"240":1471,"245":1472,"250":1472,
					   "255":1473,"260":1474,"265":1475,"270":1476,"275":1477,"280":1478,"285":1479,"290":1480,"295":1482,"300":1500,"305":1500,"310":1500,"315":1500,"320":1500,"325":1500,
					 "330":1500,"335":1500,"340":1500,"345":1500,"350":1500,"355":1500,"360":1500,"365":1500,"370":1500,"375":1500,"380":1500,"385":1500,"390":1500,"395":1500,"400":1500,
					  "405":1500,"410":1500,"415":1500,"420":1500,"425":1500,"430":1500,"435":1500,"440":1500,"445":1500,"450":1500,"455":1500,"460":1500,"465":1500,"470":1500,"475":1500,
					 "480":1500,"485":1500,"490":1500,"495":1500,"500":1500};					 	
	
   /*var speedArray1 ={"0":0,"5":0,"10":0,"15":0,"20":0,"25":0,"30":0,"35":0,"40":0,"45":0,"50":0,"55":0,"60":0,"65":0,"70":0,"75":0,"80":900,"85":1175,"90":1350,"95":1400,"100":1425,
					 "105":1429,"110":1433,"115":1437,"120":1441,"125":1445,"130":1447,"135":1449,"140":1451,"145":1453,"150":1456,"155":1457,"160":1458,"165":1459,"170":1460,"175":1461,
					 "180":1463,"185":1464,"190":1465,"195":1465,"200":1466,"205":1466,"210":1467,"215":1467,"220":1468,"225":1469,"230":1470,"235":1471,"240":1471,"245":1472,"250":1472,
					 "255":1473,"260":1474,"265":1475,"270":1476,"275":1477,"280":1478,"285":1479,"290":1480,"295":1482,"300":1482,"305":1483,"310":1483,"315":1483,"320":1484,"325":1484,
					 "330":1484,"335":1485,"340":1485,"345":1485,"350":1486,"355":1486,"360":1487,"365":1487,"370":1488,"375":1488,"380":1489,"385":1490,"390":1490,"395":1491,"400":1492,
					 "405":1493,"410":1494,"415":1495,"420":1495,"425":1495,"430":1495,"435":1495,"440":1495,"445":1495,"450":1495,"455":1495,"460":1495,"465":1495,"470":1495,"475":1495,
					 "480":1495,"485":1495,"490":1495,"495":1495,"500":1495};	
  */
	var exp9StoreData = function() {
		exp9StoreFlag = true;
		model.graphfieldVoltage9(fieldVoltage);
		model.graphFieldCurrent9(fieldCurrent);
		model.graphMotorVoltage9(voltageCount);
		model.graphMotorCurrent9(Ial);
		model.graphPowerFactor9(wattmeterReading);
		model.graphLoadVoltage9(Vt);
		model.graphLoadCurrent9(Il);
		model.graphSpeed9(approxSpeed);
		exp9StoreFlag = false;

	}
	var exp9DataClearData = function(ExpId) {
		var arr = model.get("ampereValue");
		//console.log("clear amp : " + arr);
		model.clearData();
		var arr1 = model.get("ampereValue");
		//console.log("clear amp : " + arr1);
		var vol = model.get("voltageValue");
		//console.log("clear vol : " + vol);
		var id = "none";

		graph.graphData(id, ExpId);
		exp9StoreFlag = false;
	}
	var calculateCoreLoss1 = function(x) {
		var y = -2 * Math.pow(x, 4) + 8.8 * Math.pow(x, 3) - 17 * Math.pow(x, 2) + 55 * x - 0;
		return y;
	}
	var calculateKa = function() {
		var y = 0.26 * Math.pow(x, 4) + 0.24 * Math.pow(x, 3) - 1 * Math.pow(x, 2) + 0.94 * x + 0.018;
		return y;
	}
	var exp9DataStoreFieldVoltageUp = function(flagExp9Dpst, flagExp9Tpst, flagExp9MainLoad, flagExp9Load1, flagExp9Load2, flagExp9Load3, flagExp9Load4, flagExp9Load5) {//alert("hi");
		if(fieldVoltage < 220)
			fieldVoltage += 2;
		fieldCurrent = eval(fieldVoltage) / eval(Rfa);
		//console.log("Field current  FieldCurrent : " + fieldCurrent);
		exp9canvas.FieldSwitch(fieldVoltage, fieldCurrent);
		if(fieldCurrent==0){
			
		approxSpeed = speedArray[voltageCount];
		//console.log("approxSpeed :" + approxSpeed);
		}else if(fieldCurrent!=0){
			approxSpeed = speedArray1[voltageCount];
		}
		KaValue = this.calculateKa(fieldCurrent);
		Ef = (KaValue * approxSpeed / Math.sqrt(3));
		//console.log("Ef is : " + Ef);
		Ein = 0.29333 * approxSpeed;
		//console.log("inducedEmfToGenerator  : " + Ein);
		Ish = Ein / 192;
		//console.log("Ish :" + Ish);
		if(flagExp9MainLoad == false || flagExp9MainLoad == undefined) {
			resistance = 0;
			Il = 0;
		} else {
			if(flagExp9Load1 == true) {
				counterRes++;
			}
			if(flagExp9Load2 == true) {
				counterRes++;
			}
			if(flagExp9Load3 == true) {
				counterRes++;
			}
			if(flagExp9Load4 == true) {
				counterRes++;
			}
			if(flagExp9Load5 == true) {
				counterRes++;
			}
		}

		if(counterRes == 0) {
			loadRes = 0;
			Il = 0;
		} else {
			loadRes = 350 / counterRes;
			counterRes = 0;
			//console.log("Total Load Resisteance loadRes :  " + loadRes);
		}
		if(loadRes != 0) {
			Il = Ein / loadRes;
			//console.log("Il :" + Il);
		}
		Ia = Il + Ish;
		//console.log("Ia :" + Ia);
		Vt = Ein - (Ia * Ra);
		//console.log("Vt :" + Vt);
		outputDCGen = Vt * Il;
		copperLoss = Ish * Ish * Rsh;
		coreLoss = this.calculateCoreLoss1(Ish);
		//console.log("core Loss: " + coreLoss);
		armatureCopLoss = Ia * Ia * 3;
		totalIptoDCGenerator = outputDCGen + copperLoss + armatureCopLoss + coreLoss;
		//console.log("totalIptoDCGenerator :" + totalIptoDCGenerator.toFixed(2));
		if(totalIptoDCGenerator == 0) {
			y = 0;
			//console.log("y is : " + y);
			delta = 0;
			//console.log("delta is : " + delta);
		} else {
			y = ((totalIptoDCGenerator * 10 * Math.sqrt(3) ) / (3 * Ef * voltageCount));
			//console.log("y is " + y);
			if(y > 1) {
				delta = 0;
			} else {
				for(var j = 0; j <= 1; j++) {
					delta = (Math.asin(y) * 180 / Math.PI).toFixed(0);
					//console.log("delta is : " + delta);
				}
			}
		}
		complexX1Real = (voltageCount * Math.cos((0) * Math.PI / 180) / Math.sqrt(3));
		complexX1Img = (voltageCount * Math.sin((0) * Math.PI / 180) / Math.sqrt(3));
		complexX1 = new ComplexNumber(complexX1Real, complexX1Img);

		//console.log("complexX1 : " + complexX1);
		complexX2Real = Ef * Math.cos(delta * Math.PI / 180);
		complexX2Img = Ef * Math.sin(delta * Math.PI / 180);
		complexX2 = new ComplexNumber(complexX2Real, complexX2Img);
		//console.log("complexX2 : " + complexX2);
		complexX3 = new ComplexNumber(4, 42);
		//console.log("complexX3 : " + complexX3);
		complexX = (complexX1.sub(complexX2)).div(complexX3);
		//console.log("complexX : " + complexX);
		Ial = Math.sqrt(complexX.real * complexX.real + complexX.imaginary * complexX.imaginary);
		//console.log("Ial is : " + Ial);
		if(Ial == 0) {
			phai = 0;
			wattmeterReading = 0;
			//console.log(" phai is :  " + phai);
			//console.log("wattmeterReading is : " + wattmeterReading.toFixed(2));
		} else {
			phai = ((Math.atan(parseFloat(complexX.imaginary) / parseFloat(complexX.real)) * 180 / Math.PI)).toFixed(2);
			//console.log(" phai is :  " + phai);
			wattmeterReading = (Math.cos(phai * Math.PI / 180));
			//console.log("wattmeterReading is : " + wattmeterReading.toFixed(2));
		}
		
		
			
		exp9canvas.TpstSwitch(voltageCount, approxSpeed, Ial, Vt, wattmeterReading, Il);
	}
	var exp9DataStoreFieldVoltageDown = function(flagExp9Dpst, flagExp9Tpst, flagExp9MainLoad, flagExp9Load1, flagExp9Load2, flagExp9Load3, flagExp9Load4, flagExp9Load5) {//alert("hi");
		if(fieldVoltage > 0)
			fieldVoltage -= 2;
			
		fieldCurrent = eval(fieldVoltage) / eval(Rfa);
		//console.log("Field current  FieldCurrent : " + fieldCurrent);
		exp9canvas.FieldSwitch(fieldVoltage, fieldCurrent);
		if(fieldCurrent==0){
			
		approxSpeed = speedArray[voltageCount];
		//console.log("approxSpeed :" + approxSpeed);
		}else if(fieldCurrent!=0){
			approxSpeed = speedArray1[voltageCount];
		}
		KaValue = this.calculateKa(fieldCurrent);
		Ef = (KaValue * approxSpeed / Math.sqrt(3));
		//console.log("Ef is : " + Ef);
		Ein = 0.29333 * approxSpeed;
		//console.log("inducedEmfToGenerator  : " + Ein);
		Ish = Ein / 192;
		//console.log("Ish :" + Ish);
		if(flagExp9MainLoad == false || flagExp9MainLoad == undefined) {
			resistance = 0;
			Il = 0;
		} else {
			if(flagExp9Load1 == true) {
				counterRes++;
			}
			if(flagExp9Load2 == true) {
				counterRes++;
			}
			if(flagExp9Load3 == true) {
				counterRes++;
			}
			if(flagExp9Load4 == true) {
				counterRes++;
			}
			if(flagExp9Load5 == true) {
				counterRes++;
			}
		}

		if(counterRes == 0) {
			loadRes = 0;
			Il = 0;
		} else {
			loadRes = 350 / counterRes;
			counterRes = 0;
			//console.log("Total Load Resisteance loadRes :  " + loadRes);
		}
		if(loadRes != 0) {
			Il = Ein / loadRes;
			//console.log("Il :" + Il);
		}
		Ia = Il + Ish;
		//console.log("Ia :" + Ia);
		Vt = Ein - (Ia * Ra);
		//console.log("Vt :" + Vt);
		outputDCGen = Vt * Il;
		copperLoss = Ish * Ish * Rsh;
		coreLoss = this.calculateCoreLoss1(Ish);
		//console.log("core Loss: " + coreLoss);
		armatureCopLoss = Ia * Ia * 3;
		totalIptoDCGenerator = outputDCGen + copperLoss + armatureCopLoss + coreLoss;
		//console.log("totalIptoDCGenerator :" + totalIptoDCGenerator.toFixed(2));
		if(totalIptoDCGenerator == 0) {
			y = 0;
			//console.log("y is : " + y);
			delta = 0;
			//console.log("delta is : " + delta);
		} else {
			y = ((totalIptoDCGenerator * 10 * Math.sqrt(3) ) / (3 * Ef * voltageCount));
			//console.log("y is " + y);
			if(y > 1) {
				delta = 0;
			} else {
				for(var j = 0; j <= 1; j++) {
					delta = (Math.asin(y) * 180 / Math.PI).toFixed(0);
					//console.log("delta is : " + delta);
				}
			}
		}
		complexX1Real = (voltageCount * Math.cos((0) * Math.PI / 180) / Math.sqrt(3));
		complexX1Img = (voltageCount * Math.sin((0) * Math.PI / 180) / Math.sqrt(3));
		complexX1 = new ComplexNumber(complexX1Real, complexX1Img);

		//console.log("complexX1 : " + complexX1);
		complexX2Real = Ef * Math.cos(delta * Math.PI / 180);
		complexX2Img = Ef * Math.sin(delta * Math.PI / 180);
		complexX2 = new ComplexNumber(complexX2Real, complexX2Img);
		//console.log("complexX2 : " + complexX2);
		complexX3 = new ComplexNumber(4, 42);
		//console.log("complexX3 : " + complexX3);
		complexX = (complexX1.sub(complexX2)).div(complexX3);
		//console.log("complexX : " + complexX);
		Ial = Math.sqrt(complexX.real * complexX.real + complexX.imaginary * complexX.imaginary);
		//console.log("Ial is : " + Ial);
		if(Ial == 0) {
			phai = 0;
			wattmeterReading = 0;
			//console.log(" phai is :  " + phai);
			//console.log("wattmeterReading is : " + wattmeterReading.toFixed(2));
		} else {
			phai = ((Math.atan(parseFloat(complexX.imaginary) / parseFloat(complexX.real)) * 180 / Math.PI)).toFixed(2);
			//console.log(" phai is :  " + phai);
			wattmeterReading = (Math.cos(phai * Math.PI / 180));
			//console.log("wattmeterReading is : " + wattmeterReading.toFixed(2));
		}
		exp9canvas.TpstSwitch(voltageCount, approxSpeed, Ial, Vt, wattmeterReading, Il);

	}
	var exp9DataStoreDpst = function(flagExp9Dpst, flagExp9Tpst, flagExp9MainLoad, flagExp9Load1, flagExp9Load2, flagExp9Load3, flagExp9Load4, flagExp9Load5) {//alert("hi datastore");
		if(flagExp9Dpst == true ) {
			fieldCurrent = eval(fieldVoltage) / eval(Rfa);
			//console.log("Field current  FieldCurrent : " + fieldCurrent);
			exp9canvas.FieldSwitch(fieldVoltage, fieldCurrent);
			if(fieldCurrent==0){
		approxSpeed = speedArray[voltageCount];
		
		//console.log("approxSpeed :" + approxSpeed);
		}else if(fieldCurrent!=0){
			approxSpeed = speedArray1[voltageCount];
		}
		KaValue = this.calculateKa(fieldCurrent);
		Ef = (KaValue * approxSpeed / Math.sqrt(3));
		//console.log("Ef is : " + Ef);
		Ein = 0.29333 * approxSpeed;
		//console.log("inducedEmfToGenerator  : " + Ein);
		Ish = Ein / 192;
		//console.log("Ish :" + Ish);
		if(flagExp9MainLoad == false || flagExp9MainLoad == undefined) {
			resistance = 0;
			Il = 0;
		} else {
			if(flagExp9Load1 == true) {
				counterRes++;
			}
			if(flagExp9Load2 == true) {
				counterRes++;
			}
			if(flagExp9Load3 == true) {
				counterRes++;
			}
			if(flagExp9Load4 == true) {
				counterRes++;
			}
			if(flagExp9Load5 == true) {
				counterRes++;
			}
		}
		

		if(counterRes == 0) {
			loadRes = 0;
			Il = 0;
		} else {
			loadRes = 350 / counterRes;
			counterRes = 0;
			//console.log("Total Load Resisteance loadRes :  " + loadRes);
		}
		if(loadRes != 0) {
			Il = Ein / loadRes;
			//console.log("Il :" + Il);
		}
		Ia = Il + Ish;
		//console.log("Ia :" + Ia);
		Vt = Ein - (Ia * Ra);
		//console.log("Vt :" + Vt);
		outputDCGen = Vt * Il;
		copperLoss = Ish * Ish * Rsh;
		coreLoss = this.calculateCoreLoss1(Ish);
		//console.log("core Loss: " + coreLoss);
		armatureCopLoss = Ia * Ia * 3;
		totalIptoDCGenerator = outputDCGen + copperLoss + armatureCopLoss + coreLoss;
		//console.log("totalIptoDCGenerator :" + totalIptoDCGenerator.toFixed(2));
		if(totalIptoDCGenerator == 0) {
			y = 0;
			//console.log("y is : " + y);
			delta = 0;
			//console.log("delta is : " + delta);
		} else {
			y = ((totalIptoDCGenerator * 10 * Math.sqrt(3) ) / (3 * Ef * voltageCount));
			//console.log("y is " + y);
			if(y > 1) {
				delta = 0;
			} else {
				for(var j = 0; j <= 1; j++) {
					delta = (Math.asin(y) * 180 / Math.PI).toFixed(0);
					//console.log("delta is : " + delta);
				}
			}
		}
		
		
		
		
		complexX1Real = (voltageCount * Math.cos((0) * Math.PI / 180) / Math.sqrt(3));
		complexX1Img = (voltageCount * Math.sin((0) * Math.PI / 180) / Math.sqrt(3));
		complexX1 = new ComplexNumber(complexX1Real, complexX1Img);

		//console.log("complexX1 : " + complexX1);
		complexX2Real = Ef * Math.cos(delta * Math.PI / 180);
		complexX2Img = Ef * Math.sin(delta * Math.PI / 180);
		complexX2 = new ComplexNumber(complexX2Real, complexX2Img);
		//console.log("complexX2 : " + complexX2);
		complexX3 = new ComplexNumber(4, 42);
		//console.log("complexX3 : " + complexX3);
		complexX = (complexX1.sub(complexX2)).div(complexX3);
		//console.log("complexX : " + complexX);
		Ial = Math.sqrt(complexX.real * complexX.real + complexX.imaginary * complexX.imaginary);
		//console.log("Ial is : " + Ial);
		if(Ial == 0) {
			phai = 0;
			wattmeterReading = 0;
			//console.log(" phai is :  " + phai);
			//console.log("wattmeterReading is : " + wattmeterReading.toFixed(2));
		} else {
			phai = ((Math.atan(parseFloat(complexX.imaginary) / parseFloat(complexX.real)) * 180 / Math.PI)).toFixed(2);
			//console.log(" phai is :  " + phai);
			wattmeterReading = (Math.cos(phai * Math.PI / 180));
			//console.log("wattmeterReading is : " + wattmeterReading.toFixed(2));
		}
		exp9canvas.TpstSwitch(voltageCount, approxSpeed, Ial, Vt, wattmeterReading, Il);
		} else if(flagExp9Dpst == false) {
			fieldVoltage = 0;
			fieldCurrent = 0;
			approxSpeed = speedArray[voltageCount];
			exp9canvas.FieldSwitch(fieldVoltage, fieldCurrent);
			exp9canvas.TpstSwitch(voltageCount, approxSpeed, Ial, Vt, wattmeterReading, Il);
			exp9StoreFlag = false;
		}

	}
	var exp9DataStoreTpstVoltageUp = function(flagExp9Tpst, flagExp9MainLoad, flagExp9Load1, flagExp9Load2, flagExp9Load3, flagExp9Load4, flagExp9Load5) {
		if(voltageCount < 500)
			voltageCount += 5;
		//console.log("voltage is" + voltageCount);
		if(fieldCurrent==0){
		approxSpeed = speedArray[voltageCount];
		//console.log("approxSpeed :" + approxSpeed);
		}else if(fieldCurrent!=0){
			approxSpeed = speedArray1[voltageCount];
		}
		KaValue = this.calculateKa(fieldCurrent);
		Ef = (KaValue * approxSpeed / Math.sqrt(3));
		//console.log("Ef is : " + Ef);
		Ein = 0.29333 * approxSpeed;
		//console.log("inducedEmfToGenerator  : " + Ein);
		Ish = Ein / 192;
		//console.log("Ish :" + Ish);
		if(flagExp9MainLoad == false || flagExp9MainLoad == undefined) {
			resistance = 0;
			Il = 0;
		} else {
			if(flagExp9Load1 == true) {
				counterRes++;
			}
			if(flagExp9Load2 == true) {
				counterRes++;
			}
			if(flagExp9Load3 == true) {
				counterRes++;
			}
			if(flagExp9Load4 == true) {
				counterRes++;
			}
			if(flagExp9Load5 == true) {
				counterRes++;
			}
		}

		if(counterRes == 0) {
			loadRes = 0;
			Il = 0;
		} else {
			loadRes = 350 / counterRes;
			counterRes = 0;
			//console.log("Total Load Resisteance loadRes :  " + loadRes);
		}
		if(loadRes != 0) {
			Il = Ein / loadRes;
			//console.log("Il :" + Il);
		}
		Ia = Il + Ish;
		//console.log("Ia :" + Ia);
		Vt = Ein - (Ia * Ra);
		//console.log("Vt :" + Vt);
		outputDCGen = Vt * Il;
		copperLoss = Ish * Ish * Rsh;
		coreLoss = this.calculateCoreLoss1(Ish);
		//console.log("core Loss: " + coreLoss);
		armatureCopLoss = Ia * Ia * 3;
		totalIptoDCGenerator = outputDCGen + copperLoss + armatureCopLoss + coreLoss;
		//console.log("totalIptoDCGenerator :" + totalIptoDCGenerator.toFixed(2));
		if(totalIptoDCGenerator == 0) {
			y = 0;
			//console.log("y is : " + y);
			delta = 0;
			//console.log("delta is : " + delta);
		} else {
			y = ((totalIptoDCGenerator * 10 * Math.sqrt(3) ) / (3 * Ef * voltageCount));
			//console.log("y is " + y);
			if(y > 1) {
				delta = 0;
			} else {
				for(var j = 0; j <= 1; j++) {
					delta = (Math.asin(y) * 180 / Math.PI).toFixed(0);
					//console.log("delta is : " + delta);
				}
			}
		}
		complexX1Real = (voltageCount * Math.cos((0) * Math.PI / 180) / Math.sqrt(3));
		complexX1Img = (voltageCount * Math.sin((0) * Math.PI / 180) / Math.sqrt(3));
		complexX1 = new ComplexNumber(complexX1Real, complexX1Img);

		//console.log("complexX1 : " + complexX1);
		complexX2Real = Ef * Math.cos(delta * Math.PI / 180);
		complexX2Img = Ef * Math.sin(delta * Math.PI / 180);
		complexX2 = new ComplexNumber(complexX2Real, complexX2Img);
		//console.log("complexX2 : " + complexX2);
		complexX3 = new ComplexNumber(4, 42);
		//console.log("complexX3 : " + complexX3);
		complexX = (complexX1.sub(complexX2)).div(complexX3);
		//console.log("complexX : " + complexX);
		Ial = Math.sqrt(complexX.real * complexX.real + complexX.imaginary * complexX.imaginary);
		//console.log("Ial is : " + Ial);
		if(Ial == 0) {
			phai = 0;
			wattmeterReading = 0;
			//console.log(" phai is :  " + phai);
			//console.log("wattmeterReading is : " + wattmeterReading.toFixed(2));
		} else {
			phai = ((Math.atan(parseFloat(complexX.imaginary) / parseFloat(complexX.real)) * 180 / Math.PI)).toFixed(2);
			//console.log(" phai is :  " + phai);
			wattmeterReading = (Math.cos(phai * Math.PI / 180));
			//console.log("wattmeterReading is : " + wattmeterReading.toFixed(2));
		}
		exp9canvas.TpstSwitch(voltageCount, approxSpeed, Ial, Vt, wattmeterReading, Il);
	}
	var exp9DataStoreTpstVoltageDown = function(flagExp9Dpst, flagExp9Tpst, flagExp9MainLoad, flagExp9Load1, flagExp9Load2, flagExp9Load3, flagExp9Load4, flagExp9Load5) {
		if(voltageCount > 0)
			voltageCount -= 5;

		//console.log("voltage is" + voltageCount);
		if(fieldCurrent==0){
		approxSpeed = speedArray[voltageCount];
		//console.log("approxSpeed :" + approxSpeed);
		}else if(fieldCurrent!=0){
			approxSpeed = speedArray1[voltageCount];
		}
		KaValue = this.calculateKa(fieldCurrent);
		Ef = (KaValue * approxSpeed / Math.sqrt(3));
		//console.log("Ef is : " + Ef);
		Ein = 0.29333 * approxSpeed;
		//console.log("inducedEmfToGenerator  : " + Ein);
		Ish = Ein / 192;
		//console.log("Ish :" + Ish);
		if(flagExp9MainLoad == false || flagExp9MainLoad == undefined) {
			resistance = 0;
			Il = 0;
		} else {
			if(flagExp9Load1 == true) {
				counterRes++;
			}
			if(flagExp9Load2 == true) {
				counterRes++;
			}
			if(flagExp9Load3 == true) {
				counterRes++;
			}
			if(flagExp9Load4 == true) {
				counterRes++;
			}
			if(flagExp9Load5 == true) {
				counterRes++;
			}
		}

		if(counterRes == 0) {
			loadRes = 0;
			Il = 0;
		} else {
			loadRes = 350 / counterRes;
			counterRes = 0;
			//console.log("Total Load Resisteance loadRes :  " + loadRes);
		}
		if(loadRes != 0) {
			Il = Ein / loadRes;
			//console.log("Il :" + Il);
		}
		Ia = Il + Ish;
		//console.log("Ia :" + Ia);
		Vt = Ein - (Ia * Ra);
		//console.log("Vt :" + Vt);
		outputDCGen = Vt * Il;
		copperLoss = Ish * Ish * Rsh;
		coreLoss = this.calculateCoreLoss1(Ish);
		//console.log("core Loss: " + coreLoss);
		armatureCopLoss = Ia * Ia * 3;
		totalIptoDCGenerator = outputDCGen + copperLoss + armatureCopLoss + coreLoss;
		//console.log("totalIptoDCGenerator :" + totalIptoDCGenerator.toFixed(2));
		if(totalIptoDCGenerator == 0) {
			y = 0;
			//console.log("y is : " + y);
			delta = 0;
			//console.log("delta is : " + delta);
		} else {
			y = ((totalIptoDCGenerator * 10 * Math.sqrt(3) ) / (3 * Ef * voltageCount));
			//console.log("y is " + y);
			if(y > 1) {
				delta = 0;
			} else {
				for(var j = 0; j <= 1; j++) {
					delta = (Math.asin(y) * 180 / Math.PI).toFixed(0);
					//console.log("delta is : " + delta);
				}
			}
		}
		complexX1Real = (voltageCount * Math.cos((0) * Math.PI / 180) / Math.sqrt(3));
		complexX1Img = (voltageCount * Math.sin((0) * Math.PI / 180) / Math.sqrt(3));
		complexX1 = new ComplexNumber(complexX1Real, complexX1Img);

		//console.log("complexX1 : " + complexX1);
		complexX2Real = Ef * Math.cos(delta * Math.PI / 180);
		complexX2Img = Ef * Math.sin(delta * Math.PI / 180);
		complexX2 = new ComplexNumber(complexX2Real, complexX2Img);
		//console.log("complexX2 : " + complexX2);
		complexX3 = new ComplexNumber(4, 42);
		//console.log("complexX3 : " + complexX3);
		complexX = (complexX1.sub(complexX2)).div(complexX3);
		//console.log("complexX : " + complexX);
		Ial = Math.sqrt(complexX.real * complexX.real + complexX.imaginary * complexX.imaginary);
		//console.log("Ial is : " + Ial);
		if(Ial == 0) {
			phai = 0;
			wattmeterReading = 0;
			//console.log(" phai is :  " + phai);
			//console.log("wattmeterReading is : " + wattmeterReading.toFixed(2));
		} else {
			phai = ((Math.atan(parseFloat(complexX.imaginary) / parseFloat(complexX.real)) * 180 / Math.PI)).toFixed(2);
			//console.log(" phai is :  " + phai);
			wattmeterReading = (Math.cos(phai * Math.PI / 180));
			//console.log("wattmeterReading is : " + wattmeterReading.toFixed(2));
		}
		exp9canvas.TpstSwitch(voltageCount, approxSpeed, Ial, Vt, wattmeterReading, Il);
	}
	var exp9TPST = function(flagExp9Dpst, flagExp9Tpst, flagExp9MainLoad, flagExp9Load1, flagExp9Load2, flagExp9Load3, flagExp9Load4, flagExp9Load5) {
		if(flagExp9Tpst == true) {
			if(fieldCurrent==0){
		approxSpeed = speedArray1[voltageCount];
		//console.log("approxSpeed :" + approxSpeed);
		}else if(fieldCurrent!=0){
			approxSpeed = speedArray1[voltageCount];
		}
		KaValue = this.calculateKa(fieldCurrent);
		Ef = (KaValue * approxSpeed / Math.sqrt(3));
		//console.log("Ef is : " + Ef);
		Ein = 0.29333 * approxSpeed;
		//console.log("inducedEmfToGenerator  : " + Ein);
		Ish = Ein / 192;
		//console.log("Ish :" + Ish);
		if(flagExp9MainLoad == false || flagExp9MainLoad == undefined) {
			resistance = 0;
			Il = 0;
		} else {
			if(flagExp9Load1 == true) {
				counterRes++;
			}
			if(flagExp9Load2 == true) {
				counterRes++;
			}
			if(flagExp9Load3 == true) {
				counterRes++;
			}
			if(flagExp9Load4 == true) {
				counterRes++;
			}
			if(flagExp9Load5 == true) {
				counterRes++;
			}
		}

		if(counterRes == 0) {
			loadRes = 0;
			Il = 0;
		} else {
			loadRes = 350 / counterRes;
			counterRes = 0;
			//console.log("Total Load Resisteance loadRes :  " + loadRes);
		}
		if(loadRes != 0) {
			Il = Ein / loadRes;
			//console.log("Il :" + Il);
		}
		Ia = Il + Ish;
		//console.log("Ia :" + Ia);
		Vt = Ein - (Ia * Ra);
		//console.log("Vt :" + Vt);
		outputDCGen = Vt * Il;
		copperLoss = Ish * Ish * Rsh;
		coreLoss = this.calculateCoreLoss1(Ish);
		//console.log("core Loss: " + coreLoss);
		armatureCopLoss = Ia * Ia * 3;
		totalIptoDCGenerator = outputDCGen + copperLoss + armatureCopLoss + coreLoss;
		//console.log("totalIptoDCGenerator :" + totalIptoDCGenerator.toFixed(2));
		if(totalIptoDCGenerator == 0) {
			y = 0;
			//console.log("y is : " + y);
			delta = 0;
			//console.log("delta is : " + delta);
		} else {
			y = ((totalIptoDCGenerator * 10 * Math.sqrt(3) ) / (3 * Ef * voltageCount));
			//console.log("y is " + y);
			if(y > 1) {
				delta = 0;
			} else {
				for(var j = 0; j <= 1; j++) {
					delta = (Math.asin(y) * 180 / Math.PI).toFixed(0);
					//console.log("delta is : " + delta);
				}
			}
		}
		complexX1Real = (voltageCount * Math.cos((0) * Math.PI / 180) / Math.sqrt(3));
		complexX1Img = (voltageCount * Math.sin((0) * Math.PI / 180) / Math.sqrt(3));
		complexX1 = new ComplexNumber(complexX1Real, complexX1Img);

		//console.log("complexX1 : " + complexX1);
		complexX2Real = Ef * Math.cos(delta * Math.PI / 180);
		complexX2Img = Ef * Math.sin(delta * Math.PI / 180);
		complexX2 = new ComplexNumber(complexX2Real, complexX2Img);
		//console.log("complexX2 : " + complexX2);
		complexX3 = new ComplexNumber(4, 42);
		//console.log("complexX3 : " + complexX3);
		complexX = (complexX1.sub(complexX2)).div(complexX3);
		//console.log("complexX : " + complexX);
		Ial = Math.sqrt(complexX.real * complexX.real + complexX.imaginary * complexX.imaginary);
		//console.log("Ial is : " + Ial);
		if(Ial == 0) {
			phai = 0;
			wattmeterReading = 0;
			//console.log(" phai is :  " + phai);
			//console.log("wattmeterReading is : " + wattmeterReading.toFixed(2));
		} else {
			phai = ((Math.atan(parseFloat(complexX.imaginary) / parseFloat(complexX.real)) * 180 / Math.PI)).toFixed(2);
			//console.log(" phai is :  " + phai);
			wattmeterReading = (Math.cos(phai * Math.PI / 180));
			//console.log("wattmeterReading is : " + wattmeterReading.toFixed(2));
		}
		exp9canvas.TpstSwitch(voltageCount, approxSpeed, Ial, Vt, wattmeterReading, Il);

		} else if(flagExp9Tpst == false) {
			voltageCount = 0;
			Ial = 0;
			Vt = 0;
			wattmeterReading = 0;
			Il = 0;
			exp9canvas.TpstSwitch(voltageCount, approxSpeed, Ial, Vt, wattmeterReading, Il);
		}

	}
	var exp9DataStoreMainLoad = function(flagExp9Dpst, flagExp9Tpst, flagExp9MainLoad, flagExp9Load1, flagExp9Load2, flagExp9Load3, flagExp9Load4, flagExp9Load5) {
		if(flagExp9Tpst == true) {
			if(fieldCurrent==0){
		approxSpeed = speedArray[voltageCount];
		//console.log("approxSpeed :" + approxSpeed);
		}else if(fieldCurrent!=0){
			approxSpeed = speedArray1[voltageCount];
		}
		KaValue = this.calculateKa(fieldCurrent);
		Ef = (KaValue * approxSpeed / Math.sqrt(3));
		//console.log("Ef is : " + Ef);
		Ein = 0.29333 * approxSpeed;
		//console.log("inducedEmfToGenerator  : " + Ein);
		Ish = Ein / 192;
		//console.log("Ish :" + Ish);
		if(flagExp9MainLoad == false || flagExp9MainLoad == undefined) {
			resistance = 0;
			Il = 0;
		} else {
			if(flagExp9Load1 == true) {
				counterRes++;
			}
			if(flagExp9Load2 == true) {
				counterRes++;
			}
			if(flagExp9Load3 == true) {
				counterRes++;
			}
			if(flagExp9Load4 == true) {
				counterRes++;
			}
			if(flagExp9Load5 == true) {
				counterRes++;
			}
		}

		if(counterRes == 0) {
			loadRes = 0;
			Il = 0;
		} else {
			loadRes = 350 / counterRes;
			counterRes = 0;
			//console.log("Total Load Resisteance loadRes :  " + loadRes);
		}
		if(loadRes != 0) {
			Il = Ein / loadRes;
			//console.log("Il :" + Il);
		}
		Ia = Il + Ish;
		//console.log("Ia :" + Ia);
		Vt = Ein - (Ia * Ra);
		//console.log("Vt :" + Vt);
		outputDCGen = Vt * Il;
		copperLoss = Ish * Ish * Rsh;
		coreLoss = this.calculateCoreLoss1(Ish);
		//console.log("core Loss: " + coreLoss);
		armatureCopLoss = Ia * Ia * 3;
		totalIptoDCGenerator = outputDCGen + copperLoss + armatureCopLoss + coreLoss;
		//console.log("totalIptoDCGenerator :" + totalIptoDCGenerator.toFixed(2));
		if(totalIptoDCGenerator == 0) {
			y = 0;
			//console.log("y is : " + y);
			delta = 0;
			//console.log("delta is : " + delta);
		} else {
			y = ((totalIptoDCGenerator * 10 * Math.sqrt(3) ) / (3 * Ef * voltageCount));
			//console.log("y is " + y);
			if(y > 1) {
				delta = 0;
			} else {
				for(var j = 0; j <= 1; j++) {
					delta = (Math.asin(y) * 180 / Math.PI).toFixed(0);
					//console.log("delta is : " + delta);
				}
			}
		}
		complexX1Real = (voltageCount * Math.cos((0) * Math.PI / 180) / Math.sqrt(3));
		complexX1Img = (voltageCount * Math.sin((0) * Math.PI / 180) / Math.sqrt(3));
		complexX1 = new ComplexNumber(complexX1Real, complexX1Img);

		//console.log("complexX1 : " + complexX1);
		complexX2Real = Ef * Math.cos(delta * Math.PI / 180);
		complexX2Img = Ef * Math.sin(delta * Math.PI / 180);
		complexX2 = new ComplexNumber(complexX2Real, complexX2Img);
		//console.log("complexX2 : " + complexX2);
		complexX3 = new ComplexNumber(4, 42);
		//console.log("complexX3 : " + complexX3);
		complexX = (complexX1.sub(complexX2)).div(complexX3);
		//console.log("complexX : " + complexX);
		Ial = Math.sqrt(complexX.real * complexX.real + complexX.imaginary * complexX.imaginary);
		//console.log("Ial is : " + Ial);
		if(Ial == 0) {
			phai = 0;
			wattmeterReading = 0;
			//console.log(" phai is :  " + phai);
			//console.log("wattmeterReading is : " + wattmeterReading.toFixed(2));
		} else {
			phai = ((Math.atan(parseFloat(complexX.imaginary) / parseFloat(complexX.real)) * 180 / Math.PI)).toFixed(2);
			//console.log(" phai is :  " + phai);
			wattmeterReading = (Math.cos(phai * Math.PI / 180));
			//console.log("wattmeterReading is : " + wattmeterReading.toFixed(2));
		}
		exp9canvas.TpstSwitch(voltageCount, approxSpeed, Ial, Vt, wattmeterReading, Il);
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
	ds.exp9DataStoreMainLoad = exp9DataStoreMainLoad;
	ds.exp9TPST = exp9TPST;
	ds.exp9DataStoreDpst = exp9DataStoreDpst;
	ds.exp9DataStoreFieldVoltageUp = exp9DataStoreFieldVoltageUp;
	ds.exp9DataStoreFieldVoltageDown = exp9DataStoreFieldVoltageDown;
	ds.exp9DataStoreTpstVoltageUp = exp9DataStoreTpstVoltageUp;
	ds.exp9DataStoreTpstVoltageDown = exp9DataStoreTpstVoltageDown;
	ds.exp9StoreData = exp9StoreData;
	ds.exp9DataClearData = exp9DataClearData;
	ds.calculateCoreLoss1 = calculateCoreLoss1;
	})(datastore9);

