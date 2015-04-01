// console.log("daily")

//1cup sugar =200grams



function getData(){
$.ajax({
	url: '/daily_sugar',
	dataType: 'json',
	success: sugarTotal
});
}

var sugarTotal = function(data){
	var totalSugar =0;
	$.each(data, function(i, serving) {
		  totalSugar += parseInt(serving.amount);
		});
	 setSugarContainer([totalSugar])
}

var setSugarContainer = function(sugar){
	var height = 300;
	var width = 150;

	var sugarSVG = d3.select("#sugar-containter")
	 .attr('width', width)
   .attr('height', height)


  var scaleY = d3.scale.linear()
    .domain([0, 50 ])
    .range([0, height - 20])
 

  sugarSVG.selectAll('rect')
    .data(sugar)
    .exit()
    .remove();

    

   sugarSVG.selectAll('rect')
    .data(sugar)
    .enter()
    .append('rect')
  


   // var defs = sugarSVG.append('defs');

   // var pattern = defs.append('pattern')

   // var image =  pattern.append("image")

   //  image
   //   .attr('height', function(d){ return 0 })
   //   .attr('width', width)
   //   .attr('x', function(d, i){ return 0 })
   //   .attr('y', function(d, i){ return height ; })
   //   .attr("xlink:href", 'https://dietitiandrive.files.wordpress.com/2012/02/sugar-cubes.jpg');


   //  pattern.attr('id', 'sugar')
   //   .attr('height', function(d){ return 0 })
   //   .attr('width', width)
   //   .attr('x', function(d, i){ return 0 })
   //   .attr('y', function(d, i){ return height ; });


  //   defs.append("pattern")
  //    .attr("id", "sugar")
  //    .append("pattern")
  //    .append("image")
  //    .attr("fill", "url(https://dietitiandrive.files.wordpress.com/2012/02/sugar-cubes.jpg)");

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

 

  
  //    .data(sugar)
  //   .attr('height', function(d){ return 0 })
  //   .attr('width', width)
  //   .attr('x', function(d, i){ return 0 })
  //   .attr('y', function(d, i){ return height ; })
    
  //   .append("svg:image")
  //   .attr("xlink:href", 'https://dietitiandrive.files.wordpress.com/2012/02/sugar-cubes.jpg')
  //   .attr("width", 500)
  //   .attr("height", 500)
  //   .attr("x", 0)
  //   .attr("y", 0)
// var airSVG = d3.select("#air")
//  .attr('width', width)
//    .attr('height', height);

//   var scaleY = d3.scale.linear()
//     .domain([0, 50 ])
//     .range([0, height - 20])
 

//   airSVG.selectAll('rect')
//     .data(sugar)
//     .exit()
//     .remove();

//   airSVG.selectAll('rect')
//     .data(sugar)
//     .enter()
//     .append('rect');

//   airSVG.selectAll('rect')
//     .data(sugar)
//     .attr('height', function(d){ return height - d })
//     .attr('width', width)
//     .attr('x', function(d, i){ return 0 })
//     .attr('y', function(d, i){ return height; })
//     .style('fill', 'grey')
 
//     .transition()
//       .duration(100)
//       .ease('linear')
//       .attr('y', function(d, i){ return  scaleY(d) - height; })
//       .attr('height', function(d, i){ return  height + scaleY(d) })

}



window.onload = function(){
	 getData()
}