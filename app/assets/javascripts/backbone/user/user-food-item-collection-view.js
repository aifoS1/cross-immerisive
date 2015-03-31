var UserFoodCollectionView = Backbone.View.extend({
  tagName: 'ul',
  className: 'user-foods',
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.empty();
    var thisCollView = this;

    this.collection.models.forEach(function(model){
    	
      var newView = new UserFoodView({model: model});

      thisCollView.$el.append(newView.$el);
    })

    $('#user-choices-container').append(this.$el);
  }
})
	
