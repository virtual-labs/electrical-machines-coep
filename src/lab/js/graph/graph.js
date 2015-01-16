var graph = gp = graph || {}; (function(gp) {
	var chart;
	var arr1 = [];
	var arr2 = [];
	var arr =[];
	var seriesName, xAxis, yAxis;
	var flag=0; 

	gp.graphData = function(selectedId, ExpId) {

		if(ExpId == "exp3") {
			if(selectedId == "VFM vs Speed") {
				arr1 =model.get("voltageValue");
				arr2= model.get("correctSpeedValue");
				seriesName = '<text style="font-size:14px;">V</b></text><text style="font-size:8px;">FM</b></text> vs Speed';
				xAxis = "Field Voltage(Volt)";
				yAxis = "Speed(r.p.m)";

			} else if(selectedId == "IFM vs Speed") {
				arr1 =model.get("ampereValue");
				arr2= model.get("correctSpeedValue");
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">FM</b></text> vs Speed';
				xAxis = "Armature Voltage (Volt)";
				yAxis = "Speed(r.p.m)";

			} else if(selectedId == "VAM vs Speed") {
				arr1 =model.get("voltageValue1");
				arr2= model.get("correctSpeedValue");
				seriesName = '<text style="font-size:14px;">V</b></text><text style="font-size:8px;">AM</b></text> vs Speed';
				xAxis = "Field Voltage (Volt)";
				yAxis = "Speed (r.p.m.)";
				
			} else if(selectedId == "IAM vs Speed") {
				arr2 = model.get("correctSpeedValue");
				arr1 = model.get("ampereValue1");
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">AM</b></text> vs Speed';
				xAxis = "Field Current (Amp)";
				yAxis = "Speed(r.p.m.)";
				
			} else if(selectedId == "VAM vs IAM") {
				arr1 =model.get("voltageValue1");
				arr2= model.get("ampereValue1");
				seriesName = '<text style="font-size:14px;">V</b></text><text style="font-size:8px;">AM</b></text> vs <text style="font-size:14px;">I</b></text><text style="font-size:8px;">AM</b></text>';
				xAxis = "Armature Voltage(Volt)";
				yAxis = "Armature Current (Amp)";
				
			} else if(selectedId == "VFM vs IFM") {
				arr1 = model.get("voltageValue");
				arr2= model.get("ampereValue");
				seriesName = '<text style="font-size:14px;">V</b></text><text style="font-size:8px;">FM</b></text> vs <text style="font-size:14px;">I</b></text><text style="font-size:8px;">FM</b></text>';
				xAxis = "Field Voltage(Volt)";
				yAxis = "Field Current (Amp)";
			} else if(selectedId == "VAM vs Speed") {
				arr1 =model.get("voltageValue1");
				arr2= model.get("correctSpeedValue");
				seriesName = '<text style="font-size:14px;">V</b></text><text style="font-size:8px;">AM</b></text> vs <text Speed';
				xAxis = "Armature Voltage(Volt)";
				yAxis = "Speed (r.p.m)";
			} else {
				arr1 = [];
				arr2 = [];
				seriesName = " ";
				xAxis = " ";
				yAxis = " ";
			}
		}
		if(ExpId == "exp4a") {

			if(selectedId == "IL vs Speed") {
				arr1 = model.get("current4a");
				arr2 = model.get("speed4a");				
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">L</b></text> vs Speed';
				xAxis = '<text style="font-size:14px;">I</b><text style="font-size:9px;">L</b></text></text>(Amp)';
				yAxis = "Speed (r.p.m.)";
			}else if(selectedId == "VS vs Speed") {				
				arr1 = model.get("supplyVoltageExp4a");
				arr2 = model.get("speed4a");
				seriesName = '<text style="font-size:14px;">V</b></text><text style="font-size:8px;">S</b></text> vs Speed';
				xAxis = "Vs(Volts)";
				yAxis = "Speed(r.p.m.)";
				
			}else if(selectedId == "VS vs i/p Power") {				
				arr1 = model.get("supplyVoltageExp4a");
				arr2 = model.get("power4a");
				seriesName = '<text style="font-size:14px;">V</b></text><text style="font-size:8px;">S</b></text> vs i/p Power';
				xAxis = "Vs(Volts)";
				yAxis = "i/p Power(W)";
			}else if(selectedId == "IL vs TotalCopperLoss") {				
				arr1 = model.get("current4a");
				arr2 = model.get("totalcopperloss4a");
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">L</b></text> vs TotalCopperLoss';
				xAxis = '<text style="font-size:14px;">I</b><text style="font-size:9px;">L</b></text></text>(Amp)';
				yAxis = "Total copper loss";
			}
		    else {
				arr1 = [];
				arr2 = [];
				seriesName = " ";
				xAxis = " ";
				yAxis = " ";
			}
		}
		if(ExpId == "exp4b") {

			if(selectedId == "VS vs i/p Power") {
				arr1 = model.get("blockRotorSupplyVoltageexp4b");
				arr2 = model.get("power4b");
				
				seriesName = '<text style="font-size:14px;">V</b></text><text style="font-size:8px;">S</b></text> vs i/p Power';
				xAxis = "Supply voltage (Volt)";
				yAxis = "i/p power";
			 }
			 else if(selectedId == "IL vs TotalCopperLoss") {
			    arr1 =model.get("lineCurrent");
				arr2 =model.get("totalCopperLossexp4b");
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">L</b></text> vs TotalCopperLoss';
				xAxis = "Line Current (Ampere)";
				yAxis = "Total copper loss";
				
			}else if(selectedId == "VS vs IL") {
				arr1 = model.get("blockRotorSupplyVoltageexp4b");
				arr2 = model.get("lineCurrent");
				seriesName = '<text style="font-size:14px;">V</b></text><text style="font-size:8px;">S</b></text> vs <text style="font-size:14px;">I</b></text><text style="font-size:8px;">L</b></text>';
				xAxis = "Line Current(Amp)";
				yAxis = "Supply Voltage (Volt)";
			}
			
	        else {
				arr1 = [];
				arr2 = [];
				seriesName = " ";
				xAxis = " ";
				yAxis = " ";
			}
		}	

		if(ExpId == "exp1b") {
			/*
			if(selectedId == "Iase vs Gen Eff") {
							arr1 = model.get("genInput");
							arr2 =model.get("GenEff");
							seriesName = selectedId;
							xAxis ='<text style="font-size:14px;">I</b><text style="font-size:9px;">ASE</b></text></text>(Amp)';
							yAxis = "Generator Efficiency";
							
						} else*/
			  if(selectedId == 'IASE vs VASE'){
				arr1 = model.get("genInput");
				arr2 = model.get("voltageGenExp1b");
				seriesName ='<text style="font-size:14px;">I</b></text><text style="font-size:8px;">ASE</b></text> vs <text style="font-size:14px;">V</b></text><text style="font-size:8px;">ASE</b></text>';
				xAxis ='<text style="font-size:14px;">I</b></text><text style="font-size:9px;">ASE</b></text>(Amp)';
				yAxis ='<text style="font-size:14px;">V</b></text><text style="font-size:9px;">ASE</b></text>(Volt)';
				
			} else if(selectedId == 'IFSE vs VASE') {
				arr1 = model.get("ampereFieldExp1b");
				arr2 = model.get("voltageGenExp1b");
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">FSE</b></text> vs <text style="font-size:14px;">V</b></text><text style="font-size:8px;">ASE</b></text>';
				xAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">FSE</b></text>(Amp)';
				yAxis = '<text style="font-size:14px;">V</b></text><text style="font-size:9px;">ASE</b></text>(Volt)';
				
			}else if(selectedId == 'IASE vs Speed')  {
				arr1 = model.get("genInput");
				arr2 = model.get("speedExp1b");
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">ASE</b></text> vs Speed';
				xAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">ASE</b></text>(Amp)';
				yAxis = "speed (r.p.m.)";
				
			}else if(selectedId == 'IFSE vs Speed'){
				arr1 = model.get("ampereFieldExp1b");
				arr2 = model.get("speedExp1b");
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">FSE</b></text> vs Speed';
				xAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">FSE</b></text>(Amp)';
				yAxis = "Speed (r.p.m.)";
			
			}else if(selectedId == 'IASH vs Mot Effi') {
				arr1 = model.get("ampereMotorExp1b");
				arr2 = model.get("Exp1bMotEff");
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">ASH</b></text> vs Mot Effi';
				xAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">ASH</b></text>(Amp)';
				yAxis = "Motor Efficiency";
		
			}else if(selectedId == 'VASH vs Speed') {
				arr1 = model.get("voltageMotorExp1b");
				arr2 = model.get("speedExp1b");
				seriesName = '<text style="font-size:14px;">V</b></text><text style="font-size:8px;">ASH</b></text> vs Speed';
				xAxis = '<text style="font-size:14px;">V</b></text><text style="font-size:9px;">ASH</b></text>(Volt)';
				yAxis = "Speed (r.p.m.)";
			
			}else if(selectedId == 'VASH vs IASE')  {
				arr1 = model.get("voltageMotorExp1b");
				arr2 = model.get("genInput");
				seriesName = '<text style="font-size:14px;">V</b></text><text style="font-size:8px;">ASH</b></text> vs <text style="font-size:14px;">I</b></text><text style="font-size:8px;">ASE</b></text>';
				xAxis = '<text style="font-size:14px;">V</b></text><text style="font-size:9px;">ASH</b></text>(Volt)';
				yAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">ASE</b></text>(Amp)';
				
			}else if(selectedId == 'Speed vs VASE') {
				arr1 = model.get("speedExp1b");
				arr2 = model.get("voltageGenExp1b");
				seriesName = 'Speed vs <text style="font-size:14px;">V</b></text><text style="font-size:8px;">ASE</b></text>'
				xAxis = "Speed (r.p.m.)";
				yAxis = '<text style="font-size:14px;">V</b></text><text style="font-size:9px;">ASE</b></text>(Volt)';
			}
			 else {
				arr1 = [];
				arr2 = [];
				seriesName = " ";
				xAxis = " ";
				yAxis = " ";
			}

		}

		if(ExpId == "exp2") {
			if(selectedId == "Mot o/p vs MotEff") {
				arr1 = model.get("genIpExp2");
				arr2 = model.get("Exp2MotEff");
				seriesName = selectedId;
				xAxis = "Motor Output";
				yAxis = "Motor Efficiency";
				
			} else if(selectedId == "IAM vs Torque") {
				arr1 = model.get("ActIaExp2");
				arr2 = model.get("TorqueExp2");
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">AM</b></text> vs Torque'
				xAxis = "Armature current (Amp)";
				yAxis = "Torque (Watt)";
				
			} else if(selectedId == "Mot o/p vs Speed") {
				arr1 = model.get("genIpExp2");
				arr2 = model.get("ActualspeedExp2");
				seriesName = selectedId;
				xAxis = "Motor Output";
				yAxis = "Speed (r.p.m.)";
				
			} else if(selectedId == "Speed vs Torque") {
				arr1 = model.get("ActualspeedExp2");
				arr2 = model.get("TorqueExp2");
				seriesName = selectedId;
				xAxis = "Speed (r.p.m.)";
				yAxis = "Torque (Watt)";
				
			 } else if(selectedId == "Speed vs VAG") {
				arr1 = model.get("ActualspeedExp2");
				arr2 = model.get("VtExp2");
				 seriesName = 'Speed vs <text style="font-size:14px;">V</b></text><text style="font-size:8px;">AG</b></text>'
				 xAxis = "Speed (r.p.m.)";
				 yAxis = '<text style="font-size:14px;">V</b></text><text style="font-size:9px;">AG</b></text>(Volt)';
			}
			else if(selectedId == "IAG vs Speed") {
				arr1 = model.get("IagExp2");
				arr2 = model.get("ActualspeedExp2");
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">AG</b></text> vs Speed';
				xAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">AG</b></text>(Amp)';
				yAxis = "Speed (r.p.m.)";
			}
			else if(selectedId == "VAM vs Speed") {
				arr1 = model.get("VaExp2");
				arr2 = model.get("ActualspeedExp2");
				seriesName = '<text style="font-size:14px;">V</b></text><text style="font-size:8px;">AM</b></text> vs Speed';
				xAxis = '<text style="font-size:14px;">V</b></text><text style="font-size:9px;">AM</b></text>(Amp)';
				yAxis = "Speed (r.p.m.)";
			}
			else if(selectedId == "IFM vs Speed") {
				arr1 = model.get("ampereExp2");
				arr2 = model.get("ActualspeedExp2");
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">FM</b></text> vs Speed';
				xAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">FM</b></text>(Amp)';
				yAxis = "Speed (r.p.m.)";
			}
			else if(selectedId == "IFG vs VAG") {
				arr1 = model.get("IfgExp2");
				arr2 = model.get("VtExp2");
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">FG</b></text> vs <text style="font-size:14px;">V</b></text><text style="font-size:8px;">AG</b></text>';
				xAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">FG</b></text>(Amp)';
				yAxis = '<text style="font-size:14px;">V</b></text><text style="font-size:9px;">AG</b></text>(r.p.m)';
			}
			else if(selectedId == "Mot o/p vs VAG") {
				arr1 = model.get("genIpExp2");
				arr2 = model.get("VtExp2");
				seriesName = 'Mot o/p vs <text style="font-size:14px;">V</b></text><text style="font-size:8px;">AG</b></text>'
				xAxis = "Motor Output";
				yAxis = '<text style="font-size:14px;">V</b></text><text style="font-size:9px;">AG</b></text>(r.p.m)';
			}
			 else {
				arr1 = [];
				arr2 = [];
				seriesName = " ";
				xAxis = " ";
				yAxis = " ";
			}

		}

		if(ExpId == "exp7a") {
			if(selectedId == "IFA vs VOC") {
				arr1 = model.get("ampereFieldExp7a");
				//console.log(arr1);
				arr2 = model.get("voltageAltExp7a");
				//console.log(arr2.toFixed(2));
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">FA</b></text> vs <text style="font-size:14px;">V</b></text><text style="font-size:8px;">OC</b></text>';
				xAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">FA</b></text>(Amp)';
				yAxis = '<text style="font-size:14px;">V</b></text><text style="font-size:9px;">OC</b></text>(Volt)';
				
			}else if(selectedId == "IFA vs Alt.Coreloss") {
				arr1 = model.get("ampereFieldExp7a");
				//console.log(arr1);
				arr2 = model.get("corLossAlt7a");
				//console.log(arr2);
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">FA</b></text> vs Alt.Coreloss';
				xAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">FA</b></text>(Amp)';
				yAxis = "Alt.Coreloss";
			
			}else if(selectedId == "IASH vs Mot o/p") {
				arr1 = model.get("ampereMotorExp7a");
				arr2 = model.get("motorOutput7a");
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">ASH</b></text> vs Mot o/p';
				xAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">ASH</b></text>(Amp)';
				yAxis = "DC shunt motor output";
			} 
			else if(selectedId == "IFA vs Speed") {
				arr1 = model.get("ampereFieldExp7a");
				arr2 =  model.get("speedExp7a");
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">FA</b></text> vs Speed';
				xAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">FA</b></text>(Amp)';
				yAxis = "Speed";
			} 
			else if(selectedId == "VFA vs IFA") {
				arr1 = model.get("voltageFieldExp7a");
				arr2 =  model.get("ampereFieldExp7a");
				seriesName = '<text style="font-size:14px;">V</b></text><text style="font-size:8px;">FA</b></text> vs <text style="font-size:14px;">I</b></text><text style="font-size:8px;">FA</b></text>';
				xAxis ='<text style="font-size:14px;">V</b></text><text style="font-size:9px;">FA</b></text>(Volt))';
				yAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">FA</b></text>(Amp)';
			} 
              else {
				arr1 = [];
				arr2 = [];
				seriesName = " ";
				xAxis = " ";
				yAxis = " ";
			}

		}

		if(ExpId == "exp7b") {
			 if(selectedId == "IFA vs ISC") {
				arr1 = model.get("ampereFieldExp7b");
				arr2 = model.get("ampMotFieldExp7b");
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">FA</b></text> vs <text style="font-size:14px;">I</b></text><text style="font-size:8px;">SC</b></text>';
				xAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">FA</b></text>(Amp)';
				yAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">SC</b></text>(Amp)';
			} 
			else if(selectedId == "IFA vs Speed") {
				arr1 = model.get("ampereFieldExp7b");
				arr2 = model.get("speedExp7b");
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">FA</b></text> vs Speed';
				xAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">FA</b></text>(Amp)';
				yAxis = "Speed";
			} 
			else if(selectedId == "IASH vs Mot o/p") {
				arr1 = model.get("ampMotorExp7b");
				arr2 =model.get("MotOpExp7b");
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">ASH</b></text> vs Mot o/p';
				xAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">ASH</b></text>(Amp)';
				yAxis = "DC shunt motor output";
			} 
			else if(selectedId == "VFA vs IFA") {
				arr1 = model.get("voltageFieldExp7b");
				arr2 = model.get("ampereFieldExp7b");
				seriesName = '<text style="font-size:14px;">V</b></text><text style="font-size:8px;">FA</b></text> vs <text style="font-size:14px;">I</b></text><text style="font-size:8px;">FA</b></text> ';
				xAxis ='<text style="font-size:14px;">V</b></text><text style="font-size:9px;">FA</b></text>(Volt)';
				yAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">FA</b></text>(Amp)';
			} 
               else {
				arr1 = [];
				arr2 = [];
				seriesName = " ";
				xAxis = " ";
				yAxis = " ";
			}

		}

		if(ExpId == "exp8") {
			if(selectedId == "IFA vs VRY") {
							arr1 = model.get("ampereFieldExp8a");
							arr2 = model.get("VryExp8");
							seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">FA</b></text> vs <text style="font-size:14px;">V</b></text><text style="font-size:8px;">RY</b></text> ';
							xAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">FA</b></text>(Amp)';
							yAxis = '<text style="font-size:14px;">V</b></text><text style="font-size:9px;">RY</b></text>(Volt)';
			}else if(selectedId == "IASH vs Mot o/p") {
							arr1 = model.get("ampereMotorExp8a");
							arr2 = model.get("MotorOutputExp8a");
							seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">ASH</b></text> vs Mot o/p';
							xAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">ASH</b></text>(Amp)';
							yAxis = "DC shunt motor output";
							
			}else if(selectedId == "IFA vs Speed") {
							arr1 = model.get("ampereFieldExp8a");
							arr2 = model.get("speedExp8a");
							seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">FA</b></text> vs Speed';
							xAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">FA</b></text>(Amp)';
							yAxis = "Speed(R.P.M)";
			
			
			}else if(selectedId == "VFA vs IFA") {
							arr1 = model.get("voltageFieldExp8a");
							arr2 = model.get("ampereFieldExp8a");
							seriesName = '<text style="font-size:14px;">V</b></text><text style="font-size:8px;">FA</b></text> vs <text style="font-size:14px;">I</b></text><text style="font-size:8px;">FA</b></text> ';
							xAxis ='<text style="font-size:14px;">V</b></text><text style="font-size:9px;">FA</b></text>(Volt)';
							yAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">FA</b></text>(Amp)';
							
			}else if(selectedId == "o/p Alt vs %Eff") {
							arr1 = model.get("altOpExp8");
							arr2 = model.get("efficiencyExp8");
							seriesName = selectedId;
							xAxis = "Output of Alternator";
							yAxis = "% Efficiency";
			
			}else if(selectedId == "o/p Alt vs VRY") {
							arr1 = model.get("altOpExp8");
							arr2 = model.get("VryExp8");
							seriesName = 'o/p Alt vs <text style="font-size:14px;">V</b></text><text style="font-size:8px;">RY</b></text> ';
							xAxis = "Output of Alternator";
							yAxis = '<text style="font-size:14px;">V</b></text><text style="font-size:9px;">RY</b></text>(Volt)';
							
			}else if(selectedId == "o/p Alt vs %Volt Reg") {
						
							var aX = model.get("altOpExp8");
						//	console.log("aX:"+aX);
							var aY = model.get("VoltReg");
							//console.log("aY:"+aY);
							var a1=[];
							var a2=[];
							var j=0;
							for(var i=0; i<aY.length; i++)
							{
							      if(aY[i]!= '-' && flag==0)
							     {
							     	a1[j]=aX[i];
								    a2[j]=aY[i];
								     j++;
							     }
							 }
							 arr1=a1;
							 arr2=a2 ;
							seriesName = selectedId;
							xAxis = "Output of Alternator(Balanced load)";
							yAxis = "% voltage Regulation of Alternator";
					
			}else if(selectedId == "o/p Alt vs Speed") {
							arr1 = model.get("altOpExp8");
							arr2 = model.get("speedExp8a");
							seriesName = selectedId;
							xAxis = "Output of Alternator";
							yAxis = "speed";
			}else if(selectedId == "o/p Alt vs IASH") {
							arr1 = model.get("altOpExp8");
							arr2 = model.get("ampereMotorExp8a");
							seriesName = 'o/p Alt vs <text style="font-size:14px;">I</b></text><text style="font-size:8px;">ASH</b></text> ';
							xAxis = "Output of Alternator";
							yAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">ASH</b></text>(Amp)';
			}else {
				arr1 = [];
				arr2 = [];
				seriesName = " ";
				xAxis = " ";
				yAxis = " ";
			}

		}

		if(ExpId == "exp9") {
			if(selectedId == "IFS vs IAL") {
				arr1 = model.get("fieldCurrentExp9");
				arr2 = model.get("motorCurrentExp9");
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">FS</b></text> vs <text style="font-size:14px;">I</b></text><text style="font-size:8px;">AL</b></text> ';
				xAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">FS</b></text>(Sy. Motor field current)';
				yAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">AL</b></text> (Sy. Armature current)';
			
			} else if(selectedId == "IFS vs cos@") {
				arr1 = model.get("fieldCurrentExp9");
				arr2 = model.get("wattmeterReadingExp9");
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">FS</b></text> vs cos@ ';
				xAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">FS</b></text>(Sy. Motor field current)';
				yAxis = "cos@(Power factor)";
			
			} else if(selectedId == "IFS vs Speed") {
				arr1 = model.get("fieldCurrentExp9");
				arr2 = model.get("SpeedExp9");
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">FS</b></text> vs Speed ';
				xAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">FS</b></text>(Sy. Motor field current)';
				yAxis = "Speed(r.p.m.)";
			
			} else if(selectedId == "IFS vs VG") {
				arr1 = model.get("fieldCurrentExp9");
				arr2 = model.get("VtExp9");
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">FS</b></text> vs <text style="font-size:14px;">V</b></text><text style="font-size:8px;">G</b></text>';
				xAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">FS</b></text>(Sy. Motor field current)';
				yAxis = '<text style="font-size:14px;">V</b></text><text style="font-size:9px;">G</b></text>(Volt)';
			}else if(selectedId == "IG vs VG") {
				arr1 = model.get("IlExp9");
				arr2 = model.get("VtExp9");
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">G</b></text> vs <text style="font-size:14px;">V</b></text><text style="font-size:8px;">G</b></text>';
				xAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">G</b></text>(Amp)';
				yAxis = '<text style="font-size:14px;">V</b></text><text style="font-size:9px;">G</b></text>(Volt)';
				
			}else if(selectedId == "IG vs Power Factor") {
				arr1 = model.get("IlExp9");
				arr2 = model.get("wattmeterReadingExp9");
				seriesName = '<text style="font-size:14px;">I</b></text><text style="font-size:8px;">G</b></text> vs Power Factor';
				xAxis = '<text style="font-size:14px;">I</b></text><text style="font-size:9px;">G</b></text>(Amp)';
				yAxis = "Power factor";
			} else {
				arr1 = [];
				arr2 = [];
				seriesName = " ";
				xAxis = " ";
				yAxis = " ";
			}
		}
		this.drawGraph();
	}

	gp.drawGraph = function() {
		chart = new Highcharts.Chart({
			chart : {
				renderTo : 'graph',
				type : 'spline',
				events : {

				}
			},

			loading : {

				labelStyle : {
					color : 'white'
				},

				style : {
					backgroundColor : 'gray'
				}
			},

			title : {

				text : 'GRAPH'
			},
 
			xAxis : {

				type : 'linear',
				tickPixelInterval : 50,
				title : {
					text : xAxis,
					margin : 20
				}

			},

			yAxis : {
				minPadding : 0.2,
				maxPadding : 0.2,
				title : {
					text : yAxis,
					margin : 20
				}
			},

			tooltip : {
				formatter : function() {
					return '<b>' + this.series.name + '</b><br/>' + this.x.toFixed(2)+ ': ' + this.y.toFixed(2);
				}
			},
			plotOptions : {
				spline : {
					marker : {
						radius : 3,
						lineColor : '#666666',
						lineWidth : 1
					}
				}
			},
			series : [{
							name : seriesName,
							data : (function() {
								var data = [], i;
								for( i = 0; i < arr1.length; i++) {
									data.push({
										x : arr1[i],
										y : arr2[i]
									});
								}
								return data;
							})()
						}]
			

		});
	}
	
})(graph);
