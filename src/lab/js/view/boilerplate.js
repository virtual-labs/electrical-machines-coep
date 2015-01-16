var boilerplate = bp = boilerplate || {}; 

(function(bp) {
	var canvasContainer = "<div id = {%=id%} class = 'diagram' title = '{%=title%}'><canvas id={%=canID%} width = '135' height = '180'></canvas></div>";
	var canvasDcfixed =   "<div id = {%=id%} class = 'diagram' title = '{%=title%}'><input id = {%=inputid%} type='text' style='position:absolute;left:1px;top:59px;width:47px;display:none;'></input><canvas id={%=canID%} width = '135' height = '180'></canvas></div>";
    var canvasContainerOne = "<div id = {%=id%} class = 'diagram' title = '{%=title%}'><canvas id = {%=canID%} width = '425' height= '180'></canvas></div>";
    var canvasContainerOneb = "<div id = {%=id%} class = 'diagram' title = '{%=title%}' ><canvas id = {%=canID%} width = '1290' height= '700'></canvas></div>";
	var canvasContainerTwo = "<div id = {%=id%} class = 'diagram' title = '{%=title%}' ><canvas id = {%=canID%} width = '1380' height= '800'></canvas></div>";
	var canvasContainerThree = "<div id = {%=id%} class = 'diagram' title = '{%=title%}' ><input id = {%=inputexpVal%} type='text' style='position:absolute;left:1px;top:133px;width:47px;display:none;' ></input><input id = {%=inputexpVal1%} type='text' style='position:absolute;left:1px;top:313px;width:47px;display:none;' ></input><canvas id = {%=canID%} width = '900' height= '800'></canvas></div>";
	var canvasContainerSevenA = "<div id = {%=id%} class = 'diagram' title = '{%=title%}' ><canvas id = {%=canID%} width = '1290' height= '800'></canvas></div>";
	var canvasContainerSevenb = "<div id = {%=id%} class = 'diagram' title = '{%=title%}' ><canvas id = {%=canID%} width = '1380' height= '800'></canvas></div>";
	var canvasContainerEight = "<div id = {%=id%} class = 'diagram' title = '{%=title%}' ><canvas id = {%=canID%} width = '1380' height= '900'></canvas></div>";
	var canvasContainerFive = "<div id = {%=id%} class = 'diagram' title = '{%=title%}' ><canvas id = {%=canID%} width = '1380' height= 730'></canvas></div>";
	var canvasContainerNine =  "<div id = {%=id%} class = 'diagram' title = '{%=title%}' ><canvas id = {%=canID%} width = '1380' height= 900'></canvas></div>";
	
	bp.createSPRcLoad = function(id, canid, cssObject) {
		var str = tmpl(canvasContainer, {
			id : id,
			canID : canid,
			title : "Single Phase R-C Load "
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		sprccanvas.init(canid);
	}
	bp.createMIVoltDC = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID : canid,
			title: "VoltMeter DC" 
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		mivoltdccanvas.init(canid);
	}
	bp.createMIAmmDC = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "Ammeter DC"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		miammdccanvas.init(canid);
	}
	bp.createcoupling = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "Coupling" 
		});
		$("#workspace").append(str);
		$("#" +id).css(cssObject);
		couplingcanvas.init(canid);
	}
	bp.createThreePhiVVF = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "3-&#934; VVVF "
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		threephivvfcanvas.init(canid);
	}
	bp.createSwiSPST = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "SPST"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		spstcanvas.init(canid);
	}
	bp.createSwiDPST = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "DPST"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		dpstcanvas.init(canid);
	}
	bp.createSwiDPDT = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "DPDT"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		dpdtcanvas.init(canid);
	}
	bp.createSlippingRotor = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "Slipping Rotor"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		slippingrotorcanvas.init(canid);
	}
	bp.createDCVariable = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "DC-Variable"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		dcvariablecanvas.init(canid);
	}
	bp.createShortCircuit = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "Short Circuit Link"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		shortcircuitcanvas.init(canid);
	}
	bp.createMechRotor = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
		id: id,
		canID: canid,
		title: "Mechanical Rotor Block"	
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		mechrotorcanvas.init(canid);
	}
	bp.createMIPowerFactor = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "Power Factor Meter"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		powerfactorcanvas.init(canid);
	}
	bp.createThreePRlLoad = function(id,canid,cssObject){
		var str = tmpl(canvasContainerOne,{
			id: id,
			canID: canid,
			title: "3-&#934;R-L Load"
		});
	    $("#workspace").append(str);
	    $("#"+id).css(cssObject);
	   threeprlcanvas.init(canid); 
	}
	bp.createThreePRCLoad = function(id,canid,cssObject){
		var str = tmpl(canvasContainerOne,{
			id: id,
			canID: canid,
			title: "3-&#934;R-C Load"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		threeprcloadcanvas.init(canid);
	}
	bp.createThreePResisLoad = function(id,canid,cssObject){
		var str = tmpl(canvasContainerOne,{
			id: id,
			canID: canid,
			title: "3-&#934;Resistive Load"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		threepresisloadcanvas.init(canid);
	}
	bp.createByPass = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "By Pass Link"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		bypasscanvas.init(canid);	
	}
	bp.createSwiTPST = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "TPST"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		switpstcanvas.init(canid);
	}
	bp.createSwiTPDT = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "TPDT"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		switpdtcanvas.init(canid);
		
	}
	bp.createACSinPhase = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id : id,
			canID: canid,
			title: "1-&#934 AC Voltage"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		acsinphasecanvas.init(canid);
	}
	bp.createDCFixed = function(id,canid,cssObject){
		var str = tmpl(canvasDcfixed,{
			id: id,
			canID: canid,
			inputid : id + "input",
			title: "DC Voltage"
		});
		    
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		
		dcvoltagecanvas.init(canid,id);
	}
	bp.createSalientRotor = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "Salient Pole Rotor"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		salientrotorcanvas.init(canid);
	}
	bp.createSquirRotor = function (id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "Squirrel Rotor"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		squirrotorcanvas.init(canid);
	}
	bp.createrheostat = function (id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "Rheostat"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		rheostatcanvas.init(canid);
	}
	bp.createSPResisLoad = function(id,canid,cssObject){
        var str = tmpl(canvasContainer,{
        	id: id,
        	canID: canid,
        	title: "Single Phase Resistive Load"
        });
        $("#workspace").append(str);
        $("#"+id).css(cssObject);
        spresisloadcanvas.init(canid);
	}
	bp.createSPRlLoad = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "Single Phase R-L Load"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		sprlloadcanvas.init(canid);
	}
	
	bp.createVariacThreePhase = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "Three Phase Variac"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		variactphcanvas.init(canid);
	}
	
	bp.createThreePhACSource = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "Three Phase AC Voltage Source"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		threephacvoltagesrc.init(canid);
	}
	
	bp.createMIVoltAC = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "AC Voltmeter"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		acvoltmetercanvas.init(canid);
	}
	 
	bp.createMITachometer = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "Tachometer"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		tachometercanvas.init(canid);
	}  
	
	bp.createVarSinglePhase = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "Single Phase Variac"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		variacspaccanvas.init(canid);
	}   
	 
	bp.createSynCylinRotor = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "Cylindrical Rotor"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		cylrotorcanvas.init(canid);
	}   
	
	bp.createDCSelfExcited = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "Self Excited DC Motor"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		selfexcdccanvas.init(canid);
	}   
	
	bp.createDCSExcited = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "Seperately Excited DC Motor"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		sepexciteddccanvas.init(canid);
	}     

	bp.createOnePhiVVF = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "Single Phase VVVF"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		sinphvvvfcanvas.init(canid);
	}     
	
	bp.createSepExcited = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "Seperately Excited DC Generator"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		sepexciteddccanvas.init(canid);
	}   
	
	bp.createMIWattNormal =  function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "Normal Wattmeter"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		wattmetercanvas.init(canid);
	}     
	
	bp.createMIWattLowFactor = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "Low Power Factor Wattmeter"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		wattmetercanvas.init(canid);
	}     
 	  
 	bp.createSelfExcited =  function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "Self Excited DC Generator"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		selfexcdccanvas.init(canid);
	}     
	 
	bp.createSalRotor =  function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "Synchronous Saliet Pole Generator(Rotor)"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		salientrotorcanvas.init(canid);
	}     
	 
	bp.createCylinRotor = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "Cylindrical Rotor(Generator)"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		cylrotorcanvas.init(canid);
	}     
	
	bp.createMIAmmAC = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "AC Ammeter"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		miammaccanvas.init(canid);
	}   
	
	bp.createVVVFSinglePhase = function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "Single Phase VVVF"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		sinphvvvfcanvas.init(canid);
	}   
	    
	bp.createVVVFThreePhase =  function(id,canid,cssObject){
		var str = tmpl(canvasContainer,{
			id: id,
			canID: canid,
			title: "Three Phase VVVF"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		threephivvfcanvas.init(canid);
	}
	bp.createExperiment1a = function(id,canid,cssObject){
		var str = tmpl(canvasContainerTwo,{
					id: id,
					canID: canid,
					title: "Experiment 1a"
				});
				$("#workspace").append(str);
				$("#"+id).css(cssObject);
				$("#"+id).css('height','500px');				
				exp1acanvas.init(canid);
	} 
	bp.createExperiment1b = function(id,canid,cssObject){
		var data1;
		var str = tmpl(canvasContainerOneb,{
			id: id,
			canID: canid,
			title: "Experiment 1b"
		});
		console.log("id:"+id);
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		$("#"+id).css('height','700px');
		data1 = '<li id="myid1"><a href="#">I<font size="1">ASE</font> vs V<font size="1">ASE</font></a></li><li id="myid1"><a href="#">I<font size="1">FSE</font> vs V<font size="1">ASE</font></a></li><li id="myid1"><a href="#">I<font size="1">ASE</font> vs Speed</a></li><li id="myid1"><a href="#">I<font size="1">FSE</font> vs Speed</a></li><li id="myid1"><a href="#">I<font size="1">ASH</font> vs Mot Effi</a></li><li id="myid1"><a href="#">V<font size="1">ASH</font> vs Speed</li><li id="myid1"><a href="#">V<font size="1">ASH</font> vs I<font size="1">ASE</font></a></li><li id="myid1"><a href="#">Speed vs V<font size="1">ASE</a></li>';
  			
  		$("#myid").append(data1);
		//$("#graph-options").append("<option>Iase vs Vase</option><option>Ifse vs Vase</option><option>Iase vs speed</option><option>Ifse vs speed</option><option>Iash vs Mot Effi</option><option>Vash vs speed</option><option>Vash vs Iase</option><option>speed vs Vase</option>");		
		exp1bcanvas.init(canid);
	}  
	bp.createExperiment2 =  function(id,canid,cssObject){
		var data2;
		var str = tmpl(canvasContainerTwo,{
			id: id,
			canID: canid,
			title: "Experiment 2"
		});
		
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		$("#"+id).css('height','800px');
		//$("#graph-options").append("<option>Mot o/p vs MotEff</option><option>Iam vs Torque</option><option>Mot o/p vs Speed</option><option>Speed vs Torque</option><option>Speed vs Vag</option><option>Iag vs Speed</option><option>Vam vs Speed</option><option>Ifm vs Speed</option><option>Ifg vs Vag</option><option>Mot o/p vs Vag</option>");
		data2='<li id="myid1"><a href="#">Mot o/p vs MotEff</a></li><li id="myid1"><a href="#">I<font size="1">AM</font> vs Torque</a></li><li id="myid1"><a href="#">Mot o/p vs Speed</a></li><li id="myid1"><a href="#">Speed vs Torque</a></li><li id="myid1"><a href="#">Speed vs V<font size="1">AG</font></a></li><li id="myid1"><a href="#">I<font size="1">AG</font> vs Speed</li><li id="myid1"><a href="#">V<font size="1">AM</font> vs Speed</a></li><li id="myid1"><a href="#">I<font size="1">FM</font> vs Speed</a></li><li id="myid1"><a href="#">I<font size="1">FG</font> vs V<font size="1">AG</font></a></li><li id="myid1"><a href="#">Mot o/p vs V<font size="1">AG</font></a></li></ul>';
		$("#myid").append(data2);
		exp2canvas.init(canid);
	}  
	bp.createExperiment3 =  function(id,canid,cssObject){
		var data3;
		var str = tmpl(canvasContainerThree,{
					id: id,
					canID: canid,
					inputexpVal: id + "val",
					inputexpVal1: id + "val1",
					title: "Experiment 3"
				});
				//$("#workspace").replaceWith("<div id = 'workspace' style='height:954px; width: 100%; margin-left: 200px margin-top:300px;' ><p>Workspace</p></div>");
				$("#workspace").append(str);
				$("#"+id).css(cssObject);
				$("#"+id).css('height','800px');
				//$("#graph-options").append("<option>Vfm vs Speed</option><option>Ifm vs Speed</option><option>Vam vs Speed</option><option>Iam vs Speed</option><option>Vam vs Iam</option><option>Vfm vs Ifm</option><option>Vam vs Speed</option>");
				data3='<li id="myid1"><a href="#">V<font size="1">FM</font> vs Speed</a></li><li id="myid1"><a href="#">I<font size="1">FM</font> vs Speed</a></li><li id="myid1"><a href="#">V<font size="1">AM</font> vs Speed</a></li><li id="myid1"><a href="#">I<font size="1">AM</font> vs Speed</a></li><li id="myid1"><a href="#">V<font size="1">AM</font> vs I<font size="1">AM</font></a></li><li id="myid1"><a href="#">V<font size="1">FM</font> vs I<font size="1">FM</font></li></ul>';
		$("#myid").append(data3);
				exp3canvas.init(canid,id);
	}  
	bp.createExperiment5 = function(id,canid,cssObject){
		
		var str = tmpl(canvasContainerTwo,{
			id: id,
			canID: canid,
			title: "Experiment 5"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		$("#"+id).css('height','600px');
		exp5canvas.init(canid);
	}
	bp.createExperiment6a = function(id,canid,cssObject){
		var str = tmpl(canvasContainerTwo,{
			id: id,
			canID: canid,
			title: "Experiment 6"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		$("#"+id).css('height','500px');
		exp6acanvas.init(canid);
	}    
	bp.renderExperiment8 = function(id,canid,cssObject){
		var data8;
		var str = tmpl(canvasContainerEight,{
			id: id,
			canID: canid,
			title: "Experiment 8",
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		
		//$("#graph-options").append("<option>Ifa vs Vry</option><option>Iash vs Mot o/p</option><option>Ifa vs speed</option><option>Vfa vs Ifa</option><option>o/p Alt vs %Eff.</option><option>o/p Alt vs Vry</option><option>o/p Alt vs %Volt Reg</option><option>o/p Alt vs speed</option><option>o/p Alt vs Iash</option>");
		data8='<li id="myid1"><a href="#">I<font size="1">FA</font> vs V<font size="1">RY</font></a></li>'
			 +'<li id="myid1"><a href="#">I<font size="1">ASH</font> vs Mot o/p</a></li>'
			 +'<li id="myid1"><a href="#">I<font size="1">FA</font> vs Speed</a></li>'
			 +'<li id="myid1"><a href="#">V<font size="1">FA</font> vs I<font size="1">FA</font></a></li>'
			 +'<li id="myid1"><a href="#">o/p Alt vs %Eff</a></li>'
			 +'<li id="myid1"><a href="#">o/p Alt vs V<font size="1">RY</font></li>'
			 +'<li id="myid1"><a href="#">o/p Alt vs %Volt Reg</a></li></ul>'
			 +'<li id="myid1"><a href="#">o/p Alt vs Speed</a></li>'
			 +'<li id="myid1"><a href="#">o/p Alt vs I<font size="1">ASH</font></li>';
			 
		$("#"+id).css('height','900px');
		$("#myid").append(data8);
		exp8canvas.init(canid);
	} 
	bp.renderExperiment5 = function(id,canid,cssObject){
		var str = tmpl(canvasContainerTwo,{
			id: id,
			canID: canid,
			title: "Experiment 5",
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		$("#"+id).css('height','800px');
		exp5canvas.init(canid);
	} 
	bp.renderExperiment6a = function(id,canid,cssObject){
		var str = tmpl(canvasContainerTwo,{
			id: id,
			canID: canid,
			title: "Experiment 6a",
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		$("#"+id).css('height','800px');
		exp6acanvas.init(canid);
	} 
	bp.renderExperiment9 = function(id,canid,cssObject){
		var data9;
		var str = tmpl(canvasContainerNine,{
			id: id,
			canID: canid,
			title: "Experiment 9"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		$("#"+id).css('height','900px');
		//$("#graph-options").append("<option>Ifs vs Ial</option><option>Ifs vs cos@</option><option>Ifs vs Speed</option><option>Ifs vs Vg</option><option>Ig vs Vg</option><option>Ig vs Power factor</option>");
		data9='<li id="myid1"><a href="#">I<font size="1">FS</font> vs I<font size="1">AL</font></a></li>'
			 +'<li id="myid1"><a href="#">I<font size="1">FS</font> vs cos@</a></li>'
			 +'<li id="myid1"><a href="#">I<font size="1">FS</font> vs Speed</a></li>'
			 +'<li id="myid1"><a href="#">I<font size="1">FS</font> vs V<font size="1">G</font></a></li>'
			 +'<li id="myid1"><a href="#">I<font size="1">G</font> vs V<font size="1">G</font></a></li>'
			 +'<li id="myid1"><a href="#">I<font size="1">G</font> vs Power Factor</font></a></li>';
			
		$("#myid").append(data9);
		exp9canvas.init(canid);
	}
	bp.renderExperiment7a = function(id,canid,cssObject){
		var data7a;
		var str = tmpl(canvasContainerSevenA,{
			id: id,
			canID: canid,
			title:"Experiment 7a"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		$("#"+id).css('height','800px');
		
		//$("#graph-options").append("<option>Ifa vs <br>Voc</option><option>Ifa vs Alt.Coreloss</option><option>Iash vs Mot o/p</option><option>Ifa vs speed</option><option>Vfa vs Ifa</option>");
	data7a='<li id="myid1"><a href="#">I<font size="1">FA</font> vs V<font size="1">OC</font></a></li>'
			 +'<li id="myid1"><a href="#">I<font size="1">FA</font> vs Alt.Coreloss</a></li>'
			 +'<li id="myid1"><a href="#">I<font size="1">ASH</font> vs Mot o/p</a></li>'
			 +'<li id="myid1"><a href="#">I<font size="1">FA</font> vs Speed</a></li>'
			 +'<li id="myid1"><a href="#">V<font size="1">FA</font> vs I<font size="1">FA</font></a></li>';
			
		$("#myid").append(data7a);
		exp7acanvas.init(canid);
		
	}
	bp.renderExperiment7b = function(id,canid,cssObject){
		var data7b;
		
		var str = tmpl(canvasContainerSevenb,{
			id: id,
			canID: canid,
			title:"Experiment 7b"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		$("#"+id).css('height','800px');
		//$("#graph-options").append("<option>Ifa vs Isc</option><option>Ifa vs Speed</option><option>Iash vs Mot o/p</option><option>Vfa vs Ifa</option>");
		data7b='<li id="myid1"><a href="#">I<font size="1">FA</font> vs I<font size="1">SC</font></a></li>'
			 +'<li id="myid1"><a href="#">I<font size="1">FA</font> vs Speed</a></li>'
			 +'<li id="myid1"><a href="#">I<font size="1">ASH</font> vs Mot o/p</a></li>'
			 +'<li id="myid1"><a href="#">V<font size="1">FA</font> vs I<font size="1">FA</font></a></li>';
		$("#myid").append(data7b);
		exp7bcanvas.init(canid);
	}
	bp.renderExperiment4a = function(id,canid,cssObject){
		var data4a;
		var str = tmpl(canvasContainerTwo,{
			id: id,
			canID: canid,
			title: "Experiment 4a"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		$("#"+id).css('height', '800px');
		//$("#graph-options").append("<option>IL vs Speed</option><option>Vs vs Speed</option><option>Vs vs i/p Power</option><option>IL vs Total copper loss</option>");
		data4a='<li id="myid1"><a href="#">I<font size="1">L</font> vs Speed</a></li>'
			 +'<li id="myid1"><a href="#">V<font size="1">S</font> vs Speed</a></li>'
			 +'<li id="myid1"><a href="#">V<font size="1">S</font> vs i/p Power</a></li>'
			 +'<li id="myid1"><a href="#">I<font size="1">L</font> vs TotalCopperLoss</a></li>';
		$("#myid").append(data4a);
		exp4acanvas.init(canid);
	}
	bp.renderExperiment6b = function(id,canid,cssObject){
		
		var str = tmpl(canvasContainerTwo,{
			id: id,
			canID: canid,
			title: "Experiment 6b"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		$("#"+id).css('height' , '500px');
		exp6bcanvas.init(canid);
	}
	bp.renderExperiment4b = function(id,canid,cssObject){
		var data4b;
		var str = tmpl(canvasContainerTwo,{
			id: id,
			canID: canid,
			title: "Experiment 4b"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		$("#"+id).css('height' , '800px');
		
		//$("#graph-options").append("<option>Vs vs i/p power</option><option>IL vs Total copper loss</option><option>Vs vs IL</option>");
		data4b='<li id="myid1"><a href="#">V<font size="1">S</font> vs i/p Power</a></li>'
			 +'<li id="myid1"><a href="#">I<font size="1">L</font> vs TotalCopperLoss</a></li>'
			 +'<li id="myid1"><a href="#">V<font size="1">S</font> vs I<font size="1">L</font></a></li>'
			
		$("#myid").append(data4b);
		exp4bcanvas.init(canid);
	}
	bp.renderExperiment10a = function(id ,canid,cssObject){
		var str = tmpl(canvasContainerTwo,{
			id: id,
			canID: canid,
			title: "Experiment 10 a"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		$("#"+id).css('height' , '500px');
		exp10acanvas.init(canid);
	}
	bp.renderExperiment10b = function(id ,canid,cssObject){
		var str = tmpl(canvasContainerTwo,{
			id: id,
			canID: canid,
			title: "Experiment 10 b"
		});
		$("#workspace").append(str);
		$("#"+id).css(cssObject);
		$("#"+id).css('height' , '500px');
		exp10bcanvas.init(canid);
	}
})(boilerplate); 


