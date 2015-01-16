function exp3Switch1(){
		this.id = "";
		this.substr = "";
		this.flag = true;
		this.state = "";
	};

(function(){
		
		exp3Switch1.prototype.setId = function(id){
			this.id = id;
			
		}	
		
		exp3Switch1.prototype.getId = function(){
			return this.id;
		}
		
		exp3Switch1.prototype.setFlag = function(flag){
			this.flag = flag;
			//alert("flag2_set="+flag);
		}
		
		exp3Switch1.prototype.getFlag = function(){
			return this.flag;
			//alert("flag2_get="+flag);	
		}
		
		exp3Switch1.prototype.setSubstr = function(str){
			this.substr = str;
		}
		
		exp3Switch1.prototype.getSubstr = function(){
			return this.substr;
		}
		
		exp3Switch1.prototype.setState = function(state){
			this.state = state;
		}
		
		exp3Switch1.prototype.getState = function(){
			return this.state;
		}
})(this);