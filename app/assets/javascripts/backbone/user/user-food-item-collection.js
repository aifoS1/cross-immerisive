var UserFoodCollection = Backbone.Collection.extend({
	model: UserFood,
	url: '/daily_servings',
    initialize: function () {
		this.fetch({
	      	async: false
	 	})
   }
})
