
 //  function callApi(values){
	//   $.ajax({
	//   	url: '/dashboards',
	//   	type: 'post',
	//     dataType: 'json',
	//     data: values,
	//     success: renderFoods
 //     });
	// }


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
    	  view.render();    
    	}
   });

   // callApi(values)
      
 });
});






