$(document).ready(function(){
	
	
	function SPSTSwitch(){
		this.id = "";
		this.flag = true;
	}
	
	SPSTSwitch.prototype.setId = function(id){
		this.id = id;
	}	
	
	SPSTSwitch.prototype.getId = function(){
		return this.id;
	}
	
	SPSTSwitch.prototype.setFlag = function(){
		this.flag = flag;
	}
	
	SPSTSwitch.prototype.getFlag = function(){
		return this.flag;	
	}
	
	var SPSTArray = [];
	
	function addElementToArray(ob){
		SPSTArray[SPSTArray.length] = ob;
	}
	
	
});
