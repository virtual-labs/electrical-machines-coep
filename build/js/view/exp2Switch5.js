function exp2Switch5(){
		this.id = "";
		this.substr = "";
		this.resFlag5 = true;
		this.resFlag6 = true;
		this.resFlag7 = true;
		this.resFlag8 = true;
	    this.resFlag9 = true;
		
		this.state = "";
	};

(function(){
		
		exp2Switch5.prototype.setId = function(id){
			this.id = id;
		}	
		
		exp2Switch5.prototype.getId = function(){
			return this.id;
		}
		
		exp2Switch5.prototype.setFlag1 = function(resFlag5){
			this.resFlag5 = resFlag5;
			//alert("flag1_set="+flag);	
		}
		
		exp2Switch5.prototype.getFlag1 = function(){
			return this.resFlag5;
			//alert("flag1_get="+flag);		
		}
		
		exp2Switch5.prototype.setFlag2= function(resFlag6){
			//alert("hhh");
			this.resFlag6 = resFlag6;
			//alert("flag1_set="+flag);	
		}
		
		exp2Switch5.prototype.getFlag2 = function(){
			return this.resFlag6;
			//alert("flag1_get="+flag);		
		}
		
		exp2Switch5.prototype.setFlag3= function(resFlag7){
			//alert("hhh");
			this.resFlag7 = resFlag7;
			//alert("flag1_set="+flag);	
		}
		
		exp2Switch5.prototype.getFlag3 = function(){
			return this.resFlag7;
			//alert("flag1_get="+flag);		
		}
		
		exp2Switch5.prototype.setFlag4= function(resFlag8){
			//alert("hhh");
			this.resFlag8 = resFlag8;
			//alert("flag1_set="+flag);	
		}
		
		exp2Switch5.prototype.getFlag4 = function(){
			return this.resFlag8;
			//alert("flag1_get="+flag);		
		}
		
		exp2Switch5.prototype.setFlag5= function(resFlag9){
			//alert("hhh");
			this.resFlag9 = resFlag9;
			//alert("flag1_set="+flag);	
		}
		
		exp2Switch5.prototype.getFlag5 = function(){
			return this.resFlag9;
			//alert("flag1_get="+flag);		
		}
// 		
// 		
		exp2Switch5.prototype.setSubstr = function(str){
			this.substr = str;
		}
		
		exp2Switch5.prototype.getSubstr = function(){
			return this.substr;
		}
		
		exp2Switch5.prototype.setState = function(state){
			this.state = state;
		}
		
		exp2Switch5.prototype.getState = function(){
			return this.state;
		}
})(this);