function exp4aSwitch(){
		this.id = "";
		this.substr = "";
		this.flag = true;
		this.state = "";
	};

(function(){
		
		exp4aSwitch.prototype.setId = function(id){
			this.id = id;
		}	
		
		exp4aSwitch.prototype.getId = function(){
			return this.id;
		}
		
		exp4aSwitch.prototype.setFlag = function(flag){
			this.flag = flag;
			//alert("flag1_set="+flag);	
		}
		
		exp4aSwitch.prototype.getFlag = function(){
			return this.flag;
			//alert("flag1_get="+flag);		
		}
		
		exp4aSwitch.prototype.setSubstr = function(str){
			this.substr = str;
		}
		
		exp4aSwitch.prototype.getSubstr = function(){
			return this.substr;
		}
		
		exp4aSwitch.prototype.setState = function(state){
			this.state = state;
		}
		
		exp4aSwitch.prototype.getState = function(){
			return this.state;
		}
})(this);