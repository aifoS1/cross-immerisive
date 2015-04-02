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
	$('form').on("submit", function(e){
    e.preventDefault();
	  var query = $('input').val();
	  $('input[type="text"]').val('');

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






