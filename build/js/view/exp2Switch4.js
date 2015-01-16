function exp2Switch4(){
		this.id = "";
		this.substr = "";
		this.flag = true;
		this.state = "";
	};

(function(){
		
		exp2Switch4.prototype.setId = function(id){
			this.id = id;
		}	
		
		exp2Switch4.prototype.getId = function(){
			return this.id;
		}
		
		exp2Switch4.prototype.setFlag = function(flag){
			this.flag = flag;
			//alert("flag1_set="+flag);	
		}
		
		exp2Switch4.prototype.getFlag = function(){
			return this.flag;
			//alert("flag1_get="+flag);		
		}
		
		exp2Switch4.prototype.setSubstr = function(str){
			this.substr = str;
		}
		
		exp2Switch4.prototype.getSubstr = function(){
			return this.substr;
		}
		
		exp2Switch4.prototype.setState = function(state){
			this.state = state;
		}
		
		exp2Switch4.prototype.getState = function(){
			return this.state;
		}
})(this);