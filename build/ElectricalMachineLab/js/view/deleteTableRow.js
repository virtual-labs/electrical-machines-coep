function deleteRow(tableRow,expNo) {
        //Experiment1
        console.log("expNo"+expNo);
        switch(expNo){
        	
        	case "exp1b":
        	 try {
	            var table = document.getElementById('myTableExp1b');
	            var i=tableRow.parentNode.parentNode.rowIndex;
	 			table.deleteRow(i);
	 			
	 			genOpExp1b.splice(i-1,1);
	 			IagExp1b.splice(i-1,1);
	 			IfgExp1b.splice(i-1,1);
	 			VaExp1b.splice(i-1,1);
	 			IinExp1b.splice(i-1,1);
	 			VinExp1b.splice(i-1,1);
	 			VtExp1b.splice(i-1,1);
	 			speedExp1b.splice(i-1,1);
	 			emfExp1b.splice(i-1,1);
	 			motOpExp1b.splice(i-1,1);
	 			motEffExp1b.splice(i-1,1);
	 			GenEffExp1b.splice(i-1,1);
            }
            catch(e) {
                alert(e);
            }
            break;
         
           case "exp2" :
           	try {
		            var table = document.getElementById('myTableExp2');
		            var i=tableRow.parentNode.parentNode.rowIndex;
		 			table.deleteRow(i);
		 			
		 			IagExp2.splice(i-1,1);
		 			VfExp2.splice(i-1,1);
		 			IfExp2.splice(i-1,1);
		 			VaExp2.splice(i-1,1);
		 			IaExp2.splice(i-1,1);
		 			VfgExp2.splice(i-1,1);
		 			IfgExp2.splice(i-1,1);
		 			VtExp2.splice(i-1,1);
		 			speedExp2.splice(i-1,1);
		 			MotEffexp2.splice(i-1,1);
		 			motOpExp2.splice(i-1,1);
		 			TorqueExp2.splice(i-1,1);
            }
            catch(e){
               	 	alert(e);
            		}
            		break;
            	
            case "exp3" :
		  	 try {
		            var table = document.getElementById('myTableExp3');
		            var i=tableRow.parentNode.parentNode.rowIndex;
		 			table.deleteRow(i);
		 			
		 			IfmExp3.splice(i-1,1);
		 			VfmExp3.splice(i-1,1);
		 			speedArrExp3.splice(i-1,1);
		 			VamExp3.splice(i-1,1);
		 			IamExp3.splice(i-1,1);
		 			MotOpExp3.splice(i-1,1);
             	  }
             catch(e) 
             	  {
               		 alert(e);
                  }
            	break;
            
            case "exp4a" :
              try {
		            var table = document.getElementById('myTableExp4a');
		            var i=tableRow.parentNode.parentNode.rowIndex;
		 			table.deleteRow(i);
		 			coreLossExp4a.splice(i-1,1);
		 			VsExp4a.splice(i-1,1);
		 			IlExp4a.splice(i-1,1);
		 			watt1Exp4a.splice(i-1,1);
		 			watt2Exp4a.splice(i-1,1);
		 			powerExp4a.splice(i-1,1);
		 			rotorangleExp4a.splice(i-1,1);
		 			copperlossExp4a.splice(i-1,1);
		 			speedExp4a.splice(i-1,1);
             	  }
             catch(e) 
             	  {
               		 alert(e);
                  }
                  break;
                
            case "exp4b" :
             try {
		            var table = document.getElementById('myTableExp4b');
		            var i=tableRow.parentNode.parentNode.rowIndex;
		 			table.deleteRow(i);
		 			
		 			phaseCurrentExp4b.splice(i-1,1);
		 			totalCopperLossExp4b.splice(i-1,1);
		 			RotorAngleExp4b.splice(i-1,1);
		 			RotorSupplyVoltageExp4b.splice(i-1,1);
		 			ipPowerExp4b.splice(i-1,1);
		 			firstwattExp4b.splice(i-1,1);
		 			secondwattExp4b.splice(i-1,1);
		 			ILExp4b.splice(i-1,1);
             	  }
             catch(e) 
             	  {
               		 alert(e);
                  }
                  break;
                  
            case "exp7a"  :
             try {
		            var table = document.getElementById('myTableExp7a');
		            var i=tableRow.parentNode.parentNode.rowIndex;
		 			table.deleteRow(i);
		 			
		 			IfaExp7a.splice(i-1,1);
		 			VfaExp7a.splice(i-1,1);
		 			IinExp7a.splice(i-1,1);
		 			VinExp7a.splice(i-1,1);
		 			VtExp7a.splice(i-1,1);
		 			speedExp7a.splice(i-1,1);
		 			corelossExp7a.splice(i-1,1);
		 			motoropExp7a.splice(i-1,1);
             	  }
             catch(e) 
             	  {
               		 alert(e);
                  } 
                  break;
           
            case "exp7b" :
              try {
		            var table = document.getElementById('myTableExp7b');
		            var i=tableRow.parentNode.parentNode.rowIndex;
		 			table.deleteRow(i);
		 			
		 			IinExp7b.splice(i-1,1);
		 			VfaExp7b.splice(i-1,1);
		 			IfaExp7b.splice(i-1,1);
		 			VinExp7b.splice(i-1,1);
		 			IscExp7b.splice(i-1,1);
		 			speedExp7b.splice(i-1,1);
		 			motoropExp7b.splice(i-1,1);
             	  }
             catch(e) 
             	  {
               		 alert(e);
                  } 
                  break;
            
            case "exp8" :
        	 try {
	            var table = document.getElementById('myTableExp8');
	            var i=tableRow.parentNode.parentNode.rowIndex;
	 			table.deleteRow(i);
	 			
	 			IfaExp8.splice(i-1,1);
	 			VfaExp8.splice(i-1,1);
	 			IinExp8.splice(i-1,1);
	 			VinExp8.splice(i-1,1);
	 			speedExp8.splice(i-1,1);
	 			VryExp8.splice(i-1,1);
	 			VybExp8.splice(i-1,1);
	 			VbrExp8.splice(i-1,1);
	 			IrExp8.splice(i-1,1);
	 			IyExp8.splice(i-1,1);
	 			IbExp8.splice(i-1,1);
	 			VtExp8.splice(i-1,1);
	 			motoropExp8.splice(i-1,1);
	 			VoltReg1Exp8.splice(i-1,1);
	 			altOpExp8.splice(i-1,1);
            }
            catch(e) {
                alert(e);
            }
            break;
            
            case "exp9" :
        	 try {
	            var table = document.getElementById('myTableExp9');
	            var i=tableRow.parentNode.parentNode.rowIndex;
	 			table.deleteRow(i);
	 			
	 			fieldVoltageExp9.splice(i-1,1);
	 			fieldCurrentExp9.splice(i-1,1);
	 			motorVoltageExp9.splice(i-1,1);
	 			motorCurrentExp9.splice(i-1,1);
	 			wattmeterReadingExp9.splice(i-1,1);
	 			VtExp9.splice(i-1,1);
	 			IlExp9.splice(i-1,1);
	 			SpeedExp9.splice(i-1,1);
            }
            catch(e) {
                alert(e);
            }
        }
}