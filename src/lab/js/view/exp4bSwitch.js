function exp4bSwitch(){
		this.id = "";
		this.substr = "";
		this.flag = true;
		this.state = "";
	};

(function(){
		
		exp4bSwitch.prototype.setId = function(id){
			this.id = id;
		}	
		
		exp4bSwitch.prototype.getId = function(){
			return this.id;
		}
		
		exp4bSwitch.prototype.setFlag = function(flag){
			this.flag = flag;
			//alert("flag1_set="+flag);	
		}
		
		exp4bSwitch.prototype.getFlag = function(){
			return this.flag;
			//alert("flag1_get="+flag);		
		}
		
		exp4bSwitch.prototype.setSubstr = function(str){
			this.substr = str;
		}
		
		exp4bSwitch.prototype.getSubstr = function(){
			return this.substr;
		}
		
		exp4bSwitch.prototype.setState = function(state){
			this.state = state;
		}
		
		exp4bSwitch.prototype.getState = function(){
			return this.state;
		}
})(this);