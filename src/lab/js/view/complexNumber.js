var complexexp = complex = complexexp || {};

(function(complex){

	function ComplexNumber(real,imaginary) {
    	this.real = real;
    	this.imaginary = imaginary;
	}
	
	// var complex = new ComplexNumber(5, 2); 
	// complex.real; //value is 5
	// complex.imaginary; //value is 2
	// console.log("com :"+complex.real+" imaginary :"+complex.imaginary);
	//complex.toString();
	console.log(arguments);
	ComplexNumber.prototype = {

		real: 0,
		imaginary: 0,
		
		add: function() {
		    if(arguments.length == 1)
		          return new ComplexNumber(this.real + arguments[0].real, this.imaginary + arguments[0].imaginary);
		    else
		          return new ComplexNumber(this.real + arguments[0], this.imaginary + arguments[1]);
		},
		sub: function(){
  			  if(arguments.length == 1)
        		  return new ComplexNumber(this.real - arguments[0].real, this.imaginary - arguments[0].imaginary);
    		  else
        		  return new ComplexNumber(this.real - arguments[0], this.imaginary - arguments[1]);	
		},
		mult: function() {
    		 var multiplier = arguments[0];
    		 if(arguments.length != 1)
        			multiplier = new ComplexNumber(arguments[0], arguments[1]);
			 return new ComplexNumber(this.real * multiplier.real - this.imaginary * multiplier.imaginary,                    
             this.real * multiplier.imaginary + this.imaginary * multiplier.real);             
		},
		
		 div : function(){
			   var multiplier = arguments[0];
			    if(arguments.length != 1)
			           multiplier = new ComplexNumber(arguments[0], arguments[1]);
			   
			   var det = (multiplier.real*multiplier.real) + (multiplier.imaginary * multiplier.imaginary);
			   console.log(det);
			   console.log((this.real * multiplier.real +this.imaginary * multiplier.imaginary));
			   return new ComplexNumber((this.real * multiplier.real +this.imaginary * multiplier.imaginary)/det,                    
			      (this.imaginary * multiplier.real - this.real * multiplier.imaginary)/det);
			     },
		
		toString: function() {
 		   return this.real + " + " + this.imaginary + "j";
			}
	}
	
	
	var complexA1 = new ComplexNumber(5, 8),
    
    complexB = new ComplexNumber(3, 4),
    complexSum = complexA1.div(complexB);
    complexD = complexA1.mult(complexB);
    console.log("sum "+complexA1.div(complexB));

	console.log("mut result : "+complexD.toString());
})(complexexp);
