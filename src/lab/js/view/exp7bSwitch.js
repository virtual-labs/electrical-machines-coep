function exp7bSwitch(){
		this.id = "";
		this.substr = "";
		this.Dpst1Flag = true;
		this.Dpst2Flag = true;
		this.state = "";
	};

(function(){
		
		exp7bSwitch.prototype.setId = function(id){
			this.id = id;
		}	
		
		exp7bSwitch.prototype.getId = function(){
			return this.id;
		}
		
		exp7bSwitch.prototype.setDpst1Flag = function(Dpst1Flag){
			this.Dpst1Flag = Dpst1Flag;
			//alert("flag1_set="+flag);	
		}
		
		exp7bSwitch.prototype.getDpst1Flag = function(){
			return this.Dpst1Flag;
			//alert("flag1_get="+flag);		
		}
		
		exp7bSwitch.prototype.setDpst2Flag = function(Dpst2Flag){
			this.Dpst2Flag = Dpst2Flag;
			//alert("flag1_set="+flag);	
		}
		
		exp7bSwitch.prototype.getDpst2Flag = function(){
			return this.Dpst2Flag;
			//alert("flag1_get="+flag);		
		}
		
		exp7bSwitch.prototype.setSubstr = function(str){
			this.substr = str;
		}
		
		exp7bSwitch.prototype.getSubstr = function(){
			return this.substr;
		}
		
		exp7bSwitch.prototype.setState = function(state){
			this.state = state;
		}
		
		exp7bSwitch.prototype.getState = function(){
			return this.state;
		}
})(this);