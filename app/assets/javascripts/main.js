 
$(function () {
  var searchCollection = window.searchCollection 
                       = new SearchCollection;
  
  $('#nutri-search').on("submit", function(e){
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
 });

   var userFoodRouter = window.userFoodRouter = new UserFoodRouter();

    Backbone.history.start();

    Backbone.sync = (function(original) {
      return function(method, model, options) {
      options.beforeSend = function(xhr) {
      xhr.setRequestHeader('X-CSRF-Token', $("meta[name='csrf-token']").attr('content'));
    };
    original(method, model, options);
  };
})(Backbone.sync);
});






