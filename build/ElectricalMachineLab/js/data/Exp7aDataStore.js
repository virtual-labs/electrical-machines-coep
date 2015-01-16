var ds = datastore7a = ds || {};
(function() {
	var VfaExp7a = 0,IfaExp7a = 0,VinExp7a = 0,IinExp7a,IshExp7a,EbExp7a,KcExp7a,SpeedExp7a,EinExp7a = 0,KaExp7a,VtExp7a=0,
	    CLossMotorExp7a,CpLossMotorExp7a,SCpLossMotorExp7a,TLossMotorExp7a,InAltExp7a,CLossAltExp7a,VinIinExp7a,
	    IinExp7a,IaExp7a,CorrectVinIinExp7a,CorrectIinExp7a,CorrectSpeedExp7a,CorrectIaExp7a;
    var shuntResistance = 192,Ra = 3, RfaExp7a = 180;

   var exp7aStoreFlag = false;



   var exp7aStoreData = function()
	 {
		exp7aStoreFlag = true;
		if(exp7aStoreFlag == true){
			model.graphAmpereFieldExp7a(IfaExp7a);
			model.graphVoltageFieldExp7a(VfaExp7a);
			model.graphAmpereMotorExp7a(CorrectIinExp7a);
			model.graphVoltageMotorExp7a(VinExp7a);
			model.graphVoltageAltExp7a(VtExp7a);
			model.graphSpeedExp7a(CorrectSpeedExp7a);
			model.graphEinExp7a(EinExp7a);
			model.graphcoreLossAlt7a(CLossAltExp7a);
	        model.graphMotOutput7a(InAltExp7a);
		}
		 exp7aStoreFlag = false;
     }
   
   var exp7aDataClearData = function(ExpId) {
		var arr = model.get("ampereValue");
		//console.log("clear amp : " + arr);
		model.clearData();
		var arr1 = model.get("ampereValue");
		//console.log("clear amp : " + arr1);
		var vol = model.get("voltageValue");
		//console.log("clear vol : " + vol);
		var id = "none";

		graph.graphData(id, ExpId);
		exp7aStoreFlag = false;
	}
	
	var calculateKa = function(x) {
		var y = 0.26 * Math.pow(x, 4) + 0.24 * Math.pow(x, 3) - Math.pow(x, 2) + 0.94 * x + 0.018;
		return y;
	}
	
	var calculateCoreLossAltExp7a = function(x) {
		var y = -0.0026 * Math.pow(x, 2) + 1.3 * x;
		return y;
	}

    var calculateCoreLossMotExp7a = function(x) {
		var y = -4.6 * Math.pow(x, 7) + 40 * Math.pow(x, 6) - 1.4 * Math.pow(10, 2) * Math.pow(x, 5) + 2.3 * Math.pow(10, 2) * Math.pow(x, 4) - 1.9 * Math.pow(10, 2) * Math.pow(x, 3) + 68 * Math.pow(x, 2) + 42 * x + 0.0042;

		return y;
	}

	var exp7aDataStoreFieldVoltageUp = function() {
		if(VfaExp7a < 220)
			VfaExp7a += 2;
		IfaExp7a = eval(VfaExp7a) / eval(RfaExp7a);

		exp7acanvas.FieldSwitch(IfaExp7a, VfaExp7a);

		this.exp7aCalculations();
		
	}
	var exp7aDataStoreFieldVoltageDown = function() {
		if(VfaExp7a > 0)
			VfaExp7a -= 2;
		IfaExp7a = eval(VfaExp7a) / eval(RfaExp7a);

		exp7acanvas.FieldSwitch(IfaExp7a, VfaExp7a);

		this.exp7aCalculations();
		
	}
	var exp7aDataStoreMotorVoltageUp = function() {
		if(VinExp7a < 440)
			VinExp7a += 2;

		this.exp7aCalculations();
		

	}
	var exp7aDataStoreMotorVoltageDown = function() {
		if(VinExp7a > 0)
			VinExp7a -= 2;

		this.exp7aCalculations();
		
	}
	var exp7aDpst = function(flagExp7aDpst, flagExp7aDpst1) {
		if(flagExp7aDpst == true && flagExp7aDpst1 != true) {
			VinExp7a = 0;
			this.exp7aCalculations();
       
		}

		if(flagExp7aDpst != true && flagExp7aDpst1 == true) {
			VfaExp7a = 0;
			IfaExp7a = eval(VfaExp7a) / eval(RfaExp7a);

			exp7acanvas.FieldSwitch(IfaExp7a, VfaExp7a);

			this.exp7aCalculations();
           
		}

		if(flagExp7aDpst != true && flagExp7aDpst1 != true) {
			IfaExp7a = 0;
			VfaExp7a = 0;
			IshExp7a = 0;
			VinExp7a = 0;
			CorrectIinExp7a = 0;
			VtExp7a = 0;
			CorrectSpeedExp7a = 0;
			EinExp7a = 0;
		exp7acanvas.FieldSwitch(IfaExp7a,VfaExp7a);
		exp7acanvas.motorSwitch(CorrectIinExp7a,VinExp7a,CorrectSpeedExp7a,VtExp7a);
		
		}
	}
	var exp7aCalculations = function() {
		IshExp7a = VinExp7a / shuntResistance;
		EbExp7a = VinExp7a;
		KcExp7a = this.calculateKc(IshExp7a);
		//console.log("Kc : " + KcExp7a);
		SpeedExp7a = EbExp7a / KcExp7a;                                                    // approx speed
		//console.log("Appro Speed : " + SpeedExp7a);
		CLossAltExp7a = this.calculateCoreLossAltExp7a(VfaExp7a);
		//console.log("Core Loss Alternator: "+CLossAltExp7a);
		InAltExp7a = CLossAltExp7a;             												// Input to alternator
		//console.log("Input to alternator : "+ InAltExp7a);
		CLossMotorExp7a = this.calculateCoreLossMotExp7a(IshExp7a);     					// core loss motor
		//console.log("Core Loss Motor: "+CLossMotorExp7a);	
		SCpLossMotorExp7a = Math.pow(IshExp7a , 2) * shuntResistance ;           // shunt field copper loss motor
		//console.log("shunt field copper loss Motor: "+SCpLossMotorExp7a);
		TLossMotorExp7a = CLossMotorExp7a + SCpLossMotorExp7a;   //FLossExp1b      // total loss motor
		//console.log("Total Loss : "+ TLossMotorExp7a);
		VinIinExp7a = InAltExp7a + TLossMotorExp7a ;												// approx VinIin
		//console.log("Approx VinIin : "+ VinIinExp7a);
		if(VinExp7a == 0){
			IinExp7a = 0;
		}else{
			IinExp7a = VinIinExp7a / VinExp7a ;																// aprrox Iin	
		}
		//console.log("Approx  Iin : "+ IinExp7a);
		IaExp7a = IinExp7a - IshExp7a ;																		// Ia
		//console.log("Ia : "+ IaExp7a);
		CpLossMotorExp7a =  Math.pow(IaExp7a , 2) * Ra;									// copper loss motor
		//console.log("copper loss motor : "+ CpLossMotorExp7a);
		CorrectVinIinExp7a = VinIinExp7a + CpLossMotorExp7a ;									// Correct VinIin
		//console.log("Correct VinIin : "+ CorrectVinIinExp7a);
		if(VinExp7a == 0){
			CorrectIinExp7a = 0;
		}else{
			CorrectIinExp7a = CorrectVinIinExp7a / VinExp7a ;											// correct Iin	
		}
		//console.log("Correct Iin : "+ CorrectIinExp7a);
		CorrectIaExp7a = CorrectIinExp7a - IshExp7a;												// Correct Ia
		//console.log("Correct Ia : "+ CorrectIaExp7a);
		EbExp7a = VinExp7a - CorrectIaExp7a * Ra ;														
		//console.log("Eb : "+ EbExp7a);
		CorrectSpeedExp7a = EbExp7a / KcExp7a;													// Correct Speed
		//console.log("Correct Speed : "+ CorrectSpeedExp7a);
		if(CorrectSpeedExp7a < 0){
			CorrectSpeedExp7a = 0;
		}
		KaExp7a = this.calculateKa(IfaExp7a);
		//console.log("Ka : "+ KaExp7a);
		EinExp7a = (KaExp7a * CorrectSpeedExp7a ) / Math.sqrt(3);                       				// Induced Emf in alternator
		//console.log("Ein : "+ EinExp7a);
		VtExp7a = Math.sqrt(3) * EinExp7a;
		//console.log("Vt : "+ VtExp7a);
		if(VtExp7a>520)
		{
		   VtExp7a=520;
		 }  
		exp7acanvas.motorSwitch(CorrectIinExp7a,VinExp7a,CorrectSpeedExp7a,VtExp7a);
	}
	ds.exp7aDataStoreFieldVoltageUp = exp7aDataStoreFieldVoltageUp;
	ds.exp7aDataStoreFieldVoltageDown = exp7aDataStoreFieldVoltageDown;
	ds.exp7aDataStoreMotorVoltageUp = exp7aDataStoreMotorVoltageUp;
	ds.exp7aDataStoreMotorVoltageDown = exp7aDataStoreMotorVoltageDown;
	ds.calculateKa = calculateKa;
	ds.calculateCoreLossAltExp7a = calculateCoreLossAltExp7a;
	ds.calculateCoreLossMotExp7a = calculateCoreLossMotExp7a;
    ds.exp7aCalculations = exp7aCalculations;
	ds.exp7aDpst = exp7aDpst;
    ds.exp7aStoreData=exp7aStoreData;
    ds.exp7aDataClearData=exp7aDataClearData;

})(datastore7a);