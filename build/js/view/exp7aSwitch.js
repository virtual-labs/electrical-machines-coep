function exp7aSwitch(){
		this.id = "";
		this.substr = "";
		this.flag = true;
		this.state = "";
	};

(function(){
		
		exp7aSwitch.prototype.setId = function(id){
			this.id = id;
		}	
		
		exp7aSwitch.prototype.getId = function(){
			return this.id;
		}
		
		exp7aSwitch.prototype.setFlag = function(flag){
			this.flag = flag;
			//alert("flag1_set="+flag);	
		}
		
		exp7aSwitch.prototype.getFlag = function(){
			return this.flag;
			//alert("flag1_get="+flag);		
		}
		
		exp7aSwitch.prototype.setSubstr = function(str){
			this.substr = str;
		}
		
		exp7aSwitch.prototype.getSubstr = function(){
			return this.substr;
		}
		
		exp7aSwitch.prototype.setState = function(state){
			this.state = state;
		}
		
		exp7aSwitch.prototype.getState = function(){
			return this.state;
		}
})(this);