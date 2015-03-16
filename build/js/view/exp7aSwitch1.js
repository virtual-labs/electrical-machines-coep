function exp7aSwitch1(){
		this.id = "";
		this.substr = "";
		this.flag = true;
		this.state = "";
	};

(function(){
		
		exp7aSwitch1.prototype.setId = function(id){
			this.id = id;
		}	
		
		exp7aSwitch1.prototype.getId = function(){
			return this.id;
		}
		
		exp7aSwitch1.prototype.setFlag = function(flag){
			this.flag = flag;
			//alert("flag1_set="+flag);	
		}
		
		exp7aSwitch1.prototype.getFlag = function(){
			return this.flag;
			//alert("flag1_get="+flag);		
		}
		
		exp7aSwitch1.prototype.setSubstr = function(str){
			this.substr = str;
		}
		
		exp7aSwitch1.prototype.getSubstr = function(){
			return this.substr;
		}
		
		exp7aSwitch1.prototype.setState = function(state){
			this.state = state;
		}
		
		exp7aSwitch1.prototype.getState = function(){
			return this.state;
		}
})(this);