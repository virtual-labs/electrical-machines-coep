function exp3Switch(){
		this.id = "";
		this.substr = "";
		this.flag = true;
		this.state = "";
	};

(function(){
		
		exp3Switch.prototype.setId = function(id){
			this.id = id;
		}	
		
		exp3Switch.prototype.getId = function(){
			return this.id;
		}
		
		exp3Switch.prototype.setFlag = function(flag){
			this.flag = flag;
			//alert("flag1_set="+flag);	
		}
		
		exp3Switch.prototype.getFlag = function(){
			return this.flag;
			//alert("flag1_get="+flag);		
		}
		
		exp3Switch.prototype.setSubstr = function(str){
			this.substr = str;
		}
		
		exp3Switch.prototype.getSubstr = function(){
			return this.substr;
		}
		
		exp3Switch.prototype.setState = function(state){
			this.state = state;
		}
		
		exp3Switch.prototype.getState = function(){
			return this.state;
		}
})(this);