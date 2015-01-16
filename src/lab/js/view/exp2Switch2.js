function exp2Switch2(){
		this.id = "";
		this.substr = "";
		this.flag = true;
		this.state = "";
	};

(function(){
		
		exp2Switch2.prototype.setId = function(id){
			this.id = id;
		}	
		
		exp2Switch2.prototype.getId = function(){
			return this.id;
		}
		
		exp2Switch2.prototype.setFlag = function(flag){
			this.flag = flag;
			//alert("flag1_set="+flag);	
		}
		
		exp2Switch2.prototype.getFlag = function(){
			return this.flag;
			//alert("flag1_get="+flag);		
		}
		
		exp2Switch2.prototype.setSubstr = function(str){
			this.substr = str;
		}
		
		exp2Switch2.prototype.getSubstr = function(){
			return this.substr;
		}
		
		exp2Switch2.prototype.setState = function(state){
			this.state = state;
		}
		
		exp2Switch2.prototype.getState = function(){
			return this.state;
		}
})(this);