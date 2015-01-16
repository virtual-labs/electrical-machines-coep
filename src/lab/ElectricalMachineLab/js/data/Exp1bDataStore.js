var ds = datastore1b = ds || {};
var model = new exp_Model(); (function() {

	var ampere = 0, count = 0, VaExp1b = 0, ViExp1b = 0, IfgExp1b = 0;
	var Exp1bMotEff = 0, GenEff = 0, ipmot = 0, opmot = 0;
	var FLossExp1b = 100;
	var RaExp1b = 3;
	var RfaExp1b = 96;
	var RfaExp7b = 180;
	var Ishexp1b, KcValexp1b, Ebexp1b, Speedexp1b, InGenExp1b, GenOutExp1b, CpLossGenExp1b, CLossGenExp1b, TLossMotExp1b, ACpLossMotExp1b, SCpLossMotExp1b, CLossMotExp1b, VinIin, Iin, IaExp1b, CorrectVinIin, CorrectIin = 0, CorrectIaExp1b, CorrectEb, CorrectKcValexp1b, CorrectSpeedexp1b = 0, KcVal1Exp1b, EaExp1b, IagExp1b = 0, RLoadExp1b, CountLoadRes = 0, VtExp1b = 0;
	var exp1bStoreFlag = false;
	var shuntResistanceExp1b = 192;

	var exp1bStoreData = function() {
		exp1bStoreFlag = true;
		if(exp1bStoreFlag == true) {
			model.graphGenoutput(GenOutExp1b);
			model.graphGeninput(IagExp1b);
			model.graphAmpereFieldExp1b(IfgExp1b);
			model.graphVoltageFieldExp1b(VaExp1b);
			model.graphAmpereMotorExp1b(CorrectIin);
			model.graphVoltageMotorExp1b(ViExp1b);
			model.graphVoltageGenExp1b(VtExp1b);
			model.graphSpeedExp1b(CorrectSpeedexp1b);
			model.graphBackEmfExp1b(EaExp1b);
			model.graphOutputExp1b(InGenExp1b);
			model.graphEfficiencyExp1b(Exp1bMotEff);
			model.graphGeneratorEff(GenEff);
		}
		exp1bStoreFlag = false;
	}
	var exp1bDataClearData = function(ExpId) {
		var arr = model.get("ampereValue");

		model.clearData();
		var arr1 = model.get("ampereValue");

		var vol = model.get("voltageValue");

		var id = "none";

		graph.graphData(id, ExpId);
		exp1bStoreFlag = false;
	}
	var calculateKc = function(x) {
		var y = 0.012 * Math.pow(x, 4) - 0.047 * Math.pow(x, 3) - 0.0017 * Math.pow(x, 2) + 0.23 * x + 0.0056;
		return y;
	}
	var exp1bDataStoreArmatureSwitchUp = function(flagExp1bMainLoad, flagExp1bLoad1, flagExp1bLoad2, flagExp1bLoad3, flagExp1bLoad4, flagExp1bLoad5) {

		if(VaExp1b < 300)
			VaExp1b += 5;
		IfgExp1b = eval(VaExp1b) / eval(RfaExp1b);

		exp1bcanvas.armatureSwitch(IfgExp1b, VaExp1b);
		Ishexp1b = ViExp1b / shuntResistanceExp1b;
		KcValexp1b = this.calculateKc(Ishexp1b);
		Ebexp1b = ViExp1b;
		Speedexp1b = Ebexp1b / KcValexp1b;

		if(Speedexp1b < 730) {
			FLossExp1b = 0;
		}
		KcVal1Exp1b = this.calculateKc(IfgExp1b);
		EaExp1b = KcVal1Exp1b * Speedexp1b;

		if(flagExp1bMainLoad == false || flagExp1bMainLoad == undefined) {
			RagExp1b = 0;
			IagExp1b = 0;
		} else {
			if(flagExp1bLoad1 == true) {
				CountLoadRes++;
			}
			if(flagExp1bLoad2 == true) {
				CountLoadRes++;
			}
			if(flagExp1bLoad3 == true) {
				CountLoadRes++;
			}
			if(flagExp1bLoad4 == true) {
				CountLoadRes++;
			}
			if(flagExp1bLoad5 == true) {
				CountLoadRes++;
			}
		}
		if(CountLoadRes == 0) {
			RLoadExp1b = 0;
			IagExp1b = 0;
		} else {
			RLoadExp1b = 350 / CountLoadRes;
			CountLoadRes = 0;

		}
		if(RLoadExp1b != 0) {
			IagExp1b = EaExp1b / RLoadExp1b;
		}
		VtExp1b = EaExp1b - IagExp1b * RaExp1b;
		GenOutExp1b = VtExp1b * IagExp1b;
		//console.log("VtExp1b:"+VtExp1b);
		//console.log("IagExp1b:"+IagExp1b);
		//console.log("GenOutExp1b:"+GenOutExp1b);

		CpLossGenExp1b = Math.pow(IagExp1b, 2) * RaExp1b;
		CLossGenExp1b = this.calculateKc(IfgExp1b);
		InGenExp1b = GenOutExp1b + FLossExp1b + CpLossGenExp1b + CLossGenExp1b;
		//console.log("InGenExp1b :"+InGenExp1b);
		SCpLossMotExp1b = Math.pow(Ishexp1b, 2) * shuntResistanceExp1b;
		CLossMotExp1b = this.calculateCoreLoss(Ishexp1b);
		TLossMotExp1b = FLossExp1b + SCpLossMotExp1b + CLossMotExp1b;
		VinIin = InGenExp1b + TLossMotExp1b;
		//console.log("VinIin : " + VinIin);
		if(ViExp1b == 0) {
			Iin = 0;
		} else {
			Iin = VinIin / ViExp1b;
		}
		IaExp1b = Iin - Ishexp1b;
		ACpLossMotExp1b = Math.pow(IaExp1b, 2) * RaExp1b;
		CorrectVinIin = VinIin + ACpLossMotExp1b;

		if(ViExp1b == 0) {
			CorrectIin = 0;
		} else {
			CorrectIin = CorrectVinIin / ViExp1b;
			// correct Motor Iin
		}
		CorrectIaExp1b = CorrectIin - Ishexp1b;
		CorrectEb = ViExp1b - (CorrectIaExp1b * RaExp1b);
		CorrectKcValexp1b = this.calculateKc(Ishexp1b);
		CorrectSpeedexp1b = CorrectEb / CorrectKcValexp1b;
		if(CorrectSpeedexp1b < 0) {
			CorrectSpeedexp1b = 0;
		}
		Exp1bMotEff = GenOutExp1b / InGenExp1b;
		console.log("MotEff:" + Exp1bMotEff);
		
		exp1bcanvas.motorSwitch(CorrectIin, IagExp1b, ViExp1b, VtExp1b, CorrectSpeedexp1b);

	}
	var exp1bDataStoreArmatureSwitchDown = function(flagExp1bMainLoad, flagExp1bLoad1, flagExp1bLoad2, flagExp1bLoad3, flagExp1bLoad4, flagExp1bLoad5) {
		if(VaExp1b > 0)
			VaExp1b -= 5;
		IfgExp1b = eval(VaExp1b) / eval(RfaExp1b);
		exp1bcanvas.armatureSwitch(IfgExp1b, VaExp1b);
		Ishexp1b = ViExp1b / shuntResistanceExp1b;
		KcValexp1b = this.calculateKc(Ishexp1b);
		Ebexp1b = ViExp1b;
		// approximate value Eb
		Speedexp1b = Ebexp1b / KcValexp1b;
		// approximate Speed

		if(Speedexp1b < 730) {
			FLossExp1b = 0;
		}
		//console.log("IfgExp1b: " + IfgExp1b);
		KcVal1Exp1b = this.calculateKc(IfgExp1b);
		EaExp1b = KcVal1Exp1b * Speedexp1b;

		if(flagExp1bMainLoad == false || flagExp1bMainLoad == undefined) {
			RagExp1b = 0;
			IagExp1b = 0;
		} else {
			if(flagExp1bLoad1 == true) {
				CountLoadRes++;
			}
			if(flagExp1bLoad2 == true) {
				CountLoadRes++;
			}
			if(flagExp1bLoad3 == true) {
				CountLoadRes++;
			}
			if(flagExp1bLoad4 == true) {
				CountLoadRes++;
			}
			if(flagExp1bLoad5 == true) {
				CountLoadRes++;
			}
		}
		if(CountLoadRes == 0) {
			RLoadExp1b = 0;
			IagExp1b = 0;
		} else {
			RLoadExp1b = 350 / CountLoadRes;
			CountLoadRes = 0;

		}
		if(RLoadExp1b != 0) {
			IagExp1b = EaExp1b / RLoadExp1b;
		}
		VtExp1b = EaExp1b - IagExp1b * RaExp1b;
		GenOutExp1b = VtExp1b * IagExp1b;
		CpLossGenExp1b = Math.pow(IagExp1b, 2) * RaExp1b;
		CLossGenExp1b = this.calculateKc(IfgExp1b);
		InGenExp1b = GenOutExp1b + FLossExp1b + CpLossGenExp1b + CLossGenExp1b;
		SCpLossMotExp1b = Math.pow(Ishexp1b, 2) * shuntResistanceExp1b;
		CLossMotExp1b = this.calculateCoreLoss(Ishexp1b);
		TLossMotExp1b = FLossExp1b + SCpLossMotExp1b + CLossMotExp1b;
		VinIin = InGenExp1b + TLossMotExp1b;

		if(ViExp1b == 0) {
			Iin = 0;
		} else {
			Iin = VinIin / ViExp1b;
		}
		IaExp1b = Iin - Ishexp1b;
		ACpLossMotExp1b = Math.pow(IaExp1b, 2) * RaExp1b;
		CorrectVinIin = VinIin + ACpLossMotExp1b;

		if(ViExp1b == 0) {
			CorrectIin = 0;
		} else {
			CorrectIin = CorrectVinIin / ViExp1b;
		}
		CorrectIaExp1b = CorrectIin - Ishexp1b;
		CorrectEb = ViExp1b - (CorrectIaExp1b * RaExp1b);
		CorrectKcValexp1b = this.calculateKc(Ishexp1b);
		CorrectSpeedexp1b = CorrectEb / CorrectKcValexp1b;
		if(CorrectSpeedexp1b < 0) {
			CorrectSpeedexp1b = 0;
		}
		Exp1bMotEff = GenOutExp1b / InGenExp1b;
		//motor efficiency

		exp1bcanvas.motorSwitch(CorrectIin, IagExp1b, ViExp1b, VtExp1b, CorrectSpeedexp1b);
	}
	var exp1bDataStoreMotorSwitchUp = function(flagExp1bMainLoad, flagExp1bLoad1, flagExp1bLoad2, flagExp1bLoad3, flagExp1bLoad4, flagExp1bLoad5) {
		if(ViExp1b < 500)
			ViExp1b += 2;
		//			console.log("ViExp1b:"+ViExp1b);
		Ishexp1b = ViExp1b / shuntResistanceExp1b;
		KcValexp1b = this.calculateKc(Ishexp1b);
		Ebexp1b = ViExp1b;
		Speedexp1b = Ebexp1b / KcValexp1b;

		if(Speedexp1b < 730) {
			FLossExp1b = 0;
		}
		KcVal1Exp1b = this.calculateKc(IfgExp1b);
		EaExp1b = KcVal1Exp1b * Speedexp1b;

		if(flagExp1bMainLoad == false || flagExp1bMainLoad == undefined) {
			RagExp1b = 0;
			IagExp1b = 0;
		} else {
			if(flagExp1bLoad1 == true) {
				CountLoadRes++;
			}
			if(flagExp1bLoad2 == true) {
				CountLoadRes++;
			}
			if(flagExp1bLoad3 == true) {
				CountLoadRes++;
			}
			if(flagExp1bLoad4 == true) {
				CountLoadRes++;
			}
			if(flagExp1bLoad5 == true) {
				CountLoadRes++;
			}
		}
		if(CountLoadRes == 0) {
			RLoadExp1b = 0;
			IagExp1b = 0;
		} else {
			RLoadExp1b = 350 / CountLoadRes;
			CountLoadRes = 0;

		}
		if(RLoadExp1b != 0) {
			IagExp1b = EaExp1b / RLoadExp1b;

		}
		//console.log("IagExp1b:"+IagExp1b);
		VtExp1b = EaExp1b - IagExp1b * RaExp1b;
		GenOutExp1b = VtExp1b * IagExp1b;
		// Generator output

		CpLossGenExp1b = Math.pow(IagExp1b, 2) * RaExp1b;
		CLossGenExp1b = this.calculateKc(IfgExp1b);
		InGenExp1b = GenOutExp1b + FLossExp1b + CpLossGenExp1b + CLossGenExp1b;
		SCpLossMotExp1b = Math.pow(Ishexp1b, 2) * shuntResistanceExp1b;
		CLossMotExp1b = this.calculateCoreLoss(Ishexp1b);
		TLossMotExp1b = FLossExp1b + SCpLossMotExp1b + CLossMotExp1b;
		VinIin = InGenExp1b + TLossMotExp1b;
		Iin = VinIin / ViExp1b;
		IaExp1b = Iin - Ishexp1b;
		ACpLossMotExp1b = Math.pow(IaExp1b, 2) * RaExp1b;
		CorrectVinIin = VinIin + ACpLossMotExp1b;
		CorrectIin = (CorrectVinIin / ViExp1b).toFixed(2);
		//console.log("CorrectIin:"+CorrectIin);
		
		CorrectIaExp1b = CorrectIin - Ishexp1b;
		CorrectEb = ViExp1b - (CorrectIaExp1b * RaExp1b);
		CorrectKcValexp1b = this.calculateKc(Ishexp1b);
		CorrectSpeedexp1b = CorrectEb / CorrectKcValexp1b;
		if(CorrectSpeedexp1b < 0) {
			CorrectSpeedexp1b = 0;
		}
		Exp1bMotEff = GenOutExp1b / InGenExp1b;
		//motor efficiency
		//console.log("Exp1bMotEff:"+Exp1bMotEff);

		exp1bcanvas.motorSwitch(CorrectIin, IagExp1b, ViExp1b, VtExp1b, CorrectSpeedexp1b);

	}
	var exp1bDataStoreMotorSwitchDown = function(flagExp1bMainLoad, flagExp1bLoad1, flagExp1bLoad2, flagExp1bLoad3, flagExp1bLoad4, flagExp1bLoad5) {
		if(ViExp1b > 0)
			ViExp1b -= 2;
		Ishexp1b = ViExp1b / shuntResistanceExp1b;
		KcValexp1b = this.calculateKc(Ishexp1b);
		Ebexp1b = ViExp1b;
		// approximate value Eb
		Speedexp1b = Ebexp1b / KcValexp1b;
		// approximate Speed

		if(Speedexp1b < 730) {
			FLossExp1b = 0;
		}
		KcVal1Exp1b = this.calculateKc(IfgExp1b);
		EaExp1b = KcVal1Exp1b * Speedexp1b;

		if(flagExp1bMainLoad == false || flagExp1bMainLoad == undefined) {
			RagExp1b = 0;
			IagExp1b = 0;
		} else {
			if(flagExp1bLoad1 == true) {
				CountLoadRes++;
			}
			if(flagExp1bLoad2 == true) {
				CountLoadRes++;
			}
			if(flagExp1bLoad3 == true) {
				CountLoadRes++;
			}
			if(flagExp1bLoad4 == true) {
				CountLoadRes++;
			}
			if(flagExp1bLoad5 == true) {
				CountLoadRes++;
			}
		}
		if(CountLoadRes == 0) {
			RLoadExp1b = 0;
			IagExp1b = 0;
		} else {
			RLoadExp1b = 350 / CountLoadRes;
			CountLoadRes = 0;

		}
		if(RLoadExp1b != 0) {
			IagExp1b = EaExp1b / RLoadExp1b;
		}
		VtExp1b = EaExp1b - IagExp1b * RaExp1b;
		GenOutExp1b = VtExp1b * IagExp1b;
		CpLossGenExp1b = Math.pow(IagExp1b, 2) * RaExp1b;
		CLossGenExp1b = this.calculateKc(IfgExp1b);
		InGenExp1b = GenOutExp1b + FLossExp1b + CpLossGenExp1b + CLossGenExp1b;
		SCpLossMotExp1b = Math.pow(Ishexp1b, 2) * shuntResistanceExp1b;
		CLossMotExp1b = this.calculateCoreLoss(Ishexp1b);
		//console.log("Core loss of motor : " + CLossMotExp1b);
		TLossMotExp1b = FLossExp1b + SCpLossMotExp1b + CLossMotExp1b;
		VinIin = InGenExp1b + TLossMotExp1b;

		if(ViExp1b == 0) {
			Iin = 0;
		} else {
			Iin = VinIin / ViExp1b;
		}
		IaExp1b = Iin - Ishexp1b;
		ACpLossMotExp1b = Math.pow(IaExp1b, 2) * RaExp1b;
		CorrectVinIin = VinIin + ACpLossMotExp1b;

		if(ViExp1b == 0) {
			CorrectIin = 0;
		} else {
			CorrectIin = CorrectVinIin / ViExp1b;

		}
		//console.log("CorrectIin : " + CorrectIin);
		CorrectIaExp1b = CorrectIin - Ishexp1b;
		CorrectEb = ViExp1b - (CorrectIaExp1b * RaExp1b);
		CorrectKcValexp1b = this.calculateKc(Ishexp1b);
		CorrectSpeedexp1b = CorrectEb / CorrectKcValexp1b;

		if(CorrectSpeedexp1b < 0) {
			CorrectSpeedexp1b = 0;
		}
		Exp1bMotEff = GenOutExp1b / InGenExp1b;
		//motor efficiency
		
		exp1bcanvas.motorSwitch(CorrectIin, IagExp1b, ViExp1b, VtExp1b, CorrectSpeedexp1b);

	}
	var exp1bDataStoreMainLoad = function(flagExp1bArmature, flagExp1bMotor, flagExp1bMainLoad, flagExp1bLoad1, flagExp1bLoad2, flagExp1bLoad3, flagExp1bLoad4, flagExp1bLoad5) {
		if(flagExp1bMotor == true) {
			Ishexp1b = ViExp1b / shuntResistanceExp1b;
			KcValexp1b = this.calculateKc(Ishexp1b);
			Ebexp1b = ViExp1b;
			Speedexp1b = Ebexp1b / KcValexp1b;
			if(Speedexp1b < 730) {
				FLossExp1b = 0;
			}
			KcVal1Exp1b = this.calculateKc(IfgExp1b);
			EaExp1b = KcVal1Exp1b * Speedexp1b;

			if(flagExp1bMainLoad == false || flagExp1bMainLoad == undefined) {
				RagExp1b = 0;
				IagExp1b = 0;
			} else {
				if(flagExp1bLoad1 == true) {
					CountLoadRes++;
				}
				if(flagExp1bLoad2 == true) {
					CountLoadRes++;
				}
				if(flagExp1bLoad3 == true) {
					CountLoadRes++;
				}
				if(flagExp1bLoad4 == true) {
					CountLoadRes++;
				}
				if(flagExp1bLoad5 == true) {
					CountLoadRes++;
				}
			}
			if(CountLoadRes == 0) {
				RLoadExp1b = 0;
				IagExp1b = 0;
			} else {
				RLoadExp1b = 350 / CountLoadRes;
				CountLoadRes = 0;

			}
			if(RLoadExp1b != 0) {
				IagExp1b = EaExp1b / RLoadExp1b;
			}
			VtExp1b = EaExp1b - IagExp1b * RaExp1b;
			GenOutExp1b = VtExp1b * IagExp1b;
			CpLossGenExp1b = Math.pow(IagExp1b, 2) * RaExp1b;
			CLossGenExp1b = this.calculateKc(IfgExp1b);
			InGenExp1b = GenOutExp1b + FLossExp1b + CpLossGenExp1b + CLossGenExp1b;
			SCpLossMotExp1b = Math.pow(Ishexp1b, 2) * shuntResistanceExp1b;
			CLossMotExp1b = this.calculateCoreLoss(Ishexp1b);
			TLossMotExp1b = FLossExp1b + SCpLossMotExp1b + CLossMotExp1b;
			VinIin = InGenExp1b + TLossMotExp1b;

			if(ViExp1b == 0) {
				Iin = 0;
			} else {
				Iin = VinIin / ViExp1b;
			}
			IaExp1b = Iin - Ishexp1b;
			ACpLossMotExp1b = Math.pow(IaExp1b, 2) * RaExp1b;
			CorrectVinIin = VinIin + ACpLossMotExp1b;
			CorrectIin = CorrectVinIin / ViExp1b;
			//console.log("CorrectIin:" + CorrectIin);

			if(CorrectIin == -Infinity) {
				CorrectIin = 0;
			}
			console.log("CorrectIin:" + CorrectIin);
			CorrectIaExp1b = CorrectIin - Ishexp1b;
			CorrectEb = ViExp1b - (CorrectIaExp1b * RaExp1b);
			CorrectKcValexp1b = this.calculateKc(Ishexp1b);
			CorrectSpeedexp1b = CorrectEb / CorrectKcValexp1b;
			console.log("CorrectSpeedexp1b:" + CorrectSpeedexp1b);
			if(CorrectSpeedexp1b == Infinity) {
				CorrectSpeedexp1b = 0;
			}
			Exp1bMotEff = GenOutExp1b / InGenExp1b;
			//motor efficiency
			
			
			if(CorrectIin==0){
				GenEff=0;
			}
			else{
			ipmot = ViExp1b * CorrectIin;
			console.log("ipmot:"+ipmot)
			opmot = (Exp1bMotEff * ipmot) / 100;
			GenEff = ((IagExp1b * VtExp1b) / opmot) * 100;
			//generator efficiency

			console.log("GenEff" + GenEff);
			}
			exp1bcanvas.motorSwitch(CorrectIin, IagExp1b, ViExp1b, VtExp1b, CorrectSpeedexp1b);
		}
	}
	var exp1bDataStoreDpst = function(flagExp1bArmature, flagExp1bMotor, flagExp1bMainLoad, flagExp1bLoad1, flagExp1bLoad2, flagExp1bLoad3, flagExp1bLoad4, flagExp1bLoad5) {
		if(flagExp1bArmature == true && flagExp1bMotor != true) {
			ViExp1b = 0;
			if(ViExp1b > 0)
				ViExp1b -= 2;
			Ishexp1b = ViExp1b / shuntResistanceExp1b;
			KcValexp1b = this.calculateKc(Ishexp1b);
			Ebexp1b = ViExp1b;
			Speedexp1b = Ebexp1b / KcValexp1b;

			if(Speedexp1b < 730) {
				FLossExp1b = 0;
			}
			KcVal1Exp1b = this.calculateKc(IfgExp1b);
			EaExp1b = KcVal1Exp1b * Speedexp1b;

			if(flagExp1bMainLoad == false || flagExp1bMainLoad == undefined) {
				RagExp1b = 0;
				IagExp1b = 0;
			} else {
				if(flagExp1bLoad1 == true) {
					CountLoadRes++;
				}
				if(flagExp1bLoad2 == true) {
					CountLoadRes++;
				}
				if(flagExp1bLoad3 == true) {
					CountLoadRes++;
				}
				if(flagExp1bLoad4 == true) {
					CountLoadRes++;
				}
				if(flagExp1bLoad5 == true) {
					CountLoadRes++;
				}
			}
			if(CountLoadRes == 0) {
				RLoadExp1b = 0;
				IagExp1b = 0;
			} else {
				RLoadExp1b = 350 / CountLoadRes;
				CountLoadRes = 0;
				//console.log("Total Load Resisteance :  " + RLoadExp1b);
			}
			if(RLoadExp1b != 0) {
				IagExp1b = EaExp1b / RLoadExp1b;
			}
			VtExp1b = EaExp1b - IagExp1b * RaExp1b;
			GenOutExp1b = VtExp1b * IagExp1b;
			CpLossGenExp1b = Math.pow(IagExp1b, 2) * RaExp1b;
			CLossGenExp1b = this.calculateKc(IfgExp1b);
			InGenExp1b = GenOutExp1b + FLossExp1b + CpLossGenExp1b + CLossGenExp1b;
			SCpLossMotExp1b = Math.pow(Ishexp1b, 2) * shuntResistanceExp1b;
			CLossMotExp1b = this.calculateCoreLoss(Ishexp1b);
			TLossMotExp1b = FLossExp1b + SCpLossMotExp1b + CLossMotExp1b;
			VinIin = InGenExp1b + TLossMotExp1b;

			if(ViExp1b == 0) {
				Iin = 0;
			} else {
				Iin = VinIin / ViExp1b;
			}
			IaExp1b = Iin - Ishexp1b;
			ACpLossMotExp1b = Math.pow(IaExp1b, 2) * RaExp1b;
			CorrectVinIin = VinIin + ACpLossMotExp1b;

			if(ViExp1b == 0) {
				CorrectIin = 0;
			} else {
				CorrectIin = CorrectVinIin / ViExp1b;

			}
			console.log("CorrectIin : " + CorrectIin);
			CorrectIaExp1b = CorrectIin - Ishexp1b;
			CorrectEb = ViExp1b - (CorrectIaExp1b * RaExp1b);
			CorrectKcValexp1b = this.calculateKc(Ishexp1b);
			CorrectSpeedexp1b = CorrectEb / CorrectKcValexp1b;

			if(CorrectSpeedexp1b < 0) {
				CorrectSpeedexp1b = 0;
			}
			////console.log("Correct Speed : " + CorrectSpeedexp1b);
			Exp1bMotEff = GenOutExp1b / InGenExp1b;
			////console.log("motor efficiency : " + Exp1bMotEff);
if(CorrectIin==0){
				GenEff=0;
			}
			else{
			ipmot = parseFloat(ViExp1b * CorrectIin);
			opmot = parseFloat((Exp1bMotEff * ipmot) / 100);
			GenEff = parseFloat(((IagExp1b * VtExp1b) / opmot) * 100);
			//generator efficiency
			console.log("GenEff" + GenEff);
}
			exp1bcanvas.motorSwitch(CorrectIin, IagExp1b, ViExp1b, VtExp1b, CorrectSpeedexp1b);
		} else if(flagExp1bArmature != true && flagExp1bMotor == true) {
			VaExp1b = 0;
			IfgExp1b = eval(VaExp1b) / eval(RfaExp1b);
			////console.log("Field Current : " + IfgExp1b);

			exp1bcanvas.armatureSwitch(IfgExp1b, VaExp1b);
			Ishexp1b = ViExp1b / shuntResistanceExp1b;
			////console.log("Ish : " + Ishexp1b);
			KcValexp1b = this.calculateKc(Ishexp1b);
			////console.log("kcval : " + KcValexp1b);
			Ebexp1b = ViExp1b;
			Speedexp1b = Ebexp1b / KcValexp1b;
			////console.log("Speed : " + Speedexp1b);
			if(Speedexp1b < 730) {
				FLossExp1b = 0;
			}
			KcVal1Exp1b = this.calculateKc(IfgExp1b);
			////console.log("kcval1 : " + KcVal1Exp1b);
			EaExp1b = KcVal1Exp1b * Speedexp1b;
			//console.log("Ea: " + EaExp1b);
			if(flagExp1bMainLoad == false || flagExp1bMainLoad == undefined) {
				RagExp1b = 0;
				IagExp1b = 0;
			} else {
				if(flagExp1bLoad1 == true) {
					CountLoadRes++;
				}
				if(flagExp1bLoad2 == true) {
					CountLoadRes++;
				}
				if(flagExp1bLoad3 == true) {
					CountLoadRes++;
				}
				if(flagExp1bLoad4 == true) {
					CountLoadRes++;
				}
				if(flagExp1bLoad5 == true) {
					CountLoadRes++;
				}
			}
			if(CountLoadRes == 0) {
				RLoadExp1b = 0;
				IagExp1b = 0;
			} else {
				RLoadExp1b = 350 / CountLoadRes;
				CountLoadRes = 0;
				//console.log("Total Load Resisteance :  " + RLoadExp1b);
			}
			if(RLoadExp1b != 0) {
				IagExp1b = EaExp1b / RLoadExp1b;
			}
			//console.log("Generator Current :  " + IagExp1b);
			VtExp1b = EaExp1b - IagExp1b * RaExp1b;
			GenOutExp1b = VtExp1b * IagExp1b;
			CpLossGenExp1b = Math.pow(IagExp1b, 2) * RaExp1b;
			CLossGenExp1b = this.calculateKc(IfgExp1b);
			InGenExp1b = GenOutExp1b + FLossExp1b + CpLossGenExp1b + CLossGenExp1b;
			SCpLossMotExp1b = Math.pow(Ishexp1b, 2) * shuntResistanceExp1b;
			//console.log("Shunt Field Copper Loss Motor : " + SCpLossMotExp1b);
			CLossMotExp1b = this.calculateCoreLoss(Ishexp1b);
			//console.log("Core loss of motor : " + CLossMotExp1b);
			TLossMotExp1b = FLossExp1b + SCpLossMotExp1b + CLossMotExp1b;
			//console.log("Total motor loss : " + CLossMotExp1b);
			VinIin = InGenExp1b + TLossMotExp1b;
			//console.log("VinIin : " + VinIin);
			if(ViExp1b == 0) {
				Iin = 0;
			} else {
				Iin = VinIin / ViExp1b;
			}
			IaExp1b = Iin - Ishexp1b;
			//console.log("Aprro Ia : " + IaExp1b);
			ACpLossMotExp1b = Math.pow(IaExp1b, 2) * RaExp1b;
			CorrectVinIin = VinIin + ACpLossMotExp1b;
			//console.log("CorrectVinIin : " + CorrectVinIin);
			if(ViExp1b == 0) {
				CorrectIin = 0;
			} else {
				CorrectIin = (CorrectVinIin / ViExp1b).toFixed(1);
			}
			//console.log("CorrectIin :" + CorrectIin);
			CorrectIaExp1b = CorrectIin - Ishexp1b;
			CorrectEb = ViExp1b - (CorrectIaExp1b * RaExp1b);
			CorrectKcValexp1b = this.calculateKc(Ishexp1b);
			CorrectSpeedexp1b = CorrectEb / CorrectKcValexp1b;
			if(CorrectSpeedexp1b < 0) {
				CorrectSpeedexp1b = 0;
			}
			//console.log("Correct Speed : " + CorrectSpeedexp1b);
			Exp1bMotEff = GenOutExp1b / InGenExp1b;
			//console.log("motor efficiency : " + Exp1bMotEff);
if(CorrectIin==0){
				GenEff=0;
			}
			else{
			ipmot = parseFloat(ViExp1b * CorrectIin);
			opmot = parseFloat((Exp1bMotEff * ipmot) / 100);
			GenEff = parseFloat(((IagExp1b * VtExp1b) / opmot) * 100);
			//generator efficiency
			console.log("GenEff" + GenEff);
			}
			exp1bcanvas.motorSwitch(CorrectIin, IagExp1b, ViExp1b, VtExp1b, CorrectSpeedexp1b);
		} else if(flagExp1bArmature != true && flagExp1bMotor != true) {
			IfgExp1b = 0;
			VaExp1b = 0;
			CorrectIin = 0;
			IagExp1b = 0;
			ViExp1b = 0;
			VtExp1b = 0;
			CorrectIaExp1b = 0;
			CorrectSpeedexp1b = 0;
			exp1bcanvas.armatureSwitch(IfgExp1b, VaExp1b);
			exp1bcanvas.motorSwitch(CorrectIin, IagExp1b, ViExp1b, VtExp1b, CorrectSpeedexp1b);
		}
	}

	ds.exp1bDataStoreArmatureSwitchUp = exp1bDataStoreArmatureSwitchUp;
	ds.exp1bDataStoreArmatureSwitchDown = exp1bDataStoreArmatureSwitchDown;
	ds.exp1bDataStoreMotorSwitchUp = exp1bDataStoreMotorSwitchUp;
	ds.exp1bDataStoreMotorSwitchDown = exp1bDataStoreMotorSwitchDown;
	ds.exp1bDataStoreMainLoad = exp1bDataStoreMainLoad;
	ds.exp1bDataStoreDpst = exp1bDataStoreDpst;
	ds.exp1bStoreData = exp1bStoreData;
	ds.calculateKc = calculateKc;
	ds.exp1bDataClearData = exp1bDataClearData;

})(datastore1b);
