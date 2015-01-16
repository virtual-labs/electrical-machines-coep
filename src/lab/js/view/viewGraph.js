(function(){	
	this.viewGraph = Backbone.View.extend({
		generateGraph : function(selectedId,ExpId){
			graph.graphData(selectedId,ExpId);
		}
	});
	
})(this);
