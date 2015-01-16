//$(document).ready(function(){
	
/*
(function(){
 	var id = "";
	var flag = true;
	var SPSTArray = [];
	var SPSTSwitch = switchs =  function (){};
	
	var setId = function(id){
			id = id;
	}
	
	var getId = function(){
			return id;
	}
	
	var setFlag = function(f){
		flag = f;		
	}
	
	var getFlag = function(){
			return flag;
				
	}
	var  getSPSTArray= function(){
		return SPSTArray; 	
	}	
	
	var addElementToArray = function(){
		alert("ele");
		SPSTArray.push(switchs);
	}
	
	SPSTSwitch.setId = setId;
	SPSTSwitch.getId = getId;
	SPSTSwitch.setFlag = setFlag;
	SPSTSwitch.getFlag = getFlag;
	SPSTSwitch.addElementToArray = addElementToArray;
	SPSTSwitch.getSPSTArray = getSPSTArray;
	
})(this);	 */

function SPSTSwitch(){
		this.id = "";
		this.substr = "";
		this.flag = true;
		this.state = "";
	};

(function(){
		
		SPSTSwitch.prototype.setId = function(id){
			this.id = id;
		}	
		
		SPSTSwitch.prototype.getId = function(){
			return this.id;
		}
		
		SPSTSwitch.prototype.setFlag = function(flag){
			this.flag = flag;
		}
		
		SPSTSwitch.prototype.getFlag = function(){
			return this.flag;	
		}
		
		SPSTSwitch.prototype.setSubstr = function(str){
			this.substr = str;
		}
		
		SPSTSwitch.prototype.getSubstr = function(){
			return this.substr;
		}
		
		SPSTSwitch.prototype.setState = function(state){
			this.state = state;
		}
		
		SPSTSwitch.prototype.getState = function(){
			return this.state;
		}
})(this);