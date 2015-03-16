function exp5Switch(){
		this.id = "";
		this.substr = "";
		this.mainLoad = true;
		this.load1 = true;
		this.load2 = true;
		this.load3 = true;
		this.load4 = true;
		this.load5 = true;
		this.state = "";
		this.flag = true;
		
	};

(function(){
		
		exp5Switch.prototype.setFlag = function(flag){
			this.flag = flag;
		}	
		
		exp5Switch.prototype.getFlag = function(){
			return this.flag;
		}
		
		exp5Switch.prototype.setId = function(id){
			this.id = id;
		}	
		
		exp5Switch.prototype.getId = function(){
			return this.id;
		}
		
		exp5Switch.prototype.setSubstr = function(str){
			this.substr = str;
		}
		
		exp5Switch.prototype.getSubstr = function(){
			return this.substr;
		}
		
		exp5Switch.prototype.setState = function(state){
			this.state = state;
		}
		
		exp5Switch.prototype.getState = function(){
			return this.state;
		}
		
		exp5Switch.prototype.setMainLoad = function(mainLoad){
			this.mainLoad = mainLoad;	
		}
		
		exp5Switch.prototype.getMainLoad = function(){
			return this.mainLoad;		
		}
		
		exp5Switch.prototype.setLoad1 = function(load1){
			this.load1 = load1;	
		}
		
		exp5Switch.prototype.getLoad1 = function(){
			return this.load1;		
		}
		
		exp5Switch.prototype.setLoad2 = function(load2){
			this.load2 = load2;	
		}
		
		exp5Switch.prototype.getLoad2 = function(){
			return this.load2;		
		}
		
		exp5Switch.prototype.setLoad3 = function(load3){
			this.load3 = load3;	
		}
		
		exp5Switch.prototype.getLoad3 = function(){
			return this.load3;		
		}
		
		exp5Switch.prototype.setLoad4 = function(load4){
			this.load4 = load4;	
		}
		
		exp5Switch.prototype.getLoad4 = function(){
			return this.load4;		
		}
		
		exp5Switch.prototype.setLoad5 = function(load5){
			this.load5 = load5;	
		}
		
		exp5Switch.prototype.getLoad5 = function(){
			return this.load5;		
		}
		
})(this);