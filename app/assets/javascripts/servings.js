// console.log("daily")

//1cup sugar =200grams

var sugarTotal = function(data){
	var totalSugar = 0;
	
	$.each(data, function(i, serving) {
		totalSugar += parseInt(serving.amount);
	});

	var cupCount = parseInt(1 + Math.max(totalSugar - 1, 0) / 200);

	for (var i = 0; i < cupCount; i++) {
		if (i < cupCount - 1) {
			var fillLevel = 200;
		} else {
			var fillLevel = totalSugar % 200;
		}
		setSugarContainer([fillLevel], i);
	}
}

var setSugarContainer = function(sugar, cupIndex){
	var height = $('.cup').height();
	var width = $('.cup').width();

		var sugarSVG = d3.select("#sugar-containter-" + cupIndex)
		  .attr('width', width)
	    .attr('height', height)

	  var scaleY = d3.scale.linear()
	    .domain([0, 200])
	    .range([ height * 0.15, height * 0.72])
	 
	  sugarSVG.selectAll('rect')
	    .data(sugar)
	    .exit()
	    .remove();

	  sugarSVG.selectAll('rect')
	    .data(sugar)
	    .enter()
	    .append('rect')

	  sugarSVG.selectAll('rect')
	    .data(sugar)
	    .attr('height', function(d){ return 0 })
	    .attr('width', width)
	    .attr('x', function(d, i){ return 0 })
	    .attr('y', function(d, i){ return height ; })
	    .attr('fill', 'blue')
	    .transition()
	      .duration(1000)
	      .ease('bounce')
	      .attr('height', function(d, i){ return scaleY(d) })
	      .attr('y',function(d, i){ return  height - scaleY(d); })
}

function getData(){
	var $sugar = $('.sugar-show');

	if ($sugar.attr('id') == 'daily') {
		$.ajax({
			url: '/daily_sugar',
			dataType: 'json',
			success: sugarTotal
		});
	} else {
		$.ajax({
			url: '/weekly_sugar',
			dataType: 'json',
			success: sugarTotal
		});
	}
}

window.onload = function(){
	 getData()
}