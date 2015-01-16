function exp8Switch(){
		this.id = "";
		this.substr = "";
		this.Dpst1Flag = true;
		this.Dpst2Flag = true;
		this.switchR3T = true;
		this.switchR2T = true;
		this.switchR1T = true;
		this.switchR3T1 = true;
		this.switchR3T2 = true;
		this.switchR3T3 = true;
		this.switchR3T4 = true;
		this.switchR3T5 = true;
		this.switchR2T1 = true;
		this.switchR2T2 = true;
		this.switchR2T3 = true;
		this.switchR2T4 = true;
		this.switchR2T5 = true;
		this.switchR1T1 = true;
		this.switchR1T2 = true;
		this.switchR1T3 = true;
		this.switchR1T4 = true;
		this.switchR1T5 = true;
		this.state = "";
	};

(function(){
		
		exp8Switch.prototype.setId = function(id){
			this.id = id;
		}	
		
		exp8Switch.prototype.getId = function(){
			return this.id;
		}
		
		exp8Switch.prototype.setDpst1Flag = function(Dpst1Flag){
			this.Dpst1Flag = Dpst1Flag;
			//alert("flag1_set="+flag);	
		}
		
		exp8Switch.prototype.getDpst1Flag = function(){
			return this.Dpst1Flag;
			//alert("flag1_get="+flag);		
		}
		
		exp8Switch.prototype.setDpst2Flag = function(Dpst2Flag){
			this.Dpst2Flag = Dpst2Flag;
			//alert("flag1_set="+flag);	
		}
		
		exp8Switch.prototype.getDpst2Flag = function(){
			return this.Dpst2Flag;
			//alert("flag1_get="+flag);		
		}
		
		exp8Switch.prototype.setSubstr = function(str){
			this.substr = str;
		}
		
		exp8Switch.prototype.getSubstr = function(){
			return this.substr;
		}
		
		exp8Switch.prototype.setState = function(state){
			this.state = state;
		}
		
		exp8Switch.prototype.getState = function(){
			return this.state;
		}
		
		exp8Switch.prototype.setSwitchR3T = function(switchR3T){
			this.switchR3T = switchR3T;
		}	
		
		exp8Switch.prototype.getSwitchR3T = function(){
			return this.switchR3T;
		}
		
		exp8Switch.prototype.setSwitchR2T = function(switchR2T){
			this.switchR2T = switchR2T;
		}	
		
		exp8Switch.prototype.getSwitchR2T = function(){
			return this.switchR2T;
		}
		
		exp8Switch.prototype.setSwitchR1T = function(switchR1T){
			this.switchR1T = switchR1T;
		}	
		
		exp8Switch.prototype.getSwitchR1T = function(){
			return this.switchR1T;
		}
		
		exp8Switch.prototype.setSwitchR3T1 = function(switchR3T1){
			this.switchR3T1 = switchR3T1;
		}	
		
		exp8Switch.prototype.getSwitchR3T1 = function(){
			return this.switchR3T1;
		}
		
		exp8Switch.prototype.setSwitchR3T2 = function(switchR3T2){
			this.switchR3T2 = switchR3T2;
		}	
		
		exp8Switch.prototype.getSwitchR3T2 = function(){
			return this.switchR3T2;
		}
		
		exp8Switch.prototype.setSwitchR3T3 = function(switchR3T3){
			this.switchR3T3 = switchR3T3;
		}	
		
		exp8Switch.prototype.getSwitchR3T3 = function(){
			return this.switchR3T3;
		}
		
		exp8Switch.prototype.setSwitchR3T4 = function(switchR3T4){
			this.switchR3T4 = switchR3T4;
		}	
		
		exp8Switch.prototype.getSwitchR3T4 = function(){
			return this.switchR3T4;
		}
		
		exp8Switch.prototype.setSwitchR3T5 = function(switchR3T5){
			this.switchR3T5 = switchR3T5;
		}	
		
		exp8Switch.prototype.getSwitchR3T5 = function(){
			return this.switchR3T5;
		}
		
		exp8Switch.prototype.setSwitchR2T1 = function(switchR2T1){
			this.switchR2T1 = switchR2T1;
		}	
		
		exp8Switch.prototype.getSwitchR2T1 = function(){
			return this.switchR2T1;
		}
		
		exp8Switch.prototype.setSwitchR2T2 = function(switchR2T2){
			this.switchR2T2 = switchR2T2;
		}	
		
		exp8Switch.prototype.getSwitchR2T2= function(){
			return this.switchR2T2;
		}
		
		exp8Switch.prototype.setSwitchR2T3 = function(switchR2T3){
			this.switchR2T3 = switchR2T3;
		}	
		
		exp8Switch.prototype.getSwitchR2T3= function(){
			return this.switchR2T3;
		}
		
		exp8Switch.prototype.setSwitchR2T4 = function(switchR2T4){
			this.switchR2T4 = switchR2T4;
		}	
		
		exp8Switch.prototype.getSwitchR2T4= function(){
			return this.switchR2T4;
		}
		
		exp8Switch.prototype.setSwitchR2T5 = function(switchR2T5){
			this.switchR2T5 = switchR2T5;
		}	
		
		exp8Switch.prototype.getSwitchR2T5= function(){
			return this.switchR2T5;
		}
		
		exp8Switch.prototype.setSwitchR1T1 = function(switchR1T1){
			this.switchR1T1 = switchR1T1;
		}	
		
		exp8Switch.prototype.getSwitchR1T1= function(){
			return this.switchR1T1;
		}
		
		exp8Switch.prototype.setSwitchR1T2 = function(switchR1T2){
			this.switchR1T2 = switchR1T2;
		}	
		
		exp8Switch.prototype.getSwitchR1T2= function(){
			return this.switchR1T2;
		}
		
		exp8Switch.prototype.setSwitchR1T3 = function(switchR1T3){
			this.switchR1T3 = switchR1T3;
		}	
		
		exp8Switch.prototype.getSwitchR1T3= function(){
			return this.switchR1T3;
		}
		
		exp8Switch.prototype.setSwitchR1T4 = function(switchR1T4){
			this.switchR1T4 = switchR1T4;
		}	
		
		exp8Switch.prototype.getSwitchR1T4= function(){
			return this.switchR1T4;
		}
		
		exp8Switch.prototype.setSwitchR1T5 = function(switchR1T5){
			this.switchR1T5 = switchR1T5;
		}	
		
		exp8Switch.prototype.getSwitchR1T5= function(){
			return this.switchR1T5;
		}
		
})(this);