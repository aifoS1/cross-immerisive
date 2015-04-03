var UserFoodCollection = Backbone.Collection.extend({
	model: UserFood,
	url: '/daily_servings',
    initialize: function () {
		this.fetch({
	      	async: false
	 	})
   }
})


// this.collection.fetch({
//     success: function(){ 
//       var view = new UserFoodCollectionView({
//       collection: this.collection
//     })
//       $(".user-foods").empty();
//      // $("#food-diary").nextAll().empty();
//       view.render();  
//     }.bind(this)
//    });
//   }