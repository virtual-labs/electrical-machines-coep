var ds = datastore2 = ds || {};
(function() {
    var ampere = 0, count = 0, VaExp1b = 0, ViExp1b = 0, IfgExp1b = 0;VfExp2 = 0, IfExp2 = 0,speed21 = 0;
	var speed23 = 0,KcVal, speed, VaIaVal, IaRa = 0, correctSpeed = 0, Eb, vcount = 0,shuntResistance = 96;
	var VfgExp2 = 0, IfgExp2 = 0,Exp2MotKcVal,ampere2 = 0,Exp2GencorL = 0,count2 = 0,Ia, N, ActualSpeed = 0;
	var Ea, Vt, IagExp2 = 0,ActVt = 0,ActIa = 0, RagExp2 = 0,Exp2motOp = 0, fWL = 100, copL = 0,Exp2motIp = 0;
	var genOp = 0, genIpExp2 = 0, motIp = 0, ActmotIpExp2 = 0, CountRes = 0,Exp2MotEff=0,RLoadExp2,Torque;
    var exp2StoreFlag=false;
	
 
	var exp2StoreData = function() {
		exp2StoreFlag = true;
		if(exp2StoreFlag == true) {
			model.graphVoltageExp2(VfExp2);
			model.graphAmpereExp2(IfExp2);
			model.graphVoltage1Exp2(count2);
			model.graphActIaExp2(ActIa);
			model.graphVfgExp2(VfgExp2);
			model.graphIfgExp2(IfgExp2);
			model.graphVtExp2(ActVt);
			model.graphIagExp2(IagExp2);
			model.graphActualSpeedExp2(ActualSpeed);
			model.graphEfficiencyExp2(Exp2MotEff);
			model.graphOutputExp2(genIpExp2);
			model.graphInputExp2(ActmotIpExp2);
			model.graphBackEmfExp2(Ea);
			model.graphTorqueExp2(Torque);
			}
		   exp2StoreFlag = false;
	}
	var calculateCoreLoss = function(x) {
		var coreLoss = -2 * Math.pow(x, 4) + 8.8 * Math.pow(x, 3) - 17 * Math.pow(x, 2) + 55 * x - 0.12;
		return coreLoss;
	}
	
	var calculatePc = function(c) {
		var y2 = -2 * Math.pow(c, 4) + 8.8 * Math.pow(c, 3) - 17 * Math.pow(c, 2) + 55 * c - 0;
		return y2;

	}
	
	var calculateKc = function(x) {
	     var y = 0.012 * Math.pow(x, 4) - 0.047 * Math.pow(x, 3) - 0.0017 * Math.pow(x, 2) + 0.23 * x + 0.0056;
	  	  return y;
	}
	
	var exp2DataClearData = function(ExpId) {
		var arr = model.get("ampereValue");
		////console.log("clear amp : " + arr);
		model.clearData();
		var arr1 = model.get("ampereValue");
		//console.log("clear amp : " + arr1);
		var vol = model.get("voltageValue");
		//console.log("clear vol : " + vol);
		var id = "none";

		graph.graphData(id, ExpId);
		exp2StoreFlag = false;
	}
	
	var exp2DataStoreSwitchUp = function(flagExp2Dpst4, flagExp2Dpst5, flagExp2Dpst6, flagExp2Dpst7, flagExp2Dpst8, flagExp2Dpst9) {
		if(VfExp2 < 300)
			VfExp2 = VfExp2 + 5;
		//console.log("voltage VfExp2 : " + VfExp2);
		IfExp2 = eval(VfExp2) / eval(shuntResistance);
		//console.log("current IfExp2 : " + IfExp2);
		Exp2MotKcVal = this.calculateKc(IfExp2);
		//console.log("Kc val of motor Exp2MotKcVal : " + Exp2MotKcVal);
		ActualSpeed = (count2 - (ActIa * 3)) / Exp2MotKcVal;                   // speed for dpst1
		//console.log(" speed of 1st DPST Switch : " + ActualSpeed);
		exp2canvas.switchUp(VfExp2, IfExp2, ActualSpeed);
		ampere2 = eval(count2) / eval(shuntResistance);
		Exp2MotKcVal = this.calculateKc(IfExp2);
		//console.log("Kc Value of motor Exp2MotKcVal : " + Exp2MotKcVal);
		//console.log("ActIa :"+ActIa);
		speed = (count2 - (ActIa * 3)) / Exp2MotKcVal;
		//get the speed( N )
		//console.log("rough speed is : " + speed);
		//Rough speed
		GenKcVal = this.calculateKc(IfgExp2);
		//console.log("Kc value of generator GenKcVal : " + GenKcVal);
		Ea = GenKcVal * speed;
		//console.log("Back emf of generator Ea :  " + Ea);
		Vt = Ea;
		if(flagExp2Dpst4 == false || flagExp2Dpst4 == undefined) {
            RagExp2 = 0;
			IagExp2 = 0;
		} else {
			if(flagExp2Dpst5 == true) {
				CountRes++;
			}
			if(flagExp2Dpst6 == true) {
				CountRes++;
			}
			if(flagExp2Dpst7 == true) {
				CountRes++;
			}
			if(flagExp2Dpst8 == true) {
				CountRes++;
			}
			if(flagExp2Dpst9 == true) {
				CountRes++;
			}
		}
		if(CountRes == 0) {
			RLoadExp2 = 0;
			IagExp2 = 0;
		} else {
			RLoadExp2 = 350 / CountRes;
			CountRes = 0;
			//console.log("Total Load Resisteance :  " + RLoadExp2);
		}
		if(RLoadExp2 != 0 && ActualSpeed !=0) {
			IagExp2 = Vt / RLoadExp2;
			//ActVt = Vt - (IagExp2 * 3);
			
		}
		ActVt = Vt - (IagExp2 * 3);
		
		console.log("current in generator ammeter IagExp2 : " + IagExp2);
		
		console.log(" Actual voltage of generator Vt switchUp :" + ActVt);
		genOp = ActVt * IagExp2;
		//console.log(" genertor o/p is :" + genOp);
		IfgExp2 = eval(VfgExp2) / eval(shuntResistance);
		//console.log(" Field current of generator  IfgExp2 : " + IfgExp2);
		Exp2GencorL = this.calculatePc(IfgExp2);
		//console.log("core loss of Generator :" + Exp2GencorL);
		genIpExp2 = genOp + 0 + Exp2GencorL + (IagExp2 * IagExp2 * 3);
		//console.log(" Generator i/p : " + genIpExp2);
		Exp2MotcorL = this.calculatePc(IfExp2);
		//console.log("core loss of Motor : " + Exp2MotcorL);
		Exp2motIp = genIpExp2 + 0 + Exp2MotcorL;
		//console.log("Motor i/p :" + Exp2motIp);
		Ia = Exp2motIp / count2;
		//console.log(" Rough current Ia :  " + Ia);
		ActmotIpExp2 = Exp2motIp + (Ia * Ia * 3);
		//console.log("Actual motor i/p :" + ActmotIpExp2);
		if(ActualSpeed = 0) {
			ActIa = 0;
			ActVt=0;
		}else{
		ActIa = ActmotIpExp2 / count2;
		}
		if(count2 == 0) {
			ActIa = 0;
		}
		//console.log("voltage of alternator Va : " + count2);
		//console.log("Actual current   ActIa  : " + ActIa);
		//console.log("kc value of motor Exp2MotKcVal : " + Exp2MotKcVal);
		console.log("ActVt switchUp :  " + ActVt);
		ActualSpeed = (count2 - (ActIa * 3)) / Exp2MotKcVal;
		//console.log(" Actual Speed N : " + ActualSpeed);
		if(ActualSpeed>2000)
			{
				ActualSpeed = 2000;
			    VfExp2 = VfExp2;
			    IfExp2 = IfExp2;
				
			}    
		if(ActualSpeed < 0) {
			ActualSpeed = 0;
		}
		Exp2MotEff = genIpExp2 / ActmotIpExp2;
		//console.log("Efficiency of motor : " + Exp2MotEff);
		Torque = Exp2MotKcVal * ActIa;
		//console.log("Torque is :"+Torque);
		exp2canvas.switchUp1(count2, IagExp2, ActIa, ActualSpeed, ActVt, VfgExp2, IfgExp2);
		if(ActualSpeed==2000)
			{
				alert("Speed is Exceeding it's limit!!!");
			}
		
	}
	var exp2DataStoreSwitchDown = function(flagExp2Dpst4, flagExp2Dpst5, flagExp2Dpst6, flagExp2Dpst7, flagExp2Dpst8, flagExp2Dpst9) {
		if(VfExp2 > 0)
			VfExp2 = VfExp2 - 5;
		IfExp2 = eval(VfExp2) / eval(shuntResistance);
		//console.log("current IfExp2 : " + IfExp2);
		Exp2MotKcVal = this.calculateKc(IfExp2);
		//console.log("Kc val of motor Exp2MotKcVal : " + Exp2MotKcVal);
		ActualSpeed = (count2 - (ActIa * 3)) / Exp2MotKcVal;
		//console.log(" speed of 1st DPST Switch : " + ActualSpeed);
		exp2canvas.switchDown(VfExp2, IfExp2, ActualSpeed);
		ampere2 = eval(count2) / eval(shuntResistance);
		Exp2MotKcVal = this.calculateKc(IfExp2);
		//console.log("Kc Value of motor Exp2MotKcVal : " + Exp2MotKcVal);
		//console.log("ActIa :"+ActIa);
		speed = (count2 - (ActIa * 3)) / Exp2MotKcVal;
		//get the speed( N )
		//console.log("rough speed is : " + speed);
		//Rough speed
		GenKcVal = this.calculateKc(IfgExp2);
		//console.log("Kc value of generator GenKcVal : " + GenKcVal);
		Ea = GenKcVal * speed;
		//console.log("Back emf of generator Ea :  " + Ea);
		Vt = Ea;
		if(flagExp2Dpst4 == false || flagExp2Dpst4 == undefined) {
            RagExp2 = 0;
			IagExp2 = 0;
		} else {
			if(flagExp2Dpst5 == true) {
				CountRes++;
			}
			if(flagExp2Dpst6 == true) {
				CountRes++;
			}
			if(flagExp2Dpst7 == true) {
				CountRes++;
			}
			if(flagExp2Dpst8 == true) {
				CountRes++;
			}
			if(flagExp2Dpst9 == true) {
				CountRes++;
			}
		}
		if(CountRes == 0) {
			RLoadExp2 = 0;
			IagExp2 = 0;
		} else {
			RLoadExp2 = 350 / CountRes;
			CountRes = 0;
			//console.log("Total Load Resisteance :  " + RLoadExp2);
		}
		if(RLoadExp2 != 0 && ActualSpeed !=0) {
			IagExp2 = Vt / RLoadExp2;
			//ActVt = Vt - (IagExp2 * 3);
			console.log("ActVt switchDown :  " + ActVt);
		}
		ActVt = Vt - (IagExp2 * 3);
		//console.log("current in generator ammeter IagExp2 : " + IagExp2);
		
		console.log(" Actual voltage of generator Vt :" + ActVt);
		genOp = ActVt * IagExp2;
		//console.log(" genertor o/p is :" + genOp);
		IfgExp2 = eval(VfgExp2) / eval(shuntResistance);
		//console.log(" Field current of generator  IfgExp2 : " + IfgExp2);
		Exp2GencorL = this.calculatePc(IfgExp2);
		//console.log("core loss of Generator :" + Exp2GencorL);
		genIpExp2 = genOp + 0 + Exp2GencorL + (IagExp2 * IagExp2 * 3);
		//console.log(" Generator i/p : " + genIpExp2);
		Exp2MotcorL = this.calculatePc(IfExp2);
		//console.log("core loss of Motor : " + Exp2MotcorL);
		Exp2motIp = genIpExp2 + 0 + Exp2MotcorL;
		//console.log("Motor i/p :" + Exp2motIp);
		Ia = Exp2motIp / count2;
		//console.log(" Rough current Ia :  " + Ia);
		ActmotIpExp2 = Exp2motIp + (Ia * Ia * 3);
		//console.log("Actual motor i/p :" + ActmotIpExp2);
		if(ActualSpeed = 0) {
			ActIa = 0;
			ActVt=0;
		}else{
		ActIa = ActmotIpExp2 / count2;
		}
		if(count2 == 0) {
			ActIa = 0;
		}
		//console.log("voltage of alternator Va : " + count2);
		//console.log("Actual current   ActIa  : " + ActIa);
		//console.log("kc value of motor Exp2MotKcVal : " + Exp2MotKcVal);
		ActualSpeed = (count2 - (ActIa * 3)) / Exp2MotKcVal;
		//console.log(" Actual Speed N : " + ActualSpeed);
		if(ActualSpeed>2000)
			{
				ActualSpeed = 2000;
			    VfExp2 = VfExp2;
			    IfExp2 = IfExp2;
				
			}   
		if(ActualSpeed < 0) {
			ActualSpeed = 0;
		}
		Exp2MotEff = genIpExp2 / ActmotIpExp2;
		//console.log("Efficiency of motor : " + Exp2MotEff);
		Torque = Exp2MotKcVal * ActIa;
		//console.log("Torque is :"+Torque);
		console.log("ActVt switchDown :  " + ActVt);
		exp2canvas.switchUp1(count2, IagExp2, ActIa, ActualSpeed, ActVt, VfgExp2, IfgExp2);
		
          if(ActualSpeed==2000)
			{
				alert("Speed is Exceeding it's limit!!!");
			}
		
	}
	var exp2DataStoreSwitchUp1 = function(flagExp2Dpst4, flagExp2Dpst5, flagExp2Dpst6, flagExp2Dpst7, flagExp2Dpst8, flagExp2Dpst9) {
	if(VfExp2>=20)
	{
		if(count2 < 500)
			count2 = count2 + 5;
		ampere2 = eval(count2) / eval(shuntResistance);
		Exp2MotKcVal = this.calculateKc(IfExp2);
		//console.log("Kc Value of motor Exp2MotKcVal : " + Exp2MotKcVal);
		//console.log("ActIa :"+ActIa);
		console.log("ActVt switchUp1 :  " + ActVt);
		speed = (count2 - (ActIa * 3)) / Exp2MotKcVal;
		//get the speed( N )
		//console.log("rough speed is : " + speed);
		//Rough speed
		GenKcVal = this.calculateKc(IfgExp2);
		//console.log("Kc value of generator GenKcVal : " + GenKcVal);
		Ea = GenKcVal * speed;
		//console.log("Back emf of generator Ea :  " + Ea);
		Vt = Ea;
		if(flagExp2Dpst4 == false || flagExp2Dpst4 == undefined) {
            RagExp2 = 0;
			IagExp2 = 0;
		} else {
			if(flagExp2Dpst5 == true) {
				CountRes++;
			}
			if(flagExp2Dpst6 == true) {
				CountRes++;
			}
			if(flagExp2Dpst7 == true) {
				CountRes++;
			}
			if(flagExp2Dpst8 == true) {
				CountRes++;
			}
			if(flagExp2Dpst9 == true) {
				CountRes++;
			}
		}
		if(CountRes == 0) {
			RLoadExp2 = 0;
			IagExp2 = 0;
		} else {
			RLoadExp2 = 350 / CountRes;
			CountRes = 0;
			//console.log("Total Load Resisteance :  " + RLoadExp2);
		}
		if(RLoadExp2 != 0 && ActualSpeed !=0) {
			IagExp2 = Vt / RLoadExp2;
			//ActVt = Vt - (IagExp2 * 3);
			//console.log("ActVt switchUp1 :  " + ActVt);
		}
		ActVt = Vt - (IagExp2 * 3);
		console.log("current in generator ammeter IagExp2 : " + IagExp2);
		
		console.log(" Actual voltage of generator Vt :" + ActVt);
		genOp = ActVt * IagExp2;
		//console.log(" genertor o/p is :" + genOp);
		IfgExp2 = eval(VfgExp2) / eval(shuntResistance);
		//console.log(" Field current of generator  IfgExp2 : " + IfgExp2);
		Exp2GencorL = this.calculatePc(IfgExp2);
		//console.log("core loss of Generator :" + Exp2GencorL);
		genIpExp2 = genOp + 0 + Exp2GencorL + (IagExp2 * IagExp2 * 3);
		//console.log(" Generator i/p : " + genIpExp2);
		Exp2MotcorL = this.calculatePc(IfExp2);
		//console.log("core loss of Motor : " + Exp2MotcorL);
		Exp2motIp = genIpExp2 + 0 + Exp2MotcorL;
		//console.log("Motor i/p :" + Exp2motIp);
		Ia = Exp2motIp / count2;
		//console.log(" Rough current Ia :  " + Ia);
		ActmotIpExp2 = Exp2motIp + (Ia * Ia * 3);
		//console.log("Actual motor i/p :" + ActmotIpExp2);
		if(ActualSpeed = 0) {
			ActIa = 0;
			ActVt=0;
		}else{
		ActIa = ActmotIpExp2 / count2;
		}
		if(count2 == 0) {
			ActIa = 0;
		}
		//console.log("voltage of alternator Va : " + count2);
		//console.log("Actual current   ActIa  : " + ActIa);
		//console.log("kc value of motor Exp2MotKcVal : " + Exp2MotKcVal);
		ActualSpeed = (count2 - (ActIa * 3)) / Exp2MotKcVal;
		//console.log(" Actual Speed N : " + ActualSpeed);
		if(ActualSpeed>2000)
			{
				ActualSpeed = 2000;
			    VfExp2 = VfExp2;
			    IfExp2 = IfExp2;
				
			}   

		if(ActualSpeed < 0) {
			ActualSpeed = 0;
		}
		Exp2MotEff = genIpExp2 / ActmotIpExp2;
		//console.log("Efficiency of motor : " + Exp2MotEff);
		Torque = Exp2MotKcVal * ActIa;
		//console.log("Torque is :"+Torque);
		console.log("ActVt switchUp1 :  " + ActVt);
		}
		else{
			alert("Field voltage is not sufficient..");
		}
		
		exp2canvas.switchUp1(count2, IagExp2, ActIa, ActualSpeed, ActVt, VfgExp2, IfgExp2);
		if(ActualSpeed==2000)
			{
				alert("Speed is Exceeding it's limit!!!");
			}
	}
	var exp2DataStoreSwitchDown1 = function(flagExp2Dpst4, flagExp2Dpst5, flagExp2Dpst6, flagExp2Dpst7, flagExp2Dpst8, flagExp2Dpst9) {
		if(count2 > 0)
			count2 = count2 - 5;
		ampere2 = eval(count2) / eval(shuntResistance);
		Exp2MotKcVal = this.calculateKc(IfExp2);
		//console.log("Kc Value of motor Exp2MotKcVal : " + Exp2MotKcVal);
		//console.log("ActIa :"+ActIa);
		console.log("ActVt switchDown1 :  " + ActVt);
		speed = (count2 - (ActIa * 3)) / Exp2MotKcVal;
		//get the speed( N )
		//console.log("rough speed is : " + speed);
		//Rough speed
		GenKcVal = this.calculateKc(IfgExp2);
		//console.log("Kc value of generator GenKcVal : " + GenKcVal);
		Ea = GenKcVal * speed;
		//console.log("Back emf of generator Ea :  " + Ea);
		Vt = Ea;
		if(flagExp2Dpst4 == false || flagExp2Dpst4 == undefined) {
            RagExp2 = 0;
			IagExp2 = 0;
		} else {
			if(flagExp2Dpst5 == true) {
				CountRes++;
			}
			if(flagExp2Dpst6 == true) {
				CountRes++;
			}
			if(flagExp2Dpst7 == true) {
				CountRes++;
			}
			if(flagExp2Dpst8 == true) {
				CountRes++;
			}
			if(flagExp2Dpst9 == true) {
				CountRes++;
			}
		}
		if(CountRes == 0) {
			RLoadExp2 = 0;
			IagExp2 = 0;
		} else {
			RLoadExp2 = 350 / CountRes;
			CountRes = 0;
			//console.log("Total Load Resisteance :  " + RLoadExp2);
		}
		if(RLoadExp2 != 0 && ActualSpeed !=0) {
			IagExp2 = Vt / RLoadExp2;
			//ActVt = Vt - (IagExp2 * 3);
			console.log("ActVt switchDown1 :  " + ActVt);
		}
		console.log("current in generator ammeter IagExp2 : " + IagExp2);
		ActVt = Vt - (IagExp2 * 3);
		console.log(" Actual voltage of generator Vt switchDown1 :" + ActVt);
		
		genOp = ActVt * IagExp2;
		//console.log(" genertor o/p is :" + genOp);
		IfgExp2 = eval(VfgExp2) / eval(shuntResistance);
		//console.log(" Field current of generator  IfgExp2 : " + IfgExp2);
		Exp2GencorL = this.calculatePc(IfgExp2);
		//console.log("core loss of Generator :" + Exp2GencorL);
		genIpExp2 = genOp + 0 + Exp2GencorL + (IagExp2 * IagExp2 * 3);
		//console.log(" Generator i/p : " + genIpExp2);
		Exp2MotcorL = this.calculatePc(IfExp2);
		//console.log("core loss of Motor : " + Exp2MotcorL);
		Exp2motIp = genIpExp2 + 0 + Exp2MotcorL;
		//console.log("Motor i/p :" + Exp2motIp);
		Ia = Exp2motIp / count2;
		//console.log(" Rough current Ia :  " + Ia);
		ActmotIpExp2 = Exp2motIp + (Ia * Ia * 3);
		//console.log("Actual motor i/p :" + ActmotIpExp2);
		if(ActualSpeed = 0) {
			ActIa = 0;
			ActVt=0;
		}else{
		ActIa = ActmotIpExp2 / count2;
		}
		if(count2 == 0) {
			ActIa = 0;
		}
		//console.log("voltage of alternator Va : " + count2);
		//console.log("Actual current   ActIa  : " + ActIa);
		//console.log("kc value of motor Exp2MotKcVal : " + Exp2MotKcVal);
		ActualSpeed = (count2 - (ActIa * 3)) / Exp2MotKcVal;
		//console.log(" Actual Speed N : " + ActualSpeed);
		if(ActualSpeed>2000)
			{
				ActualSpeed = 2000;
			    VfExp2 = VfExp2;
			    IfExp2 = IfExp2;
				
			}   

		if(ActualSpeed < 0) {
			ActualSpeed = 0;
		}
		Exp2MotEff = genIpExp2 / ActmotIpExp2;
		//console.log("Efficiency of motor : " + Exp2MotEff);
		Torque = Exp2MotKcVal * ActIa;
		//console.log("Torque is :"+Torque);
		console.log("ActVt switchDown1 :  " + ActVt);
		exp2canvas.switchUp1(count2, IagExp2, ActIa, ActualSpeed, ActVt, VfgExp2, IfgExp2);
		if(ActualSpeed==2000)
			{
				alert("Speed is Exceeding it's limit!!!");
			}
	}
	var exp2DataStoreSwitchUp2 = function(flagExp2Dpst4, flagExp2Dpst5, flagExp2Dpst6, flagExp2Dpst7, flagExp2Dpst8, flagExp2Dpst9) {
		if(VfgExp2 < 300)
			VfgExp2 = VfgExp2 + 5;
		IfgExp2 = eval(VfgExp2) / eval(shuntResistance);
		console.log("ActVt switchUp2 :  " + ActVt);
		//console.log("Generator Current IfgExp2  : " + IfgExp2);
		ampere2 = eval(count2) / eval(shuntResistance);
		Exp2MotKcVal = this.calculateKc(IfExp2);
		//console.log("Kc Value of motor Exp2MotKcVal : " + Exp2MotKcVal);
		//console.log("ActIa :"+ActIa);
		speed = (count2 - (ActIa * 3)) / Exp2MotKcVal;
		//get the speed( N )
		//console.log("rough speed is : " + speed);
		//Rough speed
		GenKcVal = this.calculateKc(IfgExp2);
		//console.log("Kc value of generator GenKcVal : " + GenKcVal);
		Ea = GenKcVal * speed;
		//console.log("Back emf of generator Ea :  " + Ea);
		Vt = Ea;
		console.log("ActVt switchUp2 :  " + ActVt);
		console.log("ActVt switchUp2 :  " + ActVt);
		if(flagExp2Dpst4 == false || flagExp2Dpst4 == undefined) {
            RagExp2 = 0;
			IagExp2 = 0;
		} else {
			if(flagExp2Dpst5 == true) {
				CountRes++;
			}
			if(flagExp2Dpst6 == true) {
				CountRes++;
			}
			if(flagExp2Dpst7 == true) {
				CountRes++;
			}
			if(flagExp2Dpst8 == true) {
				CountRes++;
			}
			if(flagExp2Dpst9 == true) {
				CountRes++;
			}
		}
		if(CountRes == 0) {
			RLoadExp2 = 0;
			IagExp2 = 0;
		} else {
			RLoadExp2 = 350 / CountRes;
			CountRes = 0;
			//console.log("Total Load Resisteance :  " + RLoadExp2);
		}
		if(RLoadExp2 != 0 && ActualSpeed !=0) {
			IagExp2 = Vt / RLoadExp2;
			//ActVt = Vt - (IagExp2 * 3);
		}
		//console.log("current in generator ammeter IagExp2 : " + IagExp2);
		ActVt = Vt - (IagExp2 * 3);
		console.log(" Actual voltage of generator Vt :" + ActVt);
		genOp = ActVt * IagExp2;
		//console.log(" genertor o/p is :" + genOp);
		IfgExp2 = eval(VfgExp2) / eval(shuntResistance);
		//console.log(" Field current of generator  IfgExp2 : " + IfgExp2);
		Exp2GencorL = this.calculatePc(IfgExp2);
		//console.log("core loss of Generator :" + Exp2GencorL);
		genIpExp2 = genOp + 0 + Exp2GencorL + (IagExp2 * IagExp2 * 3);
		//console.log(" Generator i/p : " + genIpExp2);
		Exp2MotcorL = this.calculatePc(IfExp2);
		//console.log("core loss of Motor : " + Exp2MotcorL);
		Exp2motIp = genIpExp2 + 0 + Exp2MotcorL;
		//console.log("Motor i/p :" + Exp2motIp);
		Ia = Exp2motIp / count2;
		//console.log(" Rough current Ia :  " + Ia);
		ActmotIpExp2 = Exp2motIp + (Ia * Ia * 3);
		//console.log("Actual motor i/p :" + ActmotIpExp2);
		if(ActualSpeed = 0) {
			ActIa = 0;
			ActVt=0;
		}else{
		ActIa = ActmotIpExp2 / count2;
		}
		if(count2 == 0) {
			ActIa = 0;
		}
		//console.log("voltage of alternator Va : " + count2);
		//console.log("Actual current   ActIa  : " + ActIa);
		//console.log("kc value of motor Exp2MotKcVal : " + Exp2MotKcVal);
		ActualSpeed = (count2 - (ActIa * 3)) / Exp2MotKcVal;
		//console.log(" Actual Speed N : " + ActualSpeed);
		if(ActualSpeed>2000)
			{
				ActualSpeed = 2000;
			    VfExp2 = VfExp2;
			    IfExp2 = IfExp2;
				
			}   


		if(ActualSpeed < 0) {
			ActualSpeed = 0;
		}
		Exp2MotEff = genIpExp2 / ActmotIpExp2;
		//console.log("Efficiency of motor : " + Exp2MotEff);
		Torque = Exp2MotKcVal * ActIa;
		//console.log("Torque is :"+Torque);
		console.log("ActVt switchUP2 :  " + ActVt);
		exp2canvas.switchUp2(VfgExp2, IfgExp2, IagExp2, ActIa, ActualSpeed, ActVt);
		
   if(ActualSpeed==2000)
			{
				alert("Speed is Exceeding it's limit!!!");
			}
	}
	var exp2DataStoreSwitchDown2 = function(flagExp2Dpst4, flagExp2Dpst5, flagExp2Dpst6, flagExp2Dpst7, flagExp2Dpst8, flagExp2Dpst9) {
		if(VfgExp2 > 0)
			VfgExp2 = VfgExp2 - 5;
		IfgExp2 = eval(VfgExp2) / eval(shuntResistance);
		console.log("ActVt switchDown2 :  " + ActVt);
		//console.log("Generator Current IfgExp2  : " + IfgExp2);
		ampere2 = eval(count2) / eval(shuntResistance);
		Exp2MotKcVal = this.calculateKc(IfExp2);
		//console.log("Kc Value of motor Exp2MotKcVal : " + Exp2MotKcVal);
		//console.log("ActIa :"+ActIa);
		speed = (count2 - (ActIa * 3)) / Exp2MotKcVal;
		//get the speed( N )
		//console.log("rough speed is : " + speed);
		//Rough speed
		GenKcVal = this.calculateKc(IfgExp2);
		//console.log("Kc value of generator GenKcVal : " + GenKcVal);
		Ea = GenKcVal * speed;
		//console.log("Back emf of generator Ea :  " + Ea);
		Vt = Ea;
		console.log("ActVt switchDown2 :  " + ActVt);
		if(flagExp2Dpst4 == false || flagExp2Dpst4 == undefined) {
            RagExp2 = 0;
			IagExp2 = 0;
		} else {
			if(flagExp2Dpst5 == true) {
				CountRes++;
			}
			if(flagExp2Dpst6 == true) {
				CountRes++;
			}
			if(flagExp2Dpst7 == true) {
				CountRes++;
			}
			if(flagExp2Dpst8 == true) {
				CountRes++;
			}
			if(flagExp2Dpst9 == true) {
				CountRes++;
			}
		}
		if(CountRes == 0) {
			RLoadExp2 = 0;
			IagExp2 = 0;
		} else {
			RLoadExp2 = 350 / CountRes;
			CountRes = 0;
			//console.log("Total Load Resisteance :  " + RLoadExp2);
		}
		if(RLoadExp2 != 0 && ActualSpeed !=0) {
			IagExp2 = Vt / RLoadExp2;
			//ActVt = Vt - (IagExp2 * 3);
			//console.log("ActVt switchDown2 :  " + ActVt);
		}
		ActVt = Vt - (IagExp2 * 3);
		console.log("current in generator ammeter IagExp2 : " + IagExp2);
		
		console.log(" Actual voltage of generator Vt :" + ActVt);
		genOp = ActVt * IagExp2;
		//console.log(" genertor o/p is :" + genOp);
		IfgExp2 = eval(VfgExp2) / eval(shuntResistance);
		//console.log(" Field current of generator  IfgExp2 : " + IfgExp2);
		Exp2GencorL = this.calculatePc(IfgExp2);
		//console.log("core loss of Generator :" + Exp2GencorL);
		genIpExp2 = genOp + 0 + Exp2GencorL + (IagExp2 * IagExp2 * 3);
		//console.log(" Generator i/p : " + genIpExp2);
		Exp2MotcorL = this.calculatePc(IfExp2);
		//console.log("core loss of Motor : " + Exp2MotcorL);
		Exp2motIp = genIpExp2 + 0 + Exp2MotcorL;
		//console.log("Motor i/p :" + Exp2motIp);
		Ia = Exp2motIp / count2;
		//console.log(" Rough current Ia :  " + Ia);
		ActmotIpExp2 = Exp2motIp + (Ia * Ia * 3);
		//console.log("Actual motor i/p :" + ActmotIpExp2);
		if(ActualSpeed = 0) {
			ActIa = 0;
			ActVt=0;
		}else{
		ActIa = ActmotIpExp2 / count2;
		}
		if(count2 == 0) {
			ActIa = 0;
		}
		//console.log("voltage of alternator Va : " + count2);
		//console.log("Actual current   ActIa  : " + ActIa);
		//console.log("kc value of motor Exp2MotKcVal : " + Exp2MotKcVal);
		ActualSpeed = (count2 - (ActIa * 3)) / Exp2MotKcVal;
		//console.log(" Actual Speed N : " + ActualSpeed);
		if(ActualSpeed>2000)
			{
				ActualSpeed = 2000;
			    VfExp2 = VfExp2;
			    IfExp2 = IfExp2;
				
			}   
		if(ActualSpeed < 0) {
			ActualSpeed = 0;
		}
		Exp2MotEff = genIpExp2 / ActmotIpExp2;
		//console.log("Efficiency of motor : " + Exp2MotEff);
		Torque = Exp2MotKcVal * ActIa;
		//console.log("Torque is :"+Torque);
		console.log("ActVt switchDown2 :  " + ActVt);
		exp2canvas.switchDown2(VfgExp2, IfgExp2, IagExp2, ActIa, ActualSpeed, ActVt);
		
        if(ActualSpeed==2000)
			{
				alert("Speed is Exceeding it's limit!!!");
			}
	}
	var exp2DataStoreDpst = function(flagExp2Dpst1, flagExp2Dpst2, flagExp2Dpst3, flagExp2Dpst4, flagExp2Dpst5, flagExp2Dpst6, flagExp2Dpst7, flagExp2Dpst8, flagExp2Dpst9) {
		if(flagExp2Dpst1 == true && flagExp2Dpst2 == false) {//alert("hih");
			count2 = 0
			if(count2 > 0)
				count2 = count2 - 5;
			ampere2 = eval(count2) / eval(shuntResistance);
		Exp2MotKcVal = this.calculateKc(IfExp2);
		//console.log("Kc Value of motor Exp2MotKcVal : " + Exp2MotKcVal);
		//console.log("ActIa :"+ActIa);
		console.log("ActVt storeDpst :  " + ActVt);
		speed = (count2 - (ActIa * 3)) / Exp2MotKcVal;
		//get the speed( N )
		//console.log("rough speed is : " + speed);
		//Rough speed
		GenKcVal = this.calculateKc(IfgExp2);
		//console.log("Kc value of generator GenKcVal : " + GenKcVal);
		Ea = GenKcVal * speed;
		//console.log("Back emf of generator Ea :  " + Ea);
		Vt = Ea;
		console.log("ActVt storeDpst :  " + ActVt);
		if(flagExp2Dpst4 == false || flagExp2Dpst4 == undefined) {
            RagExp2 = 0;
			IagExp2 = 0;
		} else {
			if(flagExp2Dpst5 == true) {
				CountRes++;
			}
			if(flagExp2Dpst6 == true) {
				CountRes++;
			}
			if(flagExp2Dpst7 == true) {
				CountRes++;
			}
			if(flagExp2Dpst8 == true) {
				CountRes++;
			}
			if(flagExp2Dpst9 == true) {
				CountRes++;
			}
		}
		if(CountRes == 0) {
			RLoadExp2 = 0;
			IagExp2 = 0;
		} else {
			RLoadExp2 = 350 / CountRes;
			CountRes = 0;
			//console.log("Total Load Resisteance :  " + RLoadExp2);
		}
		if(RLoadExp2 != 0 && ActualSpeed !=0) {
			IagExp2 = Vt / RLoadExp2;
		//	ActVt = Vt - (IagExp2 * 3);
			console.log("ActVt storeDpst :  " + ActVt);
		}
		ActVt = Vt - (IagExp2 * 3);
		console.log("current in generator ammeter IagExp2 : " + IagExp2);
		
		console.log(" Actual voltage of generator Vt :" + ActVt);
		genOp = ActVt * IagExp2;
		//console.log(" genertor o/p is :" + genOp);
		IfgExp2 = eval(VfgExp2) / eval(shuntResistance);
		//console.log(" Field current of generator  IfgExp2 : " + IfgExp2);
		Exp2GencorL = this.calculatePc(IfgExp2);
		//console.log("core loss of Generator :" + Exp2GencorL);
		genIpExp2 = genOp + 0 + Exp2GencorL + (IagExp2 * IagExp2 * 3);
		//console.log(" Generator i/p : " + genIpExp2);
		Exp2MotcorL = this.calculatePc(IfExp2);
		//console.log("core loss of Motor : " + Exp2MotcorL);
		Exp2motIp = genIpExp2 + 0 + Exp2MotcorL;
		//console.log("Motor i/p :" + Exp2motIp);
		Ia = Exp2motIp / count2;
		//console.log(" Rough current Ia :  " + Ia);
		ActmotIpExp2 = Exp2motIp + (Ia * Ia * 3);
		//console.log("Actual motor i/p :" + ActmotIpExp2);
		if(ActualSpeed = 0) {
			ActIa = 0;
			ActVt=0;
		}else{
		ActIa = ActmotIpExp2 / count2;
		}
		if(count2 == 0) {
			ActIa = 0;
		}
		//console.log("voltage of alternator Va : " + count2);
		//console.log("Actual current   ActIa  : " + ActIa);
		//console.log("kc value of motor Exp2MotKcVal : " + Exp2MotKcVal);
		ActualSpeed = (count2 - (ActIa * 3)) / Exp2MotKcVal;
		//console.log(" Actual Speed N : " + ActualSpeed);
		if(ActualSpeed>2000)
			{
				ActualSpeed = 2000;
			    VfExp2 = VfExp2;
			    IfExp2 = IfExp2;
				
			}   

		if(ActualSpeed < 0) {
			ActualSpeed = 0;
		}
		Exp2MotEff = genIpExp2 / ActmotIpExp2;
		//console.log("Efficiency of motor : " + Exp2MotEff);
		Torque = Exp2MotKcVal * ActIa;
		//console.log("Torque is :"+Torque);
		console.log("ActVt storeDpst :  " + ActVt);
		exp2canvas.switchUp1(count2, IagExp2, ActIa, ActualSpeed, ActVt, VfgExp2, IfgExp2);
		
       if(ActualSpeed==2000)
			{
				alert("Speed is Exceeding it's limit!!!");
			}
			
		} else if(flagExp2Dpst1 == false && flagExp2Dpst2 == false) {
			VfExp2 = 0;
			IfExp2 = 0;
			count2 = 0;
			ActIa = 0;
            exp2canvas.switchUp(VfExp2, IfExp2, ActualSpeed);
            console.log("ActVt storeDpst1 false :  " + ActVt);
			exp2canvas.switchUp1(count2, IagExp2, ActIa, ActualSpeed, ActVt, VfgExp2, IfgExp2);
			}

		if(flagExp2Dpst3 == false) {
			VfgExp2 = 0;
			IfgExp2 = 0;
		}
		console.log("ActVt storeDpst :  " + ActVt);
		exp2canvas.switchUp2(VfgExp2, IfgExp2, IagExp2, ActIa, ActualSpeed, ActVt);
		}
	var exp2DataStoreMainLoad = function(flagExp2Dpst1, flagExp2Dpst2, flagExp2Dpst3, flagExp2Dpst4, flagExp2Dpst5, flagExp2Dpst6, flagExp2Dpst7, flagExp2Dpst8, flagExp2Dpst9) {
		console.log("ActVt mailLoad enter :  " + ActVt);
		if(flagExp2Dpst1 == true && flagExp2Dpst2 == true && VfExp2 != 0 && count2 != 0) {
			//console.log("ActVt mailLoad after true:  " + ActVt);
		   ampere2 = eval(count2) / eval(shuntResistance);
		Exp2MotKcVal = this.calculateKc(IfExp2);
		//console.log("Kc Value of motor Exp2MotKcVal : " + Exp2MotKcVal);
		//console.log("ActIa :"+ActIa);
		speed = (count2 - (ActIa * 3)) / Exp2MotKcVal;
		//get the speed( N )
		//console.log("rough speed is : " + speed);
		//Rough speed
		GenKcVal = this.calculateKc(IfgExp2);
		//console.log("Kc value of generator GenKcVal : " + GenKcVal);
		Ea = GenKcVal * speed;
		//console.log("Back emf of generator Ea :  " + Ea);
		Vt = Ea;
		//console.log("ActVt mailLoad if storeDpst1 true :  " + ActVt);
		if(flagExp2Dpst4 == false || flagExp2Dpst4 == undefined) {
            RagExp2 = 0;
			IagExp2 = 0;
			CountRes=0;
		} else {
			if(flagExp2Dpst5 == true) {
				CountRes++;
				console.log("ActVt mailLoad1 :  " + ActVt);
			}
			if(flagExp2Dpst6 == true) {
				CountRes++;
				console.log("ActVt mailLoad2 :  " + ActVt);
			}
			if(flagExp2Dpst7 == true) {
				CountRes++;
				console.log("ActVt mailLoad 3:  " + ActVt);
			}
			if(flagExp2Dpst8 == true) {
				CountRes++;
				console.log("ActVt mailLoad4 :  " + ActVt);
			}
			if(flagExp2Dpst9 == true) {
				CountRes++;
				console.log("ActVt mailLoad :  " + ActVt);
			}
		}
		if(CountRes == 0) {
			RLoadExp2 = 0;
			IagExp2 = 0;
		} else {
			RLoadExp2 = 350 / CountRes;
			CountRes = 0;
			//console.log("Total Load Resisteance :  " + RLoadExp2);
		}
		if(RLoadExp2 != 0 && ActualSpeed !=0) {
			IagExp2 = Vt / RLoadExp2;
			//ActVt = Vt - (IagExp2 * 3);
			console.log("ActVt mailLoad :  " + ActVt);
		}
		ActVt = Vt - (IagExp2 * 3);
		console.log("current in generator ammeter IagExp2 : " + IagExp2);
		
		console.log(" Actual voltage of generator Vt :" + ActVt);
		genOp = ActVt * IagExp2;
		//console.log(" genertor o/p is :" + genOp);
		IfgExp2 = eval(VfgExp2) / eval(shuntResistance);
		//console.log(" Field current of generator  IfgExp2 : " + IfgExp2);
		Exp2GencorL = this.calculatePc(IfgExp2);
		//console.log("core loss of Generator :" + Exp2GencorL);
		genIpExp2 = genOp + 0 + Exp2GencorL + (IagExp2 * IagExp2 * 3);
		//console.log(" Generator i/p : " + genIpExp2);
		Exp2MotcorL = this.calculatePc(IfExp2);
		//console.log("core loss of Motor : " + Exp2MotcorL);
		Exp2motIp = genIpExp2 + 0 + Exp2MotcorL;
		//console.log("Motor i/p :" + Exp2motIp);
		Ia = Exp2motIp / count2;
		//console.log(" Rough current Ia :  " + Ia);
		ActmotIpExp2 = Exp2motIp + (Ia * Ia * 3);
		//console.log("Actual motor i/p :" + ActmotIpExp2);
		if(ActualSpeed = 0) {
			ActIa = 0;
			ActVt=0;
		}else{
		ActIa = ActmotIpExp2 / count2;
		}
		if(count2 == 0) {
			ActIa = 0;
		}
		//console.log("voltage of alternator Va : " + count2);
		//console.log("Actual current   ActIa  : " + ActIa);
		//console.log("kc value of motor Exp2MotKcVal : " + Exp2MotKcVal);
		ActualSpeed = (count2 - (ActIa * 3)) / Exp2MotKcVal;
		//console.log(" Actual Speed N : " + ActualSpeed);
		if(ActualSpeed>2000)
			{
				ActualSpeed = 2000;
			    VfExp2 = VfExp2;
			    IfExp2 = IfExp2;
				
			}   

		if(ActualSpeed < 0) {
			ActualSpeed = 0;
		}
		Exp2MotEff = genIpExp2 / ActmotIpExp2;
		console.log("Efficiency of motor : " + Exp2MotEff);
		Torque = Exp2MotKcVal * ActIa;
		console.log("Torque is :"+Torque);
		//console.log("ActVt mailLoad :  " + ActVt);
		exp2canvas.switchUp1(count2, IagExp2, ActIa, ActualSpeed, ActVt, VfgExp2, IfgExp2);
		

      if(ActualSpeed==2000)
			{
				alert("Speed is Exceeding it's limit!!!");
			}
	       }
	}

	ds.calculateCoreLoss = calculateCoreLoss;
	ds.exp2DataStoreSwitchUp = exp2DataStoreSwitchUp;
	ds.exp2DataStoreSwitchDown = exp2DataStoreSwitchDown;
	ds.exp2DataStoreSwitchUp1 = exp2DataStoreSwitchUp1;
	ds.exp2DataStoreSwitchDown1 = exp2DataStoreSwitchDown1;
	ds.exp2DataStoreSwitchUp2 = exp2DataStoreSwitchUp2;
	ds.exp2DataStoreSwitchDown2 = exp2DataStoreSwitchDown2;
	ds.exp2DataStoreDpst = exp2DataStoreDpst;
	ds.exp2DataStoreMainLoad = exp2DataStoreMainLoad;
	ds.exp2StoreData = exp2StoreData;
	ds.calculatePc=calculatePc;
	ds.exp2DataClearData=exp2DataClearData;
	ds.calculateKc=calculateKc;

})(datastore2);

