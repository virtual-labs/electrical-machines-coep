$(document).ready(function(){
	
	var flag = true;
	
	$('#myCanvas').click(function(event){
				event = event || window.event;

				var l = $(this).offset().left;
				var r = $(this).offset().top;
    	        x = event.pageX - parseInt(l),
		        y = event.pageY - parseInt(r);
				
				
				if(x>=25 && x<=85 && y>=60 && y<=65){
					canvasFigure1Closure.toggleLine(flag);
					
				}else if(x>=25 && x<=75 && y>= 60 && y<=90){
					canvasFigure1Closure.toggleLine(flag);
					//alert("hi");
					
				}
		    	//alert(x + ' ' + y + ' ' + l + ' ' + r);
		
				flag = !flag;
	});
	
	$('#myCanvas').mouseover(function(event){
	//	$('#myCanvas').css('cursor','pointer');
		
				var l = $(this).offset().left;
				var r = $(this).offset().top;
    	        x = event.pageX - parseInt(l),
		        y = event.pageY - parseInt(r);
				
				//alert(x);
				if(x>=25 && x<=85 && y>=60 && y<=65){
					$('#myCanvas').css('cursor','pointer');
					
				}else if(x>=25 && x<=75 && y>= 60 && y<=90){
					$('#myCanvas').css('cursor','pointer');
					
				}else{
					$('#myCanvas').css('cursor','default');
				}
		    	
	});
	
	
	
	
	
	/*function q(event) {
    			event = event || window.event;

    			var canvas = document.getElementById('canvas'),
		        x = event.pageX - canvas.offsetLeft,
		        y = event.pageY - canvas.offsetTop;
		
		    	alert(x + ' ' + y);
		} */

});
