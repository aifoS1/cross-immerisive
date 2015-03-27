
  function callApi(values){
	  $.ajax({
	  	url: '/dashboards',
	  	type: 'post',
	    dataType: 'json',
	    data: values,
	    success: 

	    // renderFoods

	    function(food){ 
	    	var FoodCollection = Backbone.Collection.extend({
          model: food
        })
	      }
     });
	}



function renderFoods(foods){
  $(foods).each(function(index, food){
     $('body').append(renderFood(food))
  })
}

function renderFood(foods){
  // $('body').empty()
	var $li = $("<li>")
	var $h4 = $("<h4>").html(foods["brand_name"])
	var $p= $("<p>").html(foods["item_name"])
	var $sugar= $("<p>").html(foods["nf_sugars"])
	$h4.append($p).append($sugar)

	return $li.append($h4)
    
}


$(function(){
	$('#submit').on("click", function(){
   console.log("click")
	  var query = $('input').val();
	  $('input').val('');

	  values = {
	  	  food: query
	  	}

   callApi(values)
      
 });
})






