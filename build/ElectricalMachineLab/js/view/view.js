var view = vw = view || {}; (function(vw) {

	var flag = 0;
	var ExpId;
	var SPRCCounter = 1;
	var MIVoltDCCounter = 1;
	var MIAmmDCCounter = 1;
	var couplingCounter = 1;
	var ThreePhiVVFCounter = 1;
	var SwiSPSTCounter = 1;
	var SwiDPSTCounter = 1;
	var SwiDPDTCounter = 1;
	var SlippingRotorCounter = 1;
	var DCVariableCounter = 1;
	var ShortCircuitCounter = 1;
	var MechRotorCounter = 1;
	var MIPowerFactorCounter = 1;
	var ThreePRlLoadCounter = 1;
	var ThreePRCLoadCounter = 1;
	var ThreePResisLoadCounter = 1;
	var ByPassCounter = 1;
	var SwiTPSTCounter = 1;
	var SwiTPDTCounter = 1;
	var ACSinPhaseCounter = 1;
	var DCFixedCounter = 1;
	var SalientRotorCounter = 1;
	var SquirRotorCounter = 1;
	var rheostatCounter = 1;
	var SPResisLoadCounter = 1;
	var SPRlLoadCounter = 1;
	var VariacThreePhaseCounter = 1;
	var ACThreePhaseCounter = 1;
	var MIVoltACCounter = 1;
	var MITachometerCounter = 1;
	var VarSinglePhaseCounter = 1;
	var SynCylinRotorCounter = 1;
	var DCSelfExcitedCounter = 1;
	var DCSExcitedCounter = 1;
	var OnePhiVVFCounter = 1;
	var SepExcitedCounter = 1;
	var MIWattNormalCounter = 1;
	var MIWattLowFactorCounter = 1;
	var SelfExcitedCounter = 1;
	var SalRotorCounter = 1;
	var CylinRotorCounter = 1;
	var MIAmmACCounter = 1;
	var VVVFSinglePhaseCounter = 1;
	var VVVFThreePhaseCounter = 1;
	var Experiment2Counter = 1;
	var Experiment3Counter = 1;
	var Experiment1aCounter = 1;
	var Experiment1bCounter = 1;
	var Experiment8Counter = 1;
	var Experiment9Counter = 1;
	var Experiment7aCounter = 1;
	var Experiment7bCounter = 1;
	var Experiment4acounter = 1;
	var Experiment6bCounter = 1;
	var Experiment4bCounter = 1;
	var Experiment10aCounter = 1;
	var Experiment10bCounter = 1;
	var Experiment2Counter = 1;
	var Experiment5Counter = 1;
	var Experiment6aCounter = 1;

	var SPSTArray = [];
	var exp1bArrayDpst = [];
	var exp2ArrayDpst1 = [];
	var exp2ArrayDpst2 = [];
	var exp2ArrayDpst3 = [];
	var exp2ArrayDpst4 = [];
	var exp2ArrayDpst5 = [];
	var exp2ArrayDpst6 = [];
	var exp2ArrayDpst7 = [];
	var exp2ArrayDpst8 = [];
	var exp2ArrayDpst9 = [];
	var exp3ArrayDpst1 = [];
	var exp3ArrayDpst2 = [];
	var exp4aArrayDpst = [];
	var exp4bArrayDpst = [];
	var exp7aArrayDpst = [];
	var exp7aArrayDpst1 = [];
	var exp8ArrayDpst = [];
	var exp5ArrayTpst = [];
	var exp7bArrayDpst = [];
	var exp9ArrayDpst = [];
	var exp9ArrayTpst = [];
	var exp9ArrMainLoad = [];
	var exp9ArrLoad1 = [];
	var exp9ArrLoad2 = [];
	var exp9ArrLoad3 = [];
	var exp9ArrLoad4 = [];
	var exp9ArrLoad5 = [];

	vw.renderSepExcitedView = function(id, cssObject) {
		var idx = id + SepExcitedCounter++;
		var canID = "can" + idx;
		boilerplate.createSepExcited(idx, canID, cssObject);
	};
	vw.renderSelfExcitedView = function(id, cssObject) {
		var idx = id + SelfExcitedCounter++;
		var canID = "can" + idx;
		boilerplate.createSelfExcited(idx, canID, cssObject);
	};
	vw.renderSalientRotorView = function(id, cssObject) {
		var idx = id + SalRotorCounter++;
		var canID = "can" + idx;
		boilerplate.createSalRotor(idx, canID, cssObject);
	};
	vw.renderCylinRotorView = function(id, cssObject) {
		var idx = id + CylinRotorCounter++;
		var canID = "can" + idx;
		boilerplate.createCylinRotor(idx, canID, cssObject);
	};
	vw.renderDCSExcitedView = function(id, cssObject) {
		var idx = id + DCSExcitedCounter++;
		var canID = "can" + idx;
		boilerplate.createDCSExcited(idx, canID, cssObject);
	};
	vw.renderDCSelfExcitedView = function(id, cssObject) {
		var idx = id + DCSelfExcitedCounter++;
		var canID = "can" + idx;
		boilerplate.createDCSelfExcited(idx, canID, cssObject);
	};
	vw.renderSynSalRotorView = function(id, cssObject) {
		var idx = id + SalientRotorCounter++;
		var canID = "can" + idx;
		boilerplate.createSalientRotor(idx, canID, cssObject);
	};
	vw.renderSynCylinRotorView = function(id, cssObject) {
		var idx = id + SynCylinRotorCounter++;
		var canID = "can" + idx;
		boilerplate.createSynCylinRotor(idx, canID, cssObject);
	};
	vw.renderSquirRotorView = function(id, cssObject) {
		var idx = id + SquirRotorCounter++;
		var canID = "can" + idx;
		boilerplate.createSquirRotor(idx, canID, cssObject);
	};
	vw.renderSlippingRotorView = function(id, cssObject) {
		var idx = id + SlippingRotorCounter++;
		var canID = "can" + idx;
		boilerplate.createSlippingRotor(idx, canID, cssObject);
	};
	vw.renderACSinPhaseView = function(id, cssObject) {
		var idx = id + ACSinPhaseCounter++;
		var canID = "can" + idx;
		boilerplate.createACSinPhase(idx, canID, cssObject);

	};
	vw.renderACThreePhaseView = function(id, cssObject) {
		var idx = id + ACThreePhaseCounter++;
		var canID = "can" + idx;
		boilerplate.createThreePhACSource(idx, canID, cssObject);
	};
	vw.renderDCFixedView = function(id, cssObject) {
		var idx = id + DCFixedCounter++;
		var canID = "can" + idx;
		boilerplate.createDCFixed(idx, canID, cssObject);
	};
	vw.renderDCVariableView = function(id, cssObject) {
		var idx = id + DCVariableCounter++;
		var canID = "can" + idx;
		boilerplate.createDCVariable(idx, canID, cssObject);
	};
	vw.renderThreePhiVVFView = function(id, cssObject) {
		var idx = id + ThreePhiVVFCounter++;
		var canID = "can" + idx;
		boilerplate.createThreePhiVVF(idx, canID, cssObject);
	};
	vw.renderOnePhiVVFView = function(id, cssObject) {
		var idx = id + OnePhiVVFCounter++;
		var canID = "can" + idx;
		boilerplate.createOnePhiVVF(idx, canID, cssObject);
	};
	vw.renderSPResisLoadView = function(id, cssObject) {
		var idx = id + SPResisLoadCounter++;
		var canID = "can" + idx;
		boilerplate.createSPResisLoad(idx, canID, cssObject);
	};
	vw.renderSPRlLoadView = function(id, cssObject) {
		var idx = id + SPRlLoadCounter++;
		var canID = "can" + idx;
		boilerplate.createSPRlLoad(idx, canID, cssObject);
	};
	vw.renderSPRcLoadView = function(id, cssObject) {
		var idx = id + SPRCCounter++;
		var canID = "can" + idx;
		boilerplate.createSPRcLoad(idx, canID, cssObject);
	};
	vw.renderThreePResisLoadView = function(id, cssObject) {
		var idx = id + ThreePResisLoadCounter++;
		var canID = "can" + idx;
		boilerplate.createThreePResisLoad(idx, canID, cssObject);
	};
	vw.renderThreePRlLoadView = function(id, cssObject) {
		var idx = id + ThreePRlLoadCounter++;
		var canID = "can" + idx;
		boilerplate.createThreePRlLoad(idx, canID, cssObject);
	};
	vw.renderThreePrcLoadView = function(id, cssObject) {
		var idx = id + ThreePRCLoadCounter++;
		var canID = "can" + idx;
		boilerplate.createThreePRCLoad(idx, canID, cssObject);
	};
	vw.renderMIAmmDCView = function(id, cssObject) {
		var idx = id + MIAmmDCCounter++;
		var canID = "can" + idx;
		boilerplate.createMIAmmDC(idx, canID, cssObject);
	};
	vw.renderMIAmmACView = function(id, cssObject) {
		var idx = id + MIAmmACCounter++;
		var canID = "can" + idx;
		boilerplate.createMIAmmAC(idx, canID, cssObject);
	};
	vw.renderMIVoltDCView = function(id, cssObject) {
		var idx = id + MIVoltDCCounter++;
		var canID = "can" + idx;
		boilerplate.createMIVoltDC(idx, canID, cssObject);
	};
	vw.renderMIVoltACView = function(id, cssObject) {
		var idx = id + MIVoltACCounter++;
		var canID = "can" + idx;
		boilerplate.createMIVoltAC(idx, canID, cssObject);
	};
	vw.renderMIWattNormalView = function(id, cssObject) {
		var idx = id + MIWattNormalCounter++;
		var canID = "can" + idx;
		boilerplate.createMIWattNormal(idx, canID, cssObject);
	};
	vw.renderMIWattLowFactorView = function(id, cssObject) {
		var idx = id + MIWattLowFactorCounter++;
		var canID = "can" + idx;
		boilerplate.createMIWattLowFactor(idx, canID, cssObject);
	};
	vw.renderMIPowerFactorView = function(id, cssObject) {
		var idx = id + MIPowerFactorCounter++;
		var canID = "can" + idx;
		boilerplate.createMIPowerFactor(idx, canID, cssObject);
	};
	vw.renderMITachometerView = function(id, cssObject) {
		var idx = id + MITachometerCounter++;
		var canID = "can" + idx;
		boilerplate.createMITachometer(idx, canID, cssObject);
	};
	vw.renderCouplingView = function(id, cssObject) {
		var idx = id + couplingCounter++;
		var canID = "can" + idx;
		boilerplate.createcoupling(idx, canID, cssObject);
	};
	vw.renderVarSinglePhaseView = function(id, cssObject) {
		var idx = id + VarSinglePhaseCounter++;
		var canID = "can" + idx;
		boilerplate.createVarSinglePhase(idx, canID, cssObject);
	};

	vw.renderVVVFSinglePhaseView = function(id, cssObject) {
		var idx = id + VVVFSinglePhaseCounter++;
		var canID = "can" + idx;
		boilerplate.createVVVFSinglePhase(idx, canID, cssObject);
	};

	vw.renderVVVFThreePhaseView = function(id, cssObject) {
		var idx = id + VVVFThreePhaseCounter++;
		var canID = "can" + idx;
		boilerplate.createVVVFThreePhase(idx, canID, cssObject);
	};

	vw.renderRheostatView = function(id, cssObject) {
		var idx = id + rheostatCounter++;
		var canID = "can" + idx;
		boilerplate.createrheostat(idx, canID, cssObject);
	};

	vw.renderSwiSPSTView = function(id, cssObject) {
		var idx = id + SwiSPSTCounter++;
		var canID = "can" + idx;
		var s = new SPSTSwitch();
		s.setId(canID);
		s.setFlag(true);
		s.setSubstr("spst");
		SPSTArray.push(s);
		boilerplate.createSwiSPST(idx, canID, cssObject);
	};

	vw.renderSwiDPSTView = function(id, cssObject) {
		var idx = id + SwiDPSTCounter++;
		var canID = "can" + idx;
		var s = new SPSTSwitch();
		s.setId(canID);
		s.setFlag(true);
		s.setSubstr("dpst");
		SPSTArray.push(s);
		boilerplate.createSwiDPST(idx, canID, cssObject);
	};

	vw.renderSwiDPDTView = function(id, cssObject) {
		var idx = id + SwiDPDTCounter++;
		var canID = "can" + idx;
		var s = new SPSTSwitch();
		s.setId(canID);
		s.setFlag(true);
		s.setSubstr("dpdt");
		s.setState("m");
		SPSTArray.push(s);
		boilerplate.createSwiDPDT(idx, canID, cssObject);
	};
	vw.renderSwiTPSTView = function(id, cssObject) {
		var idx = id + SwiTPSTCounter++;
		var canID = "can" + idx;
		var s = new SPSTSwitch();
		s.setId(canID);
		s.setFlag(true);
		s.setSubstr("tpst");
		SPSTArray.push(s);
		boilerplate.createSwiTPST(idx, canID, cssObject);
	};
	vw.renderSwiTPDTView = function(id, cssObject) {
		var idx = id + SwiTPDTCounter++;
		var canID = "can" + idx;
		var s = new SPSTSwitch();
		s.setId(canID);
		s.setFlag(true);
		s.setSubstr("tpdt");
		s.setState("m");
		SPSTArray.push(s);
		boilerplate.createSwiTPDT(idx, canID, cssObject);
	};

	vw.renderShortCircuitView = function(id, cssObject) {
		var idx = id + ShortCircuitCounter++;
		var canID = "can" + idx;
		boilerplate.createShortCircuit(idx, canID, cssObject);
	};

	vw.renderByPassView = function(id, cssObject) {
		var idx = id + ByPassCounter++;
		var canID = "can" + idx;
		boilerplate.createByPass(idx, canID, cssObject);
	};
	vw.renderMechRotorView = function(id, cssObject) {
		var idx = id + MechRotorCounter++;
		var canID = "can" + idx;
		boilerplate.createMechRotor(idx, canID, cssObject);
	};

	vw.renderVariacThreePhaseView = function(id, cssObject) {
		var idx = id + VariacThreePhaseCounter++;
		var canID = "can" + idx;
		boilerplate.createVariacThreePhase(idx, canID, cssObject);
	};
	vw.getSPSTArray = function() {
		return SPSTArray;
	}

	vw.getexp1bArrayDpst = function() {
		return exp1bArrayDpst;
	}

	vw.getexp2ArrayDpst1 = function() {
		return exp2ArrayDpst1;
	}

	vw.getexp2ArrayDpst2 = function() {
		return exp2ArrayDpst2;
	}

	vw.getexp2ArrayDpst3 = function() {
		return exp2ArrayDpst3;
	}
	vw.getexp2ArrayDpst4 = function() {
		return exp2ArrayDpst4;
	}
	vw.getexp2ArrayDpst5 = function() {
		return exp2ArrayDpst5;
	}
	vw.getexp2ArrayDpst6 = function() {
		return exp2ArrayDpst6;
	}
	vw.getexp2ArrayDpst7 = function() {
		return exp2ArrayDpst7;
	}
	vw.getexp2ArrayDpst8 = function() {
		return exp2ArrayDpst8;
	}
	vw.getexp2ArrayDpst9 = function() {
		return exp2ArrayDpst9;
	}
	vw.getexp3ArrayDpst1 = function() {
		return exp3ArrayDpst1;
	}

	vw.getexp3ArrayDpst2 = function() {
		return exp3ArrayDpst2;
	}
	vw.getexp4aArrayDpst = function() {
		return exp4aArrayDpst;
	}
	vw.getexp4bArrayDpst = function() {
		return exp4bArrayDpst;
	}
	vw.getexp5ArrayTPst = function() {
		return exp5ArrayTpst;
	}
	vw.getexp7aArrayDpst = function() {
		return exp7aArrayDpst;
	}
	vw.getexp7aArrayDpst1 = function() {
		return exp7aArrayDpst1;
	}

	vw.getexp7bArrayDpst = function() {
		return exp7bArrayDpst;
	}

	vw.getexp8ArrayDpst = function() {
		return exp8ArrayDpst;
	}

	vw.getexp9ArrayDpst = function() {
		return exp9ArrayDpst;
	}

	vw.getexp9ArrayTpst = function() {
		return exp9ArrayTpst;
	}

	vw.getexp9ArrMainLoad = function() {
		return exp9ArrMainLoad;
	}

	vw.getexp9ArrLoad1 = function() {
		return exp9ArrLoad1;
	}
	vw.getexp9ArrLoad2 = function() {
		return exp9ArrLoad2;
	}
	vw.getexp9ArrLoad3 = function() {
		return exp9ArrLoad3;
	}
	vw.getexp9ArrLoad4 = function() {
		return exp9ArrLoad4;
	}
	vw.getexp9ArrLoad5 = function() {
		return exp9ArrLoad5;
	}

	vw.renderExperiment2View = function(id, cssObject) {
		var idx = id + Experiment2Counter++;
		var canID = "can" + idx;
		ExpId = id;
		var s1 = new exp2Switch1();
		var s2 = new exp2Switch2();
		var s3 = new exp2Switch3();
		var s4 = new exp2Switch4();
		var s5 = new exp2Switch5();
		var s6 = new exp2Switch5();
		var s7 = new exp2Switch5();
		var s8 = new exp2Switch5();
		var s9 = new exp2Switch5();
		s1.setId(canID);
		s1.setFlag(true);
		s1.setSubstr("exp31");
		s2.setId(canID);
		s2.setFlag(true);
		s2.setSubstr("exp31");
		s3.setId(canID);
		s3.setFlag(true);
		s3.setSubstr("exp21");
		s4.setId(canID);
		s4.setFlag(true);
		s4.setSubstr("exp21");
		s5.setId(canID);
		s5.setFlag1(true);
		s5.setSubstr("exp21");
		s6.setId(canID);
		s6.setFlag2(true);
		s6.setSubstr("exp21");
		s7.setId(canID);
		s7.setFlag3(true);
		s7.setSubstr("exp21");
		s8.setId(canID);
		s8.setFlag4(true);
		s8.setSubstr("exp21");
		s9.setId(canID);
		s9.setFlag5(true);
		s9.setSubstr("exp21");
		exp2ArrayDpst1.push(s1);
		exp2ArrayDpst2.push(s2);
		exp2ArrayDpst3.push(s3);
		exp2ArrayDpst4.push(s4);
		exp2ArrayDpst5.push(s5);
		exp2ArrayDpst6.push(s6);
		exp2ArrayDpst7.push(s7);
		exp2ArrayDpst8.push(s8);
		exp2ArrayDpst9.push(s9);
		boilerplate.createExperiment2(idx, canID, cssObject);
	};

	vw.renderExperiment3View = function(id, cssObject) {
		var idx = id + Experiment3Counter++;
		var canID = "can" + idx;
		ExpId = id;

		var s = new exp3Switch();
		var s1 = new exp3Switch1();
		s.setId(canID);
		s.setFlag(true);
		s.setSubstr("exp31");
		s1.setId(canID);
		s1.setFlag(true);
		s1.setSubstr("exp31");
		exp3ArrayDpst1.push(s);
		exp3ArrayDpst2.push(s1);
		boilerplate.createExperiment3(idx, canID, cssObject);

	};
	vw.renderExperiment7aView = function(id, cssObject) {
		var idx = id + Experiment7aCounter++;
		ExpId = id;

		var canID = "can" + idx;
		var s = new exp7aSwitch();
		var s1 = new exp7aSwitch1();
		s.setId(canID);
		s.setFlag(true);
		s.setSubstr("exp7a");
		s1.setId(canID);
		s1.setFlag(true);
		s1.setSubstr("exp7a");
		exp7aArrayDpst.push(s);
		exp7aArrayDpst1.push(s1);
		boilerplate.renderExperiment7a(idx, canID, cssObject);
	}
	vw.renderExperiment1aView = function(id, cssObject) {

		var idx = id + Experiment1aCounter++;
		var canID = "can" + idx;
		boilerplate.createExperiment1a(idx, canID, cssObject);
	}
	vw.renderExperiment1bView = function(id, cssObject) {
		var idx = id + Experiment1bCounter++;
		var canID = "can" + idx;
		ExpId = id;

		var s = new exp1bSwitch();
		s.setId(canID);
		s.setArmatureFlag(true);
		s.setMotorFlag(true);
		s.setMainLoadFlag(true);
		s.setLoad1Flag(true);
		s.setLoad2Flag(true);
		s.setLoad3Flag(true);
		s.setLoad4Flag(true);
		s.setLoad5Flag(true);
		s.setSubstr("exp1b");
		exp1bArrayDpst.push(s);

		boilerplate.createExperiment1b(idx, canID, cssObject);
	}

	vw.renderExperiment5View = function(id, cssObject) {
		var idx = id + Experiment5Counter++;
		var canID = "can" + idx;
		var s = new exp5Switch();
		s.setId(canID);
		s.setMainLoad(true);
		s.setLoad1(true);
		s.setLoad2(true);
		s.setLoad3(true);
		s.setLoad4(true);
		s.setLoad5(true);
		s.setSubstr("exp5");
		exp5ArrayTpst.push(s);
		ExpId = id;
		boilerplate.createExperiment5(idx, canID, cssObject);
	}
	vw.renderExperiment6aView = function(id, cssObject) {
		var idx = id + Experiment6aCounter++;
		var canID = "can" + idx;
		boilerplate.createExperiment6a(idx, canID, cssObject);
	}
	vw.renderExperiment8View = function(id, cssObject) {
		var idx = id + Experiment8Counter++;
		var canID = "can" + idx;
		ExpId = id;

		var s = new exp8Switch();
		s.setId(canID);
		s.setDpst1Flag(true);
		s.setDpst2Flag(true);
		s.setSubstr("exp8");
		s.setSwitchR3T(true);
		s.setSwitchR2T(true);
		s.setSwitchR1T(true);
		s.setSwitchR3T1(true);
		s.setSwitchR3T2(true);
		s.setSwitchR3T3(true);
		s.setSwitchR3T4(true);
		s.setSwitchR3T5(true);
		s.setSwitchR2T1(true);
		s.setSwitchR2T1(true);
		s.setSwitchR2T1(true);
		s.setSwitchR2T3(true);
		s.setSwitchR2T4(true);
		s.setSwitchR2T5(true);
		s.setSwitchR1T1(true);
		s.setSwitchR1T2(true);
		s.setSwitchR1T3(true);
		s.setSwitchR1T4(true);
		s.setSwitchR1T5(true);
		exp8ArrayDpst.push(s);
		boilerplate.renderExperiment8(idx, canID, cssObject);
	}
	vw.renderExperiment9View = function(id, cssObject) {
		var idx = id + Experiment9Counter++;
		var canID = "can" + idx;
		ExpId = id;
		var s = new exp9Switch();
		s.setId(canID);
		s.setDpstFlag(true);
		s.setTpstFlag(true);
		s.setMainLoadFlag(true);
		s.setLoad1Flag(true);
		s.setLoad2Flag(true);
		s.setLoad3Flag(true);
		s.setLoad4Flag(true);
		s.setLoad5Flag(true);
		s.setSubstr("exp9");
		exp9ArrayDpst.push(s);
		exp9ArrayTpst.push(s);
		exp9ArrMainLoad.push(s);
		exp9ArrLoad1.push(s);
		exp9ArrLoad2.push(s);
		exp9ArrLoad3.push(s);
		exp9ArrLoad4.push(s);
		exp9ArrLoad5.push(s);
		boilerplate.renderExperiment9(idx, canID, cssObject);
	}
	vw.renderExperiment7bView = function(id, cssObject) {
		var idx = id + Experiment7bCounter++;
		var canID = "can" + idx;
		ExpId = id;
		var s = new exp7bSwitch();
		s.setId(canID);
		s.setDpst1Flag(true);
		s.setDpst2Flag(true);
		s.setSubstr("exp7b");
		exp7bArrayDpst.push(s);
		boilerplate.renderExperiment7b(idx, canID, cssObject);
	}
	vw.renderExperiment4aView = function(id, cssObject) {
		var idx = id + Experiment4acounter++;
		var canID = "can" + idx;
		var s = new exp4aSwitch();
		s.setId(canID);
		s.setFlag(true);
		s.setSubstr("exp4a");
		exp4aArrayDpst.push(s);
		ExpId = id;
		boilerplate.renderExperiment4a(idx, canID, cssObject);
	}
	vw.renderExperiment6bView = function(id, cssObject) {
		var idx = id + Experiment6bCounter++;
		var canID = "can" + idx;
		boilerplate.renderExperiment6b(idx, canID, cssObject);
	}
	vw.renderExperiment4bView = function(id, cssObject) {
		var idx = id + Experiment4bCounter++;
		var canID = "can" + idx;
		var s = new exp4bSwitch();
		s.setId(canID);
		s.setFlag(true);
		s.setSubstr("exp4b");
		exp4bArrayDpst.push(s);
		ExpId = id;
		boilerplate.renderExperiment4b(idx, canID, cssObject);
	}
	vw.renderExperiment10aView = function(id, cssObject) {
		var idx = id + Experiment10aCounter++;
		var canID = "can" + idx;
		boilerplate.renderExperiment10a(idx, canID, cssObject);

	}
	vw.renderExperiment10bView = function(id, cssObject) {
		var idx = id + Experiment10bCounter++;
		var canID = "can" + idx;
		boilerplate.renderExperiment10b(idx, canID, cssObject);
	}

	vw.expViewStoreData = function() {

		datastore3.exp3StoreData();
		datastore1b.exp1bStoreData();
		datastore2.exp2StoreData();
		datastore4a.exp4aStoreStoreData();
		datastore4b.exp4bStoreStoreData();
		datastore7a.exp7aStoreData();
		datastore7b.exp7bStoreData();
		datastore8.exp8StoreData();
		datastore9.exp9StoreData();
		//datastore5.exp5StoreData();
	}
	vw.exp1bViewClearData = function() {
		datastore1b.exp1bDataClearData(ExpId);
	}

	vw.exp2ViewClearData = function() {
		datastore2.exp2DataClearData(ExpId);
	}

	vw.exp3ViewClearData = function() {
		datastore3.exp3DataClearData(ExpId);
	}
	vw.exp4aViewClearData = function() {
		datastore4a.exp4aDataClearData(ExpId);
	}
	vw.exp4bViewClearData = function() {
		datastore4b.exp4bDataClearData(ExpId);
	}
	vw.exp5ViewClearData = function() {
		datastore5.exp5DataClearData(ExpId);
	}
	vw.exp7aViewClearData = function() {
		datastore7a.exp7aDataClearData(ExpId);
	}
	vw.exp7bViewClearData = function() {
		datastore7b.exp7bDataClearData(ExpId);
	}
	vw.exp8ViewClearData = function() {
		datastore8.exp8DataClearData(ExpId);
	}
	vw.exp9ViewClearData = function() {
		datastore9.exp9DataClearData(ExpId);
	}

	vw.generateViewGraph = function(selectedId) {
		var graph = new viewGraph();
		graph.generateGraph(selectedId, ExpId);
	}

	vw.showData = function() {
		
		if(ExpId == "exp1b") {
			expName = "exp1b";
			var Iash=[];
			genOpExp1b = model.get("genOutput");
			IagExp1b = model.get("genInput");
			IfgExp1b = model.get("ampereFieldExp1b");
			VaExp1b = model.get("voltageFieldExp1b");
			IinExp1b = model.get("ampereMotorExp1b");
			console.log("Iash:"+IinExp1b);
			VinExp1b = model.get("voltageMotorExp1b");
			VtExp1b = model.get("voltageGenExp1b");
			speedExp1b = model.get("speedExp1b");
			emfExp1b = model.get("emfExp1b");
			motOpExp1b = model.get("motorop");
			motEffExp1b = model.get("Exp1bMotEff");
			GenEffExp1b = model.get("GenEff");
			if(IagExp1b.length != 0) {
				$('table').replaceWith("<table border='1' id='myTableExp1b' style='background-color:#FFFFFF;height: 50px;width:50px;' ></table>");
				$('table').append("<tr style = 'background-color:#4169E1'><th>V<sub>ASH</sub> <font size=1>(Volt)</font></th>" + "<th>I<sub>ASH</sub> <font size=1>(Amp)</font></th>" + "<th>V<sub>FSE</sub> <font size=1>(Volt)</font></th>" + "<th>I<sub>FSE</sub> <font size=1>(Amp)</th>" + "<th>V<sub>ASE</sub> <font size=1>(Volt)</font></th>" + "<th>I<sub>ASE</sub> <font size=1>(Amp)</th>" + "<th>speed <font size=1>(r.p.m)</font></th>" + "<th>Motor Effi</th><th>Delete Row</th></tr>");
				for(var i = 0; i < IagExp1b.length; i++) {
						Iash[i] = IinExp1b[i];
						Iash[i] = Iash[i].toFixed(2);
					
					$('table').append("<tr style = 'background-color:#BDB76B' >" + "<td>" + VinExp1b[i] + "</td>" + "<td>" + Iash[i] + "</td>" + "<td>" + VaExp1b[i] + "</td>" + "<td>" + IfgExp1b[i].toFixed(2) + "</td>" + "<td>" + VtExp1b[i].toFixed(2) + "</td>" + "<td>" + IagExp1b[i].toFixed(2) + "</td>" + "<td>" + speedExp1b[i].toFixed(0) + "</td>" + "<td>" + motEffExp1b[i].toFixed(2) + "</td>" +"</td><td><input type='image' src='img/close.jpg' onclick='deleteRow(this,expName)' alt='Submit'  width='20' height='20' style='height: 18px; margin-left: 11px;'></td></tr>");
				}
			} else {
				$('table').replaceWith("<table border='1'  style='background-color:#FFFFFF;height: 50px;width:50px;' ></table>");
			}
		}

		if(ExpId == "exp2") {
			expName = "exp2";
			IagExp2 = model.get("IagExp2");
			VfExp2 = model.get("voltageExp2");
			IfExp2 = model.get("ampereExp2");
			VaExp2 = model.get("VaExp2");
			IaExp2 = model.get("ActIaExp2");
			VfgExp2 = model.get("VfgExp2");
			IfgExp2 = model.get("IfgExp2");
			VtExp2 = model.get("VtExp2");
			speedExp2 = model.get("ActualspeedExp2");
			MotEffexp2 = model.get("Exp2MotEff");
			motOpExp2 = model.get("genIpExp2");
			TorqueExp2 = model.get("TorqueExp2");

			if(IagExp2.length != 0) {
				$('table').replaceWith("<table border='1' id='myTableExp2' style='background-color:#FFFFFF;height: 50px;width:20px;'></table>");
				//$('table').append("<tr style = 'background-color:#4169E1'><th>Vf</th><th>If</th><th>Va</th><th>Ia</th><th>Vfg</th><th>Ifg</th><th>Vt</th><th>Iag</th><th>Speed</th><th>Efficiency</th></tr>");
				$('table').append("<tr style = 'background-color:#4169E1'><th>V<sub>FM</sub> <font size=1>(Volt)</font></th>" + "<th>I<sub>FM</sub> <font size=1>(Amp)</font></th>" + "<th>V<sub>AM</sub> <font size=1>(Volt)</font></th>" + "<th>I<sub>AM</sub> <font size=1>(Amp)</th>" + "<th>V<sub>FG</sub> <font size=1>(Volt)</font></th>" + "<th>I<sub>FG</sub> <font size=1>(Amp)</th>" + "<th>V<sub>AG</sub> <font size=1>(Volt)</font></th>" + "<th>I<sub>AG</sub> <font size=1>(Amp)</th>" + "<th>speed <font size=1>(r.p.m)</font></th>" + "<th>Motor o/p<font size=1></font></th>" + "<th>Motor Eff</th>" + "<th>Torque</th><th>Delete Row</th></tr>");
				for(var i = 0; i < IagExp2.length; i++) {
					//$('table').append("<tr style = 'background-color:#BDB76B' >" + "<td>" + Vf[i] + "</td>" + "<td>" + If[i].toFixed(2) + "</td>" + "<td>" + Va[i] + "</td>" + "<td>" + Ia[i].toFixed(2) + "</td>" + "<td>" + Vfg[i] + "</td>" + "<td>" + Ifg[i].toFixed(2) + "</td>" + "<td>" + Vt[i].toFixed(0) + "</td>" + "<td>" + IagExp2[i].toFixed(2) + "</td>" + "<td>" + speedExp2[i].toFixed(0) + "</td>" + "<td>" + Effexp2[i].toFixed(2) + "</td></tr>");
					$('table').append("<tr style = 'background-color:#BDB76B' >" + "<td>" + VfExp2[i] + "</td>" + "<td>" + IfExp2[i].toFixed(2) + "</td>" + "<td>" + VaExp2[i] + "</td>" + "<td>" + IaExp2[i].toFixed(2) + "</td>" + "<td>" + VfgExp2[i] + "</td>" + "<td>" + IfgExp2[i].toFixed(2) + "</td>" + "<td>" + VtExp2[i].toFixed(0) + "</td>" + "<td>" + IagExp2[i].toFixed(2) + "</td>" + "<td>" + speedExp2[i].toFixed(0) + "</td>" + "<td>" + motOpExp2[i].toFixed(2) + "</td>" + "<td>" + MotEffexp2[i].toFixed(2) + "</td>" + "<td>" + TorqueExp2[i].toFixed(2) + "</td><td><input type='image' src='img/close.jpg' onclick='deleteRow(this,expName)' alt='Submit'  width='20' height='20' style='height: 18px; margin-left: 11px;'></td></tr>");
				}
			} else {
				$('table').replaceWith("<table border='1'  style='background-color:#FFFFFF;height: 50px;width:50px;' ></table>");
			}
		}

		if(ExpId == "exp3") {
			expName = "exp3";
			IfmExp3 = model.get("ampereValue");
			VfmExp3 = model.get("voltageValue");
			speedArrExp3 = model.get("correctSpeedValue");
			VamExp3 = model.get("voltageValue1");
			IamExp3 = model.get("ampereValue1");
			MotOpExp3 = model.get("genInput");

			if(IfmExp3.length < IamExp3.length) {
				var len = IamExp3.length;
			} else {
				var len = IfmExp3.length;
			}
			if(len != 0) {
				$('table').replaceWith("<table border='1' id = 'myTableExp3' style='background-color:#FFFFFF;height: 50px;width:50px;' ></table>");
				$('table').append("<tr style = 'background-color:#4169E1'><th>V<sub>FM</sub> <font size=1>(Volt)</font></th>" + "<th>I<sub>FM</sub> <font size=1>(Amp)</font></th>" + "<th>V<sub>AM</sub> <font size=1>(Volt)</font></th>" + "<th>I<sub>AM</sub> <font size=1>(Amp)</th>" + "<th>speed <font size=1>(r.p.m)</font></th><th>Delete Row</th></tr>");
				for(var i = 0; i < len; i++) {
					$('table').append("<tr style = 'background-color:#BDB76B' >" + "<td>" + VfmExp3[i] + "</td>" + "<td>" + IfmExp3[i].toFixed(2) + "</td>" + "<td>" + VamExp3[i] + "</td>" + "<td>" + IamExp3[i].toFixed(2) + "</td>" + "<td>" + speedArrExp3[i].toFixed(2) + "</td><td><input type='image' src='img/close.jpg' onclick='deleteRow(this,expName)' alt='Submit'  width='20' height='20' style='height: 18px; margin-left: 11px;'></td></tr>");
				}
			}

		}
		if(ExpId == "exp4a") {
			expName = "exp4a";
			coreLossExp4a = model.get("coreLossExp4a");
			VsExp4a = model.get("supplyVoltageExp4a");
			IlExp4a = model.get("current4a");
			watt1Exp4a = model.get("firstwattreading4a");
			watt2Exp4a = model.get("secondwattreading4a");
			powerExp4a = model.get("power4a");
			rotorangleExp4a = model.get("rotorangle4a");
			copperlossExp4a = model.get("totalcopperloss4a");
			speedExp4a = model.get("speed4a");

			if(coreLossExp4a.length != 0) {
				$('table').replaceWith("<table border='1' id='myTableExp4a' style='background-color:#FFFFFF;height: 50px;width:50px;' ></table>");
				$('table').append("<tr style = 'background-color:#4169E1'><th>V<sub>S</sub> <font size=1>(Volt)</font></th><th>I<sub>L</sub> <font size=1>(Amp)</font></th><th>W-1 <font size=1>(Watt)</font></th><th>W-2 <font size=1>(Watt)</font></th><th>Speed <font size=1>(r.p.m)</font></th><th>Total copper loss</th><th>Rotor angle</th><th>i/p Power</th><th>Delete Row</th></tr>");
				for(var i = 0; i < coreLossExp4a.length; i++) {
					$('table').append("<tr style = 'background-color:#BDB76B' >" + "<td>" + VsExp4a[i].toFixed(2) + "</td>" + "<td>" + IlExp4a[i].toFixed(2) + "</td>" + "<td>" + watt1Exp4a[i] + "</td>" + "<td>" + watt2Exp4a[i] + "</td>" + "<td>" + speedExp4a[i].toFixed(2) + "</td>" + "<td>" + copperlossExp4a[i].toFixed(2) + "</td>" + "<td>" + rotorangleExp4a[i] + "</td>" + "<td>" + powerExp4a[i].toFixed(2) + "</td>" + "<td><input type='image' src='img/close.jpg' onclick='deleteRow(this,expName)' alt='Submit'  width='20' height='20' style='height: 18px; margin-left: 11px;'></td> </tr>");
				}
			} else {
				$('table').replaceWith("<table border='1'  style='background-color:#FFFFFF;height: 50px;width:50px;' ></table>");
			}

		}
		if(ExpId == "exp4b") {
			expName = "exp4b";
			phaseCurrentExp4b = model.get("statorPhaseCurrentexp4b");
			totalCopperLossExp4b = model.get("totalCopperLossexp4b");
			RotorAngleExp4b = model.get("blockRotorAngleexp4b");
			RotorSupplyVoltageExp4b = model.get("blockRotorSupplyVoltageexp4b");
			ipPowerExp4b = model.get("power4b");
			firstwattExp4b = model.get("firstwattreading4b");
			secondwattExp4b = model.get("secondwattreading4b");
			ILExp4b = model.get("lineCurrent");

			if(RotorAngleExp4b.length != 0) {
				$('table').replaceWith("<table border='1' id='myTableExp4b' style='background-color:#FFFFFF;height: 50px;width:50px;' ></table>");
				//$('table').append("<tr style = 'background-color:#4169E1'><th>Current</th><th>Total Copper Loss</th><th>Rotor Angle</th><th>Supply Voltage</th></tr>");
				$('table').append("<tr style = 'background-color:#4169E1'><th>V<sub>S</sub> <font size=1>(Volt)</font></th>" + "<th>I<sub>L</sub> <font size=1>(Amp)</font></th>" + "<th>W-1 <font size=1>(Watt)</font></th>" + "<th>W-2 <font size=1>(Watt)</font></th>" + "<th>Speed <font size=1>(r.p.m)</font></th>" + "<th>Total Copper Loss</th>" + "<th>Rotor Angle</th>" + "<th>i/p power</th><th>Delete Row</th></tr>");
				for(var i = 0; i < RotorAngleExp4b.length; i++) {
					//$('table').append("<tr style = 'background-color:#BDB76B' >" + "<td>" + RotorSupplyVoltage[i].toFixed(0) + "</td>" +"<td>" + phaseCurrent[i].toFixed(2) + "</td>" + "<td>" + totalCopperLoss[i].toFixed(2) + "</td>" + "<td>" + RotorAngle[i].toFixed(2) + "</td>" + "<td>" + RotorSupplyVoltage[i].toFixed(0) + "</td></tr>");
					$('table').append("<tr style = 'background-color:#BDB76B' >" + "<td>" + RotorSupplyVoltageExp4b[i].toFixed(0) + "</td>" + "<td>" + ILExp4b[i] + "</td>" + "<td>" + firstwattExp4b[i] + "</td>" + "<td>" + secondwattExp4b[i] + "</td>" + "<td>" + 0.00 + "</td>" + "<td>" + totalCopperLossExp4b[i].toFixed(2) + "</td>" + "<td>" + RotorAngleExp4b[i].toFixed(2) + "</td>" + "<td>" + ipPowerExp4b[i].toFixed(2) + "</td><td><input type='image' src='img/close.jpg' onclick='deleteRow(this,expName)' alt='Submit'  width='20' height='20' style='height: 18px; margin-left: 11px;'></td></tr>");
				}
			} else {
				$('table').replaceWith("<table border='1'  style='background-color:#FFFFFF;height: 50px;width:50px;' ></table>");
			}
		}

		if(ExpId == "exp5") {
			var volt = model.get("Exp5Voltage");
			var Il = model.get("Exp5DcCurrent");
			var Iml = model.get("Exp5AcCurrent");
			var Vt = model.get("Exp5genVoltage");
			var speed = model.get("Exp5Speed");
			var watt1 = model.get("Exp5WattReading1");
			var watt2 = model.get("Exp5WattReading2");

			if(Il.length != 0) {
				$('table').replaceWith("<table border='1'  style='background-color:#FFFFFF;height: 50px;width:50px;' ></table>");
				$('table').append("<tr style = 'background-color:#4169E1'><th>Voltage</th><th>DcCurrent</th><th>GenVoltage</th><th>AcCurrent</th><th>speed</th></tr>");
				for(var i = 0; i < Il.length; i++) {
					$('table').append("<tr style = 'background-color:#BDB76B' >" + "<td>" + volt[i] + "</td>" + "<td>" + Il[i].toFixed(2) + "</td>" + "<td>" + Vt[i] + "</td>" + "<td>" + Iml[i].toFixed(2) + "</td>" + "<td>" + speed[i].toFixed(0) + "</td></tr>");
				}
			} else {
				$('table').replaceWith("<table border='1'  style='background-color:#FFFFFF;height: 50px;width:50px;' ></table>");
			}
		}

		if(ExpId == "exp7a") {
			expName = "exp7a";
			IfaExp7a = model.get("ampereFieldExp7a");
			VfaExp7a = model.get("voltageFieldExp7a");
			IinExp7a = model.get("ampereMotorExp7a");
			VinExp7a = model.get("voltageMotorExp7a");
			VtExp7a = model.get("voltageAltExp7a");
			speedExp7a = model.get("speedExp7a");
			corelossExp7a = model.get("corLossAlt7a");
			motoropExp7a = model.get("motorOutput7a");
			if(IfaExp7a.length != 0) {
				$('table').replaceWith("<table border='1' id='myTableExp7a' style='background-color:#FFFFFF;height: 50px;width:50px;' ></table>");
				//$('table').append("<tr style = 'background-color:#4169E1'><th>Ifa</th><th>Vfa</th><th>Iin</th><th>Vin</th><th>Vt</th><th>Speed</th></tr>");
				$('table').append("<tr style = 'background-color:#4169E1'><th>I<sub>ASH</sub> <font size=1>(Amp)</font> </th>" + "<th>V<sub>ASH</sub> <font size=1>(Volt)</font> </th>" + "<th>V<sub>FA</sub> <font size=1>(Volt)</font></th>" + "<th>I<sub>FA</sub> <font size=1>(Amp)</font></th>" + "<th>V<sub>OC</sub> <font size=1>(Volt)</font></th>" + "<th>N(speed) <font size=1>(R.P.M)</font></th>" + "<th>Alt.Coreloss <font size=1>(Watt)</font></th>" + "<th>Mot o/p</th> <font size=1>(Volt)</font><th>Delete Row</th></tr>");
				for(var i = 0; i < IfaExp7a.length; i++) {
					//$('table').append("<tr style = 'background-color:#BDB76B' >" + "<td>" + Ifa[i].toFixed(2) + "</td>" + "<td>" + Vfa[i] + "</td>" + "<td>" + Iin[i].toFixed(2) + "</td>" + "<td>" + Vin[i] + "</td>" + "<td>" + Vt[i].toFixed(0) + "</td>" + "<td>" + speed[i].toFixed(2) + "</td></tr>");
					$('table').append("<tr style = 'background-color:#BDB76B' >" + "<td>" + IinExp7a[i].toFixed(2) + "</td>" + "<td>" + VinExp7a[i] + "</td>" + "<td>" + VfaExp7a[i] + "</td>" + "<td>" + IfaExp7a[i].toFixed(2) + "</td>" + "<td>" + VtExp7a[i].toFixed(2) + "</td>" + "<td>" + speedExp7a[i].toFixed(2) + "</td>" + "<td>" + corelossExp7a[i].toFixed(2) + "</td>" + "<td>" + motoropExp7a[i].toFixed(2) + "</td><td><input type='image' src='img/close.jpg' onclick='deleteRow(this,expName)' alt='Submit'  width='20' height='20' style='height: 18px; margin-left: 11px;'></td></tr>");
				}
			} else {
				$('table').replaceWith("<table border='1'  style='background-color:#FFFFFF;height: 50px;width:50px;' ></table>");
			}

		}

		if(ExpId == "exp7b") {
			expName = "exp7b";
			IinExp7b = model.get("ampMotorExp7b");
			VfaExp7b = model.get("voltageFieldExp7b");
			IfaExp7b = model.get("ampereFieldExp7b");
			VinExp7b = model.get("voltMotorExp7b");
			IscExp7b = model.get("ampMotFieldExp7b");
			speedExp7b = model.get("speedExp7b");
			motoropExp7b = model.get("MotOpExp7b");

			if(IfaExp7b.length != 0) {
				$('table').replaceWith("<table border='1' id='myTableExp7b' style='background-color:#FFFFFF;height: 50px;width:50px;' ></table>");
				//$('table').append("<tr style = 'background-color:#4169E1'><th>Vfa</th><th>Ifa</th><th>Vin</th><th>Iin</th><th>Isc</th><th>speed</th></tr>");
				$('table').append("<tr style = 'background-color:#4169E1'><th>I<sub>ASH</sub> <font size=1>(Amp)</font></th>" + "<th>V<sub>ASH</sub> <font size=1>(Volt)</font></th>" + "<th>V<sub>FA</sub> <font size=1>(Volt)</font></th>" + "<th>I<sub>FA</sub> <font size=1>(Amp)</font></th>" + "<th>I<sub>SC</sub> <font size=1>(Amp)</font></th>" + "<th>N(speed) <font size=1>(R.P.M)</font></th>" + "<th>Mot o/p <font size=1>(Volt)</font></th><th>Delete Row</th></tr>");
				for(var i = 0; i < IfaExp7b.length; i++) {
					//$('table').append("<tr style = 'background-color:#BDB76B' >" + "<td>" + VfaExp7b[i] + "</td>" + "<td>" + IfaExp7b[i].toFixed(2) + "</td>" + "<td>" + VinExp7b[i] + "</td>" + "<td>" + IinExp7b[i].toFixed(2) + "</td>" + "<td>" + Isc[i].toFixed(2) + "</td>" + "<td>" + speed[i].toFixed(0) + "</td></tr>");
					$('table').append("<tr style = 'background-color:#BDB76B' >" + "<td>" + IinExp7b[i].toFixed(2) + "</td>" + "<td>" + VinExp7b[i] + "</td>" + "<td>" + VfaExp7b[i] + "</td>" + "<td>" + IfaExp7b[i].toFixed(2) + "</td>" + "<td>" + IscExp7b[i].toFixed(2) + "</td>" + "<td>" + speedExp7b[i].toFixed(2) + "</td>" + "<td>" + motoropExp7b[i].toFixed(2) + "</td><td><input type='image' src='img/close.jpg' onclick='deleteRow(this,expName)' alt='Submit'  width='20' height='20' style='height: 18px; margin-left: 11px;'></td></tr>");
				}
			} else {
				$('table').replaceWith("<table border='1'  style='background-color:#FFFFFF;height: 50px;width:50px;' ></table>");
			}
		}

		if(ExpId == "exp8") {
			var reg = [];
			expName = "exp8";
			IfaExp8 = model.get("ampereFieldExp8a");
			VfaExp8 = model.get("voltageFieldExp8a");
			IinExp8 = model.get("ampereMotorExp8a");
			VinExp8 = model.get("voltageMotorExp8a");
			speedExp8 = model.get("speedExp8a");
			VryExp8 = model.get("VryExp8");
			VybExp8 = model.get("VybExp8");
			VbrExp8 = model.get("VbrExp8");
			IrExp8 = model.get("IrExp8");
			IyExp8 = model.get("IyExp8");
			IbExp8 = model.get("IbExp8");
			VtExp8 = model.get("VtExp8");
			motoropExp8 = model.get("MotorOutputExp8a");
			VoltReg1Exp8 = model.get("VoltReg");
			altOpExp8 = model.get("altOpExp8");

			if(IfaExp8.length != 0) {

				$('table').replaceWith("<table border='1' id='myTableExp8' style='background-color:#FFFFFF;height: 50px;width:50px;' ></table>");
				$('table').append("<tr style = 'background-color:#4169E1'><th>I<sub>ASH</sub> <font size=1>(Amp)</font></th>" + "<th>V<sub>ASH</sub> <font size=1>(Volt)</font></th>" + "<th>I<sub>FA</sub> <font size=1>(Volt)</font></th>" + "<th>V<sub>FA</sub> <font size=1>(Amp)</font></th>" + "<th>V<sub>RY</sub> <font size=1>(Amp)</font></th>" + "<th>V<sub>YB</sub> <font size=1>(Amp)</font></th>" + "<th>V<sub>BR</sub> <font size=1>(Amp)</font></th>" + "<th>I<sub>R</sub> <font size=1>(Amp)</font></th>" + "<th>I<sub>Y</sub> <font size=1>(Amp)</font></th>" + "<th>I<sub>B</sub> <font size=1>(Amp)</font></th>" + "<th>speed <font size=1>(R.P.M)</font></th>" + "<th>Mot o/p</th>" + "<th>Volt Reg</th><th>Delete Row</th></tr>");

				for(var i = 0; i < IfaExp8.length; i++) {
					if(VoltReg1Exp8[i]=='Infinity')
					{
						VoltReg1Exp8[i]='-';
					}

					if(VoltReg1Exp8[i] != '-' ) {
						reg[i] = VoltReg1Exp8[i];
						reg[i] = reg[i].toFixed(2);
					} else {
						reg[i] = VoltReg1Exp8[i]
					}
					$('table').append("<tr style = 'background-color:#BDB76B' >" + "<td>" + IinExp8[i].toFixed(2) + "</td>" + "<td>" + VinExp8[i] + "</td>" + "<td>" + IfaExp8[i].toFixed(2) + "</td>" + "<td>" + VfaExp8[i] + "</td>" + "<td>" + VryExp8[i].toFixed(2) + "</td>" + "<td>" + VybExp8[i].toFixed(2) + "</td>" + "<td>" + VbrExp8[i].toFixed(2) + "</td>" + "<td>" + IrExp8[i].toFixed(2) + "</td>" + "<td>" + IyExp8[i].toFixed(2) + "</td>" + "<td>" + IbExp8[i].toFixed(2) + "</td>" + "<td>" + speedExp8[i].toFixed(2) + "</td>" + "<td>" + motoropExp8[i].toFixed(2) + "</td>" + "<td>" + reg[i] + "</td><td><input type='image' src='img/close.jpg' onclick='deleteRow(this,expName)' alt='Submit'  width='20' height='20' style='height: 18px; margin-left: 11px;'></td></tr>");

				}
			} else {
				$('table').replaceWith("<table border='1'  style='background-color:#FFFFFF;height: 50px;width:50px;' ></table>");
			}
		}

		if(ExpId == "exp9") {
			expName = "exp9";
			fieldVoltageExp9 = model.get("fieldVoltageExp9");
			fieldCurrentExp9 = model.get("fieldCurrentExp9");
			motorVoltageExp9 = model.get("motorVoltageExp9");
			motorCurrentExp9 = model.get("motorCurrentExp9");
			wattmeterReadingExp9 = model.get("wattmeterReadingExp9");
			VtExp9 = model.get("VtExp9");
			IlExp9 = model.get("IlExp9");
			SpeedExp9 = model.get("SpeedExp9");

			if(fieldCurrentExp9.length != 0) {
				$('table').replaceWith("<table border='1' id='myTableExp9' style='background-color:#FFFFFF;height: 50px;width:50px;' ></table>");
				$('table').append("<tr style = 'background-color:#4169E1'><th>V<sub>LL</sub> <font size=1>(Volt)</font></th><th>I<sub>AL</sub> <font size=1>(Amp)</font></th><th>V<sub>FS</sub> <font size=1>(Volt)</font></th><th>I<sub>FS</sub> <font size=1>(Amp)</font></th><th>V<sub>G</sub> <font size=1>(Volt)</font></th><th>I<sub>G</sub> <font size=1>(Amp)</font></th><th>Speed <font size=1>(R.P.M)</font></th><th>Power Factor <font size=1>(Watt)</font></th><th>Delete Row</th></tr>");

				for(var i = 0; i < fieldCurrentExp9.length; i++) {

					$('table').append("<tr style = 'background-color:#BDB76B' >" + "<td>" + motorVoltageExp9[i].toFixed(0) + "</td>" + "<td>" + motorCurrentExp9[i].toFixed(2) + "</td>" + "<td>" + fieldVoltageExp9[i] + "</td>" + "<td>" + fieldCurrentExp9[i].toFixed(2) + "</td>" + "<td>" + VtExp9[i].toFixed(0) + "</td>" + "<td>" + IlExp9[i].toFixed(2) + "</td>" + "<td>" + SpeedExp9[i].toFixed(0) + "</td>" + "<td>" + wattmeterReadingExp9[i].toFixed(2) + "</td><td><input type='image' src='img/close.jpg' onclick='deleteRow(this,expName)' alt='Submit'  width='20' height='20' style='height: 18px; margin-left: 11px;'></td></tr>");
				}
			} else {
				$('table').replaceWith("<table border='1'  style='background-color:#FFFFFF;height: 50px;width:50px;' ></table>");
			}
		}
	}
})(view);
