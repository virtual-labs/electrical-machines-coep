var ds = datastore8 = ds || {};
(function() {

	var VfaExp8 = 0, IfaExp8 = 0, VinExp8 = 0, IinExp8 = 0, R3T, R2T, R1T, countR3T = 0, countR2T = 0, countR1T = 0, IshExp8, EbExp8, KcExp8, SpeedExp8, EinExp8, KaExp8, VtExp8, CLossAltExp8, CpLossAltExp8, AltOutExp8, CLossMotorExp8, CpLossMotorExp8, SCpLossMotorExp8, TLossMotorExp8, InAltExp8, VinIinExp8, IinExp8, IaExp8, CorrectVinIinExp8, CorrectIinExp8, CorrectSpeedExp8, i1Exp8, i2Exp8, i3Exp8, v1Exp8, v2Exp8, v3Exp8, iRExp8, iYExp8, iBExp8, VoltReg, EinExp8App, I1app, I2app, I3app, V1app, V2app, V3app, Irapp, Iyapp, Ibapp, CorrectIaExp8, efficiency, MotorOutputExp8;
	var complexA, complexA1, complexB, complexC, complexD, complexE, complexF, complexH, complexX1Real, complexX1Img, complexX2Real, complexX2Img, complexX1, complexX2, complexX, complexY1Real, complexY1Img, complexY2Real, complexY2Img, complexY1, complexY2, complexY, complexZ1Real, complexZ1Img, complexZ2Real, complexZ2Img, complexZ1, complexZ2, complexZ, complexG, complexL, complexI1, complexI2, complexI3, complexIr, complexIy, complexIb, complexVry, complexVyb, complexVbr;
	var shuntResistance = 192;
	var Ra = 3, Rfa = 180;
	var flag = 0, flag2 = 0, flag3 = 0;
	var Vryunload = 0, Vryload = 0;
	var cnt1 = 0;
	var exp8StoreFlag = false;

	var exp8StoreData = function() {
		exp8StoreFlag = true;
		if(exp8StoreFlag == true) {
			model.graphAmpereFieldExp8(IfaExp8);
			model.graphVoltageFieldExp8(VfaExp8);
			model.graphAmpereMotorExp8(IinExp8);
			model.graphVoltageMotorExp8(VinExp8);
			model.graphSpeedExp8a(CorrectSpeedExp8);
			model.graphVryExp8a(v1Exp8);
			model.graphVybExp8(v2Exp8);
			model.graphVbrExp8(v3Exp8);
			model.graphIrExp8(iRExp8);
			model.graphIyExp8(iYExp8);
			model.graphIbExp8(iBExp8);
			model.graphVtExp8(VtExp8);
			model.graphAltOpExp8(AltOutExp8);
			model.graphInAltExp8(InAltExp8);
			model.graphEfficiency(efficiency);
			model.graphMotorOutputExp8a(MotorOutputExp8);
			model.graphVoltageRegulation(VoltReg);
		}
		exp8StoreFlag = false;
	}
	var exp8DataClearData = function(ExpId) {
		var arr = model.get("ampereValue");
		//console.log("clear amp : " + arr);
		model.clearData();
		var arr1 = model.get("ampereValue");
		//console.log("clear amp : " + arr1);
		var vol = model.get("voltageValue");
		//console.log("clear vol : " + vol);
		var id = "none";

		graph.graphData(id, ExpId);
		exp8StoreFlag = false;
	}
	var fieldDataStoreVoltageUpExp8 = function(flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8) {
		if(VfaExp8 < 220)
			VfaExp8 += 2;
		IfaExp8 = eval(VfaExp8) / eval(Rfa);
		exp8canvas.FieldSwitch(IfaExp8, VfaExp8);

		this.calculationsExp8(flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
	}
	var fieldDataStoreVoltageDownExp8 = function(flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8) {
		if(VfaExp8 > 0)
			VfaExp8 -= 2;
		IfaExp8 = eval(VfaExp8) / eval(Rfa);
		exp8canvas.FieldSwitch(IfaExp8, VfaExp8);

		this.calculationsExp8(flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
	}
	var motorDataStoreVoltageUpExp8 = function(flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8) {
		if(VinExp8 < 500)
			VinExp8 += 2;

		this.calculationsExp8(flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
	}
	var motorDataStoreVoltageDownExp8 = function(flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8) {
		if(VinExp8 > 0)
			VinExp8 -= 2;

		this.calculationsExp8(flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
	}
	var loadDataStoreExp8 = function(flagExp8Dpst1, flagExp8Dpst2, flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8) {

		if(flagExp8Dpst2 == true) {
			this.calculationsExp8(flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
		}
	}
	var exp8Dpst = function(flagExp8Dpst1, flagExp8Dpst2, flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8) {

		if(flagExp8Dpst1 == true && flagExp8Dpst2 != true) {
			VinExp8 = 0;

			this.calculationsExp8(flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
		}

		if(flagExp8Dpst1 != true && flagExp8Dpst2 == true) {
			VfaExp8 = 0;
			IfaExp8 = eval(VfaExp8) / eval(Rfa);
			exp8canvas.FieldSwitch(IfaExp8, VfaExp8);

			this.calculationsExp8(flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
		}

		if(flagExp8Dpst1 != true && flagExp8Dpst2 != true) {
			IfaExp8 = 0;
			VfaExp8 = 0;
			IinExp8 = 0;
			VinExp8 = 0;
			VtExp8 = 0;
			CorrectIaExp8 = 0;
			CorrectSpeedExp8 = 0;
			SpeedExp8 = 0;
			MotorOutputExp8 = 0;
			complexVbr = new ComplexNumber(0, 0);
			complexVry = new ComplexNumber(0, 0);
			complexVyb = new ComplexNumber(0, 0);
			complexIb = new ComplexNumber(0, 0);
			complexIr = new ComplexNumber(0, 0);
			complexIy = new ComplexNumber(0, 0);
			i1Exp8 = 0;
			i2Exp8 = 0;
			i3Exp8 = 0;
			v1Exp8 = 0;
			v2Exp8 = 0;
			v3Exp8 = 0;
			iRExp8 = 0;
			iBExp8 = 0;
			iYExp8 = 0;
			AltOutExp8 = 0;
			InAltExp8 = 0;
			AltVoltReg = 0;
			exp8canvas.FieldSwitch(IfaExp8, VfaExp8);
			exp8canvas.motorSwitch(CorrectIinExp8, VinExp8, v1Exp8, v2Exp8, v3Exp8, iRExp8, iYExp8, iBExp8, VoltReg, CorrectSpeedExp8);
		}
	}
	var calculationsExp8 = function(flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8) {
		complexA = new ComplexNumber(-4, -42);
		complexA1 = new ComplexNumber(8, 84);

		if(flagR3TExp8 == false || flagR3TExp8 == undefined) {// R3T
			R3T = 1000000;
			//IagExp1b = 0;
		} else {
			if(flagR3T1Exp8 == true) {
				countR3T++;
			}
			if(flagR3T2Exp8 == true) {
				countR3T++;
			}
			if(flagR3T3Exp8 == true) {
				countR3T++;
			}
			if(flagR3T4Exp8 == true) {
				countR3T++;
			}
			if(flagR3T5Exp8 == true) {
				countR3T++;
			}
		}
		if(countR3T == 0) {
			R3T = 1000000;
			//console.log("No load");
			//IagExp1b = 0;
		} else {
			R3T = 860 / countR3T;
			countR3T = 0;
			////console.log("Total Load Resisteance R3T :  "+R3T);
		}

		if(flagR2TExp8 == false || flagR2TExp8 == undefined) {//R2T
			//alert("No Load");
			R2T = 1000000;
			//IagExp1b = 0;
		} else {
			if(flagR2T1Exp8 == true) {
				countR2T++;
			}
			if(flagR2T2Exp8 == true) {
				countR2T++;
			}
			if(flagR2T3Exp8 == true) {
				countR2T++;
			}
			if(flagR2T4Exp8 == true) {
				countR2T++;
			}
			if(flagR2T5Exp8 == true) {
				countR2T++;
			}
		}
		if(countR2T == 0) {
			R2T = 1000000;
			//console.log("No load");
			//IagExp1b = 0;
		} else {
			R2T = 860 / countR2T;
			countR2T = 0;
			////console.log("Total Load Resisteance R2T :  "+R2T);
		}

		if(flagR1TExp8 == false || flagR1TExp8 == undefined) {// R1T
			R1T = 1000000;
			//IagExp1b = 0;
		} else {
			if(flagR1T1Exp8 == true) {
				countR1T++;
			}
			if(flagR1T2Exp8 == true) {
				countR1T++;
			}
			if(flagR1T3Exp8 == true) {
				countR1T++;
			}
			if(flagR1T4Exp8 == true) {
				countR1T++;
			}
			if(flagR1T5Exp8 == true) {
				countR1T++;
			}
		}
		if(countR1T == 0) {
			R1T = 1000000;
			//console.log("No load");
			//IagExp1b = 0;
		} else {
			R1T = 860 / countR1T;
			countR1T = 0;
			////console.log("Total Load Resisteance R1T:  "+R1T);
		}
		R3T = new ComplexNumber(R3T, 0);
		R2T = new ComplexNumber(R2T, 0);
		R1T = new ComplexNumber(R1T, 0);
		////console.log("R2T : "+R2T.toString());

		complexB = complexA1.add(R3T);
		// B
		complexC = complexA1.add(R1T);
		// C
		complexD = complexA1.add(R2T);
		// D

		complexE = complexA.sub(((complexA.mult(complexA)).div(complexD)));
		// E

		complexF = complexB.sub(((complexA.mult(complexA)).div(complexD)));
		// F

		complexH = complexC.sub(((complexA.mult(complexA)).div(complexD)));
		// H

		////console.log("complex B: "+ complexB.toString());
		////console.log("complex C: "+ complexC.toString());
		////console.log("complex D: "+ complexD.toString());
		////console.log("complex E: "+ complexE.toString());
		////console.log("complex F: "+ complexF.toString());
		////console.log("complex H: "+ complexH.toString());

		IshExp8 = VinExp8 / shuntResistance;
		EbExp8 = VinExp8;
		KcExp8 = this.calculateKc(IshExp8);
		SpeedExp8 = EbExp8 / KcExp8;
		// approx speed
		////console.log("Approx Speed : "+SpeedExp8);

		KaExp8 = this.calculateKa(IfaExp8);
		////console.log("ka : "+KaExp8);
		EinExp8App = (KaExp8 * SpeedExp8) / Math.sqrt(3);
		// approx Ein
		////console.log("Approx Ein : "+EinExp8App);

		///////////approx////////

		complexX1Real = EinExp8App * Math.cos((-240) * Math.PI / 180);
		complexX1Img = EinExp8App * Math.sin((-240) * Math.PI / 180);
		complexX1 = new ComplexNumber(complexX1Real, complexX1Img);
		complexX2Real = EinExp8App * Math.cos(0 * Math.PI / 180);
		complexX2Img = EinExp8App * Math.sin(0 * Math.PI / 180);
		complexX2 = new ComplexNumber(complexX2Real, complexX2Img);
		complexX = complexX1.sub(complexX2);
		// X

		complexY1Real = EinExp8App * Math.cos(0 * Math.PI / 180);
		complexY1Img = EinExp8App * Math.sin(0 * Math.PI / 180);
		complexY1 = new ComplexNumber(complexY1Real, complexY1Img);
		complexY2Real = EinExp8App * Math.cos((-120) * Math.PI / 180);
		complexY2Img = EinExp8App * Math.sin((-120) * Math.PI / 180);
		complexY2 = new ComplexNumber(complexY2Real, complexY2Img);
		complexY = complexY1.sub(complexY2);
		// Y

		complexZ1Real = EinExp8App * Math.cos((-120) * Math.PI / 180);
		complexZ1Img = EinExp8App * Math.sin((-120) * Math.PI / 180);
		complexZ1 = new ComplexNumber(complexZ1Real, complexZ1Img);
		complexZ2Real = EinExp8App * Math.cos((-240) * Math.PI / 180);
		complexZ2Img = EinExp8App * Math.sin((-240) * Math.PI / 180);
		complexZ2 = new ComplexNumber(complexZ2Real, complexZ2Img);
		complexZ = complexZ1.sub(complexZ2);
		// Z

		////console.log("Approx complex X: "+ complexX.toString());
		////console.log("Approx complex Y: "+ complexY.toString());
		////console.log("Approx complex Z: "+ complexZ.toString());

		complexG = complexX.sub((complexA.mult(complexZ)).div(complexD));
		// G
		complexL = complexY.sub((complexA.mult(complexZ)).div(complexD));
		// L
		////console.log("Approx complexL : "+complexL);
		////console.log("Approx complexG : "+complexG);

		if(R1T.real == 0 && R2T.real == 0 && R3T.real == 0) {
			complexI1 = new ComplexNumber(0, 0);
			complexI2 = new ComplexNumber(0, 0);
			complexI3 = new ComplexNumber(0, 0);
		} else {
			// I1
			complexI1 = (complexL.sub((complexE.mult(complexG)).div(complexF))).div(complexH.sub((complexE.mult(complexE)).div(complexF)));
			//I3
			complexI3 = (complexG.div(complexF)).sub((complexE.mult(complexI1)).div(complexF));
			//I2
			complexI2 = (complexZ.div(complexD)).sub((complexA.mult((complexI1.add(complexI3)))).div(complexD));
		}

		////console.log("Approx I1 : "+complexI1);
		////console.log("Approx I2 : "+complexI2);
		////console.log("Approx I3 : "+complexI3);
		complexIr = complexI1.sub(complexI3);
		// Ir
		complexIy = complexI2.sub(complexI1);
		// Iy
		complexIb = complexI3.sub(complexI2);
		// Ib

		////console.log("Approx Ir : "+complexIr);
		////console.log("Approx Iy : "+complexIy);
		////console.log("Approx Ib : "+complexIb);

		complexVry = complexI1.mult(R1T);
		// Vry
		complexVyb = complexI2.mult(R2T);
		// Vyb
		complexVbr = complexI3.mult(R3T);
		// Vbr
		////console.log("Approx Vry : "+complexVry);
		////console.log("Approx Vyb : "+complexVyb);
		////console.log("Approx Vbr : "+complexVbr);

		I1app = Math.sqrt(complexI1.real * complexI1.real + complexI1.imaginary * complexI1.imaginary);
		I2app = Math.sqrt(complexI2.real * complexI2.real + complexI2.imaginary * complexI2.imaginary);
		I3app = Math.sqrt(complexI3.real * complexI3.real + complexI3.imaginary * complexI3.imaginary);
		//console.log("Approx I1 : "+I1app.toFixed(2));
		//console.log("Approx I2 : "+I2app.toFixed(2));
		//console.log("Approx I3 : "+I3app.toFixed(2));

		V1app = Math.sqrt(complexVry.real * complexVry.real + complexVry.imaginary * complexVry.imaginary);
		V2app = Math.sqrt(complexVyb.real * complexVyb.real + complexVyb.imaginary * complexVyb.imaginary);
		V3app = Math.sqrt(complexVbr.real * complexVbr.real + complexVbr.imaginary * complexVbr.imaginary);
		//console.log("Approx V1  : "+V1app.toFixed(2));
		//console.log("Approx V2  : "+V1app.toFixed(2));
		//console.log("Approx V3  : "+V1app.toFixed(2));

		Irapp = Math.sqrt(complexIr.real * complexIr.real + complexIr.imaginary * complexIr.imaginary);
		Iyapp = Math.sqrt(complexIy.real * complexIy.real + complexIy.imaginary * complexIy.imaginary);
		Ibapp = Math.sqrt(complexIb.real * complexIb.real + complexIb.imaginary * complexIb.imaginary);

		/*
		 console.log("Approx Ir  : "+Irapp.toFixed(2));
		 console.log("Approx Iy  : "+Iyapp.toFixed(2));
		 console.log("Approx Ib  : "+Ibapp.toFixed(2));*/

		CLossAltExp8 = this.calculateCoreLossAltExp7a(VfaExp8);
		// Core Loss Alternator
		////console.log("Core Loss Alt : "+CLossAltExp8);
		CpLossAltExp8 = Irapp * Irapp * 4 + Iyapp * Iyapp * 4 + Ibapp * Ibapp * 4;
		// Copper Loss Alternator
		////console.log("Copper Loss Alt : "+CpLossAltExp8);
		AltOutExp8 = V1app * I1app + V2app * I2app + V3app * I3app;
		// Alternator Output
		////console.log("Alternator Output : "+AltOutExp8);
		InAltExp8 = AltOutExp8 + CLossAltExp8 + CpLossAltExp8;
		// + FLossExp1b;						// Input to Alternator
		////console.log("Input to Alternator : "+InAltExp8);
		CLossMotorExp8 = this.calculateCoreLossMotExp7a(IshExp8);
		// Core Loss Motor
		////console.log("Core Loss Motor : "+CLossMotorExp8);
		SCpLossMotorExp8 = IshExp8 * IshExp8 * 192;
		// Shunt Field Cp Loss Motor
		////console.log("Shunt Field Cp Loss Motor : "+SCpLossMotorExp8);
		TLossMotorExp8 = CLossMotorExp8 + SCpLossMotorExp8;
		// + FLossExp1b;					// Total Loss Motor
		////console.log("Total Loss Motor : "+TLossMotorExp8);
		VinIinExp8 = InAltExp8 + TLossMotorExp8;
		// approx VinIin
		////console.log("Approx VinIin : "+VinIinExp8);
		if(VinExp8 == 0) {
			IinExp8 = 0;
		} else {
			IinExp8 = VinIinExp8 / VinExp8;
		}
		//console.log("Vin:"+VinExp8+ "  "+ "Iin:" + IinExp8);
		////console.log("Approx Iin : "+IinExp8);
		MotorOutputExp8 = eval(VinExp8) * eval(IinExp8);
		//added by shubhangi
		//console.log("MotorOutputExp8a"+MotorOutputExp8a);
		IaExp8 = IinExp8 - IshExp8;
		// Ia
		////console.log("Ia : "+IaExp8);
		CpLossMotorExp8 = Math.pow(IaExp8, 2) * Ra;
		// copper loss motor
		////console.log("copper loss motor : "+CpLossMotorExp8);
		CorrectVinIinExp8 = VinIinExp8 + CpLossMotorExp8;
		// correct VinIin
		////console.log("correct VinIin : "+CorrectVinIinExp8);
		if(VinExp8 == 0) {
			CorrectIinExp8 = 0;
		} else {
			CorrectIinExp8 = CorrectVinIinExp8 / VinExp8;
			// correct Iin
		}
		////console.log("correct Iin : "+CorrectIinExp8);
		CorrectIaExp8 = CorrectIinExp8 - IshExp8;
		// correct Ia
		////console.log("correct Ia : "+CorrectIaExp8);

		EbExp8 = VinExp8 - CorrectIaExp8 * 3;
		// Eb
		////console.log("Eb : "+EbExp8);
		CorrectSpeedExp8 = EbExp8 / KcExp8;
		// Correct Speed
		////console.log("Correct Speed : "+CorrectSpeedExp8);
		if(CorrectSpeedExp8 < 0) {
			CorrectSpeedExp8 = 0;
			AltOutExp8 = 0;
			CpLossAltExp8 = 0;
			//MotorOutputExp8a=0;

			InAltExp8 = AltOutExp8 + CLossAltExp8 + CpLossAltExp8;
			// + FLossExp1b;						// Input to Alternator
			////console.log("Input to Alternator : "+InAltExp8);
			CLossMotorExp8 = this.calculateCoreLossMotExp7a(IshExp8);
			// Core Loss Motor
			////console.log("Core Loss Motor : "+CLossMotorExp8);
			SCpLossMotorExp8 = IshExp8 * IshExp8 * 192;
			// Shunt Field Cp Loss Motor
			////console.log("Shunt Field Cp Loss Motor : "+SCpLossMotorExp8);
			TLossMotorExp8 = CLossMotorExp8 + SCpLossMotorExp8;
			// + FLossExp1b;					// Total Loss Motor
			////console.log("Total Loss Motor : "+TLossMotorExp8);
			VinIinExp8 = InAltExp8 + TLossMotorExp8;
			// approx VinIin
			////console.log("Approx VinIin : "+VinIinExp8);
			//MotorOutputExp8a= VinExp8 * IinExp8;
			if(VinExp8 == 0) {
				IinExp8 = 0;
			} else {
				IinExp8 = VinIinExp8 / VinExp8;
				// aprrox Iin
			}
			////console.log("Approx Iin : "+IinExp8);
			IaExp8 = IinExp8 - IshExp8;
			// Ia
			////console.log("Ia : "+IaExp8);

			CpLossMotorExp8 = Math.pow(IaExp8, 2) * Ra;
			// copper loss motor
			////console.log("copper loss motor : "+CpLossMotorExp8);

			CorrectVinIinExp8 = VinIinExp8 + CpLossMotorExp8;
			// correct VinIin
			////console.log("correct VinIin : "+CorrectVinIinExp8);
			if(VinExp8 == 0) {
				CorrectIinExp8 = 0;
			} else {
				CorrectIinExp8 = CorrectVinIinExp8 / VinExp8;
				// correct Iin
			}
			////console.log("correct Iin : "+CorrectIinExp8);
		}
		EinExp8 = (KaExp8 * CorrectSpeedExp8) / Math.sqrt(3);
		// Ein
		////console.log("Ein : "+ EinExp8);

		VtExp8 = Math.sqrt(3) * EinExp8;
		//console.log("Vt : "+VtExp8);																						// Vt

		////////// correct value /////
		complexX1Real = EinExp8 * Math.cos((-240) * Math.PI / 180);
		complexX1Img = EinExp8 * Math.sin((-240) * Math.PI / 180);
		complexX1 = new ComplexNumber(complexX1Real, complexX1Img);
		complexX2Real = EinExp8 * Math.cos(0 * Math.PI / 180);
		complexX2Img = EinExp8 * Math.sin(0 * Math.PI / 180);
		complexX2 = new ComplexNumber(complexX2Real, complexX2Img);
		complexX = complexX1.sub(complexX2);
		// X

		complexY1Real = EinExp8 * Math.cos(0 * Math.PI / 180);
		complexY1Img = EinExp8 * Math.sin(0 * Math.PI / 180);
		complexY1 = new ComplexNumber(complexY1Real, complexY1Img);
		complexY2Real = EinExp8 * Math.cos((-120) * Math.PI / 180);
		complexY2Img = EinExp8 * Math.sin((-120) * Math.PI / 180);
		complexY2 = new ComplexNumber(complexY2Real, complexY2Img);
		complexY = complexY1.sub(complexY2);
		// Y

		complexZ1Real = EinExp8 * Math.cos((-120) * Math.PI / 180);
		complexZ1Img = EinExp8 * Math.sin((-120) * Math.PI / 180);
		complexZ1 = new ComplexNumber(complexZ1Real, complexZ1Img);
		complexZ2Real = EinExp8 * Math.cos((-240) * Math.PI / 180);
		complexZ2Img = EinExp8 * Math.sin((-240) * Math.PI / 180);
		complexZ2 = new ComplexNumber(complexZ2Real, complexZ2Img);
		complexZ = complexZ1.sub(complexZ2);
		// Z

		////console.log("Z1 real : "+ complexZ1Real);
		////console.log("Z1 img : "+ complexZ1Img);
		////console.log("complex Z1: "+ complexZ1.toString());
		////console.log("Z2 real : "+ complexZ2Real);
		////console.log("Z2 img : "+ complexZ2Img);
		////console.log("complex Z2: "+ complexZ2.toString());
		////console.log("complex X: "+ complexX.toString());
		////console.log("complex Y: "+ complexY.toString());
		////console.log("complex Z: "+ complexZ.toString());

		complexG = complexX.sub((complexA.mult(complexZ)).div(complexD));
		// G
		complexL = complexY.sub((complexA.mult(complexZ)).div(complexD));
		// L
		////console.log("complexL : "+complexL);
		////console.log("complexG : "+complexG);

		if(R1T.real == 0 && R2T.real == 0 && R3T.real == 0) {
			complexI1 = new ComplexNumber(0, 0);
			complexI2 = new ComplexNumber(0, 0);
			complexI3 = new ComplexNumber(0, 0);
		} else {
			// I1
			complexI1 = (complexL.sub((complexE.mult(complexG)).div(complexF))).div(complexH.sub((complexE.mult(complexE)).div(complexF)));
			//I3
			complexI3 = (complexG.div(complexF)).sub((complexE.mult(complexI1)).div(complexF));
			//I2
			complexI2 = (complexZ.div(complexD)).sub((complexA.mult((complexI1.add(complexI3)))).div(complexD));
		}

		////console.log("I1 : "+complexI1);
		////console.log("I2 : "+complexI2);
		////console.log("I3 : "+complexI3);
		// Ir
		complexIr = complexI1.sub(complexI3);
		//Iy
		complexIy = complexI2.sub(complexI1);
		// Ib
		complexIb = complexI3.sub(complexI2);
		////console.log("Ir : "+complexIr);
		////console.log("Iy : "+complexIy);
		////console.log("Ib : "+complexIb);
		// Vry
		complexVry = complexI1.mult(R1T);
		complexVyb = complexI2.mult(R2T);
		complexVbr = complexI3.mult(R3T);
		//console.log("Vry : "+complexVry);
		//console.log("Vyb : "+complexVyb);
		//console.log("Vbr : "+complexVbr);

		if(R1T.real == 0 && R2T.real == 0 && R3T.real == 0) {
			v1Exp8 = VtExp8;
			v2Exp8 = VtExp8;
			v3Exp8 = VtExp8;

		} else {
			v1Exp8 = Math.sqrt(complexVry.real * complexVry.real + complexVry.imaginary * complexVry.imaginary);
			v2Exp8 = Math.sqrt(complexVyb.real * complexVyb.real + complexVyb.imaginary * complexVyb.imaginary);
			v3Exp8 = Math.sqrt(complexVbr.real * complexVbr.real + complexVbr.imaginary * complexVbr.imaginary);

		}
		//console.log("v1Exp8:"+v1Exp8);

		iRExp8 = Math.sqrt(complexIr.real * complexIr.real + complexIr.imaginary * complexIr.imaginary);
		iYExp8 = Math.sqrt(complexIy.real * complexIy.real + complexIy.imaginary * complexIy.imaginary);
		iBExp8 = Math.sqrt(complexIb.real * complexIb.real + complexIb.imaginary * complexIb.imaginary);
		efficiency = AltOutExp8 / InAltExp8;
		//console.log("efficiency is : "+efficiency);

		//voltage regulation calculation

		//console.log("Approx Ir  : " + iRExp8.toFixed(2));
		//console.log("Approx Iy  : " + iYExp8.toFixed(2));
		//	console.log("Approx Ib  : " + iBExp8.toFixed(2));

		var ir = iRExp8.toFixed(2);
		var iy = iYExp8.toFixed(2);
		var ib = iBExp8.toFixed(2);

		var temp1 = ( ir = iy = ib);

		var temp2 = ((iRExp8.toFixed(2) == iYExp8.toFixed(2)) && (iRExp8.toFixed(2) == iBExp8.toFixed(2)) && (iYExp8.toFixed(2) == iBExp8.toFixed(2)));

		if(temp1 == 0 && flag == 0) {
			VoltReg = '-';
			Vryunload = v1Exp8.toFixed(2);
		
		} else if(temp2 > 0) {
			Vryload = v1Exp8.toFixed(2);
			flag3 = 1;

		}
		if(temp2 == true && flag3 == 1) {
			
			VoltReg = (((Vryunload - Vryload) / Vryload ) * 100);
			//console.log("Voltage regulation:"+VoltReg);
			
			if(VoltReg == 0 || VoltReg =="Infinity") {
				VoltReg = "-";
			}
			flag = 1; 
		}
		exp8canvas.motorSwitch(CorrectIinExp8, VinExp8, v1Exp8, v2Exp8, v3Exp8, iRExp8, iYExp8, iBExp8, VoltReg, CorrectSpeedExp8);
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
			//console.log(det);
			//console.log((this.real * divisor.real +this.imaginary * divisor.imaginary));
			return new ComplexNumber((this.real * divisor.real + this.imaginary * divisor.imaginary) / det, (this.imaginary * divisor.real - this.real * divisor.imaginary) / det);
		},
		toString : function() {
			return this.real + " + " + this.imaginary + "j";
		}
	}

	ds.fieldDataStoreVoltageUpExp8 = fieldDataStoreVoltageUpExp8;
	ds.fieldDataStoreVoltageDownExp8 = fieldDataStoreVoltageDownExp8;
	ds.motorDataStoreVoltageUpExp8 = motorDataStoreVoltageUpExp8;
	ds.motorDataStoreVoltageDownExp8 = motorDataStoreVoltageDownExp8;
	ds.calculationsExp8 = calculationsExp8;
	ds.loadDataStoreExp8 = loadDataStoreExp8;
	ds.exp8Dpst = exp8Dpst;
	ds.exp8StoreData = exp8StoreData;
	ds.exp8DataClearData = exp8DataClearData;
})(datastore8);
