var mechrotorcanvas = mrc = mechrotorcanvas || {}; 
(function(mrc) {
		var globalObject = {
			x: 30,
			y: 45
		}
		
		mrc.drawPoint = function(globalObject){
			var context = globalObject.context,
			x = globalObject.x,
			y = globalObject.y;
			context.beginPath();
			
			// for inside upper horizontal line
			context.moveTo(x-29,y+25);
			context.lineTo(x-5,y+25);
			// for inside verticle line
			context.lineTo(x-5,y+45);
			// for inside lower horizontal line
			context.lineTo(x-29,y+45);
			// for leftmost lower verticle line
			context.lineTo(x-29,y+90);
			// for lower horizontal line
			context.lineTo(x+30 , y+90);
			// for verticle line
			context.lineTo(x+30 , y);
			// for upper horizontal line
			context.lineTo(x-29 , y);
			// for leftmost upper verticle
			context.lineTo(x-29,y+25);	

			// for slopping lines
			for(var i=0;i<6;i++){
				context.moveTo(x-29,y+90);
				context.lineTo(x-40,y+100);
				x = x + 12;
			}
			
			context.lineWidth = "2" ;
			context.strokeStyle = "black";
			context.stroke () ;		

		}


	mrc.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		mrc.drawPoint(globalObject);

	}
})(mechrotorcanvas);
