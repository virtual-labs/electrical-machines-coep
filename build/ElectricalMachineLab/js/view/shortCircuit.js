var shortcircuitcanvas = scc = shortcircuitcanvas ||{}; 
(function(scc) {
	var globalObject = {
		x : 40,
		y : 40
	}

	scc.drawPoint = function() {
		var context = globalObject.context, x = globalObject.x, y = globalObject.y;
		context.beginPath();

		// for upper horizontal line
		context.moveTo(x - 5, y - 30);
		context.lineTo(x + 55, y - 30);

		context.moveTo(x - 5, y - 30);
		context.arc(x - 5, y - 30, 3, 0, 2 * Math.PI, false);
		// initial circle point

		// for middle horizontal line
		context.moveTo(x - 5, y + 50);
		context.lineTo(x + 55, y + 50);
		context.moveTo(x - 5, y + 50);
		context.arc(x - 5, y + 50, 3, 0, 2 * Math.PI, false);
		// initial circle point

		//	context.moveTo(x , y+115);
		//	context.moveTo(x , y+115);

		x = x + 50;

		// for verticle line
		context.moveTo(x + 5, y + 115);
		context.lineTo(x + 5, y + 115 - 146);
		//bottom horizontal liones

		x = x + 75;

		// for lower horizontal line
		context.moveTo(x - 70, y + 115);
		context.lineTo(x - 70, y + 130);
		context.lineTo(x - 130, y + 130);
		context.arc(x - 130, y + 130, 3, 0, 2 * Math.PI, false);
		//last line and circle
		//context.fillText("1 &#216; R-L Load" ,  x-110, y+135);
		context.lineWidth = "2";
		context.strokeStyle = "black";
		context.stroke();

	}

	scc.init = function(id) {
		globalObject.canvas = document.getElementById(id);
		globalObject.context = globalObject.canvas.getContext("2d");
		scc.drawPoint();

	}
})(shortcircuitcanvas);
