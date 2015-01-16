function exp1bSwitch(){
		this.id = "";
		this.substr = "";
		this.armatureFlag = true;
		this.motorFlag = true;
		this.mainLoadFlag = true;
		this.load1Flag = true;
		this.load2Flag = true;
		this.load3Flag = true;
		this.load4Flag = true;
		this.load5Flag = true;
		this.state = "";
	};

(function(){
		
		exp1bSwitch.prototype.setId = function(id){
			this.id = id;
		}	
		
		exp1bSwitch.prototype.getId = function(){
			return this.id;
		}
		
		exp1bSwitch.prototype.setArmatureFlag = function(armatureFlag){
			this.armatureFlag = armatureFlag;
			//alert("flag1_set="+flag);	
		}
		
		exp1bSwitch.prototype.getArmatureFlag = function(){
			return this.armatureFlag;
			//alert("flag1_get="+flag);		
		}
		
		exp1bSwitch.prototype.setMotorFlag = function(motorFlag){
			this.motorFlag = motorFlag;
			//alert("flag1_set="+flag);	
		}
		
		exp1bSwitch.prototype.getMotorFlag = function(){
			return this.motorFlag;
			//alert("flag1_get="+flag);		
		}
		exp1bSwitch.prototype.setMainLoadFlag = function(mainLoadFlag){
			this.mainLoadFlag = mainLoadFlag;
			//alert("flag1_set="+flag);	
		}
		
		exp1bSwitch.prototype.getMainLoadFlag = function(){
			return this.mainLoadFlag;
			//alert("flag1_get="+flag);		
		}
		exp1bSwitch.prototype.setLoad1Flag = function(load1Flag){
			this.load1Flag = load1Flag;
			//alert("flag1_set="+flag);	
		}
		
		exp1bSwitch.prototype.getLoad1Flag = function(){
			return this.load1Flag;
			//alert("flag1_get="+flag);		
		}
		exp1bSwitch.prototype.setLoad2Flag = function(load2Flag){
			this.load2Flag = load2Flag;
			//alert("flag1_set="+flag);	
		}
		
		exp1bSwitch.prototype.getLoad2Flag = function(){
			return this.load2Flag;
			//alert("flag1_get="+flag);		
		}
		exp1bSwitch.prototype.setLoad3Flag = function(load3Flag){
			this.load3Flag = load3Flag;
			//alert("flag1_set="+flag);	
		}
		
		exp1bSwitch.prototype.getLoad3Flag = function(){
			return this.load3Flag;
			//alert("flag1_get="+flag);		
		}
		exp1bSwitch.prototype.setLoad4Flag = function(load4Flag){
			this.load4Flag = load4Flag;
			//alert("flag1_set="+flag);	
		}
		
		exp1bSwitch.prototype.getLoad4Flag = function(){
			return this.load4Flag;
			//alert("flag1_get="+flag);		
		}
		
		exp1bSwitch.prototype.setLoad5Flag = function(load5Flag){
			this.load5Flag = load5Flag;
			//alert("flag1_set="+flag);	
		}
		
		exp1bSwitch.prototype.getLoad5Flag = function(){
			return this.load5Flag;
			//alert("flag1_get="+flag);		
		}
		
		exp1bSwitch.prototype.setSubstr = function(str){
			this.substr = str;
		}
		
		exp1bSwitch.prototype.getSubstr = function(){
			return this.substr;
		}
		
		exp1bSwitch.prototype.setState = function(state){
			this.state = state;
		}
		
		exp1bSwitch.prototype.getState = function(){
			return this.state;
		}
})(this);