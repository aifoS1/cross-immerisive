function renderUserFoodCollection(){
   var userFoodCollection = new UserFoodCollection;
   userFoodCollection.fetch({
    success: function(){ 
      var view = new UserFoodCollectionView({
      collection: userFoodCollection
    })
      $(".user-foods").empty();
      view.render();  
    }
   });
}


$(function(){
 var searchCollection = new SearchCollection;
	$('#submit').on("click", function(){
	  var query = $('input').val();
	  $('input').val('');

	  values = {
	  	  food: query
	  	}
  
   searchCollection.fetch({
   	data: values,
    success: function(data){ 
    	  var view = new SearchCollectionView({
    	  	collection: searchCollection
    	  });
    	  $("#search-results-container").empty();
    	  view.render();    
    	}
   });
   // callApi(values)
      
 });
   renderUserFoodCollection()
});






