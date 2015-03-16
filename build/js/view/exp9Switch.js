function exp9Switch(){
		this.id = "";
		this.substr = "";
		this.DpstFlag = true;
		this.TpstFlag = true;
		this.MainLoadFlag = true;
	    this.Load1Flag = true;
		this.Load2Flag = true;
	    this.Load3Flag = true;
		this.Load4Flag = true;
	    this.Load5Flag = true;
		
		this.state = "";
	};

(function(){
		
		exp9Switch.prototype.setId = function(id){
			this.id = id;
		}	
		
		exp9Switch.prototype.getId = function(){
			return this.id;
		}
		
		exp9Switch.prototype.setDpstFlag = function(DpstFlag){
			this.DpstFlag = DpstFlag;
			//alert("flag1_set="+flag);	
		}
		
		exp9Switch.prototype.getDpstFlag = function(){
			return this.DpstFlag;
			//alert("flag1_get="+flag);		
		}
		
		exp9Switch.prototype.setTpstFlag = function(TpstFlag){
			this.TpstFlag = TpstFlag;
			//alert("flag1_set="+flag);	
		}
		
		exp9Switch.prototype.getTpstFlag = function(){
			return this.TpstFlag;
			//alert("flag1_get="+flag);		
		}
		
		
		exp9Switch.prototype.setMainLoadFlag = function(MainLoad){
			this.MainLoad = MainLoad;
			//alert("flag1_set="+flag);	
		}
		
		exp9Switch.prototype.getMainLoadFlag = function(){
			return this.MainLoad;
			//alert("flag1_get="+flag);		
		}
		
		exp9Switch.prototype.setLoad1Flag = function(Load1){
			this.Load1 = Load1;
			//alert("flag1_set="+flag);	
		}
		
		exp9Switch.prototype.getLoad1Flag = function(){
			return this.Load1;
			//alert("flag1_get="+flag);		
		}
		
		exp9Switch.prototype.setLoad2Flag = function(Load2){
			this.Load2 = Load2;
			//alert("flag1_set="+flag);	
		}
		
		exp9Switch.prototype.getLoad2Flag = function(){
			return this.Load2;
			//alert("flag1_get="+flag);			
		}
		
		exp9Switch.prototype.setLoad3Flag = function(Load3){
			this.Load3 = Load3;
			//alert("flag1_set="+flag);	
		}
		
		exp9Switch.prototype.getLoad3Flag = function(){
			return this.Load3;
			//alert("flag1_get="+flag);		
		}
 		
		exp9Switch.prototype.setLoad4Flag = function(Load4){
			this.Load4 = Load4;
			//alert("flag1_set="+flag);	
		}
		
		exp9Switch.prototype.getLoad4Flag = function(){
			return this.Load4;
			//alert("flag1_get="+flag);		
		}
		
		exp9Switch.prototype.setLoad5Flag = function(Load5){
			this.Load5 = Load5;
			//alert("flag1_set="+flag);	
		}
		
		exp9Switch.prototype.getLoad5Flag= function(){
			return this.Load5;
			//alert("flag1_get="+flag);		
		}
		
		exp9Switch.prototype.setSubstr = function(str){
			this.substr = str;
		}
		
		exp9Switch.prototype.getSubstr = function(){
			return this.substr;
		}
		
		exp9Switch.prototype.setState = function(state){
			this.state = state;
		}
		
		exp9Switch.prototype.getState = function(){
			return this.state;
		}
})(this);