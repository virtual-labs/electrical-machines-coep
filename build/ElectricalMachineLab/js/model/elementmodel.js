(function() {

	this.exp_Model = Backbone.Model.extend({

		defaults : {
			//exp3
			ampereValue : [],
			voltageValue : [],
			ampereValue1 : [],
			correctSpeedValue : [],
			voltageValue1 : [],
			genOutput : [],
			genInput : [],
			
			ampereFieldExp1b : [],
			voltageFieldExp1b : [],
			ampereMotorExp1b : [],
			voltageMotorExp1b : [],
			voltageGenExp1b : [],
			speedExp1b : [],
			emfExp1b : [],
			motorop : [],
			Exp1bMotEff : [],
			GenEff:[],
			
			Exp5Voltage : [],
			Exp5DcCurrent : [],
			Exp5AcCurrent : [],
			Exp5genVoltage : [],
			Exp5Speed : [],
			Exp5WattReading1 : [],
			Exp5WattReading2 : [],
			
			ampereFieldExp7a : [],
			voltageFieldExp7a : [],
			ampereMotorExp7a : [],
			voltageMotorExp7a : [],
			voltageAltExp7a : [],
			speedExp7a : [],
			einExp7a : [],
			corLossAlt7a : [],
		    motorOutput7a : [],
		    
			ampereFieldExp8a : [],
			voltageFieldExp8a : [],
			ampereMotorExp8a : [],
			voltageMotorExp8a : [],
			altOpExp8 : [],
			inAltExp8 : [],
			efficiencyExp8 : [],
			speedExp8a : [],
			MotorOutputExp8a:[],
			VryExp8 : [],
			VybExp8 : [],
			VbrExp8 : [],
			IrExp8 : [],
			IyExp8 : [],
			IbExp8 : [],
			VtExp8 : [],
			VoltReg:[],
			
			ampereExp2 : [],
			voltageExp2 : [],
			VaExp2 : [],
			ActIaExp2 : [],
			VfgExp2 : [],
			IfgExp2 : [],
			VtExp2 : [],
			IagExp2 : [],
			ActualspeedExp2 : [],
			Exp2MotEff : [],
			genIpExp2 : [],
			ActmotIpExp2 : [],
			Ea : [],
			TorqueExp2 : [],
			MotOpExp2:[],
			
			ampereFieldExp7b : [],
			voltageFieldExp7b : [],
			voltMotorExp7b : [],
			ampMotorExp7b : [],
			ampMotFieldExp7b : [],
			speedExp7b : [],
			AltCopLossExp7b : [],
			MotOpExp7b : [],
			
			coreLossExp4a : [],
			supplyVoltageExp4a : [],
			speed4a : [],
			current4a : [],
			firstwattreading4a:[],
			secondwattreading4a:[],
			power4a:[],
			rotorangle4a:[],
			totalcopperloss4a:[],
			
			totalCopperLossexp4b : [],
			blockRotorAngleexp4b : [],
			blockRotorSupplyVoltageexp4b : [],
			statorPhaseCurrentexp4b : [],
			power4b : [],
			firstwattreading4b:[],
			secondwattreading4b:[],
			lineCurrent:[],
			
			
			fieldVoltageExp9 : [],
			fieldCurrentExp9 : [],
			motorVoltageExp9 : [],
			motorCurrentExp9 : [],
			wattmeterReadingExp9 : [],
			VtExp9 : [],
			IlExp9 : [],
			SpeedExp9 : [],

		},
		getTotalCopperLossExp4b : function(tcl) {
			var totalLoss = this.get("totalCopperLossexp4b");
			totalLoss.push(tcl);
			this.set({
				totalCopperLossexp4b : totalLoss
			});
		},
		getBlockRotorPhaseAngleExp4b : function(ra) {
			var rotorAngle = this.get("blockRotorAngleexp4b");
			rotorAngle.push(ra);
			this.set({
				blockRotorAngleexp4b : rotorAngle
			});
		},
		getBlockRorotSuppVoltageExp4b : function(rsv) {
			var suppVoltage = this.get("blockRotorSupplyVoltageexp4b");
			suppVoltage.push(rsv);
			this.set({
				blockRotorSupplyVoltageexp4b : suppVoltage
			});
		},
		getPhaseCurrentExp4b : function(pc) {
			var phaseCurrent = this.get("statorPhaseCurrentexp4b");
			phaseCurrent.push(pc);
			this.set({
				statorPhaseCurrentexp4b : phaseCurrent
			});
		},
		getPowerExp4b : function(q) {
			var Power = this.get("power4b");
			Power.push(q);
			this.set({
				power4b : Power
			});
		},
		getfirstwattreading4b : function(w) {
			var Watt1 = this.get("firstwattreading4b");
			Watt1.push(w);
			this.set({
				firstwattreading4b : Watt1
			});
		},
		getsecondwattreading4b : function(w) {
			var Watt2 = this.get("secondwattreading4b");
			Watt2.push(w);
			this.set({
				secondwattreading4b : Watt2
			});
		},
		getlineCurrent : function( a ) {
			var current = this.get("lineCurrent");
			//var cur2=parseFloat(current);
			a=parseFloat(a)
			current.push(a);
//			console.log("current:"+current);
			this.set({
				getlineCurrent : current
			});
		},
		graphCoreLossExp4a : function(cl) {
			var coreloss = this.get("coreLossExp4a");
			coreloss.push(cl);
			//console.log("core loss g:" + coreloss);
			this.set({
				coreLossExp4a : coreloss
			});
		},
		graphSupplyVoltageExp4a : function(sv) {
			var suppVoltage = this.get("supplyVoltageExp4a");
			suppVoltage.push(sv);
			//console.log("supply voltage g:" + suppVoltage);
			this.set({
				supplyVoltageExp4a : suppVoltage
			});
		},
		
		graphSpeedExp4a : function(sv) {
			var Speed = this.get("speed4a");
			Speed.push(sv);
			//console.log("supply voltage g:" + Speed);
			this.set({
				speed4a : Speed
			});
		},
		
		graphCurrentExp4a : function(sv) {
			var Current = this.get("current4a");
			Current.push(sv);
		//console.log("supply current:" + Current);
			this.set({
				current4a : Current
			});
		},
		graphfirstwattreading4a : function(w) {
			var watt1 = this.get("firstwattreading4a");
			watt1.push(w);
			//console.log("supply voltage g:" + Current);
			this.set({
				firstwattreading4a : watt1
			});
		},
		graphsecondwattreading4a : function(w) {
			var watt2 = this.get("secondwattreading4a");
			watt2.push(w);
			//console.log("supply voltage g:" + Current);
			this.set({
				secondwattreading4a : watt2
			});
		},
		graphpower4a : function(q) {
			var power = this.get("power4a");
			power.push(q);
//			console.log("i/p power:" + power);
			this.set({
				power4a : power
			});
		},
		graphrotorangle4a : function(q) {
			var angle = this.get("rotorangle4a");
			angle.push(q);
		//	console.log("angle:" + angle);
			this.set({
				rotorangle4a : angle
			});
		},
		graphtotalcopperloss4a:function(tc1) {
			var copperloss = this.get("totalcopperloss4a");
			copperloss.push(tc1);
			//console.log("copperloss:" + copperloss);
			this.set({
				totalcopperloss4a : copperloss
			});
		},		
		graphAmpere : function(a) {
			var ampere_array = this.get("ampereValue");
			ampere_array.push(a);
			this.set({
				ampereValue : ampere_array
			});
		},
		graphVoltage : function(v) {

			var voltage_array = this.get("voltageValue");
			voltage_array.push(v);
			this.set({
				voltageValue : voltage_array
			});
		},
		graphAmpere1 : function(a) {
			var ampere_array1 = this.get("ampereValue1");
			ampere_array1.push(a);
			this.set({
				ampereValue1 : ampere_array1
			});
		},
		graphCorrectSpeed : function(s) {
			var correctSpeed_array = this.get("correctSpeedValue");
			correctSpeed_array.push(s);
			this.set({
				correctSpeedValue : correctSpeed_array
			});

		},
		graphVoltage1 : function(v) {
			var voltage_array1 = this.get("voltageValue1");
			voltage_array1.push(v);
			this.set({
				voltageValue1 : voltage_array1
			});
		},
		graphGenoutput : function(v) {
			var gen_output = this.get("genOutput");
			gen_output.push(v);
			this.set({
				genOutput : gen_output
			});
		},
		graphGeninput : function(v) {
			var gen_input = this.get("genInput");
			gen_input.push(v);
			this.set({
				genInput : gen_input
			});
		},
		graphAmpereFieldExp1b : function(v) {
			var amp_field = this.get("ampereFieldExp1b");
			amp_field.push(v);
			this.set({
				ampereFieldExp1b : amp_field
			});
		},
		graphVoltageFieldExp1b : function(v) {
			var vol_field = this.get("voltageFieldExp1b");
			vol_field.push(v);
			this.set({
				voltageFieldExp1b : vol_field
			});
		},
		graphAmpereMotorExp1b : function(v) {
			var ampMotor = this.get("ampereMotorExp1b");
			ampMotor.push(v);
			this.set({
				ampereMotorExp1b : ampMotor
			});
		},
		graphVoltageMotorExp1b : function(v) {
			var volMotor = this.get("voltageMotorExp1b");
			volMotor.push(v);
			this.set({
				voltageMotorExp1b : volMotor
			});
		},
		graphVoltageGenExp1b : function(v) {
			var volGen = this.get("voltageGenExp1b");
			volGen.push(v);
			this.set({
				voltageGenExp1b : volGen
			});
		},
		graphSpeedExp1b : function(v) {
			var speed = this.get("speedExp1b");
			speed.push(v);
			this.set({
				speedExp1b : speed
			});
		},
		graphBackEmfExp1b : function(v) {
			var emf = this.get("emfExp1b");
			emf.push(v);
			this.set({
				emfExp1b : emf
			});
		},
		graphOutputExp1b : function(v) {
			var motoroutput = this.get("motorop");
			motoroutput.push(v);
			this.set({
				motorop : motoroutput
			});
		},
		graphEfficiencyExp1b : function(v) {
			var motorEfficiency = this.get("Exp1bMotEff");
			motorEfficiency.push(v);
			this.set({
				Exp1bMotEff : motorEfficiency
			});
		},
		graphGeneratorEff:function(v) {
			var GenEfficiency = this.get("GenEff");
			GenEfficiency.push(v);
			this.set({
				GenEff : GenEfficiency
			});
		},
		graphSupplyVoltageExp5 : function(v) {
			var inputVoltage = this.get("Exp5Voltage");
			inputVoltage.push(v);
			this.set({
				Exp5Voltage : inputVoltage
			});
		},
		graphDcCurrentExp5 : function(v) {
			var DCcurrent = this.get("Exp5DcCurrent");
			DCcurrent.push(v);
			this.set({
				Exp5DcCurrent : DCcurrent
			});
		},
		graphAcCurrentExp5 : function(v) {
			var AcCurrent = this.get("Exp5AcCurrent");
			AcCurrent.push(v);
			this.set({
				Exp5AcCurrent : AcCurrent
			});
		},
		graphVoltageGeneratorExp5 : function(v) {
			var voltageGen = this.get("Exp5genVoltage");
			voltageGen.push(v);
			this.set({
				Exp5genVoltage : voltageGen
			});
		},
		graphSpeedExp5 : function(v) {
			var speed = this.get("Exp5Speed");
			speed.push(v);
			this.set({
				Exp5Speed : speed
			});
		},
		graphFirstWattmeterExp5 : function(v) {
			var watt1 = this.get("Exp5WattReading1");
			watt1.push(v);
			this.set({
				Exp5WattReading1 : watt1
			});
		},
		graphSecondWattmeterExp5 : function(v) {
			var watt2 = this.get("Exp5WattReading2");
			watt2.push(v);
			this.set({
				Exp5WattReading2 : watt2
			});
		},
		graphAmpereFieldExp7a : function(i) {
			var ampField = this.get("ampereFieldExp7a");
			ampField.push(i);
			this.set({
				ampereFieldExp7a : ampField
			});
		},
		graphVoltageFieldExp7a : function(v) {
			var volField = this.get("voltageFieldExp7a");
			volField.push(v);
			this.set({
				voltageFieldExp7a : volField
			});
		},
		graphAmpereMotorExp7a : function(i) {
			var ampMotor = this.get("ampereMotorExp7a");
			ampMotor.push(i);
			this.set({
				ampereMotorExp7a : ampMotor
			});
		},
		graphVoltageMotorExp7a : function(v) {
			var volMotor = this.get("voltageMotorExp7a");
			volMotor.push(v);
			this.set({
				voltageMotorExp7a : volMotor
			});
		},
		graphVoltageAltExp7a : function(v) {
			var volAlt = this.get("voltageAltExp7a");
			volAlt.push(v);
			this.set({
				voltageAltExp7a : volAlt
			});
		},
		graphSpeedExp7a : function(s) {
			var speed = this.get("speedExp7a");
			speed.push(s);
			this.set({
				speedExp7a : speed
			});
		},
		graphEinExp7a : function(e) {
			var ein = this.get("einExp7a");
			ein.push(e);
			this.set({
				einExp7a : ein
			});
		},
		
		graphcoreLossAlt7a : function(e) {
			var corlAlt = this.get("corLossAlt7a");
			corlAlt.push(e);
			this.set({
				corLossAlt7a : corlAlt
			});
		},
		
	     graphMotOutput7a : function(e) {
			var motOp7a = this.get("motorOutput7a");
			motOp7a.push(e);
			this.set({
				motorOutput7a : motOp7a
			});
		},
		
		graphAmpereFieldExp8 : function(i) {
			var ampField = this.get("ampereFieldExp8a");
			ampField.push(i);
			this.set({
				ampereFieldExp8a : ampField
			});
		},
		graphVoltageFieldExp8 : function(v) {
			var volField = this.get("voltageFieldExp8a");
			volField.push(v);
			this.set({
				voltageFieldExp8a : volField
			});
		},
		graphAmpereMotorExp8 : function(i) {
			var ampMotor = this.get("ampereMotorExp8a");
			ampMotor.push(i);
			this.set({
				ampereMotorExp8a : ampMotor
			});
		},
		graphVoltageMotorExp8 : function(v) {
			var volMotor = this.get("voltageMotorExp8a");
			volMotor.push(v);
			this.set({
				voltageMotorExp8a : volMotor
			});
		},
		graphSpeedExp8a : function(s) {
			var speed = this.get("speedExp8a");
			speed.push(s);
			this.set({
				speedExp8a : speed
			});
		},
		graphMotorOutputExp8a : function(s) {
			var motoroutput = this.get("MotorOutputExp8a");
			motoroutput.push(s);
			//console.log("motoroutput" + motoroutput);
			this.set({
				MotorOutputExp8a : motoroutput
			});
		},
		graphVryExp8a : function(v) {
			var Vry = this.get("VryExp8");
			Vry.push(v);
			this.set({
				VryExp8 : Vry
			});
		},
		graphVybExp8 : function(v) {
			var Vyb = this.get("VybExp8");
			Vyb.push(v);
			this.set({
				VybExp8 : Vyb
			});
		},
		graphVbrExp8 : function(v) {
			var Vbr = this.get("VbrExp8");
			Vbr.push(v);
			this.set({
				VbrExp8 : Vbr
			});
		},
		graphIrExp8 : function(i) {
			var Ir = this.get("IrExp8");
			Ir.push(i);
			this.set({
				IrExp8 : Ir
			});
		},
		graphIyExp8 : function(i) {
			var Iy = this.get("IyExp8");
			Iy.push(i);
			this.set({
				IyExp8 : Iy
			});
		},
		graphIbExp8 : function(i) {
			var Ib = this.get("IbExp8");
			Ib.push(i);
			this.set({
				IbExp8 : Ib
			});
		},
		graphVtExp8 : function(v) {
			var Vt = this.get("VtExp8");
			Vt.push(v);
			this.set({
				VtExp8 : Vt
			});
		},
		graphAltOpExp8 : function(a) {
			var AltOp = this.get("altOpExp8");
			AltOp.push(a);
			this.set({
				altOpExp8 : AltOp
			});
		},
		graphInAltExp8 : function(v) {
			var InAlt = this.get("inAltExp8");
			InAlt.push(v);
			this.set({
				inAltExp8 : InAlt
			});
		},
		graphVoltageRegulation:function(v)
		{
			var VoltReg = this.get("VoltReg");
			VoltReg.push(v);
			//console.log("volt"+VoltReg);
			this.set({
				VoltReg : VoltReg
			});
		},
		graphEfficiency : function(v) {
			var Efficiency = this.get("efficiencyExp8");
			Efficiency.push(v);
			this.set({
				efficiencyExp8 : Efficiency
			});
		},
		graphVoltageExp2 : function(v) {
			var vol_field = this.get("voltageExp2");
			vol_field.push(v);
			this.set({
				voltageExp2 : vol_field
			});
		},
		graphAmpereExp2 : function(v) {
			var amp_field = this.get("ampereExp2");
			amp_field.push(v);
			this.set({
				ampereExp2 : amp_field
			});
		},
		graphVoltage1Exp2 : function(v) {
			var volMot = this.get("VaExp2");
			volMot.push(v);
			this.set({
				VaExp2 : volMot
			});
		},
		graphActIaExp2 : function(v) {
			var ampMot = this.get("ActIaExp2");
			ampMot.push(v);
			this.set({
				ActIaExp2 : ampMot
			});
		},
		graphVfgExp2 : function(v) {
			var volGen = this.get("VfgExp2");
			volGen.push(v);
			this.set({
				VfgExp2 : volGen
			});
		},
		graphIfgExp2 : function(v) {
			var ampGen = this.get("IfgExp2");
			ampGen.push(v);
			this.set({
				IfgExp2 : ampGen
			});
		},
		graphVtExp2 : function(v) {
			var VtGen = this.get("VtExp2");
			VtGen.push(v);
			this.set({
				VtExp2 : VtGen
			});
		},
		graphIagExp2 : function(v) {
			var IagGen = this.get("IagExp2");
			IagGen.push(v);
			this.set({
				IagExp2 : IagGen
			});
		},
		graphActualSpeedExp2 : function(v) {
			var speedExp2 = this.get("ActualspeedExp2");
			speedExp2.push(v);
			this.set({
				ActualspeedExp2 : speedExp2
			});
		},
		graphEfficiencyExp2 : function(v) {
			var EffiExp2 = this.get("Exp2MotEff");
			EffiExp2.push(v);
			this.set({
				Exp2MotEff : EffiExp2
			});
		},
		graphOutputExp2 : function(v) {
			var GenIpexp2 = this.get("genIpExp2");
			GenIpexp2.push(v);
			this.set({
				genIpExp2 : GenIpexp2
			});
		},
		graphInputExp2 : function(v) {
			var Mot_IpExp2 = this.get("ActmotIpExp2");
			Mot_IpExp2.push(v);
			this.set({
				ActmotIpExp2 : Mot_IpExp2
			});
		},
		graphBackEmfExp2 : function(v) {
			var Gen_EmfExp2 = this.get("Ea");
			Gen_EmfExp2.push(v);
			this.set({
				Ea : Gen_EmfExp2
			});
		},
		graphTorqueExp2 : function(v) {
			var Torque = this.get("TorqueExp2");
			Torque.push(v);
			this.set({
				TorqueExp2 : Torque
			});
		},
		
		graphMotOpExp2 : function(v) {
			var MotOpExp2 = this.get("MotOpExp2");
			MotOpExp2.push(e);
			this.set({
				MotOpExp2 : MotOpExp2
			});
		},
		graphVoltageFieldExp7b : function(v) {
			var vol_fieldexp7b = this.get("voltageFieldExp7b");
			vol_fieldexp7b.push(v);
			this.set({
				voltageFieldExp7b : vol_fieldexp7b
			});
		},
		graphAmpereFieldExp7b : function(v) {
			var amp_fieldexp7b = this.get("ampereFieldExp7b");
			amp_fieldexp7b.push(v);
			this.set({
				ampereFieldExp7b : amp_fieldexp7b
			});
		},
		graphVoltageMotorExp7b : function(v) {
			var volMot = this.get("voltMotorExp7b");
			volMot.push(v);
			this.set({
				voltMotorExp7b : volMot
			});
		},
		graphAmpereMotorExp7b : function(v) {
			var ampMotexp7b = this.get("ampMotorExp7b");
			ampMotexp7b.push(v);
			this.set({
				ampMotorExp7b : ampMotexp7b
			});
		},
		graphAmpereMotorFieldExp7b : function(v) {
			var ampMotF = this.get("ampMotFieldExp7b");
			ampMotF.push(v);
			this.set({
				ampMotFieldExp7b : ampMotF
			});
		},
		graphSpeedExp7b : function(v) {
			var speedExp7b1 = this.get("speedExp7b");
			speedExp7b1.push(v);
			this.set({
				speedExp7b : speedExp7b1
			});
		},
		
        graphAltCopLossExp7b : function(v) {
			var AltCopLossExp7b = this.get("AltCopLossExp7b");
			AltCopLossExp7b.push(v);
			this.set({
				AltCopLossExp7b : AltCopLossExp7b
			});
		},
		
		graphMotOutputExp7b : function(v) {
			var motorOpExp7b = this.get("MotOpExp7b");
			motorOpExp7b.push(v);
			this.set({
				MotOpExp7b : motorOpExp7b
			});
		},
		
		graphfieldVoltage9 : function(v) {
			var FieldVoltage9 = this.get("fieldVoltageExp9");
			FieldVoltage9.push(v);
			this.set({
				fieldVoltageExp9 : FieldVoltage9
			});
		},
		graphFieldCurrent9 : function(v) {
			var FieldCurrent9 = this.get("fieldCurrentExp9");
			FieldCurrent9.push(v);
			this.set({
				fieldCurrentExp9 : FieldCurrent9
			});
		},
		graphMotorVoltage9 : function(v) {
			var MotorVoltage9 = this.get("motorVoltageExp9");
			MotorVoltage9.push(v);
			this.set({
				motorVoltageExp9 : MotorVoltage9
			});
		},
		graphMotorCurrent9 : function(v) {
			var MotorCurrent9 = this.get("motorCurrentExp9");
			MotorCurrent9.push(v);
			this.set({
				motorCurrentExp9 : MotorCurrent9
			});
		},
		graphPowerFactor9 : function(v) {
			var PowerFactor9 = this.get("wattmeterReadingExp9");
			PowerFactor9.push(v);
			this.set({
				wattmeterReadingExp9 : PowerFactor9
			});
		},
		graphLoadVoltage9 : function(v) {
			var LoadVoltage9 = this.get("VtExp9");
			LoadVoltage9.push(v);
			this.set({
				VtExp9 : LoadVoltage9
			});
		},
		graphLoadCurrent9 : function(v) {
			var LoadCurrent9 = this.get("IlExp9");
			LoadCurrent9.push(v);
			this.set({
				IlExp9 : LoadCurrent9
			});
		},
		graphSpeed9 : function(v) {
			var Speed9 = this.get("SpeedExp9");
			Speed9.push(v);
			this.set({
				SpeedExp9 : Speed9
			});
		},
		clearData : function() {
			this.set({
				voltageValue : []
			});
			this.set({
				ampereValue : []
			});
			this.set({
				voltageValue1 : []
			});
			this.set({
				ampereValue1 : []
			});
			this.set({
				correctSpeedValue : []
			});
			this.set({
				genOutput : []
			});
			this.set({
				genInput : []
			});
			this.set({
				ampereFieldExp1b : []
			});
			this.set({
				voltageFieldExp1b : []
			});
			this.set({
				ampereMotorExp1b : []
			});
			this.set({
				voltageMotorExp1b : []
			});
			this.set({
				voltageGenExp1b : []
			});
			this.set({
				speedExp1b : []
			});
			this.set({
				emfExp1b : []
			});
			this.set({
				motorop : []
			});
			this.set({
				Exp1bMotEff : []
			});
			this.set({
			GenEff : []
			});
			this.set({
				Exp5Voltage : []
			});
			this.set({
				Exp5DcCurrent : []
			});
			this.set({
				Exp5AcCurrent : []
			});
			this.set({
				Exp5genVoltage : []
			});
			this.set({
				Exp5Speed : []
			});
			this.set({
				Exp5WattReading1 : []
			});
			this.set({
				Exp5WattReading2 : []
			});
			this.set({
				ampereFieldExp7a : []
			});
			this.set({
				voltageFieldExp7a : []
			});
			this.set({
				ampereMotorExp7a : []
			});
			this.set({
				voltageMotorExp7a : []
			});
			this.set({
				voltageAltExp7a : []
			});
			this.set({
				einExp7a : []
			});
			this.set({
				corLossAlt7a : []
			});
			
		    this.set({
				motorOutput7a : []
			});
			
			this.set({
				speedExp7a : []
			});
			this.set({
				ampereFieldExp8a : []
			});
			this.set({
				voltageFieldExp8a : []
			});
			this.set({
				ampereMotorExp8a : []
			});
			this.set({
				voltageMotorExp8a : []
			});
			this.set({
				speedExp8a : []
			});
			this.set({
				MotorOutputExp8a : []
			});
			this.set({
				VryExp8 : []
			});
			this.set({
				VybExp8 : []
			});
			this.set({
				VbrExp8 : []
			});
			this.set({
				IrExp8 : []
			});
			this.set({
				IyExp8 : []
			});
			this.set({
				IbExp8 : []
			});
			this.set({
				VtExp8 : []
			});
			this.set({
				inAltExp8 : []
			});
			this.set({
				VoltReg : []
			});
			this.set({
				efficiencyExp8 : []
			});
			this.set({
				altOpExp8 : []
			});
			this.set({
				voltageExp2 : []
			});
			this.set({
				ampereExp2 : []
			});
			this.set({
				VaExp2 : []
			});
			this.set({
				ActIaExp2 : []
			});
			this.set({
				VfgExp2 : []
			});
			this.set({
				IfgExp2 : []
			});
			this.set({
				VtExp2 : []
			});
			this.set({
				IagExp2 : []
			});
			this.set({
				ActualspeedExp2 : []
			});
			this.set({
				Exp2MotEff : []
			});
			this.set({
				genIpExp2 : []
			});
			this.set({
				ActmotIpExp2 : []
			});
			this.set({
				Ea : []
			});
			this.set({
				TorqueExp2 : []
			});
			this.set({
				MotOpExp2 : []
			});
			this.set({
				ampereFieldExp7b : []
			});
			this.set({
				voltageFieldExp7b : []
			});
			this.set({
				voltMotorExp7b : []
			});
			this.set({
				ampMotorExp7b : []
			});
			this.set({
				ampMotFieldExp7b : []
			});
			this.set({
				speedExp7b : []
			});
			this.set({
				AltCopLossExp7b : []
			});
			this.set({
				MotOpExp7b : []
			});
			this.set({
				coreLossExp4a : []
			});
			this.set({
				supplyVoltageExp4a : []
			});
			this.set({
				speed4a : []
			});
			this.set({
				current4a : []
			});
			this.set({
				power4a : []
			});
			this.set({
				rotorangle4a : []
			});
			this.set({
				totalcopperloss4a : []
			});
			this.set({
				firstwattreading4a : []
			});
			this.set({
				secondwattreading4a : []
			});
			this.set({
				totalCopperLossexp4b : []
			});
			this.set({
				blockRotorAngleexp4b : []
			});
			this.set({
				blockRotorSupplyVoltageexp4b : []
			});
			this.set({
				statorPhaseCurrentexp4b : []
			});
			this.set({
				power4b : []
			});
			this.set({
				firestwattreading4b : []
			});
			this.set({
				secondwattreading4b : []
			});
			this.set({
				lineCurrent : []
			});
			this.set({
				fieldVoltageExp9 : []
			});
			this.set({
				fieldCurrentExp9 : []
			});
			this.set({
				motorVoltageExp9 : []
			});
			this.set({
				motorCurrentExp9 : []
			});
			this.set({
				wattmeterReadingExp9 : []
			});
			this.set({
				VtExp9 : []
			});
			this.set({
				IlExp9 : []
			});
			this.set({
				SpeedExp9 : []
			});

		}
	});

})(this);
