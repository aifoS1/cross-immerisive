
var sugarTotal = function(data){
	var totalSugar = 0;
	
	$.each(data, function(i, serving) {
		totalSugar += parseInt(serving.amount);
	});

	var cupCount = parseInt(1 + Math.max(totalSugar - 1, 0) / 200);

	$("#total").html("Total: " + totalSugar +"gm.")

	for (var i = 0; i < cupCount; i++) {
		// if cup isn't the last cup fill it all the way
		if (i < cupCount - 1) {
			var fillLevel = 200;
		} else {
			//fill up the next cup with the remainder
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
	.attr('fill', '#DCDCDC')
	.transition()
	.duration(1000)
	.ease('bounce')
	.attr('height', function(d, i){ return scaleY(d) })
	.attr('y',function(d, i){ return  height - scaleY(d); })

	      //convert total sugar to pixels to append image
}

function getData(){
	$.ajax({
		url: '/daily_sugar',
		dataType: 'json',
		success: sugarTotal
	});

	$( "#sugar-btns div ").on("click", function(){
		if (this.id == 'daily') {
			$(this).addClass("selected")
			$("#weekly").removeClass("selected")	
			$.ajax({
				url: '/daily_sugar',
				dataType: 'json',
				success: sugarTotal
			});
		} else {
			$(this).addClass("selected")
			$("#daily").removeClass("selected")
			$.ajax({
				url: '/weekly_sugar',
				dataType: 'json',
				success: sugarTotal
			});
		}
	});
}

function totalCups(){
		var cupCount = Math.max(parseInt(1 + Math.max(totalSugar - 1, 0) / 200));
}

window.onload = function(){
	  getData()
}