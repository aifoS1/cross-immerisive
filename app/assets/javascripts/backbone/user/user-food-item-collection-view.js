var UserFoodCollectionView = Backbone.View.extend({
  tagName: 'ul',
  className: 'user-foods',
  initialize: function(){
    this.render();
    this.listenTo(this.collection, 'add', this.render)
    this.listenTo(this.collection, "remove", this.render);
  },
  render: function(){
    this.$el.empty();
    var thisCollView = this;
  //when added favorite foods sub models for funtion that separates favoriteview. that function would be written in the foods collections after collection
    this.collection.models.forEach(function(model){
      var newView = new UserFoodView({model: model});
      thisCollView.$el.append(newView.$el);
    })

    // $('#user-choices-container').append(this.$el)
  }

})
	
