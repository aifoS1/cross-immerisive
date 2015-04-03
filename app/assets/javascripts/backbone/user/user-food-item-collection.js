var UserFoodCollection = Backbone.Collection.extend({
	model: UserFood,
	url: '/daily_servings',
	 initialize: function(){
	 	this.listenTo(this, 'change', this.render)
	 	this.listenTo(SearchView, 'add', this.render)
	 }
})