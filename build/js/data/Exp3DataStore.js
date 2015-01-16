var ds = datastore3 = ds || {};
(function() {
	var KcVal, speed, VaIaVal, IaRa = 0, correctSpeed = 0, Eb, vcount = 0;
	var shuntResistance = 96;
	var ampere = 0, count = 0, VaExp1b = 0, ViExp1b = 0, IfgExp1b = 0;
	
	
	
	var exp3StoreFlag=false;
	
	var exp3StoreData = function()
	{
		exp3StoreFlag = true;
		if(exp3StoreFlag == true) {
			model.graphAmpere(ampere);
			model.graphVoltage(count);
			model.graphCorrectSpeed(correctSpeed);
			model.graphVoltage1(vcount);
			model.graphAmpere1(IaRa);
		}
		
		exp3StoreFlag=false;
	}
	
   var exp3DataClearData = function(ExpId) {
		var arr = model.get("ampereValue");
		////console.log("clear amp : " + arr);
		model.clearData();
		var arr1 = model.get("ampereValue");
		//console.log("clear amp : " + arr1);
		var vol = model.get("voltageValue");
		//console.log("clear vol : " + vol);
		var id = "none";

		graph.graphData(id, ExpId);
		exp3StoreFlag = false;
	}
	
	var calculateIara = function(n) {
		//var n= 1429;
		var y1 = 1.9 * Math.pow(10, -11) * Math.pow(n, 4) - 5.9 * Math.pow(10, -8) * Math.pow(n, 3) + 8.4 * Math.pow(10, -5) * Math.pow(n, 2) + 0.1 * n + 0.61;

		////console.log("y iara :"+y1);
		return y1;
	}
	
var exp3DataStoreSwitchUp = function() {
		if(count < 300)
			count = count + 5;
		ampere = eval(count) / eval(shuntResistance);
		////console.log("datastore apmere :"+ampere);
       exp3canvas.switchUp(ampere, count);
		KcVal = this.calculateKc(ampere);
		//console.log("newAmpereVal> " + KcVal);
		speed = vcount / KcVal;                        //get the speed( N )
		//console.log("speed :" + speed);
		VaIaVal = this.calculateIara(speed);
		//console.log("VaIaVal :" + VaIaVal);
		if(vcount > 0) {
			IaRa = VaIaVal / vcount;                     //Ia i.e armature reading...
			Eb = vcount - IaRa.toFixed(4) * (3);
            //console.log("Eb is :" + Eb);
			correctSpeed = Eb / KcVal; 
			if(correctSpeed>2000)
			{
				correctSpeed = 2000;
				count=count;
				vcount=vcount;
				
			}              //techometer reading..
			
			
          if(correctSpeed < 0) {
				correctSpeed = 0;
				IaRa = 0;
			}
			
			exp3canvas.switchUp1(vcount, IaRa, correctSpeed);
			if(correctSpeed==2000)
			{
				alert("Speed is Exceeding it's limit!!!");
			}
			
		}
        var arr = model.get("ampereValue");
		var vol = model.get("voltageValue");
		for( i = 0; i < arr.length; i++) {
			//console.log("amp data : " + arr[i]);
		}
		for( i = 0; i < vol.length; i++) {
			//console.log("vol data : " + vol[i]);
		}
       
	}
	var exp3DataStoreSwitchDown = function() {
		if(count > 0  && correctSpeed<2000)
			count = count - 5;
		ampere = eval(count) / eval(shuntResistance);
        exp3canvas.switchDown(ampere, count);
		KcVal = this.calculateKc(ampere);
		//console.log("newAmpereVal> " + KcVal);
		speed = vcount / KcVal;
		console.log("speed :" + speed);
		VaIaVal = this.calculateIara(speed);
		console.log("VaIaVal :" + VaIaVal);
		if(vcount > 0) {
			IaRa = VaIaVal / vcount;
			Eb = vcount - IaRa.toFixed(4) * (3);
            //console.log("Eb is :" + Eb);
			correctSpeed = Eb / KcVal;
			if(correctSpeed>2000)
			{
				correctSpeed = 2000;
				count=count;
				vcount=vcount;
			}
			
            if(correctSpeed < 0) {
				correctSpeed = 0;
				IaRa = 0;
			}
			
			exp3canvas.switchUp1(vcount, IaRa, correctSpeed);
				if(correctSpeed==2000)
			{
				alert("Speed is Exceeding it's limit!!!");
			}
		}
   }
	var exp3DataStoreSwitchUp1 = function() {
		if(count>=20)
		{
		if(vcount < 500  && correctSpeed<2000)
			vcount = vcount + 5;
		var amp = model.get("ampereValue");
		//console.log("ampere : " + amp);
		KcVal = this.calculateKc(ampere);
		//console.log("newAmpereVal> " + KcVal);
		speed = vcount / KcVal;
		//console.log("speed :" + speed);
		VaIaVal = this.calculateIara(speed);
		//console.log("VaIaVal :" + VaIaVal);
		IaRa = VaIaVal / vcount;
		Eb = vcount - IaRa.toFixed(4) * (3);
        //console.log("Eb is :" + Eb);
		correctSpeed = Eb / KcVal;
		if(correctSpeed>2000)
			{
				correctSpeed = 2000;
				count=count;
				vcount=vcount;
			}
				
        if(correctSpeed < 0) {
			correctSpeed = 0;
			IaRa = 0;
		}
		}else{
			alert("Field voltage is not sufficient..");
		}
		exp3canvas.switchUp1(vcount, IaRa, correctSpeed);
		if(correctSpeed==2000)
			{
				alert("Speed is Exceeding it's limit!!!");
			}
     }
	var exp3DataStoreSwitchDown1 = function() {
		if(vcount > 0)
			vcount = vcount - 5;
		//console.log("ampere 2: " + ampere);
		KcVal = this.calculateKc(ampere);
		//console.log("newAmpereVal 2> " + KcVal);
		speed = vcount / KcVal;
		//console.log("speed :" + speed);
		VaIaVal = this.calculateIara(speed);
		//console.log("VaIaVal :" + VaIaVal);
		IaRa = VaIaVal / vcount;
		Eb = vcount - IaRa.toFixed(4) * (3);
        //console.log("Eb is :" + Eb);
		correctSpeed = Eb / KcVal;
		if(correctSpeed>2000)
			{
				correctSpeed = 2000;
				count=count;
				vcount=vcount;
			}
						
        if(correctSpeed < 0) {
			correctSpeed = 0;
			IaRa = 0;
		}
	
		exp3canvas.switchDown1(vcount, IaRa, correctSpeed);
			if(correctSpeed==2000)
			{
				alert("Speed is Exceeding it's limit!!!");
			}
        }
	var exp3Dpst = function(flagExp3Dpst1, flagExp3Dpst2) {
		if(flagExp3Dpst1 == true && flagExp3Dpst2 != true) {
			vcount = 0;
			KcVal = this.calculateKc(ampere);
			//console.log("newAmpereVal 2> " + KcVal);
			speed = vcount / KcVal;
			//console.log("speed :" + speed);
			VaIaVal = this.calculateIara(speed);
			//console.log("VaIaVal :" + VaIaVal);
			IaRa = VaIaVal / vcount;
			Eb = vcount - IaRa.toFixed(4) * (3);
            //console.log("Eb is :" + Eb);
			correctSpeed = Eb / KcVal;
			if(correctSpeed>2000)
			{
				correctSpeed = 2000;
				count=count;
				vcount=vcount;
			}
			if(correctSpeed < 0) {
				correctSpeed = 0;
				IaRa = 0;
			}
			
			exp3canvas.switchDown1(vcount, IaRa, correctSpeed);
           }

		if(flagExp3Dpst1 != true && flagExp3Dpst2 == true) {
			count = 0;
			ampere = eval(count) / eval(shuntResistance);
			exp3canvas.switchDown(ampere, count);
			KcVal = this.calculateKc(ampere);
			//console.log("newAmpereVal 2> " + KcVal);
			speed = vcount / KcVal;
			//console.log("speed :" + speed);
			VaIaVal = this.calculateIara(speed);
			//console.log("VaIaVal :" + VaIaVal);
			IaRa = VaIaVal / vcount;
			Eb = vcount - IaRa.toFixed(4) * (3);

			//console.log("Eb is :" + Eb);
			correctSpeed = Eb / KcVal;
			if(correctSpeed>2000)
			{
				correctSpeed = 2000;
				count=count;
				vcount=vcount;
			}

			if(correctSpeed < 0) {
				correctSpeed = 0;
				IaRa = 0;
			}
			
			exp3canvas.switchDown1(vcount, IaRa, correctSpeed);
           }
          if(flagExp3Dpst1 != true && flagExp3Dpst2 != true) {
			count = 0;
			vcount = 0;
			ampere = 0;
			IaRa = 0;
			correctSpeed = 0;
            exp3canvas.switchDown(ampere, count);
            if(correctSpeed>2000)
			{
				correctSpeed = 2000;
				count=count;
				vcount=vcount;
			}
			exp3canvas.switchDown1(vcount, IaRa, correctSpeed);
		}
	}
    
    ds.exp3DataStoreSwitchUp = exp3DataStoreSwitchUp;
	ds.exp3DataStoreSwitchDown = exp3DataStoreSwitchDown;
	ds.exp3DataStoreSwitchUp1 = exp3DataStoreSwitchUp1;
	ds.exp3DataStoreSwitchDown1 = exp3DataStoreSwitchDown1;
    ds.exp3StoreData = exp3StoreData;
    ds.exp3Dpst = exp3Dpst;
    ds.calculateIara=calculateIara;
    ds.exp3DataClearData = exp3DataClearData;

})(datastore3);