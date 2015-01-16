$(document).ready(function() {
	var selectedId;
	
	var flag=0;
	$("#horizontal").kendoSplitter({
		panes : [{
			collapsible : true,
			size : "250px"
		}, {
			collapsible : false
		}, {
			collapsible : true,
			size : "40%"
		}]
	});
	

	$('li','ul#myid').live('click', function() {
		selectedId = $(this).text();
		console.log("selectedId="+selectedId);
	//$('#graph-options').html(selectedId);
});
	$("#generate-graph").bind('click', function() {
		controller.generateControllerGraph(selectedId);
	});

	$("#store-data").bind('click', function() {
		controller.expControllerStoreData();
	});

	$("#show-data").bind('click', function() {
		view.showData();
	});

	$("#clear-data").bind('click', function() {
		controller.exp1bControllerClearData();
		controller.exp2ControllerClearData();
		controller.exp3ControllerClearData();
		controller.exp4aControllerClearData();
		controller.exp4bControllerClearData();
		controller.exp5ControllerClearData();
		controller.exp7aControllerClearData();
		controller.exp7bControllerClearData();
		controller.exp8ControllerClearData();
		controller.exp9ControllerClearData();
		$('table').replaceWith("<table border='1'  style='background-color:#FFFFFF;height: 50px;width:50px;' ></table>");
		$('#graph').replaceWith("<div id = 'graph' style= 'float:left; height: 500px;width: 50%;'></div>");
	});

	$("#refresh").click(function() {
		window.location.reload();
	})

	$("#panelbar").kendoPanelBar({
		expandMode : "single"
	});

	$(".draggable").kendoDraggable({
		/*hint : function(event) {

		 var id = $(".draggable").attr('id');
		 return $("#" + id).clone().addClass('dragging');
		 },
		 drag : onDrag,
		 dragstart: function(e){

		 },
		 dragend : function(event){
		 alert(event.target.id);
		 }*/

		filter : '.drag',
		hint : function(item) {
			return "<div class = 'dragging'>" + $(item).text() + "</div>";
		}
	});

	$("#workspace").kendoDropTarget({
		drop : function(e) {
			var self = this;
			var id = $(e.draggable.currentTarget).attr('id');
			var cssObject = {
				marginLeft : "20px",
				marginTop : "20px",
				position : "absolute"
			}
			try {
				callView(id, cssObject);
			} catch(e) {
				throw e;
			}
		}
	});

	var flagExp3Dpst1, flagExp3Dpst2, flagExp1bArmature, flagExp1bMotor, flagExp1bMainLoad, flagExp1bLoad1, flagExp1bLoad2, flagExp1bLoad3, flagExp1bLoad4, flagExp1bLoad5, flagExp7aDpst, flagExp7aDpst1, flagExp8Dpst1, flagExp8Dpst2, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8, flagR2T1Exp8, flagR2TExp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagExp2Dpst1, flagExp2Dpst2, flagExp2Dpst3, flagExp2Dpst4, flagExp2Dpst5, flagExp2Dpst6, flagExp2Dpst7, flagExp2Dpst8, flagExp2Dpst9, flagExp8Dpst1, flagExp8Dpst2, flagExp7bDpst1, flagExp7bDpst2, flagExp4aDpst, flagExp4bDpst, flagExp5Tpst, flagMainLoadExp5, flagLoad1Exp5, flagLoad2Exp5, flagLoad3Exp5, flagLoad4Exp5, flagLoad5Exp5, flagExp9Dpst, flagExp9Tpst, flagExp9MainLoad, flagExp9Load1, flagExp9Load2, flagExp9Load3, flagExp9Load4, flagExp9Load5;

	$('div').delegate('canvas', 'click', function(event) {
		var canIdAttr = event.target.id;
		var substring;
		if(canIdAttr.indexOf('spst') != -1) {
			substring = "spst";
		} else if(canIdAttr.indexOf('dpst') != -1) {
			substring = "dpst";
		} else if(canIdAttr.indexOf('tpst') != -1) {
			substring = "tpst";
		} else if(canIdAttr.indexOf('dpdt') != -1) {
			substring = "dpdt";
		} else if(canIdAttr.indexOf('tpdt') != -1) {
			substring = "tpdt";
		} else if(canIdAttr.indexOf('exp31') != -1) {
			substring = "exp31";
		} else if(canIdAttr.indexOf('exp21') != -1) {
			substring = "exp21";
		} else if(canIdAttr.indexOf('exp1b') != -1) {
			substring = "exp1b";
		} else if(canIdAttr.indexOf('exp7a') != -1) {
			substring = "exp7a";
		} else if(canIdAttr.indexOf('exp81') != -1) {
			substring = "exp81";
		} else if(canIdAttr.indexOf('exp4a') != -1) {
			substring = "exp4a";
		} else if(canIdAttr.indexOf('exp4b') != -1) {
			substring = "exp4b";
		} else if(canIdAttr.indexOf('exp7b') != -1) {
			substring = "exp7b";
		} else if(canIdAttr.indexOf('exp5') != -1) {
			substring = "exp5";
		} else if(canIdAttr.indexOf('rheostat') != -1) {
			substring = "rheostat";
		} else if(canIdAttr.indexOf('canvarthreePhase1') != -1) {
			substring = "canvarthreePhase1";
		} else if(canIdAttr.indexOf('exp9') != -1) {
			substring = "exp9";
		} else {
			return false;
		}
		event = event || window.event;
		var l = $(this).offset().left;
		var r = $(this).offset().top;
		x = event.pageX - parseInt(l), y = event.pageY - parseInt(r);
		//console.log("xxx :" + x + " yyy :" + y);
		var flag, state, i;
		var flagexp, stateexp, a;
		var arr = view.getSPSTArray();
		var exp1barrDpst = view.getexp1bArrayDpst();
		var exp2arrDpst1 = view.getexp2ArrayDpst1();
		var exp2arrDpst2 = view.getexp2ArrayDpst2();
		var exp2arrDpst3 = view.getexp2ArrayDpst3();
		var exp2arrDpst4 = view.getexp2ArrayDpst4();
		var exp2arrDpst5 = view.getexp2ArrayDpst5();
		var exp2arrDpst6 = view.getexp2ArrayDpst6();
		var exp2arrDpst7 = view.getexp2ArrayDpst7();
		var exp2arrDpst8 = view.getexp2ArrayDpst8();
		var exp2arrDpst9 = view.getexp2ArrayDpst9();
		var exp8arrDpst = view.getexp8ArrayDpst();
		var exp3arrDpst1 = view.getexp3ArrayDpst1();
		var exp3arrDpst2 = view.getexp3ArrayDpst2();
		var exp4aarrDpst = view.getexp4aArrayDpst();
		var exp4barrDpst = view.getexp4bArrayDpst();
		var exp5arrTpst = view.getexp5ArrayTPst();
		var exp7aarrDpst = view.getexp7aArrayDpst();
		var exp7aarrDpst1 = view.getexp7aArrayDpst1();
		var exp7barrDpst = view.getexp7bArrayDpst();
		var exp9arrDpst = view.getexp9ArrayDpst();
		var exp9arrTpst = view.getexp9ArrayTpst();
		var exp9arrMainLoad = view.getexp9ArrMainLoad();
		var exp9arrLoad1 = view.getexp9ArrLoad1();
		var exp9arrLoad2 = view.getexp9ArrLoad2();
		var exp9arrLoad3 = view.getexp9ArrLoad3();
		var exp9arrLoad4 = view.getexp9ArrLoad4();
		var exp9arrLoad5 = view.getexp9ArrLoad5();

		for( i = 0; i < arr.length; i++) {
			var id = arr[i].getId();
			if(id == canIdAttr) {
				flag = arr[i].getFlag();
				state = arr[i].getState();
				arr[i].setFlag(!flag);
				break;
			}
		}

		if(x >= 330 && x <= 360 && y >= 154 && y <= 243) {
			for( i = 0; i < exp1barrDpst.length; i++) {
				var idExp1bDpst = exp1barrDpst[i].getId();
				if(idExp1bDpst == canIdAttr) {
					flagExp1bArmature = exp1barrDpst[i].getArmatureFlag();
					exp1barrDpst[i].setArmatureFlag(!flagExp1bArmature);
					break;
				}
			}
		}

		if(x >= 95 && x <= 125 && y >= 316 && y <= 407) {
			for( i = 0; i < exp1barrDpst.length; i++) {
				var idExp1bDpst = exp1barrDpst[i].getId();
				if(idExp1bDpst == canIdAttr) {
					flagExp1bMotor = exp1barrDpst[i].getMotorFlag();
					exp1barrDpst[i].setMotorFlag(!flagExp1bMotor);
					break;
				}
			}
		}

		if(x >= 1168 && x <= 1182 && y >= 322 && y <= 340) {
			for( i = 0; i < exp1barrDpst.length; i++) {
				var idExp1bDpst = exp1barrDpst[i].getId();
				if(idExp1bDpst == canIdAttr) {
					flagExp1bMainLoad = exp1barrDpst[i].getMainLoadFlag();
					exp1barrDpst[i].setMainLoadFlag(!flagExp1bMainLoad);
					break;
				}
			}
		}

		if(x >= 1120 && x <= 1128 && y >= 375 && y <= 388) {
			for( i = 0; i < exp1barrDpst.length; i++) {
				var idExp1bDpst = exp1barrDpst[i].getId();
				if(idExp1bDpst == canIdAttr) {
					flagExp1bLoad1 = exp1barrDpst[i].getLoad1Flag();
					exp1barrDpst[i].setLoad1Flag(!flagExp1bLoad1);
					break;
				}
			}
		}

		if(x >= 1144 && x <= 1153 && y >= 375 && y <= 389) {
			for( i = 0; i < exp1barrDpst.length; i++) {
				var idExp1bDpst = exp1barrDpst[i].getId();
				if(idExp1bDpst == canIdAttr) {
					flagExp1bLoad2 = exp1barrDpst[i].getLoad2Flag();
					exp1barrDpst[i].setLoad2Flag(!flagExp1bLoad2);
					break;
				}
			}
		}

		if(x >= 1168 && x <= 1180 && y >= 375 && y <= 389) {
			for( i = 0; i < exp1barrDpst.length; i++) {
				var idExp1bDpst = exp1barrDpst[i].getId();
				if(idExp1bDpst == canIdAttr) {
					flagExp1bLoad3 = exp1barrDpst[i].getLoad3Flag();
					exp1barrDpst[i].setLoad3Flag(!flagExp1bLoad3);
					break;
				}
			}
		}

		if(x >= 1194 && x <= 1205 && y >= 375 && y <= 389) {
			for( i = 0; i < exp1barrDpst.length; i++) {
				var idExp1bDpst = exp1barrDpst[i].getId();
				if(idExp1bDpst == canIdAttr) {
					flagExp1bLoad4 = exp1barrDpst[i].getLoad4Flag();
					exp1barrDpst[i].setLoad4Flag(!flagExp1bLoad4);
					break;
				}
			}
		}

		if(x >= 1219 && x <= 1229 && y >= 375 && y <= 389) {
			for( i = 0; i < exp1barrDpst.length; i++) {
				var idExp1bDpst = exp1barrDpst[i].getId();
				if(idExp1bDpst == canIdAttr) {
					flagExp1bLoad5 = exp1barrDpst[i].getLoad5Flag();
					exp1barrDpst[i].setLoad5Flag(!flagExp1bLoad5);
					break;
				}
			}
		}

		if(x >= 111 && x <= 142 && y >= 110 && y <= 203) {
			for( i = 0; i < exp3arrDpst1.length; i++) {
				var idExp3Dpst1 = exp3arrDpst1[i].getId();
				if(idExp3Dpst1 == canIdAttr) {
					flagExp3Dpst1 = exp3arrDpst1[i].getFlag();
					exp3arrDpst1[i].setFlag(!flagExp3Dpst1);
					break;
				}
			}
		}

		if(x >= 111 && x <= 142 && y >= 292 && y <= 384) {
			for( i = 0; i < exp3arrDpst2.length; i++) {
				var idExp3Dpst2 = exp3arrDpst2[i].getId();
				if(idExp3Dpst2 == canIdAttr) {
					flagExp3Dpst2 = exp3arrDpst2[i].getFlag();
					armatureFlag = flagExp3Dpst2;
					exp3arrDpst2[i].setFlag(!flagExp3Dpst2);
					break;
				}
			}

		}

		if(x >= 164 && x <= 199 && y >= 258 && y <= 372) {
			for( i = 0; i < exp4aarrDpst.length; i++) {
				var idExp4aDpst = exp4aarrDpst[i].getId();
				if(idExp4aDpst == canIdAttr) {
					flagExp4aDpst = exp4aarrDpst[i].getFlag();
					armatureFlag = flagExp4aDpst;
					exp4aarrDpst[i].setFlag(!flagExp4aDpst);
					break;
				}
			}

		}

		if(x >= 164 && x <= 199 && y >= 258 && y <= 372) {
			for( i = 0; i < exp4barrDpst.length; i++) {
				var idExp4bDpst = exp4barrDpst[i].getId();
				if(idExp4bDpst == canIdAttr) {
					flagExp4bDpst = exp4barrDpst[i].getFlag();
					armatureFlag = flagExp4bDpst;
					exp4barrDpst[i].setFlag(!flagExp4bDpst);
					break;
				}
			}

		}

		if(x >= 1250 && x <= 1257 && y >= 427 && y <= 444) {
			for( i = 0; i < exp5arrTpst.length; i++) {
				var idExp5 = exp5arrTpst[i].getId();
				if(idExp5 == canIdAttr) {
					flagMainLoadExp5 = exp5arrTpst[i].getMainLoad();
					exp5arrTpst[i].setMainLoad(!flagMainLoadExp5);
					break;
				}
			}
		}
		if(x >= 172 && x <= 192 && y >= 266 && y <= 367) {//Exp 5
			for( i = 0; i < exp5arrTpst.length; i++) {
				var idExp5Tpst = exp5arrTpst[i].getId();
				if(idExp5Tpst == canIdAttr) {
					flagExp5Tpst = exp5arrTpst[i].getFlag();
					armatureFlag = flagExp5Tpst;
					exp5arrTpst[i].setFlag(!flagExp5Tpst);
					break;
				}
			}

		}
		if(x >= 1200 && x <= 1206 && y >= 478 && y <= 492) {
			for( i = 0; i < exp5arrTpst.length; i++) {
				var idExp5 = exp5arrTpst[i].getId();
				if(idExp5 == canIdAttr) {
					flagLoad1Exp5 = exp5arrTpst[i].getLoad1();
					exp5arrTpst[i].setLoad1(!flagLoad1Exp5);
					break;
				}
			}
		}

		if(x >= 1224 && x <= 1230 && y >= 478 && y <= 492) {
			for( i = 0; i < exp5arrTpst.length; i++) {
				var idExp5 = exp5arrTpst[i].getId();
				if(idExp5 == canIdAttr) {
					flagLoad2Exp5 = exp5arrTpst[i].getLoad2();
					exp5arrTpst[i].setLoad2(!flagLoad2Exp5);
					break;
				}
			}
		}

		if(x >= 1248 && x <= 1254 && y >= 478 && y <= 493) {
			for( i = 0; i < exp5arrTpst.length; i++) {
				var idExp5 = exp5arrTpst[i].getId();
				if(idExp5 == canIdAttr) {
					flagLoad3Exp5 = exp5arrTpst[i].getLoad3();
					exp5arrTpst[i].setLoad3(!flagLoad3Exp5);
					break;
				}
			}
		}

		if(x >= 1274 && x <= 1279 && y >= 478 && y <= 493) {
			for( i = 0; i < exp5arrTpst.length; i++) {
				var idExp5 = exp5arrTpst[i].getId();
				if(idExp5 == canIdAttr) {
					flagLoad4Exp5 = exp5arrTpst[i].getLoad4();
					exp5arrTpst[i].setLoad4(!flagLoad4Exp5);
					break;
				}
			}
		}

		if(x >= 1300 && x <= 1306 && y >= 478 && y <= 493) {
			for( i = 0; i < exp5arrTpst.length; i++) {
				var idExp5 = exp5arrTpst[i].getId();
				if(idExp5 == canIdAttr) {
					flagLoad5Exp5 = exp5arrTpst[i].getLoad5();
					exp5arrTpst[i].setLoad5(!flagLoad5Exp5);
					break;
				}
			}
		}
		if(x >= 94 && x <= 123 && y >= 117 && y <= 223) {
			for( i = 0; i < exp7aarrDpst.length; i++) {
				var idExp7aDpst = exp7aarrDpst[i].getId();
				if(idExp7aDpst == canIdAttr) {
					flagExp7aDpst = exp7aarrDpst[i].getFlag();
					armatureFlag = flagExp7aDpst;
					exp7aarrDpst[i].setFlag(!flagExp7aDpst);
					break;
				}
			}

		}
		if(x >= 94 && x <= 123 && y >= 307 && y <= 411) {
			for( i = 0; i < exp7aarrDpst1.length; i++) {
				var idExp7aDpst1 = exp7aarrDpst1[i].getId();
				if(idExp7aDpst1 == canIdAttr) {
					flagExp7aDpst1 = exp7aarrDpst1[i].getFlag();
					armatureFlag = flagExp7aDpst1;
					exp7aarrDpst1[i].setFlag(!flagExp7aDpst1);
					break;
				}
			}

		}

		if(x >= 99 && x <= 130 && y >= 102 && y <= 194) {
			for( i = 0; i < exp2arrDpst1.length; i++) {
				var idExp2Dpst1 = exp2arrDpst1[i].getId();
				if(idExp2Dpst1 == canIdAttr) {
					flagExp2Dpst1 = exp2arrDpst1[i].getFlag();
					armatureFlag = flagExp2Dpst1;
					exp2arrDpst1[i].setFlag(!flagExp2Dpst1);
					break;
				}
			}

		}

		if(x >= 100 && x <= 130 && y >= 258 && y <= 348) {
			for( i = 0; i < exp2arrDpst2.length; i++) {
				var idExp2Dpst2 = exp2arrDpst2[i].getId();
				if(idExp2Dpst2 == canIdAttr) {
					flagExp2Dpst2 = exp2arrDpst2[i].getFlag();
					armatureFlag = flagExp2Dpst2;
					exp2arrDpst2[i].setFlag(!flagExp2Dpst2);
					break;
				}
			}
		}

		if(x >= 100 && x <= 130 && y >= 400 && y <= 506) {
			for( i = 0; i < exp2arrDpst3.length; i++) {
				var idExp2Dpst3 = exp2arrDpst3[i].getId();
				if(idExp2Dpst3 == canIdAttr) {
					flagExp2Dpst3 = exp2arrDpst3[i].getFlag();
					armatureFlag = flagExp2Dpst3;
					exp2arrDpst3[i].setFlag(!flagExp2Dpst3);
					break;
				}
			}
		}

		if(x >= 1150 && x <= 1182 && y >= 261 && y <= 280) {
			for( i = 0; i < exp2arrDpst4.length; i++) {
				var idExp2Dpst4 = exp2arrDpst4[i].getId();
				if(idExp2Dpst4 == canIdAttr) {
					flagExp2Dpst4 = exp2arrDpst4[i].getFlag();
					armatureFlag = flagExp2Dpst4;
					exp2arrDpst4[i].setFlag(!flagExp2Dpst4);
					break;
				}
			}
		}

		if(x >= 1107 && x <= 1128 && y >= 308 && y <= 333) {
			for( i = 0; i < exp2arrDpst5.length; i++) {
				var idExp2Dpst5 = exp2arrDpst5[i].getId();
				if(idExp2Dpst5 == canIdAttr) {
					flagExp2Dpst5 = exp2arrDpst5[i].getFlag1();
					armatureFlag = flagExp2Dpst5;
					exp2arrDpst5[i].setFlag1(!flagExp2Dpst5);
					break;
				}
			}
		}

		if(x >= 1134 && x <= 1156 && y >= 308 && y <= 333) {
			for( i = 0; i < exp2arrDpst6.length; i++) {
				var idExp2Dpst6 = exp2arrDpst6[i].getId();
				if(idExp2Dpst6 == canIdAttr) {
					flagExp2Dpst6 = exp2arrDpst6[i].getFlag2();
					armatureFlag = flagExp2Dpst6;
					exp2arrDpst6[i].setFlag2(!flagExp2Dpst6);
					break;
				}
			}
		}

		if(x >= 1159 && x <= 1181 && y >= 308 && y <= 333) {
			for( i = 0; i < exp2arrDpst7.length; i++) {
				var idExp2Dpst7 = exp2arrDpst7[i].getId();
				if(idExp2Dpst7 == canIdAttr) {
					flagExp2Dpst7 = exp2arrDpst7[i].getFlag3();
					armatureFlag = flagExp2Dpst7;
					exp2arrDpst7[i].setFlag3(!flagExp2Dpst7);
					break;
				}
			}
		}

		if(x >= 1184 && x <= 1207 && y >= 308 && y <= 333) {
			for( i = 0; i < exp2arrDpst8.length; i++) {
				var idExp2Dpst8 = exp2arrDpst8[i].getId();
				if(idExp2Dpst8 == canIdAttr) {
					flagExp2Dpst8 = exp2arrDpst8[i].getFlag4();
					armatureFlag = flagExp2Dpst8;
					exp2arrDpst8[i].setFlag4(!flagExp2Dpst8);
					break;
				}
			}
		}

		if(x >= 1210 && x <= 1229 && y >= 308 && y <= 333) {
			for( i = 0; i < exp2arrDpst9.length; i++) {
				var idExp2Dpst9 = exp2arrDpst9[i].getId();
				if(idExp2Dpst9 == canIdAttr) {
					flagExp2Dpst9 = exp2arrDpst9[i].getFlag5();
					armatureFlag = flagExp2Dpst9;
					exp2arrDpst9[i].setFlag5(!flagExp2Dpst9);
					break;
				}
			}
		}

		if(x >= 94 && x <= 125 && y >= 115 && y <= 226) {
			for( i = 0; i < exp7barrDpst.length; i++) {
				var idExp7bDpst1 = exp7barrDpst[i].getId();
				if(idExp7bDpst1 == canIdAttr) {
					flagExp7bDpst1 = exp7barrDpst[i].getDpst1Flag();
					armatureFlag = flagExp7bDpst1;
					exp7barrDpst[i].setDpst1Flag(!flagExp7bDpst1);
					break;
				}
			}
		}

		if(x >= 94 && x <= 125 && y >= 305 && y <= 418) {
			for( i = 0; i < exp7barrDpst.length; i++) {
				var idExp7bDpst2 = exp7barrDpst[i].getId();
				if(idExp7bDpst2 == canIdAttr) {
					flagExp7bDpst2 = exp7barrDpst[i].getDpst2Flag();
					armatureFlag = flagExp7bDpst2;
					exp7barrDpst[i].setDpst2Flag(!flagExp7bDpst2);
					break;
				}
			}
		}

		if(x >= 92 && x <= 125 && y >= 140 && y <= 256) {
			for( i = 0; i < exp8arrDpst.length; i++) {
				var idExp8Dpst1 = exp8arrDpst[i].getId();
				if(idExp8Dpst1 == canIdAttr) {
					flagExp8Dpst1 = exp8arrDpst[i].getDpst1Flag();
					exp8arrDpst[i].setDpst1Flag(!flagExp8Dpst1);
					break;
				}
			}
		}

		if(x >= 123 && x <= 158 && y >= 580 && y <= 675) {
			for( i = 0; i < exp8arrDpst.length; i++) {
				var idExp8Dpst2 = exp8arrDpst[i].getId();
				if(idExp8Dpst2 == canIdAttr) {
					flagExp8Dpst2 = exp8arrDpst[i].getDpst2Flag();
					exp8arrDpst[i].setDpst2Flag(!flagExp8Dpst2);
					break;
				}
			}
		}

		if(x >= 150 && x <= 164 && y >= 344 && y <= 357) {
			for( i = 0; i < exp8arrDpst.length; i++) {
				var idExp8Dpst2 = exp8arrDpst[i].getId();
				if(idExp8Dpst2 == canIdAttr) {
					flagR3TExp8 = exp8arrDpst[i].getSwitchR3T();
					exp8arrDpst[i].setSwitchR3T(!flagR3TExp8);
					break;
				}
			}
		}

		if(x >= 284 && x <= 299 && y >= 344 && y <= 357) {
			for( i = 0; i < exp8arrDpst.length; i++) {
				var idExp8Dpst2 = exp8arrDpst[i].getId();
				if(idExp8Dpst2 == canIdAttr) {
					flagR2TExp8 = exp8arrDpst[i].getSwitchR2T();
					exp8arrDpst[i].setSwitchR2T(!flagR2TExp8);
					break;
				}
			}
		}

		if(x >= 425 && x <= 439 && y >= 344 && y <= 357) {
			for( i = 0; i < exp8arrDpst.length; i++) {
				var idExp8Dpst2 = exp8arrDpst[i].getId();
				if(idExp8Dpst2 == canIdAttr) {
					flagR1TExp8 = exp8arrDpst[i].getSwitchR1T();
					exp8arrDpst[i].setSwitchR1T(!flagR1TExp8);
					break;
				}
			}
		}

		if(x >= 98 && x <= 113 && y >= 381 && y <= 398) {
			for( i = 0; i < exp8arrDpst.length; i++) {
				var idExp8Dpst2 = exp8arrDpst[i].getId();
				if(idExp8Dpst2 == canIdAttr) {
					flagR3T1Exp8 = exp8arrDpst[i].getSwitchR3T1();
					exp8arrDpst[i].setSwitchR3T1(!flagR3T1Exp8);
					break;
				}
			}
		}

		if(x >= 123 && x <= 140 && y >= 380 && y <= 398) {
			for( i = 0; i < exp8arrDpst.length; i++) {
				var idExp8Dpst2 = exp8arrDpst[i].getId();
				if(idExp8Dpst2 == canIdAttr) {
					flagR3T2Exp8 = exp8arrDpst[i].getSwitchR3T2();
					exp8arrDpst[i].setSwitchR3T2(!flagR3T2Exp8);
					break;
				}
			}
		}

		if(x >= 148 && x <= 166 && y >= 381 && y <= 398) {
			for( i = 0; i < exp8arrDpst.length; i++) {
				var idExp8Dpst2 = exp8arrDpst[i].getId();
				if(idExp8Dpst2 == canIdAttr) {
					flagR3T3Exp8 = exp8arrDpst[i].getSwitchR3T3();
					exp8arrDpst[i].setSwitchR3T3(!flagR3T3Exp8);
					break;
				}
			}
		}

		if(x >= 170 && x <= 190 && y >= 380 && y <= 398) {
			for( i = 0; i < exp8arrDpst.length; i++) {
				var idExp8Dpst2 = exp8arrDpst[i].getId();
				if(idExp8Dpst2 == canIdAttr) {
					flagR3T4Exp8 = exp8arrDpst[i].getSwitchR3T4();
					exp8arrDpst[i].setSwitchR3T4(!flagR3T4Exp8);
					break;
				}
			}
		}

		if(x >= 198 && x <= 215 && y >= 381 && y <= 398) {
			for( i = 0; i < exp8arrDpst.length; i++) {
				var idExp8Dpst2 = exp8arrDpst[i].getId();
				if(idExp8Dpst2 == canIdAttr) {
					flagR3T5Exp8 = exp8arrDpst[i].getSwitchR3T5();
					exp8arrDpst[i].setSwitchR3T5(!flagR3T5Exp8);
					break;
				}
			}
		}

		if(x >= 232 && x <= 250 && y >= 381 && y <= 398) {
			for( i = 0; i < exp8arrDpst.length; i++) {
				var idExp8Dpst2 = exp8arrDpst[i].getId();
				if(idExp8Dpst2 == canIdAttr) {
					flagR2T1Exp8 = exp8arrDpst[i].getSwitchR2T1();
					exp8arrDpst[i].setSwitchR2T1(!flagR2T1Exp8);
					break;
				}
			}
		}

		if(x >= 256 && x <= 275 && y >= 380 && y <= 398) {
			for( i = 0; i < exp8arrDpst.length; i++) {
				var idExp8Dpst2 = exp8arrDpst[i].getId();
				if(idExp8Dpst2 == canIdAttr) {
					flagR2T2Exp8 = exp8arrDpst[i].getSwitchR2T2();
					exp8arrDpst[i].setSwitchR2T2(!flagR2T2Exp8);
					break;
				}
			}
		}

		if(x >= 282 && x <= 300 && y >= 380 && y <= 398) {
			for( i = 0; i < exp8arrDpst.length; i++) {
				var idExp8Dpst2 = exp8arrDpst[i].getId();
				if(idExp8Dpst2 == canIdAttr) {
					flagR2T3Exp8 = exp8arrDpst[i].getSwitchR2T3();
					exp8arrDpst[i].setSwitchR2T3(!flagR2T3Exp8);
					break;
				}
			}
		}

		if(x >= 307 && x <= 325 && y >= 380 && y <= 398) {
			for( i = 0; i < exp8arrDpst.length; i++) {
				var idExp8Dpst2 = exp8arrDpst[i].getId();
				if(idExp8Dpst2 == canIdAttr) {
					flagR2T4Exp8 = exp8arrDpst[i].getSwitchR2T4();
					exp8arrDpst[i].setSwitchR2T4(!flagR2T4Exp8);
					break;
				}
			}
		}

		if(x >= 330 && x <= 352 && y >= 380 && y <= 398) {
			for( i = 0; i < exp8arrDpst.length; i++) {
				var idExp8Dpst2 = exp8arrDpst[i].getId();
				if(idExp8Dpst2 == canIdAttr) {
					flagR2T5Exp8 = exp8arrDpst[i].getSwitchR2T5();
					exp8arrDpst[i].setSwitchR2T5(!flagR2T5Exp8);
					break;
				}
			}x >= 397 && x <= 415 && y >= 380 && y <= 398
		}

		if(x >= 372 && x <= 390 && y >= 380 && y <= 398) {
			for( i = 0; i < exp8arrDpst.length; i++) {
				var idExp8Dpst2 = exp8arrDpst[i].getId();
				if(idExp8Dpst2 == canIdAttr) {
					flagR1T1Exp8 = exp8arrDpst[i].getSwitchR1T1();
					exp8arrDpst[i].setSwitchR1T1(!flagR1T1Exp8);
					break;
				}
			}
		}

		if(x >= 397 && x <= 415 && y >= 380 && y <= 398) {
			for( i = 0; i < exp8arrDpst.length; i++) {
				var idExp8Dpst2 = exp8arrDpst[i].getId();
				if(idExp8Dpst2 == canIdAttr) {
					flagR1T2Exp8 = exp8arrDpst[i].getSwitchR1T2();
					exp8arrDpst[i].setSwitchR1T2(!flagR1T2Exp8);
					break;
				}
			}
		}

		if(x >= 420 && x <= 442 && y >= 380 && y <= 398) {
			for( i = 0; i < exp8arrDpst.length; i++) {
				var idExp8Dpst2 = exp8arrDpst[i].getId();
				if(idExp8Dpst2 == canIdAttr) {
					flagR1T3Exp8 = exp8arrDpst[i].getSwitchR1T3();
					exp8arrDpst[i].setSwitchR1T3(!flagR1T3Exp8);
					break;
				}
			}
		}

		if(x >= 448 && x <= 466 && y >= 380 && y <= 398) {
			for( i = 0; i < exp8arrDpst.length; i++) {
				var idExp8Dpst2 = exp8arrDpst[i].getId();
				if(idExp8Dpst2 == canIdAttr) {
					flagR1T4Exp8 = exp8arrDpst[i].getSwitchR1T4();
					exp8arrDpst[i].setSwitchR1T4(!flagR1T4Exp8);
					break;
				}
			}
		}

		if(x >= 472 && x <= 491 && y >= 380 && y <= 398) {
			for( i = 0; i < exp8arrDpst.length; i++) {
				var idExp8Dpst2 = exp8arrDpst[i].getId();
				if(idExp8Dpst2 == canIdAttr) {
					flagR1T5Exp8 = exp8arrDpst[i].getSwitchR1T5();
					exp8arrDpst[i].setSwitchR1T5(!flagR1T5Exp8);
					break;
				}
			}
		}

		if(x >= 100 && x <= 122 && y >= 86 && y <= 193) {
			for( i = 0; i < exp9arrDpst.length; i++) {
				var idExp9Dpst = exp9arrDpst[i].getId();
				if(idExp9Dpst == canIdAttr) {
					flagExp9Dpst = exp9arrDpst[i].getDpstFlag();
					armatureFlag = flagExp9Dpst;
					exp9arrDpst[i].setDpstFlag(!flagExp9Dpst);
					break;
				}
			}
		}

		if(x >= 201 && x <= 230 && y >= 249 && y <= 362) {
			for( i = 0; i < exp9arrTpst.length; i++) {
				var idExp9Tpst = exp9arrTpst[i].getId();
				if(idExp9Tpst == canIdAttr) {
					flagExp9Tpst = exp9arrTpst[i].getTpstFlag();
					armatureFlag = flagExp9Tpst;
					exp9arrTpst[i].setTpstFlag(!flagExp9Tpst);
					break;
				}
			}
		}

		if(x >= 339 && x <= 366 && y >= 497 && y <= 519) {
			for( i = 0; i < exp9arrMainLoad.length; i++) {
				var idExp9MainLoad = exp9arrMainLoad[i].getId();
				if(idExp9MainLoad == canIdAttr) {
					flagExp9MainLoad = exp9arrMainLoad[i].getMainLoadFlag();
					armatureFlag = flagExp9MainLoad;
					exp9arrMainLoad[i].setMainLoadFlag(!flagExp9MainLoad);
					break;
				}
			}
		}

		if(x >= 291 && x <= 313 && y >= 547 && y <= 570) {
			if(flagExp9Dpst == true) {
				for( i = 0; i < exp9arrLoad1.length; i++) {
					var idExp9Load1 = exp9arrLoad1[i].getId();
					if(idExp9Load1 == canIdAttr) {
						flagExp9Load1 = exp9arrLoad1[i].getLoad1Flag();
						armatureFlag = flagExp9Load1;
						exp9arrLoad1[i].setLoad1Flag(!flagExp9Load1);
						break;
					}
				}
			}

		}

		if(x >= 320 && x <= 336 && y >= 547 && y <= 570) {
			if(flagExp9Dpst == true) {
				for( i = 0; i < exp9arrLoad2.length; i++) {
					var idExp9Load2 = exp9arrLoad2[i].getId();
					if(idExp9Load2 == canIdAttr) {
						flagExp9Load2 = exp9arrLoad2[i].getLoad2Flag();
						armatureFlag = flagExp9Load2;
						exp9arrLoad2[i].setLoad2Flag(!flagExp9Load2);
						break;
					}
				}
			}

		}

		if(x >= 343 && x <= 366 && y >= 547 && y <= 570) {
			if(flagExp9Dpst == true) {
				for( i = 0; i < exp9arrLoad3.length; i++) {
					var idExp9Load3 = exp9arrLoad3[i].getId();
					if(idExp9Load3 == canIdAttr) {
						flagExp9Load3 = exp9arrLoad3[i].getLoad3Flag();
						armatureFlag = flagExp9Load3;
						exp9arrLoad3[i].setLoad3Flag(!flagExp9Load3);
						break;
					}
				}
			}

		}

		if(x >= 368 && x <= 389 && y >= 547 && y <= 570) {
			if(flagExp9Dpst == true) {
				for( i = 0; i < exp9arrLoad4.length; i++) {
					var idExp9Load4 = exp9arrLoad4[i].getId();
					if(idExp9Load4 == canIdAttr) {
						flagExp9Load4 = exp9arrLoad4[i].getLoad4Flag();
						armatureFlag = flagExp9Load4;
						exp9arrLoad4[i].setLoad4Flag(!flagExp9Load4);
						break;
					}
				}
			}

		}

		if(x >= 392 && x <= 412 && y >= 547 && y <= 570) {
			if(flagExp9Dpst == true) {
				for( i = 0; i < exp9arrLoad5.length; i++) {
					var idExp9Load5 = exp9arrLoad5[i].getId();
					if(idExp9Load5 == canIdAttr) {
						flagExp9Load5 = exp9arrLoad5[i].getLoad5Flag();
						armatureFlag = flagExp9Load5;
						exp9arrLoad5[i].setLoad5Flag(!flagExp9Load5);
						break;
					}
				}
			}
		}

		switch(substring) {
			case "spst":
				if(x >= 50 && x <= 75 && y >= 70 && y <= 80) {
					spstcanvas.toggleLine(flag, canIdAttr);
				}
				break;
			case "dpst":
				if(x >= 50 && x <= 75 && y >= 70 && y <= 110) {
					dpstcanvas.toggleLine(flag, canIdAttr);
					alert(flag);
				}
				break;
			case "tpst":
				if(x >= 50 && x <= 75 && y >= 70 && y <= 140) {
					switpstcanvas.toggleLine(flag, canIdAttr);
				}
				break;

			case "dpdt":
				if(x >= 50 && x <= 75 && y >= 70 && y <= 110) {
					dpdtcanvas.toggleLeft(state, canIdAttr);

					if(state == "m" || state == "r") {
						arr[i].setState("l");
					} else {
						arr[i].setState("m");
					}

				} else if(x >= 75 && x <= 100 && y >= 70 && y <= 110) {
					dpdtcanvas.toggleRight(state, canIdAttr);

					if(state == "m" || state == "l") {
						arr[i].setState("r");
					} else {
						arr[i].setState("m");
					}
				}
				break;

			case "tpdt":
				if(x >= 50 && x <= 75 && y >= 70 && y <= 140) {
					switpdtcanvas.toggleLeft(state, canIdAttr);

					if(state == "m" || state == "r") {
						arr[i].setState("l");
					} else {
						arr[i].setState("m");
					}

				} else if(x >= 75 && x <= 100 && y >= 70 && y <= 140) {
					switpdtcanvas.toggleRight(state, canIdAttr);

					if(state == "m" || state == "l") {
						arr[i].setState("r");
					} else {
						arr[i].setState("m");
					}
				}
				break;

			case "exp1b":
				if(x >= 330 && x <= 360 && y >= 154 && y <= 243) {
					exp1bcanvas.toggleArmatureDpstSwitch(flagExp1bArmature, canIdAttr);
					controller.exp1bControllerDpst(flagExp1bArmature, flagExp1bMotor, flagExp1bMainLoad, flagExp1bLoad1, flagExp1bLoad2, flagExp1bLoad3, flagExp1bLoad4, flagExp1bLoad5);
				} else if(x >= 95 && x <= 125 && y >= 316 && y <= 407) {
					exp1bcanvas.toggleMotorDpstSwitch(flagExp1bMotor, canIdAttr);
					controller.exp1bControllerDpst(flagExp1bArmature, flagExp1bMotor, flagExp1bMainLoad, flagExp1bLoad1, flagExp1bLoad2, flagExp1bLoad3, flagExp1bLoad4, flagExp1bLoad5);
				} else if(x >= 1168 && x <= 1182 && y >= 322 && y <= 340) {
					exp1bcanvas.toggleMainLoad(flagExp1bMainLoad, canIdAttr);
					controller.exp1bControllerMainLoad(flagExp1bArmature, flagExp1bMotor, flagExp1bMainLoad, flagExp1bLoad1, flagExp1bLoad2, flagExp1bLoad3, flagExp1bLoad4, flagExp1bLoad5);
				} else if(x >= 1120 && x <= 1128 && y >= 375 && y <= 389) {
					exp1bcanvas.toggleLoad1(flagExp1bLoad1, canIdAttr);
					controller.exp1bControllerMainLoad(flagExp1bArmature, flagExp1bMotor, flagExp1bMainLoad, flagExp1bLoad1, flagExp1bLoad2, flagExp1bLoad3, flagExp1bLoad4, flagExp1bLoad5);
				} else if(x >= 1144 && x <= 1153 && y >= 375 && y <= 389) {
					exp1bcanvas.toggleLoad2(flagExp1bLoad2, canIdAttr);
					controller.exp1bControllerMainLoad(flagExp1bArmature, flagExp1bMotor, flagExp1bMainLoad, flagExp1bLoad1, flagExp1bLoad2, flagExp1bLoad3, flagExp1bLoad4, flagExp1bLoad5);
				} else if(x >= 1168 && x <= 1180 && y >= 375 && y <= 389) {
					exp1bcanvas.toggleLoad3(flagExp1bLoad3, canIdAttr);
					controller.exp1bControllerMainLoad(flagExp1bArmature, flagExp1bMotor, flagExp1bMainLoad, flagExp1bLoad1, flagExp1bLoad2, flagExp1bLoad3, flagExp1bLoad4, flagExp1bLoad5);
				} else if(x >= 1194 && x <= 1205 && y >= 375 && y <= 389) {
					exp1bcanvas.toggleLoad4(flagExp1bLoad4, canIdAttr);
					controller.exp1bControllerMainLoad(flagExp1bArmature, flagExp1bMotor, flagExp1bMainLoad, flagExp1bLoad1, flagExp1bLoad2, flagExp1bLoad3, flagExp1bLoad4, flagExp1bLoad5);
				} else if(x >= 1219 && x <= 1229 && y >= 375 && y <= 389) {
					exp1bcanvas.toggleLoad5(flagExp1bLoad5, canIdAttr);
					controller.exp1bControllerMainLoad(flagExp1bArmature, flagExp1bMotor, flagExp1bMainLoad, flagExp1bLoad1, flagExp1bLoad2, flagExp1bLoad3, flagExp1bLoad4, flagExp1bLoad5);
				} else if(x >= 485 && x <= 496 && y >= 215 && y <= 224) {
					if(flagExp1bArmature == true) {
						controller.exp1bControllerArmatureSwitchUp(flagExp1bMainLoad, flagExp1bLoad1, flagExp1bLoad2, flagExp1bLoad3, flagExp1bLoad4, flagExp1bLoad5);
					} else {
						alert("Field DPST switch is off");
					}
				} else if(x >= 485 && x <= 496 && y >= 229 && y <= 238) {
					if(flagExp1bArmature == true) {
						controller.exp1bControllerArmatureSwitchDown(flagExp1bMainLoad, flagExp1bLoad1, flagExp1bLoad2, flagExp1bLoad3, flagExp1bLoad4, flagExp1bLoad5);
					} else {
						alert("Field DPST switch is off");
					}
				} else if(x >= 248 && x <= 261 && y >= 378 && y <= 388) {
					if(flagExp1bMotor == true) {
						controller.exp1bControllerMotorSwitchUp(flagExp1bMainLoad, flagExp1bLoad1, flagExp1bLoad2, flagExp1bLoad3, flagExp1bLoad4, flagExp1bLoad5);
					} else {
						alert("Motor DPST switch is off");
					}
				} else if(x >= 248 && x <= 261 && y >= 393 && y <= 402) {
					if(flagExp1bMotor == true) {
						controller.exp1bControllerMotorSwitchDown(flagExp1bMainLoad, flagExp1bLoad1, flagExp1bLoad2, flagExp1bLoad3, flagExp1bLoad4, flagExp1bLoad5);
					} else {
						alert("Motor DPST switch is off");
					}
				}
				break;

			case "exp21":

				if(x >= 100 && x <= 130 && y >= 102 && y <= 194) {
					exp2canvas.toggleLine1(flagExp2Dpst1, canIdAttr);
					controller.exp2ControllerDpst(flagExp2Dpst1, flagExp2Dpst2, flagExp2Dpst3, flagExp2Dpst4, flagExp2Dpst5, flagExp2Dpst6, flagExp2Dpst7, flagExp2Dpst8, flagExp2Dpst9);
				} else if(x >= 100 && x <= 130 && y >= 258 && y <= 348) {
					exp2canvas.toggleLine2(flagExp2Dpst2, canIdAttr);
					controller.exp2ControllerDpst(flagExp2Dpst1, flagExp2Dpst2, flagExp2Dpst3, flagExp2Dpst4, flagExp2Dpst5, flagExp2Dpst6, flagExp2Dpst7, flagExp2Dpst8, flagExp2Dpst9);
				} else if(x >= 95 && x <= 130 && y >= 404 && y <= 506) {
					exp2canvas.toggleLine3(flagExp2Dpst3, canIdAttr);
					controller.exp2ControllerDpst(flagExp2Dpst1, flagExp2Dpst2, flagExp2Dpst3, flagExp2Dpst4, flagExp2Dpst5, flagExp2Dpst6, flagExp2Dpst7, flagExp2Dpst8, flagExp2Dpst9);
				} else if(x >= 1150 && x <= 1182 && y >= 261 && y <= 280) {
					exp2canvas.toggleLine4(flagExp2Dpst4, canIdAttr);
					controller.exp2DataStoreMainLoad(flagExp2Dpst1, flagExp2Dpst2, flagExp2Dpst3, flagExp2Dpst4, flagExp2Dpst5, flagExp2Dpst6, flagExp2Dpst7, flagExp2Dpst8, flagExp2Dpst9);
				} else if(x >= 1107 && x <= 1130 && y >= 310 && y <= 330) {
					exp2canvas.toggleLine5(flagExp2Dpst5, canIdAttr);
					controller.exp2DataStoreMainLoad(flagExp2Dpst1, flagExp2Dpst2, flagExp2Dpst3, flagExp2Dpst4, flagExp2Dpst5, flagExp2Dpst6, flagExp2Dpst7, flagExp2Dpst8, flagExp2Dpst9);
				} else if(x >= 1134 && x <= 1156 && y >= 308 && y <= 333) {
					exp2canvas.toggleLine6(flagExp2Dpst6, canIdAttr);
					controller.exp2DataStoreMainLoad(flagExp2Dpst1, flagExp2Dpst2, flagExp2Dpst3, flagExp2Dpst4, flagExp2Dpst5, flagExp2Dpst6, flagExp2Dpst7, flagExp2Dpst8, flagExp2Dpst9);
				} else if(x >= 1159 && x <= 1181 && y >= 308 && y <= 333) {
					exp2canvas.toggleLine7(flagExp2Dpst7, canIdAttr);
					controller.exp2DataStoreMainLoad(flagExp2Dpst1, flagExp2Dpst2, flagExp2Dpst3, flagExp2Dpst4, flagExp2Dpst5, flagExp2Dpst6, flagExp2Dpst7, flagExp2Dpst8, flagExp2Dpst9);
				} else if(x >= 1184 && x <= 1207 && y >= 308 && y <= 333) {
					exp2canvas.toggleLine8(flagExp2Dpst8, canIdAttr);
					controller.exp2DataStoreMainLoad(flagExp2Dpst1, flagExp2Dpst2, flagExp2Dpst3, flagExp2Dpst4, flagExp2Dpst5, flagExp2Dpst6, flagExp2Dpst7, flagExp2Dpst8, flagExp2Dpst9);
				} else if(x >= 1210 && x <= 1229 && y >= 308 && y <= 333) {
					exp2canvas.toggleLine9(flagExp2Dpst9, canIdAttr);
					controller.exp2DataStoreMainLoad(flagExp2Dpst1, flagExp2Dpst2, flagExp2Dpst3, flagExp2Dpst4, flagExp2Dpst5, flagExp2Dpst6, flagExp2Dpst7, flagExp2Dpst8, flagExp2Dpst9);
				} else if(x >= 254 && x <= 263 && y >= 165 && y <= 173) {
					if(flagExp2Dpst1 == true) {
						controller.exp2ControllerSwitchUp(flagExp2Dpst4, flagExp2Dpst5, flagExp2Dpst6, flagExp2Dpst7, flagExp2Dpst8, flagExp2Dpst9);
					} else {
						alert("DPST switch is off");
					}

				} else if(x >= 254 && x <= 263 && y >= 179 && y <= 189) {
					if(flagExp2Dpst1 == true) {
						controller.exp2ControllerSwitchDown(flagExp2Dpst4, flagExp2Dpst5, flagExp2Dpst6, flagExp2Dpst7, flagExp2Dpst8, flagExp2Dpst9);
					} else {
						alert("DPST switch is off");
					}
				} else if(x >= 255 && x <= 265 && y >= 317 && y <= 328) {
					if(flagExp2Dpst2 == true) {
						controller.exp2ControllerSwitchUp1(flagExp2Dpst4, flagExp2Dpst5, flagExp2Dpst6, flagExp2Dpst7, flagExp2Dpst8, flagExp2Dpst9);
					} else {
						alert("DPST switch is off");
					}

				} else if(x >= 256 && x <= 266 && y >= 332 && y <= 341) {
					if(flagExp2Dpst2 == true) {
						controller.exp2ControllerSwitchDown1(flagExp2Dpst4, flagExp2Dpst5, flagExp2Dpst6, flagExp2Dpst7, flagExp2Dpst8, flagExp2Dpst9);
					} else {
						alert("DPST switch is off");
					}
				} else if(x >= 249 && x <= 258 && y >= 473 && y <= 485) {
					if(flagExp2Dpst3 == true) {
						controller.exp2ControllerSwitchUp2(flagExp2Dpst4, flagExp2Dpst5, flagExp2Dpst6, flagExp2Dpst7, flagExp2Dpst8, flagExp2Dpst9);
					} else {
						alert("DPST switch is off");
					}

				} else if(x >= 250 && x <= 259 && y >= 489 && y <= 498) {
					if(flagExp2Dpst3 == true) {
						controller.exp2ControllerSwitchDown2(flagExp2Dpst4, flagExp2Dpst5, flagExp2Dpst6, flagExp2Dpst7, flagExp2Dpst8, flagExp2Dpst9);
					} else {
						alert("DPST switch is off");
					}
				}

				break;
			case "exp7a":

				if(x >= 94 && x <= 123 && y >= 117 && y <= 223) {
					exp7acanvas.toggleLine(flagExp7aDpst, canIdAttr);
					controller.exp7aControllerDpst(flagExp7aDpst, flagExp7aDpst1);
				} else if(x >= 94 && x <= 123 && y >= 307 && y <= 411) {
					exp7acanvas.toggleLine1(flagExp7aDpst1, canIdAttr);
					controller.exp7aControllerDpst(flagExp7aDpst, flagExp7aDpst1);
				} else if(x >= 242 && x <= 252 && y >= 176 && y <= 188) {
					if(flagExp7aDpst == true) {
						controller.exp7aControllerFieldVoltageUp();
						exp7acanvas.voltageUpField();
					} else {
						alert("Field DPST switch is off");
					}

				} else if(x >= 307 && x <= 320 && y >= 176 && y <= 188) {
					if(flagExp7aDpst == true) {
						controller.exp7aControllerFieldVoltageDown();
						exp7acanvas.voltageDownField();
					} else {
						alert("Field DPST switch is off");
					}
				} else if(x >= 240 && x <= 252 && y >= 364 && y <= 376) {
					if(flagExp7aDpst1 == true) {
						controller.exp7aControllerMotorVoltageUp();
						exp7acanvas.voltageUpMotor();
					} else {
						alert("Motor DPST switch is off");
					}
				} else if(x >= 305 && x <= 318 && y >= 365 && y <= 376) {
					if(flagExp7aDpst1 == true) {
						controller.exp7aControllerMotorVoltageDown();
						exp7acanvas.voltageDownMotor();
					} else {
						alert("Motor DPST switch is off");
					}
				}
				break;
			case "exp31":

				if(x >= 265 && x <= 274 && y >= 176 && y <= 183) {
					if(flagExp3Dpst1 == true) {
						controller.exp3ControllerSwitchUp();
					} else {
						alert("DPST switch is off");
					}

				} else if(x >= 265 && x <= 274 && y >= 190 && y <= 198) {
					if(flagExp3Dpst1 == true) {
						controller.exp3ControllerSwitchDown();
					} else {
						alert("DPST switch is off");
					}

				} else if(x >= 268 && x <= 276 && y >= 354 && y <= 363) {
					if(flagExp3Dpst2 == true) {
						controller.exp3ControllerSwitchUp1();
					} else {
						alert("DPST switch is off");
					}

				} else if(x >= 268 && x <= 276 && y >= 368 && y <= 376) {
					if(flagExp3Dpst2 == true) {
						controller.exp3ControllerSwitchDown1();
					} else {
						alert("DPST switch is off");
					}

				} else if(x >= 111 && x <= 142 && y >= 110 && y <= 203) {
					exp3canvas.toggleLine(flagExp3Dpst1, canIdAttr);
					controller.exp3ControllerDpst(flagExp3Dpst1, flagExp3Dpst2);
				} else if(x >= 111 && x <= 142 && y >= 292 && y <= 384) {
					exp3canvas.toggleLine1(flagExp3Dpst2, canIdAttr);
					controller.exp3ControllerDpst(flagExp3Dpst1, flagExp3Dpst2);
				}
				break;

			case "exp4a":
				if(x >= 278 && x <= 290 && y >= 280 && y <= 290) {
					if(flagExp4aDpst == true) {
						controller.exp4aControllerSwitchUp();
						exp4acanvas.voltageUp(flagExp4aDpst);
					} else {
						alert("Please ON TPST switch")
					}
				} else if(x >= 313 && x <= 327 && y >= 280 && y <= 290) {
					if(flagExp4aDpst == true) {
						controller.exp4aControllerSwitchDown();
						exp4acanvas.voltageDown(flagExp4aDpst);
					} else {
						alert("Please ON TPST switch")
					}
				} else if(x >= 164 && x <= 199 && y >= 258 && y <= 372) {
					exp4acanvas.toggleLine(flagExp4aDpst, canIdAttr);
					controller.exp4aControllerTPST(flagExp4aDpst);
				}
				break;
			case "exp4b":
				if(x >= 278 && x <= 288 && y >= 280 && y <= 290) {
					if(flagExp4bDpst == true) {
						controller.exp4bControllerSwitchUp();
						exp4bcanvas.voltageDown();
					} else {
						alert("Please ON TPST switch")
					}

				} else if(x >= 313 && x <= 327 && y >= 280 && y <= 290) {
					if(flagExp4bDpst == true) {
						controller.exp4bControllerSwitchDown();
						exp4bcanvas.voltageUp();
					} else {
						alert("Please ON TPST switch")
					}
				}
				if(x >= 164 && x <= 199 && y >= 258 && y <= 372) {
					exp4bcanvas.toggleLine(flagExp4bDpst, canIdAttr);
					controller.exp4bControllerTPST(flagExp4bDpst);
				}

				break;
			case "exp5":
				if(x >= 172 && x <= 192 && y >= 266 && y <= 367) {
					exp5canvas.toggleLine(flagExp5Tpst, canIdAttr);
					controller.exp5ControllerTPST(flagExp5Tpst);
				} else if(x >= 313 && x <= 322 && y >= 282 && y <= 290) {
					if(flagExp5Tpst == true) {
						controller.exp5ControllerFieldVoltageUp(flagExp5Tpst, flagMainLoadExp5, flagLoad1Exp5, flagLoad2Exp5, flagLoad3Exp5, flagLoad4Exp5, flagLoad5Exp5);
						exp5canvas.voltageUp(flagExp5Tpst);
					} else {
						alert("Please ON Tpst switch");
					}
				} else if(x >= 276 && x <= 288 && y >= 282 && y <= 290) {
					if(flagExp5Tpst == true) {
						controller.exp5ControllerFieldVoltageDown(flagExp5Tpst, flagMainLoadExp5, flagLoad1Exp5, flagLoad2Exp5, flagLoad3Exp5, flagLoad4Exp5, flagLoad5Exp5);
						exp5canvas.voltageDown(flagExp5Tpst);
					} else {
						alert("Please ON Tpst switch");
					}

				} else if(x >= 1250 && x <= 1257 && y >= 427 && y <= 444) {
					exp5canvas.toggleMainLoad(flagMainLoadExp5, canIdAttr);
					//controller.calculateLoadResistanceController(flagExp5Tpst, flagMainLoadExp5, flagLoad1Exp5, flagLoad2Exp5, flagLoad3Exp5, flagLoad4Exp5, flagLoad5Exp5);
				} else if(x >= 1200 && x <= 1206 && y >= 478 && y <= 493) {
					exp5canvas.toggleLoad1(flagLoad1Exp5, canIdAttr);
					//controller.calculateLoadResistanceController(flagExp5Tpst, flagMainLoadExp5, flagLoad1Exp5, flagLoad2Exp5, flagLoad3Exp5, flagLoad4Exp5, flagLoad5Exp5);
				} else if(x >= 1224 && x <= 1230 && y >= 478 && y <= 493) {
					exp5canvas.toggleLoad2(flagLoad2Exp5, canIdAttr);
					//controller.calculateLoadResistanceController(flagExp5Tpst, flagMainLoadExp5, flagLoad1Exp5, flagLoad2Exp5, flagLoad3Exp5, flagLoad4Exp5, flagLoad5Exp5);
				} else if(x >= 1248 && x <= 1254 && y >= 478 && y <= 493) {
					exp5canvas.toggleLoad3(flagLoad3Exp5, canIdAttr);
					//controller.calculateLoadResistanceController(flagExp5Tpst, flagMainLoadExp5, flagLoad1Exp5, flagLoad2Exp5, flagLoad3Exp5, flagLoad4Exp5, flagLoad5Exp5);
				} else if(x >= 1274 && x <= 1279 && y >= 478 && y <= 493) {
					exp5canvas.toggleLoad4(flagLoad4Exp5, canIdAttr);
					//controller.calculateLoadResistanceController(flagExp5Tpst, flagMainLoadExp5, flagLoad1Exp5, flagLoad2Exp5, flagLoad3Exp5, flagLoad4Exp5, flagLoad5Exp5);
				} else if(x >= 1300 && x <= 1306 && y >= 478 && y <= 493) {
					exp5canvas.toggleLoad5(flagLoad5Exp5, canIdAttr);
					//controller.calculateLoadResistanceController(flagExp5Tpst, flagMainLoadExp5, flagLoad1Exp5, flagLoad2Exp5, flagLoad3Exp5, flagLoad4Exp5, flagLoad5Exp5);
				}
				break;
			case "exp7b":

				if(x >= 94 && x <= 125 && y >= 115 && y <= 226) {
					exp7bcanvas.toggleLine1(flagExp7bDpst1, canIdAttr);
					controller.exp7bControllerDpst(flagExp7bDpst1, flagExp7bDpst2);
				} else if(x >= 94 && x <= 125 && y >= 305 && y <= 418) {
					exp7bcanvas.toggleLine2(flagExp7bDpst2, canIdAttr);
					controller.exp7bControllerDpst(flagExp7bDpst1, flagExp7bDpst2);
				} else if(x >= 242 && x <= 252 && y >= 176 && y <= 188) {
					if(flagExp7bDpst1 == true) {
						controller.exp7bControllerFieldVoltageUp();
						exp7bcanvas.voltageUpField();
					} else {
						alert("Field DPST switch is off");
					}

				} else if(x >= 308 && x <= 320 && y >= 176 && y <= 188) {
					if(flagExp7bDpst1 == true) {
						controller.exp7bControllerFieldVoltageDown();
						exp7bcanvas.voltageDownField();
					} else {
						alert("Field DPST switch is off");
					}
				} else if(x >= 240 && x <= 251 && y >= 365 && y <= 376) {
					if(flagExp7bDpst2 == true) {
						controller.exp7bControllerMotorVoltageUp();
						exp7bcanvas.voltageUpMotor();
					} else {
						alert("Motor DPST switch is off");
					}
				} else if(x >= 305 && x <= 318 && y >= 365 && y <= 376) {
					if(flagExp7bDpst2 == true) {
						controller.exp7bControllerMotorVoltageDown();
						exp7bcanvas.voltageDownMotor();
					} else {
						alert("Motor DPST switch is off");
					}
				}
				break;

			case "exp81":

				if(x >= 92 && x <= 125 && y >= 140 && y <= 256) {
					exp8canvas.toggleLine1(flagExp8Dpst1, canIdAttr);
					controller.exp8ControllerDpst(flagExp8Dpst1, flagExp8Dpst2, flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
				} else if(x >= 123 && x <= 158 && y >= 580 && y <= 675) {
					exp8canvas.toggleLine2(flagExp8Dpst2, canIdAttr);
					controller.exp8ControllerDpst(flagExp8Dpst1, flagExp8Dpst2, flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
				} else if(x >= 297 && x <= 308 && y >= 645 && y <= 654) {
					if(flagExp8Dpst2 == true) {
						controller.motorControllerVoltageUpExp8(flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
					} else {
						alert("Motor DPST Switch is off");
					}
				} else if(x >= 294 && x <= 309 && y >= 657 && y <= 667) {
					if(flagExp8Dpst2 == true) {
						controller.motorControllerVoltageDownExp8(flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
					} else {
						alert("Motor DPST Switch is off");
					}
				} else if(x >= 265 && x <= 278 && y >= 175 && y <= 188) {
					if(flagExp8Dpst1 == true) {
						exp8canvas.fieldVoltageUp();
						controller.fieldControllerVoltageUpExp8(flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
					} else {
						alert("Field DPST Switch is off");
					}
				} else if(x >= 331 && x <= 347 && y >= 175 && y <= 189) {
					if(flagExp8Dpst1 == true) {
						exp8canvas.fieldVoltageDown();
						controller.fieldControllerVoltageDownExp8(flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
					} else {
						alert("Field DPST Switch is off");
					}
				} else if(x >= 150 && x <= 164 && y >= 344 && y <= 357) {
					exp8canvas.toggleC2(flagR3TExp8, canIdAttr);
					controller.loadExp8(flagExp8Dpst1, flagExp8Dpst2, flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
				} else if(x >= 284 && x <= 299 && y >= 344 && y <= 357) {
					exp8canvas.toggleR2T(flagR2TExp8, canIdAttr);
					controller.loadExp8(flagExp8Dpst1, flagExp8Dpst2, flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
				} else if(x >= 425 && x <= 439 && y >= 344 && y <= 357) {
					exp8canvas.toggleR1T(flagR1TExp8, canIdAttr);
					controller.loadExp8(flagExp8Dpst1, flagExp8Dpst2, flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
				} else if(x >= 98 && x <= 113 && y >= 380 && y <= 398) {
					exp8canvas.toggleR3T1(flagR3T1Exp8, canIdAttr);
					controller.loadExp8(flagExp8Dpst1, flagExp8Dpst2, flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
				} else if(x >= 123 && x <= 140 && y >= 380 && y <= 398) {
					exp8canvas.toggleR3T2(flagR3T2Exp8, canIdAttr);
					controller.loadExp8(flagExp8Dpst1, flagExp8Dpst2, flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
				} else if(x >= 148 && x <= 166 && y >= 380 && y <= 398) {
					exp8canvas.toggleR3T3(flagR3T3Exp8, canIdAttr);
					controller.loadExp8(flagExp8Dpst1, flagExp8Dpst2, flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
				} else if(x >= 172 && x <= 190 && y >= 380 && y <= 398) {
					exp8canvas.toggleR3T4(flagR3T4Exp8, canIdAttr);
					controller.loadExp8(flagExp8Dpst1, flagExp8Dpst2, flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
				} else if(x >= 198 && x <= 215 && y >= 380 && y <= 398) {
					exp8canvas.toggleR3T5(flagR3T5Exp8, canIdAttr);
					controller.loadExp8(flagExp8Dpst1, flagExp8Dpst2, flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
				} else if(x >= 232 && x <= 250 && y >= 380 && y <= 398) {
					exp8canvas.toggleR2T1(flagR2T1Exp8, canIdAttr);
					controller.loadExp8(flagExp8Dpst1, flagExp8Dpst2, flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
				} else if(x >= 256 && x <= 275 && y >= 380 && y <= 398) {
					exp8canvas.toggleR2T2(flagR2T2Exp8, canIdAttr);
					controller.loadExp8(flagExp8Dpst1, flagExp8Dpst2, flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
				} else if(x >= 282 && x <= 300 && y >= 380 && y <= 398) {
					exp8canvas.toggleR2T3(flagR2T3Exp8, canIdAttr);
					controller.loadExp8(flagExp8Dpst1, flagExp8Dpst2, flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
				} else if(x >= 307 && x <= 325 && y >= 380 && y <= 398) {
					exp8canvas.toggleR2T4(flagR2T4Exp8, canIdAttr);
					controller.loadExp8(flagExp8Dpst1, flagExp8Dpst2, flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
				} else if(x >= 330 && x <= 352 && y >= 380 && y <= 398) {
					exp8canvas.toggleR2T5(flagR2T5Exp8, canIdAttr);
					controller.loadExp8(flagExp8Dpst1, flagExp8Dpst2, flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
				} else if(x >= 372 && x <= 390 && y >= 380 && y <= 398) {
					exp8canvas.toggleR1T1(flagR1T1Exp8, canIdAttr);
					controller.loadExp8(flagExp8Dpst1, flagExp8Dpst2, flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
				} else if(x >= 397 && x <= 415 && y >= 380 && y <= 398) {
					exp8canvas.toggleR1T2(flagR1T2Exp8, canIdAttr);
					controller.loadExp8(flagExp8Dpst1, flagExp8Dpst2, flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
				} else if(x >= 420 && x <= 442 && y >= 380 && y <= 398) {
					exp8canvas.toggleR1T3(flagR1T3Exp8, canIdAttr);
					controller.loadExp8(flagExp8Dpst1, flagExp8Dpst2, flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
				} else if(x >= 448 && x <= 466 && y >= 380 && y <= 398) {
					exp8canvas.toggleR1T4(flagR1T4Exp8, canIdAttr);
					controller.loadExp8(flagExp8Dpst1, flagExp8Dpst2, flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
				} else if(x >= 472 && x <= 491 && y >= 380 && y <= 398) {
					exp8canvas.toggleR1T5(flagR1T5Exp8, canIdAttr);
					controller.loadExp8(flagExp8Dpst1, flagExp8Dpst2, flagR1TExp8, flagR1T1Exp8, flagR1T2Exp8, flagR1T3Exp8, flagR1T4Exp8, flagR1T5Exp8, flagR2TExp8, flagR2T1Exp8, flagR2T2Exp8, flagR2T3Exp8, flagR2T4Exp8, flagR2T5Exp8, flagR3TExp8, flagR3T1Exp8, flagR3T2Exp8, flagR3T3Exp8, flagR3T4Exp8, flagR3T5Exp8);
				}
				break;

			case "exp9":
				if(x >= 100 && x <= 122 && y >= 86 && y <= 193) {
					exp9canvas.toggleDpst(flagExp9Dpst, canIdAttr);
					controller.exp9ControllerDpst(flagExp9Dpst, flagExp9Tpst, flagExp9MainLoad, flagExp9Load1, flagExp9Load2, flagExp9Load3, flagExp9Load4, flagExp9Load5);
					if(flagExp9Dpst == false) {
						exp9canvas.toggleLoad();

						if(flagExp9Load1 == true) {
							for( i = 0; i < exp9arrLoad1.length; i++) {
								var idExp9Load1 = exp9arrLoad1[i].getId();
								if(idExp9Load1 == canIdAttr) {
									flagExp9Load1 = exp9arrLoad1[i].getLoad1Flag();
									armatureFlag = flagExp9Load1;
									exp9arrLoad1[i].setLoad1Flag(!flagExp9Load1);
									break;
								}
							}
						}

						if(flagExp9Load2 == true) {
							for( i = 0; i < exp9arrLoad2.length; i++) {
								var idExp9Load2 = exp9arrLoad2[i].getId();
								if(idExp9Load2 == canIdAttr) {
									flagExp9Load2 = exp9arrLoad2[i].getLoad2Flag();
									armatureFlag = flagExp9Load2;
									exp9arrLoad2[i].setLoad2Flag(!flagExp9Load2);
									break;
								}
							}

						}

						if(flagExp9Load3 == true) {
							for( i = 0; i < exp9arrLoad3.length; i++) {
								var idExp9Load3 = exp9arrLoad3[i].getId();
								if(idExp9Load3 == canIdAttr) {
									flagExp9Load3 = exp9arrLoad3[i].getLoad3Flag();
									armatureFlag = flagExp9Load3;
									exp9arrLoad3[i].setLoad3Flag(!flagExp9Load3);
									break;
								}
							}
						}

						if(flagExp9Load4 == true) {
							for( i = 0; i < exp9arrLoad4.length; i++) {
								var idExp9Load4 = exp9arrLoad4[i].getId();
								if(idExp9Load4 == canIdAttr) {
									flagExp9Load4 = exp9arrLoad4[i].getLoad4Flag();
									armatureFlag = flagExp9Load4;
									exp9arrLoad4[i].setLoad4Flag(!flagExp9Load4);
									break;
								}
							}
						}

						if(flagExp9Load5 == true) {
							for( i = 0; i < exp9arrLoad5.length; i++) {
								var idExp9Load5 = exp9arrLoad5[i].getId();
								if(idExp9Load5 == canIdAttr) {
									flagExp9Load5 = exp9arrLoad5[i].getLoad5Flag();
									armatureFlag = flagExp9Load5;
									exp9arrLoad5[i].setLoad5Flag(!flagExp9Load5);
									break;
								}
							}
						}
					}

				} else if(x >= 237 && x <= 249 && y >= 127 && y <= 138) {
					if(flagExp9Dpst == true) {
						controller.exp9ControllerFieldVoltageUp(flagExp9Dpst, flagExp9Tpst, flagExp9MainLoad, flagExp9Load1, flagExp9Load2, flagExp9Load3, flagExp9Load4, flagExp9Load5);
						exp9canvas.voltageUpField(flagExp9Dpst);
					} else {
						alert("Synchronous Motor Field Supply is OFF");
					}
				} else if(x >= 304 && x <= 314 && y >= 126 && y <= 138) {
					if(flagExp9Dpst == true) {
						controller.exp9ControllerFieldVoltageDown(flagExp9Dpst, flagExp9Tpst, flagExp9MainLoad, flagExp9Load1, flagExp9Load2, flagExp9Load3, flagExp9Load4, flagExp9Load5);
						exp9canvas.voltageDownField(flagExp9Dpst);
					} else {
						alert("Synchronous Motor Field Supply is OFF");
					}
				} else if(x >= 356 && x <= 368 && y >= 265 && y <= 272) {
					if(flagExp9Tpst == true) {
						controller.exp9ControllerTpstVoltageUp(flagExp9Tpst, flagExp9MainLoad, flagExp9Load1, flagExp9Load2, flagExp9Load3, flagExp9Load4, flagExp9Load5);
						exp9canvas.voltageUp(flagExp9Tpst);
					} else {
						alert("Field TPST switch is off");
					}
				} else if(x >= 319 && x <= 331 && y >= 265 && y <= 272) {
					if(flagExp9Tpst == true) {
						controller.exp9ControllerTpstVoltageDown(flagExp9Dpst, flagExp9Tpst, flagExp9MainLoad, flagExp9Load1, flagExp9Load2, flagExp9Load3, flagExp9Load4, flagExp9Load5);
						exp9canvas.voltageDown(flagExp9Tpst);
					} else {
						alert("Field TPST switch is off");
					}
				} else if(x >= 201 && x <= 230 && y >= 249 && y <= 362) {
					exp9canvas.toggleTPST(flagExp9Tpst, canIdAttr);
					controller.exp9ControllerTPST(flagExp9Dpst, flagExp9Tpst, flagExp9MainLoad, flagExp9Load1, flagExp9Load2, flagExp9Load3, flagExp9Load4, flagExp9Load5);
				} else if(x >= 339 && x <= 366 && y >= 497 && y <= 519) {
					exp9canvas.toggleMainLoad(flagExp9MainLoad, canIdAttr);
					controller.exp9ControllerMainLoad(flagExp9Dpst, flagExp9Tpst, flagExp9MainLoad, flagExp9Load1, flagExp9Load2, flagExp9Load3, flagExp9Load4, flagExp9Load5);
				} else if(x >= 291 && x <= 313 && y >= 547 && y <= 570) {
					if(flagExp9Dpst != true) {
						alert("DPST Switch is off");
						//alert(flagExp9Load1);
					} else {
						//alert(flagExp9Load1);
						exp9canvas.toggleLoad1(flagExp9Load1, canIdAttr);
						controller.exp9ControllerMainLoad(flagExp9Dpst, flagExp9Tpst, flagExp9MainLoad, flagExp9Load1, flagExp9Load2, flagExp9Load3, flagExp9Load4, flagExp9Load5);
					}

				} else if(x >= 320 && x <= 336 && y >= 547 && y <= 570) {
					if(flagExp9Dpst != true) {
						alert("DPST Switch is off");
						//alert(flagExp9Load2);
					} else {
						//alert(flagExp9Load2);
						exp9canvas.toggleLoad2(flagExp9Load2, canIdAttr);
						controller.exp9ControllerMainLoad(flagExp9Dpst, flagExp9Tpst, flagExp9MainLoad, flagExp9Load1, flagExp9Load2, flagExp9Load3, flagExp9Load4, flagExp9Load5);
					}
					exp9canvas.toggleLoad2(flagExp9Load2, canIdAttr);
					controller.exp9ControllerMainLoad(flagExp9Dpst, flagExp9Tpst, flagExp9MainLoad, flagExp9Load1, flagExp9Load2, flagExp9Load3, flagExp9Load4, flagExp9Load5);
				} else if(x >= 343 && x <= 366 && y >= 547 && y <= 570) {
					if(flagExp9Dpst != true) {
						alert("DPST Switch is off");
						//alert(flagExp9Load3);
					} else {
						//alert(flagExp9Load3);
						exp9canvas.toggleLoad3(flagExp9Load3, canIdAttr);
						controller.exp9ControllerMainLoad(flagExp9Dpst, flagExp9Tpst, flagExp9MainLoad, flagExp9Load1, flagExp9Load2, flagExp9Load3, flagExp9Load4, flagExp9Load5);
					}

				} else if(x >= 368 && x <= 389 && y >= 547 && y <= 570) {
					if(flagExp9Dpst != true) {
						alert("DPST Switch is off");
						//alert(flagExp9Load4);
					} else {
						//alert(flagExp9Load4);
						exp9canvas.toggleLoad4(flagExp9Load4, canIdAttr);
						controller.exp9ControllerMainLoad(flagExp9Dpst, flagExp9Tpst, flagExp9MainLoad, flagExp9Load1, flagExp9Load2, flagExp9Load3, flagExp9Load4, flagExp9Load5);
					}

				} else if(x >= 392 && x <= 412 && y >= 547 && y <= 570) {
					if(flagExp9Dpst != true) {
						alert("DPST Switch is off");
						//alert(flagExp9Load5);
					} else {
						//alert(flagExp9Load5);
						exp9canvas.toggleLoad5(flagExp9Load5, canIdAttr);
						controller.exp9ControllerMainLoad(flagExp9Dpst, flagExp9Tpst, flagExp9MainLoad, flagExp9Load1, flagExp9Load2, flagExp9Load3, flagExp9Load4, flagExp9Load5);
					}

				}

				break;
		}
		event.stopPropagation();
	});
});
var c = 0;
var callView = function(eleId, cssObject) {
	switch(eleId) {
		case "sepExcited":
			try {
				controller.renderSepExcitedController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "selfExcited":
			try {
				controller.renderSelfExcitedController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "salientRotor":
			try {
				controller.renderSalientRotorController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "cylinRotor":
			try {
				controller.renderCylinRotorController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "dcsExcited":
			try {
				controller.renderDCSExcitedController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "dcselfExcited":
			try {
				controller.renderDCSelfExcitedController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "synsalRotor":
			try {
				controller.renderSynSalRotorController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "syncylinRotor":
			try {
				controller.renderSynCylinRotorController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "squirRotor":
			try {
				controller.renderSquirRotorController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "slippingRotor":
			try {
				controller.renderSlippingRotorController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "acsinPhase":
			try {
				controller.renderACSinPhaseController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "acthreePhase":
			try {
				controller.renderACThreePhaseController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "dcFixed":
			try {
				controller.renderDCFixedController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "dcVariable":
			try {
				controller.renderDCVariableController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "threephiVVF":
			try {
				controller.renderThreePhiVVFController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "onephiVVF":
			try {
				controller.renderOnePhiVVFController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "spresisLoad":
			try {
				controller.renderSPResisLoadController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "sprlLoad":
			try {
				controller.renderSPRlLoadController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "sprcLoad":
			try {
				controller.renderSPRcLoadController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "threepresisLoad":
			try {
				controller.renderThreePResisLoadController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "threeprlLoad":
			try {
				controller.renderThreePRlLoadController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "threeprcLoad":
			try {
				controller.renderThreePrcLoadController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "miammdc":
			try {
				controller.renderMIAmmDCController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "miammac":
			try {
				controller.renderMIAmmACController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "mivoltdc":
			try {
				controller.renderMIVoltDCController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "mivoltac":
			try {
				controller.renderMIVoltACController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "miwattnormal":
			try {
				controller.renderMIWattNormalController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "miwattlowfactor":
			try {
				controller.renderMIWattLowFactorController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "mipowerfactor":
			try {
				controller.renderMIPowerFactorController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "mitachometer":
			try {
				controller.renderMITachometerController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "coupling":
			try {
				controller.renderCouplingController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "varsinglePhase":
			try {
				controller.renderVarSinglePhaseController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "vvvfsinglePhase":
			try {
				controller.renderVVVFSinglePhaseController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "vvvfthreePhase":
			try {
				controller.renderVVVFThreePhaseController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "rheostat":
			try {
				controller.renderRheostatController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "swispst":
			try {
				controller.renderSwiSPSTController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "swidpst":
			try {
				controller.renderSwiDPSTController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "swidpdt":
			try {
				controller.renderSwiDPDTController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "switpst":
			try {
				controller.renderSwiTPSTController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "switpdt":
			try {
				controller.renderSwiTPDTController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "shortCircuit":
			try {
				controller.renderShortCircuitController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "byPass":
			try {
				controller.renderByPassController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;
		case "mechRotor":
			try {
				controller.renderMechRotorController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "varthreePhase":
			try {
				controller.renderVariacThreePhaseController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		case "exp2":
			try {
				controller.renderExperiment2Controller(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;

		// case "exp3":
		// try {
		// controller.renderExperiment3Controller(eleId, cssObject);
		//
		// } catch(e) {
		// throw e;
		// }
		// break;
		case "exp1a":
			try {
				controller.renderExperiment1aController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;
		case "exp1b":
			try {
				if(c == 0)
					controller.renderExperiment1bController(eleId, cssObject);
				c++;
				//console.log("c " + c);
			} catch(e) {
				throw e;
			}
			break;
		case "exp2":
			try {
				controller.renderExperiment2Controller(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;
		case "exp3":
			try {
				controller.renderExperiment3Controller(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;
		case "exp5":
			try {
				controller.renderExperiment5Controller(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;
		case "exp6a":
			try {
				controller.renderExperiment6aController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;
		case "exp8":
			try {
				if(c == 0)
					controller.renderExperiment8Controller(eleId, cssObject);
				c++;
				//console.log("c " + c);
			} catch(e) {
				throw e;
			}
			break;
		case "exp9":
			try {
				controller.renderExperiment9Controller(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;
		case "exp7a":
			try {
				controller.renderExperiment7aController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;
		case "exp7b":
			try {
				controller.renderExperiment7bController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;
		case "exp4a":
			try {
				controller.renderExperiment4aController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;
		case "exp6b":
			try {
				controller.renderExperiment6bController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;
		case "exp4b":
			try {
				controller.renderExperiment4bController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;
		case "exp10a":
			try {
				controller.renderExperiment10aController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;
		case "exp10b":
			try {
				controller.renderExperiment10bController(eleId, cssObject);
			} catch(e) {
				throw e;
			}
			break;
	}

};
