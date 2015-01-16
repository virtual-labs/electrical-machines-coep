var ds = datastore7b = ds || {};
(function() {
	
var RfaExp7b = 180;
var VfaExp7b = 0, IfaExp7b = 0, VinExp7b = 0, IinExp7b, IshExp7b, EbExp7b, KcExp7b, SpeedExp7b, EinExp7b, KaExp7b,VtExp7b,
    CLossMotorExp7b, CpLossMotorExp7b, SCpLossMotorExp7b, TLossMotorExp7b, InAltExp7b, CLossAltExp7b, VinIinExp7b,IinExp7b, 
    IaExp7b, CorrectVinIinExp7b, CorrectIinExp7b, CorrectSpeedExp7b, IscExp7b = 0, EarExp7b = 0,RoughIscExp7b = 0, 
    RoughEinExp7b = 0, RoughEarExp7b = 0;AltCopLossExp7b=0;
var Ra = 3;
var shuntResistance = 192;
var exp7bStoreFlag = false;
var FLoss = 100;
var exp7bStoreData = function()
	{
		exp7bStoreFlag = true;
		if(exp7bStoreFlag == true) {
			model.graphVoltageFieldExp7b(VfaExp7b);
			model.graphAmpereFieldExp7b(IfaExp7b);
			model.graphVoltageMotorExp7b(VinExp7b);
			model.graphAmpereMotorExp7b(CorrectIinExp7b);
			model.graphAmpereMotorFieldExp7b(IscExp7b);
			model.graphSpeedExp7b(CorrectSpeedExp7b);
			model.graphAltCopLossExp7b(AltCopLossExp7b);
			model.graphMotOutputExp7b(InAltExp7b);
			
      }
        exp7bStoreFlag = false;
	}
var exp7bDataClearData = function(ExpId) {
		var arr = model.get("ampereValue");
		//console.log("clear amp : " + arr);
		model.clearData();
		var arr1 = model.get("ampereValue");
		//console.log("clear amp : " + arr1);
		var vol = model.get("voltageValue");
		//console.log("clear vol : " + vol);
		var id = "none";

		graph.graphData(id, ExpId);
		exp7bStoreFlag = false;
	}
	
var calculateEarExp7b = function(x) {
		var y = -0.00063 * Math.pow(x, 2) + 0.78 * x;
		return y;
		////console.log("y2 values is  :" + y);
	}	
	
var calculateAltCopLossExp7b = function(x) {
		var y = 11 * Math.pow(x, 2) - 6.2 * x + 0.8625;
		return y;
		////console.log("y2 values is  :" + y);
	}	

	var exp7bDataStoreFieldVoltageUp = function() {
		if(VfaExp7b < 220)
			VfaExp7b += 2;
		IfaExp7b = eval(VfaExp7b) / eval(RfaExp7b);
		//console.log("Field current  IfaExp7b : " + IfaExp7b);
		exp7bcanvas.FieldSwitch(VfaExp7b, IfaExp7b);
		IshExp7b = VinExp7b / shuntResistance;
		//console.log("IshExp7b : " + IshExp7b);
		EbExp7b = VinExp7b;
		KcExp7b = this.calculateKc(IshExp7b);
		//console.log("Kc Value is KcExp7b : " + KcExp7b);
		SpeedExp7b = EbExp7b / KcExp7b;                                                      // approx speed
		//console.log("Rough speed is  SpeedExp7b : " + SpeedExp7b);
		KaExp7b = this.calculateKa(IfaExp7b);
		//console.log("KaExp7b : " + KaExp7b);
		EinExp7b = (KaExp7b * SpeedExp7b ) / Math.sqrt(3);
		//console.log(" rough value  EinExp7b : " + EinExp7b);
		EarExp7b = this.calculateEarExp7b(EinExp7b);
		//console.log("rough value EarExp7b : " + EarExp7b);
		IscExp7b = (EinExp7b - EarExp7b) / 42.19;                                            //Rough short circuit current
		//console.log("Rough Short circuit current is IscExp7b :" + IscExp7b);
		AltCopLossExp7b = this.calculateAltCopLossExp7b(IscExp7b);
		//console.log("copper loss of alternator : " + AltCopLossExp7b);
		InAltExp7b = AltCopLossExp7b + FLoss;                                                // Input to alternator  as core loss of alternator is 0 (short circuited)
		//console.log("Input to alternator InAltExp7b : " + InAltExp7b);
		CLossMotorExp7b = this.calculateCoreLossMotExp7a(IshExp7b);             // core loss motor
		//console.log("CLossMotorExp7b : " + CLossMotorExp7b);
		SCpLossMotorExp7b = Math.pow(IshExp7b, 2) * shuntResistance;           // shunt field copper loss motor
		//console.log("SCpLossMotorExp7b : " + SCpLossMotorExp7b);
		TLossMotorExp7b = FLoss + CLossMotorExp7b + SCpLossMotorExp7b;         // total loss motor
		//console.log("Total Loss of motor  : " + TLossMotorExp7b);
		VinIinExp7b = InAltExp7b + TLossMotorExp7b;                                       //approximate VinIin
		//console.log("Rough value VinIinExp7b : " + VinIinExp7b);
		if(VinIinExp7b == 0) {
			IinExp7b = 0;
		} else {
			IinExp7b = VinIinExp7b / VinExp7b;
			//console.log("Rough Value IinExp7b: " + IinExp7b);                      	// aprrox Iin
		}
		IaExp7b = IinExp7b - IshExp7b;                                                    // Ia
		//console.log("Actual Ia IaExp7b : " + IaExp7b);
		CpLossMotorExp7b = Math.pow(IaExp7b, 2) * Ra;                        // copper loss motor
		//console.log(" copper loss of motor  CpLossMotorExp7b: " + CpLossMotorExp7b);
		CorrectVinIinExp7b = VinIinExp7b + CpLossMotorExp7b;                // correct VinIin
		//console.log("CorrectVinIinExp7b : " + CorrectVinIinExp7b);
		if(VinExp7b == 0) {
			CorrectIinExp7b = 0;
		} else {
			CorrectIinExp7b = CorrectVinIinExp7b / VinExp7b;                     // correct Iin
		//	alert("correct value of current  CorrectIinExp7b:" + CorrectIinExp7b);
			//console.log("correct value of current  CorrectIinExp7b:" + CorrectIinExp7b);
		}
		EbExp7b = VinExp7b - IaExp7b * Ra;
		//console.log(" EbExp7b : " + EbExp7b);
		CorrectSpeedExp7b = EbExp7b / KcExp7b;                                  // Correct Speed
		//console.log("CorrectSpeedExp7b : " + CorrectSpeedExp7b);
		if(CorrectSpeedExp7b < 0) {
			CorrectSpeedExp7b = 0;
		}
		EinExp7b = (KaExp7b * CorrectSpeedExp7b ) / Math.sqrt(3);
		//console.log(" actual value  EinExp7b : " + EinExp7b);
		EarExp7b = this.calculateEarExp7b(EinExp7b);
		//console.log(" actual EarExp7b : " + EarExp7b);
		IscExp7b = (EinExp7b - EarExp7b) / 42.19;
		//console.log("short circuit current IscExp7b : " + IscExp7b);
		exp7bcanvas.motorSwitch(CorrectIinExp7b, VinExp7b, CorrectSpeedExp7b, IscExp7b);
		}
	var exp7bDataStoreFieldVoltageDown = function() {
		
		/*original code */
		if(VfaExp7b > 0)
			VfaExp7b -= 2;
		IfaExp7b = eval(VfaExp7b) / eval(RfaExp7b);
		//console.log("Field current  IfaExp7b : " + IfaExp7b);
		exp7bcanvas.FieldSwitch(VfaExp7b, IfaExp7b);
		IshExp7b = VinExp7b / shuntResistance;
		//console.log("IshExp7b : " + IshExp7b);
		EbExp7b = VinExp7b;
		KcExp7b = this.calculateKc(IshExp7b);
		//console.log("Kc Value is KcExp7b : " + KcExp7b);
		SpeedExp7b = EbExp7b / KcExp7b;
		//console.log("Rough speed is  SpeedExp7b : " + SpeedExp7b);
		KaExp7b = this.calculateKa(IfaExp7b);
		//console.log("KaExp7b : " + KaExp7b);
		EinExp7b = (KaExp7b * SpeedExp7b ) / Math.sqrt(3);
		//console.log(" rough value  EinExp7b : " + EinExp7b);
		EarExp7b = this.calculateEarExp7b(EinExp7b);
		//console.log("rough value EarExp7b : " + EarExp7b);
		IscExp7b = (EinExp7b - EarExp7b) / 42.19;
		//console.log("Rough Short circuit current is IscExp7b :" + IscExp7b);
		AltCopLossExp7b = this.calculateAltCopLossExp7b(IscExp7b);
		//console.log("copper loss of alternator : " + AltCopLossExp7b);
		InAltExp7b = AltCopLossExp7b + FLoss;
		//console.log("Input to alternator InAltExp7b : " + InAltExp7b);
		CLossMotorExp7b = this.calculateCoreLossMotExp7a(IshExp7b);
		//console.log("CLossMotorExp7b : " + CLossMotorExp7b);
		SCpLossMotorExp7b = Math.pow(IshExp7b, 2) * shuntResistance;
		//console.log("SCpLossMotorExp7b : " + SCpLossMotorExp7b);
		TLossMotorExp7b = FLoss + CLossMotorExp7b + SCpLossMotorExp7b;
		//console.log("Total Loss of motor  : " + TLossMotorExp7b);
		VinIinExp7b = InAltExp7b + TLossMotorExp7b;
		//console.log("Rough value VinIinExp7b : " + VinIinExp7b);
		if(VinIinExp7b == 0) {
			IinExp7b = 0;
		} else {
			IinExp7b = VinIinExp7b / VinExp7b;
			//console.log("Rough Value IinExp7b: " + IinExp7b);
		}
		IaExp7b = IinExp7b - IshExp7b;
		//console.log("Actual Ia IaExp7b : " + IaExp7b);
		CpLossMotorExp7b = Math.pow(IaExp7b, 2) * Ra;
		//console.log(" copper loss of motor  CpLossMotorExp7b: " + CpLossMotorExp7b);
		CorrectVinIinExp7b = VinIinExp7b + CpLossMotorExp7b;
		console.log("CorrectVinIinExp7b : " + CorrectVinIinExp7b);
		if(VinExp7b == 0) {
			CorrectIinExp7b = 0;
		} else {
			CorrectIinExp7b = CorrectVinIinExp7b / VinExp7b;
			
		//	alert("correct value of current  CorrectIinExp7b:" + CorrectIinExp7b);
			//console.log("correct value of current  CorrectIinExp7b:" + CorrectIinExp7b);
		}
		EbExp7b = VinExp7b - IaExp7b * Ra;
		//console.log(" EbExp7b : " + EbExp7b);
		CorrectSpeedExp7b = EbExp7b / KcExp7b;
		//console.log("CorrectSpeedExp7b : " + CorrectSpeedExp7b);
		if(CorrectSpeedExp7b < 0) {
			CorrectSpeedExp7b = 0;
		}
		EinExp7b = (KaExp7b * CorrectSpeedExp7b ) / Math.sqrt(3);
		//console.log(" actual value  EinExp7b : " + EinExp7b);
		EarExp7b = this.calculateEarExp7b(EinExp7b);
		//console.log(" actual EarExp7b : " + EarExp7b);
		IscExp7b = (EinExp7b - EarExp7b) / 42.19;
		//console.log("short circuit current IscExp7b : " + IscExp7b);
        exp7bcanvas.motorSwitch(CorrectIinExp7b, VinExp7b, CorrectSpeedExp7b, IscExp7b);  
		}
	var exp7bDataStoreMotorVoltageUp = function() {
		if(VinExp7b < 440)
			VinExp7b += 2;
		
		/* 1st change  */

		IshExp7b = VinExp7b / shuntResistance;
		EbExp7b = VinExp7b;
		KcExp7b = this.calculateKc(IshExp7b);
		//console.log("Kc : " + KcExp7b);
		SpeedExp7b = EbExp7b / KcExp7b;                                                    // approx speed
		//console.log("Appro Speed : " + SpeedExp7b);
		CLossAltExp7b = this.calculateAltCopLossExp7b(IscExp7b);
		//console.log("Core Loss Alternator: "+CLossAltExp7b);
		InAltExp7b = CLossAltExp7b ;             												// Input to alternator
		//console.log("Input to alternator : "+ InAltExp7b);
		CLossMotorExp7b = this.calculateCoreLossMotExp7a(IshExp7b); 					// core loss motor
		//console.log("Core Loss Motor: "+CLossMotorExp7b);	
		SCpLossMotorExp7b = Math.pow(IshExp7b , 2) * shuntResistance ;           // shunt field copper loss motor
		//console.log("shunt field copper loss Motor: "+SCpLossMotorExp7b);
		TLossMotorExp7b = CLossMotorExp7b + SCpLossMotorExp7b;   //FLossExp1b      // total loss motor
		//console.log("Total Loss : "+ TLossMotorExp7b);
		VinIinExp7b = InAltExp7b + TLossMotorExp7b ;												// approx VinIin
		//console.log("Approx VinIin : "+ VinIinExp7b);
		if(VinExp7b == 0){
			IinExp7b = 0;
		}else{
			IinExp7b = VinIinExp7b / VinExp7b ;																// aprrox Iin	
		}
		//console.log("Approx  Iin : "+ IinExp7b);
		IaExp7b = IinExp7b - IshExp7b ;																		// Ia
		//console.log("Ia : "+ IaExp7b);
		CpLossMotorExp7b =  Math.pow(IaExp7b , 2) * Ra;									// copper loss motor
		//console.log("copper loss motor : "+ CpLossMotorExp7b);
		CorrectVinIinExp7b = VinIinExp7b + CpLossMotorExp7b ;									// Correct VinIin
		//console.log("Correct VinIin : "+ CorrectVinIinExp7b);
		if(VinExp7b == 0){
			CorrectIinExp7b = 0;
		}else{
			CorrectIinExp7b = CorrectVinIinExp7b / VinExp7b ;											// correct Iin	
		}
		//console.log("Correct Iin : "+ CorrectIinExp7b);
		CorrectIaExp7b = CorrectIinExp7b - IshExp7b;												// Correct Ia
		//console.log("Correct Ia : "+ CorrectIaExp7b);
		EbExp7b = VinExp7b - CorrectIaExp7b * Ra ;														
		//console.log("Eb : "+ EbExp7b);
		CorrectSpeedExp7b = EbExp7b / KcExp7b;													// Correct Speed
		//console.log("Correct Speed : "+ CorrectSpeedExp7b);
		if(CorrectSpeedExp7b < 0){
			CorrectSpeedExp7b = 0;
		}
		KaExp7b = this.calculateKa(IfaExp7b);
		//console.log("Ka : "+ KaExp7b);
		EinExp7b = (KaExp7b * CorrectSpeedExp7b ) / Math.sqrt(3);
		//console.log(" actual value  EinExp7b : " + EinExp7b);
		EarExp7b = this.calculateEarExp7b(EinExp7b);
		//console.log(" actual EarExp7b : " + EarExp7b);
		IscExp7b = (EinExp7b - EarExp7b) / 42.19;
		//console.log("short circuit current IscExp7b : " + IscExp7b);
        exp7bcanvas.motorSwitch(CorrectIinExp7b, VinExp7b, CorrectSpeedExp7b, IscExp7b);

	
	
	
	/*  Original*/
		/*//console.log("VinExp7b :" + VinExp7b);
		IshExp7b = VinExp7b / shuntResistance;
		//console.log("IshExp7b : " + IshExp7b);
		//console.log("shuntResistance:"+shuntResistance);
		EbExp7b = VinExp7b;
		KcExp7b = this.calculateKc(IshExp7b);
		//console.log("Kc Value is KcExp7b : " + KcExp7b);
		SpeedExp7b = EbExp7b / KcExp7b;
		//console.log("Rough speed is  SpeedExp7b : " + SpeedExp7b);
		KaExp7b = this.calculateKa(IfaExp7b);
		//console.log("KaExp7b : " + KaExp7b);
		EinExp7b = (KaExp7b * SpeedExp7b ) / Math.sqrt(3);
		//console.log(" rough value  EinExp7b : " + EinExp7b);
		EarExp7b = this.calculateEarExp7b(EinExp7b);
		//console.log("rough value EarExp7b : " + EarExp7b);
		IscExp7b = (EinExp7b - EarExp7b) / 42.19;
		//console.log("Rough Short circuit current is IscExp7b :" + IscExp7b);
		AltCopLossExp7b = this.calculateAltCopLossExp7b(IscExp7b);
		//console.log("copper loss of alternator : " + AltCopLossExp7b);
		InAltExp7b = AltCopLossExp7b + FLoss;
		//console.log("Input to alternator InAltExp7b : " + InAltExp7b);
		CLossMotorExp7b = this.calculateCoreLossMotExp7a(IshExp7b);
		//console.log("CLossMotorExp7b : " + CLossMotorExp7b);
		SCpLossMotorExp7b = Math.pow(IshExp7b, 2) * shuntResistance;
		//console.log("SCpLossMotorExp7b : " + SCpLossMotorExp7b);
		TLossMotorExp7b = FLoss + CLossMotorExp7b + SCpLossMotorExp7b;
		//console.log("Total Loss of motor  : " + TLossMotorExp7b);
		VinIinExp7b = InAltExp7b + TLossMotorExp7b;
		//console.log("Rough value VinIinExp7b : " + VinIinExp7b);
		if(VinIinExp7b == 0) {
			IinExp7b = 0;
		} else {
			IinExp7b = VinIinExp7b / VinExp7b;
			console.log("Rough Value IinExp7b: " + IinExp7b);
		}
		IaExp7b = IinExp7b - IshExp7b;
		//console.log("Actual Ia IaExp7b : " + IaExp7b);
		CpLossMotorExp7b = Math.pow(IaExp7b, 2) * Ra;
		//console.log(" copper loss of motor  CpLossMotorExp7b: " + CpLossMotorExp7b);
		CorrectVinIinExp7b = VinIinExp7b + CpLossMotorExp7b;
		//console.log("Correct VinIinExp7b : " + CorrectVinIinExp7b);
		if(VinExp7b == 0) {
			CorrectIinExp7b = 0;
		} else {
			CorrectIinExp7b = CorrectVinIinExp7b / VinExp7b;
			//console.log("correct value of  motor current  CorrectIinExp7b:" + CorrectIinExp7b);
		}
		EbExp7b = VinExp7b - IaExp7b * Ra;
		//console.log(" EbExp7b : " + EbExp7b);
		CorrectSpeedExp7b = EbExp7b / KcExp7b;
		//console.log("CorrectSpeedExp7b : " + CorrectSpeedExp7b);
		if(CorrectSpeedExp7b < 0) {
			CorrectSpeedExp7b = 0;
		}
		EinExp7b = (KaExp7b * CorrectSpeedExp7b ) / Math.sqrt(3);
		//console.log(" actual value  EinExp7b : " + EinExp7b);
		EarExp7b = this.calculateEarExp7b(EinExp7b);
		//console.log(" actual EarExp7b : " + EarExp7b);
		IscExp7b = (EinExp7b - EarExp7b) / 42.19;
		//console.log("short circuit current IscExp7b : " + IscExp7b);
        exp7bcanvas.motorSwitch(CorrectIinExp7b, VinExp7b, CorrectSpeedExp7b, IscExp7b); */
		}
	var exp7bDataStoreMotorVoltageDown = function() {
		if(VinExp7b > 0)
			VinExp7b -= 2;
		//console.log("VinExp7b :" + VinExp7b);
		/* 1st change  */

		IshExp7b = VinExp7b / shuntResistance;
		EbExp7b = VinExp7b;
		KcExp7b = this.calculateKc(IshExp7b);
		//console.log("Kc : " + KcExp7b);
		SpeedExp7b = EbExp7b / KcExp7b;                                                    // approx speed
		//console.log("Appro Speed : " + SpeedExp7b);
		CLossAltExp7b = this.calculateAltCopLossExp7b(IscExp7b);
		//console.log("Core Loss Alternator: "+CLossAltExp7b);
		InAltExp7b = CLossAltExp7b ;             												// Input to alternator
		//console.log("Input to alternator : "+ InAltExp7b);
		CLossMotorExp7b = this.calculateCoreLossMotExp7a(IshExp7b); 					// core loss motor
		//console.log("Core Loss Motor: "+CLossMotorExp7b);	
		SCpLossMotorExp7b = Math.pow(IshExp7b , 2) * shuntResistance ;           // shunt field copper loss motor
		//console.log("shunt field copper loss Motor: "+SCpLossMotorExp7b);
		TLossMotorExp7b = CLossMotorExp7b + SCpLossMotorExp7b;   //FLossExp1b      // total loss motor
		//console.log("Total Loss : "+ TLossMotorExp7b);
		VinIinExp7b = InAltExp7b + TLossMotorExp7b ;												// approx VinIin
		//console.log("Approx VinIin : "+ VinIinExp7b);
		if(VinExp7b == 0){
			IinExp7b = 0;
		}else{
			IinExp7b = VinIinExp7b / VinExp7b ;																// aprrox Iin	
		}
		//console.log("Approx  Iin : "+ IinExp7b);
		IaExp7b = IinExp7b - IshExp7b ;																		// Ia
		//console.log("Ia : "+ IaExp7b);
		CpLossMotorExp7b =  Math.pow(IaExp7b , 2) * Ra;									// copper loss motor
		//console.log("copper loss motor : "+ CpLossMotorExp7b);
		CorrectVinIinExp7b = VinIinExp7b + CpLossMotorExp7b ;									// Correct VinIin
		//console.log("Correct VinIin : "+ CorrectVinIinExp7b);
		if(VinExp7b == 0){
			CorrectIinExp7b = 0;
		}else{
			CorrectIinExp7b = CorrectVinIinExp7b / VinExp7b ;											// correct Iin	
		}
		//console.log("Correct Iin : "+ CorrectIinExp7b);
		CorrectIaExp7b = CorrectIinExp7b - IshExp7b;												// Correct Ia
		//console.log("Correct Ia : "+ CorrectIaExp7b);
		EbExp7b = VinExp7b - CorrectIaExp7b * Ra ;														
		//console.log("Eb : "+ EbExp7b);
		CorrectSpeedExp7b = EbExp7b / KcExp7b;													// Correct Speed
		//console.log("Correct Speed : "+ CorrectSpeedExp7b);
		if(CorrectSpeedExp7b < 0){
			CorrectSpeedExp7b = 0;
		}
		KaExp7b = this.calculateKa(IfaExp7b);
		//console.log("Ka : "+ KaExp7b);
		EinExp7b = (KaExp7b * CorrectSpeedExp7b ) / Math.sqrt(3);
		//console.log(" actual value  EinExp7b : " + EinExp7b);
		EarExp7b = this.calculateEarExp7b(EinExp7b);
		//console.log(" actual EarExp7b : " + EarExp7b);
		IscExp7b = (EinExp7b - EarExp7b) / 42.19;
	//	console.log("short circuit current IscExp7b : " + IscExp7b);
        exp7bcanvas.motorSwitch(CorrectIinExp7b, VinExp7b, CorrectSpeedExp7b, IscExp7b);

	

		/*original code*/
	/*	IshExp7b = VinExp7b / shuntResistance;
		//console.log("IshExp7b : " + IshExp7b);
		EbExp7b = VinExp7b;
		KcExp7b = this.calculateKc(IshExp7b);
		//console.log("Kc Value is KcExp7b : " + KcExp7b);
		SpeedExp7b = EbExp7b / KcExp7b;
		//console.log("Rough speed is  SpeedExp7b : " + SpeedExp7b);
		KaExp7b = this.calculateKa(IfaExp7b);
		//console.log("KaExp7b : " + KaExp7b);
		EinExp7b = (KaExp7b * SpeedExp7b ) / Math.sqrt(3);
		//console.log(" rough value  EinExp7b : " + EinExp7b);
		EarExp7b = this.calculateEarExp7b(EinExp7b);
		//console.log("rough value EarExp7b : " + EarExp7b);
		IscExp7b = (EinExp7b - EarExp7b) / 42.19;
		//console.log("Rough Short circuit current is IscExp7b :" + IscExp7b);
		AltCopLossExp7b = this.calculateAltCopLossExp7b(IscExp7b);
		//console.log("copper loss of alternator : " + AltCopLossExp7b);
		InAltExp7b = AltCopLossExp7b + FLoss;
		//console.log("Input to alternator InAltExp7b : " + InAltExp7b);
		CLossMotorExp7b = this.calculateCoreLossMotExp7a(IshExp7b);
		//console.log("CLossMotorExp7b : " + CLossMotorExp7b);
		SCpLossMotorExp7b = Math.pow(IshExp7b, 2) * shuntResistance;
		//console.log("SCpLossMotorExp7b : " + SCpLossMotorExp7b);
		TLossMotorExp7b = FLoss + CLossMotorExp7b + SCpLossMotorExp7b;
		//console.log("Total Loss of motor  : " + TLossMotorExp7b);
		VinIinExp7b = InAltExp7b + TLossMotorExp7b;
		//console.log("Rough value VinIinExp7b : " + VinIinExp7b);
		if(VinIinExp7b == 0) {
			IinExp7b = 0;
		} else {
			IinExp7b = VinIinExp7b / VinExp7b;
			//console.log("Rough Value IinExp7b: " + IinExp7b);
		}
		IaExp7b = IinExp7b - IshExp7b;
		//console.log("Actual Ia IaExp7b : " + IaExp7b);
		CpLossMotorExp7b = Math.pow(IaExp7b, 2) * Ra;
		//console.log(" copper loss of motor  CpLossMotorExp7b: " + CpLossMotorExp7b);
		CorrectVinIinExp7b = VinIinExp7b + CpLossMotorExp7b;
		//console.log("CorrectVinIinExp7b : " + CorrectVinIinExp7b);
		if(VinExp7b == 0) {
			CorrectIinExp7b = 0;
		} else {
			CorrectIinExp7b = CorrectVinIinExp7b / VinExp7b;
			//console.log("correct value of current  CorrectIinExp7b:" + CorrectIinExp7b);
		}
		EbExp7b = VinExp7b - IaExp7b * Ra;
		//console.log(" EbExp7b : " + EbExp7b);
		CorrectSpeedExp7b = EbExp7b / KcExp7b;
		//console.log("CorrectSpeedExp7b : " + CorrectSpeedExp7b);
		if(CorrectSpeedExp7b < 0) {
			CorrectSpeedExp7b = 0;
		}
		EinExp7b = (KaExp7b * CorrectSpeedExp7b ) / Math.sqrt(3);
		//console.log(" actual value  EinExp7b : " + EinExp7b);
		EarExp7b = this.calculateEarExp7b(EinExp7b);
		//console.log(" actual EarExp7b : " + EarExp7b);
		IscExp7b = (EinExp7b - EarExp7b) / 42.19;
		//console.log("short circuit current IscExp7b : " + IscExp7b);
        exp7bcanvas.motorSwitch(CorrectIinExp7b, VinExp7b, CorrectSpeedExp7b, IscExp7b);  */
	  }
	var exp7bDataStoreDpst = function(flagExp7bDpst1, flagExp7bDpst2) {
		if(flagExp7bDpst1 == true && flagExp7bDpst2 != true) {//alert("flag1 true and flag2 false");
			VinExp7b = 0;
			if(VinExp7b > 0)
				VinExp7b -= 2;
			IshExp7b = VinExp7b / shuntResistance;
			//console.log("IshExp7b : " + IshExp7b);
			EbExp7b = VinExp7b;
			KcExp7b = this.calculateKc(IshExp7b);
			//console.log("Kc Value is KcExp7b : " + KcExp7b);
			SpeedExp7b = EbExp7b / KcExp7b;
			// approx speed
			//console.log("Rough speed is  SpeedExp7b : " + SpeedExp7b);
			KaExp7b = this.calculateKa(IfaExp7b);
			//console.log("KaExp7b : " + KaExp7b);
			EinExp7b = (KaExp7b * SpeedExp7b ) / Math.sqrt(3);
			//console.log(" rough value  EinExp7b : " + EinExp7b);
			EarExp7b = this.calculateEarExp7b(EinExp7b);
			//console.log("rough value EarExp7b : " + EarExp7b);
			IscExp7b = (EinExp7b - EarExp7b) / 42.19;
			//console.log("Rough Short circuit current is IscExp7b :" + IscExp7b);
			AltCopLossExp7b = this.calculateAltCopLossExp7b(IscExp7b);
			//console.log("copper loss of alternator : " + AltCopLossExp7b);
			InAltExp7b = AltCopLossExp7b + FLoss;
			//console.log("Input to alternator InAltExp7b : " + InAltExp7b);
			CLossMotorExp7b = this.calculateCoreLossMotExp7a(IshExp7b);
			//console.log("CLossMotorExp7b : " + CLossMotorExp7b);
			SCpLossMotorExp7b = Math.pow(IshExp7b, 2) * shuntResistance;
			//console.log("SCpLossMotorExp7b : " + SCpLossMotorExp7b);
			TLossMotorExp7b = FLoss + CLossMotorExp7b + SCpLossMotorExp7b;
			//console.log("Total Loss of motor  : " + TLossMotorExp7b);
			VinIinExp7b = InAltExp7b + TLossMotorExp7b;
			//console.log("Rough value VinIinExp7b : " + VinIinExp7b);
			if(VinIinExp7b == 0) {
				IinExp7b = 0;
			} else {
				IinExp7b = VinIinExp7b / VinExp7b;
				//console.log("Rough Value IinExp7b: " + IinExp7b);
			}
			IaExp7b = IinExp7b - IshExp7b;
			//console.log("Actual Ia IaExp7b : " + IaExp7b);
			CpLossMotorExp7b = Math.pow(IaExp7b, 2) * Ra;
			//console.log(" copper loss of motor  CpLossMotorExp7b: " + CpLossMotorExp7b);
			CorrectVinIinExp7b = VinIinExp7b + CpLossMotorExp7b;
			//console.log("CorrectVinIinExp7b : " + CorrectVinIinExp7b);
			if(VinExp7b == 0) {
				CorrectIinExp7b = 0;
			} else {
				CorrectIinExp7b = CorrectVinIinExp7b / VinExp7b;
				//console.log("correct value of current  CorrectIinExp7b:" + CorrectIinExp7b);
			}
			EbExp7b = VinExp7b - IaExp7b * Ra;
			//console.log(" EbExp7b : " + EbExp7b);
			CorrectSpeedExp7b = EbExp7b / KcExp7b;
			//console.log("CorrectSpeedExp7b : " + CorrectSpeedExp7b);
			if(CorrectSpeedExp7b < 0) {
				CorrectSpeedExp7b = 0;
			}
			EinExp7b = (KaExp7b * CorrectSpeedExp7b ) / Math.sqrt(3);
			//console.log(" actual value  EinExp7b : " + EinExp7b);
			EarExp7b = this.calculateEarExp7b(EinExp7b);
			//console.log(" actual EarExp7b : " + EarExp7b);
			IscExp7b = (EinExp7b - EarExp7b) / 42.19;
			//console.log("short circuit current IscExp7b : " + IscExp7b);
			exp7bcanvas.motorSwitch(CorrectIinExp7b, VinExp7b, CorrectSpeedExp7b, IscExp7b);
			exp7bStoreFlag = false;
		} else if(flagExp7bDpst1 != true && flagExp7bDpst2 == true) {//alert("flag1 false and flag 2 true");
			VfaExp7b = 0;
			IfaExp7b = eval(VfaExp7b) / eval(RfaExp7b);
            //console.log("Field current  IfaExp7b : " + IfaExp7b);
			exp7bcanvas.FieldSwitch(VfaExp7b, IfaExp7b);
			IshExp7b = VinExp7b / shuntResistance;
			//console.log("IshExp7b : " + IshExp7b);
			EbExp7b = VinExp7b;
			KcExp7b = this.calculateKc(IshExp7b);
			//console.log("Kc Value is KcExp7b : " + KcExp7b);
			SpeedExp7b = EbExp7b / KcExp7b;
			//console.log("Rough speed is  SpeedExp7b : " + SpeedExp7b);
			KaExp7b = this.calculateKa(IfaExp7b);
			//console.log("KaExp7b : " + KaExp7b);
			EinExp7b = (KaExp7b * SpeedExp7b ) / Math.sqrt(3);
			//console.log(" rough value  EinExp7b : " + EinExp7b);
			EarExp7b = this.calculateEarExp7b(EinExp7b);
			//console.log("rough value EarExp7b : " + EarExp7b);
			IscExp7b = (EinExp7b - EarExp7b) / 42.19;
			//console.log("Rough Short circuit current is IscExp7b :" + IscExp7b);
			AltCopLossExp7b = this.calculateAltCopLossExp7b(IscExp7b);
			//console.log("copper loss of alternator : " + AltCopLossExp7b);
			InAltExp7b = AltCopLossExp7b + FLoss;
			//console.log("Input to alternator InAltExp7b : " + InAltExp7b);
			CLossMotorExp7b = this.calculateCoreLossMotExp7a(IshExp7b);
			//console.log("CLossMotorExp7b : " + CLossMotorExp7b);
			SCpLossMotorExp7b = Math.pow(IshExp7b, 2) * shuntResistance;
			//console.log("SCpLossMotorExp7b : " + SCpLossMotorExp7b);
			TLossMotorExp7b = FLoss + CLossMotorExp7b + SCpLossMotorExp7b;
			//console.log("Total Loss of motor  : " + TLossMotorExp7b);
			VinIinExp7b = InAltExp7b + TLossMotorExp7b;
			//console.log("Rough value VinIinExp7b : " + VinIinExp7b);
			if(VinIinExp7b == 0) {
				IinExp7b = 0;
			} else {
				IinExp7b = VinIinExp7b / VinExp7b;
				//console.log("Rough Value IinExp7b: " + IinExp7b);
			}
			IaExp7b = IinExp7b - IshExp7b;
			//console.log("Actual Ia IaExp7b : " + IaExp7b);
			CpLossMotorExp7b = Math.pow(IaExp7b, 2) * Ra;
			//console.log(" copper loss of motor  CpLossMotorExp7b: " + CpLossMotorExp7b);
			CorrectVinIinExp7b = VinIinExp7b + CpLossMotorExp7b;
			//console.log("CorrectVinIinExp7b : " + CorrectVinIinExp7b);
			if(VinExp7b == 0) {
				CorrectIinExp7b = 0;
			} else {
				CorrectIinExp7b = CorrectVinIinExp7b / VinExp7b;
				//console.log("correct value of current  CorrectIinExp7b:" + CorrectIinExp7b);
			}
			EbExp7b = VinExp7b - IaExp7b * Ra;
			//console.log(" EbExp7b : " + EbExp7b);
			CorrectSpeedExp7b = EbExp7b / KcExp7b;
			//console.log("CorrectSpeedExp7b : " + CorrectSpeedExp7b);
			if(CorrectSpeedExp7b < 0) {
				CorrectSpeedExp7b = 0;
			}
			EinExp7b = (KaExp7b * CorrectSpeedExp7b ) / Math.sqrt(3);
			//console.log(" actual value  EinExp7b : " + EinExp7b);
			EarExp7b = this.calculateEarExp7b(EinExp7b);
			//console.log(" actual EarExp7b : " + EarExp7b);
			IscExp7b = (EinExp7b - EarExp7b) / 42.19;
			//console.log("short circuit current IscExp7b : " + IscExp7b);
            exp7bcanvas.motorSwitch(CorrectIinExp7b, VinExp7b, CorrectSpeedExp7b, IscExp7b);
			
		} else if(flagExp7bDpst1 != true && flagExp7bDpst2 != true) {//alert("Both flag false");
			VfaExp7b = 0;
			IfaExp7b = 0;
			VinExp7b = 0;
			CorrectIinExp7b = 0;
			IscExp7b = 0;
			CorrectSpeedExp7b = 0;
		}
		exp7bcanvas.FieldSwitch(VfaExp7b, IfaExp7b);
		exp7bcanvas.motorSwitch(CorrectIinExp7b, VinExp7b, CorrectSpeedExp7b, IscExp7b);
      }
ds.calculateEarExp7b = calculateEarExp7b;
ds.calculateAltCopLossExp7b = calculateAltCopLossExp7b;
ds.exp7bDataStoreFieldVoltageUp = exp7bDataStoreFieldVoltageUp;
ds.exp7bDataStoreFieldVoltageDown = exp7bDataStoreFieldVoltageDown;
ds.exp7bDataStoreMotorVoltageUp = exp7bDataStoreMotorVoltageUp;
ds.exp7bDataStoreMotorVoltageDown = exp7bDataStoreMotorVoltageDown;
ds.exp7bDataStoreDpst = exp7bDataStoreDpst;
ds.exp7bStoreData = exp7bStoreData;
ds.exp7bDataClearData=exp7bDataClearData;
})(datastore7b);